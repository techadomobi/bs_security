import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Shield, Zap, CheckCircle, Video, Wifi, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, StaggerContainer, StaggerItem, RevealLine } from "@/components/animations";

export default function CCTVGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
              >
                <Camera className="w-4 h-4" />
                <span>Complete Security Guide</span>
              </motion.div>

              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                  The Complete Guide to <span className="text-primary">CCTV Camera Installation</span> & Video Systems
                </h1>
              </SlideReveal>

              <RevealLine className="w-16 my-6" />

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Everything you need to know about CCTV camera networking, installation, repair, and comprehensive security solutions for your home, office, or commercial property.
              </p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "CCTV Camera Full Setup Installation Guide",
                "How to Install DVR Cameras & Recording Systems",
                "Video Systems Architecture & Design",
                "CCTV Camera Networking for Remote Access",
                "Professional Camera Placement Strategies",
                "CCTV Camera Repair & Troubleshooting",
              ].map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-slate-50 transition">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Understanding CCTV Camera Technology</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  A CCTV camera full setup installation is more than just mounting a camera on the wall. It involves comprehensive security solutions that integrate video systems, networking capabilities, and professional installation practices.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Video systems have evolved significantly over the years. Modern CCTV camera installation includes HD cameras, IP-based technology, and advanced networking solutions that allow you to monitor your property remotely from anywhere in the world.
                </p>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 my-8">
                  <h3 className="font-bold text-lg mb-4">Types of Video Systems:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Wired Systems:</strong> Traditional CCTV camera installation with cables running to a central DVR recorder</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Wireless Systems:</strong> Modern wireless security system using WiFi for connectivity and networking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>Hybrid Systems:</strong> Combination of wired and wireless for maximum flexibility</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">CCTV Camera Installation: Step-by-Step Guide</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Professional CCTV camera installation requires careful planning and execution. Whether you're setting up a residential security system or a commercial security system, the process follows key principles.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Site Assessment & Planning",
                      desc: "Evaluate your property to identify blind spots and determine optimal camera positions for complete coverage.",
                    },
                    {
                      step: "2",
                      title: "Equipment Selection",
                      desc: "Choose appropriate cameras, DVR camera installation hardware, and networking equipment based on your security needs.",
                    },
                    {
                      step: "3",
                      title: "CCTV Camera Networking Setup",
                      desc: "Configure IP cameras and establish proper networking solutions for remote video systems access.",
                    },
                    {
                      step: "4",
                      title: "Professional Installation",
                      desc: "Mount cameras, run cables, and integrate with your recording system for a complete security solution.",
                    },
                    {
                      step: "5",
                      title: "Testing & Configuration",
                      desc: "Test all cameras, adjust angles, and configure recording settings for optimal performance.",
                    },
                  ].map((item, i) => (
                    <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-foreground/70">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">DVR Camera Installation & Recording Systems</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  DVR installation is a critical component of comprehensive security solutions. A DVR camera installation system allows you to record, store, and retrieve video footage from your entire video systems network.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Video className="w-5 h-5 text-primary" />
                        DVR vs NVR Systems
                      </h3>
                      <p className="text-sm text-foreground/70">DVR systems work with traditional analog cameras, while NVR systems handle IP-based cameras for advanced video systems.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-primary" />
                        Network Configuration
                      </h3>
                      <p className="text-sm text-foreground/70">Proper CCTV camera networking ensures seamless remote access and reliable video systems performance.</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Wireless Systems & Modern Security Solutions</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Wireless security systems have revolutionized video systems technology. These comprehensive security solutions eliminate complex wiring while maintaining professional-grade surveillance capabilities.
                </p>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 my-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Benefits of Wireless Systems:
                  </h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• Easy installation without extensive wiring</li>
                    <li>• Scalable video systems for expanding security needs</li>
                    <li>• Flexible camera placement options</li>
                    <li>• Remote monitoring and networking capabilities</li>
                    <li>• Lower maintenance requirements</li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">CCTV Camera Repair & Maintenance</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Even the best video systems require regular maintenance. CCTV camera repair services ensure your security system operates at peak efficiency throughout its lifespan.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Regular Maintenance</h4>
                      <p className="text-sm text-foreground/70">Cleaning lenses, checking connections, and updating firmware keep your comprehensive security solutions running smoothly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <Shield className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Professional Repairs</h4>
                      <p className="text-sm text-foreground/70">Expert technicians diagnose and resolve issues with cameras, DVR systems, and networking configurations.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-primary/10 rounded-2xl p-8 border border-primary/20 text-center mt-16">
                <h2 className="text-2xl font-bold mb-4">Ready to Install Your Comprehensive Security Solution?</h2>
                <p className="text-foreground/70 mb-6">
                  Contact our experts for professional CCTV camera installation and video systems setup.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Book Your Free Security Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
