import { Scissors, Briefcase } from "lucide-react";
import type { NavLink } from "../types/content";
import { CREATORS_WHATSAPP_URL, BRANDS_PHONE } from "./links";

export const navLinks: NavLink[] = [
  {
    label: "Product",
    href: "#how-it-works",
    subLinks: [
      {
        label: "Clippers",
        href: CREATORS_WHATSAPP_URL,
        description: "Get paid for clip videos",
        icon: Scissors,
      },
      {
        label: "Brand",
        href: `tel:${BRANDS_PHONE}`,
        description: "Run and manage a campaign",
        icon: Briefcase,
      },
    ],
  },
  { label: "Campaigns", href: "#/campaigns" },
  { label: "Contact", href: "#/contact" },
];
