import { Helmet } from "react-helmet-async";
import { Award, Target, Eye, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import AnimatedSection from "@/components/shared/AnimatedSection";

const timeline = [
  { year: "1991", titleEn: "SAEIR Founded", titleAr: "تأسيس سائر", descEn: "Susan Wardah Trading & Contracting established in Riyadh, beginning operations in facility services.", descAr: "تأسيس شركة سوزان وردة للتجارة والمقاولات في الرياض." },
  { year: "1998", titleEn: "HVAC Division Launch", titleAr: "إطلاق قسم التكييف", descEn: "Expanded into HVAC design, supply, and installation for industrial facilities.", descAr: "التوسع في تصميم وتوريد وتركيب أنظمة التكييف." },
  { year: "2005", titleEn: "Elevator Solutions", titleAr: "حلول المصاعد", descEn: "Added vertical transportation division — elevators, escalators, and modernization services.", descAr: "إضافة قسم النقل العمودي — المصاعد والسلالم المتحركة." },
  { year: "2010", titleEn: "ISO Certification", titleAr: "شهادة الأيزو", descEn: "Achieved ISO 9001, 14001, and OSHAS 18001 certifications across all divisions.", descAr: "الحصول على شهادات الأيزو 9001 و 14001 و OSHAS 18001." },
  { year: "2016", titleEn: "Environmental Services", titleAr: "الخدمات البيئية", descEn: "Launched city-scale cleaning and waste management operations supporting Vision 2030.", descAr: "إطلاق عمليات التنظيف وإدارة النفايات على مستوى المدن." },
  { year: "2020", titleEn: "Rebranded to ", titleAr: "إعادة العلامة التجارية إلى برويش", descEn: "Unified all divisions under the Proyas brand, becoming a Turn-Key engineering partner.", descAr: "توحيد جميع الأقسام تحت علامة برويش التجارية." },
];

const certs = [
  { name: "ISO 9001:2015", cat: "Quality Management" },
  { name: "ISO 14001:2015", cat: "Environmental Management" },
  { name: "OSHAS 18001", cat: "Occupational Safety" },
  { name: "Saudization", cat: "Labor Compliance" },
  { name: "GOSI", cat: "Social Insurance" },
  { name: "Wage Protection", cat: "Labor Compliance" },
];

const AboutPage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>About Proyas — Engineering Legacy Since 1991</title>
        <meta name="description" content="From SAEIR to Proyas — three decades of engineering leadership in Saudi Arabia." />
      </Helmet>

      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <AnimatedSection className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
              {t(translations.about.title, lang)}
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              {t(translations.about.subtitle, lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-xl p-8 shadow-card border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-3">{t(translations.about.mission, lang)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(translations.about.missionText, lang)}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl p-8 shadow-card border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-3">{t(translations.about.vision, lang)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(translations.about.visionText, lang)}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-20">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              {lang === "en" ? "Our Journey" : "مسيرتنا"}
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-teal-gradient flex items-center justify-center shrink-0 ring-4 ring-background">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 shadow-card border border-border">
                  <span className="text-xs font-heading font-bold text-secondary uppercase tracking-wider">{item.year}</span>
                  <h4 className="font-heading font-bold text-lg mt-1 mb-2 text-foreground">
                    {lang === "en" ? item.titleEn : item.titleAr}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === "en" ? item.descEn : item.descAr}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              {lang === "en" ? "Accreditations & Compliance" : "الاعتمادات والامتثال"}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certs.map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 shadow-card border border-border text-center">
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-sm uppercase">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.cat}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
