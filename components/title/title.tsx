interface TitleProps {
  size?: "text-lg" | "text-xl" | "text-2xl" | "text-3xl";
  color?: "text-white" | "text-primary" | "text-secondary" | "text-gray-500" | "text-gray-900";
  children: React.ReactNode;
}

const Title = ({ children, size = "text-xl", color = "text-gray-900" }: TitleProps) => {
  return <h2 className={`${size} ${color} flex items-center gap-2 font-bold`}>{children}</h2>;
};

export default Title;
