"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type HallId = "hall1" | "hall2" | "hall3";

interface Speaker {
  name: string;
  title: string;
  company: string;
  linkedin: string;
  avatarUrl: string;
  bio: string;
}

interface Session {
  id: string;
  start: string;
  end: string;
  hall: HallId;
  title: string;
  speakers: Speaker[];
  abstract: string;
}

const halls: Record<HallId, { name: string; color: string; roomLabel: string }> = {
  hall1: {
    name: "Goldman Hall",
    roomLabel: "North Gallery",
    color: "border-[#e67e22] bg-[#e67e22]/15 text-[#f6ba7f]",
  },
  hall2: {
    name: "Swig Gallery",
    roomLabel: "Central Atrium",
    color: "border-[#3f8cff] bg-[#3f8cff]/15 text-[#9ec7ff]",
  },
  hall3: {
    name: "Yud Gallery",
    roomLabel: "South Studio",
    color: "border-[#4caf76] bg-[#4caf76]/15 text-[#9ddfb5]",
  },
};

const timeSlots = [
  { key: "07:30", start: "8:30 AM", end: "9:30 AM" },
  { key: "09:00", start: "9:30 AM", end: "9:45 AM" },
  { key: "09:45", start: "9:45 AM", end: "10:15 AM" },
  { key: "10:30", start: "10:30 AM", end: "11:15 AM" },
  { key: "11:30", start: "11:30 AM", end: "12:15 PM" },
  { key: "12:15", start: "12:15 PM", end: "2:00 PM" },
  { key: "13:00", start: "2:00 PM", end: "2:45 PM" },
  { key: "15:00", start: "3:00 PM", end: "3:45 PM" },
  { key: "16:00", start: "4:00 PM", end: "4:45 PM" },
  { key: "16:45", start: "4:45 PM", end: "5:00 PM" },
  { key: "17:30", start: "5:00 PM", end: "7:00 PM" },
];

const sessions: Session[] = [
  {
    id: "s4",
    start: "09:00",
    end: "10:00",
    hall: "hall1",
    title: "Streaming in Production",
    speakers: [
      {
        name: "Speaker E",
        title: "Senior Engineer",
        company: "EventMesh",
        linkedin: "https://www.linkedin.com",
        avatarUrl: "https://i.pravatar.cc/80?img=17",
        bio: "Operates streaming systems with strict SLA targets. Specializes in observability and incident response.",
      },
    ],
    abstract:
      "How teams run high-throughput stream pipelines with strong SLAs, quality checks, and incident playbooks.",
  },
  {
    id: "s5",
    start: "10:30",
    end: "11:30",
    hall: "hall2",
    title: "Governance Without Friction",
    speakers: [
      {
        name: "Speaker F",
        title: "Data Governance Lead",
        company: "CityStack",
        linkedin: "https://www.linkedin.com",
        avatarUrl: "https://i.pravatar.cc/80?img=60",
        bio: "Builds governance programs that teams actually adopt. Balances policy control with developer velocity.",
      },
    ],
    abstract:
      "Policy controls that scale with teams while keeping developer UX clean, with examples from real rollout cycles.",
  },
  {
    id: "s6",
    start: "13:00",
    end: "14:00",
    hall: "hall3",
    title: "Warehouse Cost Controls",
    speakers: [
      {
        name: "Speaker G",
        title: "Director of Analytics Eng",
        company: "WarehouseLab",
        linkedin: "https://www.linkedin.com",
        avatarUrl: "https://i.pravatar.cc/80?img=27",
        bio: "Optimizes warehouse workloads for cost and performance. Helps teams ship analytics without budget surprises.",
      },
    ],
    abstract:
      "Tactics to reduce compute spend through workload shaping, storage tiers, and cost-aware modeling practices.",
  },
  {
    id: "s7",
    start: "15:00",
    end: "16:00",
    hall: "hall1",
    title: "Lakehouse Practical Playbook",
    speakers: [
      {
        name: "Speaker H",
        title: "Platform Architect",
        company: "Delta Harbor",
        linkedin: "https://www.linkedin.com",
        avatarUrl: "https://i.pravatar.cc/80?img=8",
        bio: "Guides lakehouse migrations under real delivery pressure. Strong focus on maintainability and data quality.",
      },
    ],
    abstract:
      "A migration checklist and reference architecture for teams adopting lakehouse patterns under real constraints.",
  },
];

