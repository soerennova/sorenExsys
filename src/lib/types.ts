export interface Customer {
  name: string;
  address: string;
  phone: string;
  mail: string;
  date: string;
  time: string;
}

export type Mode = "serviceMode" | "montageMode";

export const modes: Array<{ mode: Mode; name: String }> = [
  { mode: "serviceMode", name: "SERVICE" },
  { mode: "montageMode", name: "MONTAGE" },
];
