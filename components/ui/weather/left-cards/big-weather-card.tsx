import Image from "next/image"

export default function BigWeatherCard() {
  return (
    <div className="relative mx-auto w-full max-w-85.75 sm:max-w-none">
      <div>
        <Image
          src="/bg-today-large.svg"
          alt=""
          width={800}
          height={286}
          aria-hidden="true"
          className="hidden h-auto w-full sm:block"
        />
        <Image
          src="/bg-today-small.svg"
          alt=""
          width={343}
          height={286}
          aria-hidden="true"
          className="block h-auto w-full sm:hidden"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:gap-0 sm:text-left">
        <div>
          <h2 className="text-2xl font-medium">Berlin, Germany</h2>
          <p className="text-my-neutral-200">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/icon-sunny.webp"
            alt=""
            width={320}
            height={320}
            aria-hidden="true"
            className="h-auto w-20 md:w-30"
          />
          <strong className="text-7xl font-semibold italic">20°</strong>
        </div>
      </div>
    </div>
  )
}
