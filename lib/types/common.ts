export type Size = "sm" | "md" | "lg";

export type Status = "idle" | "loading" | "success" | "error";

export interface SelectOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
}
