import {
  BadgeCheck,
  Briefcase,
  Calculator,
  CircleCheck,
  Flower2,
  Handshake,
  Headset,
  HeartHandshake,
  HeartPulse,
  Home,
  Landmark,
  Layers,
  ListChecks,
  MessageCircle,
  PiggyBank,
  Search,
  Shield,
  Star,
  Stethoscope,
  TrendingUp,
  Umbrella,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const icons = {
  BadgeCheck,
  Briefcase,
  Calculator,
  CircleCheck,
  Flower2,
  Handshake,
  Headset,
  HeartHandshake,
  HeartPulse,
  Home,
  Landmark,
  Layers,
  ListChecks,
  MessageCircle,
  PiggyBank,
  Search,
  Shield,
  Star,
  Stethoscope,
  TrendingUp,
  Umbrella,
  UserRound,
  Users,
  Wallet,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function IconByName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as IconName] ?? Shield;
  return <Icon className={className} strokeWidth={1.6} aria-hidden />;
}
