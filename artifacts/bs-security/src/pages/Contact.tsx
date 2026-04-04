import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Clock, CheckCircle, MessageCircle, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  FadeIn, StaggerContainer, StaggerItem, AnimatedCard, AnimatedIcon,
  BlobBackground, PulseGlow, PageTransition, RevealLine, ScaleOnHover, SlideReveal, FloatingElement
} from "@/components/animations";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  location: z.string().min(5, "Location is required"),
  propertyType: z.string().min(1, "Please select property type"),
  cameras: z.string().min(1, "Please select number of cameras"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const serviceAreas = ["Green Park", "Hauz Khas", "Safdarjung", "Malviya Nagar", "AIIMS Area", "South Delhi", "Vasant Kunj", "Mehrauli", "Chattarpur", "Saket", "Greater Kailash", "Defence Colony"];

const workingHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
  { day: "Emergency Support", hours: "24 / 7 Available" },
];

const whyBook = [
  { icon: ShieldCheck, title: "No Obligation", desc: "The site survey is 100% free — we visit, assess, and give you a quote. You're not committed to anything." },
  { icon: Clock, title: "Quick Turnaround", desc: "We typically schedule site visits within 24-48 hours of your inquiry." },
  { icon: CheckCircle, title: "Transparent Quote", desc: "Our quote covers everything — no hidden charges, no surprise additions on installation day." },
  { icon: MessageCircle, title: "WhatsApp Friendly", desc: "Communicate with our team on WhatsApp before, during, and after installation." },
];

const afterSubmit = [
  { step: "1", title: "You'll receive a WhatsApp message", desc: "Within a few hours of submission, our team will reach out on WhatsApp to confirm receipt of your enquiry." },
  { step: "2", title: "Site visit scheduled", desc: "We'll confirm a convenient date and time for our technician to visit your property for a free assessment." },
  { step: "3", title: "Site visit & free quote", desc: "Our expert visits, evaluates your property, and provides a transparent, no-obligation quote on the spot." },
  { step: "4", title: "You decide", desc: "Review the quote, ask any questions, and decide at your own pace. No pressure, no follow-up sales calls." },
];

const testimonials = [
  { name: "Anita Verma", role: "Shop Owner, Malviya Nagar", rating: 5, quote: "Booking was so easy — just filled the form, got a WhatsApp message the same day, and the team visited next morning." },
  { name: "Suresh Gupta", role: "Resident, Vasant Kunj", rating: 5, quote: "I was pleasantly surprised by how quickly they responded. Site visit was done within 24 hours and the quote was exactly what they said." },
  { name: "Meera Joshi", role: "School Principal", rating: 5, quote: "The process was completely transparent. They explained everything clearly and there was no pressure to decide immediately." },
];

