# jan-arogya-portal

## Project Structure

```
frontend/          # Frontend application (static, no build required)
  index.html       # Landing page entry point
  src/
    components/    # Reusable custom elements
    js/            # App entry, role registry, hash router, auth service
      auth/        # Authentication seam: service interface + mock + session
      abdm/        # Patient identity seam: service interface + mock (ABDM-shaped)
      mock/        # Isolated prototype data (not persistence)
    styles/        # Custom CSS and Tailwind theme config
docs/              # Project and engineering documentation
  backend/         # Backend team handbook: vision, contracts, data model, checklists
  engineering/     # Brief, charter, and implementation logs
```

## Routing

The frontend uses hash routes so it stays a static, no-build application:

| Route | View |
| --- | --- |
| `#/` | Public landing page |
| `#/login/<role>` | Role-specific login over the landing page |
| `#/dashboard/<role>` | Signed-in destination (doctor workspace, other roles placeholder) |
| `#/dashboard/doctor/<section>` | Doctor workspace: `patients`, `history`, `admissions`, `new-patient` |
| `#/dashboard/doctor/patient/<record-id>` | Doctor patient context: that patient's record |

Roles: `patient`, `doctor`, `hospital`, `pharmacy`, `laboratory`, `government`
(defined once in `src/js/roles.js`).

Authentication is currently a **mock** in `src/js/auth/mock-auth.js`; components
only ever call `src/js/auth/auth-service.js`. See
`docs/engineering/login-implementation-log.md`.

Patient identity is a second, separate seam: `src/js/abdm/identity-service.js`
(ABHA lookup and one-time-password verification) with `src/js/abdm/mock-identity.js`
as today's implementation. It is deliberately not part of `js/auth/`, which
authenticates the signed-in professional. Patient records — the single source
behind the Profile, the Dashboard's admissions and patient state — are
`src/js/mock/patients.js`. See `docs/engineering/patient-identity-implementation-log.md`.

## Backend team

There is no backend yet. The backend handbook — product vision, the contracts
the frontend expects, the data model, ABDM integration guidance, and the
step-by-step tie-in procedure — lives in [`docs/backend/`](docs/backend/).
Start at [`docs/backend/README.md`](docs/backend/README.md).
