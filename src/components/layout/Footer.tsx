import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { lang } = useLanguage();

  const offices = [
    { city: lang === "en" ? "Dhaka (HQ)" : "داكا (المقر الرئيسي)", address: lang === "en" ? "Prime Tower (3rd Floor), 180-181 Saheed Syed Nazrul Islam Sarani, Bijoy Nagar Road, Dhaka - 1000, Bangladesh" : "برج برايم (الطابق الثالث)، 180-181 شارع شهيد سيد نذير الإسلام ساراني، طريق بيجوي ناغار، داكا - 1000، بنغلاديش", phone: "+880 1915 318 910" },
    { city: lang === "en" ? "Riyadh" : "الرياض", address: lang === "en" ? "Musabin Nusayr St. Circon Bldg Olaya Riyadh City" : "شارع مصعب بن نصير، مبنى سيركون، العليا، مدينة الرياض", phone: "+966 50 417 0618" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex gap-4 items-start justify-center">
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal-gradient flex items-center justify-center">
                <span className="font-heading font-black text-lg text-primary-foreground">P</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-wide">PROYAS</span>
            </div> */}
            {/* <p className="text-sm opacity-70 leading-relaxed">
              {t(translations.footer.tagline, lang)}
            </p> */}
            <div className="w-20 h-16 rounded-lg flex items-center justify-center">
              <span>
                <img src={logo} alt="Proyas Logo" />
              </span>
            </div>
            <div className="mt-2">
              <p className="font-heading font-bold text-lg tracking-wide">PROYAS</p>
              <span className="sm:block text-[10px] uppercase tracking-[0.2em]">Engineering & Contracting Company LTD</span>
            </div>
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
                    <p className="text-xs opacity-60">{office.address}</p>
                    <p className="text-xs opacity-60">{office.phone}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 opacity-50" />
                <span className="text-sm opacity-70">info@proyascc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Proyas Engineering & Contracting Company LTD. {t(translations.footer.rights, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
