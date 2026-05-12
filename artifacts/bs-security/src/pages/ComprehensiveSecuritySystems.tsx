import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, Flame, Siren, Radio, SatelliteDish, Smartphone, Building2, Home, ShieldCheck, Video, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon, RevealLine, FloatingElement, CountUp } from "@/components/animations";

const stats = [
  { value: 5, suffix: "+", label: "Protection layers" },
  { value: 24, suffix: "/7", label: "Monitoring service" },
  { value: 2, suffix: "+", label: "Site types" },
  { value: 100, suffix: "%", label: "Configured coverage" },
];

const chapters = [
  {
    icon: ShieldAlert,
    title: "Comprehensive Security Solutions start with risk mapping",
    desc: "The strongest comprehensive security solutions begin with a clear map of entrances, blind spots, critical assets, and the people who need protection first.",
  },
  {
    icon: Flame,
    title: "Fire alarms and burglar alarms together",
    desc: "Fire alarms handle life safety while burglar alarms handle intrusion detection. When both are planned together, the site gets faster recognition and better response.",
  },
  {
    icon: Siren,
    title: "Safety alarm and wireless alarm options",
    desc: "A safety alarm can warn occupants, security staff, or visitors. A wireless alarm speeds deployment and reduces the amount of intrusive wiring needed on site.",
  },
  {
    icon: SatelliteDish,
    title: "Networking solutions and mobile network booster support",
    desc: "Networking solutions keep the system connected and manageable. A mobile network booster can help where signal quality is weak and backup connectivity matters.",
  },
];

const layers = [
  "Comprehensive Security Systems for entrances, perimeters, and internal movement.",
  "Security monitoring that checks video, alarm, and access events in one flow.",
  "Residential security system design for homes, apartments, and gated communities.",
  "Commercial security systems for offices, warehouses, and retail counters.",
  "Wireless Security System options where speed or flexibility is important.",
];

const scenarios = [
  {
    icon: Building2,
    title: "Commercial security systems",
    text: "Businesses need layered alerts, recorded evidence, and response rules that protect assets without interrupting operations.",
  },
  {
    icon: Home,
    title: "Residential security system",
    text: "Homes typically need fewer devices than businesses, but the layout still benefits from clear entrances, safe exits, and reliable monitoring service.",
  },
  {
    icon: Radio,
    title: "Alarm Systems and silent escalation",
    text: "Alarm Systems should not just make noise. They should create the right sequence of alerts, including silent or discreet escalation when necessary.",
  },
  {
    icon: Video,
    title: "Video systems and camera visibility",
    text: "Video systems support verification, incident review, and operator confidence. When paired with security monitoring, they become much more effective.",
  },
];

export default function ComprehensiveSecuritySystems() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-7rem] top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <FadeIn>
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Comprehensive Security Solutions
                </motion.div>

                <SlideReveal>
                  <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                    Comprehensive Security Systems for modern homes, offices, and critical sites
                  </h1>
                </SlideReveal>

                <RevealLine className="w-20 my-6 bg-white/60" />

                <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8">
                  This article connects comprehensive security systems, commercial security systems, residential security system planning, burglar alarms, fire alarms, safety alarm design, monitoring service rules, and networking solutions into one practical framework.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8 bg-white text-slate-950 hover:bg-white/90">
                      Request a security design
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="rounded-full px-8 border-white/25 text-white hover:bg-white/10">
                      Explore services
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <div className="relative">
              <FloatingElement amplitude={12} duration={4.5} className="hidden lg:block absolute -top-8 right-8">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur text-white">
                  <div className="text-sm text-white/70">Monitoring service</div>
                  <div className="text-3xl font-bold">24/7</div>
                </div>
              </FloatingElement>

              <AnimatedCard>
                <Card className="border border-white/10 bg-white/5 text-white shadow-xl backdrop-blur">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                          <div className="text-3xl font-bold text-cyan-300 mb-1">
                            <CountUp to={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-sm text-white/65">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <FadeIn>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Systems thinking</p>
              <SlideReveal>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">One plan should connect alarms, cameras, and response</h2>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mt-4 mb-5" />
              <p className="text-lg text-foreground/70">
                The point of a comprehensive system is to avoid isolated devices. Every signal should have a clear destination, a clear owner, and a clear action.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
              <AnimatedCard key={chapter.title}>
                <Card className="h-full border border-border/50 shadow-sm overflow-hidden">
                  <CardContent className="p-8">
                    <AnimatedIcon className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <chapter.icon className="h-7 w-7 text-primary" />
                    </AnimatedIcon>
                    <h3 className="text-2xl font-bold mb-3">{chapter.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{chapter.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Security layers worth planning together</h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                {layers.map((layer) => (
                  <div key={layer} className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p>{layer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Common scenarios for commercial and residential sites</h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
                {scenarios.map((scenario) => (
                  <StaggerItem key={scenario.title} direction="scale">
                    <div className="rounded-2xl border border-border/50 bg-slate-50 p-5 h-full">
                      <AnimatedIcon className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <scenario.icon className="h-5 w-5 text-primary" />
                      </AnimatedIcon>
                      <h3 className="text-lg font-semibold mb-2">{scenario.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{scenario.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white border border-slate-800 p-8 md:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-cyan-300 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Final recommendation</p>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Match the system to the threat, not just the budget</h2>
                <p className="text-lg text-white/75 leading-relaxed mb-6">
                  A good security plan blends comprehensive security systems, commercial security systems, safety alarm rules, fire alarms, monitoring service, and networking solutions so the site can respond to real events without confusion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="rounded-full px-8 bg-white text-slate-950 hover:bg-white/90">
                      Talk to a security expert
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/insights/security-doors-silent-alarms">
                    <Button variant="outline" className="rounded-full px-8 border-white/25 text-white hover:bg-white/10">
                      Read layered protection guide
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Flame, label: "Fire alarms" },
                  { icon: ShieldAlert, label: "Burglar alarms" },
                  { icon: Smartphone, label: "Mobile monitoring" },
                  { icon: SatelliteDish, label: "Networking solutions" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <AnimatedIcon className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <item.icon className="h-5 w-5 text-cyan-300" />
                    </AnimatedIcon>
                    <div className="font-semibold text-white">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
