import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  Camera, Building2, Home as HomeIcon, Server, Wrench, Wifi,
  Users, Zap, ArrowLeft, CheckCircle, Clock, ShieldCheck, Award,
  Smartphone, Cloud, Video, Eye, Wifi as WifiIcon, Battery, Globe,
  Fingerprint, CreditCard, AlertTriangle, Thermometer, Speaker, Lightbulb, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FadeIn, StaggerContainer, StaggerItem, CountUp, AnimatedCard, AnimatedIcon,
  BlobBackground, PulseGlow, PageTransition, RevealLine, ScaleOnHover, SlideReveal
} from "@/components/animations";

const serviceDetails = [
  {
    id: "cctv-installation",
    icon: Camera,
    title: "CCTV Camera Installation",
    category: "Core Services",
    overview: "Our most popular service — we handle everything from site survey to final testing. Whether you need 1 camera or 50, we ensure every angle is covered with professional wiring and optimal placement.",
    keyFeatures: [
      "HD & 4K cameras available",
      "Indoor and outdoor options",
      "Professional wiring & cable management",
      "Remote viewing setup",
      "Night vision enabled",
      "Motion detection configured"
    ],
    suitedFor: "Homes, apartments, shops, small offices",
    process: [
      { step: 1, title: "Site Survey", desc: "We visit your property to assess coverage needs, power sources, and optimal camera placement." },
      { step: 2, title: "System Design", desc: "Custom layout plan with camera types, DVR/NVR selection, and storage calculations." },
      { step: 3, title: "Installation", desc: "Professional mounting, cable routing, and connection to recording system." },
      { step: 4, title: "Testing & Training", desc: "Full system test and user training on mobile app and DVR controls." }
    ],
    technologies: [
      "Hikvision, Dahua, CP Plus, Bosch, Axis cameras",
      "Analog HD (AHD), TVI, CVI, and IP systems",
      "PoE (Power over Ethernet) for IP cameras",
      "Coaxial cable (RG59) for analog systems",
      "Mobile apps: Hik-Connect, iVMS-4500, etc."
    ],
    pricing: "Starting from ₹8,000 for 2-camera setup",
    warranty: "1-year labor warranty + manufacturer camera warranty"
  },
  {
    id: "commercial-security",
    icon: Building2,
    title: "Commercial Security",
    category: "Business Solutions",
    overview: "We design scalable surveillance systems for businesses of all sizes. Our commercial packages include enterprise-grade cameras, multi-channel DVRs, and complete monitoring setups with access control.",
    keyFeatures: [
      "Multi-camera commercial systems",
      "24/7 recording & monitoring",
      "Access control integration",
      "Multi-location networking",
      "Scalable as your business grows",
      "Dedicated support manager"
    ],
    suitedFor: "Offices, warehouses, factories, showrooms",
    process: [
      { step: 1, title: "Business Assessment", desc: "Understand business operations, security risks, and compliance requirements." },
      { step: 2, title: "Enterprise Design", desc: "Design with redundancy, failover, and enterprise-grade components." },
      { step: 3, title: "Installation & Integration", desc: "Install cameras, DVRs/NVRs, and integrate with existing security systems." },
      { step: 4, title: "Staff Training", desc: "Train security personnel on system operation and incident response." }
    ],
    technologies: [
      "Enterprise NVRs with RAID storage",
      "Pan-tilt-zoom (PTZ) cameras",
      "License plate recognition (LPR)",
      "Video analytics (people counting, loitering detection)",
      "Centralized management software",
      "Cloud backup and remote monitoring"
    ],
    pricing: "Custom quote based on business size and requirements",
    warranty: "Extended warranties available for commercial equipment"
  },
  {
    id: "home-security",
    icon: HomeIcon,
    title: "Home Security Systems",
    category: "Residential",
    overview: "Protect your family with a reliable home CCTV system. We specialize in apartment setups, gated community installations, and bungalow perimeter coverage with smart mobile alerts.",
    keyFeatures: [
      "Gate & entrance monitoring",
      "Smart motion alerts on your phone",
      "Mobile app live viewing",
      "Budget-friendly packages",
      "Night vision cameras",
      "Tamper-proof installation"
    ],
    suitedFor: "Apartments, houses, gated communities",
    process: [
      { step: 1, title: "Home Survey", desc: "Assess entry points, blind spots, and family security concerns." },
      { step: 2, title: "Custom Package", desc: "Design package based on home size, layout, and security priorities." },
      { step: 3, title: "Discreet Installation", desc: "Install cameras with minimal visual impact and proper cable concealment." },
      { step: 4, title: "Family Training", desc: "Teach family members how to use the system and respond to alerts." }
    ],
    technologies: [
      "Wireless and wired camera options",
      "Smart home integration (Alexa, Google Home)",
      "Two-way audio for communication",
      "Cloud storage for remote access",
      "Motion detection with person/vehicle classification",
      "Battery-powered cameras for flexible placement"
    ],
    pricing: "Starting from ₹14,000 for 4-camera home package",
    warranty: "1-year comprehensive warranty"
  },
  {
    id: "dvr-nvr-setup",
    icon: Server,
    title: "DVR/NVR Setup & Repair",
    category: "Technical Services",
    overview: "Expert installation and repair for all recording systems. We configure DVRs and NVRs for optimal storage, set up remote access, perform hard disk upgrades, and troubleshoot any existing system.",
    keyFeatures: [
      "All brands supported (Hikvision, Dahua, CP Plus)",
      "Hard disk upgrade & replacement",
      "Remote access configuration",
      "Firmware updates & security patching",
      "Backup & data recovery",
      "Same-day repair available"
    ],
    suitedFor: "Existing systems, upgrades, repairs",
    process: [
      { step: 1, title: "System Diagnosis", desc: "Identify issues through remote access or on-site inspection." },
      { step: 2, title: "Repair Planning", desc: "Determine if repair or replacement is more cost-effective." },
      { step: 3, title: "Component Replacement", desc: "Replace faulty hard drives, power supplies, or other components." },
      { step: 4, title: "System Optimization", desc: "Update firmware, optimize settings, and restore functionality." }
    ],
    technologies: [
      "DVR (Digital Video Recorder) systems",
      "NVR (Network Video Recorder) systems",
      "Hybrid recorders (analog + IP)",
      "RAID configurations for data protection",
      "Remote viewing apps and web interfaces",
      "Cloud storage integration"
    ],
    pricing: "Diagnostic fee ₹500 (waived with repair), repairs starting from ₹1,000",
    warranty: "3-month warranty on repairs and replaced components"
  },
  {
    id: "maintenance-amc",
    icon: Wrench,
    title: "Maintenance & AMC",
    category: "Ongoing Support",
    overview: "Keep your security system running at 100% with our Annual Maintenance Contracts. Regular servicing, priority support, and proactive issue resolution — so you never have a blind spot.",
    keyFeatures: [
      "Quarterly health check visits",
      "Priority response within 4 hours",
      "Lens cleaning & calibration",
      "Firmware & software updates",
      "Camera realignment",
      "Free minor repairs included"
    ],
    suitedFor: "All existing B.S. Security & third-party systems",
    process: [
      { step: 1, title: "Contract Setup", desc: "Assess your system and create customized maintenance plan." },
      { step: 2, title: "Regular Checkups", desc: "Quarterly visits to inspect, clean, and test all components." },
      { step: 3, title: "Issue Resolution", desc: "Priority support for any problems with fast response times." },
      { step: 4, title: "System Optimization", desc: "Keep your system updated and optimized for best performance." }
    ],
    technologies: [
      "Preventive maintenance protocols",
      "Performance monitoring tools",
      "Remote diagnostics capabilities",
      "Software update management",
      "Backup system verification",
      "Security vulnerability assessments"
    ],
    pricing: "Starting from ₹5,000/year for residential, ₹15,000/year for commercial",
    warranty: "Coverage for labor and minor parts during contract period"
  },
  {
    id: "wireless-cctv",
    icon: Wifi,
    title: "Wireless CCTV Systems",
    category: "Modern Solutions",
    overview: "No drilling, no messy cables — modern wireless IP cameras with full HD quality. Perfect for rented properties, heritage buildings, or anywhere cable routing is impractical.",
    keyFeatures: [
      "No wiring required",
      "Wi-Fi & 4G/LTE cameras",
      "Quick same-day installation",
      "Battery-powered options",
      "Flexible camera repositioning",
      "Cloud storage compatible"
    ],
    suitedFor: "Rented properties, temporary setups, add-ons",
    process: [
      { step: 1, title: "Site Assessment", desc: "Check Wi-Fi signal strength and determine optimal camera placement." },
      { step: 2, title: "Power Planning", desc: "Determine power source options (battery, solar, or existing outlets)." },
      { step: 3, title: "Installation", desc: "Mount cameras and configure wireless connections." },
      { step: 4, title: "App Setup", desc: "Configure mobile app and cloud storage settings." }
    ],
    technologies: [
      "Wi-Fi 6 and 5GHz connectivity",
      "4G/LTE cellular cameras",
      "Rechargeable battery systems",
      "Solar-powered camera options",
      "Cloud storage with encryption",
      "AI-powered motion detection"
    ],
    pricing: "Starting from ₹10,000 for 2-camera wireless setup",
    warranty: "1-year warranty on wireless components"
  },
  {
    id: "access-control",
    icon: Users,
    title: "Access Control Systems",
    category: "Security Integration",
    overview: "Secure your premises with advanced access control solutions. We install and integrate card readers, biometric scanners, and smart locks to manage entry points efficiently.",
    keyFeatures: [
      "Biometric fingerprint scanners",
      "RFID card readers",
      "Smart lock integration",
      "Multi-door control panels",
      "Audit trail logging",
      "Remote access management"
    ],
    suitedFor: "Offices, residential buildings, data centers",
    process: [
      { step: 1, title: "Access Analysis", desc: "Map entry points and determine access levels for different users." },
      { step: 2, title: "System Design", desc: "Design access control architecture with appropriate readers and controllers." },
      { step: 3, title: "Installation", desc: "Install readers, controllers, and integrate with door hardware." },
      { step: 4, title: "User Management", desc: "Configure user permissions and train administrators on system management." }
    ],
    technologies: [
      "Fingerprint and facial recognition",
      "RFID and NFC card systems",
      "Smart lock integration",
      "Access control software platforms",
      "Real-time monitoring and alerts",
      "Integration with CCTV systems"
    ],
    pricing: "Starting from ₹15,000 for single-door setup",
    warranty: "1-year warranty on hardware and software"
  },
  {
    id: "fire-alarm",
    icon: Zap,
    title: "Fire Alarm Systems",
    category: "Safety Systems",
    overview: "Protect lives and property with reliable fire detection and alarm systems. We provide complete fire safety solutions from detection to notification.",
    keyFeatures: [
      "Smoke and heat detectors",
      "Manual call points",
      "Sounders and strobes",
      "Control panels",
      "Emergency lighting",
      "Regular testing and certification"
    ],
    suitedFor: "Commercial buildings, schools, hospitals",
    process: [
      { step: 1, title: "Risk Assessment", desc: "Evaluate fire risks and determine detector placement according to safety codes." },
      { step: 2, title: "System Design", desc: "Design alarm system layout with appropriate detectors and notification devices." },
      { step: 3, title: "Installation", desc: "Install detectors, control panels, and notification devices." },
      { step: 4, title: "Testing & Certification", desc: "Test system functionality and provide safety certification." }
    ],
    technologies: [
      "Ionization and photoelectric smoke detectors",
      "Heat detectors for high-temperature areas",
      "Addressable fire alarm systems",
      "Voice evacuation systems",
      "Emergency lighting integration",
      "Remote monitoring capabilities"
    ],
    pricing: "Starting from ₹25,000 for basic commercial setup",
    warranty: "2-year warranty on fire alarm systems"
  }
];

