import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-cream py-24">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="headline mt-3 text-4xl">This page is unavailable.</h1>
        <p className="lead mt-4">
          The page you are looking for may have moved. Return home or start a
          conversation with Esther.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
