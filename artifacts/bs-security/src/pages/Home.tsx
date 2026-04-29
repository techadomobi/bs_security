import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck, Camera, Building2, Home as HomeIcon, Server, Wrench, Wifi,
  Phone, ArrowRight, Award, Clock, ThumbsUp, Video, Star,
  CheckCircle, MapPin, Users, Zap, HeadphonesIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn, StaggerContainer, StaggerItem, CountUp, FloatingElement,
  AnimatedCard, AnimatedIcon, BlobBackground, PulseGlow, PageTransition,
  RevealLine, ProgressBar, ScaleOnHover, TypeWriter, SlideReveal, RotatingBadge
} from "@/components/animations";

const services = [
  { icon: Camera, title: "CCTV Camera Installation", desc: "Indoor and outdoor HD/IP camera setup with professional wiring and installation for homes, shops, and offices." },
  { icon: Building2, title: "Commercial Security", desc: "Office, shop, and warehouse surveillance systems with complete monitoring and enterprise-grade equipment." },
  { icon: HomeIcon, title: "Home Security Systems", desc: "Apartment CCTV setup with gate monitoring and 24/7 remote viewing via your smartphone." },
  { icon: Server, title: "DVR/NVR Setup & Repair", desc: "Recording system installation, hard disk upgrades, and technical support for all brands." },
  { icon: Wrench, title: "Maintenance & AMC", desc: "Annual maintenance contracts, camera repair, and full system troubleshooting to keep you protected." },
  { icon: Wifi, title: "Wireless CCTV Systems", desc: "Modern wireless camera solutions for hassle-free installation without messy wiring." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner, Green Park", rating: 5, quote: "B.S. Security Solutions provided exceptional service. The CCTV system is crystal clear, and their customer support is outstanding. They completed the entire office setup in just one day." },
  { name: "Priya Sharma", role: "Home Owner, Hauz Khas", rating: 5, quote: "We installed their system 2 years ago and haven't had a single issue. Professional installation, fair pricing, and they're always available for support." },
  { name: "Vikram Singh", role: "Operations Manager", rating: 5, quote: "The team is incredibly professional and efficient. They completed our large warehouse installation on time and within budget. The system is performing excellently." },
  { name: "Anita Verma", role: "Shop Owner, Malviya Nagar", rating: 5, quote: "Very satisfied with the work quality. The cameras are sharp, wiring is clean, and I can now check my shop from home anytime. Highly recommended for any business owner." },
  { name: "Suresh Gupta", role: "Apartment Resident", rating: 5, quote: "Got 4 cameras installed for my apartment entrance and corridor. Very reasonable price, clean wiring, and the team explained everything about the mobile app patiently." },
  { name: "Meera Joshi", role: "School Principal", rating: 5, quote: "We needed a comprehensive camera system for our school with 20+ cameras. B.S. Security handled everything professionally from planning to installation to training." },
];

const reasons = [
  { icon: Award, title: "Professional Installation", desc: "Expert certified technicians with 10+ years of experience", percent: 98 },
  { icon: ThumbsUp, title: "Affordable Pricing", desc: "Competitive transparent rates, no hidden charges", percent: 95 },
  { icon: ShieldCheck, title: "1-Year Warranty", desc: "Full labor warranty on all installations", percent: 100 },
  { icon: Clock, title: "Quick Service", desc: "Most projects completed within 1-3 days", percent: 92 },
];

const brands = ["Hikvision", "Dahua", "CP Plus", "Bosch", "Honeywell", "Axis"];
const serviceAreas = ["Green Park", "Hauz Khas", "Safdarjung", "Malviya Nagar", "AIIMS Area", "South Delhi", "Vasant Kunj", "Mehrauli", "Chattarpur", "Saket", "Greater Kailash", "Defence Colony"];
const areaRoutes: Record<string, string> = {
  "Green Park": "/green-park",
  "Hauz Khas": "/hauz-khas",
  "Safdarjung": "/safdarjung",
  "Malviya Nagar": "/malviya-nagar",
  "AIIMS Area": "/aiims-area",
  "South Delhi": "/south-delhi",
  "Vasant Kunj": "/vasant-kunj",
  "Mehrauli": "/mehrauli",
  "Chattarpur": "/chattarpur",
  "Saket": "/saket",
  "Greater Kailash": "/greater-kailash",
  "Defence Colony": "/defence-colony",
};

const statsData = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
  { value: 4.9, suffix: "★", label: "Google Rating", icon: Star },
  { value: 24, suffix: "/7", label: "Support Available", icon: HeadphonesIcon },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: 50, suffix: "+", label: "Service Areas", icon: MapPin },
];

