/**
 * TopNavBar Component
 * Primary navigation with login dropdown for ecosystem participants.
 * Login actions are placeholders (frontend only).
 */
class TopNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline docked full-width top-0 z-50">
        <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16">
          <a class="text-title-lg font-title-lg font-bold text-primary dark:text-inverse-primary flex items-center gap-2" href="#">
            Jan Arogya Portal
          </a>

          <!-- Desktop Nav Links -->
          <div class="hidden md:flex gap-8 items-center h-full">
            <a class="text-primary dark:text-inverse-primary border-b-2 border-secondary font-bold pb-1 h-full flex items-center hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors px-2" href="#">
              <span class="font-label-md text-label-md">Home</span>
            </a>
            <a class="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center hover:bg-surface-container-high dark:hover:bg-surface-container px-2" href="#">
              <span class="font-label-md text-label-md">About</span>
            </a>
            <a class="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center hover:bg-surface-container-high dark:hover:bg-surface-container px-2" href="#">
              <span class="font-label-md text-label-md">Services</span>
            </a>
            <a class="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center hover:bg-surface-container-high dark:hover:bg-surface-container px-2" href="#">
              <span class="font-label-md text-label-md">FAQs</span>
            </a>
            <a class="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center hover:bg-surface-container-high dark:hover:bg-surface-container px-2" href="#">
              <span class="font-label-md text-label-md">Contact</span>
            </a>
          </div>

          <!-- Trailing Actions -->
          <div class="flex items-center gap-4 text-primary dark:text-inverse-primary">
            <button aria-label="Select language" class="hover:bg-surface-container-high dark:hover:bg-surface-container p-2 rounded-full transition-colors">
              <span class="material-symbols-outlined">language</span>
            </button>
            <button aria-label="Accessibility options" class="hover:bg-surface-container-high dark:hover:bg-surface-container p-2 rounded-full transition-colors">
              <span class="material-symbols-outlined">accessibility</span>
            </button>

            <!-- Login Dropdown - placeholder actions only -->
            <div class="relative dropdown-container h-full flex items-center">
              <button class="bg-primary text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-secondary" aria-haspopup="true" aria-expanded="false">
                Login
                <span class="material-symbols-outlined text-sm">arrow_drop_down</span>
              </button>
              <div class="dropdown-menu absolute top-full right-0 mt-1 w-48 bg-surface-container-lowest border border-outline-variant rounded shadow-md z-50 overflow-hidden">
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors border-b border-outline-variant/50" href="#" data-role="patient">Patient</a>
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors border-b border-outline-variant/50" href="#" data-role="doctor">Doctor</a>
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors border-b border-outline-variant/50" href="#" data-role="hospital">Hospital</a>
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors border-b border-outline-variant/50" href="#" data-role="pharmacy">Pharmacy</a>
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors border-b border-outline-variant/50" href="#" data-role="laboratory">Laboratory</a>
                <a class="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors bg-surface-container-highest/20 font-medium" href="#" data-role="government">Government</a>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Toggle (visible only on mobile) -->
          <button class="md:hidden p-2 text-on-surface-variant" aria-label="Open menu">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    `;

    // Placeholder: prevent navigation for login items (frontend only)
    this.querySelectorAll('[data-role]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        // Intentionally no backend logic - placeholder as per task scope
        console.log(`Login placeholder clicked for role: ${anchor.dataset.role}`);
      });
    });
  }
}

customElements.define('top-navbar', TopNavbar);
