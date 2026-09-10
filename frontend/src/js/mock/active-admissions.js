/**
 * Prototype-only Active Admissions snapshot.
 *
 * Isolated from components so it can be deleted when a real source exists.
 * Minimal rows: one ward, enough beds to show occupied vs empty. Not a
 * patient model and not persistence.
 */

export const MOCK_ACTIVE_ADMISSIONS = [
  { ward: "Ward B", bed: "Bed 1", name: "Rahul Sharma" },
  { ward: "Ward B", bed: "Bed 2", name: null },
  { ward: "Ward B", bed: "Bed 3", name: "Amit Kumar" },
  { ward: "Ward B", bed: "Bed 4", name: "Priya Patel" },
];
