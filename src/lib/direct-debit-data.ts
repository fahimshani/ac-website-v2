import {
  MousePointerClick,
  CalendarCheck,
  ShieldCheck,
  Lock,
  UserCheck,
  KeyRound,
  ListChecks,
  CheckCircle2,
} from "lucide-react";

export const ddBenefits = [
  {
    icon: MousePointerClick,
    title: "Set it once",
    description:
      "One quick setup — then your payment is collected automatically every month. No logins, no reminders, no manual transfers.",
  },
  {
    icon: CalendarCheck,
    title: "Never miss a payment",
    description:
      "Automatic collection is agreed the same date each month and track, keeping you free from the stress of remembering.",
  },
  {
    icon: ShieldCheck,
    title: "Full DD Guarantee",
    description:
      "Every payment is covered by the UK Direct Debit Guarantee — if anything goes wrong, you're entitled to an immediate refund.",
  },
  {
    icon: Lock,
    title: "Bank-level security",
    description:
      "Payments processed by GoCardless, trusted by 75,000+ businesses and FCA registered — your bank details are never shared with us.",
  },
];

export const comparisonRows = [
  {
    label: "Automatic collection — no action needed each month",
    dd: true,
    card: false,
  },
  { label: "Protected by the Direct Debit Guarantee", dd: true, card: false },
  { label: "No card expiry or replacement issues", dd: true, card: false },
  { label: "Bank details never shared with us", dd: true, card: false },
  { label: "Works without a debit or credit card", dd: true, card: false },
  { label: "Free to use — no additional charges", dd: true, card: true },
];

export const setupSteps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Confirm your details",
    description:
      "We'll ask for your name and reference — just confirm they're correct. Takes 30 seconds.",
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Enter your bank details",
    description:
      "Your sort code and account number — entered once, secured by GoCardless.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Review & confirm",
    description:
      "Check the details are correct and confirm your Direct Debit with one click.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "You're done",
    description:
      "Your first Direct Debit will be collected on your next payment date. We'll confirm by email.",
  },
];

export const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "FCA Regulated",
    description:
      "Anchorage Chambers is authorised and regulated by the Financial Conduct Authority. Your money is protected.",
  },
  {
    icon: Lock,
    title: "Bank-level encryption",
    description:
      "All data is transmitted using 256-bit TLS encryption — the same standard used by major UK banks.",
  },
  {
    icon: CheckCircle2,
    title: "DD Guarantee",
    description:
      "Every Direct Debit is covered by the UK Direct Debit Guarantee. Cancel at any time and claim immediate refunds.",
  },
  {
    icon: ListChecks,
    title: "Data never sold",
    description:
      "Your personal and banking information is never sold, rented or shared with third parties for marketing purposes.",
  },
];

export const ddTestimonials = [
  {
    initials: "SM",
    quote:
      "Setting up my Direct Debit was so much simpler than I expected. The whole thing took under 3 minutes and now I don't have to worry about it at all.",
    name: "Sarah M.",
    location: "Manchester",
  },
  {
    initials: "JT",
    quote:
      "I was worried my IVA would change, but everything stayed exactly the same. The resource on the page helped me feel confident to go ahead.",
    name: "James T.",
    location: "Leeds, Yorkshire",
  },
  {
    initials: "PL",
    quote:
      "Really easy process. I liked that they explained everything clearly and confusing jargon. Felt like they actually cared about making it simple for me.",
    name: "Patricia L.",
    location: "Birmingham",
  },
];

export const ddFaqs = [
  {
    question: "What is GoCardless and why does it appear on my bank statement?",
    answer:
      "GoCardless is the payment provider we use to process payments on our behalf. If you see 'GoCardless' or 'SC' on behalf of on your bank statement, it relates to a payment made to us.",
  },
  {
    question: "Do I need a GoCardless account to pay by Direct Debit?",
    answer:
      "No — you don't need to sign up for anything separately. GoCardless simply processes the payment securely once you set up your Direct Debit mandate with us.",
  },
  {
    question: "Does GoCardless accept credit or debit cards?",
    answer:
      "No. Direct Debit via GoCardless collects payments directly from your bank account using your sort code and account number — not a card.",
  },
  {
    question: "How do I cancel a Direct Debit?",
    answer:
      "You can cancel at any time by contacting your bank directly, or by getting in touch with our support team who can action it for you.",
  },
  {
    question: "What is a Direct Debit mandate?",
    answer:
      "A Direct Debit mandate is the instruction you give your bank to allow us to collect payments from your account. It's set up once and covers your recurring monthly payment.",
  },
  {
    question: "Why do I receive notifications from GoCardless?",
    answer:
      "GoCardless sends you a notification a few days before each payment is collected, so you always know what's coming out and when.",
  },
  {
    question: "When will my payments be taken?",
    answer:
      "Your payment is collected on the same date each month, matching the date already agreed as part of your IVA.",
  },
  {
    question: "Can I trust GoCardless?",
    answer:
      "Yes. GoCardless is regulated by the FCA and used by over 75,000 businesses worldwide to process billions of pounds in payments securely every year.",
  },
  {
    question: "Is my payment protected?",
    answer:
      "Yes — every payment is covered by the UK Direct Debit Guarantee, which means you're entitled to an immediate refund from your bank if a payment is ever taken in error.",
  },
  {
    question: "Can I change my payment date?",
    answer:
      "Yes, get in touch with our support team and we can help you move your collection date to one that suits you better.",
  },
  {
    question: "What happens if a payment fails?",
    answer:
      "We'll notify you and attempt to collect the payment again. If you think a payment may fail, contact us in advance so we can help avoid any disruption to your arrangement.",
  },
  {
    question: "Will I receive confirmation when a payment is collected?",
    answer:
      "Yes — GoCardless and Anchorage Chambers will both confirm once your payment has been successfully collected each month.",
  },
];
