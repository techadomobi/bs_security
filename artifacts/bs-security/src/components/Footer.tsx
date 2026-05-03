import { Link } from "wouter";
import { ShieldCheck, ChevronRight } from "lucide-react";
import logo from "/images/logo.png";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const servicesList = [
  "Home CCTV Installation",
  "Commercial Security Systems",
  "DVR/NVR Setup & Repair",
  "Annual Maintenance (AMC)",
  "Wireless Camera Setup",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="B.S. Security logo" className="h-12 md:h-16 w-auto" />
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
                B.S. Security
              </span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Delhi's most trusted neighborhood CCTV installation and security solutions provider. Your safety is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+919193232403" className="hover:text-primary transition-colors">
                  +91 9193232403
                </a>
              </li>
              <li>
                <a href="mailto:Bsssolution403@gmail.com" className="hover:text-primary transition-colors">
                  Bsssolution403@gmail.com
                </a>
              </li>
              <li>9002, Pocket B-9, Masoodpur</li>
              <li>Vasant Kunj, New Delhi — 110070</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>&copy; {new Date().getFullYear()} B.S. Security Solutions. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
