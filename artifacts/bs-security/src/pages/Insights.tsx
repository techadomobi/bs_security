import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Camera, ShieldAlert, BadgeAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon, RevealLine } from "@/components/animations";

const posts = [
  {
    icon: ShieldCheck,
    title: "Security Doors, Silent Alarms & Security Monitoring",
    desc: "Layered protection for homes and shops using security doors, security bars, access control systems, and silent alarms.",
    href: "/insights/security-doors-silent-alarms",
  },
  {
    icon: Camera,
    title: "CCTV Camera Full Setup installation & Networking",
    desc: "A long-form guide covering CCTV Camera Repair, CCTV Camera Networking, CCTV DVR installation, DVR Camera installation, and wireless systems.",
    href: "/insights/cctv-camera-installation-networking",
  },
  {
    icon: ShieldAlert,
    title: "Comprehensive Security Systems & Alarm Systems",
    desc: "Comprehensive Security Solutions, burglar alarms, fire alarms, wireless alarm planning, monitoring service, and network support.",
    href: "/insights/comprehensive-security-systems",
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8rem] top-[-6rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[-5rem] bottom-[-4rem] h-96 w-96 rounded-full bg-sky-200/60 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6"
              >
                <Sparkles className="h-4 w-4" />
                Insights Hub
              </motion.div>
              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                  Read the latest <span className="text-primary">security guides</span> built around the keywords people search for
                </h1>
              </SlideReveal>
              <RevealLine className="mx-auto w-20 my-6" />
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                Use this hub to explore long-form articles on security doors, silent alarms, CCTV Camera Full Setup installation, CCTV Camera Repair, CCTV Camera Networking, burglar alarms, fire alarms, monitoring service, and comprehensive security systems.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {posts.map((post) => (
              <StaggerItem key={post.title} direction="up">
                <AnimatedCard>
                  <Card className="h-full border border-border/50 shadow-sm overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      <AnimatedIcon className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <post.icon className="w-7 h-7 text-primary" />
                      </AnimatedIcon>
                      <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                      <p className="text-foreground/70 leading-relaxed mb-6 flex-1">{post.desc}</p>
                      <Link href={post.href}>
                        <Button className="w-full rounded-full">
                          Read article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="pb-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-sky-50 border border-primary/15 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <BadgeAlert className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">Choose a topic and go deeper</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Each page is long-form, structured, and designed to keep the keywords natural while still feeling polished on desktop and mobile.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}