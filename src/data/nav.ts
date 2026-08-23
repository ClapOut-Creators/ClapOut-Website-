import { Scissors, Briefcase } from "lucide-react";
import type { NavLink } from "../types/content";

export const navLinks: NavLink[] = [
  {
    label: "Product",
    href: "#how-it-works",
    subLinks: [
      {
        label: "Clippers",
        href: "#how-it-works",
        description: "Get paid for clip videos",
        icon: Scissors,
      },
      {
        label: "Brand",
        href: "#how-it-works",
        description: "Run and manage a campaign",
        icon: Briefcase,
      },
    ],
  },
  { label: "Campaigns", href: "#/campaigns" },
  { label: "Contact", href: "#" },
];
