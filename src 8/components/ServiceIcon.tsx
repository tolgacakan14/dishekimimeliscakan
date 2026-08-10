import {
  Syringe,
  Sparkles,
  Activity,
  HeartPulse,
  ShieldPlus,
  AlignCenter,
  Sun,
  Gem,
  Crown,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  syringe: Syringe,
  sparkles: Sparkles,
  tooth: Crown,
  activity: Activity,
  "heart-pulse": HeartPulse,
  "shield-plus": ShieldPlus,
  "align-center": AlignCenter,
  sun: Sun,
  gem: Gem,
  crown: Crown,
};

export default function ServiceIcon({
  name,
  size = 22,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon size={size} className={className} />;
}
