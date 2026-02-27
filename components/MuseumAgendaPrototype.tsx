"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  getSessionBySlug,
  getSessionSlug,
  getSessionTimeRange,
  hallOrder,
  halls,
  sessions,
  type Session,
  timeSlots,
} from "@/lib/agenda-data";
const sessionTypeStyle: Record<Session["sessionType"], string> = {
  Keynote: "border-[#d4a017] bg-[#d4a017]/15 text-[#f7d774]",
  Panel: "border-[#7a6df0] bg-[#7a6df0]/15 text-[#c8c1ff]",
  "Full Talk": "border-[#2f9e44] bg-[#2f9e44]/15 text-[#9be3aa]",
  "Lightning Talk": "border-[#3f8cff] bg-[#3f8cff]/15 text-[#9ec7ff]",
  None: "border-transparent bg-transparent text-transparent",
};

function SpeakerBio({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const bioRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const bioElement = bioRef.current;
    if (!bioElement) return;

    const updateOverflowState = () => {
      const previousDisplay = bioElement.style.display;
      const previousOverflow = bioElement.style.overflow;
      const previousLineClamp = bioElement.style.webkitLineClamp;
      const previousBoxOrient = bioElement.style.webkitBoxOrient;

      bioElement.style.display = "-webkit-box";
      bioElement.style.overflow = "hidden";
      bioElement.style.webkitLineClamp = "5";
      bioElement.style.webkitBoxOrient = "vertical";

      setShowToggle(bioElement.scrollHeight > bioElement.clientHeight + 1);

      bioElement.style.display = previousDisplay;
      bioElement.style.overflow = previousOverflow;
      bioElement.style.webkitLineClamp = previousLineClamp;
      bioElement.style.webkitBoxOrient = previousBoxOrient;
    };

    updateOverflowState();
    window.addEventListener("resize", updateOverflowState);
    return () => window.removeEventListener("resize", updateOverflowState);
  }, [bio]);

  return (
    <div className="mt-2 w-full pr-14">
      <p
        ref={bioRef}
        className="whitespace-normal break-normal text-justify hyphens-auto text-sm leading-relaxed italic text-muted-foreground/80 [overflow-wrap:normal]"
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
              }
        }
      >
        “{bio}”
      </p>
      {showToggle ? (
        <div className="mt-1 text-sm leading-relaxed italic text-muted-foreground/80">
          <button
            type="button"
            onClick={() => setExpanded((previous) => !previous)}
            className="inline-flex items-center gap-1 rounded-sm border-0 bg-transparent p-0 text-accent/90 not-italic transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50"
          >
            <span>{expanded ? "Show Less" : "Show More"}</span>
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function MuseumAgendaPrototype() {
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [shareStatus, setShareStatus] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!activeSession) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSession]);

  useEffect(() => {
    setShareStatus("");
  }, [activeSession?.id]);

  useEffect(() => {
    if (!isMounted) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("session");
    if (!slug) return;

    const targetSession = getSessionBySlug(slug);
    if (targetSession) {
      setActiveSession(targetSession);
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const url = new URL(window.location.href);
    if (activeSession) {
      url.searchParams.set("session", getSessionSlug(activeSession));
      url.hash = "agenda";
    } else {
      url.searchParams.delete("session");
    }

    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [activeSession, isMounted]);

  const getSpeakerLabel = (session: Session) => {
    const leadSpeaker = session.speakers[0];
    const leadLabel = `${leadSpeaker.name}, ${leadSpeaker.title} @ ${leadSpeaker.company}`;
    if (session.speakers.length === 1) return leadLabel;
    return `${leadLabel} +${session.speakers.length - 1}`;
  };

  const splitParagraphs = (text: string) =>
    text
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

  const handleShare = async () => {
    if (!activeSession || !isMounted) return;

    const currentShareUrl = `${window.location.origin}/?session=${encodeURIComponent(getSessionSlug(activeSession))}#agenda`;
    const copyWithClipboard = async () => {
      if (!window.isSecureContext || !navigator.clipboard?.writeText) return false;
      try {
        await navigator.clipboard.writeText(currentShareUrl);
        return true;
      } catch {
        return false;
      }
    };

    const copyWithExecCommand = () => {
      const textarea = document.createElement("textarea");
      textarea.value = currentShareUrl;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      return successful;
    };

    const copied = (await copyWithClipboard()) || copyWithExecCommand();
    if (copied) {
      setShareStatus("Link copied.");
    } else {
      setShareStatus("Auto-copy blocked.");
    }
  };

  return (
    <section>
      <div className="overflow-hidden rounded-md border border-accent/35">
        <div className="grid grid-cols-[100px_repeat(3,minmax(0,1fr))] border-b border-accent/20 bg-primary/45 font-mono text-xs">
          <div className="border-r border-accent/20 px-3 py-2 text-accent">
            Time Range
          </div>
          {hallOrder.map((hallId) => (
            <div
              key={hallId}
              className="border-r border-accent/20 px-3 py-2 text-center text-accent last:border-r-0"
            >
              {halls[hallId].name}
            </div>
          ))}
        </div>

        {timeSlots.map((slot) => (
          <div
            key={`${slot.start}-${slot.end}`}
            className="grid grid-cols-[100px_repeat(3,minmax(0,1fr))] border-b border-accent/10 last:border-b-0"
          >
            <div className="border-r border-accent/10 px-3 py-3">
              <p className="whitespace-nowrap text-sm font-semibold leading-tight">{slot.start}</p>
              <p className="whitespace-nowrap text-sm font-semibold leading-tight">-</p>
              <p className="whitespace-nowrap text-sm font-semibold leading-tight">{slot.end}</p>
            </div>
            {slot.key === "07:30" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-sm font-semibold leading-tight">📋 Check-in & Breakfast</p>
              </div>
            ) : slot.key === "09:30" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-sm font-semibold leading-tight">
                  Open Remarks & Keynote Presentations
                </p>
              </div>
            ) : slot.key === "12:15" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-sm font-semibold leading-tight">🥗 Lunch</p>
              </div>
            ) : slot.key === "16:00" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-sm font-semibold leading-tight">
                  Keynote Panel & Close Remarks
                </p>
              </div>
            ) : slot.key === "17:30" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-center text-sm font-semibold leading-tight">
                  🍹 Happy Hour & Networking
                  <br />
                  <span className="font-normal italic">(Sponsored by Databricks)</span>
                </p>
              </div>
            ) : (
              hallOrder.map((hallId) => {
                const cellSessions = sessions.filter(
                  (item) => item.start === slot.key && item.hall === hallId,
                );

                if (cellSessions.length === 0) {
                  return (
                    <div
                      key={`${slot.start}-${slot.end}-${hallId}`}
                      className="border-r border-accent/10 bg-black/10 px-2 py-2 last:border-r-0"
                    />
                  );
                }

                return (
                  <div
                    key={`${slot.start}-${slot.end}-${hallId}`}
                    className="flex border-r border-accent/10 bg-black/10 p-1 last:border-r-0"
                  >
                    {cellSessions.length === 1 ? (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveSession(cellSessions[0]);
                        }}
                        className={`flex h-full w-full cursor-pointer flex-col justify-start rounded border border-accent/15 px-2 py-2 text-left transition-all ${
                          activeSession?.id === cellSessions[0].id
                            ? "bg-accent/15 shadow-[inset_0_0_0_1px_rgba(239,214,72,0.45)]"
                            : "bg-black/15 hover:bg-accent/25 hover:shadow-[inset_0_0_0_1px_rgba(239,214,72,0.35)]"
                        }`}
                      >
                        <p className="text-sm font-semibold leading-tight underline decoration-accent/70 underline-offset-2">
                          {cellSessions[0].title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {getSpeakerLabel(cellSessions[0])}
                        </p>
                        <p className="text-xs text-accent">
                          {getSessionTimeRange(cellSessions[0])}
                        </p>
                      </button>
                    ) : (
                      <div className="w-full space-y-1">
                        {cellSessions.map((session) => {
                          const isSelected = activeSession?.id === session.id;
                          return (
                            <button
                              type="button"
                              key={session.id}
                              onClick={(event) => {
                                event.stopPropagation();
                                setActiveSession(session);
                              }}
                              className={`flex w-full cursor-pointer flex-col justify-start rounded border border-accent/15 px-2 py-2 text-left transition-all ${
                                isSelected
                                  ? "bg-accent/15 shadow-[inset_0_0_0_1px_rgba(239,214,72,0.45)]"
                                  : "bg-black/15 hover:bg-accent/25 hover:shadow-[inset_0_0_0_1px_rgba(239,214,72,0.35)]"
                              }`}
                            >
                              <p className="text-sm font-semibold leading-tight underline decoration-accent/70 underline-offset-2">
                                {session.title}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {getSpeakerLabel(session)}
                              </p>
                              <p className="text-xs text-accent">
                                {getSessionTimeRange(session)}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        ))}
      </div>

      {isMounted && activeSession
        ? createPortal(
            <div
              className="fixed inset-0 z-[10001] bg-black/75"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setActiveSession(null);
                }
              }}
            >
              <div className="absolute inset-x-0 top-[8vh] px-4">
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="session-detail-title"
                  className="mx-auto w-full max-w-4xl max-h-[84vh] overflow-y-auto rounded-md border border-accent/40 bg-primary p-5 text-primary-foreground shadow-2xl"
                  onMouseDown={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <p
                      id="session-detail-title"
                      className="text-lg font-semibold leading-tight"
                    >
                      {activeSession.title}
                    </p>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onMouseDown={(event) => event.stopPropagation()}
                          onClick={handleShare}
                          className="rounded border border-accent/40 px-2 py-1 font-mono text-xs text-accent hover:bg-accent/15"
                        >
                          SHARE
                        </button>
                        <button
                          type="button"
                          onMouseDown={(event) => event.stopPropagation()}
                          onClick={() => setActiveSession(null)}
                          className="rounded border border-accent/40 px-2 py-1 font-mono text-xs text-accent hover:bg-accent/15"
                        >
                          CLOSE
                        </button>
                      </div>
                      {shareStatus ? (
                        <p className="max-w-xs break-all font-mono text-[11px] text-accent/90">
                          {shareStatus}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-mono text-accent">TIME</span>:{" "}
                      {getSessionTimeRange(activeSession)}
                    </p>
                    <p>
                      <span className="font-mono text-accent">LOCATION</span>:{" "}
                      {halls[activeSession.hall].name}
                    </p>
                    <p>
                      <span className="font-mono text-accent">SPEAKERS</span>
                    </p>
                    <div className="space-y-3">
                      {activeSession.speakers.map((speaker) => (
                        <div
                          key={`${activeSession.id}-${speaker.name}`}
                          className="border-l-2 border-accent/30 pl-3 py-2"
                        >
                          <div className="flex items-start gap-3">
                            {speaker.avatarUrl ? (
                              <img
                                src={speaker.avatarUrl}
                                alt={`${speaker.name} avatar`}
                                className="h-20 w-20 rounded-full border border-accent/30 object-cover"
                              />
                            ) : (
                              <div className="h-20 w-20 rounded-full border border-accent/30 bg-black/20" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="flex items-center gap-1">
                                  <p className="min-w-0 font-semibold text-primary-foreground">
                                    {speaker.name}
                                  </p>
                                  <a
                                    href={speaker.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-muted-foreground hover:text-accent"
                                    aria-label={`${speaker.name} on LinkedIn`}
                                    title={`${speaker.name} on LinkedIn`}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      className="h-4 w-4"
                                      fill="currentColor"
                                    >
                                      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.339 17.5v-7.02H5.675v7.02h2.664ZM7.007 9.417c.92 0 1.49-.61 1.49-1.371-.017-.779-.57-1.37-1.472-1.37-.903 0-1.492.591-1.492 1.37 0 .761.57 1.371 1.456 1.371h.018ZM18.5 17.5v-4.023c0-2.154-1.149-3.157-2.68-3.157-1.235 0-1.787.687-2.095 1.169v-1.01h-2.663c.035.671 0 7.02 0 7.02h2.663v-3.92c0-.21.016-.42.077-.569.168-.42.551-.856 1.194-.856.842 0 1.178.645 1.178 1.591V17.5H18.5Z" />
                                    </svg>
                                  </a>
                                </div>
                                <p className="font-mono text-sm text-muted-foreground">
                                  {speaker.title} @ {speaker.company}
                                </p>
                                <SpeakerBio bio={speaker.bio} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full space-y-3 whitespace-normal break-normal text-justify hyphens-auto leading-relaxed text-primary-foreground [overflow-wrap:normal]">
                      <p>
                        <span className="font-mono text-accent">ABSTRACT</span>:
                      </p>
                      {splitParagraphs(activeSession.abstract).map((paragraph, index) => (
                        <p key={`${activeSession.id}-abstract-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                    {activeSession.sessionType !== "None" ? (
                      <div
                        className={`mt-3 inline-block rounded border px-2 py-1 text-xs font-semibold ${sessionTypeStyle[activeSession.sessionType]}`}
                      >
                        {activeSession.sessionType}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
