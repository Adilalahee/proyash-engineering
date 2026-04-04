export type Lang = "en" | "ar";

export const translations = {
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About Us", ar: "من نحن" },
    services: { en: "Services", ar: "خدماتنا" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "اتصل بنا" },
  },
  hero: {
    title: { en: "Engineering Excellence, Delivered.", ar: "التميز الهندسي، مُنجز." },
    subtitle: {
      en: "Saudi Arabia's trusted Turn-Key partner for Facility Management, HVAC, Elevators, and Environmental Solutions — aligned with Vision 2030.",
      ar: "شريك المملكة العربية السعودية الموثوق لحلول إدارة المرافق والتكييف والمصاعد والحلول البيئية — متوافق مع رؤية 2030."
    },
    cta1: { en: "Request a Quote", ar: "طلب عرض سعر" },
    cta2: { en: "Our Services", ar: "خدماتنا" },
  },
  vision: {
    badge: { en: "Vision 2030 Aligned", ar: "متوافق مع رؤية 2030" },
    title: { en: "Building Saudi Arabia's Future", ar: "نبني مستقبل المملكة العربية السعودية" },
    text: {
      en: "Proyas is committed to supporting Saudi Arabia's Vision 2030 by delivering sustainable infrastructure, promoting Saudization, and driving environmental stewardship across all our operations.",
      ar: "تلتزم برويش بدعم رؤية المملكة العربية السعودية 2030 من خلال تقديم بنية تحتية مستدامة وتعزيز السعودة وقيادة الإشراف البيئي عبر جميع عملياتنا."
    },
  },
  stats: {
    established: { en: "Established", ar: "تأسست" },
    employees: { en: "Employees", ar: "الموظفون" },
    projects: { en: "Projects Delivered", ar: "المشاريع المنجزة" },
    clients: { en: "Trusted Clients", ar: "العملاء الموثوقون" },
  },
  services: {
    title: { en: "Our Divisions", ar: "أقسامنا" },
    subtitle: { en: "Comprehensive Turn-Key solutions across five core divisions", ar: "حلول شاملة عبر خمسة أقسام رئيسية" },
    learnMore: { en: "Learn More", ar: "اعرف المزيد" },
  },
  about: {
    title: { en: "Our Story", ar: "قصتنا" },
    subtitle: { en: "From SAEIR to Proyas — Three decades of engineering leadership in the Kingdom", ar: "من سائر إلى برويش — ثلاثة عقود من الريادة الهندسية في المملكة" },
    mission: { en: "Our Mission", ar: "مهمتنا" },
    missionText: {
      en: "To deliver world-class engineering and contracting services that exceed client expectations through innovation, safety, and sustainable practices.",
      ar: "تقديم خدمات هندسية ومقاولات عالمية المستوى تتجاوز توقعات العملاء من خلال الابتكار والسلامة والممارسات المستدامة."
    },
    vision: { en: "Our Vision", ar: "رؤيتنا" },
    visionText: {
      en: "To be the Kingdom's most trusted partner in integrated facility solutions, setting benchmarks for quality and environmental responsibility.",
      ar: "أن نكون الشريك الأكثر ثقة في المملكة في حلول المرافق المتكاملة، ووضع معايير للجودة والمسؤولية البيئية."
    },
  },
  contact: {
    title: { en: "Get in Touch", ar: "تواصل معنا" },
    subtitle: { en: "Ready to discuss your project? Our team is here to help.", ar: "مستعد لمناقشة مشروعك؟ فريقنا هنا للمساعدة." },
    name: { en: "Full Name", ar: "الاسم الكامل" },
    email: { en: "Email Address", ar: "البريد الإلكتروني" },
    service: { en: "Service Type", ar: "نوع الخدمة" },
    message: { en: "Message", ar: "الرسالة" },
    submit: { en: "Send Inquiry", ar: "إرسال الاستفسار" },
    offices: { en: "Our Offices", ar: "مكاتبنا" },
  },
  footer: {
    tagline: { en: "Engineering Excellence Since 1991", ar: "التميز الهندسي منذ 1991" },
    quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
    divisions: { en: "Divisions", ar: "الأقسام" },
    contactInfo: { en: "Contact Info", ar: "معلومات الاتصال" },
    rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  },
} as const;

export const t = (key: Record<Lang, string>, lang: Lang): string => key[lang];
