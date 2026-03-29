import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";

const Footer = () => {
  const { lang } = useLanguage();

  const offices = [
    { city: lang === "en" ? "Riyadh (HQ)" : "الرياض (المقر الرئيسي)", phone: "+966 11 XXX XXXX" },
    { city: lang === "en" ? "Jeddah" : "جدة", phone: "+966 12 XXX XXXX" },
    { city: lang === "en" ? "Khobar" : "الخبر", phone: "+966 13 XXX XXXX" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal-gradient flex items-center justify-center">
                <span className="font-heading font-black text-lg text-primary-foreground">P</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-wide">PROYASH</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {t(translations.footer.tagline, lang)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t(translations.footer.quickLinks, lang)}
            </h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {t(translations.nav.home, lang)}
              </Link>
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {t(translations.nav.about, lang)}
              </Link>
              <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {t(translations.nav.contact, lang)}
              </Link>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t(translations.footer.divisions, lang)}
            </h4>
            <div className="space-y-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {lang === "en" ? service.titleEn : service.titleAr}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t(translations.footer.contactInfo, lang)}
            </h4>
            <div className="space-y-3">
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 opacity-50 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{office.city}</p>
                    <p className="text-xs opacity-60">{office.phone}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 opacity-50" />
                <span className="text-sm opacity-70">info@proyash.com.sa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Proyash Contracting Company. {t(translations.footer.rights, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
