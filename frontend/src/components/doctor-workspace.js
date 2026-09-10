/**
 * Doctor Workspace
 *
 * Authenticated clinical shell for the doctor role: sidebar + one of
 * Dashboard / Patients / History / Admissions / New Patient.
 *
 * Only Dashboard is designed. Other destinations are intentional empty
 * placeholders. Identity comes from the session passed into show().
 */

import { getRole, ROLE } from "../js/roles.js";
import { workspacePathFor } from "../js/router.js";
import { MOCK_ACTIVE_ADMISSIONS } from "../js/mock/active-admissions.js";

const NAV_ITEMS = [
  { section: "dashboard", label: "Dashboard" },
  { section: "patients", label: "Patients" },
  { section: "history", label: "History" },
  { section: "admissions", label: "Admissions" },
];

const PLACEHOLDERS = {
  patients: "Patients",
  history: "History",
  admissions: "Admissions",
  "new-patient": "New Patient",
};

class DoctorWorkspace extends HTMLElement {
  show(session, section) {
    this.session = session;
    this.section = section || "dashboard";
    this.hidden = false;
    this.render();
  }

  hide() {
    this.hidden = true;
    this.innerHTML = "";
  }

  render() {
    if (!this.session) return;

    const definition = getRole(this.session.role);
    const section = this.section;

    this.innerHTML = `
      <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg">
        <nav class="mb-stack-md border-b border-outline-variant" aria-label="Doctor workspace">
          <ul class="flex w-full">
            ${NAV_ITEMS.map((item) => this.#navLink(item, section)).join("")}
          </ul>
        </nav>
        <main>
          ${section === "dashboard" ? this.#dashboard(definition) : this.#placeholder(section)}
        </main>
      </div>
    `;
  }

  #navLink(item, section) {
    const active = item.section === section;
    const href = workspacePathFor(ROLE.DOCTOR, item.section);
    const classes = active
      ? "flex flex-1 items-center justify-center px-2 py-2 text-center font-label-md text-label-md text-primary border-b-2 border-secondary"
      : "flex flex-1 items-center justify-center px-2 py-2 text-center font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-secondary";
    const current = active ? ' aria-current="page"' : "";
    return `<li class="flex flex-1 min-w-0"><a class="${classes}" href="${href}"${current}>${item.label}</a></li>`;
  }

  #dashboard(definition) {
    const name = this.session.name;
    const audience = definition ? definition.audience : "";
    const newPatientHref = workspacePathFor(ROLE.DOCTOR, "new-patient");

    return `
      <section aria-labelledby="jap-doctor-identity">
        <p class="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-2">${audience}</p>
        <h1 class="font-headline-md text-headline-md text-primary mb-2" id="jap-doctor-identity">${name}</h1>
        <div class="h-px w-24 bg-secondary mb-stack-md"></div>
        <p>
          <a class="inline-block bg-primary text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors focus:outline-none focus:ring-2 focus:ring-secondary" href="${newPatientHref}">
            New Patient
          </a>
        </p>
      </section>
      <section class="mt-stack-lg" aria-labelledby="jap-active-admissions">
        <h2 class="font-title-lg text-title-lg text-on-surface mb-stack-sm" id="jap-active-admissions">Active Admissions</h2>
        ${this.#admissionsTable()}
      </section>
    `;
  }

  #admissionsTable() {
    const rows = MOCK_ACTIVE_ADMISSIONS.map((row) => {
      const patient = row.name
        ? `<span class="text-on-surface">${row.name}</span>`
        : `<span class="text-on-surface-variant">—</span>`;
      return `
        <tr class="border-b border-outline-variant">
          <td class="py-2 pr-4 font-body-md text-body-md text-on-surface">${row.ward}</td>
          <td class="py-2 pr-4 font-body-md text-body-md text-on-surface">${row.bed}</td>
          <td class="py-2 font-body-md text-body-md">${patient}</td>
        </tr>`;
    }).join("");

    return `
      <div class="overflow-x-auto">
        <table class="w-full text-left border-t border-outline-variant">
          <caption class="sr-only">Currently admitted patients by ward and bed</caption>
          <thead>
            <tr class="border-b border-outline-variant">
              <th class="py-2 pr-4 font-label-md text-label-md text-on-surface-variant" scope="col">Ward</th>
              <th class="py-2 pr-4 font-label-md text-label-md text-on-surface-variant" scope="col">Bed</th>
              <th class="py-2 font-label-md text-label-md text-on-surface-variant" scope="col">Patient</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  #placeholder(section) {
    const title = PLACEHOLDERS[section] || "Doctor Workspace";
    return `
      <section aria-labelledby="jap-placeholder-title">
        <h1 class="font-headline-md text-headline-md text-primary mb-2" id="jap-placeholder-title">${title}</h1>
        <div class="h-px w-24 bg-secondary mb-4"></div>
        <p class="font-body-md text-body-md text-on-surface-variant">This destination is not designed yet.</p>
      </section>
    `;
  }
}

customElements.define("doctor-workspace", DoctorWorkspace);
