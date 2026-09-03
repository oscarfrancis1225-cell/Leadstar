import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="bg-cream py-24" aria-busy="true" aria-live="polite">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Loading</p>
        <p className="headline mt-3 text-3xl" role="status">
          Getting the next page ready.
        </p>
      </Container>
    </section>
  );
}
