import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function EditorialImage({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  sizes,
  className,
}: EditorialImageProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <SmartImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="w-full rounded-[16px] object-cover"
      />
      {caption ? (
        <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