const hallOrder: HallId[] = ["hall1", "hall2", "hall3"];

export function MuseumAgendaPrototype() {
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [isMounted, setIsMounted] = useState(false);

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

  const getSpeakerLabel = (session: Session) => {
    if (session.speakers.length === 1) return session.speakers[0].name;
    return `${session.speakers[0].name} +${session.speakers.length - 1}`;
  };

  const getSessionTimeRange = (session: Session) => {
    const matchingSlot = timeSlots.find((slot) => slot.key === session.start);
    if (!matchingSlot) {
      return `${session.start} - ${session.end}`;
    }
    return `${matchingSlot.start} - ${matchingSlot.end}`;
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
                <p className="text-sm font-semibold leading-tight">Check-in & Breakfast</p>
              </div>
            ) : slot.key === "12:15" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-sm font-semibold leading-tight">Lunch</p>
              </div>
            ) : slot.key === "17:30" ? (
              <div className="col-span-3 flex items-center justify-center bg-black/15 px-2 py-2">
                <p className="text-center text-sm font-semibold leading-tight">
                  Happy Hour & Networking
                  <br />
                  <span className="font-normal italic">(Sponsored by Databricks)</span>
                </p>
              </div>
            ) : (
              hallOrder.map((hallId) => {
                const session = sessions.find(
                  (item) => item.start === slot.key && item.hall === hallId,
                );

                if (!session) {
                  return (
                    <div
                      key={`${slot.start}-${slot.end}-${hallId}`}
                      className="border-r border-accent/10 bg-black/10 px-2 py-2 last:border-r-0"
                    />
                  );
                }

                const isSelected = activeSession?.id === session.id;

                return (
                  <button
                    type="button"
                    key={session.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveSession(session);
                    }}
                    className={`cursor-pointer border-r border-accent/10 px-2 py-2 text-left transition-all last:border-r-0 ${
                      isSelected
                        ? "bg-accent/15 shadow-[inset_0_0_0_1px_rgba(239,214,72,0.45)]"
                        : "bg-black/15 hover:bg-accent/25 hover:shadow-[inset_0_0_0_1px_rgba(239,214,72,0.35)]"
                    }`}
                  >
                    <p className="line-clamp-2 text-sm font-semibold leading-tight underline decoration-accent/70 underline-offset-2">
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
                  className="mx-auto w-full max-w-2xl max-h-[84vh] overflow-y-auto rounded-md border border-accent/40 bg-primary p-5 text-primary-foreground shadow-2xl"
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
                    <button
                      type="button"
                      onMouseDown={(event) => event.stopPropagation()}
                      onClick={() => setActiveSession(null)}
                      className="rounded border border-accent/40 px-2 py-1 font-mono text-xs text-accent hover:bg-accent/15"
                    >
                      CLOSE
                    </button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-mono text-accent">TIME</span>:{" "}
                      {getSessionTimeRange(activeSession)}
                    </p>
                    <p>
                      <span className="font-mono text-accent">HALL</span>:{" "}
                      {halls[activeSession.hall].name} ({halls[activeSession.hall].roomLabel})
                    </p>
                    <p>
                      <span className="font-mono text-accent">SPEAKERS</span>
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeSession.speakers.map((speaker) => (
                        <div
                          key={`${activeSession.id}-${speaker.name}`}
                          className="border-l-2 border-accent/30 pl-3 py-2"
                        >
                          <div className="flex items-start gap-3">
                            <img
                              src={speaker.avatarUrl}
                              alt={`${speaker.name} avatar`}
                              className="h-11 w-11 rounded-full border border-accent/30 object-cover"
                            />
                            <div className="min-w-0">
                              <div>
                                <div className="flex items-center gap-1">
                                  <p className="min-w-0 break-words font-semibold text-primary-foreground">
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
                                <p className="mt-1 pr-2 text-sm italic text-muted-foreground/80">
                                  “{speaker.bio}”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      <span className="font-mono text-accent">ABSTRACT</span>: {activeSession.abstract}
                    </p>
                    <div
                      className={`mt-3 inline-block rounded border px-2 py-1 text-xs font-semibold ${halls[activeSession.hall].color}`}
                    >
                      {halls[activeSession.hall].name}
                    </div>
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
