# jan-arogya-portal

## Project Structure

```
frontend/          # Frontend application (static, no build required)
  index.html       # Landing page entry point
  src/
    components/    # Reusable custom elements
    js/            # App entry, role registry, hash router, auth service
      auth/        # Authentication seam: service interface + mock + session
      mock/        # Isolated prototype data (not persistence)
    styles/        # Custom CSS and Tailwind theme config
docs/              # Project and engineering documentation
```

## Routing

The frontend uses hash routes so it stays a static, no-build application:

| Route | View |
| --- | --- |
| `#/` | Public landing page |
| `#/login/<role>` | Role-specific login over the landing page |
| `#/dashboard/<role>` | Signed-in destination (doctor workspace, other roles placeholder) |
| `#/dashboard/doctor/<section>` | Doctor workspace: `patients`, `history`, `admissions`, `new-patient` |

Roles: `patient`, `doctor`, `hospital`, `pharmacy`, `laboratory`, `government`
(defined once in `src/js/roles.js`).

Authentication is currently a **mock** in `src/js/auth/mock-auth.js`; components
only ever call `src/js/auth/auth-service.js`. See
`docs/engineering/login-implementation-log.md`.
