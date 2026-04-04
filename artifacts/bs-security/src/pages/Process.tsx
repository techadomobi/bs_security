import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Phone, MapPin, Zap, Wrench, CheckCircle, Clock, FileText, HeadphonesIcon, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon,
  BlobBackground, PulseGlow, PageTransition, RevealLine, ScaleOnHover, SlideReveal
} from "@/components/animations";

const steps = [
  { step: "01", icon: MapPin, title: "Free Site Assessment", duration: "~1 hour", desc: "Our expert technician visits your property to thoroughly evaluate your security needs. We identify ideal camera placement zones, assess cabling routes, and discuss your specific concerns — all completely free with no obligation to proceed.", details: ["Complete walkthrough of your property", "Identification of blind spots and high-risk areas", "Assessment of existing infrastructure", "Discussion of your security goals and budget", "Camera placement plan created on-site", "Transparent quote provided before you leave"] },
  { step: "02", icon: Zap, title: "Custom Solution Design", duration: "1-2 days", desc: "Based on the site assessment, our technical team designs a tailored security solution. We select the best cameras and recording equipment for your needs, plan cable routing for clean installation, and create a full system diagram.", details: ["Camera selection (brand, type, resolution)", "DVR/NVR and storage sizing", "Cable route planning", "System diagram and final quote", "Payment plan discussion if needed", "Written agreement shared via WhatsApp"] },
  { step: "03", icon: Wrench, title: "Professional Installation", duration: "1-3 days", desc: "Our certified installation team arrives on time and gets to work. We mount cameras at agreed positions, run cables neatly through walls or conduit, set up the DVR/NVR, and configure the entire system with minimal disruption to your daily routine.", details: ["Professional camera mounting and alignment", "Concealed or conduit cable management", "DVR/NVR rack setup and configuration", "Network and router integration", "Initial recording and playback verification", "Work area cleaned completely after installation"] },
  { step: "04", icon: CheckCircle, title: "System Testing & Training", duration: "~2 hours", desc: "Before we leave, we conduct a complete system test — verifying every camera's field of view, night vision performance, motion detection zones, and remote access. We then provide hands-on training so you're fully confident using the system.", details: ["Full camera coverage verification", "Night vision and low-light testing", "Motion detection zone calibration", "Mobile app setup on all your devices", "Remote access and live view demo", "Playback and recording review walkthrough"] },
  { step: "05", icon: FileText, title: "Handover & Documentation", duration: "~30 minutes", desc: "We hand over all documentation you'll need — warranty cards, system passwords, user manual, and a full equipment list. Everything is organized and sent to you digitally so you always have it when you need it.", details: ["Warranty cards for all equipment", "System login credentials", "User manual and quick reference guide", "Equipment serial numbers on record", "Digital copy via WhatsApp/email", "Emergency contact and support number"] },
  { step: "06", icon: HeadphonesIcon, title: "Ongoing Support & Maintenance", duration: "Ongoing", desc: "Your relationship with us doesn't end at installation. We're available 24/7 for any questions or issues. With our Annual Maintenance Contract, we visit quarterly, clean cameras, update firmware, and ensure your system runs at peak performance all year.", details: ["24/7 phone and WhatsApp support", "Quarterly health check visits (AMC)", "Camera cleaning and realignment", "Firmware and software updates", "Free minor repairs under AMC", "Priority response within 4 hours"] },
];

const installationDay = [
  { time: "9:00 AM", event: "Technician arrives on site" },
  { time: "9:00–9:30", event: "Final walkthrough and confirmation of camera positions" },
  { time: "9:30–12:00", event: "Camera mounting and cable routing" },
  { time: "12:00–2:00", event: "DVR/NVR setup, network integration" },
  { time: "2:00–3:00", event: "System configuration, mobile app setup" },
  { time: "3:00–4:00", event: "Testing, training, and handover" },
  { time: "4:00 PM", event: "Site cleanup and sign-off" },
];

