"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingEffectProps {
  texts?: string[]
  words?: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
  onWordChange?: (index: number) => void // Added callback for word changes
}

export default function TypingEffect({
  texts,
  words,
  className,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
  onWordChange, // Added onWordChange prop
}: TypingEffectProps) {
  const textArray = texts || words || ["Welcome to APEX"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!textArray || textArray.length === 0) return

    const text = textArray[currentTextIndex]
    if (!text) return

    if (isPaused) return

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (currentText.length < text.length) {
            setCurrentText(text.substring(0, currentText.length + 1))
          } else {
            // Word is complete, pause before deleting
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          // Deleting backward
          if (currentText.length > 0) {
            setCurrentText(text.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            const nextIndex = (currentTextIndex + 1) % textArray.length
            setCurrentTextIndex(nextIndex)
            if (onWordChange) {
              onWordChange(nextIndex)
            }
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    textArray,
    speed,
    deleteSpeed,
    delayBetweenWords,
    onWordChange,
  ])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={cn("h-8 sm:h-10", className)}>
      <span className="typing-effect inline-block">
        {currentText}
        <span className={`cursor ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
      </span>
    </div>
  )
}

export { TypingEffect }
