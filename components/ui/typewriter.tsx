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
  const state = useRef({ wordIdx: 0, phase: "typing" as "typing" | "deleting", chars: "" })
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const spanRef = useRef<HTMLSpanElement>(null)
  const visible = useRef(false)

  // Pause animation when scrolled out of view
  useEffect(() => {
    const el = spanRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { visible.current = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const tick = () => {
      if (!visible.current) {
        timer.current = setTimeout(tick, 200)
        return
      }

      const s = state.current
      const word = text[s.wordIdx]

      if (s.phase === "typing") {
        if (s.chars.length < word.length) {
          s.chars = word.slice(0, s.chars.length + 1)
          setDisplay(s.chars)
          timer.current = setTimeout(tick, speed)
        } else {
          s.phase = "deleting"
          timer.current = setTimeout(tick, waitTime)
        }
      } else {
        if (s.chars.length > 0) {
          s.chars = s.chars.slice(0, -1)
          setDisplay(s.chars)
          timer.current = setTimeout(tick, deleteSpeed)
        } else {
          s.wordIdx = (s.wordIdx + 1) % text.length
          s.phase = "typing"
          timer.current = setTimeout(tick, speed)
        }
      }
    }

    timer.current = setTimeout(tick, speed)
    return () => clearTimeout(timer.current)
  }, [text, speed, deleteSpeed, waitTime])

  return (
    <span ref={spanRef} className={className}>
      {display}
      <span className={`typewriter-cursor ${cursorClassName}`}>{cursorChar}</span>
    </span>
  )
}

export { Typewriter }
