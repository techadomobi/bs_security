import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/images/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const isInsightsRoute = (path: string) => path.startsWith("/insights");

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="B.S. Security logo" className="h-12 md:h-16 w-auto" />
            <span className="sr-only">B.S. Security</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/insights">
              <Button
                variant="outline"
                className={`rounded-full border-primary/20 px-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 ${
                  isInsightsRoute(location)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-gradient-to-r from-primary/10 to-sky-100 text-primary hover:bg-gradient-to-r hover:from-primary/15 hover:to-sky-200"
                }`}
                data-testid="button-navbar-insights"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Insights
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow" data-testid="button-get-free-survey">
                Get Free Survey
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-left text-lg font-medium py-4 border-b border-border/50 block ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/insights">
                <Button size="lg" variant="outline" className="w-full mt-4 rounded-full border-primary/20 bg-gradient-to-r from-primary/10 to-sky-100 text-primary" data-testid="mobile-button-insights">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Insights
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="w-full mt-6 rounded-full" data-testid="mobile-button-cta">
                  Get Free Survey
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
