import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Calendar, Building2, Thermometer, ArrowUpDown, Leaf, Radio } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import heroAltBg from "@/assets/hero.png";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { services } from "@/data/services";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import slider1 from "@/assets/sliders/slider1.jpg";
import slider2 from "@/assets/sliders/slider2.jpg";
import slider3 from "@/assets/sliders/slider3.jpg";
import slider4 from "@/assets/sliders/slider4.jpg";
import slider5 from "@/assets/sliders/slider5.jpeg";
import slider6 from "@/assets/sliders/slider6.jpg";
import slider7 from "@/assets/sliders/slider7.jpg";
import slider8 from "@/assets/sliders/slider8.jpg";
import slider9 from "@/assets/sliders/slider9.jpg";
import slider10 from "@/assets/sliders/slider10.jpg";





const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7" />,
  Thermometer: <Thermometer className="w-7 h-7" />,
  ArrowUpDown: <ArrowUpDown className="w-7 h-7" />,
  Leaf: <Leaf className="w-7 h-7" />,
  Radio: <Radio className="w-7 h-7" />,
};

const heroSlides = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10];

{/* Stats 
const stats = [
  { value: "1991", labelKey: "established" as const },
  { value: "650+", labelKey: "employees" as const },
  { value: "500+", labelKey: "projects" as const },
  { value: "100+", labelKey: "clients" as const },
];
*/}

const HomePage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Proyas — Engineering Excellence, Delivered</title>
        <meta name="description" content="Saudi Arabia's trusted Turn-Key partner for Facility Management, HVAC, Elevators, and Environmental Solutions — aligned with Vision 2030." />
      </Helmet>

      {/* Hero */}
      <section className="relative text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={1200}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            effect="fade"
            allowTouchMove={false}
            className="h-full w-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={`${slide}-${index}`}>
                <img
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover mix-blend-luminosity"
                  width={1920}
                  height={1080}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 z-10 bg-hero-gradient opacity-55 pointer-events-none" />
        <div className="container relative z-20 mx-auto px-4 py-24 lg:py-36">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-heading text-xs font-semibold uppercase tracking-widest mb-6">
                <Shield className="w-3.5 h-3.5" />
                {t(translations.vision.badge, lang)}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
                {t(translations.hero.title, lang)}
              </h1>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-10 max-w-2xl">
                {t(translations.hero.subtitle, lang)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-teal-gradient font-heading font-bold text-sm uppercase tracking-wider shadow-teal hover:opacity-90 transition-opacity"
                >
                  {t(translations.hero.cta1, lang)}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services/facility-management"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/30 font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
                >
                  {t(translations.hero.cta2, lang)}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.labelKey} delay={i * 0.1} className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-black text-secondary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">
                  {t(translations.stats[stat.labelKey], lang)}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vision 2030 */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-heading text-xs font-semibold uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5" />
              {t(translations.vision.badge, lang)}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
              {t(translations.vision.title, lang)}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(translations.vision.text, lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-20">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-3">
              {t(translations.services.title, lang)}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {t(translations.services.subtitle, lang)}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-card rounded-xl p-7 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-teal-gradient group-hover:text-primary-foreground transition-all duration-300">
                    {iconMap[service.iconName]}
                  </div>
                  <h3 className="font-heading font-bold text-lg uppercase mb-2 text-foreground">
                    {lang === "en" ? service.titleEn : service.titleAr}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {lang === "en" ? service.descriptionEn : service.descriptionAr}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    {t(translations.services.learnMore, lang)}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["ISO 9001", "ISO 14001", "OSHAS 18001", "EN81", "ASME", "SAUDIZATION", "GOSI"].map((cert) => (
              <span key={cert} className="font-heading font-bold text-sm uppercase tracking-widest text-foreground">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
