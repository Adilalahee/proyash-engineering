import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Target, Eye, CheckCircle, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import AnimatedSection from "@/components/shared/AnimatedSection";

const timeline = [
  {
    year: "1991",
    titleEn: "Foundation & Early Operations",
    titleAr: "التأسيس وبداية العمليات",
    descEn:
      "The company was established in Riyadh, laying the foundation for a long-term presence in engineering, contracting, and facility-related services with a commitment to quality and operational reliability.",
    descAr:
      "تأسست الشركة في الرياض، واضعةً الأساس لحضور طويل الأمد في مجالات الهندسة والمقاولات والخدمات المرتبطة بالمرافق، مع التزام قوي بالجودة والموثوقية التشغيلية.",
  },
  {
    year: "1998",
    titleEn: "Expansion into HVAC Solutions",
    titleAr: "التوسع في حلول التكييف",
    descEn:
      "Expanded service capabilities into HVAC design, supply, installation, and maintenance, enabling the company to support industrial, commercial, and institutional projects with advanced climate control solutions.",
    descAr:
      "تم توسيع نطاق الخدمات ليشمل تصميم وتوريد وتركيب وصيانة أنظمة التكييف، مما مكّن الشركة من دعم المشاريع الصناعية والتجارية والمؤسسية بحلول متقدمة للتحكم بالمناخ.",
  },
  {
    year: "2005",
    titleEn: "Launch of Elevator & Mobility Division",
    titleAr: "إطلاق قسم المصاعد والتنقل",
    descEn:
      "Introduced vertical transportation services, including elevators, escalators, modernization, and maintenance solutions for residential, commercial, and public-sector developments.",
    descAr:
      "تم إطلاق خدمات النقل الرأسي التي تشمل المصاعد والسلالم المتحركة وأعمال التحديث والصيانة للمشروعات السكنية والتجارية ومشروعات القطاع العام.",
  },
  {
    year: "2010",
    titleEn: "Quality, Safety & Environmental Recognition",
    titleAr: "الاعتراف بالجودة والسلامة والبيئة",
    descEn:
      "Strengthened internal systems and operational standards through internationally recognized certifications in quality, environmental management, and occupational health and safety.",
    descAr:
      "تم تعزيز الأنظمة الداخلية ومعايير التشغيل من خلال شهادات معترف بها دوليًا في الجودة والإدارة البيئية والصحة والسلامة المهنية.",
  },
  {
    year: "2016",
    titleEn: "Environmental Services Growth",
    titleAr: "توسّع الخدمات البيئية",
    descEn:
      "Expanded into environmental and municipal support services, including cleaning operations, waste handling, and sustainability-focused service delivery aligned with evolving market needs.",
    descAr:
      "تم التوسع في الخدمات البيئية والبلدية، بما في ذلك عمليات التنظيف وإدارة النفايات وتقديم خدمات تركز على الاستدامة بما يتماشى مع احتياجات السوق المتطورة.",
  },
  {
    year: "2020",
    titleEn: "Unified Brand & Integrated Service Model",
    titleAr: "توحيد العلامة التجارية ونموذج الخدمات المتكاملة",
    descEn:
      "All divisions were unified under the Proyas brand, strengthening the company’s position as a trusted engineering, infrastructure, and integrated services partner for complex projects.",
    descAr:
      "تم توحيد جميع الأقسام تحت علامة بروياس التجارية، مما عزز مكانة الشركة كشريك موثوق في الهندسة والبنية التحتية والخدمات المتكاملة للمشروعات المعقدة.",
  },
  {
    year: "2024",
    titleEn: "Expansion into IT & Telecommunications Services",
    titleAr: "التوسع في خدمات تقنية المعلومات والاتصالات",
    descEn:
      "Expanded capabilities in ICT infrastructure, fiber optic networks, smart parking, and integrated telecommunications solutions to support digital transformation and smart city initiatives.",
    descAr:
      "تم توسيع القدرات في البنية التحتية لتقنية المعلومات والاتصالات، وشبكات الألياف الضوئية، والمواقف الذكية، وحلول الاتصالات المتكاملة لدعم التحول الرقمي ومبادرات المدن الذكية.",
  },
];

const certs = [
  { name: "ISO 9001:2015", cat: "Quality Management" },
  { name: "ISO 14001:2015", cat: "Environmental Management" },
  { name: "ISO 45001", cat: "Occupational Health & Safety" },
  { name: "Saudization Compliance", cat: "Workforce Localization" },
  { name: "GOSI Registration", cat: "Social Insurance Compliance" },
  { name: "Wage Protection System", cat: "Labor Compliance" },
];

const AboutPage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>About Proyas — Engineering & Integrated Service Excellence</title>
        <meta
          name="description"
          content="Discover Proyas, a trusted provider of engineering, facility management, environmental, mobility, and technology solutions across Saudi Arabia and beyond."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <AnimatedSection className="max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft className="w-4 h-4" />
              {lang === "en" ? "Back to Home" : "العودة للرئيسية"}
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
              {t(translations.about.title, lang)}
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              {lang === "en"
                ? "Delivering engineering, infrastructure, and integrated support services with a strong commitment to quality, reliability, and long-term value creation."
                : "نقدّم حلولًا هندسية وبنية تحتية وخدمات دعم متكاملة مع التزام قوي بالجودة والموثوقية وتحقيق قيمة طويلة الأمد."}
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
                <h3 className="font-heading font-bold text-xl uppercase mb-3">
                  {t(translations.about.mission, lang)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lang === "en"
                    ? "To deliver dependable, high-quality, and innovative engineering and support services that improve operational performance, strengthen asset value, and exceed client expectations."
                    : "تقديم خدمات هندسية وتشغيلية موثوقة وعالية الجودة ومبتكرة تسهم في تحسين الأداء التشغيلي وتعزيز قيمة الأصول وتجاوز توقعات العملاء."}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl p-8 shadow-card border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-3">
                  {t(translations.about.vision, lang)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lang === "en"
                    ? "To be recognized as a leading regional partner in engineering and integrated services, known for innovation, service excellence, and sustainable project delivery."
                    : "أن نكون شريكًا إقليميًا رائدًا في مجالات الهندسة والخدمات المتكاملة، معروفين بالابتكار والتميز في الخدمة والتنفيذ المستدام للمشروعات."}
                </p>
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
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {lang === "en"
                ? "A progressive journey of growth, service diversification, and operational excellence across engineering and infrastructure sectors."
                : "رحلة متنامية من التطور وتنوع الخدمات والتميز التشغيلي عبر قطاعات الهندسة والبنية التحتية."}
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.08}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-teal-gradient flex items-center justify-center shrink-0 ring-4 ring-background">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 shadow-card border border-border">
                  {/* <span className="text-xs font-heading font-bold text-secondary uppercase tracking-wider">
                    {item.year}
                  </span> */}
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
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {lang === "en"
                ? "Our operations are guided by recognized standards, compliance frameworks, and best practices that reinforce quality, safety, and accountability."
                : "تُدار عملياتنا وفق معايير معترف بها وأطر امتثال وأفضل الممارسات التي تعزز الجودة والسلامة والمسؤولية."}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certs.map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.06}>
                <div className="bg-card rounded-xl p-5 shadow-card border border-border text-center h-full">
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