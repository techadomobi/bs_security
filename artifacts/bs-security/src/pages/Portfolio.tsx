import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Phone, MapPin, CheckCircle, Camera, Building2, Home as HomeIcon, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn, StaggerContainer, StaggerItem, CountUp, AnimatedCard, AnimatedIcon,
  BlobBackground, PulseGlow, PageTransition, RevealLine, ScaleOnHover, SlideReveal
} from "@/components/animations";

const projects = [
  { img: "/images/portfolio-1.png", title: "Commercial Building Installation", category: "Commercial", location: "Connaught Place, Delhi", desc: "A full-scale CCTV installation across a 6-storey commercial office building covering all entry points, lobby, parking, server room, and fire exits. Central NVR with cloud backup and real-time alerts.", scope: ["12 HD IP Cameras", "16-Channel NVR", "4TB Storage", "Cloud Backup", "Monitoring Dashboard", "Mobile Access (5 users)"], duration: "3 days", result: "Zero security incidents in 18 months post-installation." },
  { img: "/images/portfolio-2.png", title: "Security Control Center", category: "Industrial", location: "Okhla Industrial Area, Delhi", desc: "A purpose-built security control room for a large logistics facility with round-the-clock operations. Multi-screen monitoring station with 24 cameras across warehouse floor, loading docks, and perimeter.", scope: ["24 x 4K Bullet Cameras", "2 x 32-Channel NVRs", "16TB RAID Storage", "Multi-Screen Video Wall", "24/7 Recording", "Remote Management Access"], duration: "5 days", result: "Significantly reduced shrinkage and unauthorized access." },
  { img: "/images/portfolio-3.png", title: "Corporate Office Setup", category: "Commercial", location: "Nehru Place, Delhi", desc: "A corporate tech company needed discreet, high-quality surveillance covering reception, meeting rooms, server room corridor, and parking. Dome cameras integrated with access control.", scope: ["8 x HD Dome Cameras", "8-Channel DVR", "2TB Storage", "Access Control Integration", "Hidden cable routing", "Visitor monitoring"], duration: "2 days", result: "System captured multiple unauthorized entry attempts, improving security posture." },
  { img: "/images/portfolio-4.png", title: "Residential Gated Community", category: "Residential", location: "Vasant Kunj, South Delhi", desc: "A gated residential society of 40 units required comprehensive coverage — main gate, parking, common areas, lift lobbies, and garden. PTZ and fixed cameras with security cabin setup.", scope: ["16 x HD Cameras (fixed + PTZ)", "16-Channel DVR", "4TB Storage", "Security Cabin Setup", "40 Mobile Access Logins", "WhatsApp Alerts"], duration: "4 days", result: "Residents report significantly improved safety. Two incidents resolved using footage." },
  { img: "/images/portfolio-1.png", title: "Multi-Branch Retail Chain", category: "Retail", location: "Malviya Nagar & Hauz Khas", desc: "A retail clothing brand with 3 stores needed centralized surveillance across all locations. Multi-site NVR system allowing the owner to view all stores from a single app with motion alerts.", scope: ["6 Cameras per store (18 total)", "Cloud NVR (multi-site)", "Centralized Mobile Dashboard", "After-hours Motion Alerts", "POS Area Coverage", "Privacy Compliance Setup"], duration: "6 days (3 locations)", result: "Shoplifting incidents reduced by over 60% within 6 months." },
  { img: "/images/portfolio-2.png", title: "School Campus Surveillance", category: "Education", location: "South Extension, Delhi", desc: "A private school with 500+ students needed child-safe surveillance covering classrooms, corridors, canteen, playground, and all entry/exit points with strict privacy configurations.", scope: ["22 x HD Cameras", "32-Channel NVR", "6TB Storage", "Principal Office Monitor", "Parent access on request", "Emergency alert integration"], duration: "7 days", result: "School passed CBSE infrastructure inspection with commendation on security systems." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { value: 10, suffix: "+", label: "Years Experience", icon: Star },
  { display: "4.9★", label: "Average Rating", icon: Users },
  { display: "100%", label: "Client Satisfaction", icon: ShieldCheck },
];

const clientTypes = [
  { icon: Building2, title: "Businesses & Offices", desc: "Scalable surveillance for corporate offices, coworking spaces, and multi-floor buildings." },
  { icon: HomeIcon, title: "Homes & Societies", desc: "Protect your family with cameras at the entrance, gate, and common areas." },
  { icon: Camera, title: "Shops & Showrooms", desc: "Monitor your retail space, prevent shoplifting, and keep an eye on staff and customers." },
  { icon: ShieldCheck, title: "Schools & Institutions", desc: "Child-safe, privacy-compliant surveillance for educational facilities." },
];

const testimonials = [
  { name: "Anita Verma", role: "Shop Owner, Malviya Nagar", quote: "B.S. Security installed cameras in my showroom — the footage quality is superb and I can check my shop from home anytime." },
  { name: "Suresh Gupta", role: "Society Secretary, Vasant Kunj", quote: "They handled our entire residential society installation with zero disruption. All 40 flat owners have mobile access." },
  { name: "Meera Joshi", role: "School Principal", quote: "We needed a comprehensive, child-safe system for our school. B.S. Security handled everything professionally." },
];

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-24 bg-slate-50 relative overflow-hidden">
          <BlobBackground className="absolute -top-20 -right-20 w-80 h-80 bg-primary" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
                <ShieldCheck className="w-4 h-4" />
                <span>Real Projects. Real Results.</span>
              </motion.div>
              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-5">Our Portfolio</h1>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Browse our recent CCTV and security installations across residential, commercial, retail, and industrial properties throughout Delhi.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-white border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label} direction="scale">
                  <motion.div className="text-center py-4" whileHover={{ y: -6 }}>
                    <AnimatedIcon className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </AnimatedIcon>
                    <div className="text-3xl md:text-4xl font-bold font-display text-primary mb-1">
                      {stat.display ? stat.display : <CountUp to={stat.value!} suffix={stat.suffix} />}
                    </div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12" staggerDelay={0.15}>
              {projects.map((project) => (
                <StaggerItem key={project.title} direction="up">
                  <motion.div
                    className="group rounded-2xl overflow-hidden bg-white border border-border/50 shadow-sm"
                    whileHover={{ y: -12, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <motion.img src={project.img} alt={project.title} className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <motion.span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary border border-primary/20"
                          whileHover={{ scale: 1.05 }}>
                          {project.category}
                        </motion.span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-foreground/50 ml-4 whitespace-nowrap">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </div>
                      </div>
                      <p className="text-foreground/70 mb-6 leading-relaxed text-sm">{project.desc}</p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-3">Scope of Work</p>
                        <div className="flex flex-wrap gap-2">
                          {project.scope.map((item, j) => (
                            <motion.span key={item} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-foreground/70"
                              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: j * 0.05 }}
                              whileHover={{ scale: 1.06, backgroundColor: "rgba(37,99,235,0.1)", color: "rgb(37,99,235)" }}>
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm border-t border-border/50 pt-4 mb-4">
                        <div><span className="text-foreground/50">Duration: </span><span className="font-medium">{project.duration}</span></div>
                      </div>
                      <motion.div className="p-4 bg-green-50 rounded-xl border border-green-100" whileHover={{ scale: 1.01 }}>
                        <p className="text-xs font-semibold text-green-700 mb-1">Result</p>
                        <p className="text-sm text-green-800 leading-relaxed">{project.result}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-24 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Who We Work With</h2></SlideReveal>
                <RevealLine className="mx-auto w-14 mb-5 mt-2" />
                <p className="text-lg text-foreground/70">We've installed security systems for all kinds of properties across Delhi.</p>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
              {clientTypes.map((ct) => (
                <StaggerItem key={ct.title} direction="scale">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm group text-center">
                      <CardContent className="p-8">
                        <AnimatedIcon className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                          <ct.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </AnimatedIcon>
                        <h3 className="text-lg font-bold mb-2">{ct.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{ct.desc}</p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Clients Say</h2></SlideReveal>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name} direction="scale">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm bg-slate-50">
                      <CardContent className="p-8">
                        <div className="flex gap-0.5 text-yellow-400 mb-5">
                          {[1,2,3,4,5].map((s, j) => (
                            <motion.span key={s} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: j * 0.08, type: "spring" }}>
                              <Star className="w-4 h-4 fill-current" />
                            </motion.span>
                          ))}
                        </div>
                        <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{t.name}</div>
                            <div className="text-xs text-foreground/50">{t.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <BlobBackground className="absolute top-0 right-0 w-96 h-96 bg-white" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Want Us to Secure Your Property?</h2></SlideReveal>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join 500+ satisfied customers. Book a free site survey and get a tailored security plan.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <PulseGlow>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold" data-testid="button-portfolio-cta">
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
