import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, DoorOpen, AlarmClock, Users, Camera, Shield, Eye, PhoneCall, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon, FloatingElement, RevealLine, CountUp } from "@/components/animations";

const stats = [
  { value: 24, suffix: "/7", label: "Security monitoring" },
  { value: 3, suffix: "+", label: "Protection layers" },
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 100, suffix: "%", label: "Response visibility" },
];

const pillars = [
  {
    icon: DoorOpen,
    title: "Security doors and security bars",
    desc: "The first layer is physical. Reinforced security doors, security bars, and quality hardware slow down forced entry and buy time for the rest of the system to respond.",
  },
  {
    icon: AlarmClock,
    title: "Silent alarms and panic response",
    desc: "Silent alarms let a homeowner or shop manager trigger help without escalating the situation. They are useful at reception desks, cash counters, and residential entrances.",
  },
  {
    icon: ShieldCheck,
    title: "Access control systems",
    desc: "Access control systems help control who gets in, when they get in, and which areas they can reach. That makes the overall environment cleaner and easier to monitor.",
  },
  {
    icon: Eye,
    title: "Security monitoring and visibility",
    desc: "Security monitoring connects the front door, the camera view, and the response workflow so events are seen, logged, and acted on without delay.",
  },
];

const sections = [
  {
    title: "Design a residential security system from the outside in",
    content: [
      "A residential security system works best when it starts at the perimeter. Secure the gate, the main entrance, balcony access, and any service entry before thinking about sensors and software.",
      "Many homes also benefit from window security bars and door reinforcement because these upgrades are simple, visible, and effective. They are especially helpful when the property is left unattended for long hours.",
      "When the structure is prepared, add camera views, motion sensing, and silent alarms so the property has both deterrence and alerting capabilities.",
    ],
  },
  {
    title: "How silent alarms change the response pattern",
    content: [
      "Silent alarms are valuable because they avoid drawing attention while still notifying the right people. In practice, they support staff safety, customer safety, and emergency coordination.",
      "For shops, silent alarms can be paired with security monitoring so a supervisor or monitoring desk receives an immediate signal. For homes, the same approach can be tied to a trusted contact list.",
      "The aim is not just to alarm loudly. The aim is to create a dependable response chain that helps people move, notify, and react in the right order.",
    ],
  },
  {
    title: "Why security monitoring matters after installation",
    content: [
      "A lot of security projects stop at installation. In reality, security monitoring is what turns hardware into a live protection system.",
      "Monitoring service can include event review, camera verification, alarm confirmation, and escalation rules for different threat levels. That is where the value of comprehensive planning becomes visible.",
      "If the doors, alarms, and cameras are all running but nobody is watching the events, the system is only half built.",
    ],
  },
  {
    title: "Where commercial security systems borrow from home design",
    content: [
      "Commercial security systems and residential security system planning often share the same foundation: visible deterrence, discreet alerts, and fast human response.",
      "The difference is scale. A business may need more access control systems, more silent alarms, and more structured monitoring service rules, while a home may focus on fewer but more strategic points.",
      "In both cases, the objective stays the same. Keep the route into the property difficult, keep the alert path quiet, and keep the response path fast.",
    ],
  },
];

export default function SecurityDoorsSilentAlarms() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8rem] top-[-6rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-[-5rem] h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <FadeIn>
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
                >
                  <Shield className="h-4 w-4" />
                  Security Doors, Silent Alarms, Security Monitoring
                </motion.div>

                <SlideReveal>
                  <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                    Build a safer property with <span className="text-primary">security doors</span>, <span className="text-primary">silent alarms</span>, and smarter monitoring
                  </h1>
                </SlideReveal>

                <RevealLine className="w-20 my-6" />

                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                  This long-form guide explains how security doors, security bars, access control systems, and security monitoring work together to create a reliable residential security system and a stronger commercial security system.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8">
                      Plan a security survey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="rounded-full px-8">
                      View security services
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <div className="relative">
              <FloatingElement amplitude={12} duration={4.5} className="hidden lg:block absolute -top-8 right-8">
                <div className="rounded-2xl border bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
                  <div className="text-sm text-foreground/50">Monitoring window</div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                </div>
              </FloatingElement>

              <AnimatedCard>
                <Card className="border border-border/50 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="rounded-2xl bg-slate-50 p-5 border border-border/50"
                        >
                          <div className="text-3xl font-bold text-primary mb-1">
                            <CountUp to={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-sm text-foreground/60">{stat.label}</div>
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
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Core ideas</p>
              <SlideReveal>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">A layered model that stays calm under pressure</h2>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mt-4 mb-5" />
              <p className="text-lg text-foreground/70">
                Strong security does not depend on one device. It depends on a sequence of physical, electronic, and procedural layers that keep the property protected even if one part is tested.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title} direction="scale">
                <AnimatedCard>
                  <Card className="h-full border border-border/50 shadow-sm group overflow-hidden">
                    <CardContent className="p-8">
                      <AnimatedIcon className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors">
                        <pillar.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                      </AnimatedIcon>
                      <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-sm"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
                <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-sky-50 border border-primary/15 p-8 md:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Practical takeaway</p>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Protect people first, then protect property</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Whether you are planning for a residence, a retail space, or a small office, the most effective result comes from combining physical protection, silent alarms, access control systems, and security monitoring into one clear workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="rounded-full px-8">
                      Request a monitoring plan
                      <PhoneCall className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/insights/cctv-camera-installation-networking">
                    <Button variant="outline" className="rounded-full px-8">
                      Read the CCTV guide
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Camera, label: "Camera visibility" },
                  { icon: ShieldCheck, label: "Security doors" },
                  { icon: AlarmClock, label: "Silent alarms" },
                  { icon: Users, label: "Monitoring service" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm">
                    <AnimatedIcon className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </AnimatedIcon>
                    <div className="font-semibold">{item.label}</div>
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
