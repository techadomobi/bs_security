import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Camera, Building2, Home as HomeIcon, Server, Wrench, Wifi,
  Video, CloudRain, Smartphone, Cloud, BellRing, Mic, Phone, ShieldCheck,
  Award, Clock, ThumbsUp, ArrowRight, CheckCircle, Star, Users, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn, StaggerContainer, StaggerItem, CountUp, AnimatedCard, AnimatedIcon,
  BlobBackground, PulseGlow, PageTransition, RevealLine, ScaleOnHover, SlideReveal
} from "@/components/animations";

const services = [
  { icon: Camera, title: "CCTV Camera Installation", desc: "Our most popular service — we handle everything from site survey to final testing. Whether you need 1 camera or 50, we ensure every angle is covered with professional wiring and optimal placement.", highlights: ["HD & 4K cameras available", "Indoor and outdoor options", "Professional wiring & cable management", "Remote viewing setup", "Night vision enabled", "Motion detection configured"], suitedFor: "Homes, apartments, shops, small offices" },
  { icon: Building2, title: "Commercial Security", desc: "We design scalable surveillance systems for businesses of all sizes. Our commercial packages include enterprise-grade cameras, multi-channel DVRs, and complete monitoring setups with access control.", highlights: ["Multi-camera commercial systems", "24/7 recording & monitoring", "Access control integration", "Multi-location networking", "Scalable as your business grows", "Dedicated support manager"], suitedFor: "Offices, warehouses, factories, showrooms" },
  { icon: HomeIcon, title: "Home Security Systems", desc: "Protect your family with a reliable home CCTV system. We specialize in apartment setups, gated community installations, and bungalow perimeter coverage with smart mobile alerts.", highlights: ["Gate & entrance monitoring", "Smart motion alerts on your phone", "Mobile app live viewing", "Budget-friendly packages", "Night vision cameras", "Tamper-proof installation"], suitedFor: "Apartments, houses, gated communities" },
  { icon: Server, title: "DVR/NVR Setup & Repair", desc: "Expert installation and repair for all recording systems. We configure DVRs and NVRs for optimal storage, set up remote access, perform hard disk upgrades, and troubleshoot any existing system.", highlights: ["All brands supported (Hikvision, Dahua, CP Plus)", "Hard disk upgrade & replacement", "Remote access configuration", "Firmware updates & security patching", "Backup & data recovery", "Same-day repair available"], suitedFor: "Existing systems, upgrades, repairs" },
  { icon: Wrench, title: "Maintenance & AMC", desc: "Keep your security system running at 100% with our Annual Maintenance Contracts. Regular servicing, priority support, and proactive issue resolution — so you never have a blind spot.", highlights: ["Quarterly health check visits", "Priority response within 4 hours", "Lens cleaning & calibration", "Firmware & software updates", "Camera realignment", "Free minor repairs included"], suitedFor: "All existing B.S. Security & third-party systems" },
  { icon: Wifi, title: "Wireless CCTV Systems", desc: "No drilling, no messy cables — modern wireless IP cameras with full HD quality. Perfect for rented properties, heritage buildings, or anywhere cable routing is impractical.", highlights: ["No wiring required", "Wi-Fi & 4G/LTE cameras", "Quick same-day installation", "Battery-powered options", "Flexible camera repositioning", "Cloud storage compatible"], suitedFor: "Rented properties, temporary setups, add-ons" },
];

