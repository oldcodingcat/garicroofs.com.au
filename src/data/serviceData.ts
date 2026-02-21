import terracottaRoof from "@/assets/terracotta-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import flatConcreteRoof from "@/assets/flat-concrete-roof.jpg";
import decramasticRoof from "@/assets/decramastic-roof.jpg";
import concreteTilesRoof from "@/assets/concrete-tiles-roof.jpg";
import industrialCoatingRoof from "@/assets/industrial-coating-roof.jpg";
import heroRoofPainting from "@/assets/hero-roof-painting.jpg";
import teamAtWork from "@/assets/team-at-work.jpg";
import beforeAfterRoof from "@/assets/before-after-roof.jpg";

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ServiceData {
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  description: string;
  heroImage: string;
  overviewImage: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  benefits: ServiceBenefit[];
  process: ProcessStep[];
  includes: string[];
  faqs: FAQ[];
  relatedServices: string[];
  warranty: string;
}

export const serviceData: Record<string, ServiceData> = {
  "terracotta-tiles": {
    title: "Clay Terracotta Tiles Painting",
    shortTitle: "Terracotta Tiles",
    tagline: "Restore the timeless beauty of your terracotta roof with expert painting services",
    category: "Residential Service",
    description: "Terracotta tiles are iconic to Queensland homes, and proper restoration can breathe new life into your roof while protecting it for decades. Our specialised techniques preserve the authentic character of your tiles while providing long-lasting protection against Brisbane's harsh UV rays and weather conditions.",
    heroImage: terracottaRoof,
    overviewImage: terracottaRoof,
    overviewHeading: "Professional Clay Terracotta Tiles Painting in Brisbane",
    overviewParagraphs: [
      "Terracotta tiles have been a staple of Australian architecture for over a century, prized for their natural beauty, durability, and excellent thermal properties. However, exposure to Brisbane's intense UV rays, tropical storms, and humidity can cause even the highest quality terracotta to fade, develop moss growth, and lose its protective qualities over time.",
      "Our specialist terracotta tile painting service addresses these issues comprehensively. We use breathable coatings specifically formulated for porous terracotta surfaces, ensuring moisture can escape while providing a robust protective barrier against the elements. This approach maintains the natural characteristics of your tiles while dramatically enhancing their appearance.",
      "Whether you're looking to restore your terracotta roof to its original colour or completely transform it with a modern shade, our team has the expertise to deliver exceptional results that will last for years to come."
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Long-Lasting Protection",
        description: "UV-resistant coatings protect your tiles from Brisbane's harsh sun, preventing fading and deterioration for up to 15 years."
      },
      {
        icon: "Home",
        title: "Improved Property Value",
        description: "A freshly painted terracotta roof can increase your property's street appeal and market value significantly."
      },
      {
        icon: "Droplets",
        title: "Weather Resistance",
        description: "Sealed surfaces repel water and prevent moss, lichen, and algae growth that can damage tiles over time."
      },
      {
        icon: "Sparkles",
        title: "Professional Finish",
        description: "Our expert application techniques ensure an even, consistent finish that enhances the natural texture of terracotta."
      }
    ],
    process: [
      {
        step: 1,
        title: "Initial Inspection",
        description: "Comprehensive roof assessment to identify damaged tiles, assess surface condition, and determine the best treatment approach."
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "High-pressure cleaning to remove decades of dirt, moss, and debris, followed by any necessary repairs to cracked or broken tiles."
      },
      {
        step: 3,
        title: "Treatment & Priming",
        description: "Application of fungicidal treatment to eliminate organic growth, followed by a specially formulated primer for optimal paint adhesion."
      },
      {
        step: 4,
        title: "Premium Coating",
        description: "Two coats of premium terracotta roof paint applied using professional spray equipment for a flawless, durable finish."
      },
      {
        step: 5,
        title: "Final Inspection",
        description: "Thorough quality control inspection, touch-ups if needed, and comprehensive cleanup of your property."
      }
    ],
    includes: [
      "Comprehensive roof inspection and condition report",
      "High-pressure cleaning of entire roof surface",
      "Replacement of up to 10 broken tiles (additional tiles quoted separately)",
      "Re-bedding and re-pointing of ridge capping",
      "Fungicidal and moss treatment",
      "Premium primer application",
      "Two coats of UV-resistant terracotta roof paint",
      "Gutter and valley cleaning",
      "Full site cleanup",
      "Up to 15 years warranty on materials and workmanship"
    ],
    faqs: [
      {
        question: "How often should terracotta tiles be repainted?",
        answer: "With quality coatings, terracotta roof paint typically lasts 12-15 years. However, this can vary based on your roof's exposure to elements, the original paint quality, and maintenance. We recommend an inspection every 5-7 years to assess condition."
      },
      {
        question: "Will painting damage my terracotta tiles?",
        answer: "No, our painting process actually protects your tiles. We use breathable coatings specifically designed for terracotta that allow moisture to escape while providing a protective barrier. Proper preparation ensures the paint adheres without damaging the tile surface."
      },
      {
        question: "What colours are available for terracotta roofs?",
        answer: "We offer a full range of colours from traditional terracotta reds and earth tones to modern charcoals, greens, and custom colours. Our team can help you select a shade that complements your home's style and meets any local council requirements."
      },
      {
        question: "How long does terracotta roof painting take?",
        answer: "A typical residential terracotta roof takes 3-5 days depending on size and condition. This includes preparation, cleaning, repairs, and multiple coat applications with appropriate drying time between coats."
      },
      {
        question: "Can you match the existing terracotta colour?",
        answer: "Yes, we can colour-match existing tiles or provide a complete colour change. Our team uses professional colour-matching technology to ensure consistency across your entire roof."
      }
    ],
    relatedServices: ["metal-roof", "concrete-tiles", "decramastic"],
    warranty: "Up to 15 years warranty on materials and workmanship"
  },
  "metal-roof": {
    title: "Metal Roof Restoration",
    shortTitle: "Metal Roof",
    tagline: "Revitalise your metal roof with professional rust treatment and premium coatings",
    category: "Restoration Service",
    description: "Metal roofs are durable, but over time they can develop rust, faded colour, and reduced reflectivity. Our metal roof restoration service treats corrosion and applies premium coatings. We use premium Australian-made coatings designed specifically for Queensland's climate, ensuring superior heat reflection and rust prevention for years to come.",
    heroImage: metalRoof,
    overviewImage: metalRoof,
    overviewHeading: "Professional Metal Roof Restoration in Brisbane",
    overviewParagraphs: [
      "Metal roofing is one of the most popular choices for Australian homes due to its durability, fire resistance, and longevity. However, Brisbane's coastal humidity, salt air, and intense UV exposure can accelerate corrosion and fade even the toughest Colorbond finishes over time.",
      "Our comprehensive metal roof restoration service goes beyond simple repainting. We address existing rust and corrosion at the source, apply rust-inhibiting primers, and finish with premium heat-reflective coatings that can significantly reduce your cooling costs while extending your roof's lifespan by decades.",
      "Whether you have corrugated iron, Colorbond, Zincalume, or any other metal roofing, our experienced team has the expertise and equipment to deliver a restoration that looks better than new."
    ],
    benefits: [
      {
        icon: "Thermometer",
        title: "Energy Efficiency",
        description: "Heat-reflective coatings can reduce roof surface temperature by up to 40%, significantly lowering your cooling costs."
      },
      {
        icon: "Shield",
        title: "Rust Prevention",
        description: "Professional rust treatment and inhibiting primers stop existing corrosion and prevent future rust development."
      },
      {
        icon: "Palette",
        title: "Colorbond Colours",
        description: "Choose from the full range of Colorbond colours to match or transform your home's appearance."
      },
      {
        icon: "Clock",
        title: "Extended Lifespan",
        description: "Quality restoration can extend your metal roof's life by 15-20 years, delaying costly replacement."
      }
    ],
    process: [
      {
        step: 1,
        title: "Condition Assessment",
        description: "Detailed inspection to identify rust spots, loose fasteners, damaged flashings, and areas requiring special attention."
      },
      {
        step: 2,
        title: "Rust Treatment",
        description: "Chemical rust conversion treatment on affected areas, followed by mechanical removal of loose rust and scale."
      },
      {
        step: 3,
        title: "Surface Preparation",
        description: "High-pressure cleaning to remove dirt and oxidation, plus replacement of corroded screws and damaged flashings."
      },
      {
        step: 4,
        title: "Primer Application",
        description: "Rust-inhibiting primer applied to entire roof surface, with additional coats on treated rust areas for maximum protection."
      },
      {
        step: 5,
        title: "Premium Topcoats",
        description: "Two coats of premium metal roof coating in your chosen colour, applied for optimal coverage and durability."
      }
    ],
    includes: [
      "Complete roof inspection and photographic report",
      "Chemical rust treatment for all affected areas",
      "Replacement of rusted screws and fasteners",
      "Flashing inspection and repair",
      "High-pressure surface cleaning",
      "Rust-inhibiting primer system",
      "Two coats of premium metal roof coating",
      "Heat-reflective coating option available",
      "Gutter cleaning and minor repairs",
      "Up to 12 years warranty on materials and workmanship"
    ],
    faqs: [
      {
        question: "Can you paint over existing rust?",
        answer: "Yes, but proper treatment is essential. We use a rust conversion chemical that neutralises existing rust, then apply rust-inhibiting primers before painting. This stops rust progression and provides a stable base for the topcoat."
      },
      {
        question: "How does heat-reflective coating work?",
        answer: "Heat-reflective coatings contain special pigments that reflect solar radiation rather than absorbing it. This can reduce roof surface temperature by up to 40°C on hot days, significantly reducing heat transfer into your home and lowering cooling costs."
      },
      {
        question: "Will the paint match my Colorbond gutters?",
        answer: "We use colour-matched coatings that closely replicate all standard Colorbond colours. In most cases, we can achieve an excellent match with your existing gutters, fascias, and trim."
      },
      {
        question: "How long does metal roof restoration take?",
        answer: "Most residential metal roofs take 2-4 days depending on size and the extent of rust treatment required. We work efficiently while ensuring proper drying times between coats."
      }
    ],
    relatedServices: ["flat-concrete", "industrial-coating", "concrete-tiles"],
    warranty: "Up to 12 years warranty on materials and workmanship"
  },
  "flat-concrete": {
    title: "Flat Concrete Roof Painting",
    shortTitle: "Flat Concrete",
    tagline: "Waterproof and protect your flat concrete roof with specialised membrane systems",
    category: "Commercial Service",
    description: "Flat concrete roofs require specialised waterproofing and coating to prevent leaks and heat absorption. Our service includes membrane application and heat-reflective coatings. Advanced waterproofing systems combined with expert application techniques keep your flat roof protected from Brisbane's intense sun and tropical rainfall.",
    heroImage: flatConcreteRoof,
    overviewImage: flatConcreteRoof,
    overviewHeading: "Professional Flat Concrete Roof Painting in Brisbane",
    overviewParagraphs: [
      "Flat concrete roofs present unique challenges that require specialised knowledge and materials. Unlike pitched roofs, flat surfaces must handle ponding water, thermal movement, and the full force of Brisbane's tropical storms without the benefit of water runoff.",
      "Our flat roof painting and waterproofing service addresses these challenges with proven membrane systems and heat-reflective coatings. We identify and repair cracks, apply flexible waterproof membranes, and finish with coatings designed to withstand the punishing conditions flat roofs endure.",
      "Whether it's a commercial building, apartment complex, or modern residential design, our team has the expertise to ensure your flat concrete roof remains watertight and protected for years to come."
    ],
    benefits: [
      {
        icon: "Droplets",
        title: "Complete Waterproofing",
        description: "Seamless membrane systems eliminate leaks and protect against Brisbane's heavy rainfall and storms."
      },
      {
        icon: "Sun",
        title: "Heat Reduction",
        description: "Reflective white coatings can reduce internal temperatures by up to 10°C, dramatically cutting cooling costs."
      },
      {
        icon: "Building2",
        title: "Commercial Grade",
        description: "Industrial-strength products designed for the demands of commercial and multi-story buildings."
      },
      {
        icon: "Wrench",
        title: "Crack Prevention",
        description: "Flexible membrane systems accommodate thermal movement, preventing future cracking and water ingress."
      }
    ],
    process: [
      {
        step: 1,
        title: "Leak Detection",
        description: "Comprehensive inspection using moisture meters and visual assessment to identify all water ingress points."
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "High-pressure cleaning, crack repair with flexible fillers, and removal of any failed coatings or membranes."
      },
      {
        step: 3,
        title: "Membrane Application",
        description: "Application of liquid-applied waterproof membrane, with reinforced detail work around penetrations and edges."
      },
      {
        step: 4,
        title: "Protective Coating",
        description: "Heat-reflective topcoat application designed for flat roof conditions and maximum UV protection."
      },
      {
        step: 5,
        title: "Drainage Check",
        description: "Final inspection including drainage system testing to ensure proper water flow to outlets."
      }
    ],
    includes: [
      "Detailed leak detection and moisture assessment",
      "High-pressure surface cleaning",
      "Crack and joint repair with flexible fillers",
      "Primer application for membrane adhesion",
      "Liquid-applied waterproof membrane",
      "Reinforced detail work at all penetrations",
      "Heat-reflective UV-stable topcoat",
      "Drainage system inspection and cleaning",
      "Detailed completion report",
      "Up to 10 years warranty on materials and workmanship"
    ],
    faqs: [
      {
        question: "Why do flat roofs need special treatment?",
        answer: "Unlike pitched roofs where water runs off quickly, flat roofs can experience ponding water during heavy rain. This requires specialised waterproof membranes that can handle constant water contact without deteriorating."
      },
      {
        question: "Can you fix existing leaks before painting?",
        answer: "Absolutely. Leak repair is a crucial first step. We use moisture meters to identify water ingress points and address all leaks with appropriate repairs before applying any coatings."
      },
      {
        question: "How effective are heat-reflective coatings?",
        answer: "Very effective. A quality reflective coating can reduce roof surface temperature by 40-50°C on a hot day, which can translate to a 5-10°C reduction in internal building temperature and significant air conditioning savings."
      },
      {
        question: "Is flat roof coating suitable for foot traffic?",
        answer: "We offer trafficable coating options for roofs that require regular access. These products provide additional durability and slip resistance while maintaining waterproofing properties."
      }
    ],
    relatedServices: ["industrial-coating", "metal-roof", "concrete-tiles"],
    warranty: "Up to 10 years warranty on materials and workmanship"
  },
  "decramastic": {
    title: "Decramastic Tile Painting",
    shortTitle: "Decramastic Tiles",
    tagline: "Expert restoration for your stone-coated decramastic tiles",
    category: "Specialist Service",
    description: "Decramastic tiles require specialist knowledge due to their unique stone-coated surface. Our experienced team understands the specific techniques needed to restore these vintage tiles. Our proven restoration process revitalises worn Decramastic tiles, delivering a factory-fresh appearance with enhanced weather resistance and colour retention.",
    heroImage: decramasticRoof,
    overviewImage: decramasticRoof,
    overviewHeading: "Professional Decramastic Tile Painting in Brisbane",
    overviewParagraphs: [
      "Decramastic tiles, with their distinctive pressed metal base and stone chip coating, were extremely popular in Brisbane during the 1960s and 1970s. While incredibly durable, these tiles present unique restoration challenges that require specialised knowledge and techniques.",
      "Over decades of exposure to Queensland's harsh climate, decramastic tiles often experience granule loss, fading, and in some cases, surface rust where the protective coating has worn through. Our specialist restoration process addresses each of these issues while preserving the unique character of your decramastic roof.",
      "Unlike painting other roof types, decramastic restoration requires specific preparation methods, flexible coatings that bond with the stone chip surface, and application techniques that ensure even coverage without obscuring the textured finish that makes these roofs distinctive."
    ],
    benefits: [
      {
        icon: "History",
        title: "Heritage Expertise",
        description: "Specialist knowledge of vintage decramastic tiles and appropriate restoration techniques."
      },
      {
        icon: "Layers",
        title: "Texture Preservation",
        description: "Our methods preserve the distinctive stone-chip texture while providing comprehensive protection."
      },
      {
        icon: "Palette",
        title: "Colour Matching",
        description: "Expert colour matching to restore or update your decramastic roof's appearance."
      },
      {
        icon: "Shield",
        title: "Granule Bonding",
        description: "Specialised coatings bond loose granules and prevent further surface deterioration."
      }
    ],
    process: [
      {
        step: 1,
        title: "Specialist Assessment",
        description: "Detailed inspection focusing on granule adhesion, rust spots, and areas of coating failure specific to decramastic tiles."
      },
      {
        step: 2,
        title: "Gentle Cleaning",
        description: "Lower-pressure cleaning techniques that remove dirt without dislodging the stone chip coating."
      },
      {
        step: 3,
        title: "Rust Treatment",
        description: "Treatment of any exposed metal areas with rust converter and inhibiting primer."
      },
      {
        step: 4,
        title: "Flexible Primer",
        description: "Application of specially formulated flexible primer designed for stone-chip surfaces."
      },
      {
        step: 5,
        title: "Multiple Thin Coats",
        description: "Application of multiple thin coats of textured roof coating for durability without obscuring surface detail."
      }
    ],
    includes: [
      "Specialist decramastic condition assessment",
      "Gentle low-pressure cleaning",
      "Rust spot treatment and conversion",
      "Replacement of severely damaged tiles where possible",
      "Flexible bonding primer application",
      "Multiple coats of textured roof coating",
      "Ridge cap resealing",
      "Valley and flashing inspection",
      "Complete site cleanup",
      "Up to 10 years warranty on materials and workmanship"
    ],
    faqs: [
      {
        question: "What makes decramastic tiles different to paint?",
        answer: "Decramastic tiles have a pressed steel base covered with stone chips bonded in place. This textured surface requires different preparation, cleaning pressure, and coating products compared to flat concrete or terracotta tiles."
      },
      {
        question: "Can badly worn decramastic tiles be restored?",
        answer: "In most cases, yes. Even tiles with significant granule loss can be restored with proper preparation and the right coating system. However, tiles with extensive rust damage may need individual replacement."
      },
      {
        question: "Will the texture be visible after painting?",
        answer: "Yes, our application technique uses multiple thin coats that protect the surface while preserving the distinctive stone-chip texture that characterises decramastic roofing."
      },
      {
        question: "Are replacement decramastic tiles still available?",
        answer: "Original decramastic tiles are no longer manufactured, but we maintain a stock of salvaged tiles for repairs. For larger areas, we can source compatible modern alternatives or recommend section replacement options."
      }
    ],
    relatedServices: ["terracotta-tiles", "concrete-tiles", "metal-roof"],
    warranty: "Up to 10 years warranty on materials and workmanship"
  },
  "concrete-tiles": {
    title: "Concrete Tiles Painting",
    shortTitle: "Concrete Tiles",
    tagline: "Transform your concrete tile roof with premium coatings and expert application",
    category: "Residential Service",
    description: "Concrete tiles are one of the most common roof types in Brisbane, and regular painting can dramatically extend their lifespan while transforming your home's appearance. Transform your concrete tile roof with our comprehensive painting system that offers superior breathability, fade resistance, and long-term protection.",
    heroImage: concreteTilesRoof,
    overviewImage: concreteTilesRoof,
    overviewHeading: "Professional Concrete Tiles Painting in Brisbane",
    overviewParagraphs: [
      "Concrete tile roofing is the most popular choice for Brisbane homes, found on everything from 1970s brick and tile houses to modern architectural designs. While these tiles are inherently durable, their porous surface makes them susceptible to moisture absorption, moss growth, and colour fading over time.",
      "Our comprehensive concrete tile painting service addresses all these issues while giving you the opportunity to completely transform your home's appearance. From thorough cleaning and repairs to premium paint application, we handle every aspect of your roof restoration with attention to detail.",
      "Whether you're looking to refresh your existing colour or make a dramatic change, our team can help you achieve the perfect finish while ensuring your roof is protected for years to come."
    ],
    benefits: [
      {
        icon: "Droplets",
        title: "Sealed & Protected",
        description: "Premium coatings seal the porous concrete surface, preventing water absorption and extending tile life."
      },
      {
        icon: "Palette",
        title: "Endless Colours",
        description: "Choose from hundreds of colours to match your home's style, from classic terracotta tones to modern charcoals."
      },
      {
        icon: "Leaf",
        title: "Moss Prevention",
        description: "Our coatings include fungicidal properties that prevent moss, lichen, and algae regrowth."
      },
      {
        icon: "TrendingUp",
        title: "Street Appeal",
        description: "A freshly painted roof is one of the most effective ways to boost your home's curb appeal and value."
      }
    ],
    process: [
      {
        step: 1,
        title: "Roof Inspection",
        description: "Complete assessment of tile condition, ridge capping, valleys, and all roofing components."
      },
      {
        step: 2,
        title: "High-Pressure Cleaning",
        description: "Professional-grade pressure washing to remove years of accumulated dirt, moss, and debris."
      },
      {
        step: 3,
        title: "Repairs & Bedding",
        description: "Replacement of broken tiles, re-bedding and re-pointing of ridge caps using flexible pointing compound."
      },
      {
        step: 4,
        title: "Primer Coat",
        description: "Application of penetrating sealer/primer that bonds with the concrete surface for optimal paint adhesion."
      },
      {
        step: 5,
        title: "Premium Topcoats",
        description: "Two coats of acrylic roof membrane in your chosen colour, applied for maximum coverage and durability."
      }
    ],
    includes: [
      "Comprehensive roof inspection",
      "High-pressure cleaning treatment",
      "Replacement of up to 10 broken tiles",
      "Complete re-bedding and re-pointing of ridge caps",
      "Valley and flashing inspection",
      "Penetrating primer/sealer application",
      "Two coats of premium acrylic roof membrane",
      "Gutter cleaning",
      "Complete site cleanup",
      "Up to 15 years warranty on materials and workmanship"
    ],
    faqs: [
      {
        question: "How long does concrete tile roof paint last?",
        answer: "With quality products and proper preparation, concrete tile roof paint typically lasts 12-15 years. Factors affecting longevity include roof exposure, tree coverage, and the original condition before painting."
      },
      {
        question: "Do I need to repair tiles before painting?",
        answer: "Yes, any cracked or broken tiles should be replaced before painting for the best results. Our service includes replacement of up to 10 tiles, with additional tiles quoted separately if needed."
      },
      {
        question: "Can you paint over existing roof paint?",
        answer: "In most cases, yes. We assess the condition of existing paint during our inspection. If the previous coating is well-adhered, we can paint over it after proper cleaning and preparation."
      },
      {
        question: "What about the ridge capping?",
        answer: "Ridge cap re-bedding and re-pointing is included in our service. This is essential as loose ridge caps can allow water entry and wind damage. We use flexible pointing compounds that accommodate movement."
      },
      {
        question: "Will painting affect my roof warranty?",
        answer: "Professional roof painting with quality products typically doesn't void manufacturer warranties. In fact, protective coatings can help maintain warranty coverage by preventing deterioration."
      }
    ],
    relatedServices: ["terracotta-tiles", "metal-roof", "decramastic"],
    warranty: "Up to 15 years warranty on materials and workmanship"
  },
  "industrial-coating": {
    title: "Industrial Coatings",
    shortTitle: "Industrial",
    tagline: "Heavy-duty roof coating solutions for commercial and industrial facilities",
    category: "Commercial Service",
    description: "Large-scale industrial roof coating for warehouses, factories, and commercial complexes. We deliver projects with minimal business disruption and maximum protection. We deliver large-scale roof coating solutions with minimal operational disruption, using commercial-grade products built for demanding industrial environments.",
    heroImage: industrialCoatingRoof,
    overviewImage: industrialCoatingRoof,
    overviewHeading: "Professional Industrial Roof Coatings in Brisbane",
    overviewParagraphs: [
      "Industrial and commercial roofing projects require a different approach to residential work. With larger scales, stricter safety requirements, and the need to minimise business disruption, these projects demand experienced professionals who understand the unique challenges involved.",
      "Our industrial coating services cover warehouses, factories, shopping centres, office buildings, schools, and multi-story developments throughout Brisbane and South East Queensland. We work with facility managers and building owners to schedule work around operations, ensuring minimal impact on your business.",
      "Using commercial-grade products designed for heavy-duty applications, we deliver long-lasting protection that can withstand industrial conditions including chemical exposure, heavy foot traffic, and extreme weather events."
    ],
    benefits: [
      {
        icon: "Building2",
        title: "Large-Scale Capability",
        description: "Experienced teams and equipment for projects of any size, from small commercial buildings to major industrial facilities."
      },
      {
        icon: "Clock",
        title: "Minimal Disruption",
        description: "Flexible scheduling including weekends and after-hours work to minimise impact on your business operations."
      },
      {
        icon: "ShieldCheck",
        title: "Safety Compliant",
        description: "Full compliance with workplace health and safety requirements, including working at heights and confined spaces."
      },
      {
        icon: "Zap",
        title: "Energy Savings",
        description: "Heat-reflective coatings can dramatically reduce cooling costs for large commercial spaces."
      }
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "Comprehensive evaluation of roof condition, access requirements, safety considerations, and project scope."
      },
      {
        step: 2,
        title: "Project Planning",
        description: "Detailed project plan including scheduling around your operations, safety protocols, and resource allocation."
      },
      {
        step: 3,
        title: "Surface Preparation",
        description: "Industrial cleaning equipment and rust treatment for large metal roof areas, with appropriate containment measures."
      },
      {
        step: 4,
        title: "Coating Application",
        description: "Application of commercial-grade primer and coating systems using airless spray equipment for efficiency."
      },
      {
        step: 5,
        title: "Quality Assurance",
        description: "Comprehensive inspection, thickness testing, and detailed documentation of completed work."
      }
    ],
    includes: [
      "Detailed site assessment and project planning",
      "Comprehensive safety management plan",
      "Industrial-strength surface preparation",
      "Rust treatment and structural repairs",
      "Commercial-grade primer systems",
      "Premium industrial roof coating",
      "Heat-reflective coating options",
      "Progress documentation and reporting",
      "Final inspection and handover",
      "Customised warranty terms for commercial projects"
    ],
    faqs: [
      {
        question: "Can you work around our business operations?",
        answer: "Absolutely. We understand business continuity is essential. We can schedule work during quiet periods, weekends, or after-hours to minimise disruption. Our project managers work with you to develop a schedule that suits your operations."
      },
      {
        question: "What types of industrial facilities do you service?",
        answer: "We work with all types of commercial and industrial buildings including warehouses, factories, shopping centres, office buildings, schools, hospitals, and multi-story developments. No project is too large for our experienced team."
      },
      {
        question: "Do you handle all safety requirements?",
        answer: "Yes. We maintain comprehensive safety management systems including Safe Work Method Statements, working at heights certifications, and appropriate insurance coverage. Our teams are trained in industrial safety protocols."
      },
      {
        question: "How do you handle large roof areas efficiently?",
        answer: "Our industrial projects utilise airless spray equipment and larger teams to cover significant areas efficiently. We can complete major projects in timeframes that minimise business impact while maintaining quality."
      },
      {
        question: "Can you provide maintenance programs?",
        answer: "Yes, we offer scheduled maintenance programs for commercial clients that include regular inspections and touch-up work. This proactive approach extends coating life and identifies issues before they become major problems."
      }
    ],
    relatedServices: ["flat-concrete", "metal-roof", "concrete-tiles"],
    warranty: "Customised warranty terms for commercial projects"
  }
};

