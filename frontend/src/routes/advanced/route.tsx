import { Languages } from "lucide-react"

import { LanguageLab } from "@/features/advanced/language-lab"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LanguagePlaylistsPage() {
  return (
    <div className="container space-y-8 py-8 md:py-12">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-shell animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <span className="hero-badge">Language Playlists</span>
            <Badge variant="outline">Spotify library tool</Badge>
          </div>

          <div className="mt-6 space-y-4">
            <h1 className="max-w-3xl text-4xl leading-tight md:text-5xl">Build playlists around the language you want to hear.</h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Scan your liked songs, review the detected language groups, and turn the selection you care about into a
              playlist without extra discovery tools getting in the way.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#language-lab" className={buttonVariants({ variant: "secondary" })}>
              Open language builder
            </a>
          </div>
        </div>

        <Card className="animate-fade-up [animation-delay:120ms]">
          <CardHeader>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Languages className="h-6 w-6" />
            </div>
            <CardTitle>How it works</CardTitle>
            <CardDescription>
              Start with a scan of your liked songs, choose one detected language group, and create a playlist from the
              tracks that match.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <LanguageLab />
    </div>
  )
}