const processSteps = [
  { step: "01", icon: MapPin, title: "Free Site Visit", desc: "We visit your property, assess needs, and identify the best camera positions — free of charge." },
  { step: "02", icon: Zap, title: "Custom Plan", desc: "We design a tailored security plan with the best equipment for your budget." },
  { step: "03", icon: Wrench, title: "Installation", desc: "Our technicians install everything professionally within 1-3 days with zero mess." },
  { step: "04", icon: HeadphonesIcon, title: "Ongoing Support", desc: "We train you on the system and provide 24/7 support whenever you need us." },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

        {/* ─── HERO ───────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 md:pt-52 md:pb-36 overflow-hidden">
          {/* Animated blobs */}
          <BlobBackground className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary" />
          <BlobBackground className="absolute -bottom-20 -right-40 w-[500px] h-[500px] bg-blue-300" />

          <div className="absolute inset-0 z-0">
            <motion.img
              src="/images/hero.png"
              alt="CCTV Control Room"
              className="w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20"
              >
                <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                  <ShieldCheck className="w-4 h-4" />
                </motion.span>
                <span>Delhi's Most Trusted Security Experts</span>
              </motion.div>

              <div className="mb-6 overflow-hidden">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight text-foreground"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  Professional{" "}
                  <motion.span
                    className="text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    CCTV Installation
                  </motion.span>{" "}
                  Service
                </motion.h1>
              </div>

              <motion.p
                className="text-lg md:text-xl text-foreground/70 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Home • Office • Shop • Warehouse • Complete Security Solutions
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                B.S. Security Solutions provides reliable and professional CCTV installation services across Delhi — trusted by 500+ happy clients with 10 years of expert service.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <Link href="/contact">
                  <PulseGlow>
                    <Button size="lg" className="w-full sm:w-auto rounded-full px-10 h-14 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all" data-testid="button-hero-book">
                      Book Free Survey
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.span>
                    </Button>
                  </PulseGlow>
                </Link>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" onClick={() => window.open("https://wa.me/919193232403", "_blank")} className="w-full sm:w-auto rounded-full px-10 h-14 text-base border-2 hover:bg-slate-50" data-testid="button-hero-whatsapp">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </motion.div>
              </motion.div>

              {/* Floating decorative badges */}
              <FloatingElement amplitude={10} duration={4} delay={0.5} className="absolute top-20 right-8 hidden xl:block">
                <div className="bg-white shadow-xl rounded-2xl px-5 py-3 border border-border/50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">100% Secure</div>
                    <div className="text-xs text-foreground/50">Certified Install</div>
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement amplitude={14} duration={5} delay={1} className="absolute top-40 left-8 hidden xl:block">
                <div className="bg-white shadow-xl rounded-2xl px-5 py-3 border border-border/50">
                  <div className="text-2xl font-bold text-primary">★ 4.9</div>
                  <div className="text-xs text-foreground/50">Google Rating</div>
                </div>
              </FloatingElement>

              {/* Stats strip */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-border/50 bg-white/60 backdrop-blur-sm rounded-2xl px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
              >
                {[
                  { value: 500, suffix: "+", label: "Happy Clients" },
                  { value: 10, suffix: "+", label: "Years Experience" },
                  { label: "Google Rating", display: "4.9★" },
                  { label: "Support", display: "24/7" },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold font-display text-primary mb-1">
                      {stat.display ? stat.display : (
                        <CountUp to={stat.value!} suffix={stat.suffix} />
                      )}
                    </div>
                    <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES STRIP ─────────────────────────────────────────── */}
        <section className="py-5 bg-primary overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex gap-12 shrink-0">
                {["HD & IP Camera Installation", "Professional Setup & Wiring", "Remote Mobile Viewing", "Annual Maintenance Contract", "1-Year Warranty Included", "24/7 Emergency Support", "Weatherproof Cameras", "Night Vision Technology"].map((f) => (
                  <div key={f} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-white/60 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* ─── SERVICES ───────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Complete Security Solutions</h2>
                </SlideReveal>
                <RevealLine className="mx-auto w-16 mb-5 mt-3" />
                <p className="text-lg text-foreground/70">
                  From a single camera at home to a 50-camera commercial setup — we design, install, and maintain the perfect solution for your property.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14" staggerDelay={0.1}>
              {services.map((service) => (
                <StaggerItem key={service.title} direction="up">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm group">
                      <CardContent className="p-8">
                        <AnimatedIcon className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </AnimatedIcon>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-foreground/70 leading-relaxed mb-5">{service.desc}</p>
                        <motion.div className="text-sm text-primary font-medium flex items-center gap-1" whileHover={{ x: 4 }}>
                          Learn more <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <ScaleOnHover>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="rounded-full border-2 px-10" data-testid="button-view-all-services">
                      View All Services in Detail
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </ScaleOnHover>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
                  <SlideReveal>
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Why Trust Us With Your Security?</h2>
                  </SlideReveal>
                  <RevealLine className="w-16 mb-6" />
                  <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                    For over a decade, we've been the trusted choice for Delhi residents and businesses. We build lasting security solutions that work reliably day and night, year after year.
                  </p>
                  <div className="space-y-5 mb-10">
                    {reasons.map((reason, i) => (
                      <FadeIn key={reason.title} delay={i * 0.1} direction="right">
                        <div className="flex gap-4 mb-1">
                          <AnimatedIcon className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <reason.icon className="w-5 h-5 text-primary" />
                          </AnimatedIcon>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground">{reason.title}</h4>
                            <p className="text-sm text-foreground/60 mt-0.5 mb-2">{reason.desc}</p>
                            <ProgressBar percent={reason.percent} delay={0.2 + i * 0.1} />
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                  <ScaleOnHover>
                    <Link to="/process">
                      <Button variant="outline" size="lg" className="rounded-full border-2 px-8" data-testid="button-how-we-work">
                        See How We Work <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </ScaleOnHover>
                </FadeIn>
              </div>

              <div className="lg:w-1/2 relative">
                <FadeIn direction="left">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img src="/images/feature-camera.png" alt="Security Camera" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                  </motion.div>
                  <FloatingElement amplitude={8} duration={3.5} className="absolute -bottom-6 -left-6">
                    <div className="bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground/60">Fully Certified</div>
                        <div className="font-bold text-lg">100% Secure</div>
                      </div>
                    </div>
                  </FloatingElement>
                  <FloatingElement amplitude={10} duration={4.5} delay={1} className="absolute -top-6 -right-6">
                    <div className="bg-white p-5 rounded-2xl shadow-xl text-center">
                      <div className="text-2xl font-bold text-primary">
                        <CountUp to={500} suffix="+" />
                      </div>
                      <div className="text-xs text-foreground/60 font-medium">Happy Clients</div>
                    </div>
                  </FloatingElement>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BY THE NUMBERS ─────────────────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <BlobBackground className="absolute top-0 left-1/4 w-96 h-96 bg-primary" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-14">
              <FadeIn>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Our Track Record</h2>
                </SlideReveal>
                <p className="text-white/60 text-lg">Numbers that reflect years of consistent, quality work</p>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" staggerDelay={0.1}>
              {statsData.map((n) => (
                <StaggerItem key={n.label} direction="scale">
                  <motion.div className="text-center" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <n.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-1">
                      <CountUp to={n.value} suffix={n.suffix} />
                    </div>
                    <div className="text-white/50 text-xs font-medium">{n.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── PORTFOLIO PREVIEW ──────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <FadeIn direction="right">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Work</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-2">Recent Installations</h2>
                </SlideReveal>
                <p className="text-lg text-foreground/70 max-w-xl">
                  A snapshot of our recent professional CCTV installations across Delhi.
                </p>
              </FadeIn>
              <FadeIn direction="left">
                <ScaleOnHover>
                  <Link href="/portfolio">
                    <Button variant="outline" className="rounded-full border-2 px-6 whitespace-nowrap" data-testid="button-view-portfolio">
                      Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </ScaleOnHover>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { img: "/images/portfolio-1.png", title: "Commercial Building Installation", category: "Commercial", desc: "12 HD cameras across a modern office complex with DVR integration and remote access." },
                { img: "/images/portfolio-2.png", title: "Security Control Center", category: "Industrial", desc: "Multi-screen surveillance dashboard with 24/7 recording for a logistics facility." },
              ].map((project, i) => (
                <FadeIn key={project.title} delay={i * 0.15} direction={i === 0 ? "right" : "left"}>
                  <motion.div
                    className="group rounded-2xl overflow-hidden border border-border/50 shadow-sm"
                    whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-foreground/70 text-sm">{project.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS MINI ──────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">How We Work</h2>
                </SlideReveal>
                <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" staggerDelay={0.12}>
              {processSteps.map((step) => (
                <StaggerItem key={step.step} direction="scale">
                  <AnimatedCard>
                    <div className="bg-white rounded-2xl p-8 border border-border shadow-sm text-center">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-5 shadow-md"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.step}
                      </motion.div>
                      <AnimatedIcon className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-5 h-5 text-primary" />
                      </AnimatedIcon>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <ScaleOnHover>
                  <Link href="/process">
                    <Button variant="outline" size="lg" className="rounded-full border-2 px-8" data-testid="button-full-process">
                      View Full Process <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </ScaleOnHover>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── TESTIMONIALS ───────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-5">What Our Clients Say</h2>
                </SlideReveal>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" staggerDelay={0.1}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm bg-white">
                      <CardContent className="p-8">
                        <motion.div className="flex gap-0.5 text-yellow-400 mb-5">
                          {Array(t.rating).fill(0).map((_, j) => (
                            <motion.span key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: j * 0.08, type: "spring", stiffness: 400 }}>
                              <Star className="w-4 h-4 fill-current" />
                            </motion.span>
                          ))}
                        </motion.div>
                        <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-sm">{t.name}</div>
                            <div className="text-xs text-foreground/50">{t.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="text-center text-sm text-foreground/50 font-medium">
                ★ 4.9/5 Average Rating on Google · Trusted by 500+ customers in Delhi
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── BRANDS ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-slate-50 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <p className="text-center text-foreground/40 text-xs font-medium mb-10 uppercase tracking-widest">Trusted Brands We Install & Support</p>
              <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-16" staggerDelay={0.08}>
                {brands.map((brand) => (
                  <StaggerItem key={brand} direction="scale">
                    <motion.div
                      className="text-2xl font-bold text-foreground/25 hover:text-primary transition-colors cursor-default"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {brand}
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>

        {/* ─── SERVICE AREAS ──────────────────────────────────────────── */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-14 items-center">
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Coverage</p>
                  <SlideReveal>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-5">We Serve Across South Delhi</h2>
                  </SlideReveal>
                  <RevealLine className="w-14 mb-6" />
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    Based in Vasant Kunj, our team covers all major areas of South Delhi with prompt on-site visits.
                  </p>
                  <StaggerContainer className="flex flex-wrap gap-3 mb-8" staggerDelay={0.06}>
                    {serviceAreas.map((area) => {
                      return (
                        <StaggerItem key={area} direction="scale">
                          <Link href={areaRoutes[area]}>
                            <motion.div
                              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-foreground/70 cursor-pointer hover:bg-primary/10 hover:text-primary transition"
                              whileHover={{ scale: 1.06 }}
                            >
                              <MapPin className="w-3 h-3 text-primary" />
                              {area}
                            </motion.div>
                          </Link>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                  <ScaleOnHover>
                    <a href="tel:+919193232403">
                      <Button size="lg" className="rounded-full px-8 h-12" data-testid="button-call-now">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now: +91 9193232403
                      </Button>
                    </a>
                  </ScaleOnHover>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <FadeIn direction="left">
                  <div className="bg-slate-50 rounded-3xl p-10 border border-border/50">
                    <h3 className="font-bold text-xl mb-6">Quick Contact</h3>
                    <div className="space-y-5">
                      {[
                        { icon: Phone, label: "Call or WhatsApp", value: "+91 9193232403", href: "tel:+919193232403" },
                        { icon: MapPin, label: "Address", value: "9002, Pocket B-9, Masoodpur, Vasant Kunj, New Delhi — 110070" },
                        { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9 AM – 7 PM · Sun: 10 AM – 4 PM" },
                      ].map((item, i) => (
                        <FadeIn key={item.label} delay={i * 0.1} direction="none">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm text-foreground/50 mb-0.5">{item.label}</div>
                              {item.href ? (
                                <a href={item.href} className="text-xl font-bold hover:text-primary transition-colors">{item.value}</a>
                              ) : (
                                <div className="font-medium">{item.value}</div>
                              )}
                            </div>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─────────────────────────────────────────────── */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <BlobBackground className="absolute top-0 right-0 w-96 h-96 bg-white" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <ShieldCheck className="w-16 h-16 text-white/30 mx-auto mb-6" />
              </motion.div>
              <SlideReveal>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-5">
                  Ready to Secure Your Property?
                </h2>
              </SlideReveal>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free, no-obligation site survey today. Our expert will visit, assess, and design the perfect security solution at no cost.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <PulseGlow>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold" data-testid="button-cta-book">
                      Book Free Survey
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.3, repeat: Infinity }}>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.span>
                    </Button>
                  </PulseGlow>
                </Link>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-white text-white hover:bg-white/10" onClick={() => window.open("https://wa.me/919193232403", "_blank")} data-testid="button-cta-whatsapp">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
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
