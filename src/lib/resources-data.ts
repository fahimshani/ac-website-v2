import {
  FileText,
  Lock,
  Cookie,
  ShieldCheck,
  ShieldAlert,
  Database,
  HeartHandshake,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type ResourceCategory =
  | "IVA"
  | "Bankruptcy"
  | "Debt Advice"
  | "Payments"
  | "Legal"
  | "Regulatory";

export const resourceCategories: ResourceCategory[] = [
  "IVA",
  "Bankruptcy",
  "Debt Advice",
  "Payments",
  "Legal",
  "Regulatory",
];

interface BaseResource {
  id: string;
  category: ResourceCategory;
  title: string;
  description: string;
  updatedLabel: string;
  updatedDate: string;
  href: string;
}

export interface GuideResource extends BaseResource {
  kind: "guide";
  pages: number;
}

export interface PolicyResource extends BaseResource {
  kind: "policy";
  icon: LucideIcon;
}

export type Resource = GuideResource | PolicyResource;

export const guides: GuideResource[] = [
  {
    id: "r3-guide-to-ivas",
    kind: "guide",
    category: "IVA",
    title: "R3 Guide to IVAs",
    description:
      "Independent guidance from R3, the insolvency trade body, explaining how Individual Voluntary Arrangements work, who qualifies, and what to expect.",
    pages: 24,
    updatedLabel: "Jan 2026",
    updatedDate: "2026-01-15",
    href: "https://www.r3.org.uk/",
  },
  {
    id: "government-guide-to-bankruptcy",
    kind: "guide",
    category: "Bankruptcy",
    title: "Government Guide to Bankruptcy",
    description:
      "Official government guidance on the bankruptcy process, eligibility criteria, consequences, and how to apply for a Debt Relief Order.",
    pages: 18,
    updatedLabel: "Mar 2025",
    updatedDate: "2025-03-10",
    href: "https://www.gov.uk/bankruptcy",
  },
  {
    id: "debt-crisis-your-options",
    kind: "guide",
    category: "Debt Advice",
    title: "Debt Crisis: Your Options",
    description:
      "A comprehensive overview of all debt solution options available to individuals in financial difficulty — from IVAs and DROs to bankruptcy and debt management.",
    pages: 32,
    updatedLabel: "Nov 2025",
    updatedDate: "2025-11-02",
    href: "https://moneyhelper.org.uk/",
  },
  {
    id: "direct-debit-guarantee",
    kind: "guide",
    category: "Payments",
    title: "Direct Debit Guarantee",
    description:
      "Your rights and protections under the Direct Debit Guarantee scheme when authorising regular payments to Anchorage Chambers.",
    pages: 2,
    updatedLabel: "Jan 2026",
    updatedDate: "2026-01-05",
    href: "https://gocardless.com/direct-debit-guarantee/",
  },
  {
    id: "iva-protocol",
    kind: "guide",
    category: "IVA",
    title: "IVA Protocol",
    description:
      "The standard protocol governing how IVAs are drafted, approved, and administered across the insolvency profession in England & Wales.",
    pages: 48,
    updatedLabel: "Dec 2025",
    updatedDate: "2025-12-08",
    href: "https://www.gov.uk/government/publications/individual-voluntary-arrangement-protocol",
  },
  {
    id: "icaew-code-of-ethics",
    kind: "guide",
    category: "Regulatory",
    title: "ICAEW Code of Ethics",
    description:
      "The professional ethical framework our licensed insolvency practitioners are required to uphold in all client and creditor dealings.",
    pages: 56,
    updatedLabel: "Jan 2024",
    updatedDate: "2024-01-20",
    href: "https://www.icaew.com/regulation/code-of-ethics",
  },
  {
    id: "stepchange-debt-advice-guide",
    kind: "guide",
    category: "Debt Advice",
    title: "StepChange Debt Advice Guide",
    description:
      "Practical debt advice guidance covering budgeting, priority debts, dealing with creditors, and longer-term debt solutions.",
    pages: 20,
    updatedLabel: "Aug 2025",
    updatedDate: "2025-08-14",
    href: "https://www.stepchange.org/",
  },
  {
    id: "managing-debt-in-high-inflation",
    kind: "guide",
    category: "Debt Advice",
    title: "Managing Debt in a High-Inflation Environment",
    description:
      "Our guide to understanding and managing personal debt during periods of high inflation and rising living costs.",
    pages: 12,
    updatedLabel: "Jun 2025",
    updatedDate: "2025-06-18",
    href: "https://moneyhelper.org.uk/en/money-troubles",
  },
  {
    id: "breathing-space-scheme-guide",
    kind: "guide",
    category: "IVA",
    title: "Breathing Space Scheme Guide",
    description:
      "An explanation of the Debt Respite (Breathing Space) Scheme and how a 60-day pause on creditor action could help you stabilise your finances.",
    pages: 8,
    updatedLabel: "Oct 2025",
    updatedDate: "2025-10-01",
    href: "https://www.gov.uk/government/publications/debt-respite-scheme-breathing-space-guidance",
  },
  {
    id: "creditor-guidance-for-iva-proposals",
    kind: "guide",
    category: "Regulatory",
    title: "Creditor Guidance for IVA Proposals",
    description:
      "Guidance for creditors on how to review, vote on, and engage with IVA proposals submitted by Anchorage Chambers on behalf of clients.",
    pages: 14,
    updatedLabel: "Sep 2025",
    updatedDate: "2025-09-22",
    href: "/services/creditors",
  },
];

export const policies: PolicyResource[] = [
  {
    id: "complaints-policy",
    kind: "policy",
    category: "Legal",
    icon: ShieldCheck,
    title: "Complaints Policy",
    description:
      "Learn how complaints are received, acknowledged, investigated, and resolved at Anchorage Chambers.",
    updatedLabel: "Feb 2026",
    updatedDate: "2026-02-01",
    href: "/complaints",
  },
  {
    id: "privacy-policy",
    kind: "policy",
    category: "Legal",
    icon: Lock,
    title: "Privacy Policy",
    description:
      "Information about how we collect, process, store, and protect your personal data under UK GDPR.",
    updatedLabel: "Jan 2026",
    updatedDate: "2026-01-12",
    href: "/privacy-policy",
  },
  {
    id: "cookie-policy",
    kind: "policy",
    category: "Legal",
    icon: Cookie,
    title: "Cookie Policy",
    description:
      "How we use cookies and similar tracking technologies on our website, and how to manage your preferences.",
    updatedLabel: "Jan 2026",
    updatedDate: "2026-01-12",
    href: "/cookie-policy",
  },
  {
    id: "terms-of-service",
    kind: "policy",
    category: "Legal",
    icon: FileText,
    title: "Terms of Service",
    description:
      "The legal terms governing your use of Anchorage Chambers' services and website, including our liability limitations.",
    updatedLabel: "Dec 2025",
    updatedDate: "2025-12-01",
    href: "/terms",
  },
  {
    id: "anti-money-laundering-policy",
    kind: "policy",
    category: "Regulatory",
    icon: ShieldAlert,
    title: "Anti-Money Laundering Policy",
    description:
      "Our obligations, procedures, and client due diligence requirements under the Money Laundering Regulations 2017.",
    updatedLabel: "Mar 2025",
    updatedDate: "2025-03-05",
    href: "/policies/anti-money-laundering",
  },
  {
    id: "data-retention-policy",
    kind: "policy",
    category: "Regulatory",
    icon: Database,
    title: "Data Retention Policy",
    description:
      "How long we retain different categories of personal and client data, and our secure deletion procedures.",
    updatedLabel: "Feb 2025",
    updatedDate: "2025-02-19",
    href: "/policies/data-retention",
  },
  {
    id: "vulnerable-customer-policy",
    kind: "policy",
    category: "Regulatory",
    icon: HeartHandshake,
    title: "Vulnerable Customer Policy",
    description:
      "How we identify, support, and adapt our services for customers in vulnerable circumstances.",
    updatedLabel: "Apr 2025",
    updatedDate: "2025-04-11",
    href: "/policies/vulnerable-customers",
  },
  {
    id: "equality-diversity-policy",
    kind: "policy",
    category: "Legal",
    icon: UserCheck,
    title: "Equality & Diversity Policy",
    description:
      "Our commitment to treating all clients, staff, and partners with fairness, dignity, and respect.",
    updatedLabel: "May 2025",
    updatedDate: "2025-05-07",
    href: "/policies/equality-diversity",
  },
];

export const allResources: Resource[] = [...guides, ...policies];

export const featuredResources: {
  id: string;
  variant: "dark" | "light";
  mostDownloaded: boolean;
}[] = [
  { id: "r3-guide-to-ivas", variant: "dark", mostDownloaded: true },
  { id: "government-guide-to-bankruptcy", variant: "light", mostDownloaded: true },
  { id: "debt-crisis-your-options", variant: "light", mostDownloaded: false },
];
