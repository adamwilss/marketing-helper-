"use client"
import { useEffect, useRef, useState } from "react"

interface TypewriterProps {
  text: string[]
  speed?: number
  deleteSpeed?: number
  waitTime?: number
  className?: string
  cursorChar?: string
  cursorClassName?: string
}

const Typewriter = ({
  text,
  speed = 65,
  deleteSpeed = 35,
  waitTime = 2200,
  className = "",
  cursorChar = "_",
  cursorClassName = "",
}: TypewriterProps) => {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing")
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const word = text[wordIdx]
    clearTimeout(timeout.current)

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout.current = setTimeout(() => {
          setDisplay(word.slice(0, display.length + 1))
        }, speed)
      } else {
        timeout.current = setTimeout(() => setPhase("deleting"), waitTime)
      }
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplay(display.slice(0, -1))
        }, deleteSpeed)
      } else {
        setWordIdx((prev) => (prev + 1) % text.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timeout.current)
  }, [display, phase, wordIdx, text, speed, deleteSpeed, waitTime])

  return (
    <span className={className}>
      {display}
      <span className={`typewriter-cursor ${cursorClassName}`}>{cursorChar}</span>
    </span>
  )
}

export { Typewriter }
