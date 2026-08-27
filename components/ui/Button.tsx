import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "blue" | "gold" | "secondary" | "ghost";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

type ButtonAsButton = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  blue: "btn-blue",
  gold: "btn-gold",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  const classes = cn("btn", variantClass[variant], className);
  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="btn-arrow h-4 w-4" aria-hidden /> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
