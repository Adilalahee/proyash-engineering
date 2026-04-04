import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Shield, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";
import AnimatedSection from "@/components/shared/AnimatedSection";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-secondary hover:underline">Return Home</Link>
      </div>
    );
  }

  const title = lang === "en" ? service.titleEn : service.titleAr;
  const description = lang === "en" ? service.descriptionEn : service.descriptionAr;

  return (
    <>
      <Helmet>
        <title>{`${service.titleEn} — Proyas Engineering`}</title>
        <meta name="description" content={service.descriptionEn} />
      </Helmet>

      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft className="w-4 h-4" />
              {lang === "en" ? "Back to Home" : "العودة للرئيسية"}
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">{title}</h1>
            <p className="text-lg opacity-80 leading-relaxed max-w-2xl">{description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.specs.map((spec, i) => (
              <AnimatedSection key={spec.label} delay={i * 0.1} className="text-center">
                <div className="text-2xl font-heading font-black text-secondary">{spec.value}</div>
                <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider font-medium">{spec.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Standards */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold uppercase mb-6">
                {lang === "en" ? "Key Capabilities" : "القدرات الرئيسية"}
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{lang === "en" ? feature.en : feature.ar}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-heading text-2xl font-bold uppercase mb-6">
                {lang === "en" ? "Standards & Compliance" : "المعايير والامتثال"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.standards.map((std) => (
                  <div key={std} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary/10 text-secondary font-heading font-semibold text-sm">
                    <Shield className="w-4 h-4" />
                    {std}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-teal-gradient text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider shadow-teal hover:opacity-90 transition-opacity"
                >
                  {t(translations.hero.cta1, lang)}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <h3 className="font-heading text-xl font-bold uppercase mb-6 text-center">
            {lang === "en" ? "Explore Other Divisions" : "استكشف الأقسام الأخرى"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="px-5 py-2.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-secondary/40 hover:shadow-card transition-all"
                >
                  {lang === "en" ? s.titleEn : s.titleAr}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
