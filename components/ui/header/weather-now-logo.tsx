import Image from "next/image"

export default function WeatherNowLogo() {
  return (
    <Image
      src="/logo.svg"
      alt="Weather Now"
      width={197}
      height={40}
      className="h-auto w-40 sm:w-44 md:w-48 lg:w-49.25"
      priority
    />
  )
}
