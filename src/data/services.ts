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
    slug: "hospitality-facility-management",
    titleEn: "Hospitality & Facility Management",
    titleAr: "إدارة الضيافة والمرافق",
    descriptionEn:
      "Integrated facility management services delivering both Hard and Soft FM solutions for commercial, residential, hospitality, healthcare, industrial, and government sectors. We ensure efficient operations, asset longevity, and high-quality service delivery through SLA-driven performance and 24/7 support.",
    descriptionAr:
      "خدمات متكاملة لإدارة المرافق تشمل الصيانة الصلبة والناعمة للقطاعات التجارية والسكنية والفندقية والصحية والصناعية والحكومية. نضمن كفاءة التشغيل وطول عمر الأصول وجودة الخدمة من خلال أداء قائم على اتفاقيات مستوى الخدمة ودعم على مدار الساعة.",
    iconName: "Building2",
    specs: [
      { label: "Managed Area", value: "500,000+ sqm" },
      { label: "Response Time", value: "< 2 hours SLA" },
      { label: "Workforce", value: "350+ staff" },
    ],
    standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
    features: [
      { en: "Hard FM — Electrical, Plumbing, Civil & MEP Maintenance", ar: "الصيانة الصلبة — كهرباء وسباكة وأعمال مدنية وأنظمة ميكانيكية وكهربائية وصحية" },
      { en: "Soft FM — Cleaning, Housekeeping, Landscaping & Pest Control", ar: "الصيانة الناعمة — التنظيف والتدبير الفندقي والتشجير ومكافحة الآفات" },
      { en: "24/7 Helpdesk, CAFM System & Emergency Response", ar: "مركز مساعدة ونظام CAFM واستجابة للطوارئ على مدار الساعة" },
      { en: "Asset Lifecycle & Maintenance Planning", ar: "إدارة دورة حياة الأصول وتخطيط الصيانة" },
      { en: "Hospitality Services & Front Desk Support", ar: "خدمات الضيافة ودعم الاستقبال" },
      { en: "Annual Maintenance Contracts & Vendor Management", ar: "عقود الصيانة السنوية وإدارة الموردين" },
    ],
  },
  {
    id: "2",
    slug: "hvac-electromechanical",
    titleEn: "HVAC & Electromechanical",
    titleAr: "التكييف والكهروميكانيك",
    descriptionEn:
      "Complete HVAC and electromechanical solutions from design, supply, installation, and commissioning to maintenance and energy optimization. We deliver reliable, efficient, and sustainable systems for commercial, industrial, healthcare, and infrastructure projects.",
    descriptionAr:
      "حلول متكاملة للتكييف والكهروميكانيك تشمل التصميم والتوريد والتركيب والتشغيل والصيانة وتحسين كفاءة الطاقة. نقدم أنظمة موثوقة وفعالة ومستدامة للمشاريع التجارية والصناعية والصحية ومشاريع البنية التحتية.",
    iconName: "Thermometer",
    specs: [
      { label: "Capacity Range", value: "5 TR – 5,000 TR" },
      { label: "Energy Efficiency", value: "Up to 30% savings" },
      { label: "Service Type", value: "Design to Maintenance" },
    ],
    standards: ["ASHRAE", "SASO", "ISO 14001"],
    features: [
      { en: "Chiller Plants, VRF, Split, AHU & FCU Systems", ar: "أنظمة التبريد المركزي وVRF والسبليت ووحدات مناولة الهواء والمراوح" },
      { en: "Ventilation, Ducting & Air Distribution Systems", ar: "أنظمة التهوية ومجاري الهواء وتوزيع الهواء" },
      { en: "Building Management System (BMS) Integration", ar: "تكامل نظام إدارة المباني" },
      { en: "Energy Audit, Retrofit & Optimization", ar: "تدقيق الطاقة والتحديث وتحسين الكفاءة" },
      { en: "Testing, Commissioning & Performance Validation", ar: "الاختبار والتشغيل والتحقق من الأداء" },
      { en: "Preventive & Corrective Maintenance Contracts", ar: "عقود الصيانة الوقائية والتصحيحية" },
    ],
  },
  {
    id: "3",
    slug: "elevators-mobility",
    titleEn: "Elevators & Mobility",
    titleAr: "المصاعد والتنقل",
    descriptionEn:
      "Advanced vertical transportation solutions including design, supply, installation, modernization, and maintenance of elevators, escalators, and mobility systems for all types of buildings.",
    descriptionAr:
      "حلول متقدمة للنقل الرأسي تشمل التصميم والتوريد والتركيب والتحديث والصيانة للمصاعد والسلالم المتحركة وأنظمة التنقل للمباني المختلفة.",
    iconName: "ArrowUpDown",
    specs: [
      { label: "Standards", value: "EN81 / ASME A17.1" },
      { label: "Capacity", value: "Up to 5,000 kg" },
      { label: "Speed", value: "Up to 6 m/s" },
    ],
    standards: ["EN81", "ASME A17.1", "ISO 9001"],
    features: [
      { en: "Passenger, Freight & Panoramic Elevators", ar: "مصاعد الركاب والشحن والبانوراما" },
      { en: "Escalators, Moving Walkways & Dumbwaiters", ar: "السلالم المتحركة والممرات المتحركة والمصاعد الخدمية" },
      { en: "Modernization & Safety Upgrades", ar: "التحديث وترقيات السلامة" },
      { en: "Accessibility Solutions for Public Buildings", ar: "حلول الوصول للمباني العامة" },
      { en: "Breakdown Support & Spare Parts Supply", ar: "الدعم عند الأعطال وتوفير قطع الغيار" },
      { en: "Full-Scope Maintenance Contracts", ar: "عقود صيانة شاملة" },
    ],
  },
  {
    id: "4",
    slug: "environmental-services",
    titleEn: "Environmental Services",
    titleAr: "الخدمات البيئية",
    descriptionEn:
      "Comprehensive environmental and municipal services focused on sustainability, waste management, and urban cleanliness. Supporting cities, industrial zones, and government projects with efficient and eco-friendly operations.",
    descriptionAr:
      "خدمات بيئية وبلدية شاملة تركز على الاستدامة وإدارة النفايات ونظافة المدن، لدعم البلديات والمناطق الصناعية والمشاريع الحكومية بعمليات فعالة وصديقة للبيئة.",
    iconName: "Leaf",
    specs: [
      { label: "Coverage", value: "City-wide operations" },
      { label: "Recycling Rate", value: "40%+ target" },
      { label: "Fleet", value: "200+ vehicles" },
    ],
    standards: ["ISO 14001", "Environmental Compliance", "NWMC"],
    features: [
      { en: "Urban Cleaning & Street Sweeping Services", ar: "تنظيف المدن وكنس الشوارع" },
      { en: "Waste Collection, Transfer & Disposal", ar: "جمع ونقل والتخلص من النفايات" },
      { en: "Recycling & Waste Segregation Programs", ar: "برامج إعادة التدوير وفصل النفايات" },
      { en: "Industrial & Hazardous Waste Support", ar: "دعم النفايات الصناعية والخطرة" },
      { en: "Environmental Monitoring & Reporting", ar: "المراقبة البيئية وإعداد التقارير" },
      { en: "Manpower, Fleet & Operations Management", ar: "إدارة القوى العاملة والأسطول والعمليات" },
    ],
  },
  {
    id: "5",
    slug: "it-telecommunications",
    titleEn: "IT & Telecommunications",
    titleAr: "تكنولوجيا المعلومات والاتصالات",
    descriptionEn:
      "Comprehensive IT and telecommunications services covering ICT infrastructure, networking, cybersecurity, telecom systems, software, cloud, managed IT support, and smart technology solutions. We deliver end-to-end design, deployment, integration, maintenance, and support services for commercial, industrial, hospitality, healthcare, education, and government sectors across Saudi Arabia and Bangladesh.",
    descriptionAr:
      "خدمات شاملة في مجال تكنولوجيا المعلومات والاتصالات تشمل البنية التحتية لتقنية المعلومات والاتصالات، والشبكات، والأمن السيبراني، وأنظمة الاتصالات، والبرمجيات، والحوسبة السحابية، والدعم الفني المُدار، والحلول الذكية. نقدم خدمات متكاملة تشمل التصميم والتنفيذ والتكامل والصيانة والدعم للقطاعات التجارية والصناعية والفندقية والصحية والتعليمية والحكومية في المملكة العربية السعودية وبنغلاديش.",
    iconName: "Radio",
    specs: [
      { label: "Certified Technicians", value: "300+ nationwide" },
      { label: "Service Coverage", value: "Infrastructure to Managed IT" },
      { label: "Coverage", value: "Saudi Arabia & Bangladesh" },
    ],
    standards: ["ISO 9001", "TIA-568", "IEC 11801", "ISO 27001"],
    features: [
      { en: "Structured Cabling, Fiber Optic & Data Network Infrastructure", ar: "البنية التحتية للكابلات المنظمة والألياف الضوئية وشبكات البيانات" },
      { en: "LAN, WAN, Wi-Fi, Switching, Routing & Network Security", ar: "الشبكات المحلية والواسعة والواي فاي والمحولات والموجهات وأمن الشبكات" },
      { en: "CCTV, Access Control, Intercom, PA/BGM & ELV Systems", ar: "أنظمة المراقبة والتحكم في الدخول والاتصال الداخلي والنداء العام وأنظمة الجهد المنخفض" },
      { en: "Telecommunication Systems, IP Telephony & Unified Communication", ar: "أنظمة الاتصالات والهاتف عبر الإنترنت والاتصالات الموحدة" },
      { en: "Server, Storage, Data Centre & Rack Infrastructure Solutions", ar: "حلول الخوادم والتخزين ومراكز البيانات والبنية التحتية للرفوف" },
      { en: "Cloud Services, Virtualization, Backup & Disaster Recovery", ar: "الخدمات السحابية والافتراضية والنسخ الاحتياطي والتعافي من الكوارث" },
      { en: "Cybersecurity Solutions including Firewall, Endpoint & Access Protection", ar: "حلول الأمن السيبراني بما في ذلك الجدران النارية وحماية الأجهزة والتحكم في الوصول" },
      { en: "Software Solutions, Systems Integration & Custom Application Support", ar: "الحلول البرمجية وتكامل الأنظمة ودعم التطبيقات المخصصة" },
      { en: "Helpdesk, AMC, Managed IT Services & Technical Support", ar: "مكتب المساعدة وعقود الصيانة السنوية وخدمات تقنية المعلومات المُدارة والدعم الفني" },
      { en: "Smart Parking, IoT, Automation & Smart City Technology", ar: "المواقف الذكية وإنترنت الأشياء والأتمتة وتقنيات المدن الذكية" },
    ],
  },
];
