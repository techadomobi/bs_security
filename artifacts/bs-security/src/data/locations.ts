export type LocationDetails = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
};

export const locations: LocationDetails[] = [
  {
    slug: "green-park",
    name: "Green Park",
    headline: "CCTV installation services in Green Park",
    description: "We provide camera installation, DVR/NVR setup, maintenance, and repair services for homes, shops, clinics, and offices across Green Park.",
    highlights: ["Same-area site visits", "Clean concealed wiring", "Mobile viewing setup", "Support for homes and commercial properties"],
  },
  {
    slug: "hauz-khas",
    name: "Hauz Khas",
    headline: "Professional security solutions for Hauz Khas properties",
    description: "From residential lanes to cafes, boutiques, and offices, our team delivers tailored CCTV systems across Hauz Khas with fast installation and support.",
    highlights: ["Indoor and outdoor camera coverage", "Remote access on phone", "NVR/DVR installation", "Ongoing maintenance available"],
  },
  {
    slug: "safdarjung",
    name: "Safdarjung",
    headline: "Reliable CCTV setup in Safdarjung",
    description: "We handle complete camera planning, installation, upgrades, and service visits for apartments, independent homes, and businesses in Safdarjung.",
    highlights: ["Free basic site assessment", "HD and IP camera options", "Quick fault diagnosis", "Support for residential and business needs"],
  },
  {
    slug: "malviya-nagar",
    name: "Malviya Nagar",
    headline: "Camera installation and repair in Malviya Nagar",
    description: "Our team installs dependable surveillance systems in shops, homes, schools, and offices throughout Malviya Nagar with practical, budget-conscious planning.",
    highlights: ["Shop and showroom security", "Home entrance monitoring", "AMC and maintenance support", "Fast installation turnaround"],
  },
  {
    slug: "aiims-area",
    name: "AIIMS Area",
    headline: "Security camera services near AIIMS Area",
    description: "We serve residential blocks, offices, clinics, and nearby commercial spaces around the AIIMS Area with professional CCTV installation and support.",
    highlights: ["Compact and large setups", "Recording and backup setup", "Technician support visits", "Suitable for clinics and offices"],
  },
  {
    slug: "south-delhi",
    name: "South Delhi",
    headline: "Complete surveillance solutions across South Delhi",
    description: "B.S. Security supports a wide service network across South Delhi for apartments, villas, retail spaces, offices, warehouses, and gated communities.",
    highlights: ["Wide coverage area", "Custom security planning", "Commercial and residential expertise", "Long-term maintenance support"],
  },
  {
    slug: "vasant-kunj",
    name: "Vasant Kunj",
    headline: "Trusted CCTV installation in Vasant Kunj",
    description: "Based near Vasant Kunj, our team provides prompt camera installation, app setup, and ongoing maintenance for flats, societies, and local businesses.",
    highlights: ["Fast local response", "Society and apartment setups", "Phone app training included", "Service center proximity advantage"],
  },
  {
    slug: "mehrauli",
    name: "Mehrauli",
    headline: "Home and business CCTV services in Mehrauli",
    description: "We install and maintain reliable security systems in Mehrauli for homes, shops, offices, and mixed-use properties with clear planning and neat execution.",
    highlights: ["Property-specific camera placement", "Day and night coverage", "Repair and upgrade support", "Affordable installation options"],
  },
  {
    slug: "chattarpur",
    name: "Chattarpur",
    headline: "CCTV setup and support in Chattarpur",
    description: "Our technicians cover Chattarpur for farmhouse, residential, and commercial camera installations with stable recording and remote access configuration.",
    highlights: ["Farmhouse and villa coverage", "Outdoor weather-ready options", "Remote monitoring setup", "Maintenance and troubleshooting visits"],
  },
  {
    slug: "saket",
    name: "Saket",
    headline: "Modern CCTV installation services in Saket",
    description: "We support apartments, retail stores, restaurants, offices, and residential complexes in Saket with complete surveillance installation and after-service.",
    highlights: ["Retail and office solutions", "Multi-camera planning", "DVR/NVR setup", "Post-installation support"],
  },
  {
    slug: "greater-kailash",
    name: "Greater Kailash",
    headline: "Premium surveillance installation in Greater Kailash",
    description: "We deliver clean, professional CCTV solutions in Greater Kailash for upscale homes, boutiques, offices, and gated properties needing dependable monitoring.",
    highlights: ["Discreet wiring and finish", "High-definition camera options", "Remote mobile access", "Support for premium properties"],
  },
  {
    slug: "defence-colony",
    name: "Defence Colony",
    headline: "Dependable camera security in Defence Colony",
    description: "Our team serves Defence Colony with CCTV installation, system upgrades, and maintenance for independent houses, offices, and commercial locations.",
    highlights: ["Independent home coverage", "Office surveillance solutions", "System health checks", "Prompt technical support"],
  },
];

export const locationRoutes = Object.fromEntries(
  locations.map((location) => [location.name, `/${location.slug}`]),
) as Record<string, string>;
