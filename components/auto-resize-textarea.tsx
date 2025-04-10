"use client"

import React, { useEffect, useRef } from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface AutoResizeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, AutoResizeTextareaProps>(
  ({ className, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    // Combine the forwarded ref with our local ref
    const setRefs = (element: HTMLTextAreaElement) => {
      textareaRef.current = element
      if (typeof ref === "function") {
        ref(element)
      } else if (ref) {
        ref.current = element
      }
    }

    const resizeTextarea = () => {
      if (textareaRef.current) {
        // Reset height to auto to get the correct scrollHeight
        textareaRef.current.style.height = "auto"
        // Set the height to the scrollHeight, but ensure it's at least the line height
        const scrollHeight = textareaRef.current.scrollHeight
        textareaRef.current.style.height = `${scrollHeight}px`
      }
    }

    // Resize on initial render
    useEffect(() => {
      if (textareaRef.current) {
        // Start with single line height
        const lineHeight = Number.parseInt(getComputedStyle(textareaRef.current).lineHeight)
        textareaRef.current.style.height = `${lineHeight}px`

        // Then adjust if there's content
        if (textareaRef.current.value) {
          resizeTextarea()
        }
      }
    }, [])

    // Handle input changes
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      resizeTextarea()
      if (props.onChange) {
        props.onChange(e)
      }
    }

    return (
      <Textarea
        {...props}
        ref={setRefs}
        onChange={handleInput}
        className={cn(
          "overflow-hidden min-h-[40px] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none border-0 shadow-none",
          className,
        )}
        rows={1}
      />
    )
  },
)

AutoResizeTextarea.displayName = "AutoResizeTextarea"

export default AutoResizeTextarea