const features = [
  { icon: Video, title: "HD & 4K Resolution", desc: "Crystal clear video quality with up to 4K resolution for detailed identification in all lighting conditions." },
  { icon: CloudRain, title: "Weatherproof Design", desc: "IP66/IP67-rated cameras built for monsoon rain, dust storms, and Delhi's extreme summer heat." },
  { icon: Smartphone, title: "Mobile App Access", desc: "Access live feeds and recordings from anywhere. Receive instant alerts on your phone when motion is detected." },
  { icon: Cloud, title: "Cloud & Local Storage", desc: "Secure footage with both cloud backup and local DVR/NVR storage — never lose critical evidence." },
  { icon: BellRing, title: "Smart Motion Detection", desc: "AI-powered detection with customizable zones minimizes false alarms and alerts you to genuine threats." },
  { icon: Camera, title: "Night Vision Technology", desc: "Advanced IR and starlight cameras provide 24/7 visibility even in complete darkness." },
  { icon: Mic, title: "Two-Way Audio", desc: "Communicate through cameras with built-in mic and speaker — deter intruders or talk to visitors." },
  { icon: Phone, title: "24/7 Professional Support", desc: "Our dedicated team is available round-the-clock for troubleshooting, guidance, and technical help." },
];

const packages = [
  { name: "Starter", cameras: "2 Cameras", price: "Starting ₹8,000", features: ["2 HD Cameras", "1 DVR (1TB HDD)", "Night Vision", "Mobile Access", "1-Year Warranty"], highlight: false },
  { name: "Home", cameras: "4 Cameras", price: "Starting ₹14,000", features: ["4 HD Cameras", "1 DVR (2TB HDD)", "Night Vision", "Mobile Access", "Motion Alerts", "1-Year Warranty", "Free AMC (6 months)"], highlight: true },
  { name: "Business", cameras: "8+ Cameras", price: "Custom Quote", features: ["8+ HD/4K Cameras", "NVR System", "Night Vision", "Remote Monitoring", "Motion Zones", "Cloud Backup", "Annual AMC Included", "Dedicated Support"], highlight: false },
];