const testimonials = [
  {
    name: "Anita Verma",
    role: "Shop Owner, Malviya Nagar",
    quote: "The team explained the full setup clearly, finished on time, and the cameras cover every entry point without cluttered wiring.",
  },
  {
    name: "Suresh Gupta",
    role: "Resident, Vasant Kunj",
    quote: "They were professional from site visit to installation. The mobile app setup was also explained in a simple way, which made a big difference.",
  },
  {
    name: "Meera Joshi",
    role: "School Principal",
    quote: "We appreciated the detailed guidance and honest recommendations. The system works reliably and the support after installation has been excellent.",
  },
];

export default function ServiceDetails() {
  const params = useParams();
  const serviceId = params?.id;
  const service = serviceDetails.find(s => s.id === serviceId);

  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
        {/* Header */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-linear-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          <BlobBackground className="absolute -top-20 right-0 w-96 h-96 bg-blue-500" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <Link href="/services">
                  <Button variant="ghost" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <AnimatedIcon className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </AnimatedIcon>
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
                    {service.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold font-display">{service.title}</h1>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
                {service.overview}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <p className="text-gray-600 mb-6">What makes this service essential for your security needs.</p>
                  <div className="space-y-3">
                    {service.keyFeatures.map((feature, index) => (
                      <motion.div key={feature} className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}>
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div className="lg:col-span-2">
                <FadeIn delay={0.3}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Implementation Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {service.process.map((step) => (
                          <motion.div key={step.step} className="flex gap-4"
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: step.step * 0.1 }}>
                            <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                              {step.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              <p className="text-gray-600">{step.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies & Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-4">Technologies & Specifications</h2>
                <p className="text-gray-600">Cutting-edge technology and industry-standard equipment we use.</p>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              <StaggerItem direction="up">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                      Security Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Encrypted data transmission
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Secure cloud storage
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Access control protocols
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Regular security updates
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem direction="up">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      Mobile Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Real-time mobile alerts
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Live video streaming
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Remote system control
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Multi-device access
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
              <StaggerItem direction="up">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-purple-600" />
                      Storage Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Local DVR/NVR storage
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Cloud backup options
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        RAID redundancy
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Automatic backup
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <FadeIn>
                  <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                  <div className="space-y-4">
                    {service.technologies.map((tech, index) => (
                      <motion.div key={index} className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}>
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-700">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.3}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-yellow-600" />
                        Service Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Best For</span>
                        <span className="text-sm text-gray-800">{service.suitedFor}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Starting Price</span>
                        <span className="text-sm font-semibold text-blue-600">{service.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">Warranty</span>
                        <span className="text-sm text-gray-800">{service.warranty}</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Customers Say About This Service</h2>
                </SlideReveal>
                <p className="text-lg text-gray-600">
                  Real feedback from customers who chose this service for their homes, shops, and commercial spaces.
                </p>
              </FadeIn>
            </div>

            <div className="max-w-3xl mx-auto mb-10 text-center">
              <motion.div
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm border border-border/50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  4.9/5 average rating from 200+ customer reviews
                </div>
              </motion.div>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {testimonials.map((testimonial) => (
                <StaggerItem key={testimonial.name} direction="scale">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm bg-white">
                      <CardContent className="p-8">
                        <div className="flex gap-0.5 text-yellow-400 mb-5">
                          {Array(5).fill(0).map((_, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.08, type: "spring", stiffness: 400 }}
                            >
                              <Star className="w-4 h-4 fill-current" />
                            </motion.span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-gray-900">{testimonial.name}</div>
                            <div className="text-xs text-gray-500">{testimonial.role}</div>
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
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <FadeIn>
              <SlideReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Property?</h2>
              </SlideReveal>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Get a free consultation and custom quote tailored to your specific security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
                    Get Free Quote
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8"
                  onClick={() => window.open("https://wa.me/919193232403", "_blank")}>
                  WhatsApp Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}