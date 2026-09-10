/**
 * Router
 *
 * A hash router, because JAP is a static no-build frontend: `#/...` paths work
 * from `file://`-free static hosting (and any plain static server) without the
 * URL-rewrite rules a real path-based router would need.
 *
 * The router deliberately knows nothing about roles, auth or views. It only
 * reads the hash into a small descriptor and lets the app decide what a route
 * means. That keeps this file reusable once a real router or backend routing
 * replaces it.
 */

/** Route paths. Kept in one place so no component builds URLs by hand. */
export function publicPath() {
  return "#/";
}

export function loginPathFor(roleKey) {
  return `#/login/${roleKey}`;
}

export function dashboardPathFor(roleKey) {
  return `#/dashboard/${roleKey}`;
}

/**
 * Turns a location hash into a route descriptor:
 *   "" / "#/"                  -> { name: "public" }
 *   "#/login/doctor"           -> { name: "login", role: "doctor" }
 *   "#/dashboard/doctor"       -> { name: "dashboard", role: "doctor" }
 *   anything else              -> { name: "unknown" }
 *
 * Role validity is intentionally not decided here.
 */
export function parseRoute(hash) {
  const segments = String(hash || "")
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) {
    return { name: "public" };
  }

  if (segments.length === 2 && (segments[0] === "login" || segments[0] === "dashboard")) {
    return { name: segments[0], role: segments[1] };
  }

  return { name: "unknown" };
}

export function currentRoute() {
  return parseRoute(window.location.hash);
}

export function navigate(path, { replace = false } = {}) {
  if (replace) {
    // Keep the history stack clean: correcting an invalid URL should not create
    // a history entry the user has to step back through.
    window.location.replace(`${window.location.pathname}${window.location.search}${path}`);
  } else if (window.location.hash !== path) {
    window.location.hash = path;
  }
}

/**
 * Starts route notifications. `onRoute` runs immediately for the current hash
 * and then on every change, so the app only needs one place to react to URLs.
 */
export function startRouter(onRoute) {
  const handle = () => onRoute(currentRoute());
  window.addEventListener("hashchange", handle);
  handle();
}