export default function Contact() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { fullName: "", phone: "", location: "", propertyType: "", cameras: "", message: "" },
  });

  const onSubmit = (data: BookingFormValues) => {
    const text = `New Survey Request:\nName: ${data.fullName}\nPhone: ${data.phone}\nLocation: ${data.location}\nProperty Type: ${data.propertyType}\nCameras Needed: ${data.cameras}\nMessage: ${data.message || "None"}`;
    window.open(`https://wa.me/919193232403?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

        {/* Header */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-24 bg-slate-50 relative overflow-hidden">
          <BlobBackground className="absolute -top-10 right-0 w-80 h-80 bg-primary" />
          <BlobBackground className="absolute bottom-0 -left-10 w-64 h-64 bg-blue-200" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
                <ShieldCheck className="w-4 h-4" />
                <span>Free Site Survey — No Obligation</span>
              </motion.div>
              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-5">Get In Touch</h1>
              </SlideReveal>
              <RevealLine className="mx-auto w-16 mb-5 mt-2" />
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Book a free site survey or reach out with any questions. Our team will contact you on WhatsApp within hours to schedule a convenient visit.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why Book Strip */}
        <section className="py-14 bg-white border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {whyBook.map((item) => (
                <StaggerItem key={item.title} direction="scale">
                  <motion.div className="text-center" whileHover={{ y: -5 }}>
                    <AnimatedIcon className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </AnimatedIcon>
                    <h3 className="font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Form + Contact Info */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Form */}
              <div className="lg:col-span-3">
                <FadeIn direction="right">
                  <motion.div className="bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-10"
                    whileHover={{ boxShadow: "0 25px 60px -15px rgba(37,99,235,0.08)" }}>
                    <SlideReveal>
                      <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">Book Free Site Survey</h2>
                    </SlideReveal>
                    <p className="text-foreground/60 mb-8">Fill in the details below and we'll reach out on WhatsApp to confirm the date and time.</p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"
                          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                          {[
                            { name: "fullName" as const, label: "Full Name", placeholder: "Rajesh Kumar", testid: "input-full-name" },
                            { name: "phone" as const, label: "Phone / WhatsApp Number", placeholder: "+91 98765 43210", testid: "input-phone" },
                          ].map((field) => (
                            <motion.div key={field.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                              <FormField control={form.control} name={field.name} render={({ field: f }) => (
                                <FormItem>
                                  <FormLabel>{field.label}</FormLabel>
                                  <FormControl>
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                      <Input placeholder={field.placeholder} {...f} className="h-12" data-testid={field.testid} />
                                    </motion.div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )} />
                            </motion.div>
                          ))}
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="location" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Installation Area / Pincode</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Vasant Kunj, 110070" {...field} className="h-12" data-testid="input-location" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="propertyType" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12" data-testid="select-property-type">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Home/Apartment">Home / Apartment</SelectItem>
                                  <SelectItem value="Office">Office</SelectItem>
                                  <SelectItem value="Shop/Showroom">Shop / Showroom</SelectItem>
                                  <SelectItem value="Warehouse">Warehouse</SelectItem>
                                  <SelectItem value="School/Institution">School / Institution</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <FormField control={form.control} name="cameras" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estimated Number of Cameras Needed</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12" data-testid="select-cameras">
                                  <SelectValue placeholder="Select your requirement" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 Camera</SelectItem>
                                <SelectItem value="2">2 Cameras</SelectItem>
                                <SelectItem value="4">4 Cameras</SelectItem>
                                <SelectItem value="8">8 Cameras</SelectItem>
                                <SelectItem value="More than 8">More than 8 Cameras</SelectItem>
                                <SelectItem value="Not sure">Not sure yet — need expert advice</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your property, any existing system, specific concerns, or preferred visit time..." className="min-h-[120px] resize-none" {...field} data-testid="textarea-message" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <PulseGlow>
                          <Button type="submit" size="lg" className="w-full h-14 text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25" data-testid="button-submit-form">
                            Send to WhatsApp
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                              <ArrowRight className="w-4 h-4" />
                            </motion.span>
                          </Button>
                        </PulseGlow>
                        <p className="text-center text-xs text-foreground/40">By submitting, you agree to be contacted by our team on WhatsApp. We do not share your details with third parties.</p>
                      </form>
                    </Form>
                  </motion.div>
                </FadeIn>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <FadeIn direction="left">
                  <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
                    <BlobBackground className="absolute top-0 right-0 w-48 h-48 bg-primary" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold font-display mb-8">Contact Information</h3>
                      <div className="space-y-7">
                        {[
                          { icon: Phone, label: "Call or WhatsApp", content: <a href="tel:+919193232403" className="text-2xl font-bold hover:text-primary transition-colors">+91 9193232403</a> },
                          { icon: Mail, label: "Email", content: <a href="mailto:Bsssolution403@gmail.com" className="text-base font-medium hover:text-primary transition-colors break-all">Bsssolution403@gmail.com</a> },
                          { icon: MapPin, label: "Address", content: <div className="text-base font-medium leading-relaxed">9002, Pocket B-9, Masoodpur,<br />Vasant Kunj, New Delhi,<br />Delhi 110070</div> },
                        ].map((item, i) => (
                          <FadeIn key={item.label} delay={i * 0.1} direction="none">
                            <div className="flex items-start gap-4">
                              <AnimatedIcon className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-primary" />
                              </AnimatedIcon>
                              <div>
                                <div className="text-white/50 text-sm mb-1">{item.label}</div>
                                {item.content}
                              </div>
                            </div>
                          </FadeIn>
                        ))}
                      </div>
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="text-white/50 text-sm mb-4">Service Areas</div>
                        <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.05}>
                          {serviceAreas.map((area) => (
                            <StaggerItem key={area} direction="scale">
                              <motion.span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10 text-white/70 cursor-default"
                                whileHover={{ scale: 1.08, backgroundColor: "rgba(37,99,235,0.3)", borderColor: "rgba(37,99,235,0.6)" }}>
                                {area}
                              </motion.span>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </div>
                      <ScaleOnHover className="mt-8">
                        <Button className="w-full rounded-xl" onClick={() => window.open("https://wa.me/919193232403", "_blank")}>
                          <Phone className="w-4 h-4 mr-2" /> Message on WhatsApp
                        </Button>
                      </ScaleOnHover>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.1}>
                  <motion.div className="bg-white border border-border/50 rounded-3xl p-8 shadow-sm" whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}>
                    <h3 className="font-bold text-foreground mb-5 flex items-center gap-2">
                      <AnimatedIcon><Clock className="w-5 h-5 text-primary" /></AnimatedIcon>
                      Working Hours
                    </h3>
                    <div className="space-y-3">
                      {workingHours.map((item, i) => (
                        <motion.div key={item.day} className="flex justify-between text-sm items-center py-2 border-b border-border/30 last:border-0"
                          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                          <span className="text-foreground/70">{item.day}</span>
                          <span className="font-semibold text-foreground">{item.hours}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>

                <FadeIn direction="left" delay={0.15}>
                  <motion.div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 text-center" whileHover={{ scale: 1.02 }}>
                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                      {[1,2,3,4,5].map((s, j) => (
                        <motion.span key={s} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: j * 0.1, type: "spring", stiffness: 400 }}>
                          <Star className="w-5 h-5 fill-current" />
                        </motion.span>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-foreground">4.9 / 5</div>
                    <p className="text-sm text-foreground/60 mt-1">Based on 200+ Google reviews</p>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens After */}
        <section className="py-24 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Happens After You Submit?</h2></SlideReveal>
                <RevealLine className="mx-auto w-14 mb-5 mt-2" />
                <p className="text-lg text-foreground/70">Here's exactly what to expect — no guessing, no waiting in the dark.</p>
              </FadeIn>
            </div>
            <div className="max-w-3xl mx-auto">
              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                {afterSubmit.map((item) => (
                  <StaggerItem key={item.step} direction="right">
                    <motion.div className="flex gap-6 items-start bg-white rounded-2xl p-7 border border-border/50 shadow-sm"
                      whileHover={{ x: 8, borderColor: "rgba(37,99,235,0.3)", boxShadow: "0 15px 40px -10px rgba(37,99,235,0.1)" }}>
                      <motion.div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shrink-0 shadow-md"
                        whileHover={{ scale: 1.2, rotate: 10 }}>
                        {item.step}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
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
                <SlideReveal><h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Clients Say</h2></SlideReveal>
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
                            <motion.span key={j} initial={{ scale: 0, rotate: -20 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.09, type: "spring", stiffness: 350 }}>
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

        {/* Bottom CTA */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <BlobBackground className="absolute top-0 left-1/4 w-80 h-80 bg-white" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <FadeIn>
              <SlideReveal><h2 className="text-3xl font-bold font-display text-white mb-4">Still Have Questions?</h2></SlideReveal>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">Call us directly or send a WhatsApp message — our team responds within hours.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+919193232403">
                  <PulseGlow>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold" data-testid="button-call-direct">
                      <Phone className="w-4 h-4 mr-2" /> Call +91 9193232403
                    </Button>
                  </PulseGlow>
                </a>
                <motion.div whileHover={{ scale: 1.04 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-white text-white hover:bg-white/10" onClick={() => window.open("https://wa.me/919193232403", "_blank")}>
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
