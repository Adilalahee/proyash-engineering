export interface Service {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  iconName: string;
  specs: { label: string; value: string }[];
  standards: string[];
  features: { en: string; ar: string }[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "facility-management",
    titleEn: "Facility Management",
    titleAr: "إدارة المرافق",
    descriptionEn: "Comprehensive Hard & Soft FM services including building maintenance, cleaning, landscaping, and security management for commercial and government properties.",
    descriptionAr: "خدمات إدارة المرافق الشاملة بما في ذلك صيانة المباني والتنظيف والمناظر الطبيعية وإدارة الأمن للعقارات التجارية والحكومية.",
    iconName: "Building2",
    specs: [
      { label: "Coverage", value: "500,000+ sqm managed" },
      { label: "Response Time", value: "<2 hours emergency" },
      { label: "Workforce", value: "350+ trained staff" },
    ],
    standards: ["ISO 9001", "ISO 14001", "OSHAS 18001"],
    features: [
      { en: "Hard FM — Electrical, Plumbing, HVAC Maintenance", ar: "الصيانة الصلبة — كهرباء، سباكة، تكييف" },
      { en: "Soft FM — Cleaning, Landscaping, Pest Control", ar: "الصيانة الناعمة — تنظيف، مناظر طبيعية، مكافحة آفات" },
      { en: "24/7 Helpdesk & Emergency Response", ar: "مركز المساعدة والاستجابة للطوارئ على مدار الساعة" },
      { en: "Asset Lifecycle Management", ar: "إدارة دورة حياة الأصول" },
    ],
  },
  {
    id: "2",
    slug: "hvac-electromechanical",
    titleEn: "HVAC & Electromechanical",
    titleAr: "التكييف والكهروميكانيك",
    descriptionEn: "End-to-end HVAC design, supply, installation, and fixed-price maintenance contracts for industrial and commercial facilities.",
    descriptionAr: "تصميم وتوريد وتركيب أنظمة التكييف والتهوية وعقود الصيانة بسعر ثابت للمنشآت الصناعية والتجارية.",
    iconName: "Thermometer",
    specs: [
      { label: "Capacity Range", value: "5 TR — 5,000 TR" },
      { label: "Energy Savings", value: "Up to 30% reduction" },
      { label: "Maintenance Plans", value: "Annual Fixed-Price" },
    ],
    standards: ["ASHRAE", "ISO 14001"],
    features: [
      { en: "Central & Split AC System Design", ar: "تصميم أنظمة التكييف المركزي والسبليت" },
      { en: "Chiller Plant Installation", ar: "تركيب محطات التبريد" },
      { en: "BMS Integration & Automation", ar: "تكامل نظام إدارة المبنى والأتمتة" },
      { en: "Preventive Maintenance Programs", ar: "برامج الصيانة الوقائية" },
    ],
  },
  {
    id: "3",
    slug: "elevators-mobility",
    titleEn: "Elevators & Mobility",
    titleAr: "المصاعد والتنقل",
    descriptionEn: "Installation, modernization, and maintenance of passenger and freight elevators, escalators, and mobility solutions compliant with EN81 and ASME standards.",
    descriptionAr: "تركيب وتحديث وصيانة مصاعد الركاب والشحن والسلالم المتحركة وحلول التنقل المتوافقة مع معايير EN81 و ASME.",
    iconName: "ArrowUpDown",
    specs: [
      { label: "Standards", value: "EN81 / ASME A17.1" },
      { label: "Capacity", value: "Up to 5,000 kg" },
      { label: "Speed", value: "Up to 6 m/s" },
    ],
    standards: ["EN81", "ASME A17.1", "ISO 9001"],
    features: [
      { en: "Passenger & Freight Elevator Installation", ar: "تركيب مصاعد الركاب والشحن" },
      { en: "Escalator & Moving Walkway Systems", ar: "أنظمة السلالم المتحركة والممرات المتحركة" },
      { en: "Modernization & Retrofit Programs", ar: "برامج التحديث والتجديد" },
      { en: "Type B/C Maintenance Contracts", ar: "عقود صيانة من الفئة ب/ج" },
    ],
  },
  {
    id: "4",
    slug: "environmental-services",
    titleEn: "Environmental Services",
    titleAr: "الخدمات البيئية",
    descriptionEn: "Municipal cleaning, waste management, recycling programs, and environmental compliance services for cities and industrial zones.",
    descriptionAr: "خدمات التنظيف البلدي وإدارة النفايات وبرامج إعادة التدوير والامتثال البيئي للمدن والمناطق الصناعية.",
    iconName: "Leaf",
    specs: [
      { label: "Coverage", value: "City-scale operations" },
      { label: "Recycling Rate", value: "Target 40%" },
      { label: "Fleet", value: "200+ vehicles" },
    ],
    standards: ["ISO 14001", "Saudi EPA Compliance"],
    features: [
      { en: "City & District Cleaning Operations", ar: "عمليات تنظيف المدن والأحياء" },
      { en: "Solid Waste Collection & Disposal", ar: "جمع والتخلص من النفايات الصلبة" },
      { en: "Recycling & Waste Segregation Programs", ar: "برامج إعادة التدوير وفصل النفايات" },
      { en: "Environmental Impact Assessment", ar: "تقييم الأثر البيئي" },
    ],
  },
  {
    id: "5",
    slug: "telecommunications",
    titleEn: "Telecommunications",
    titleAr: "الاتصالات",
    descriptionEn: "ICT infrastructure including active/passive equipment, fiber optic networks, smart parking systems, and telecommunications solutions.",
    descriptionAr: "البنية التحتية لتقنية المعلومات والاتصالات بما في ذلك المعدات النشطة/السلبية وشبكات الألياف الضوئية وأنظمة المواقف الذكية.",
    iconName: "Radio",
    specs: [
      { label: "Workforce", value: "300+ technicians" },
      { label: "Network", value: "Fiber & Copper" },
      { label: "Coverage", value: "Nationwide" },
    ],
    standards: ["ISO 9001", "TIA/EIA Standards"],
    features: [
      { en: "Fiber Optic Network Installation", ar: "تركيب شبكات الألياف الضوئية" },
      { en: "Active & Passive Equipment Supply", ar: "توريد المعدات النشطة والسلبية" },
      { en: "Smart Parking Solutions", ar: "حلول المواقف الذكية" },
      { en: "ICT Infrastructure Design", ar: "تصميم البنية التحتية لتقنية المعلومات" },
    ],
  },
];
