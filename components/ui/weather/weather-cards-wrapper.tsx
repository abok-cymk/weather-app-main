import LeftMainCards from "@/components/ui/weather/left-cards/left-main-cards"
import HourlyForcastCardWrapper from "./right-card/hourly-forecast-card-wrapper"

export default function WeatherCardsWrapper() {
  return (
    <div className="mt-8 grid grid-cols-1 md:mt-12 md:grid-cols-3 gap-6">
      <LeftMainCards />
      <HourlyForcastCardWrapper />
    </div>
  )
}