const faqs = [
  { q: "How long does the entire process take from first call to installation?", a: "For standard residential installations, the entire process typically takes 3-5 days. Commercial projects may take 7-14 days depending on system complexity and your availability for the site visit." },
  { q: "Do I need to be present during installation?", a: "Yes, we recommend someone responsible be present during installation. We need access to the property, and you'll want to confirm camera positions before finalization." },
  { q: "What if I'm not happy with the camera positions after installation?", a: "We confirm camera positions with you before any drilling or mounting. If you want to adjust a camera after installation, we'll realign it free of charge within the first 30 days." },
  { q: "Do you clean up after installation?", a: "Absolutely. Our team cleans any drilling dust, removes packaging material, and leaves your property exactly as we found it." },
  { q: "How do I get support after installation?", a: "You'll have our direct WhatsApp number. Call or message anytime — we respond within hours and have a technician available 24/7 for urgent issues." },
  { q: "What does an Annual Maintenance Contract (AMC) include?", a: "Our AMC includes 4 quarterly site visits (camera cleaning, alignment, firmware updates, full system health check), priority support with 4-hour response time, and free minor repairs." },
  { q: "Can I add more cameras later?", a: "Yes — we plan for this from the start. Most DVRs/NVRs we install have spare channels, and we keep wiring accessible so adding cameras later is simple and affordable." },
  { q: "What happens if a camera stops working?", a: "If it's within the labor warranty (1 year), we repair or replace it at no charge. For older systems, we offer very competitive repair rates." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner, Green Park", rating: 5, quote: "The process was smooth from start to finish. The technician explained everything clearly during training and I was able to use the app immediately." },
  { name: "Priya Sharma", role: "Home Owner, Hauz Khas", rating: 5, quote: "I was nervous about the installation process but the team was so professional. They cleaned up after themselves and spent extra time making sure I knew how to use the app." },
  { name: "Vikram Singh", role: "Manager, Okhla", rating: 5, quote: "From site assessment to handover, everything was done exactly as promised — on time and without any surprises." },
];

export default function Process() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-24 bg-slate-50 relative overflow-hidden">
          <BlobBackground className="absolute -top-20 -left-20 w-80 h-80 bg-primary" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
                <ShieldCheck className="w-4 h-4" />
                <span>Simple. Transparent. Professional.</span>
              </motion.div>
              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-5">How We Work</h1>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                A clear, step-by-step process so you always know what to expect — from your first call to long-term support.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Quick Timeline Strip */}
        <section className="py-8 bg-white border-b border-border/50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {["Call Us", "→", "Free Site Visit", "→", "Design & Quote", "→", "Installation", "→", "Training & Handover", "→", "24/7 Support"].map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={item === "→" ? "text-foreground/30 text-lg" : "bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6 Steps */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our 6-Step Process</h2></SlideReveal>
                <RevealLine className="mx-auto w-14 mb-5 mt-2" />
              </FadeIn>
            </div>

            <div className="space-y-10">
              {steps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.05} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className={`flex flex-col lg:flex-row gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="lg:w-2/5">
                      <motion.div className="bg-slate-50 rounded-3xl p-8 border border-border/50 h-full" whileHover={{ borderColor: "rgba(37,99,235,0.3)", y: -4 }}>
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            className="w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.15, rotate: 10 }}
                          >
                            {s.step}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold">{s.title}</h3>
                            <motion.span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1"
                              whileHover={{ scale: 1.05 }}>
                              {s.duration}
                            </motion.span>
                          </div>
                        </div>
                        <p className="text-foreground/70 leading-relaxed text-sm">{s.desc}</p>
                      </motion.div>
                    </div>
                    <div className="lg:w-3/5">
                      <motion.div className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm h-full" whileHover={{ boxShadow: "0 20px 60px -15px rgba(37,99,235,0.1)" }}>
                        <div className="flex items-center gap-2 mb-5">
                          <AnimatedIcon className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                            <s.icon className="w-4 h-4 text-primary" />
                          </AnimatedIcon>
                          <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wider">What We Do</p>
                        </div>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.07} containerDelay={0.1}>
                          {s.details.map((detail) => (
                            <StaggerItem key={detail} direction="left">
                              <div className="flex items-start gap-2 text-sm text-foreground/70">
                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-16 text-center">
                <p className="text-foreground/50 text-sm font-medium mb-6">Typical total time from first call to handover: <strong className="text-foreground">3–7 days</strong></p>
                <ScaleOnHover>
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-10 h-14 text-base shadow-lg shadow-primary/25" data-testid="button-process-cta">
                      Start with a Free Survey <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </ScaleOnHover>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Installation Day Timeline */}
        <section className="py-24 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <FadeIn>
                  <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What to Expect on Installation Day</h2></SlideReveal>
                  <RevealLine className="mx-auto w-14 mb-5 mt-2" />
                </FadeIn>
              </div>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {installationDay.map((item) => (
                  <StaggerItem key={item.time} direction="right">
                    <motion.div className="flex gap-6 items-start bg-white rounded-2xl p-5 border border-border/50 shadow-sm"
                      whileHover={{ x: 6, borderColor: "rgba(37,99,235,0.3)", boxShadow: "0 10px 30px -10px rgba(37,99,235,0.1)" }}>
                      <div className="w-20 text-right shrink-0">
                        <span className="text-sm font-bold text-primary">{item.time}</span>
                      </div>
                      <div className="w-px bg-border self-stretch" />
                      <div className="flex-1 flex items-center gap-2">
                        <motion.div className="w-2 h-2 rounded-full bg-primary shrink-0" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                        <p className="text-foreground/80 text-sm font-medium">{item.event}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Clients Say About Our Process</h2></SlideReveal>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name} direction="scale">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm bg-slate-50">
                      <CardContent className="p-8">
                        <div className="flex gap-0.5 text-yellow-400 mb-5">
                          {Array(t.rating).fill(0).map((_, j) => (
                            <motion.span key={j} initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.08, type: "spring", stiffness: 400 }}>
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

        {/* FAQ */}
        <section className="py-24 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Frequently Asked Questions</h2></SlideReveal>
                <RevealLine className="mx-auto w-14 mb-5 mt-2" />
              </FadeIn>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.06} scale>
                  <motion.div className="bg-white rounded-2xl p-7 border border-border/50 shadow-sm"
                    whileHover={{ borderColor: "rgba(37,99,235,0.3)", x: 4 }}>
                    <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{faq.a}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <BlobBackground className="absolute bottom-0 left-0 w-96 h-96 bg-white" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div animate={{ rotate: [0, 8, -8, 4, -4, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <ShieldCheck className="w-14 h-14 text-white/30 mx-auto mb-6" />
              </motion.div>
              <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Ready to Begin?</h2></SlideReveal>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Book a free site survey today — our technician will visit, assess, and design your perfect security solution at no cost.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <PulseGlow>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold" data-testid="button-process-final-cta">
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
