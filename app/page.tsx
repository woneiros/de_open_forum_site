import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      {/* Top bar with retro feel */}
      <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{"// DATA ENGINEERING OPEN FORUM"}</span>
          <span>{"[SAN FRANCISCO, CA]"}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-sm text-accent">
                {"> LAUNCHING SOON_ "}
              </div>
              <h1 className="text-balance font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                DATA ENGINEERING
                <br />
                OPEN FORUM
              </h1>
              <div className="font-mono text-lg text-muted-foreground sm:text-xl">
                {"// San Francisco: April 16th, 2026"}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-pretty text-lg leading-relaxed">
                The most anticipated and respected conference in the data
                engineering community.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                World-class content. Meaningful connections. Open dialogue.
                We're building an event that practitioners, leaders, and
                enthusiasts actively seek out — not just for the technical
                depth, but for the experience it delivers.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm text-accent">
                {"> BE_THE_FIRST_TO_KNOW (email):"}
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  className="flex-1 border-accent/30 bg-secondary/10 font-mono text-sm placeholder:text-muted-foreground/50"
                />
                <Button
                  type="submit"
                  className="border border-accent/30 bg-accent font-mono text-accent-foreground hover:bg-accent/90"
                >
                  {">> SUBMIT"}
                </Button>
              </form>
            </div>

            <div className="space-y-2 border-l-2 border-accent/30 pl-4 font-mono text-sm text-muted-foreground">
              <p>{"// Technically deep, globally relevant"}</p>
              <p>{"// Community-driven content"}</p>
              <p>{"// Open dialogue & collaboration"}</p>
              <p>{"// Connections that outlive the event"}</p>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/de_open_forum_goldengate.png"
                alt="Data Engineering Open Forum - Golden Gate Bridge representing San Francisco"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 border-t border-accent/30 pt-8 font-mono text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>{"// Excellence in content & community"}</div>
            <div className="flex gap-6">
              <span>{"[OPEN]"}</span>
              <span>{"[INCLUSIVE]"}</span>
              <span>{"[INSPIRING]"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
