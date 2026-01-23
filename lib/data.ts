export const COMPANY_DATA = {
    "company": {
        "name": {
            "ar": "شركة مروان احمد الكردي وشركاه ذ.م.م",
            "en": "Marwan Ahmad Alkurdi & Partners Co. Ltd"
        },
        "shortName": {
            "ar": "مروان الكردي",
            "en": "M. Kurdi"
        },
        "domain": "mkurdi.com",
        "established": "25 years experience",
        "logo": {
            "high": "images/logo.png",
            "low": "images/logo.png",
            "favicon": "images/logo.png"
        }
    },
    "contact": {
        "phone": "0096265819489",
        "fax": "0096265819488",
        "email": "info@mkurdi.com",
        "address": {
            "ar": "عمان - الدوار السابع –ش:عبدالله غوشة-مقابل فندق جنيفا-عمارة رقم 17",
            "en": "Amman - 7th Circle - Abdullah Ghosheh St. - Opposite Geneva Hotel - Building No. 17"
        },
        "mapEmbed": "https://www.google.com/maps/d/embed?mid=1h98aurr-Z8FkQYUnQImuuvd1dZU"
    },
    "social": {
        "facebook": "https://www.facebook.com/mkurdiCom"
    },
    "navigation": {
        "mainMenu": [
            {
                "id": "home",
                "label": { "ar": "الرئيسية", "en": "Home" },
                "url": "/"
            },
            {
                "id": "about",
                "label": { "ar": "نبذة عن الشركة", "en": "About" },
                "url": "/about"
            },
            {
                "id": "services",
                "label": { "ar": "الخدمات", "en": "Services" },
                "url": "/services"
            },
            {
                "id": "projects",
                "label": { "ar": "المشاريع", "en": "Projects" },
                "url": "/projects",
                "submenu": [
                    {
                        "id": "ongoing",
                        "label": { "ar": "مشاريع قيد التنفيذ", "en": "Ongoing Projects" },
                        "url": "/projects?category=ongoing"
                    },
                    {
                        "id": "completed",
                        "label": { "ar": "مشاريع تم الانتهاء منها", "en": "Completed Projects" },
                        "hasCategories": true
                    }
                ]
            },
            {
                "id": "references",
                "label": { "ar": "المراجع", "en": "References" },
                "url": "/references"
            },
            {
                "id": "news",
                "label": { "ar": "الأخبار", "en": "News" },
                "url": "/news"
            },
            {
                "id": "contact",
                "label": { "ar": "اتصل بنا", "en": "Contact" },
                "url": "/contact"
            }
        ],
        "languageSwitcher": {
            "ar": "/",
            "en": "/en"
        }
    },
    "about": {
        "sections": [
            {
                "id": "about_company",
                "title": { "ar": "نبذة عن الشركة", "en": "About the Company" },
                "pageId": 7,
                "icon": "fa-info-circle"
            },
            {
                "id": "company_history",
                "title": { "ar": "نبذة عن تاريخ الشركة", "en": "Company History" },
                "pageId": 8
            },
            {
                "id": "chairman_word",
                "title": { "ar": "كلمة الرئيس", "en": "Chairman's Word" },
                "pageId": 9
            },
            {
                "id": "branches",
                "title": { "ar": "الفروع", "en": "Branches" },
                "pageId": 10
            }
        ],
        "certifications": {
            "folder": "كتالوج الشركة/Cerificates",
            "description": "Company certifications and awards"
        }
    },
    "services": {
        "mainServices": [
            {
                "id": "service1",
                "title": { "ar": "الشركة الدولية للحقن", "en": "International Injection Company" },
                "pageId": 15,
                "icon": "images/s1.png",
                "description": "Specialized injection services for construction and infrastructure projects"
            },
            {
                "id": "service2",
                "title": { "ar": "المعدات الخاصة", "en": "Special Equipment" },
                "pageId": 17,
                "icon": "images/s2.png",
                "description": "Specialized construction equipment and machinery"
            }
        ]
    },
    "projects": {
        "categories": [
            {
                "id": "dams",
                "name": { "ar": "السدود", "en": "Dams" },
                "projects": [
                    {
                        "name": "AL WHDAHA DAM",
                        "folder": "images/projects/AL WHDAHA DAM",
                        "photos": 9,
                        "description": "Major dam construction project"
                    }
                ]
            },
            {
                "id": "power_stations",
                "name": { "ar": "محطات الطاقة", "en": "Power Stations" },
                "projects": [
                    {
                        "name": "AQABA THERMAL POWER STATION",
                        "folder": "images/projects/AQABA THERMAL POWER STATION",
                        "photos": 1,
                        "description": "Thermal power station in Aqaba"
                    }
                ]
            },
            {
                "id": "infrastructure",
                "name": { "ar": "البنية التحتية", "en": "Infrastructure" },
                "projects": [
                    {
                        "name": "Amman Development Corridor",
                        "folder": "images/projects/Amman Development Corridor",
                        "photos": 19,
                        "description": "Major development corridor project in Amman"
                    },
                    {
                        "name": "Aqaba Entrance",
                        "folder": "images/projects/Aqaba Entrance",
                        "photos": 21,
                        "description": "Aqaba city entrance development"
                    },
                    {
                        "name": "Dissi Pipeline",
                        "folder": "images/projects/Dissi Pipeline",
                        "photos": 683,
                        "description": "Major water pipeline infrastructure project",
                        "featured": true
                    }
                ]
            },
            {
                "id": "tourism",
                "name": { "ar": "السياحة والترفيه", "en": "Tourism & Recreation" },
                "projects": [
                    {
                        "name": "Ayla",
                        "folder": "images/projects/Ayla",
                        "photos": 1,
                        "description": "Luxury tourism development project"
                    },
                    {
                        "name": "Dead Sea Panorama",
                        "folder": "images/projects/Dead Sea Panorama",
                        "photos": 15,
                        "description": "Dead Sea panoramic viewpoint and tourist facility"
                    }
                ]
            },
            {
                "id": "roads",
                "name": { "ar": "الطرق", "en": "Roads" },
                "projects": [
                    {
                        "name": "Park Way",
                        "folder": "images/projects/Park Way",
                        "description": "Parkway road construction"
                    },
                    {
                        "name": "Quds Swiemeh Road",
                        "folder": "images/projects/Quds Swiemeh Road",
                        "description": "Road construction project"
                    }
                ]
            }
        ],
        "featuredProjects": [
            "Dissi Pipeline",
            "AL WHDAHA DAM",
            "Aqaba Entrance",
            "Dead Sea Panorama"
        ]
    }
}
