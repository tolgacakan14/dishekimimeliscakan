"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { clinicInfo } from "@/lib/content";

export default function FloatingCall() {
  return (
    <motion.a
      href={clinicInfo.phoneHref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/40"
      aria-label="Bizi arayın"
    >
      <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-30" />
      <Phone size={22} className="relative" />
    </motion.a>
  );
}