const faqs = [
  { q: "How many cameras do I need for my home?", a: "For a typical 2BHK or 3BHK apartment, 2-4 cameras covering the main entrance, corridor, and balcony are usually sufficient. For a standalone house or bungalow, 4-8 cameras are recommended." },
  { q: "What brands of cameras do you use?", a: "We work with industry-leading brands including Hikvision, Dahua, CP Plus, Bosch, and Axis. We recommend the brand based on your budget and requirements — all come with manufacturer warranties." },
  { q: "Can I view my cameras on multiple devices?", a: "Yes. Most modern DVR/NVR systems support viewing on unlimited devices simultaneously — your phone, tablet, laptop, or desktop. We set up and configure all your devices during installation." },
  { q: "How long is footage stored?", a: "A 1TB hard disk typically stores 15-30 days of footage from 4 cameras. We recommend 2TB+ for longer retention and can advise the best setup for your needs." },
  { q: "Do you provide any warranty?", a: "Yes — we provide a 1-year labor warranty on all our installations. Cameras and DVRs come with their manufacturer warranty (typically 1-3 years)." },
  { q: "Can you upgrade or repair my existing system?", a: "Absolutely. We repair, upgrade, and service all major brands regardless of who installed them. Whether it's a faulty camera, full hard disk, or a broken DVR, our technicians can diagnose and fix it." },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-24 bg-slate-50 relative overflow-hidden">
          <BlobBackground className="absolute -top-20 right-0 w-96 h-96 bg-primary" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
                <ShieldCheck className="w-4 h-4" />
                <span>Complete Security Solutions</span>
              </motion.div>
              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-5">Our Services</h1>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                From a single home camera to enterprise-grade commercial surveillance — we design, install, and maintain the right security system for every property in Delhi.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-white border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {[
                { icon: CheckCircle, value: 500, suffix: "+", label: "Installations Done" },
                { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
                { icon: Star, display: "4.9★", label: "Customer Rating" },
                { icon: Clock, display: "1–3 Days", label: "Typical Turnaround" },
              ].map((s) => (
                <StaggerItem key={s.label} direction="scale">
                  <motion.div className="flex items-center gap-3" whileHover={{ y: -4 }}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground">
                        {s.display ? s.display : <CountUp to={s.value!} suffix={s.suffix} />}
                      </div>
                      <div className="text-xs text-foreground/50">{s.label}</div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Everything We Offer</h2>
                </SlideReveal>
                <RevealLine className="mx-auto w-16 mb-5 mt-2" />
                <p className="text-lg text-foreground/70">Each service is delivered by certified technicians with full support from site survey to post-installation.</p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {services.map((service) => (
                <StaggerItem key={service.title} direction="up">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm group">
                      <CardContent className="p-8 flex flex-col h-full">
                        <AnimatedIcon className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </AnimatedIcon>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-foreground/70 leading-relaxed mb-5">{service.desc}</p>
                        <div className="mb-5 flex-1">
                          <ul className="space-y-2">
                            {service.highlights.map((h, j) => (
                              <motion.li key={h} className="flex items-start gap-2 text-sm text-foreground/70"
                                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                transition={{ delay: j * 0.06 }}>
                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-border/50">
                          <span className="text-xs text-foreground/50 font-medium">Best for: </span>
                          <span className="text-xs text-foreground/70">{service.suitedFor}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Tech Features Dark */}
        <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <BlobBackground className="absolute top-0 left-1/3 w-96 h-96 bg-primary" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Technology</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">Why Choose Our Security Systems</h2>
                </SlideReveal>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" staggerDelay={0.08}>
              {features.map((feat) => (
                <StaggerItem key={feat.title} direction="scale">
                  <motion.div className="group" whileHover={{ y: -6 }}>
                    <AnimatedIcon className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <feat.icon className="w-6 h-6 text-white" />
                    </AnimatedIcon>
                    <h3 className="text-lg font-bold mb-2 text-white">{feat.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <FadeIn delay={0.5}>
              <div className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-4">All Systems Include</h3>
                <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.06} containerDelay={0.2}>
                  {["HD/4K Cameras", "DVR/NVR Setup", "Mobile App Config", "Night Vision", "Motion Alerts", "1-Year Warranty", "Post-Install Support"].map((item) => (
                    <StaggerItem key={item} direction="scale">
                      <motion.div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white/80" whileHover={{ scale: 1.06, backgroundColor: "rgba(37,99,235,0.3)" }}>
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                        {item}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Transparent Pricing Packages</h2>
                </SlideReveal>
                <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" staggerDelay={0.15}>
              {packages.map((pkg) => (
                <StaggerItem key={pkg.name} direction="scale">
                  <motion.div
                    className={`relative bg-white rounded-2xl p-8 border-2 ${pkg.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-border"} h-full flex flex-col`}
                    whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(37,99,235,0.2)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  >
                    {pkg.highlight && (
                      <motion.div className="absolute -top-4 left-1/2 -translate-x-1/2" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow">Most Popular</span>
                      </motion.div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold font-display">{pkg.name}</h3>
                      <p className="text-foreground/50 text-sm mt-1">{pkg.cameras}</p>
                      <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.features.map((f, j) => (
                        <motion.li key={f} className="flex items-center gap-2 text-sm text-foreground/70"
                          initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.06 }}>
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full rounded-xl" variant={pkg.highlight ? "default" : "outline"} data-testid={`button-pkg-${pkg.name.toLowerCase()}`}>
                        Get Free Quote
                      </Button>
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Service Questions Answered</h2>
                </SlideReveal>
              </FadeIn>
            </div>
            <div className="max-w-3xl mx-auto grid gap-4">
              {faqs.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.07} scale>
                  <motion.div className="bg-slate-50 rounded-2xl p-7 border border-border/50" whileHover={{ borderColor: "rgba(37,99,235,0.3)", backgroundColor: "rgba(37,99,235,0.02)" }}>
                    <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <BlobBackground className="absolute bottom-0 left-0 w-80 h-80 bg-white" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <SlideReveal>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Ready to Get Started?</h2>
              </SlideReveal>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Book a free site survey and get a custom quote tailored to your property and budget.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <PulseGlow>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold" data-testid="button-services-cta">
                      Book Free Survey <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </PulseGlow>
                </Link>
                <motion.div whileHover={{ scale: 1.04 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-white text-white hover:bg-white/10" onClick={() => window.open("https://wa.me/919193232403", "_blank")}>
                    <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
