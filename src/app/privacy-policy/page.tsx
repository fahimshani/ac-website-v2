import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/sections/legal/LegalPageLayout";
import { privacyPolicySections, privacyPolicyLastUpdated } from "@/lib/privacy-policy-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Anchorage Chambers",
  description:
    "How Anchorage Chambers Limited collects, uses, stores, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      label="Legal"
      title="Privacy Policy"
      lastUpdated={privacyPolicyLastUpdated}
      intro={
        <>
          This Privacy Policy explains how Anchorage Chambers Limited
          collects, uses, stores, and protects your personal information when
          you use our services or visit our website. Please read it
          carefully alongside our{" "}
          <Link href="/terms" className="font-semibold text-brand-700 hover:text-brand-800">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/cookie-policy"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            Cookie Policy
          </Link>
          .
        </>
      }
      sections={privacyPolicySections}
    />
  );
}
