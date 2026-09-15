import { CheckCircle2, Users, MapPin } from "lucide-react";

export const leadership = [
  {
    initials: "FN",
    name: "Farhad Naqvi",
    role: "Director",
    bio: "Founding director of Anchorage Chambers, Farhad has led the firm's growth from a UK practice into international operation spanning the UK, Asia and Southern Africa. His vision of ethical, accessible insolvency support underpins everything we do.",
  },
  {
    initials: "RH",
    name: "Ruquia Haider",
    role: "Associate Director",
    bio: "Ruquia oversees operational strategy and client service delivery across Anchorage's portfolio. With a background in financial services compliance, she ensures the firm's processes meet the highest regulatory standards.",
  },
  {
    initials: "TS",
    name: "Tahseen Sheriff",
    role: "Operational Lead",
    bio: "Tahseen manages day-to-day operations across Anchorage's teams, driving efficiency and quality across the client journey. He plays a central role in coordinating between the UK, Asian and Southern African offices.",
  },
  {
    initials: "AS",
    name: "Arif Saeed",
    role: "New Business Lead",
    bio: "Arif leads Anchorage's new business and client intake function, ensuring that people seeking help are assessed promptly, fairly and directed to the most appropriate solution from the outset.",
  },
];

export const practitioners = [
  {
    initials: "NT",
    name: "Nicola Teader",
    credential: "ICAEW Licensed Insolvency Practitioner",
    bio: "A highly experienced Licensed Insolvency Practitioner with extensive expertise in personal insolvency. Nicola has been instrumental in shaping Anchorage's quality assurance framework and has personally visited the Islamabad office to oversee training and compliance.",
    tags: ["Licensed Insolvency Practitioner", "ICAEW Member", "Quality Assurance Lead"],
  },
  {
    initials: "RS",
    name: "Richard Savage",
    credential: "ICAEW Licensed Insolvency Practitioner",
    bio: "Richard is a Licensed Insolvency Practitioner with a strong track record across both personal and corporate insolvency work. His expertise supports Anchorage's clients through complex IVA cases and corporate restructuring engagements.",
    tags: ["Licensed Insolvency Practitioner", "Corporate Insolvency Specialist", "IVA Case Lead"],
  },
];

export type Region = "UK" | "Asia" | "South Africa";

export const regions: Region[] = ["UK", "Asia", "South Africa"];

export const teamMembers: { initials: string; name: string; role: string; region: Region }[] = [
  { initials: "LJ", name: "Laila Jafri", role: "Supervisory Manager", region: "UK" },
  { initials: "FZ", name: "Farhana Zaidi", role: "HR Lead", region: "UK" },
  { initials: "MA", name: "Masood Alam", role: "Country Head", region: "Asia" },
  { initials: "AM", name: "Ali Mohiuddin", role: "Cloud Security Architect", region: "Asia" },
  { initials: "STA", name: "Syed Turab Abbas", role: "Financial Analyst", region: "Asia" },
  { initials: "AA", name: "Annie Alexander", role: "Team Lead", region: "South Africa" },
  { initials: "AN", name: "Abdullah Naeem", role: "Country Lead", region: "Asia" },
  { initials: "SA", name: "Syed Aneeq Ul Hassan Naqvi", role: "DevOps & Infrastructure Lead Engineer", region: "Asia" },
  { initials: "SAb", name: "Saad Abbasi", role: "Functional Lead", region: "Asia" },
];

export const infoCards = [
  {
    icon: CheckCircle2,
    title: "Our mission",
    description:
      "To provide a helping hand to those in financial distress — offering practical, ethical solutions with dignity and respect for every client.",
  },
  {
    icon: Users,
    title: "Our values",
    description:
      "Integrity, transparency and fairness guide everything we do. We treat every client the same — whether they owe £6,000 or £600,000.",
  },
  {
    icon: MapPin,
    title: "Our reach",
    description:
      "Headquartered in Salford with offices in Islamabad and Durban — we support clients across the UK, Asia and Southern Africa.",
  },
];
