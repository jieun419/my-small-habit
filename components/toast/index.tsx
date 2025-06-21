interface ToastProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const Toast = ({ message, type, position, className }: ToastProps) => {
  return (
    <div
      className={`toast flex w-full items-center justify-center rounded-md bg-black/55 px-3 py-4 text-sm text-white ${type} ${position} ${className}`}>
      {message}
    </div>
  );
};

export default Toast;
