import DailyForecastCard, {
  DailyForecastCardProps,
} from "@/components/ui/weather/left-cards/daily-forecast-card"

const forecasts: DailyForecastCardProps[] = [
  {
    day: "Tue",
    icon: "/icon-rain.webp",
    temperatures: ["20°", "14°"],
  },
  {
    day: "Wed",
    icon: "/icon-drizzle.webp",
    temperatures: ["21°", "15°"],
  },
  {
    day: "Thu",
    icon: "/icon-sunny.webp",
    temperatures: ["24°", "14°"],
  },
  {
    day: "Fri",
    icon: "/icon-partly-cloudy.webp",
    temperatures: ["25°", "13°"],
  },
  {
    day: "Sat",
    icon: "/icon-storm.webp",
    temperatures: ["21°", "15°"],
  },
  {
    day: "Sun",
    icon: "/icon-snow.webp",
    temperatures: ["25°", "16°"],
  },
  {
    day: "Mon",
    icon: "/icon-fog.webp",
    temperatures: ["24°", "15°"],
  },
]

export default function DailyForecastCardsWrapper() {
  return (
    <div className="mt-6 sm:mt-10">
        <h3 className="font-medium text-my-neutral-0 text-2xl mb-4">Daily Forecast</h3>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-7">
          {forecasts.map((forecast) => (
            <DailyForecastCard
              key={forecast.day}
              day={forecast.day}
              icon={forecast.icon}
              temperatures={forecast.temperatures}
            />
          ))}
        </div>
    </div>
  )
}
