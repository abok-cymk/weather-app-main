import HourlyForecastCardHeader from "@/components/ui/weather/right-card/header/left-card-header"
import HourlyForecastCard, {
  HourlyForecastCardProps,
} from "@/components/ui/weather/right-card/cards/hourly-forecast-card"

const hourlyForecasts: HourlyForecastCardProps[] = [
  {
    icon: "/icon-overcast.webp",
    hour: "3 PM",
    temperature: "20°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "4 PM",
    temperature: "20°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "5 PM",
    temperature: "20°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "6 PM",
    temperature: "19°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "7 PM",
    temperature: "19°",
  },
  {
    icon: "/icon-partly-cloudy.webp",
    hour: "8 PM",
    temperature: "18°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "9 PM",
    temperature: "17°",
  },
  {
    icon: "/icon-overcast.webp",
    hour: "10 PM",
    temperature: "17°",
  },
]

export default function HourlyForcastCardWrapper() {
  return (
    <div className="max-w-full rounded-xl bg-my-neutral-800 p-4 mt-6 sm:mt-0">
      <HourlyForecastCardHeader />
      <div className="mt-3 flex flex-col gap-3">
        {hourlyForecasts.map((cast, index) => (
          <HourlyForecastCard
            key={`${cast}-${index}`}
            icon={cast.icon}
            hour={cast.hour}
            temperature={cast.temperature}
          />
        ))}
      </div>
    </div>
  )
}
