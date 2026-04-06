import { useLocation, Link } from "wouter";
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

const servicePathById: Record<string, string> = {
  "cctv-installation": "cctv-camera-installation",
  "commercial-security": "commercial-security",
  "home-security": "home-security-systems",
  "dvr-nvr-setup": "dvr/nvr-setup-&-repair",
  "maintenance-amc": "maintenance-&-amc",
  "wireless-cctv": "wireless-cctv-systems",
  "access-control": "access-control-systems",
  "fire-alarm": "fire-alarm-systems",
};

type ServiceStory = {
  summary: string;
  longDescription: string;
  outcomes: Array<{ title: string; desc: string }>;
  deliverables: string[];
  siteChecks: string[];
  useCases: Array<{ title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
};

const serviceStoryById: Record<string, ServiceStory> = {
  "cctv-installation": {
    summary: "This service is built around one goal: give you reliable visibility where it matters most. We plan the camera layout, wiring path, storage, and remote access so the final setup works in daily use, not just on installation day.",
    longDescription: "For CCTV installation, the value is not only in the number of cameras. The real outcome is consistent coverage, easy playback, clean wiring, and a system that the owner can actually use without confusion. We start with the property layout, then map the blind spots, entry points, lighting conditions, and viewing angles before we decide the final design. That gives you a system that feels intentional rather than improvised.",
    outcomes: [
      { title: "Clear entry coverage", desc: "Focus on gates, doors, stairwells, and parking areas first so the most important areas are protected." },
      { title: "Cleaner installation", desc: "Cable paths, mounting points, and power access are planned in advance to keep the setup neat and maintainable." },
      { title: "Better daily use", desc: "The system is configured for real-world viewing, playback, and mobile access instead of only raw camera output." },
    ],
    deliverables: ["Site survey and camera mapping", "Camera mounting and cable routing", "Recorder setup and storage configuration", "Mobile app access and playback training"],
    siteChecks: ["Entry and exit points", "Lighting and night visibility", "Power availability", "Network or DVR placement"],
    useCases: [
      { title: "Homes and apartments", desc: "Ideal for entrances, balconies, lift lobbies, and parking bays where visibility is often limited." },
      { title: "Retail shops", desc: "Useful for counters, shelves, cash handling points, and storage access." },
      { title: "Small offices", desc: "Covers reception areas, server corners, and employee entry points without overcomplicating the setup." },
    ],
    faqs: [
      { q: "How do you decide where the cameras should go?", a: "We start with a site survey, then map the key entry points, blind spots, and movement paths before choosing the final positions." },
      { q: "Can I watch recordings on my phone?", a: "Yes. We configure the mobile app, test remote access, and show you how to review live view and playback." },
      { q: "Will the installation look messy?", a: "No. Cable routing, junction points, and camera placement are planned to keep the installation clean and serviceable." },
    ],
  },
  "commercial-security": {
    summary: "Commercial security needs scale, uptime, and clear handoff between teams. This page is about designing surveillance that can support staff movement, asset monitoring, and incident review without creating extra maintenance overhead.",
    longDescription: "Commercial sites usually need more than just camera coverage. They need a system that can support security staff, operations staff, and sometimes management review. That means the installation has to be practical for day-to-day use, easy to expand later, and stable enough to handle long recording hours. We plan the layout around the business flow so the system keeps working when the site gets busier.",
    outcomes: [
      { title: "Scalable coverage", desc: "The layout is planned so the system can grow as the site expands or new zones are added." },
      { title: "Operational visibility", desc: "We focus on entrances, exits, loading areas, and shared spaces where activity matters most." },
      { title: "Simple handoff", desc: "Security teams can review footage, handle alerts, and manage access without a steep learning curve." },
    ],
    deliverables: ["Coverage plan for key business zones", "Enterprise-grade recorder and storage setup", "Integration with access or alert systems", "Staff handover and review workflow training"],
    siteChecks: ["Shift patterns and peak movement", "Reception and access points", "Loading or stock movement areas", "Storage and retention requirements"],
    useCases: [
      { title: "Offices", desc: "Reception, corridors, meeting room entries, and work floors are the usual focus areas." },
      { title: "Warehouses", desc: "Good for loading bays, inventory aisles, perimeter gates, and storage zones." },
      { title: "Showrooms", desc: "Useful for customer flow, display areas, payment counters, and after-hours security." },
    ],
    faqs: [
      { q: "Can this integrate with access control?", a: "Yes. We can coordinate cameras with entry systems, card readers, and door controls where needed." },
      { q: "Do you support multi-camera business sites?", a: "Yes. The system is designed around multi-zone coverage and can scale as your site expands." },
      { q: "How do you keep downtime low?", a: "We plan the installation and testing in stages so the business can keep operating while the system is being upgraded." },
    ],
  },
  "home-security": {
    summary: "Home security should feel practical, not technical. This service is centered on making the house easier to monitor, easier to manage from a phone, and harder to approach unnoticed.",
    longDescription: "A good home security setup needs to feel simple for the family and serious for the property. We look at how residents move through the space, where visitors arrive, and where you would want instant visibility if something looked wrong. The result should be a system you can check quickly, trust on a daily basis, and maintain without turning it into a technical chore.",
    outcomes: [
      { title: "Family-focused coverage", desc: "We prioritize gates, front doors, parking, and common access points where people actually enter the home." },
      { title: "Mobile peace of mind", desc: "Remote access and alerts are set up so you can check in quickly when you are away." },
      { title: "Low-fuss operation", desc: "The setup is tuned for everyday family use, not just for a technical operator." },
    ],
    deliverables: ["Entrance and perimeter plan", "Mobile viewing and alert setup", "Camera alignment for family spaces", "Training for household users"],
    siteChecks: ["Main gate and entry path", "Parking or driveway area", "Balcony and terrace exposure", "Indoor blind spots and corners"],
    useCases: [
      { title: "Apartments", desc: "Best for corridor entries, lift areas, and parking access points." },
      { title: "Independent homes", desc: "Useful for gate, porch, terrace, side passage, and backyard coverage." },
      { title: "Gated communities", desc: "Helps track visitors, deliveries, and movement around shared approaches." },
    ],
    faqs: [
      { q: "Can this work in a smaller apartment setup?", a: "Yes. We tailor the camera count and placement to fit the layout instead of forcing a large package." },
      { q: "Will family members be able to use it easily?", a: "Yes. We set it up with clear app access and walk through the basic controls during handover." },
      { q: "What if I already have some cameras installed?", a: "We can assess the existing setup and expand or repair it as needed." },
    ],
  },
  "dvr-nvr-setup": {
    summary: "This service is the technical backbone of the security system. When recorders are unstable, storage is failing, or remote access breaks, the whole setup feels unreliable. We fix that by restoring the recording, retrieval, and backup layer first.",
    longDescription: "Recorder work is often invisible until something goes wrong, which is why it has such an outsized impact on the rest of the system. If the DVR or NVR is not configured properly, even good cameras can feel useless. We check the recording schedule, storage health, playback behavior, firmware, and remote connectivity so the recorder becomes dependable again instead of being a point of failure.",
    outcomes: [
      { title: "Recovered recording", desc: "We troubleshoot storage, playback, and device pairing so footage becomes accessible again." },
      { title: "Better stability", desc: "Firmware, disk health, and connection issues are checked to reduce repeat failures." },
      { title: "Cleaner remote access", desc: "We reconfigure mobile and web access so the system can be used reliably from outside the site." },
    ],
    deliverables: ["DVR/NVR diagnosis and health check", "Storage and recording repair", "Remote access and network setup", "Backup configuration and handover"],
    siteChecks: ["Existing recording quality", "Hard disk status and capacity", "Network router and IP setup", "Playback and export workflow"],
    useCases: [
      { title: "Faulty recorders", desc: "Ideal when a DVR or NVR is not recording correctly or restarts unexpectedly." },
      { title: "Storage upgrades", desc: "Useful when you need more retention time or better disk reliability." },
      { title: "Older installations", desc: "Good for systems that need a clean reset, calibration, or brand-agnostic repair." },
    ],
    faqs: [
      { q: "Can you work on different brands?", a: "Yes. We routinely handle common recorder brands and mixed legacy setups." },
      { q: "What if the hard disk has failed?", a: "We test the storage layer first, then replace or reconfigure the disk if needed." },
      { q: "Can remote viewing be restored?", a: "In many cases, yes. We check network settings, app pairing, and device authorization." },
    ],
  },
  "maintenance-amc": {
    summary: "Maintenance is what keeps a good security system from quietly drifting into failure. This service is built around routine checks, fast response, and small adjustments that prevent bigger problems later.",
    longDescription: "An AMC is valuable because most security systems do not fail all at once. They degrade slowly through dust, loose connections, changed angles, stale firmware, and storage issues. Maintenance keeps the system visible, predictable, and ready when it matters. It also means someone is responsible for looking after the setup instead of waiting for the owner to notice a problem after the fact.",
    outcomes: [
      { title: "Fewer surprises", desc: "Regular inspections catch weak points before they become outages or blind spots." },
      { title: "Faster support", desc: "Priority attention means issues are handled with less waiting and less disruption." },
      { title: "Longer system life", desc: "Cleaning, calibration, and firmware upkeep help equipment stay reliable for longer." },
    ],
    deliverables: ["Scheduled health checks", "Camera cleaning and re-alignment", "Firmware and configuration review", "Priority repair response"],
    siteChecks: ["Camera focus and angle drift", "Cable wear and loose fittings", "Recorder health and storage", "Mobile app and remote access status"],
    useCases: [
      { title: "Existing camera systems", desc: "Best for sites that already have working equipment but need consistent upkeep." },
      { title: "Busy households", desc: "Useful when the system must stay dependable without the owner constantly troubleshooting it." },
      { title: "Commercial sites", desc: "Helps shops, offices, and warehouses avoid gaps in coverage during daily operations." },
    ],
    faqs: [
      { q: "What does AMC usually include?", a: "Typically inspections, cleaning, calibration, basic troubleshooting, and system health checks based on the contract." },
      { q: "Is maintenance only for your installations?", a: "No. We can also support many third-party systems after a compatibility check." },
      { q: "Why is AMC worth it?", a: "It reduces unexpected failures and keeps the system working the way it should after installation." },
    ],
  },
};

const defaultStory: ServiceStory = {
  summary: "This service is designed to turn a technical requirement into a practical security setup that is easier to use, maintain, and trust day to day.",
  longDescription: "Every property has different weak points, and every useful security installation has to respond to that reality. The goal is not just to add equipment. It is to build a system that fits the space, remains easy to manage, and keeps delivering value after the initial setup is complete.",
  outcomes: [
    { title: "Practical planning", desc: "The layout is matched to the property and the way people actually move through it." },
    { title: "Reliable operation", desc: "Configuration and handover are done so the system can be used without guesswork." },
    { title: "Clear support", desc: "The installation is followed by guidance so the owner knows what to expect next." },
  ],
  deliverables: ["Initial assessment and recommendation", "Install and configuration", "User handover and testing", "Support plan and follow-up"],
  siteChecks: ["Property layout", "Power and network access", "Primary risk areas", "Operational needs"],
  useCases: [
    { title: "Residential properties", desc: "Good for homes that need a simple and dependable security layer." },
    { title: "Business spaces", desc: "Useful where ongoing monitoring and accountability matter." },
    { title: "Upgrades and repairs", desc: "A solid fit when an existing setup needs improvement rather than replacement." },
  ],
  faqs: [
    { q: "How do I know what package I need?", a: "We start with the site and recommend the setup based on layout, risk areas, and budget." },
    { q: "Can you adjust the system later?", a: "Yes. Most systems can be expanded, repaired, or refined after the initial install." },
    { q: "Do you provide post-install support?", a: "Yes. We explain the system and remain available if follow-up adjustments are needed." },
  ],
};

export default function ServiceDetails() {
  const [location] = useLocation();
  const servicePath = location.replace(/\/$/, "").replace(/^\/service\//, "");
  const service = serviceDetails.find((entry) => servicePathById[entry.id] === servicePath);

  const story = service ? (serviceStoryById[service.id] ?? defaultStory) : defaultStory;

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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
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

        {/* Service Breakdown */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div>
                <FadeIn>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Service Breakdown</p>
                  <SlideReveal>
                    <h2 className="text-3xl font-bold mb-4">What this service actually covers</h2>
                  </SlideReveal>
                  <p className="text-gray-700 leading-relaxed mb-6">{story.longDescription}</p>
                  <div className="space-y-4">
                    {story.deliverables.map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.2}>
                  <Card className="h-full border border-border/50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        Before We Start
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {story.siteChecks.map((item, index) => (
                          <motion.div
                            key={item}
                            className="flex gap-3 items-start"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">{item}</div>
                              <div className="text-sm text-gray-600">Checked during the site visit so the final plan fits the property accurately.</div>
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

        {/* Why This Service Matters */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <FadeIn>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why It Matters</p>
                  <SlideReveal>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">A service page that explains the real value, not just the checklist</h2>
                  </SlideReveal>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {story.summary}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For this service, the important part is not only the hardware or the parts list. It is the way the system gets planned, installed, tested, and handed over so it stays useful after the technician leaves.
                  </p>
                </FadeIn>
              </div>
              <div>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                  {story.outcomes.map((item) => (
                    <StaggerItem key={item.title} direction="scale">
                      <Card className="h-full border border-border/50 shadow-sm bg-white">
                        <CardContent className="p-6">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Best Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Best Use Cases</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Where this setup works best</h2>
                </SlideReveal>
                <p className="text-lg text-gray-600">
                  These are the situations where the service usually gives the most practical value and the clearest day-to-day benefit.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 xl:grid-cols-3 gap-8" staggerDelay={0.1}>
              {story.useCases.map((item) => (
                <StaggerItem key={item.title} direction="up">
                  <AnimatedCard>
                    <Card className="h-full border border-border/50 shadow-sm bg-slate-50">
                      <CardContent className="p-7">
                        <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Use Case</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <FadeIn>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Common Questions</p>
                <SlideReveal>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Questions people usually ask before they decide</h2>
                </SlideReveal>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 xl:grid-cols-3 gap-6" staggerDelay={0.08}>
              {story.faqs.map((faq) => (
                <StaggerItem key={faq.q} direction="scale">
                  <Card className="h-full border border-border/50 shadow-sm bg-white">
                    <CardContent className="p-7">
                      <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
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

            <StaggerContainer className="grid grid-cols-1 xl:grid-cols-3 gap-8" staggerDelay={0.12}>
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