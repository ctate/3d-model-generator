"use client"

import ProgressBar from "./progress-bar"

interface StatusIndicatorProps {
  isLoading: boolean
  jobStatuses: Array<{ uuid: string; status: string }>
}

export default function StatusIndicator({ isLoading, jobStatuses }: StatusIndicatorProps) {
  if (!isLoading) {
    return null
  }

  // Add one additional task to the total count
  const actualTasks = jobStatuses.length
  const totalTasks = actualTasks > 0 ? actualTasks + 1 : 0

  // Count the first task (initial request) as completed when we have job statuses
  const completedJobTasks = jobStatuses.filter((job) => job.status === "Done").length
  const initialRequestComplete = actualTasks > 0 ? 1 : 0
  const completedTasks = completedJobTasks + initialRequestComplete

  const showProgress = actualTasks > 0
  const isIndeterminate = actualTasks === 0

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="w-64">
        <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} isIndeterminate={isIndeterminate} />
      </div>
    </div>
  )
}
