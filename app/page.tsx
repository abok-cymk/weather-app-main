import { bricolageGrotesque } from "@/app/fonts"
import { cn } from "@/lib/utils"
import WeatherNowLogo from "@/components/ui/header/weather-now-logo"
import WeatherNowDropdownMetric from "@/components/ui/header/weather-now-dropdown-metric"
import SearchArea from "@/components/ui/search/search-area"
import WeatherCardsWrapper from "@/components/ui/weather/weather-cards-wrapper"

export default function Page() {
  return (
    <>
      <header>
        <nav className="flex w-full items-center justify-between">
          <WeatherNowLogo />
          <WeatherNowDropdownMetric />
        </nav>
      </header>
      <main className="text-my-neutral-0">
        <div className="mx-auto mt-6 max-w-3xl text-center md:mt-20">
          <h1
            className={cn(
              bricolageGrotesque.variable,
              "mx-auto max-w-50 text-4xl font-bold text-pretty md:max-w-none md:text-5xl"
            )}
          >
            How's the sky looking today?
          </h1>
        </div>
        <SearchArea />
        <WeatherCardsWrapper />
      </main>
    </>
  )
}
