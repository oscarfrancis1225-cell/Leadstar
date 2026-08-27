import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-cream">
      <Container className="max-w-3xl py-14 lg:py-20">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="headline mt-3 text-4xl sm:text-5xl">{title}</h1>
        {description ? <p className="lead mt-5">{description}</p> : null}
      </Container>
    </section>
  );
}
