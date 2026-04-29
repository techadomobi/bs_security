export type LocationDetails = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  intro: string[];
  stats: Array<{ label: string; value: string }>;
  highlights: string[];
  idealFor: string[];
  services: string[];
  whyChoose: string[];
  faqs: Array<{ question: string; answer: string }>;
  nearby: string[];
};

export const locations: LocationDetails[] = [
  {
    slug: "nebsarai",
    name: "Neb Sarai",
    headline: "CCTV Camera Installation Services in Neb Sarai",
    subheadline: "Security planning, camera setup, DVR/NVR installation, and maintenance support for homes, PG buildings, shops, and offices in Neb Sarai.",
    heroImage: "/images/portfolio-1.png",
    intro: [
      "Neb Sarai is a dense residential pocket with apartments, builder floors, small commercial units, and coaching or rental properties that need practical surveillance coverage rather than overbuilt systems.",
      "Our team designs CCTV setups for entry gates, staircases, parking areas, terraces, and shopfronts so owners in Neb Sarai can monitor movement clearly and manage recordings from mobile devices.",
    ],
    stats: [
      { label: "Ideal For", value: "Homes, PGs, Shops" },
      { label: "Visit Support", value: "Local South Delhi" },
      { label: "Setup Type", value: "HD + IP Cameras" },
    ],
    highlights: ["Entry gate and staircase coverage", "Parking and corridor monitoring", "Remote mobile app setup", "Repair and expansion for old systems"],
    idealFor: ["Builder floors and apartments", "PG and rental buildings", "Local stores and clinics", "Small office units"],
    services: ["New CCTV installation", "DVR hard disk upgrade", "Night vision camera setup", "App viewing configuration", "Annual maintenance support", "Fault diagnosis and repair"],
    whyChoose: ["Fast routing from our South Delhi service area", "Clean wiring suited for occupied buildings", "Camera placement planned for narrow lanes and shared entries", "Budget-conscious solutions without unnecessary hardware"],
    faqs: [
      { question: "Can you cover shared building entrances in Neb Sarai?", answer: "Yes. We commonly secure main gates, common staircases, and parking sections for rental and family buildings." },
      { question: "Do you install systems for small properties?", answer: "Yes. We handle compact 2-camera and 4-camera setups as well as larger building coverage plans." },
      { question: "Can old cameras be reused?", answer: "If the existing cameras and recorder are in workable condition, we can often reuse part of the setup and upgrade only the weak points." },
    ],
    nearby: ["Saket", "Chhatarpur", "Khanpur"],
  },
  {
    slug: "chhatarpur",
    name: "Chhatarpur",
    headline: "Professional CCTV Installation in Chhatarpur",
    subheadline: "Surveillance systems for farmhouses, villas, apartments, offices, temples, and local commercial properties across Chhatarpur.",
    heroImage: "/images/portfolio-2.png",
    intro: [
      "Chhatarpur includes a mix of residential colonies, larger properties, farmhouses, and commercial plots where camera coverage needs to balance broad outdoor visibility with reliable recording quality.",
      "We plan surveillance layouts for long boundaries, entry gates, driveways, servant areas, parking zones, and indoor access points so property owners can monitor operations without blind spots.",
    ],
    stats: [
      { label: "Best For", value: "Farmhouses, Villas" },
      { label: "Coverage", value: "Indoor + Outdoor" },
      { label: "Monitoring", value: "Mobile + Recorder" },
    ],
    highlights: ["Gate and perimeter camera placement", "Weather-ready outdoor camera options", "Long-cable and wide-property planning", "Remote viewing and playback setup"],
    idealFor: ["Farmhouses and villas", "Independent floors", "Commercial compounds", "Banquet or event properties"],
    services: ["Perimeter surveillance design", "PTZ and fixed camera setup", "Recorder and storage planning", "Cabling for large plots", "System troubleshooting", "Maintenance contracts"],
    whyChoose: ["Experience with mixed residential and large-plot layouts", "Strong focus on entry and perimeter security", "Scalable system design for future camera additions", "Support for both luxury and practical installations"],
    faqs: [
      { question: "Do you handle large properties in Chhatarpur?", answer: "Yes. We plan systems for wider plots, including long-distance cable runs, multiple blocks, and outdoor camera placement." },
      { question: "Can you secure farmhouse entry points?", answer: "Yes. We typically cover gates, boundary sides, parking zones, and staff access routes." },
      { question: "Is remote viewing included?", answer: "Yes. We configure phone access so you can check live feed and recordings from anywhere." },
    ],
    nearby: ["Vasant Kunj", "Ghitorni", "Neb Sarai"],
  },
  {
    slug: "saket",
    name: "Saket",
    headline: "CCTV Camera Setup and Repair in Saket",
    subheadline: "Modern camera solutions for apartments, offices, clinics, retail stores, restaurants, and residential societies in Saket.",
    heroImage: "/images/portfolio-3.png",
    intro: [
      "Saket has a high mix of residential blocks, commercial spaces, clinics, and retail outlets where camera quality, storage reliability, and professional finish matter as much as basic coverage.",
      "We install systems that secure reception areas, cash counters, corridors, lifts, parking zones, and home entrances while keeping the setup neat and easy to manage.",
    ],
    stats: [
      { label: "Common Projects", value: "Homes + Retail" },
      { label: "Recording", value: "DVR / NVR" },
      { label: "Support", value: "Repair + AMC" },
    ],
    highlights: ["Retail and office surveillance planning", "Apartment and society entry coverage", "Neat concealed wiring", "Quick service for upgrades and repairs"],
    idealFor: ["Flats and gated residences", "Shops and showrooms", "Clinics and offices", "Restaurants and service outlets"],
    services: ["Multi-camera planning", "Cash counter and stock area coverage", "Doorbell and entrance monitoring", "Cloud or local recorder setup", "Hard disk replacement", "On-call support visits"],
    whyChoose: ["Professional presentation suitable for premium interiors", "Fast response for commercial downtime issues", "Practical camera placement for footfall-heavy areas", "Clear app setup and user handover"],
    faqs: [
      { question: "Do you work in occupied offices and clinics?", answer: "Yes. We schedule installation to reduce disruption and keep cabling clean and organized." },
      { question: "Can you upgrade an old DVR system in Saket?", answer: "Yes. We can replace cameras, recorders, storage, or wiring depending on the condition of the existing setup." },
      { question: "Do you provide maintenance after installation?", answer: "Yes. We provide support visits and AMC options for ongoing system health." },
    ],
    nearby: ["Neb Sarai", "Malviya Nagar", "Khanpur"],
  },
  {
    slug: "greenpark",
    name: "Green Park",
    headline: "Trusted CCTV Installation Services in Green Park",
    subheadline: "Surveillance design and installation for homes, boutiques, offices, clinics, and premium residential properties in Green Park.",
    heroImage: "/images/portfolio-4.png",
    intro: [
      "Green Park combines premium residences with high-value commercial and professional spaces, which makes discreet installation and dependable image quality especially important.",
      "We create camera layouts that protect entrances, reception areas, visitor movement, parking, service zones, and interior access points without making the property feel cluttered.",
    ],
    stats: [
      { label: "Property Type", value: "Premium Mixed Use" },
      { label: "Finish", value: "Clean Installation" },
      { label: "Use Case", value: "Residential + Clinic" },
    ],
    highlights: ["Discreet camera placement", "Suitable for clinics and offices", "High-definition recording options", "Mobile viewing with user access setup"],
    idealFor: ["Independent houses", "Boutiques and small offices", "Clinics and consultation spaces", "Residential floors and apartments"],
    services: ["Indoor and outdoor camera installation", "Network camera setup", "Secure recorder placement", "User access configuration", "Camera angle optimization", "Periodic health checks"],
    whyChoose: ["Attention to neat finish in premium properties", "Balanced planning for privacy and security", "Support for low-visibility cabling routes", "Reliable upgrades for outdated systems"],
    faqs: [
      { question: "Can you install cameras without making the property look messy?", answer: "Yes. We prioritize clean cable paths and practical device placement, especially in premium interiors." },
      { question: "Are these systems suitable for clinics?", answer: "Yes. We regularly plan systems for reception, waiting areas, pharmacy counters, and entry points." },
      { question: "Can multiple family members access the cameras?", answer: "Yes. We can set up viewing access on approved phones for owners or family members." },
    ],
    nearby: ["Hauz Khas", "Malviya Nagar", "Saket"],
  },
  {
    slug: "vasantkunj",
    name: "Vasant Kunj",
    headline: "CCTV Camera Installation in Vasant Kunj",
    subheadline: "Fast local CCTV service for apartments, DDA flats, villas, societies, and commercial units throughout Vasant Kunj.",
    heroImage: "/images/hero.png",
    intro: [
      "Vasant Kunj includes apartment complexes, gated blocks, independent homes, and market-facing commercial units where residents usually want reliable daily monitoring and quick after-service.",
      "Because our service base is close to this area, we can handle planning, installation, upgrades, and support efficiently for both small home setups and larger society-level requirements.",
    ],
    stats: [
      { label: "Local Reach", value: "Near Our Base" },
      { label: "Best For", value: "Societies + Homes" },
      { label: "Response", value: "Quick Support" },
    ],
    highlights: ["Fast service scheduling in local sectors", "Apartment and society coverage", "Phone app training for users", "Add-on cameras for existing systems"],
    idealFor: ["DDA flats and apartments", "Society gates and blocks", "Independent villas", "Local offices and outlets"],
    services: ["Home security camera setup", "Society entrance monitoring", "Lift lobby and parking coverage", "Recorder replacement and storage upgrades", "Door-facing camera systems", "Annual maintenance plans"],
    whyChoose: ["Proximity helps with quick revisits and service calls", "Experience with society and apartment layouts", "Scalable solutions for expanding coverage", "Clear handover for non-technical users"],
    faqs: [
      { question: "Do you handle society-level camera work in Vasant Kunj?", answer: "Yes. We cover gates, lobbies, parking, shared corridors, and block entrances." },
      { question: "Can you add cameras to my existing home setup?", answer: "Yes. We can inspect compatibility and expand the system where possible." },
      { question: "Do you set up viewing on phone?", answer: "Yes. Mobile app configuration and user guidance are part of the installation handover." },
    ],
    nearby: ["Chhatarpur", "Ghitorni", "Sultanpur"],
  },
  {
    slug: "hauzkhas",
    name: "Hauz Khas",
    headline: "Security Camera Installation in Hauz Khas",
    subheadline: "CCTV systems for homes, cafes, boutiques, offices, clinics, and mixed-use properties in Hauz Khas.",
    heroImage: "/images/feature-camera.png",
    intro: [
      "Hauz Khas blends residential blocks with creative commercial spaces, food businesses, and offices, so camera planning often needs to cover both customer-facing and private areas carefully.",
      "We install practical surveillance setups that monitor entrances, service lanes, counters, seating zones, staircases, and internal access points while keeping the visual footprint clean.",
    ],
    stats: [
      { label: "Popular Use", value: "Retail + Residential" },
      { label: "Setup Style", value: "Compact + Clean" },
      { label: "Support", value: "Install + Repair" },
    ],
    highlights: ["CCTV for boutiques and cafes", "Residential entrance monitoring", "Neat routing in compact spaces", "Reliable recorder and backup setup"],
    idealFor: ["Cafes and boutiques", "Studios and offices", "Independent floors", "Clinical and service units"],
    services: ["Counter and customer-area coverage", "Back-office monitoring", "Outdoor and indoor camera pairing", "Storage retention planning", "System repairs", "App reconfiguration"],
    whyChoose: ["Good fit for compact commercial layouts", "Focus on practical blind-spot reduction", "Neat installation for design-sensitive spaces", "Flexible options for owners and tenants"],
    faqs: [
      { question: "Can you secure both shop and residence in the same property?", answer: "Yes. We often design split coverage plans for mixed-use properties." },
      { question: "Do you work in small cafes and boutiques?", answer: "Yes. We install compact systems that cover entry, counter, storage, and customer areas." },
      { question: "Can you fix app access issues?", answer: "Yes. We troubleshoot phone connectivity, recorder networking, and user access problems." },
    ],
    nearby: ["Green Park", "Malviya Nagar", "Saket"],
  },
  {
    slug: "ghitorni",
    name: "Ghitorni",
    headline: "CCTV Installation and Maintenance in Ghitorni",
    subheadline: "Camera security solutions for homes, warehouses, offices, farm-style properties, and roadside commercial spaces in Ghitorni.",
    heroImage: "/images/portfolio-1.png",
    intro: [
      "Ghitorni serves a wide mix of residences, commercial units, and larger roadside properties where camera coverage often needs to handle wider compounds, vehicle movement, and external entry points.",
      "We design systems for gates, parking, loading areas, open fronts, internal rooms, and staff movement so owners get dependable visibility and playback when they need it.",
    ],
    stats: [
      { label: "Use Case", value: "Residential + Commercial" },
      { label: "Coverage", value: "Wide-Property Ready" },
      { label: "Planning", value: "Scalable Systems" },
    ],
    highlights: ["Coverage for larger compounds", "Vehicle entry monitoring", "Outdoor camera reliability", "System repair and upgrade support"],
    idealFor: ["Road-facing offices", "Warehouses and units", "Homes and villas", "Farm-style or open properties"],
    services: ["Gate and vehicle path surveillance", "Wide-angle camera planning", "Cabling for bigger layouts", "Recorder and storage setup", "System health checks", "Expansion-ready installations"],
    whyChoose: ["Experience with open-layout properties", "Practical outdoor camera recommendations", "Flexible recorder sizing for future additions", "Dependable support for commercial use cases"],
    faqs: [
      { question: "Can you handle wider properties in Ghitorni?", answer: "Yes. We assess distance, entry points, and open exposure before planning the system." },
      { question: "Do you install for commercial spaces as well?", answer: "Yes. We cover offices, storage units, and mixed-use sites along with homes." },
      { question: "Can the system be expanded later?", answer: "Yes. We can plan recorder capacity and camera placement with future growth in mind." },
    ],
    nearby: ["Vasant Kunj", "Chhatarpur", "Sultanpur"],
  },
  {
    slug: "malviyanagar",
    name: "Malviya Nagar",
    headline: "CCTV Camera Services in Malviya Nagar",
    subheadline: "Installation, repair, and AMC support for homes, showrooms, shops, offices, schools, and clinics in Malviya Nagar.",
    heroImage: "/images/portfolio-2.png",
    intro: [
      "Malviya Nagar is a busy residential and market-connected area where clients often need practical surveillance for homes, retail spaces, tuition centers, and office units.",
      "We build systems that secure entrances, cash counters, stock rooms, parking, corridors, and upper floors with clear live monitoring and easy playback access.",
    ],
    stats: [
      { label: "Strong Fit", value: "Retail + Home" },
      { label: "Support Type", value: "Install + AMC" },
      { label: "Monitoring", value: "Live + Playback" },
    ],
    highlights: ["Showroom and shop security planning", "Home entrance and parking camera setup", "Recorder health and storage upgrades", "Neat wiring for occupied premises"],
    idealFor: ["Local shops and salons", "Homes and apartments", "Coaching centers", "Offices and clinics"],
    services: ["Retail surveillance setup", "Indoor dome and bullet camera installation", "Counter and stock zone coverage", "DVR replacement", "Maintenance and repairs", "Multi-user mobile access"],
    whyChoose: ["Well-suited for high-footfall local businesses", "Practical planning for family homes and mixed buildings", "Affordable and upgrade-friendly options", "Useful support for recurring maintenance issues"],
    faqs: [
      { question: "Do you install CCTV for shops in Malviya Nagar market areas?", answer: "Yes. We regularly secure entries, counters, shelves, and stock areas for local businesses." },
      { question: "Can you help with blurry or dead cameras?", answer: "Yes. We diagnose camera faults, cable issues, power supply problems, and recorder failures." },
      { question: "Do you provide annual maintenance?", answer: "Yes. AMC and preventive service options are available." },
    ],
    nearby: ["Hauz Khas", "Green Park", "Saket"],
  },
  {
    slug: "rajpur",
    name: "Rajpur",
    headline: "CCTV Security Solutions in Rajpur",
    subheadline: "Custom surveillance systems for independent homes, residential lanes, local offices, and small commercial properties in Rajpur.",
    heroImage: "/images/portfolio-3.png",
    intro: [
      "Rajpur is better served by practical, area-specific camera layouts that focus on lane-facing entrances, open terraces, parking spots, and internal staircases rather than generic packages.",
      "We install surveillance systems that help homeowners and property managers maintain visual control over who enters, where vehicles are parked, and what happens around the building perimeter.",
    ],
    stats: [
      { label: "Typical Setup", value: "Home + Building" },
      { label: "Coverage Focus", value: "Entry + Parking" },
      { label: "Service", value: "Install + Upgrade" },
    ],
    highlights: ["Ideal for independent residential properties", "Lane-facing and boundary camera planning", "Parking and stair monitoring", "Simple app-based monitoring setup"],
    idealFor: ["Independent houses", "Small residential buildings", "Family-owned offices", "Local commercial units"],
    services: ["Home camera installation", "Building perimeter planning", "Recorder placement and setup", "Storage expansion", "Cable and power troubleshooting", "Service support visits"],
    whyChoose: ["Attention to practical family-use security", "Clear planning for entry-focused monitoring", "Suitable options for smaller properties", "Straightforward system explanation and support"],
    faqs: [
      { question: "Do you handle smaller residential jobs in Rajpur?", answer: "Yes. We frequently install compact systems for independent homes and family buildings." },
      { question: "Can parking areas be monitored clearly at night?", answer: "Yes. We recommend night-vision capable cameras and proper angle placement for vehicle visibility." },
      { question: "Will I be able to check footage on phone?", answer: "Yes. Live view and playback can be configured on supported phones." },
    ],
    nearby: ["Sultanpur", "Chhatarpur", "Ghitorni"],
  },
  {
    slug: "sultanpur",
    name: "Sultanpur",
    headline: "Reliable CCTV Installation in Sultanpur",
    subheadline: "Camera security systems for homes, open plots, offices, farm-style properties, and local businesses in Sultanpur.",
    heroImage: "/images/portfolio-4.png",
    intro: [
      "Sultanpur includes residential pockets and larger properties where owners often need visible entry monitoring, outdoor reliability, and recorders sized for longer usage periods.",
      "We help clients secure gates, parking, open sides, staircases, and indoor access zones with systems designed for both daily monitoring and later playback review.",
    ],
    stats: [
      { label: "Use Case", value: "Home + Open Plot" },
      { label: "Camera Type", value: "Outdoor Ready" },
      { label: "Support", value: "Upgrade Friendly" },
    ],
    highlights: ["Open-property camera planning", "Reliable day and night monitoring", "Suitable for larger residential layouts", "Future camera expansion options"],
    idealFor: ["Independent homes", "Open plots and compounds", "Farm-style properties", "Local offices and outlets"],
    services: ["Outdoor surveillance setup", "Boundary and gate camera layout", "Recorder sizing for more channels", "System upgrades", "Maintenance support", "Phone access setup"],
    whyChoose: ["Good fit for semi-open and larger layouts", "Scalable systems for expanding properties", "Dependable outdoor camera suggestions", "Practical service after installation"],
    faqs: [
      { question: "Can you secure open compounds in Sultanpur?", answer: "Yes. We focus on gate lines, side boundaries, and movement zones to reduce blind spots." },
      { question: "Do you handle both homes and offices?", answer: "Yes. We install systems for residential and small commercial properties in the area." },
      { question: "Can more cameras be added later?", answer: "Yes. We can plan recorder capacity and cable routes for future expansion." },
    ],
    nearby: ["Rajpur", "Ghitorni", "Vasant Kunj"],
  },
  {
    slug: "khanpur",
    name: "Khanpur",
    headline: "CCTV Camera Installation and Repair in Khanpur",
    subheadline: "Affordable and reliable surveillance setups for homes, lane-facing properties, shops, institutes, and local business spaces in Khanpur.",
    heroImage: "/images/feature-camera.png",
    intro: [
      "Khanpur is a busy area with mixed housing and local commerce, which makes practical surveillance especially useful for entrances, storefronts, corridors, staircases, and parking points.",
      "We install camera systems sized to the property and budget, helping owners monitor movement, secure assets, and maintain clear video records without overcomplicating the setup.",
    ],
    stats: [
      { label: "Best For", value: "Homes + Shops" },
      { label: "Budget Fit", value: "Practical Options" },
      { label: "Support", value: "Repair Available" },
    ],
    highlights: ["Useful for lane-facing homes and shops", "Budget-friendly setup planning", "Recorder and cable troubleshooting", "Night monitoring for entries and parking"],
    idealFor: ["Shops and service outlets", "Independent homes", "Rental buildings", "Institutes and offices"],
    services: ["Shop and home camera installation", "Basic to multi-camera setups", "Power and cable issue fixes", "Recorder replacement", "App configuration", "Maintenance visits"],
    whyChoose: ["Balanced solutions for price-sensitive projects", "Fast support for common camera faults", "Simple surveillance plans for small and medium properties", "Clear setup and handover for daily use"],
    faqs: [
      { question: "Do you install smaller CCTV setups in Khanpur?", answer: "Yes. We handle compact systems for homes and shops as well as bigger requirements." },
      { question: "Can old recorders be replaced without redoing everything?", answer: "Often yes. We inspect compatibility and replace only the necessary parts when possible." },
      { question: "Do you cover both live viewing and recording?", answer: "Yes. We set up both real-time viewing and playback access based on the system type." },
    ],
    nearby: ["Neb Sarai", "Saket", "Malviya Nagar"],
  },
];

export const locationRoutes = Object.fromEntries(
  locations.map((location) => [location.name, `/${location.slug}`]),
) as Record<string, string>;

export const locationsByName = Object.fromEntries(
  locations.map((location) => [location.name, location]),
) as Record<string, LocationDetails>;
