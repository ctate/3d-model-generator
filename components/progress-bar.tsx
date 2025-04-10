"use client"

import { cn } from "@/lib/utils"

interface ProgressBarProps {
  totalTasks: number
  completedTasks: number
  className?: string
  isIndeterminate?: boolean
}

export default function ProgressBar({
  totalTasks,
  completedTasks,
  className,
  isIndeterminate = false,
}: ProgressBarProps) {
  // Calculate percentage
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  return (
    <div className={cn("w-full bg-black rounded-full h-2 overflow-hidden border border-white p-[1px]", className)}>
      {isIndeterminate ? (
        <div className="h-full relative w-full">
          <div className="h-full bg-white absolute w-[40%] animate-progress-indeterminate rounded-full" />
        </div>
      ) : (
        <div className="h-full bg-white transition-all duration-500 rounded-full" style={{ width: `${percentage}%` }} />
      )}
    </div>
  )
}
