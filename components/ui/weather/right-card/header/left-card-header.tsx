"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

type Days = {
  label: string
  value: string
}

const daysOfTheWeeks: Days[] = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
]

export default function HourlyForecastCardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-md font-medium text-my-neutral-0">Hourly forecast</h3>
      <Combobox
        items={daysOfTheWeeks}
        itemToStringValue={(daysOfTheWeek: Days) => daysOfTheWeek.label}
      >
        <ComboboxInput
          placeholder="Select a day"
          className="w-30 bg-my-neutral-600"
        />
        <ComboboxContent className="border border-my-neutral-0 bg-my-neutral-800">
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(daysOfTheWeek) => (
              <ComboboxItem key={daysOfTheWeek.value} value={daysOfTheWeek}>
                {daysOfTheWeek.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
