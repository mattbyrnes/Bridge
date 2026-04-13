export interface ServiceDetail {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
}

export interface Clinic {
  id: string;
  slug: string;
  name: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  reviewCount: number;
  services: string[];
  serviceDetails: ServiceDetail[];
  priceRange: string;
  hours: string;
  hoursDetailed: { day: string; hours: string }[];
  description: string;
  longDescription: string;
  featured: boolean;
  image: string;
  galleryImages?: string[];
  amenities: string[];
  certifications: string[];
  reviews: Review[];
  mapEmbedQuery: string;
}

export const clinics: Clinic[] = [
  {
    id: "1",
    slug: "drip-hydration-atlanta",
    name: "Drip Hydration - Mobile IV Therapy - Atlanta",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "691 John Wesley Dobbs Ave NE Suite C, Atlanta, GA 30312",
    phone: "+1 404-260-7419",
    website: "driphydration.com",
    rating: 4.9,
    reviewCount: 109,
    services: ["IV Hydration", "Vitamin Infusions", "NAD+ Therapy", "Athletic Recovery"],
    serviceDetails: [
      {
        name: "IV Hydration",
        description: "Essential electrolyte and fluid replacement therapy",
        price: "$99-$199",
        duration: "30-45 min"
      },
      {
        name: "Vitamin Infusions",
        description: "Custom vitamin and mineral blends for energy and wellness",
        price: "$149-$249",
        duration: "30-60 min"
      },
      {
        name: "NAD+ Therapy",
        description: "Cellular energy and anti-aging treatment",
        price: "$199-$299",
        duration: "45-60 min"
      }
    ],
    priceRange: "$99-$299",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 3:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
      { day: "Friday", hours: "9:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 7:00 PM" }
    ],
    description: "Professional IV hydration therapy in Decatur, featuring mobile services and in-clinic treatments.",
    longDescription: "Drip Hydration offers professional IV therapy services with a focus on mobile convenience and personalized wellness. Our experienced medical staff provides IV hydration, vitamin infusions, and NAD+ therapy to help you feel your best.",
    featured: true,
    image: "/clinics/drip-hydration-atlanta.jpg",
    amenities: ["Free parking", "Comfortable recliners", "WiFi", "Complimentary beverages"],
    certifications: ["Licensed RNs", "Physician supervised", "FDA compliant"],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        date: "2024-03-10",
        text: "Amazing experience! The staff was professional and the IV therapy made me feel refreshed and energized immediately."
      },
      {
        author: "James T.",
        rating: 5,
        date: "2024-03-05",
        text: "Great service and very professional. Highly recommend for anyone looking for quality IV therapy."
      }
    ],
    mapEmbedQuery: "Drip Hydration Atlanta GA"
  },
  {
    id: "2",
    slug: "restore-hyper-wellness-westside",
    name: "Restore Hyper Wellness (Westside)",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "2250 Marietta Blvd NW Suite 208, Atlanta, GA 30318",
    phone: "+1 678-973-0388",
    website: "restore.com",
    rating: 5.0,
    reviewCount: 308,
    services: ["IV Hydration", "NAD+ Therapy", "Myers Cocktail", "Athletic Recovery", "Beauty Infusions", "Cryotherapy", "Red Light Therapy", "Infrared Sauna"],
    serviceDetails: [
      {
        name: "Myers Cocktail",
        description: "Popular vitamin blend for energy and immunity",
        price: "$150-$200",
        duration: "30-45 min"
      },
      {
        name: "Beauty Infusions",
        description: "Biotin and collagen for skin and hair health",
        price: "$175-$225",
        duration: "30-45 min"
      },
      {
        name: "NAD+ Therapy",
        description: "Optimize cellular function and mental clarity",
        price: "$200-$300",
        duration: "45-60 min"
      },
      {
        name: "Cryotherapy",
        description: "Whole body sub-zero therapy for recovery and wellness",
        price: "$49-$69",
        duration: "3 min"
      },
      {
        name: "Red Light Therapy",
        description: "Low-level light to power cells and promote healing",
        price: "$29-$49",
        duration: "10-15 min"
      },
      {
        name: "Infrared Sauna",
        description: "Relaxing heat therapy for detoxification and circulation",
        price: "$39-$59",
        duration: "30-45 min"
      }
    ],
    priceRange: "$29-$300",
    hours: "10:00 AM – 6:30 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:30 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:30 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:30 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:30 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:30 AM – 5:00 PM" },
      { day: "Sunday", hours: "11:00 AM – 5:00 PM" }
    ],
    description: "Premium wellness center offering IV therapy and biohacking services on Atlanta's Westside.",
    longDescription: "Restore Hyper Wellness is dedicated to optimizing human performance through cutting-edge IV therapy and wellness services. Our state-of-the-art facility provides personalized treatments designed to boost energy, enhance recovery, and support overall wellness. With services including Cryotherapy, Red Light Therapy, Infrared Sauna, IV Drips, and more, we help you look and feel better than you thought possible.",
    featured: true,
    image: "/restore-hero.jpg",
    galleryImages: [
      "/restore-gallery-1.jpg",
      "/restore-gallery-2.jpg",
      "/restore-gallery-3.jpg",
      "/restore-gallery-4.jpg",
      "/restore-gallery-5.jpg",
      "/restore-gallery-6.jpg"
    ],
    amenities: ["Free parking", "Luxury recliners", "Healthy snacks", "Steam showers"],
    certifications: ["Board certified medical staff", "IV therapy specialists", "Wellness coaches"],
    reviews: [
      {
        author: "Jessica L.",
        rating: 5,
        date: "2024-03-08",
        text: "Fantastic place! The staff goes above and beyond. I felt the benefits of the IV therapy within hours."
      },
      {
        author: "Michael P.",
        rating: 5,
        date: "2024-03-01",
        text: "World-class facility and service. This is my go-to place for maintaining my wellness."
      }
    ],
    mapEmbedQuery: "Restore Hyper Wellness Westside Atlanta"
  },
  {
    id: "3",
    slug: "replenish-atlanta",
    name: "Replenish",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "525 North Avenue NE Suite 300, Atlanta, GA 30308",
    phone: "+1 404-891-9248",
    website: "",
    rating: 5.0,
    reviewCount: 437,
    services: ["IV Hydration", "Wellness Infusions", "Recovery", "Performance Enhancement"],
    serviceDetails: [
      {
        name: "IV Hydration Therapy",
        description: "Fast rehydration for fitness and wellness",
        price: "$125-$175",
        duration: "30-45 min"
      },
      {
        name: "Performance Enhancement",
        description: "Nutrients for athletic performance and endurance",
        price: "$175-$250",
        duration: "45-60 min"
      }
    ],
    priceRange: "$125-$250",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 6:00 PM" }
    ],
    description: "Replenish offers comprehensive IV therapy and wellness infusions in midtown Atlanta.",
    longDescription: "Replenish specializes in helping individuals feel their best through personalized IV therapy treatments. With over 437 reviews, they're known for excellent customer service and effective treatments.",
    featured: false,
    image: "/clinics/replenish-atlanta.jpg",
    amenities: ["Private treatment rooms", "Comfortable seating", "Wellness products", "Parking available"],
    certifications: ["Licensed nurses", "Physician oversight", "Certified wellness"],
    reviews: [
      {
        author: "David H.",
        rating: 5,
        date: "2024-02-28",
        text: "Excellent service and professional staff. The IV therapy really helped with my recovery."
      }
    ],
    mapEmbedQuery: "Replenish Atlanta IV therapy"
  },
  {
    id: "4",
    slug: "hydrate-iv-bar",
    name: "Hydrate IV Bar",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "1270 Spring St NW, Atlanta, GA 30309",
    phone: "+1 404-471-3179",
    website: "hydrateivbar.com",
    rating: 5.0,
    reviewCount: 76,
    services: ["IV Hydration", "Vitamin Shots", "Quick Wellness", "Recovery"],
    serviceDetails: [
      {
        name: "Quick IV Hydration",
        description: "Express hydration therapy",
        price: "$99-$129",
        duration: "20-30 min"
      },
      {
        name: "Vitamin Shots",
        description: "B12 and other quick vitamin injections",
        price: "$25-$50",
        duration: "5-10 min"
      }
    ],
    priceRange: "$25-$150",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" }
    ],
    description: "Quick and convenient IV hydration bar in Midtown Atlanta.",
    longDescription: "Hydrate IV Bar specializes in fast, convenient IV therapy for busy professionals. Walk-ins welcome with minimal wait times.",
    featured: false,
    image: "/clinics/hydrate-iv-bar.jpg",
    amenities: ["Walk-in friendly", "Quick service", "Modern bar setup", "Complimentary water"],
    certifications: ["Trained IV specialists"],
    reviews: [],
    mapEmbedQuery: "Hydrate IV Bar Atlanta"
  },
  {
    id: "5",
    slug: "hydraplus-virginia-highlands",
    name: "HydraPlus Virginia Highlands",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "675 N Highland Ave NE Suite 4000, Atlanta, GA 30306",
    phone: "+1 404-437-6556",
    website: "thehydraplus.com",
    rating: 4.8,
    reviewCount: 173,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Standard IV",
        description: "Basic hydration therapy",
        price: "$110-$150",
        duration: "30-45 min"
      },
      {
        name: "Premium Infusion",
        description: "Enhanced vitamin and mineral blend",
        price: "$160-$210",
        duration: "45-60 min"
      }
    ],
    priceRange: "$110-$210",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "11:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "11:00 AM – 5:00 PM" }
    ],
    description: "HydraPlus brings wellness to Virginia Highlands with professional IV therapy services.",
    longDescription: "Located in the vibrant Virginia Highlands neighborhood, HydraPlus offers personalized IV therapy in a welcoming environment.",
    featured: false,
    image: "/clinics/hydraplus-virginia-highlands.jpg",
    amenities: ["Neighborhood location", "Comfortable setting", "Professional staff"],
    certifications: ["Licensed healthcare providers"],
    reviews: [],
    mapEmbedQuery: "HydraPlus Virginia Highlands Atlanta"
  },
  {
    id: "6",
    slug: "hydraplus-buckhead",
    name: "HydraPlus Buckhead",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "2221 Peachtree Rd Q, Atlanta, GA 30309",
    phone: "+1 404-437-6556",
    website: "thehydraplus.com",
    rating: 4.6,
    reviewCount: 112,
    services: ["IV Hydration", "Premium Infusions", "Recovery", "Anti-aging"],
    serviceDetails: [
      {
        name: "Buckhead Premium",
        description: "Luxury IV infusion with top-tier ingredients",
        price: "$200-$300",
        duration: "60 min"
      }
    ],
    priceRange: "$150-$300",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "11:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Premium IV therapy in prestigious Buckhead location.",
    longDescription: "Experience luxury wellness at HydraPlus Buckhead, where elite IV therapy meets sophisticated comfort.",
    featured: false,
    image: "/clinics/hydraplus-buckhead.jpg",
    amenities: ["Luxury lounge", "Premium amenities", "Concierge service"],
    certifications: ["Elite medical staff"],
    reviews: [],
    mapEmbedQuery: "HydraPlus Buckhead Atlanta"
  },
  {
    id: "7",
    slug: "restore-hyper-wellness-midtown",
    name: "Restore Hyper Wellness (Midtown)",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "931 Monroe Dr NE Unit 111A, Atlanta, GA 30308",
    phone: "+1 404-836-7994",
    website: "restore.com",
    rating: 4.6,
    reviewCount: 81,
    services: ["IV Hydration", "NAD+ Therapy", "Recovery", "Performance"],
    serviceDetails: [
      {
        name: "Midtown IV Therapy",
        description: "Professional IV hydration and wellness",
        price: "$120-$200",
        duration: "30-60 min"
      }
    ],
    priceRange: "$120-$280",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" }
    ],
    description: "Restore Hyper Wellness brings premium IV therapy to Midtown Atlanta.",
    longDescription: "Our Midtown location offers extended hours and easy access for Atlanta professionals seeking wellness optimization.",
    featured: false,
    image: "/clinics/restore-hyper-wellness-midtown.jpg",
    amenities: ["Extended hours", "Central location", "Professional staff"],
    certifications: ["Certified wellness professionals"],
    reviews: [],
    mapEmbedQuery: "Restore Hyper Wellness Midtown Atlanta"
  },
  {
    id: "8",
    slug: "liquid-life-wellness",
    name: "Liquid Life Wellness",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "905 Juniper St NE 2nd Floor 109, Atlanta, GA 30309",
    phone: "+1 404-729-5437",
    website: "",
    rating: 4.9,
    reviewCount: 68,
    services: ["IV Hydration", "Wellness Infusions", "Recovery"],
    serviceDetails: [
      {
        name: "Wellness IV",
        description: "Comprehensive wellness infusion",
        price: "$130-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$200",
    hours: "9:00 AM – 5:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "9:00 AM – 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
      { day: "Friday", hours: "9:00 AM – 5:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Liquid Life Wellness specializes in comprehensive IV therapy treatments.",
    longDescription: "Dedicated to optimizing your wellness through professional IV therapy services.",
    featured: false,
    image: "/clinics/liquid-life-wellness.jpg",
    amenities: ["Professional setting", "Expert staff"],
    certifications: ["Licensed professionals"],
    reviews: [],
    mapEmbedQuery: "Liquid Life Wellness Atlanta"
  },
  {
    id: "9",
    slug: "4ever-young-midtown",
    name: "4Ever Young Med Spa & Wellness Center - Midtown",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "1080 W Peachtree St NW Unit 5, Atlanta, GA 30309",
    phone: "+1 470-943-4448",
    website: "",
    rating: 5.0,
    reviewCount: 1021,
    services: ["IV Hydration", "Beauty Infusions", "Anti-aging", "Recovery", "Performance"],
    serviceDetails: [
      {
        name: "Age-Defying IV",
        description: "Anti-aging and beauty-focused infusion",
        price: "$180-$250",
        duration: "60 min"
      },
      {
        name: "Recovery Plus",
        description: "Enhanced recovery with premium ingredients",
        price: "$160-$220",
        duration: "45 min"
      }
    ],
    priceRange: "$160-$280",
    hours: "9:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "12:00 PM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "9:00 AM – 5:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Premium med spa and wellness center with 1000+ excellent reviews.",
    longDescription: "4Ever Young is Atlanta's most reviewed wellness center, combining IV therapy with anti-aging and beauty treatments.",
    featured: true,
    image: "/4ever-young-midtown.jpg",
    amenities: ["Full med spa", "Beauty services", "Luxury amenities", "Relaxation space"],
    certifications: ["Board certified practitioners"],
    reviews: [
      {
        author: "Emma R.",
        rating: 5,
        date: "2024-03-12",
        text: "Amazing experience! The staff is knowledgeable and the results are fantastic. Already booked my next appointment!"
      }
    ],
    mapEmbedQuery: "4Ever Young Med Spa Midtown Atlanta"
  },
  {
    id: "10",
    slug: "vida-flo-decatur",
    name: "Vida-Flo Decatur",
    city: "Decatur",
    region: "Metro Atlanta",
    address: "431 W Ponce de Leon Ave #2, Decatur, GA 30030",
    phone: "+1 470-225-6954",
    website: "vida-flo.com",
    rating: 5.0,
    reviewCount: 518,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Energy Boost"],
    serviceDetails: [
      {
        name: "Standard IV",
        description: "Classic hydration therapy",
        price: "$120-$160",
        duration: "30-45 min"
      },
      {
        name: "Premium Mix",
        description: "Enhanced vitamin and mineral formula",
        price: "$160-$220",
        duration: "45-60 min"
      }
    ],
    priceRange: "$120-$220",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 7:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 7:00 PM" }
    ],
    description: "Vida-Flo brings premium IV therapy to charming Decatur.",
    longDescription: "With over 500 reviews, Vida-Flo Decatur is a trusted wellness destination offering professional IV therapy seven days a week.",
    featured: true,
    image: "/clinics/vida-flo-decatur.jpg",
    amenities: ["7 days a week", "Extended hours", "Comfortable lounge", "Free parking"],
    certifications: ["Medical professionals", "Wellness certified"],
    reviews: [
      {
        author: "Tom B.",
        rating: 5,
        date: "2024-03-09",
        text: "Excellent IV therapy! The Decatur location is convenient and the staff is very friendly."
      }
    ],
    mapEmbedQuery: "Vida-Flo Decatur Georgia"
  },
  {
    id: "11",
    slug: "vida-flo-buckhead",
    name: "Vida-Flo Buckhead",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "2900 Peachtree Rd NW Ste 207, Atlanta, GA 30305",
    phone: "+1 404-474-4722",
    website: "vida-flo.com",
    rating: 4.8,
    reviewCount: 559,
    services: ["IV Hydration", "Vitamin Infusions", "Premium Therapies"],
    serviceDetails: [
      {
        name: "Buckhead Elite",
        description: "Premium IV therapy with luxury service",
        price: "$180-$250",
        duration: "60 min"
      }
    ],
    priceRange: "$120-$280",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 7:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 7:00 PM" }
    ],
    description: "Vida-Flo's premium Buckhead location for luxury IV therapy.",
    longDescription: "Experience premium IV therapy in prestigious Buckhead with extended hours and luxury amenities.",
    featured: false,
    image: "/clinics/vida-flo-buckhead.jpg",
    amenities: ["Luxury location", "Premium service", "Extended hours", "Valet parking"],
    certifications: ["Elite wellness professionals"],
    reviews: [],
    mapEmbedQuery: "Vida-Flo Buckhead Atlanta"
  },
  {
    id: "12",
    slug: "vida-flo-johns-creek",
    name: "Vida-Flo Johns Creek",
    city: "Johns Creek",
    region: "Metro Atlanta",
    address: "10900 Medlock Bridge Rd STE 202, Johns Creek, GA 30097",
    phone: "+1 770-525-9093",
    website: "vida-flo.com",
    rating: 4.9,
    reviewCount: 136,
    services: ["IV Hydration", "Wellness Infusions", "Recovery"],
    serviceDetails: [
      {
        name: "Johns Creek IV",
        description: "Professional IV therapy and wellness",
        price: "$120-$200",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 6:00 PM" }
    ],
    description: "Vida-Flo brings wellness to Johns Creek with professional IV therapy.",
    longDescription: "Serving the Johns Creek community with quality IV therapy and wellness services.",
    featured: false,
    image: "/clinics/vida-flo-johns-creek.jpg",
    amenities: ["Community focused", "Professional staff"],
    certifications: ["Licensed professionals"],
    reviews: [],
    mapEmbedQuery: "Vida-Flo Johns Creek Georgia"
  },
  {
    id: "13",
    slug: "prime-iv-smyrna",
    name: "Prime IV Hydration & Wellness (Smyrna)",
    city: "Smyrna",
    region: "Metro Atlanta",
    address: "4500 W Village Pl #2003, Smyrna, GA 30080",
    phone: "+1 770-758-7395",
    website: "primeivhydration.com",
    rating: 4.9,
    reviewCount: 246,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Prime IV Package",
        description: "Standard IV hydration therapy",
        price: "$130-$180",
        duration: "30-45 min"
      }
    ],
    priceRange: "$130-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Prime IV Hydration brings quality wellness to Smyrna.",
    longDescription: "Prime IV offers professional IV therapy in Smyrna with a focus on wellness optimization.",
    featured: false,
    image: "/clinics/prime-iv-smyrna.jpg",
    amenities: ["Professional clinic", "Comfortable seating"],
    certifications: ["Licensed staff"],
    reviews: [],
    mapEmbedQuery: "Prime IV Hydration Smyrna Georgia"
  },
  {
    id: "14",
    slug: "prime-iv-toco-hills",
    name: "Prime IV Hydration & Wellness (Toco Hills)",
    city: "Atlanta",
    region: "Metro Atlanta",
    address: "3019 N Druid Hills Rd, Atlanta, GA 30329",
    phone: "+1 470-782-9471",
    website: "primeivhydration.com",
    rating: 4.9,
    reviewCount: 34,
    services: ["IV Hydration", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Toco Hills IV",
        description: "Professional IV hydration therapy",
        price: "$130-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$220",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "12:00 PM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Prime IV Hydration at Toco Hills location.",
    longDescription: "Serving the Toco Hills area with professional IV therapy services.",
    featured: false,
    image: "/clinics/prime-iv-toco-hills.jpg",
    amenities: ["Neighborhood clinic"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Prime IV Toco Hills Atlanta"
  },
  {
    id: "15",
    slug: "prime-iv-marietta",
    name: "Prime IV Hydration & Wellness (Marietta)",
    city: "Marietta",
    region: "Metro Atlanta",
    address: "1205 Johnson Ferry Rd #103, Marietta, GA 30068",
    phone: "+1 470-946-6916",
    website: "primeivhydration.com",
    rating: 4.9,
    reviewCount: 161,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery"],
    serviceDetails: [
      {
        name: "Marietta IV Therapy",
        description: "Professional IV hydration service",
        price: "$130-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Prime IV Hydration brings wellness to Marietta.",
    longDescription: "Professional IV therapy services in Marietta for local wellness needs.",
    featured: false,
    image: "/clinics/prime-iv-marietta.jpg",
    amenities: ["Convenient location"],
    certifications: ["Licensed professionals"],
    reviews: [],
    mapEmbedQuery: "Prime IV Marietta Georgia"
  },
  {
    id: "16",
    slug: "prime-iv-peachtree-corners",
    name: "Prime IV Hydration & Wellness (Peachtree Corners)",
    city: "Peachtree Corners",
    region: "Metro Atlanta",
    address: "5215 Town Center Blvd Suite 630, Peachtree Corners, GA 30092",
    phone: "+1 770-284-8324",
    website: "primeivhydration.com",
    rating: 5.0,
    reviewCount: 70,
    services: ["IV Hydration", "Wellness Infusions", "Recovery"],
    serviceDetails: [
      {
        name: "Town Center IV",
        description: "Quality IV hydration therapy",
        price: "$130-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" }
    ],
    description: "Prime IV at Peachtree Corners Town Center.",
    longDescription: "Conveniently located IV therapy services in Peachtree Corners.",
    featured: false,
    image: "/clinics/prime-iv-peachtree-corners.jpg",
    amenities: ["Shopping center location", "Easy access"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Prime IV Peachtree Corners Georgia"
  },
  {
    id: "17",
    slug: "prime-iv-roswell-corners",
    name: "Prime IV Hydration & Wellness (Roswell Corners)",
    city: "Roswell",
    region: "Metro Atlanta",
    address: "1155 Woodstock Rd #720, Roswell, GA 30075",
    phone: "+1 770-762-1273",
    website: "primeivhydration.com",
    rating: 5.0,
    reviewCount: 10,
    services: ["IV Hydration", "Recovery"],
    serviceDetails: [
      {
        name: "Roswell IV",
        description: "IV hydration therapy",
        price: "$130-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$180",
    hours: "Varies",
    hoursDetailed: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" }
    ],
    description: "Prime IV Hydration in Roswell.",
    longDescription: "IV therapy services in Roswell. Call for current hours.",
    featured: false,
    image: "/clinics/prime-iv-roswell.jpg",
    amenities: [],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Prime IV Roswell Georgia"
  },
  {
    id: "18",
    slug: "whydrate-roswell",
    name: "wHydrate - IV Hydration Therapy (Roswell)",
    city: "Roswell",
    region: "Metro Atlanta",
    address: "1245 Alpharetta St, Roswell, GA 30075",
    phone: "+1 770-209-3466",
    website: "whydrate.com",
    rating: 4.9,
    reviewCount: 328,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Roswell IV Package",
        description: "Standard IV hydration",
        price: "$120-$170",
        duration: "30-45 min"
      },
      {
        name: "Premium Infusion",
        description: "Enhanced vitamin blend",
        price: "$160-$220",
        duration: "45-60 min"
      }
    ],
    priceRange: "$120-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 5:00 PM" }
    ],
    description: "wHydrate brings professional IV therapy to Roswell.",
    longDescription: "wHydrate in Roswell offers quality IV hydration and wellness services with convenient weekend hours.",
    featured: false,
    image: "/clinics/whydrate-roswell.jpg",
    amenities: ["Weekend hours", "Professional clinic"],
    certifications: ["Trained professionals"],
    reviews: [],
    mapEmbedQuery: "wHydrate Roswell Georgia"
  },
  {
    id: "19",
    slug: "whydrate-kennesaw",
    name: "wHydrate - IV Hydration Therapy (Kennesaw)",
    city: "Kennesaw",
    region: "Metro Atlanta",
    address: "2615 George Busbee Pkwy NW #5, Kennesaw, GA 30144",
    phone: "+1 470-399-9198",
    website: "whydrate.com",
    rating: 4.9,
    reviewCount: 923,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Athletic Performance"],
    serviceDetails: [
      {
        name: "Standard IV",
        description: "IV hydration therapy",
        price: "$120-$170",
        duration: "30-45 min"
      },
      {
        name: "Athletic Recovery",
        description: "Performance-focused IV therapy",
        price: "$160-$220",
        duration: "45-60 min"
      }
    ],
    priceRange: "$120-$220",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 5:00 PM" }
    ],
    description: "wHydrate's popular Kennesaw location with 900+ reviews.",
    longDescription: "One of the most reviewed IV therapy centers in the area, wHydrate Kennesaw is known for excellent service and quality treatments.",
    featured: true,
    image: "/clinics/whydrate-kennesaw.jpg",
    amenities: ["Weekend hours", "Popular location", "Professional staff", "Comfortable environment"],
    certifications: ["Experienced professionals"],
    reviews: [
      {
        author: "Alex K.",
        rating: 5,
        date: "2024-03-11",
        text: "Fantastic IV experience! The staff was knowledgeable and professional. Will definitely be back!"
      }
    ],
    mapEmbedQuery: "wHydrate Kennesaw Georgia"
  },
  {
    id: "20",
    slug: "restore-dunwoody",
    name: "Restore Hyper Wellness (Dunwoody/Perimeter)",
    city: "Dunwoody",
    region: "Metro Atlanta",
    address: "4706 Ashford Dunwoody Rd Bldg B1 Suite 200, Dunwoody, GA 30338",
    phone: "+1 404-602-0114",
    website: "restore.com",
    rating: 4.6,
    reviewCount: 134,
    services: ["IV Hydration", "NAD+ Therapy", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Dunwoody IV",
        description: "Professional IV hydration therapy",
        price: "$120-$200",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$280",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 4:00 PM" }
    ],
    description: "Restore Hyper Wellness at Dunwoody Perimeter location.",
    longDescription: "Professional IV therapy and wellness services at the convenient Dunwoody/Perimeter location.",
    featured: false,
    image: "/clinics/restore-dunwoody.jpg",
    amenities: ["Perimeter location", "Extended hours"],
    certifications: ["Certified staff"],
    reviews: [],
    mapEmbedQuery: "Restore Hyper Wellness Dunwoody Georgia"
  },
  {
    id: "21",
    slug: "restore-alpharetta",
    name: "Restore Hyper Wellness (Alpharetta)",
    city: "Alpharetta",
    region: "Metro Atlanta",
    address: "7155 Avalon Wy, Alpharetta, GA 30009",
    phone: "+1 470-361-2055",
    website: "restore.com",
    rating: 4.9,
    reviewCount: 488,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Performance"],
    serviceDetails: [
      {
        name: "Alpharetta Premium",
        description: "Premium IV hydration and wellness",
        price: "$130-$210",
        duration: "45-60 min"
      }
    ],
    priceRange: "$130-$280",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "11:00 AM – 5:00 PM" }
    ],
    description: "Restore Hyper Wellness brings premium IV therapy to Alpharetta.",
    longDescription: "With nearly 500 positive reviews, Restore's Alpharetta location is a trusted wellness destination.",
    featured: false,
    image: "/clinics/restore-alpharetta.jpg",
    amenities: ["Premium location", "Extended hours", "Weekend service"],
    certifications: ["Expert staff"],
    reviews: [],
    mapEmbedQuery: "Restore Hyper Wellness Alpharetta Georgia"
  },
  {
    id: "22",
    slug: "iv-nutrition-alpharetta",
    name: "IV Nutrition (Alpharetta)",
    city: "Alpharetta",
    region: "Metro Atlanta",
    address: "9925 Haynes Bridge Rd Suite 110, Alpharetta, GA 30022",
    phone: "+1 404-620-0035",
    website: "",
    rating: 5.0,
    reviewCount: 63,
    services: ["IV Nutrition", "Vitamin Infusions", "Recovery"],
    serviceDetails: [
      {
        name: "IV Nutrition Package",
        description: "Professional IV nutrition therapy",
        price: "$120-$200",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$220",
    hours: "9:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "9:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
      { day: "Friday", hours: "9:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "12:00 PM – 5:00 PM" }
    ],
    description: "IV Nutrition specializes in nutrition-focused IV therapy.",
    longDescription: "Professional IV nutrition services with weekend and extended hours for your convenience.",
    featured: false,
    image: "/clinics/iv-nutrition-alpharetta.jpg",
    amenities: ["Extended hours", "Weekend service"],
    certifications: ["Nutrition specialists"],
    reviews: [],
    mapEmbedQuery: "IV Nutrition Alpharetta Georgia"
  },
  {
    id: "23",
    slug: "tia-hydrate-kennesaw",
    name: "Tia Hydrate (Kennesaw)",
    city: "Kennesaw",
    region: "Metro Atlanta",
    address: "3772 Cherokee St NW, Kennesaw, GA 30144",
    phone: "+1 770-562-7948",
    website: "",
    rating: 5.0,
    reviewCount: 36,
    services: ["IV Hydration", "Wellness"],
    serviceDetails: [
      {
        name: "Tia Hydration",
        description: "Professional IV hydration therapy",
        price: "$120-$180",
        duration: "30-45 min"
      }
    ],
    priceRange: "$120-$180",
    hours: "10:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 6:00 PM" },
      { day: "Friday", hours: "10:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Tia Hydrate offers professional IV hydration in Kennesaw.",
    longDescription: "Quality IV hydration therapy in a welcoming Kennesaw location.",
    featured: false,
    image: "/clinics/tia-hydrate-kennesaw.jpg",
    amenities: ["Professional clinic"],
    certifications: ["Licensed staff"],
    reviews: [],
    mapEmbedQuery: "Tia Hydrate Kennesaw Georgia"
  },
  {
    id: "24",
    slug: "drip-and-glow-marietta",
    name: "Drip & Glow IV Hydration and Wellness (Marietta)",
    city: "Marietta",
    region: "Metro Atlanta",
    address: "3827 Roswell Rd, Marietta, GA 30062",
    phone: "+1 404-618-5554",
    website: "",
    rating: 5.0,
    reviewCount: 8,
    services: ["IV Hydration", "Beauty", "Wellness"],
    serviceDetails: [
      {
        name: "Drip & Glow IV",
        description: "IV hydration and beauty wellness",
        price: "$130-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$200",
    hours: "8:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "8:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
      { day: "Friday", hours: "8:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "8:30 AM – 3:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Drip & Glow combines IV hydration with beauty and wellness services.",
    longDescription: "Early hours available for busy professionals in Marietta. Specializing in beauty and wellness IV therapy.",
    featured: false,
    image: "/clinics/drip-and-glow-marietta.jpg",
    amenities: ["Early hours", "Beauty focused"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Drip & Glow Marietta Georgia"
  },
  {
    id: "25",
    slug: "ultimate-hydration-roswell",
    name: "Ultimate Hydration and Wellness Clinic (Roswell)",
    city: "Roswell",
    region: "Metro Atlanta",
    address: "1905 Woodstock Rd STE 6100, Roswell, GA 30075",
    phone: "+1 470-285-2750",
    website: "",
    rating: 5.0,
    reviewCount: 24,
    services: ["IV Hydration", "Wellness"],
    serviceDetails: [
      {
        name: "Ultimate IV",
        description: "Comprehensive IV hydration therapy",
        price: "$130-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$190",
    hours: "Varies",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "Closed" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Ultimate Hydration clinic in Roswell with limited hours.",
    longDescription: "IV wellness services in Roswell. Call for appointment availability.",
    featured: false,
    image: "/clinics/ultimate-hydration-roswell.jpg",
    amenities: ["By appointment"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Ultimate Hydration Roswell Georgia"
  },
  {
    id: "26",
    slug: "vita-infusions-roswell",
    name: "Vita Infusions (Roswell)",
    city: "Roswell",
    region: "Metro Atlanta",
    address: "1240 Upper Hembree Rd Suite E, Roswell, GA 30076",
    phone: "+1 470-796-3969",
    website: "",
    rating: 5.0,
    reviewCount: 44,
    services: ["IV Infusions", "Wellness"],
    serviceDetails: [
      {
        name: "Vita IV",
        description: "Professional IV infusion therapy",
        price: "$130-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$130-$190",
    hours: "9:30 AM – 4:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "9:30 AM – 4:00 PM" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "9:30 AM – 4:00 PM" },
      { day: "Thursday", hours: "9:30 AM – 4:00 PM" },
      { day: "Friday", hours: "9:30 AM – 4:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Vita Infusions provides professional IV therapy in Roswell.",
    longDescription: "Quality IV infusion services with convenient daytime hours.",
    featured: false,
    image: "/clinics/vita-infusions-roswell.jpg",
    amenities: ["Daytime hours"],
    certifications: ["Licensed professionals"],
    reviews: [],
    mapEmbedQuery: "Vita Infusions Roswell Georgia"
  },
  {
    id: "27",
    slug: "ivy-clinic-duluth",
    name: "IVy Clinic - Vitamin IV Therapy (Duluth)",
    city: "Duluth",
    region: "Metro Atlanta",
    address: "2005 Boggs Rd NW #101, Duluth, GA 30096",
    phone: "+1 770-687-2545",
    website: "",
    rating: 5.0,
    reviewCount: 13,
    services: ["Vitamin IV Therapy"],
    serviceDetails: [
      {
        name: "IVy Vitamin Therapy",
        description: "Professional vitamin IV therapy",
        price: "$120-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$180",
    hours: "Call for hours",
    hoursDetailed: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" }
    ],
    description: "IVy Clinic specializes in vitamin IV therapy in Duluth.",
    longDescription: "Professional vitamin IV therapy. Call for current hours and availability.",
    featured: false,
    image: "/clinics/ivy-clinic-duluth.jpg",
    amenities: [],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "IVy Clinic Duluth Georgia"
  },
  {
    id: "28",
    slug: "purifi-iv-suwanee",
    name: "Purifi IV - IV Hydration & Vitamin Therapy (Suwanee)",
    city: "Suwanee",
    region: "Metro Atlanta",
    address: "1500 Peachtree Industrial Blvd Ste 125, Suwanee, GA 30024",
    phone: "+1 213-515-6396",
    website: "",
    rating: 5.0,
    reviewCount: 195,
    services: ["IV Hydration", "Vitamin Therapy", "Wellness"],
    serviceDetails: [
      {
        name: "Purifi IV Package",
        description: "IV hydration and vitamin therapy",
        price: "$120-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$200",
    hours: "Call for hours",
    hoursDetailed: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" }
    ],
    description: "Purifi IV offers comprehensive IV hydration and vitamin therapy in Suwanee.",
    longDescription: "Professional IV hydration and vitamin therapy with nearly 200 positive reviews. Call for hours.",
    featured: false,
    image: "/clinics/purifi-iv-suwanee.jpg",
    amenities: ["Professional service"],
    certifications: ["Experienced staff"],
    reviews: [],
    mapEmbedQuery: "Purifi IV Suwanee Georgia"
  },
  {
    id: "29",
    slug: "twelvestone-infusion-center-duluth",
    name: "TwelveStone Infusion Center Duluth",
    city: "Duluth",
    region: "Metro Atlanta",
    address: "2925 Premiere Pkwy Suite 145, Duluth, GA 30097",
    phone: "+1 470-750-1115",
    website: "twelvestonehealth.com",
    rating: 5.0,
    reviewCount: 47,
    services: ["IV Infusion Therapy", "Medical IV Services"],
    serviceDetails: [
      {
        name: "Medical IV Infusion",
        description: "Professional medical-grade IV infusion therapy",
        price: "$150-$250",
        duration: "45-60 min"
      }
    ],
    priceRange: "$150-$260",
    hours: "7:00 AM – 5:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "7:00 AM – 5:00 PM" },
      { day: "Tuesday", hours: "7:00 AM – 5:00 PM" },
      { day: "Wednesday", hours: "7:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "7:00 AM – 5:00 PM" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "TwelveStone Infusion Center provides professional medical IV services.",
    longDescription: "Medical-grade IV infusion therapy center with early morning hours for healthcare workers and professionals.",
    featured: false,
    image: "/clinics/twelvestone-infusion-duluth.jpg",
    amenities: ["Early morning hours", "Medical facility"],
    certifications: ["Medical professionals"],
    reviews: [],
    mapEmbedQuery: "TwelveStone Infusion Center Duluth"
  },
  {
    id: "30",
    slug: "revive-iv-lounge-buford",
    name: "Revive IV Lounge (Buford)",
    city: "Buford",
    region: "Metro Atlanta",
    address: "2725 Mall of Georgia Blvd Floor 2, Buford, GA 30519",
    phone: "+1 470-589-1237",
    website: "",
    rating: 5.0,
    reviewCount: 318,
    services: ["IV Hydration", "Vitamin Infusions", "Recovery", "Wellness"],
    serviceDetails: [
      {
        name: "Revive IV Package",
        description: "Professional IV hydration and wellness",
        price: "$120-$200",
        duration: "45 min"
      },
      {
        name: "Premium Recovery",
        description: "Enhanced recovery infusion",
        price: "$180-$250",
        duration: "60 min"
      }
    ],
    priceRange: "$120-$260",
    hours: "10:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "10:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
      { day: "Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 5:00 PM" }
    ],
    description: "Revive IV Lounge at Mall of Georgia is a popular IV therapy destination.",
    longDescription: "With over 300 reviews, Revive IV Lounge in Buford is known for quality IV therapy and extended hours.",
    featured: true,
    image: "/clinics/revive-iv-lounge-buford.jpg",
    amenities: ["Shopping center location", "Extended hours", "Weekend service", "Comfortable lounge"],
    certifications: ["Professional staff"],
    reviews: [
      {
        author: "Nicole T.",
        rating: 5,
        date: "2024-03-07",
        text: "Great IV experience! The lounge is comfortable and the staff is very knowledgeable."
      }
    ],
    mapEmbedQuery: "Revive IV Lounge Buford Georgia"
  },
  {
    id: "31",
    slug: "gwinnett-iv-therapy-dacula",
    name: "Gwinnett IV Therapy (Dacula)",
    city: "Dacula",
    region: "Metro Atlanta",
    address: "Inside Arbor Terrace - 3577 Braselton Hwy, Dacula, GA 30019",
    phone: "+1 770-695-7537",
    website: "",
    rating: 5.0,
    reviewCount: 24,
    services: ["IV Therapy", "Wellness"],
    serviceDetails: [
      {
        name: "Gwinnett IV",
        description: "Professional IV therapy services",
        price: "$120-$180",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$180",
    hours: "9:00 AM – 5:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "9:00 AM – 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
      { day: "Friday", hours: "9:00 AM – 5:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Gwinnett IV Therapy provides professional IV services in Dacula.",
    longDescription: "Quality IV therapy in a convenient Dacula location within Arbor Terrace.",
    featured: false,
    image: "/clinics/gwinnett-iv-therapy-dacula.jpg",
    amenities: ["Community location"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Gwinnett IV Therapy Dacula Georgia"
  },
  {
    id: "32",
    slug: "just-infusion-plus-lawrenceville",
    name: "Just Infusion Plus (Lawrenceville)",
    city: "Lawrenceville",
    region: "Metro Atlanta",
    address: "4955 Sugarloaf Pkwy Suite 106, Lawrenceville, GA 30044",
    phone: "+1 404-884-8098",
    website: "",
    rating: 5.0,
    reviewCount: 24,
    services: ["IV Infusion", "Wellness"],
    serviceDetails: [
      {
        name: "Just Infusion",
        description: "Professional IV infusion therapy",
        price: "$120-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$190",
    hours: "1:00 PM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "1:00 PM – 7:00 PM" },
      { day: "Wednesday", hours: "1:00 PM – 7:00 PM" },
      { day: "Thursday", hours: "1:00 PM – 7:00 PM" },
      { day: "Friday", hours: "1:00 PM – 7:00 PM" },
      { day: "Saturday", hours: "12:00 PM – 6:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Just Infusion Plus offers afternoon and evening IV therapy in Lawrenceville.",
    longDescription: "Convenient afternoon and evening hours for your IV therapy needs in Lawrenceville.",
    featured: false,
    image: "/clinics/just-infusion-plus-lawrenceville.jpg",
    amenities: ["Afternoon hours", "Weekend service"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Just Infusion Plus Lawrenceville Georgia"
  },
  {
    id: "33",
    slug: "iv-vitamin-hydration-lawrenceville",
    name: "IV Vitamin & Hydration Therapy (Lawrenceville)",
    city: "Lawrenceville",
    region: "Metro Atlanta",
    address: "5425 Sugarloaf Pkwy, Lawrenceville, GA 30043",
    phone: "+1 678-404-5352",
    website: "",
    rating: 0,
    reviewCount: 0,
    services: ["IV Hydration", "Vitamin Therapy"],
    serviceDetails: [
      {
        name: "IV Vitamin Therapy",
        description: "IV hydration and vitamin therapy",
        price: "$120-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$190",
    hours: "Call for hours",
    hoursDetailed: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" }
    ],
    description: "IV Vitamin & Hydration Therapy in Lawrenceville.",
    longDescription: "Professional IV therapy services. Call for current hours and information.",
    featured: false,
    image: "/clinics/iv-vitamin-hydration-lawrenceville.jpg",
    amenities: [],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "IV Vitamin Hydration Lawrenceville Georgia"
  },
  {
    id: "34",
    slug: "its-the-drip-lilburn",
    name: "It's the Drip IV Hydration and Wellness (Lilburn)",
    city: "Lilburn",
    region: "Metro Atlanta",
    address: "3100 Five Forks Trickum Rd SW STE 602, Lilburn, GA 30047",
    phone: "+1 404-835-9707",
    website: "",
    rating: 5.0,
    reviewCount: 28,
    services: ["IV Hydration", "Wellness"],
    serviceDetails: [
      {
        name: "The Drip IV",
        description: "Professional IV hydration therapy",
        price: "$120-$190",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$190",
    hours: "11:00 AM – 7:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "11:00 AM – 7:00 PM" },
      { day: "Tuesday", hours: "11:00 AM – 7:00 PM" },
      { day: "Wednesday", hours: "11:00 AM – 7:00 PM" },
      { day: "Thursday", hours: "11:00 AM – 7:00 PM" },
      { day: "Friday", hours: "11:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "It's the Drip brings IV hydration and wellness to Lilburn.",
    longDescription: "Professional IV hydration therapy with convenient afternoon and evening hours.",
    featured: false,
    image: "/clinics/its-the-drip-lilburn.jpg",
    amenities: ["Afternoon hours"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "It's the Drip Lilburn Georgia"
  },
  {
    id: "35",
    slug: "sluice-drip-spa-peachtree-city",
    name: "Sluice Drip Spa (Peachtree City)",
    city: "Peachtree City",
    region: "Metro Atlanta",
    address: "23 Eastbrook Bend, Peachtree City, GA 30269",
    phone: "+1 678-489-6725",
    website: "",
    rating: 5.0,
    reviewCount: 79,
    services: ["IV Drip Spa", "Wellness"],
    serviceDetails: [
      {
        name: "Sluice Drip Experience",
        description: "Premium IV drip spa experience",
        price: "$150-$220",
        duration: "60 min"
      }
    ],
    priceRange: "$150-$220",
    hours: "9:00 AM – 6:00 PM",
    hoursDetailed: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
      { day: "Friday", hours: "9:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    description: "Sluice Drip Spa offers a premium IV drip spa experience in Peachtree City.",
    longDescription: "Luxury IV drip spa experience in Peachtree City with over 75 positive reviews.",
    featured: false,
    image: "/clinics/sluice-drip-spa-peachtree-city.jpg",
    amenities: ["Spa experience", "Premium service"],
    certifications: ["Professional staff"],
    reviews: [],
    mapEmbedQuery: "Sluice Drip Spa Peachtree City Georgia"
  },
  {
    id: "36",
    slug: "mycare-clinic-peachtree-corners",
    name: "MyCare Clinic (Peachtree Corners)",
    city: "Peachtree Corners",
    region: "Metro Atlanta",
    address: "Peachtree Corners, GA",
    phone: "",
    website: "mycareclinicatlanta.com",
    rating: 0,
    reviewCount: 0,
    services: ["IV Therapy", "Medical Services"],
    serviceDetails: [
      {
        name: "MyCare IV Service",
        description: "Professional IV therapy and medical services",
        price: "$120-$200",
        duration: "45 min"
      }
    ],
    priceRange: "$120-$200",
    hours: "Call for hours",
    hoursDetailed: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" }
    ],
    description: "MyCare Clinic provides comprehensive IV therapy and medical services.",
    longDescription: "Professional medical clinic offering IV therapy services. Visit website or call for hours.",
    featured: false,
    image: "/clinics/mycare-clinic.jpg",
    amenities: [],
    certifications: ["Medical professionals"],
    reviews: [],
    mapEmbedQuery: "MyCare Clinic Peachtree Corners Georgia"
  }
];

// Regions available for filtering
export const regions = [
  "All Regions",
  "Metro Atlanta",
  "North Metro",
  "East Metro",
  "South Metro",
  "West Metro",
];

// Services available for filtering
export const services = [
  "All Services",
  "Hydration Therapy",
  "Vitamin Infusions",
  "NAD+ Therapy",
  "Myers Cocktail",
  "Immune Boost",
  "Athletic Recovery",
  "Beauty & Anti-Aging",
  "Hangover Recovery",
  "Weight Loss",
  "Migraine Relief",
];
