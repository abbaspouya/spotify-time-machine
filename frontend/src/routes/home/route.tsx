import { ArrowRight, ArrowRightLeft, Languages, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TopTracksRecap } from "@/features/dashboard/top-tracks-recap"
import { useSpotifySession } from "@/features/spotify/use-spotify-session"

export function HomePage() {
  const { authStatusQuery, isAuthenticated, whoAmIQuery, spotifyRateLimit, handleSpotifyLogin, refreshSession } = useSpotifySession()
  const canLoadTopTracks = isAuthenticated && whoAmIQuery.isSuccess && !spotifyRateLimit.isRateLimited
  const topTracksBlockedError = whoAmIQuery.isError ? whoAmIQuery.error : spotifyRateLimit.error

  return (
    <div className="container space-y-8 py-8 md:py-12">
      <TopTracksRecap
        scope={authStatusQuery.data?.scope}
        canLoad={canLoadTopTracks}
        blockedError={topTracksBlockedError}
        onReconnect={handleSpotifyLogin}
        onRetrySession={() => void refreshSession()}
      />

      <section className="animate-fade-up space-y-3">
        <span className="hero-badge">Choose a tool</span>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="max-w-3xl text-3xl leading-tight md:text-4xl">Open the Spotify workflow you need.</h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Time Machine, library transfer, and language-based playlist building each live in their own focused space.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="animate-fade-up [animation-delay:180ms]">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle>Time Machine</CardTitle>
            <CardDescription>Turn your liked songs into grouped time capsules and create playlists from them.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Browse your listening history by time period and turn those slices into playlists.</p>
            <Link to="/app/time-machine" className={buttonVariants({ variant: "secondary" })}>
              Open Time Machine
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="animate-fade-up [animation-delay:220ms]">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <ArrowRightLeft className="h-5 w-5" />
            </div>
            <CardTitle>Transfer Library</CardTitle>
            <CardDescription>Export and import account snapshots from a migration-focused page.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Download a snapshot, upload it into another account, and keep track of what was applied.</p>
            <Link to="/app/transfer-library" className={buttonVariants({ variant: "secondary" })}>
              Open Transfer Library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="animate-fade-up [animation-delay:260ms]">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Languages className="h-5 w-5" />
            </div>
            <CardTitle>Language Playlists</CardTitle>
            <CardDescription>Detect song-language groups in your liked songs and turn the one you choose into a playlist.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Scan your library, choose a detected language group, and build a playlist around it.</p>
            <Link to="/app/language-playlists" className={buttonVariants({ variant: "secondary" })}>
              Open Language Playlists
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
