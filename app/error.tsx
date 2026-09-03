"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-cream py-24">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="headline mt-3 text-4xl">This page could not be loaded.</h1>
        <p className="lead mt-4">
          Please try again. If the problem continues, return home or send a
          note through the contact form.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button type="button" variant="primary" onClick={() => reset()}>
            Try again
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
