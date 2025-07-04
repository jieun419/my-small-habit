export type ToastPosition = "bottom" | "top";

let showToast: ((msg: string, position?: ToastPosition) => void) | null = null;

export const toast = (msg: string, position?: ToastPosition) => {
  if (showToast) showToast(msg, position);
};

export const regesterToast = (fn: (msg: string, position?: ToastPosition) => void) => {
  showToast = fn;
};
