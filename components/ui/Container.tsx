import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  as?: "div" | "section" | "article" | "nav";
};

export function Container({
  children,
  className,
  wide = false,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(wide ? "container-wide" : "container-site", className)}>
      {children}
    </Tag>
  );
}
