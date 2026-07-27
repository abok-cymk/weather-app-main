import { DropdownMenu } from "@/components/ui/dropdown-menu";


export default function HourlyForecastCardHeader() {
    return (
        <div className="flex items-center justify-between">
            <h3 className="font-medium text-my-neutral-0 text-xl">Hourly forecast</h3>
            <DropdownMenu>
                Tuesday
            </DropdownMenu>
        </div>
    )
}