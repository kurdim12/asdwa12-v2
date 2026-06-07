// Single source of truth for site content.
// Bilingual labels (ar/en) are retained for future localization; the UI renders English.

export interface Project {
    name: string;
    description: string;
    folder?: string;
    sector: string;
    year?: string;
    location?: string;
    client?: string;
    scope?: string;
    featured?: boolean;
}

export interface ProjectCategory {
    id: string;
    name: { ar: string; en: string };
    projects: Project[];
}

export const COMPANY_DATA = {
    company: {
        name: {
            ar: "شركة مروان احمد الكردي وشركاه ذ.م.م",
            en: "Marwan Ahmad Alkurdi & Partners Co. Ltd",
        },
        shortName: { ar: "مروان الكردي", en: "M. Kurdi" },
        domain: "mkurdi.com",
        foundedYear: 1999,
        established: "25 years",
        tagline: "Engineering the foundations of modern Jordan.",
    },

    contact: {
        phone: "+962 6 581 9489",
        phoneRaw: "0096265819489",
        fax: "+962 6 581 9488",
        email: "info@mkurdi.com",
        address: {
            ar: "عمان - الدوار السابع – ش: عبدالله غوشة - مقابل فندق جنيفا - عمارة رقم 17",
            en: "7th Circle, Abdullah Ghosheh St. — Opposite Geneva Hotel, Building No. 17, Amman, Jordan",
        },
        mapEmbed: "https://www.google.com/maps/d/embed?mid=1h98aurr-Z8FkQYUnQImuuvd1dZU",
    },

    social: {
        facebook: "https://www.facebook.com/mkurdiCom",
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "References", href: "/references" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" },
    ],

    // Trust-as-content: headline metrics surfaced in the main hierarchy.
    stats: [
        { value: "25", suffix: "+", label: "Years of Experience" },
        { value: "50", suffix: "+", label: "Major Projects Delivered" },
        { value: "120", suffix: "+", label: "Engineers & Specialists" },
        { value: "9001", suffix: "", label: "ISO Certified" },
    ],

    // Selected public & private sector clients (placeholder list — confirm/replace).
    clients: [
        "Ministry of Water & Irrigation",
        "Jordan Valley Authority",
        "Aqaba Development Corporation",
        "Water Authority of Jordan",
        "Ministry of Public Works & Housing",
        "Greater Amman Municipality",
        "Disi Water Company",
        "National Electric Power Co.",
    ],

    // Capability areas.
    sectors: [
        {
            id: "dams",
            title: "Dams & Water Retention",
            description:
                "Earth-fill and concrete dams, diversion works and reservoirs engineered for decades of service.",
        },
        {
            id: "power",
            title: "Power Stations",
            description:
                "Civil works for thermal and energy infrastructure, built to demanding operational tolerances.",
        },
        {
            id: "infrastructure",
            title: "Infrastructure",
            description:
                "National-scale pipelines, corridors and utility networks that connect the Kingdom.",
        },
        {
            id: "roads",
            title: "Roads & Bridges",
            description:
                "Highways, interchanges and parkways delivered to international safety standards.",
        },
        {
            id: "injection",
            title: "Specialized Injection",
            description:
                "Ground improvement, grouting and geo-injection for the most challenging soil conditions.",
        },
        {
            id: "tourism",
            title: "Tourism & Recreation",
            description:
                "Landmark developments that shape Jordan's destinations and visitor experiences.",
        },
    ],

    services: {
        mainServices: [
            {
                id: "service1",
                title: { ar: "الشركة الدولية للحقن", en: "International Injection Company" },
                description:
                    "Specialized injection, grouting and ground-improvement services that stabilize foundations and water-retention structures under the most demanding geotechnical conditions.",
                features: [
                    "High-pressure & geo-polymer grouting",
                    "Dam foundation treatment",
                    "Soil stabilization & sealing",
                    "Certified specialist crews",
                ],
            },
            {
                id: "service2",
                title: { ar: "المعدات الخاصة", en: "Special Equipment" },
                description:
                    "A modern fleet of specialized construction equipment and machinery, operated by certified teams and available with round-the-clock technical support across the Kingdom.",
                features: [
                    "Heavy plant & specialized rigs",
                    "Certified operators",
                    "24/7 field support",
                    "Maintained to ISO standards",
                ],
            },
        ],
    },

    projects: {
        categories: [
            {
                id: "dams",
                name: { ar: "السدود", en: "Dams" },
                projects: [
                    {
                        name: "AL WHDAHA DAM",
                        folder: "images/projects/AL WHDAHA DAM",
                        sector: "Dams",
                        year: "2006",
                        location: "Yarmouk River, Jordan",
                        client: "Jordan Valley Authority",
                        scope: "Dam construction & foundation grouting",
                        description:
                            "A major roller-compacted dam on the Yarmouk River — one of the Kingdom's most significant water-retention structures.",
                        featured: true,
                    },
                ],
            },
            {
                id: "power_stations",
                name: { ar: "محطات الطاقة", en: "Power Stations" },
                projects: [
                    {
                        name: "AQABA THERMAL POWER STATION",
                        folder: "images/projects/AQABA THERMAL POWER STATION",
                        sector: "Power Stations",
                        year: "2009",
                        location: "Aqaba, Jordan",
                        client: "National Electric Power Co.",
                        scope: "Heavy civil works",
                        description:
                            "Civil and structural works for a thermal power station serving the southern grid from Aqaba.",
                    },
                ],
            },
            {
                id: "infrastructure",
                name: { ar: "البنية التحتية", en: "Infrastructure" },
                projects: [
                    {
                        name: "Amman Development Corridor",
                        folder: "images/projects/Amman Development Corridor",
                        sector: "Infrastructure",
                        year: "2008",
                        location: "Amman, Jordan",
                        client: "Ministry of Public Works & Housing",
                        scope: "Corridor & earthworks",
                        description:
                            "A major development corridor reshaping connectivity around the capital.",
                    },
                    {
                        name: "Aqaba Entrance",
                        folder: "images/projects/Aqaba Entrance",
                        sector: "Infrastructure",
                        year: "2011",
                        location: "Aqaba, Jordan",
                        client: "Aqaba Development Corporation",
                        scope: "Gateway development",
                        description:
                            "A landmark gateway development marking the entrance to the city of Aqaba.",
                        featured: true,
                    },
                    {
                        name: "Dissi Pipeline",
                        folder: "images/projects/Dissi Pipeline",
                        sector: "Infrastructure",
                        year: "2013",
                        location: "Disi — Amman, Jordan",
                        client: "Disi Water Company",
                        scope: "Water conveyance pipeline",
                        description:
                            "One of the Kingdom's most ambitious water-conveyance schemes, carrying water 325 km from the Disi aquifer to Amman.",
                        featured: true,
                    },
                ],
            },
            {
                id: "tourism",
                name: { ar: "السياحة والترفيه", en: "Tourism & Recreation" },
                projects: [
                    {
                        name: "Ayla",
                        folder: "images/projects/Ayla",
                        sector: "Tourism & Recreation",
                        year: "2014",
                        location: "Aqaba, Jordan",
                        client: "Ayla Oasis Development Co.",
                        scope: "Civil & marine works",
                        description:
                            "A flagship waterfront tourism development on the Red Sea coast.",
                    },
                    {
                        name: "Dead Sea Panorama",
                        folder: "images/projects/Dead Sea Panorama",
                        sector: "Tourism & Recreation",
                        year: "2006",
                        location: "Dead Sea, Jordan",
                        client: "Ministry of Tourism & Antiquities",
                        scope: "Visitor complex & access",
                        description:
                            "A panoramic viewpoint and visitor complex overlooking the lowest point on Earth.",
                        featured: true,
                    },
                ],
            },
            {
                id: "roads",
                name: { ar: "الطرق", en: "Roads" },
                projects: [
                    {
                        name: "Park Way",
                        folder: "images/projects/Park Way",
                        sector: "Roads & Bridges",
                        year: "2010",
                        location: "Amman, Jordan",
                        client: "Greater Amman Municipality",
                        scope: "Roadway construction",
                        description: "Parkway road construction enhancing urban mobility.",
                    },
                    {
                        name: "Quds Swiemeh Road",
                        folder: "images/projects/Quds Swiemeh Road",
                        sector: "Roads & Bridges",
                        year: "2012",
                        location: "Swiemeh, Jordan",
                        client: "Ministry of Public Works & Housing",
                        scope: "Roadway construction",
                        description: "A key road link serving the Dead Sea region.",
                    },
                ],
            },
        ] as ProjectCategory[],
        featured: ["Dissi Pipeline", "AL WHDAHA DAM", "Dead Sea Panorama", "Aqaba Entrance"],
    },
};

export type CompanyData = typeof COMPANY_DATA;
