import { LegalLayout, Section } from "./LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use" updated="26 September 2026">
      <p>
        These terms cover the Jan Arogya Nexus prototype only. They are written for what this project
        actually is: a student competition demo, not a commercial agreement.
      </p>

      <Section h="What this is">
        <p>
          Jan Arogya Nexus is a functional prototype demonstrating consent-aware clinical context
          assembly across simulated hospitals, laboratories and pharmacies, built for the Avishkar
          Engineering &amp; Technology competition. It is provided for demonstration, evaluation and
          research purposes only.
        </p>
      </Section>

      <Section h="Not a real healthcare service">
        <p>
          Nothing in this application is medical advice, a diagnosis, or a substitute for care from a
          qualified professional. It is not affiliated with, endorsed by, or a certified integration with
          the Ayushman Bharat Digital Mission (ABDM), the National Health Authority, or any government
          body. It does not claim HIPAA, DPDP, or ABDM production certification.
        </p>
      </Section>

      <Section h="No warranty">
        <p>
          The prototype is provided "as is", without warranty of any kind. Its authors are not liable for
          any decision made, or action taken, on the basis of anything shown in this demo.
        </p>
      </Section>

      <Section h="Demo data and accounts">
        <p>
          All data in the application is synthetic. Any resemblance between a demo persona and a real
          person is coincidental. The sign-in flow uses seeded demo accounts only; do not enter real
          credentials, real personal health information, or any other real personal data into this
          prototype.
        </p>
      </Section>

      <Section h="Use of this prototype">
        <p>
          You may explore, demonstrate, and evaluate this prototype for the purpose it was built for:
          the Avishkar submission and related review. Reuse of the underlying code beyond that context is
          governed by whatever licence, if any, accompanies its source repository.
        </p>
      </Section>

      <Section h="Changes">
        <p>
          These terms may be updated as the prototype changes ahead of, or during, the competition. The
          date at the top of this page reflects the last update.
        </p>
      </Section>
    </LegalLayout>
  );
}
