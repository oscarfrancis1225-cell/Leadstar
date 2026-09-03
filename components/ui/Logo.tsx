import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/images";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  priority?: boolean;
  compact?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Logo({
  className,
  inverted = false,
  priority = false,
  compact = false,
  onClick,
}: LogoProps) {
  if (inverted) {
    return (
      <Link
        href="/"
        onClick={onClick}
        className={cn(
          "group flex shrink-0 items-center gap-3 rounded-lg text-white",
          className,
        )}
      >
        <Image
          src={siteImages.mark.src}
          alt=""
          width={siteImages.mark.width}
          height={siteImages.mark.height}
          className="h-10 w-10 object-contain"
        />
        <span className="min-w-0 leading-tight">
          <span className="block whitespace-nowrap font-serif text-[1.2rem] font-medium tracking-[-0.02em]">
            {siteConfig.name}
          </span>
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/70">
            {siteConfig.tagline}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group flex min-w-0 shrink items-center rounded-lg", className)}
    >
      <Image
        src={siteImages.logo.src}
        alt={siteConfig.name}
        width={siteImages.logo.width}
        height={siteImages.logo.height}
        priority={priority}
        className={cn(
          "w-auto object-contain object-left",
          compact
            ? "h-8 max-w-[11.5rem]"
            : "h-11 max-w-[min(100%,15rem)] sm:h-12 sm:max-w-[18rem] lg:h-14 lg:max-w-[22rem]",
        )}
      />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
