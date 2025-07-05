"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a small delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "212604052330"
    const message = encodeURIComponent("Bonjour Nour, je souhaite discuter d'un projet de marketing digital.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />

      {/* Pulse animation - slower */}
      <div
        className="absolute inset-0 rounded-full opacity-75"
        style={{
          backgroundColor: "#25D366",
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Contactez-moi sur WhatsApp
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-zinc-800 rotate-45"></div>
      </div>
    </button>
  )
}
