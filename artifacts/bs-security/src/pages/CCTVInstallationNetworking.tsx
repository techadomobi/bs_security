import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Wrench, Wifi, Server, Video, Smartphone, ShieldCheck, CheckCircle, Router } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon, RevealLine, CountUp } from "@/components/animations";

const stats = [
  { value: 4, suffix: "+", label: "Camera zones" },
  { value: 24, suffix: "/7", label: "Remote access" },
  { value: 1, suffix: "st", label: "setup done right" },
  { value: 100, suffix: "%", label: "usable coverage" },
];

const topics = [
  {
    icon: Camera,
    title: "CCTV Camera Full Setup installation",
    desc: "A complete CCTV Camera Full Setup installation starts with planning, mounting, cable routing, recorder placement, and final verification. Each step affects the quality of the video systems result.",
  },
  {
    icon: Wrench,
    title: "CCTV Camera Repair and restoration",
    desc: "CCTV Camera Repair is not only about replacing a dead camera. It also includes fixing connectors, correcting focus, repairing power issues, and stabilizing the whole system.",
  },
  {
    icon: Router,
    title: "CCTV Camera Networking and mobile access",
    desc: "CCTV Camera Networking connects the recorder to your network and mobile app so live feeds and recordings can be reviewed from anywhere without losing control.",
  },
  {
    icon: Server,
    title: "CCTV DVR installation and DVR Camera installation",
    desc: "CCTV DVR installation and DVR Camera installation remain common in homes, shops, and offices because they balance storage, cost, and reliable recording.",
  },
];

const workflow = [
  "Survey the property and identify blind spots, entry points, and daylight angles.",
  "Choose the right mix of indoor, outdoor, and infrared cameras for the layout.",
  "Plan recorder placement and power supply access before drilling anything.",
  "Route cabling neatly so the final result looks professional and stays easy to service.",
  "Configure recording, playback, mobile access, and alerts before signing off.",
];

const comparisons = [
  {
    icon: Video,
    title: "Wired video systems",
    text: "Best for stability, high uptime, and multi-camera properties that need dependable storage and predictable performance.",
  },
  {
    icon: Wifi,
    title: "Wireless systems",
    text: "Useful when wiring is difficult, when a quick deployment is needed, or when a Wireless Security System must be moved later.",
  },
  {
    icon: ShieldCheck,
    title: "Hybrid security systems",
    text: "A practical middle ground that blends wired camera runs with wireless systems for flexibility and expansion.",
  },
  {
    icon: Router,
    title: "Networking solutions",
    text: "Strong networking solutions keep the recorder online, the app responsive, and remote monitoring dependable even on busy sites.",
  },
];

export default function CCTVInstallationNetworking() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-7rem] top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-4rem] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <FadeIn>
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
                >
                  <Camera className="h-4 w-4" />
                  C C T V Camera Installation, Repair & Networking
                </motion.div>

                <SlideReveal>
                  <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                    A practical guide to <span className="text-primary">CCTV Camera Full Setup installation</span>, repair, and remote networking
                  </h1>
                </SlideReveal>

                <RevealLine className="w-20 my-6" />

                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                  This article covers C C T V Camera planning, CCTV Camera Repair, CCTV Camera Networking, CCTV DVR installation, DVR Camera installation, and the role of video systems and wireless systems in a complete security setup.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8">
                      Book camera installation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="rounded-full px-8">
                      Compare service options
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <AnimatedCard>
              <Card className="border border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="rounded-2xl border border-border/50 bg-slate-50 p-5"
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
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <FadeIn>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">What a good setup includes</p>
              <SlideReveal>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Installation is a system, not a single step</h2>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mt-4 mb-5" />
              <p className="text-lg text-foreground/70">
                A reliable result comes from matching the hardware, the cable layout, the recorder, the mobile app, and the networking layer so all parts work together.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {topics.map((topic) => (
              <StaggerItem key={topic.title} direction="up">
                <AnimatedCard>
                  <Card className="h-full border border-border/50 shadow-sm group overflow-hidden">
                    <CardContent className="p-8">
                      <AnimatedIcon className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary transition-colors">
                        <topic.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                      </AnimatedIcon>
                      <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{topic.desc}</p>
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
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-white p-8 md:p-10 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-5">A reliable CCTV Camera Full Setup installation workflow</h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                {workflow.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p>{item}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Choosing between wired and wireless systems</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {comparisons.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/50 bg-slate-50 p-5">
                    <AnimatedIcon className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </AnimatedIcon>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
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
            className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-sky-50 border border-primary/15 p-8 md:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Repair and support</p>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Repair is part of the plan, not an afterthought</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  The best installations are serviceable. That means CCTV Camera Repair can happen quickly, remote access can be reset cleanly, and a DVR Camera installation can be expanded without redesigning the whole site.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="rounded-full px-8">
                      Request a site survey
                      <Smartphone className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/insights/comprehensive-security-systems">
                    <Button variant="outline" className="rounded-full px-8">
                      Read alarm planning guide
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Camera, label: "CCTV Camera" },
                  { icon: Server, label: "DVR Camera installation" },
                  { icon: Wifi, label: "Wireless systems" },
                  { icon: Video, label: "Video systems" },
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
