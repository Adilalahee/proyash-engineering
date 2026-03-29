import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";
import AnimatedSection from "@/components/shared/AnimatedSection";

const offices = [
  { cityEn: "Riyadh (HQ)", cityAr: "الرياض (المقر الرئيسي)", phone: "+966 11 XXX XXXX", lat: 24.7136, lng: 46.6753 },
  { cityEn: "Jeddah", cityAr: "جدة", phone: "+966 12 XXX XXXX", lat: 21.4858, lng: 39.1925 },
  { cityEn: "Khobar", cityAr: "الخبر", phone: "+966 13 XXX XXXX", lat: 26.2172, lng: 50.1971 },
];

const ContactPage = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Proyash — Request a Quote</title>
        <meta name="description" content="Get in touch with Proyash for engineering and contracting services across Saudi Arabia." />
      </Helmet>

      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
              {t(translations.contact.title, lang)}
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              {t(translations.contact.subtitle, lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                    {lang === "en" ? "Thank you! Your inquiry has been submitted successfully." : "شكراً لك! تم إرسال استفسارك بنجاح."}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(translations.contact.name, lang)}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(translations.contact.email, lang)}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(translations.contact.service, lang)}</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">{lang === "en" ? "Select a service..." : "اختر خدمة..."}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.slug}>
                          {lang === "en" ? s.titleEn : s.titleAr}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic fields based on service */}
                  {formData.service === "hvac-electromechanical" && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {lang === "en" ? "Cooling Capacity (TR)" : "سعة التبريد (طن تبريد)"}
                      </label>
                      <input
                        type="text"
                        placeholder={lang === "en" ? "e.g., 500 TR" : "مثال: 500 طن تبريد"}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                  )}
                  {formData.service === "elevators-mobility" && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {lang === "en" ? "Maintenance Tier" : "مستوى الصيانة"}
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow">
                        <option value="">{lang === "en" ? "Select tier..." : "اختر المستوى..."}</option>
                        <option value="B">{lang === "en" ? "Type B — Standard" : "الفئة ب — قياسية"}</option>
                        <option value="C">{lang === "en" ? "Type C — Comprehensive" : "الفئة ج — شاملة"}</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(translations.contact.message, lang)}</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-teal-gradient text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider shadow-teal hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    {t(translations.contact.submit, lang)}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Offices */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <h3 className="font-heading font-bold text-xl uppercase mb-6">
                {t(translations.contact.offices, lang)}
              </h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.cityEn} className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <h4 className="font-heading font-bold text-foreground">
                        {lang === "en" ? office.cityEn : office.cityAr}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {office.phone}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{lang === "en" ? "General Inquiries" : "استفسارات عامة"}</p>
                    <p className="font-medium text-foreground">info@proyash.com.sa</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