// Helper function to get related services data
export const getRelatedServicesData = (serviceIds: string[]): RelatedService[] => {
  return serviceIds.map(id => ({
    id,
    title: serviceData[id]?.shortTitle || serviceData[id]?.title || "",
    image: serviceData[id]?.heroImage || "",
    description: serviceData[id]?.description || ""
  })).filter(s => s.title);
};

export const suburbs = [
  "Brisbane CBD", "South Brisbane", "Fortitude Valley", "New Farm", "Paddington",
  "Milton", "Toowong", "Indooroopilly", "Chapel Hill", "Kenmore",
  "Taringa", "St Lucia", "West End", "Woolloongabba", "Kangaroo Point",
  "Bulimba", "Hawthorne", "Morningside", "Coorparoo", "Camp Hill",
  "Carina", "Carindale", "Mount Gravatt", "Holland Park", "Sunnybank",
  "Salisbury", "Rocklea", "Acacia Ridge", "Greenslopes", "Annerley",
  "Moorooka", "Tarragindi", "Upper Mount Gravatt", "Eight Mile Plains",
  "Chermside", "Kedron", "Stafford", "Everton Park", "McDowall",
  "Aspley", "Geebung", "Zillmere", "Bracken Ridge", "Sandgate",
  "Shorncliffe", "Brighton", "Redcliffe", "Scarborough", "Margate",
  "North Lakes", "Mango Hill", "Kallangur", "Petrie", "Albany Creek",
  "Eatons Hill", "The Gap", "Ferny Hills", "Mitchelton", "Enoggera",
  "Ashgrove", "Bardon", "Rainworth", "Red Hill", "Kelvin Grove"
];
