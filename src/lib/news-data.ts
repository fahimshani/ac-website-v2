import { Home, RefreshCcw, DollarSign, Eye, ArrowRightLeft } from "lucide-react";

export type NewsTone = "red" | "purple" | "teal" | "amber";

export const newsCategories: {
  label: string;
  icon: typeof Home;
  href: string;
}[] = [
  { label: "Company News", icon: Home, href: "/news/category/company-news" },
  { label: "IVA Updates", icon: RefreshCcw, href: "/news/category/iva-updates" },
  { label: "Debt Advice", icon: DollarSign, href: "/news/category/debt-advice" },
  { label: "Industry News", icon: Eye, href: "/news/category/industry-news" },
];

export const featuredStory = {
  category: "Company News",
  icon: Home,
  tone: "red" as NewsTone,
  date: "June 2026",
  readTime: "5 min read",
  title: "Insolvency Firm Readies For Growth With Salford Quays HQ Expansion",
  paragraphs: [
    "Anchorage Chambers has applied to add four-storeys to its two-floor head office, with workspace and apartments planned within the extension.",
    "Seed Architects has been appointed to draw up plans for the expansion of Anchorage Chambers' Salford Quays office and a planning application has now been lodged with the city council.",
  ],
  href: "/news/salford-quays-hq-expansion",
};

export const moreStories = [
  {
    category: "IVA Updates",
    icon: RefreshCcw,
    tone: "red" as NewsTone,
    date: "May 2026",
    readTime: "4 min read",
    title: "Debt Advisor Owed Over £26m",
    excerpt:
      "Approximately 8,000 of the company's individual voluntary arrangement (IVA) clients have now been transferred to Salford-based insolvency management firm Anchorage Chambers. According to a new document filed by FRP with Companies House, Balbec had advanced £26m to the company since May 2021.",
    href: "/news/debt-advisor-owed-26m",
  },
  {
    category: "Client Transfer",
    icon: ArrowRightLeft,
    tone: "purple" as NewsTone,
    date: "April 2026",
    readTime: "3 min read",
    title: "Administrators Secure Transfer Of IVA Clients",
    excerpt:
      "The business' existing client book of approximately 8,000 clients has now been successfully transferred to insolvency firm, Anchorage Chambers. The Salford-based company works with clients to help resolve their debt problems using IVAs.",
    href: "/news/administrators-secure-transfer",
  },
  {
    category: "Industry News",
    icon: Eye,
    tone: "teal" as NewsTone,
    date: "March 2026",
    readTime: "6 min read",
    title: "The IVA Advisor: Anchorage Chambers To The Rescue",
    excerpt:
      "One of NTI's greatest clients and friends, Anchorage Chambers, rode to the rescue of the clients of the now defunct IVA Advisor in September when the debt solutions business entered Administration owing more than £26 million.",
    href: "/news/iva-advisor-to-the-rescue",
  },
  {
    category: "Debt Advice",
    icon: DollarSign,
    tone: "amber" as NewsTone,
    date: "February 2026",
    readTime: "4 min read",
    title: "Understanding the Debt Relief Order Eligibility Changes",
    excerpt:
      "The government has confirmed updated eligibility thresholds for Debt Relief Orders, widening access for people with modest assets. Here's what the changes mean for anyone considering a DRO.",
    href: "/news/dro-eligibility-changes",
  },
  {
    category: "Company News",
    icon: Home,
    tone: "red" as NewsTone,
    date: "January 2026",
    readTime: "3 min read",
    title: "Anchorage Chambers Achieves Trustpilot Excellence Rating",
    excerpt:
      "We're proud to have reached a 4.9-star rating from over 2,000 verified reviews on Trustpilot, reflecting our continued commitment to clear, compassionate debt advice.",
    href: "/news/trustpilot-excellence-rating",
  },
  {
    category: "IVA Updates",
    icon: RefreshCcw,
    tone: "red" as NewsTone,
    date: "December 2025",
    readTime: "5 min read",
    title: "IVA Completion Rates Rise Across the North West",
    excerpt:
      "New data shows a steady rise in successful IVA completions across Greater Manchester, with advisors citing better financial education and earlier intervention as key factors.",
    href: "/news/iva-completion-rates-rise",
  },
  {
    category: "Industry News",
    icon: Eye,
    tone: "teal" as NewsTone,
    date: "November 2025",
    readTime: "4 min read",
    title: "FCA Tightens Rules on Debt Solution Advertising",
    excerpt:
      "The Financial Conduct Authority has introduced stricter rules governing how debt solution firms can advertise online, aiming to protect vulnerable consumers from misleading claims.",
    href: "/news/fca-advertising-rules",
  },
  {
    category: "Client Transfer",
    icon: ArrowRightLeft,
    tone: "purple" as NewsTone,
    date: "October 2025",
    readTime: "3 min read",
    title: "Anchorage Chambers Onboards Clients From Closed Islamabad Practice",
    excerpt:
      "Following the closure of a local insolvency practice in Islamabad, Anchorage Chambers has onboarded its existing client caseload to ensure continuity of support.",
    href: "/news/islamabad-practice-onboarding",
  },
];
