"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function WeatherNowDropdownMetric() {
  const [temperatureUnit, setTemperatureUnit] = useState("c")
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh")
  const [precipitationUnit, setPrecipitationUnit] = useState("mm")
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            className="flex w-fit cursor-pointer items-center gap-2"
          >
            <Image
              src="/icon-units.svg"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
            />
            <span className="text-my-neutral-0">Units</span>
            <Image
              src="/icon-dropdown.svg"
              alt=""
              aria-hidden="true"
              width={13}
              height={8}
            />
          </Button>
        }
      />
      <DropdownMenuContent className="w-40 bg-my-neutral-800" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-my-neutral-0">
            Choose Units
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="font-light text-my-neutral-300">
              Temperature
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={temperatureUnit}
              onValueChange={setTemperatureUnit}
            >
              <DropdownMenuRadioItem value="c" className="cursor-pointer">
                Celcius (°C)
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="f"
                className="cursor-pointer"
              >
                Fahrenheit (°F)
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-light text-my-neutral-300">
            Wind Speed
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={windSpeedUnit} onValueChange={setWindSpeedUnit}>
              <DropdownMenuRadioItem value="kmh" className="cursor-pointer">km/h</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mph" className="cursor-pointer">mph</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-light text-my-neutral-300">
            Precipitation
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={precipitationUnit} onValueChange={setPrecipitationUnit}>
          <DropdownMenuRadioItem value="mm" className="cursor-pointer">
            Millimetres (mm)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="in" className="cursor-pointer">
            Inches (in)
          </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
