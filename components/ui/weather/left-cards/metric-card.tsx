export interface MetricCardProps {
  metric_name: string
  value: string
}

export default function MetricCard({ metric_name, value }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-5 bg-my-neutral-800 text-my-neutral-0 p-5 rounded-xl border border-my-neutral-600">
      <p className="overflow-hidden text-ellipsis">{metric_name}</p>
      <p className="text-xl sm:text-2xl font-light">{value}</p>
    </div>
  )
}
