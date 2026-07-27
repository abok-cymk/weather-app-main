import { cn } from "@/lib/utils"
import Image from "next/image"

export interface DailyForecastCardProps extends React.ComponentPropsWithoutRef<"div"> {
  day: string
  icon: string
  temperatures: string[]
  alt?: string
  className?: string
}

export default function DailyForecastCard({
  day,
  icon,
  temperatures,
  alt = "Weather icon",
  className,
  ...rest
}: DailyForecastCardProps) {
  return (
    <div
      className={cn("flex flex-col items-center rounded-lg border border-my-neutral-600 p-2 bg-my-neutral-800 text-my-neutral-0", className)}
      {...rest}
    >
      <p className="font-medium">{day}</p>
      <Image
        src={icon}
        alt={alt}
        {...rest}
        width={320}
        height={320}
        className="h-10 w-10"
      />

      <div className="mt-2 flex w-full items-center justify-between">
        {temperatures.map((temp, index) => (
          <p key={`${temp}-${index}`} className="text-sm">
            {temp}
          </p>
        ))}
      </div>
    </div>
  )
}
