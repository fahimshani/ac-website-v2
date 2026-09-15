import { UserCheck, FileText, Vote, CreditCard } from "lucide-react";

export const personalServices = [
  {
    abbr: "IVA",
    tone: "red" as const,
    title: "Individual Voluntary Arrangement",
    description:
      "A legally binding agreement between you and your creditors to repay a portion of your debt over a fixed period — typically 5 years. Stops creditor action and protects assets like your home.",
    checklist: [
      "Legal protection from creditors",
      "Single affordable monthly payment",
      "Remaining debt written off after completion",
      "Keep your home in most cases",
    ],
    metaLabel: "Eligibility",
    metaText: "Minimum £6,000 debt · 2+ creditors · Regular income",
    href: "/services/iva",
  },
  {
    abbr: "DRO",
    tone: "red" as const,
    title: "Debt Relief Order",
    description:
      "A low-cost alternative to bankruptcy for people with low income, few assets and under £30,000 of debt. Pauses debt repayments for 12 months, after which qualifying debts are written off.",
    checklist: [
      "Low-cost (£90 application fee)",
      "Debts frozen for 12 months",
      "Qualifying debts written off after 12 months",
      "No court appearance required",
    ],
    metaLabel: "Eligibility",
    metaText:
      "Debt under £30,000 · Assets under £2,000 · Disposable income under £75/month",
    href: "/services/dro",
  },
  {
    abbr: "BR",
    tone: "red" as const,
    title: "Bankruptcy",
    description:
      "A formal legal process that writes off debts you can't pay. Most unsecured debts are cleared, giving you a fresh start — discharge typically occurs after 12 months.",
    checklist: [
      "All unsecured debts written off",
      "Discharge usually within 12 months",
      "Creditors can no longer pursue you",
      "Fresh financial start",
    ],
    metaLabel: "Eligibility",
    metaText:
      "Any amount of debt · Available to individuals · Application via Insolvency Service",
    href: "/services/bankruptcy",
  },
  {
    abbr: "DMP",
    tone: "red" as const,
    title: "Debt Management Plan",
    description:
      "An informal arrangement with your creditors to repay debt at an affordable rate. Interest and charges may be frozen. No legal status but flexible and can be stopped at any time.",
    checklist: [
      "Informal and flexible",
      "Single monthly payment",
      "Often freezes interest",
      "No impact on credit beyond existing defaults",
    ],
    metaLabel: "Eligibility",
    metaText: "Any amount of debt · Available immediately · No minimum threshold",
    href: "/services/dmp",
  },
];

export const corporateServices = [
  {
    abbr: "CVA",
    tone: "dark" as const,
    title: "Company Voluntary Arrangement",
    description:
      "A formal agreement between a company and its creditors to repay debts over time while the business continues trading. Requires 75% creditor approval by value.",
    checklist: [
      "Business continues trading",
      "Creditors bound by the arrangement",
      "Directors retain control",
      "Prevents winding-up",
    ],
    metaLabel: "Best suited for",
    metaText: "Viable businesses with temporary cash-flow problems",
    href: "/services/cva",
  },
  {
    abbr: "ADM",
    tone: "dark" as const,
    title: "Administration",
    description:
      "An Administrator is appointed to manage the company's affairs with the aim of rescuing the business, achieving a better result than liquidation, or distributing assets to secured creditors.",
    checklist: [
      "Moratorium on creditor action",
      "Business may be rescued or sold",
      "Maximises returns for creditors",
      "Managed by a licensed IP",
    ],
    metaLabel: "Best suited for",
    metaText: "Companies needing urgent protection from creditors",
    href: "/services/administration",
  },
  {
    abbr: "CVL",
    tone: "dark" as const,
    title: "Creditors' Voluntary Liquidation",
    description:
      "A voluntary winding-up of an insolvent company by its directors and shareholders. A licensed Insolvency Practitioner is appointed to realise assets and distribute funds to creditors.",
    checklist: [
      "Directors avoid wrongful trading risk",
      "Orderly wind-down",
      "Maximises returns for creditors",
      "IP handles all creditor correspondence",
    ],
    metaLabel: "Best suited for",
    metaText: "Companies that can no longer trade viably",
    href: "/services/cvl",
  },
  {
    abbr: "MVL",
    tone: "dark" as const,
    title: "Members' Voluntary Liquidation",
    description:
      "A tax-efficient method of closing a solvent company. Directors issue a Declaration of Solvency and a liquidator distributes assets, often treated as capital gains.",
    checklist: [
      "Tax-efficient extraction of profits",
      "Orderly closure of solvent company",
      "Capital gains treatment available",
      "Clean exit for shareholders",
    ],
    metaLabel: "Best suited for",
    metaText: "Solvent companies looking to close or restructure",
    href: "/services/mvl",
  },
];

export const ivaProcessSteps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Free consultation",
    description:
      "Speak with one of our expert advisors to assess your financial situation at no cost to you.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Tailored IVA proposal",
    description:
      "We draft a proposal based on your income and debts, presented to your creditors for approval.",
  },
  {
    number: "03",
    icon: Vote,
    title: "Creditor meeting & vote",
    description:
      "If 75% of creditors by value agree, the IVA is approved and legally binding for all parties.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Monthly Direct Debit",
    description:
      "One affordable payment per month. After typically 5 years, all remaining qualifying debt is written off.",
  },
];

export const ivaKeyFacts = [
  { value: "5 years", label: "Typical IVA duration" },
  { value: "75%", label: "Creditor approval needed" },
  { value: "£6,000+", label: "Minimum qualifying debt" },
  { value: "1 payment", label: "Per month to remember" },
];

export const servicesStats = [
  { value: "12", label: "Partners nationwide" },
  { value: "90", label: "Team members" },
  { value: "3", label: "Office locations" },
];
