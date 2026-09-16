import { ShieldCheck, BookOpen, RefreshCcw, Phone, MapPin, Mail } from "lucide-react";

export const faqJumpLinks = [
  { icon: ShieldCheck, label: "IVA FAQs", href: "#iva" },
  { icon: BookOpen, label: "Bankruptcy FAQs", href: "#bankruptcy" },
  { icon: RefreshCcw, label: "Direct Debit FAQs", href: "#direct-debit" },
];

export const ivaFaqs = [
  {
    question: "What is an IVA?",
    answer:
      "An Individual Voluntary Arrangement (IVA) is an agreement with your creditors to pay all or part of your debts. You agree to make regular payments to an insolvency practitioner, who will divide this money between your creditors. An IVA can give you more control of your assets than bankruptcy.",
  },
  {
    question: "Which Debts can be included in an IVA?",
    answer:
      "Most unsecured debts can be included, such as credit cards, loans, overdrafts and utility arrears. Secured debts like your mortgage are not included, though you must keep up separate payments on those.",
  },
  {
    question: "How will the amount of my payment be determined?",
    answer:
      "Your monthly payment is based on your disposable income after essential living costs are accounted for — the amount you can reasonably afford once housing, bills and other necessities are covered.",
  },
  {
    question: "Can you help if I have CCJs?",
    answer:
      "Yes. County Court Judgments (CCJs) for unsecured debt can typically be included in an IVA, and the underlying debt is treated the same as any other qualifying creditor claim.",
  },
  {
    question: "Is it necessary to be employed?",
    answer:
      "No, but you do need a regular source of income — whether from employment, self-employment, benefits or another verifiable source — to make the agreed monthly payments.",
  },
  {
    question: "Will you inform my employer about the IVA?",
    answer:
      "No. An IVA is a private arrangement between you and your creditors. We do not contact your employer, and there is no obligation for you to disclose it at work.",
  },
  {
    question: "Will the IVA affect my credit rating and how?",
    answer:
      "Yes, an IVA is recorded on your credit file and will typically remain there for six years from the start date, which may affect your ability to obtain credit during that time.",
  },
  {
    question: "What are the Fees and Costs?",
    answer:
      "Our fees are built into your monthly payment and are only charged once your IVA is approved — there are no upfront costs for the initial consultation or proposal.",
  },
  {
    question: "How do I apply for an IVA?",
    answer:
      "Start with a free consultation with one of our advisors. We'll assess your situation, prepare a tailored proposal, and present it to your creditors for approval.",
  },
  {
    question: "Is Anchorage Chambers Connected to a Professional Body?",
    answer:
      "Yes. Our Insolvency Practitioners are licensed and regulated by ICAEW, ensuring every case is handled to the highest professional and ethical standards.",
  },
  {
    question: "How certain is it that my creditors will agree to an IVA?",
    answer:
      "If creditors representing at least 75% of your total debt by value vote to accept the proposal, the IVA becomes legally binding on all creditors, including those who voted against it.",
  },
  {
    question: "What will happen when the IVA ends?",
    answer:
      "Once you've completed all agreed payments, typically after five years, any remaining qualifying debt included in the arrangement is legally written off.",
  },
  {
    question: "What happens if my creditors do not agree to an IVA?",
    answer:
      "If the required 75% approval isn't reached, the proposal will need to be revised, or we'll discuss alternative debt solutions that may be more suitable for your situation.",
  },
  {
    question: "What if I fail to make payments according to the terms?",
    answer:
      "Missing payments can put your IVA at risk of failing. Contact us as soon as possible if your circumstances change — we can often review and adjust your proposal before this happens.",
  },
];

export const bankruptcyFaqs = [
  {
    question: "What is bankruptcy?",
    answer:
      "Bankruptcy is a formal legal process that writes off debts you're unable to pay. Most unsecured debts are cleared, giving you a fresh financial start, though it can affect your assets and credit rating.",
  },
  {
    question: "Who can be made bankrupt?",
    answer:
      "Any individual who is unable to pay their debts can apply for their own bankruptcy through the Insolvency Service. Creditors can also petition to make someone bankrupt in certain circumstances.",
  },
  {
    question: "Which debts can be included in bankruptcy?",
    answer:
      "Most unsecured debts qualify, including credit cards, loans, overdrafts and utility arrears. Certain debts, such as court fines and student loans, are not included.",
  },
  {
    question: "How will the amount of my payment be determined?",
    answer:
      "If you have disposable income after bankruptcy, you may be asked to make payments through an Income Payments Agreement for up to three years.",
  },
  {
    question: "Do you charge a fee for bankruptcy advice?",
    answer:
      "Our initial consultation is free. If you decide to proceed, we'll explain all associated costs clearly before you commit to anything.",
  },
  {
    question: "Will it affect my employment?",
    answer:
      "Most people can continue working as normal, though certain professions with regulatory or financial responsibilities may be affected. We can advise on your specific situation.",
  },
  {
    question: "Do I have to pay a fee?",
    answer:
      "Yes, there is a court adjudicator fee to apply for bankruptcy, which is separate from any advice fees. We'll explain the current cost during your consultation.",
  },
  {
    question: "How do I apply for bankruptcy?",
    answer:
      "Applications are made online through the government's Insolvency Service. We can guide you through every step of the process.",
  },
  {
    question: "Who deals with my bankruptcy case?",
    answer:
      "A Licensed Insolvency Practitioner, known as the trustee, is appointed to manage your case, realise any assets and deal with your creditors.",
  },
  {
    question: "Is Anchorage Chambers Connected to a Professional Body?",
    answer:
      "Yes. Our Insolvency Practitioners are licensed and regulated by ICAEW, ensuring every case is handled to the highest professional and ethical standards.",
  },
  {
    question: "What happens to my home?",
    answer:
      "If you own your home, your trustee will consider any equity as part of the bankruptcy estate, though there are often options to protect your home depending on your circumstances.",
  },
  {
    question: "How long does bankruptcy last?",
    answer:
      "Bankruptcy typically lasts 12 months, after which you are discharged and most remaining qualifying debts are written off.",
  },
  {
    question: "Is my bankruptcy public?",
    answer:
      "Yes, bankruptcy is recorded on the public Individual Insolvency Register for the duration of the bankruptcy and for three months after discharge.",
  },
  {
    question: "Will the bankruptcy affect my credit rating and how?",
    answer:
      "Yes, bankruptcy is recorded on your credit file for six years from the date it was made, which will affect your ability to obtain credit during that time.",
  },
];

export const contactMethods = [
  {
    icon: Phone,
    badge: "Free call",
    title: "Call Us",
    description:
      "Speak directly with our support team. Available Monday to Friday, 9am-5pm.",
    linkLabel: "0800 XXX XXXX",
    href: "tel:0800XXXXXX",
  },
  {
    icon: MapPin,
    badge: "Salford Quays",
    title: "Visit Our Office",
    description:
      "We're based at Anchorage Chambers Limited, 252 The Quays, Salford, M50 3SD.",
    linkLabel: "Get Directions",
    href: "/contact#offices",
  },
  {
    icon: Mail,
    badge: "1 working day",
    title: "Email Us",
    description:
      "Send us an email and our team will respond within one working day.",
    linkLabel: "info@anchoragechambers.co.uk",
    href: "mailto:info@anchoragechambers.co.uk",
  },
];
