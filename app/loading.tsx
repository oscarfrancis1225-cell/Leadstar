import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="bg-cream py-24" aria-busy="true" aria-live="polite">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Loading</p>
        <h1 className="headline mt-3 text-3xl">Getting the next page ready.</h1>
      </Container>
    </section>
  );
}
