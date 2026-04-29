import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, PageTransition, RevealLine, SlideReveal } from "@/components/animations";
import type { LocationDetails } from "@/data/locations";

type LocationPageProps = {
  location: LocationDetails;
};

export default function LocationPage({ location }: LocationPageProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground pt-28 md:pt-36 pb-24">
        <section className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              South Delhi Service Area
            </div>
          </FadeIn>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <FadeIn direction="right">
                <SlideReveal>
                  <h1 className="text-4xl font-bold font-display tracking-tight md:text-5xl">
                    {location.headline}
                  </h1>
                </SlideReveal>
                <RevealLine className="mt-4 mb-6 w-16" />
                <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                  {location.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.1} direction="right">
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {location.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm font-medium text-foreground/80">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left">
              <div className="rounded-3xl border border-border/60 bg-slate-50 p-8 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Book a site visit for {location.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Share your property type and camera requirement. Our team will suggest the right setup and schedule a visit.
                </p>
                <div className="mt-8 space-y-4">
                  <a href="tel:+919193232403" className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm font-medium text-foreground/80 transition hover:border-primary/30 hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" />
                    +91 9193232403
                  </a>
                  <Link href="/contact">
                    <Button className="h-12 w-full rounded-full text-base" data-testid={`button-contact-${location.slug}`}>
                      Request Free Survey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
