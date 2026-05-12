import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lock, Clock, Bell, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideReveal, RevealLine } from "@/components/animations";

export default function AlarmSystemsGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6 border border-orange-200"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Security Guide</span>
              </motion.div>

              <SlideReveal>
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                  Complete Guide to <span className="text-orange-600">Alarm Systems</span>, <span className="text-orange-600">Burglar Alarms</span>, & Security Monitoring
                </h1>
              </SlideReveal>

              <RevealLine className="w-16 my-6" />

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Comprehensive security solutions including silent alarms, fire alarms, access control systems, and 24/7 monitoring service for residential and commercial properties.
              </p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">
                    Get Security Assessment
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
                <h2 className="text-3xl font-bold mb-4">Understanding Comprehensive Security Systems</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  A comprehensive security system goes beyond simple burglar alarms. Modern security monitoring service integrates multiple layers of protection including access control systems, silent alarms, fire alarms, and network-based monitoring.
                </p>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 my-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-600" />
                    Components of Complete Security Systems:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Burglar Alarms & Sensors",
                      "Fire Alarms & Detection",
                      "Silent Alarms for Emergencies",
                      "Access Control Systems",
                      "Security Monitoring Service",
                      "Mobile Notifications",
                    ].map((item) => (
                      <motion.div key={item} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Burglar Alarms & Intrusion Detection</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Burglar alarms are a foundational component of comprehensive security solutions. These alarm systems detect unauthorized entry and alert you immediately when a threat is detected.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                    <h4 className="font-bold text-lg mb-2">Door & Window Sensors</h4>
                    <p className="text-foreground/70">Detect opening and closing of entry points, triggering silent alarms when unauthorized access is attempted.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                    <h4 className="font-bold text-lg mb-2">Motion Detectors</h4>
                    <p className="text-foreground/70">Advanced safety alarm technology that triggers when movement is detected in protected areas.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
                    <h4 className="font-bold text-lg mb-2">Glass Break Sensors</h4>
                    <p className="text-foreground/70">Specialized security monitoring equipment that detects the unique sound frequency of breaking glass.</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Fire Alarms & Safety Systems</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Fire alarms are critical components of comprehensive security systems. They provide early warning of fire hazards, giving occupants crucial time to evacuate safely.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-2 border-orange-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        Smoke Detection
                      </h3>
                      <p className="text-foreground/70">Ionization and photoelectric sensors detect smoke particles for rapid fire alarm activation.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-orange-600" />
                        Heat Detection
                      </h3>
                      <p className="text-foreground/70">Thermostatic and heat-sensitive technology triggers alarms based on temperature changes.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-orange-600" />
                        Connected Monitoring
                      </h3>
                      <p className="text-foreground/70">Fire alarms linked to central monitoring service for immediate emergency response.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-orange-600" />
                        Safety Alarm Integration
                      </h3>
                      <p className="text-foreground/70">Fire systems integrated with comprehensive security systems for coordinated response.</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Silent Alarms & Emergency Response</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Silent alarms are a critical security feature in comprehensive security solutions. Unlike audible alarms, silent alarms send immediate notifications to security monitoring services without alerting potential intruders.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 my-8">
                  <h3 className="font-bold text-lg mb-4">How Silent Alarms Protect You:</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">1.</span>
                      <span><strong>Discreet Detection:</strong> Threats are detected without alerting intruders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">2.</span>
                      <span><strong>Rapid Response:</strong> Security monitoring service receives alert immediately</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">3.</span>
                      <span><strong>Law Enforcement Contact:</strong> Emergency services are dispatched automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">4.</span>
                      <span><strong>Evidence Preservation:</strong> Intruders don't have time to clear the scene</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 5 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Access Control Systems for Business Security</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Access control systems are essential components of comprehensive security solutions for commercial properties. They regulate who can enter specific areas and when.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Keycard Access",
                      desc: "Employee ID cards grant access to authorized areas with detailed tracking capabilities.",
                    },
                    {
                      title: "Biometric Systems",
                      desc: "Fingerprint and facial recognition technology provides highest security levels.",
                    },
                    {
                      title: "PIN Code Entry",
                      desc: "Numeric keypad entry systems for flexible access management.",
                    },
                    {
                      title: "Mobile Access",
                      desc: "Smartphone-based access control integration with comprehensive security systems.",
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
                      <Lock className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
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
                <h2 className="text-3xl font-bold mb-4">Professional Monitoring Service</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  24/7 security monitoring service is the backbone of comprehensive security systems. Professional monitoring ensures that every alarm, whether burglar alarm, fire alarm, or silent alarm, receives immediate attention.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">24/7 Monitoring</h4>
                    <p className="text-sm text-foreground/70">Round-the-clock security monitoring service protection</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <Bell className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Instant Alerts</h4>
                    <p className="text-sm text-foreground/70">Immediate notification and emergency response activation</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                    <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Mobile Access</h4>
                    <p className="text-sm text-foreground/70">Check system status and receive alerts on your phone</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-orange-50 rounded-2xl p-8 border border-orange-200 text-center mt-16">
                <h2 className="text-2xl font-bold mb-4">Protect Your Property with Comprehensive Security</h2>
                <p className="text-foreground/70 mb-6">
                  Our security monitoring service and comprehensive security systems provide complete protection.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 bg-orange-600 hover:bg-orange-700">
                    Schedule Security Assessment
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
