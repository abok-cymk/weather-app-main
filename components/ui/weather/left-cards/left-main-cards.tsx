import BigWeatherCard from "@/components/ui/weather/left-cards/big-weather-card"
import MetricCard, {
  MetricCardProps,
} from "@/components/ui/weather/left-cards/metric-card"
import DailyForecastCardsWrapper from "@/components/ui/weather/left-cards/daily-forecast-wrapper"

const metrics: MetricCardProps[] = [
  {
    metric_name: "Feels Like",
    value: "18°",
  },
  {
    metric_name: "Humidity",
    value: "46%",
  },
  {
    metric_name: "Wind",
    value: "14 km/h",
  },
  {
    metric_name: "Precipitation",
    value: "0 mm",
  },
]

export default function LeftMainCards() {
  return (
    <div className="col-span-2">
      <BigWeatherCard />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.metric_name}
            metric_name={metric.metric_name}
            value={metric.value}
          />
        ))}
      </div>
      <DailyForecastCardsWrapper />
    </div>
  )
}
