"use client"

import { X } from "lucide-react"

interface ImageUploadAreaProps {
  previewUrls: string[]
  onRemoveImage: (index: number) => void
  isLoading?: boolean
}

export default function ImageUploadArea({ previewUrls, onRemoveImage, isLoading = false }: ImageUploadAreaProps) {
  if (previewUrls.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 px-4 pt-3 pointer-events-auto">
      {previewUrls.map((url, index) => (
        <div key={index} className="relative h-16 w-16">
          <img
            src={url || "/placeholder.svg"}
            alt={`Preview ${index + 1}`}
            className="h-full w-full object-cover rounded-full"
          />
          {!isLoading && (
            <button type="button" onClick={() => onRemoveImage(index)} className="absolute -top-1 -right-1">
              <X className="h-3 w-3 text-white" />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
