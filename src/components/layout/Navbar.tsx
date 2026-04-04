import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: t(translations.nav.home, lang) },
    { to: "/about", label: t(translations.nav.about, lang) },
    { to: "/contact", label: t(translations.nav.contact, lang) },
  ];

  const isActive = (path: string) => location.pathname === path;

  const gradientBtn =
    "bg-[linear-gradient(135deg,_rgb(0,189,151)_0%,_rgb(76,174,79)_100%)] text-white shadow-md";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Proyas Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-wide text-gray-900">
                PROYAS
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Engineering & Contracting Company LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? gradientBtn
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown Hover */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith("/services")
                    ? gradientBtn
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {t(translations.nav.services, lang)}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 rounded-xl border border-gray-200 bg-white shadow-xl z-[60] p-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                      >
                        {lang === "en" ? service.titleEn : service.titleAr}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive("/contact")
                  ? gradientBtn
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {t(translations.nav.contact, lang)}
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "العربية" : "English"}
            </button>

            <Link
              to="/contact"
              className={`hidden lg:inline-flex px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-opacity hover:opacity-90 ${gradientBtn}`}
            >
              {t(translations.hero.cta1, lang)}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? gradientBtn
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-heading">
                {t(translations.nav.services, lang)}
              </div>

              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2.5 rounded-lg text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                >
                  {lang === "en" ? service.titleEn : service.titleAr}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center px-5 py-3 rounded-lg font-heading font-semibold text-sm ${gradientBtn}`}
                >
                  {t(translations.hero.cta1, lang)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;