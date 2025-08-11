"use client"

import { useEffect, useCallback } from "react"

/**
 * This component measures the height of the page content and sends it to the parent window.
 * This allows an iframe embedding this page to dynamically resize itself, avoiding scrollbars.
 * It renders nothing to the DOM.
 */
export default function IframeResizer() {
  const sendHeight = useCallback(() => {
    // A small timeout ensures the DOM has fully rendered after any change before we measure.
    setTimeout(() => {
      const height = document.body.scrollHeight
      // Check if we are inside an iframe
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "resize-iframe",
            height: height,
          },
          "*",
        ) // For production, you might restrict this to your website's domain instead of '*'
      }
    }, 100) // 100ms delay
  }, [])

  useEffect(() => {
    // Send height on initial load
    sendHeight()

    // Use ResizeObserver to send height whenever the content size changes
    const resizeObserver = new ResizeObserver(sendHeight)
    resizeObserver.observe(document.body)

    // Fallback for older browsers
    window.addEventListener("resize", sendHeight)

    // Cleanup on component unmount
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", sendHeight)
    }
  }, [sendHeight])

  return null
}
