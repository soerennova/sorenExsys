export interface Customer {
  name: string;
  address: string;
  phone: string;
  mail: string;
  date: string;
  time: string;
}

export type Mode = "service" | "firstService" | "montage";

export const modes: Array<{ mode: Mode; name: String }> = [
  { mode: "firstService", name: "FØRSTE SERVICE" },
  { mode: "service", name: "SERVICE" },
  { mode: "montage", name: "MONTAGE" },
];
