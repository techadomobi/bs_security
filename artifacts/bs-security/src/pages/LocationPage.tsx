import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Video, Wrench, Building2, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, PageTransition, RevealLine, SlideReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import type { LocationDetails } from "@/data/locations";
import { locationRoutes } from "@/data/locations";

type LocationPageProps = {
  location: LocationDetails;
};

export default function LocationPage({ location }: LocationPageProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden pt-28 md:pt-36">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
          <div className="container relative z-10 mx-auto px-4 md:px-6 pb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                South Delhi Service Area
              </div>
            </FadeIn>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <FadeIn direction="right">
                  <SlideReveal>
                    <h1 className="text-4xl font-bold font-display tracking-tight md:text-6xl">
                      {location.headline}
                    </h1>
                  </SlideReveal>
                  <RevealLine className="mt-4 mb-6 w-16" />
                  <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                    {location.subheadline}
                  </p>
                </FadeIn>

                <FadeIn delay={0.1} direction="right">
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {location.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-border/60 bg-white/90 p-5 shadow-sm backdrop-blur">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="mt-1 text-sm text-foreground/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="right">
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contact">
                      <Button className="h-12 rounded-full px-8 text-base" data-testid={`button-contact-${location.slug}`}>
                        Request Free Survey
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <a href="tel:+919193232403">
                      <Button variant="outline" className="h-12 rounded-full px-8 text-base">
                        <Phone className="mr-2 h-4 w-4" />
                        Call +91 9193232403
                      </Button>
                    </a>
                  </div>
                </FadeIn>
              </div>

              <FadeIn direction="left">
                <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-xl">
                  <img
                    src={location.heroImage}
                    alt={`${location.name} CCTV services`}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                {location.intro.map((paragraph) => (
                  <FadeIn key={paragraph} direction="right">
                    <p className="text-lg leading-8 text-foreground/70">{paragraph}</p>
                  </FadeIn>
                ))}
              </div>

              <FadeIn direction="left">
                <div className="rounded-3xl border border-border/60 bg-slate-50 p-8 shadow-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <ShieldCheck className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Why people choose us in {location.name}</h2>
                  <div className="mt-6 space-y-4">
                    {location.whyChoose.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm leading-6 text-foreground/70">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold font-display md:text-4xl">Coverage highlights for {location.name}</h2>
              <p className="mt-4 max-w-3xl text-lg text-foreground/70">
                The right camera plan depends on layout, entry points, daily movement, and how long you need recordings. These are the most common priorities we handle in {location.name}.
              </p>
            </FadeIn>
            <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" staggerDelay={0.08}>
              {location.highlights.map((highlight) => (
                <StaggerItem key={highlight} direction="up">
                  <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-sm">
                    <Video className="h-10 w-10 text-primary" />
                    <p className="mt-4 text-base font-semibold leading-7">{highlight}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <FadeIn direction="right">
                <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Ideal properties in {location.name}</h2>
                  </div>
                  <div className="mt-6 grid gap-4">
                    {location.idealFor.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-foreground/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Services we provide</h2>
                  </div>
                  <div className="mt-6 grid gap-4">
                    {location.services.map((service) => (
                      <div key={service} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                        <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-sm font-medium text-foreground/80">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold font-display md:text-4xl">How our installation process works</h2>
              <p className="mt-4 max-w-3xl text-lg text-white/70">
                Every {location.name} project starts with layout understanding and ends with a system you can actually use without confusion.
              </p>
            </FadeIn>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "We inspect your entry points, blind spots, and wiring path requirements.",
                "We recommend camera count, storage size, and recording type for the property.",
                "Our team installs the system with proper alignment, power, and recorder setup.",
                "We test playback, configure mobile viewing, and explain daily usage clearly.",
              ].map((step, index) => (
                <FadeIn key={step} delay={index * 0.08}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                    <p className="mt-3 leading-7 text-white/80">{step}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold font-display md:text-4xl">Frequently asked questions for {location.name}</h2>
            </FadeIn>
            <div className="mt-10 grid gap-6">
              {location.faqs.map((faq, index) => (
                <FadeIn key={faq.question} delay={index * 0.08}>
                  <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-sm">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-foreground/70">{faq.answer}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <FadeIn direction="right">
                <div>
                  <h2 className="text-3xl font-bold font-display md:text-4xl">Nearby service areas</h2>
                  <p className="mt-4 max-w-2xl text-lg text-foreground/70">
                    If you are comparing nearby locations, these pages are also available with dedicated city URLs.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {location.nearby.map((city) => (
                      <Link key={city} href={locationRoutes[city]}>
                        <div className="rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-medium text-foreground/80 transition hover:border-primary/40 hover:text-primary">
                          {city}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <Link href="/contact">
                  <Button className="h-12 rounded-full px-8 text-base">
                    Book Your Free Site Survey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
