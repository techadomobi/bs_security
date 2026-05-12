import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Wifi, Zap, Users, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, RevealLine } from "@/components/animations";

export default function CommercialSecurityGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6 border border-blue-200"
              >
                <Building2 className="w-4 h-4" />
                <span>Business Security</span>
              </motion.div>

              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                  <span className="text-blue-600">Commercial Security</span> Solutions for Enterprise Protection
                </h1>
              </SlideReveal>

              <RevealLine className="w-16 my-6" />

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Enterprise-grade security systems combining wireless alarm technology, comprehensive networking solutions, and advanced monitoring for complete business protection.
              </p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Get Commercial Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Why Commercial Security Systems Matter</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Commercial security systems are fundamentally different from residential solutions. Businesses require comprehensive security systems that protect assets, employees, and sensitive information while maintaining operational continuity.
                </p>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 my-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Key Benefits of Commercial Security Systems:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Asset Protection & Loss Prevention",
                      "Employee & Customer Safety",
                      "24/7 Remote Monitoring",
                      "Compliance & Legal Protection",
                      "Insurance Premium Reduction",
                      "Operational Continuity",
                    ].map((item) => (
                      <motion.div key={item} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Wireless Alarm Systems for Business</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Modern wireless alarm systems have revolutionized commercial security. Unlike traditional wired solutions, wireless alarm technology offers flexibility, easier installation, and seamless integration with comprehensive security systems.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-blue-600" />
                      Wireless Alarm Installation Benefits
                    </h4>
                    <p className="text-foreground/70">No extensive wiring required, minimal disruption to operations, and faster deployment of comprehensive security solutions.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      Reliable Connectivity
                    </h4>
                    <p className="text-foreground/70">Redundant communication paths ensure alarm signals reach monitoring centers even if primary network connections fail.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-blue-600" />
                      Scalability
                    </h4>
                    <p className="text-foreground/70">Add sensors and zones to wireless alarm systems as your business grows without costly rewiring.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">CCTV Camera Systems for Commercial Spaces</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  CCTV camera systems are essential components of comprehensive security solutions for commercial properties. They provide visual evidence, deter theft, and help monitor operations.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">High-Definition Monitoring</h3>
                      <p className="text-foreground/70">4K CCTV cameras capture detail for identification and evidence, crucial for comprehensive security systems.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Night Vision Technology</h3>
                      <p className="text-foreground/70">Advanced infrared CCTV cameras provide 24/7 coverage, maintaining security after business hours.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Cloud Storage</h3>
                      <p className="text-foreground/70">CCTV footage automatically backed up and accessible remotely through comprehensive security systems.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Motion Detection</h3>
                      <p className="text-foreground/70">Intelligent CCTV alerts when unauthorized movement detected, reducing alert fatigue.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Area Coverage</h3>
                      <p className="text-foreground/70">Wide-angle and pan-tilt CCTV cameras eliminate blind spots in comprehensive security systems.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Multi-Location Monitoring</h3>
                      <p className="text-foreground/70">Centralized CCTV camera monitoring across multiple business locations from single dashboard.</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Network Infrastructure & Connectivity Solutions</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Modern comprehensive security systems rely on robust network infrastructure. Enterprise security requires dedicated networking solutions to ensure uninterrupted connectivity and data transmission.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 my-8">
                  <h3 className="font-bold text-lg mb-4">Network Components for Commercial Security:</h3>
                  <div className="space-y-3 text-foreground/70">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span><strong>Dedicated Security Network:</strong> Separate network infrastructure ensuring security systems aren't affected by standard business traffic</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span><strong>Redundant Connections:</strong> Multiple network paths for comprehensive security systems connectivity</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span><strong>Mobile Network Booster:</strong> Enhanced cellular connectivity for backup communications and mobile access</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span><strong>Bandwidth Management:</strong> Prioritized data transmission for security systems ensuring responsive alerts</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span><strong>Secure Encryption:</strong> End-to-end encryption protecting comprehensive security systems data transmission</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Safety Alarm Systems & Emergency Response</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Safety alarm systems extend beyond theft prevention. Comprehensive security solutions include panic buttons, emergency communication systems, and coordinated response protocols.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Employee Panic Buttons",
                      desc: "Wearable or fixed panic buttons for employee emergency alerting as part of comprehensive security systems.",
                    },
                    {
                      title: "Mass Notification Systems",
                      desc: "Safety alarm technology that reaches all employees simultaneously during emergencies.",
                    },
                    {
                      title: "Emergency Lockdown",
                      desc: "Automatic door locks and safety alarm triggers when threats detected by comprehensive security systems.",
                    },
                    {
                      title: "First Responder Communication",
                      desc: "Direct integration with emergency services for coordinated safety alarm response.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 p-4 bg-slate-50 rounded-lg"
                    >
                      <Users className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground/70">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section 6 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Performance Metrics & ROI</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Comprehensive security systems deliver measurable business benefits. Commercial security solutions provide quantifiable improvements in loss prevention and operational efficiency.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Loss Prevention</h4>
                    <p className="text-sm text-foreground/70">Up to 70% reduction in theft and losses with comprehensive security systems</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Insurance Savings</h4>
                    <p className="text-sm text-foreground/70">Premium reductions of 15-30% for businesses with monitored security systems</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Response Time</h4>
                    <p className="text-sm text-foreground/70">Average response within 60 seconds with professional monitoring services</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Implementation Strategy */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Implementing Commercial Security Systems</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Successful deployment of comprehensive security systems requires careful planning and professional implementation.
                </p>

                <div className="bg-white rounded-xl p-8 border border-slate-200">
                  <div className="space-y-4">
                    {[
                      { num: "1", title: "Security Assessment", desc: "Professional evaluation of your facilities and security requirements" },
                      { num: "2", title: "System Design", desc: "Custom comprehensive security systems plan tailored to your business" },
                      { num: "3", title: "Installation", desc: "Professional installation of wireless alarm, CCTV, and networking components" },
                      { num: "4", title: "Configuration", desc: "Setup and testing of all comprehensive security systems features" },
                      { num: "5", title: "Monitoring Activation", desc: "Connection to 24/7 professional monitoring service" },
                      { num: "6", title: "Staff Training", desc: "Employee training on system operation and emergency procedures" },
                    ].map((step, i) => (
                      <motion.div
                        key={step.num}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">{step.num}</div>
                        <div>
                          <h4 className="font-bold">{step.title}</h4>
                          <p className="text-sm text-foreground/70">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-blue-50 rounded-2xl p-8 border border-blue-200 text-center mt-16">
                <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Commercial Security?</h2>
                <p className="text-foreground/70 mb-6">
                  Get a customized comprehensive security systems quote tailored to your business needs.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                    Request Commercial Security Quote
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
