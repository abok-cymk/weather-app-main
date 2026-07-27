import Image from "next/image"

export interface HourlyForecastCardProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: string
  alt?: string
  hour: string
  temperature: string
}

export default function HourlyForecastCard({
  icon,
  alt = "Weather Icon",
  hour,
  temperature,
}: HourlyForecastCardProps) {
  return (
    <div className="flex w-full items-center justify-between bg-my-neutral-600 px-4 py-2.5 rounded-xl shadow-lg">
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          alt={alt}
          aria-hidden="true"
          width={320}
          height={320}
          className="h-8 w-8"
        />
        <p className="text-lg">{hour}</p>
      </div>
      <p className="text-sm">{temperature}</p>
    </div>
  )
}
