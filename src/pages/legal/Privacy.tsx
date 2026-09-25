import { LegalLayout, Section } from "./LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="26 September 2026">
      <p>
        Jan Arogya Nexus is a working prototype built for the Avishkar Engineering &amp; Technology
        competition. This page describes, plainly and specifically, what this demo actually does with
        data, rather than reusing generic privacy-policy boilerplate that would not be true of it.
      </p>

      <Section h="This is a demo, not a live health record system">
        <p>
          Every patient, clinician, organisation, consent, prescription and audit entry you see in the
          product is synthetic demonstration data, written for this prototype. No real patient, provider
          or hospital is represented, and no real health information is processed anywhere in the
          application.
        </p>
      </Section>

      <Section h="What the app stores, and where">
        <p>
          In its default demo mode, Jan Arogya Nexus keeps its entire dataset in your browser's local
          storage. Nothing is sent to a server: there is no backend database, no analytics collection, and
          no third party the app reports to. Clearing your browser's site data for this app, or using the
          "Reset demo data" control in the sidebar, erases everything and restores the original seed.
        </p>
        <p>
          The codebase includes an optional integration with{" "}
          <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-brand-400 hover:text-brand-300">
            Supabase
          </a>{" "}
          for a future production deployment. It is not enabled in this demo. If a project maintainer
          configures it, authentication and data would move to that Supabase project under Supabase's own
          security model, and this policy would be updated before that happened.
        </p>
      </Section>

      <Section h="Accounts and sign-in">
        <p>
          There is no real account system. Signing in selects one of a fixed set of seeded demo personas;
          no password is checked, and no email address, phone number or credential you might type on the
          sign-in screen is transmitted, stored, or verified anywhere.
        </p>
      </Section>

      <Section h="ABHA / ABDM identity">
        <p>
          The "ABHA lookup" and OTP flow in the patient-registration screen is a local simulation. It does
          not contact the ABDM Gateway or any government system, does not verify a real ABHA number, and
          the OTP is always a fixed demo code shown on screen. No real government health identity is
          created, read, or stored.
        </p>
      </Section>

      <Section h="Cookies and tracking">
        <p>
          The app does not set tracking or advertising cookies and does not use any analytics or
          fingerprinting script. The only browser storage it uses is local storage, holding the demo
          dataset and your chosen theme (light or dark), both scoped to your own browser.
        </p>
      </Section>

      <Section h="Contact">
        <p>
          This prototype has no support desk or data-protection officer. Questions about it should go to
          whoever is presenting or maintaining it for the Avishkar submission, not to a third party.
        </p>
      </Section>
    </LegalLayout>
  );
}
