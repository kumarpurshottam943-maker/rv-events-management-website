export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'wedding' | 'decor' | 'entry' | 'parties' | 'corporate';
  description: string;
  highlights: string[];
  image: string;
  priceStartingFrom: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'stages' | 'entries' | 'haldi_mehandi' | 'weddings' | 'home';
  image: string;
  location: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  eventType: string;
  rating: number;
  date: string;
  quote: string;
  hindiQuote?: string;
}

export const BUSINESS_INFO = {
  name: "RV Events and Management Farrukhabad",
  hindiName: "आर्वी इवेंट्स एंड मैनेजमेंट फर्रुखाबाद",
  tagline: "Transforming Your Dreams into Royal Realities in Farrukhabad",
  subTagline: "Expert Wedding Planning, Luxury Stages, and Grand Bride & Groom Entries",
  founder: "Vishal",
  role: "Founder & Lead Event Director",
  phone: "+91 8090123175",
  rawPhone: "8090123175",
  whatsappNumber: "918090123175",
  address: "Bewar Rd, Bholepur, Fatehgarh (Farrukhabad), Uttar Pradesh - 209601",
  landmark: "Near Government Polytechnic Farrukhabad, Bholepur Overhead Water Tank",
  googlePlusCode: "9J87+X5 Farrukhabad, Uttar Pradesh",
  googleMapsUrl: "https://maps.google.com/?q=RV+EVENTS+AND+MANAGEMENT+FARRUKHABAD+Bewar+Rd+Bholepur+Fatehgarh+Farrukhabad+209602",
  instagram: "@rv_events_and_management_fbd",
  instagramUrl: "https://instagram.com/rv_events_and_management_fbd",
  rating: 5.0,
  reviewCount: 4,
  eventsCompleted: 120,
  workingHours: "Open Daily · 8:00 AM – 9:00 PM",
  serviceAreas: ["Farrukhabad", "Fatehgarh", "Bholepur", "Kaimganj", "Bewar", "Mohammadabad", "Kannauj", "Chhibramau"],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "wedding-planning",
    title: "Royal Wedding & Engagement Planning",
    hindiTitle: "शाही विवाह एवं सगाई समारोह",
    category: "wedding",
    description: "Complete turnkey royal wedding management from Varmala themes to guest hospitality, mandap architecture, and flawless ritual scheduling.",
    highlights: ["Bespoke Mandap Setup", "Varmala Stage Effects", "Hospitality Management", "Ritual Coordination"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹45,000"
  },
  {
    id: "grand-entry",
    title: "Grand Bride & Groom Entry Concepts",
    hindiTitle: "भव्य दूल्हा एवं दुल्हन रॉयल एंट्री",
    category: "entry",
    description: "Farrukhabad's most talked-about bride and groom grand entries with cold pyros, dry ice clouds, floral umbrellas, vintage chariots, and royal palkis.",
    highlights: ["Dry Ice / Cloud Mat Entry", "Cold Firework Sparkulars", "Floral Chhatar & Royal Palki", "Hydraulic Revolving Platforms"],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹15,000"
  },
  {
    id: "stage-decoration",
    title: "Royal Stage & Reception Decoration",
    hindiTitle: "शाही स्टेज एवं रिसेप्शन डेकोरेशन",
    category: "decor",
    description: "Regal stage setups crafted with gold pillars, velvet drapes, fresh imported exotic flowers, ambient warm LED spotlights, and chandelier backdrops.",
    highlights: ["Imperial Floral Walls", "Sofa & Royal Throne Setup", "Modern Architectural Arches", "Intelligent Stage Lighting"],
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹25,000"
  },
  {
    id: "haldi-mehandi",
    title: "Haldi & Mehandi Theme Decors",
    hindiTitle: "हल्दी एवं मेहंदी थीम डेकोर",
    category: "decor",
    description: "Vibrant yellow marigold setups, Rajasthani umbrellas, Bohemian cane swings, floral tubs for Haldi bath, and lively photo backdrops.",
    highlights: ["Traditional Floral Urli Tubs", "Custom Printed Backdrops", "Marigold & Gota Patti Hangings", "Photobooth Props & Signage"],
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹12,000"
  },
  {
    id: "home-decoration",
    title: "Home & Lawn Festive Decoration",
    hindiTitle: "घर एवं लॉन की भव्य सजावट",
    category: "decor",
    description: "Transform your home, courtyard, or garden for pre-wedding festivities with fairy lighting cascades, floral entrances, and illuminated paths.",
    highlights: ["Exterior Façade Lighting", "Doorway Torans & Rangoli", "Terrace Sitting Lounges", "Pathway Lanterns"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹10,000"
  },
  {
    id: "birthday-parties",
    title: "Birthday & Anniversary Celebrations",
    hindiTitle: "जन्मदिन एवं सालगिरह पार्टी",
    category: "parties",
    description: "From 1st birthday cartoon extravaganzas to milestone silver jubilee galas with balloon garlands, LED numbers, and cake-cutting stage setups.",
    highlights: ["Theme Balloon Arches", "Neon Light Signages", "Theme Cake Tables", "Kids Entertainment & Music"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹8,000"
  },
  {
    id: "catering-services",
    title: "Professional Catering & Royal Banquets",
    hindiTitle: "शानदार कैटरिंग एवं शाही दावत",
    category: "wedding",
    description: "Delicious multi-cuisine catering service featuring authentic Awadhi, North Indian, Chaat counters, continental live stalls, and royal desserts.",
    highlights: ["Hygienic Live Cooking Stalls", "Uniformed Waitstaff", "Deluxe Crockery & Buffet Layout", "Custom Regional Menus"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹450 / plate"
  },
  {
    id: "corporate-school",
    title: "Corporate & School/College Events",
    hindiTitle: "कॉर्पोरेट एवं स्कूल/कॉलेज उत्सव",
    category: "corporate",
    description: "Crisp, professional event management for annual functions, felicitation ceremonies, brand launches, conferences, and sports day setups.",
    highlights: ["Trussing & Line Array Sound", "Podiums & Stage LED Walls", "Seating & Canopy Marquees", "Anchor & Event Flow Timing"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹30,000"
  },
  {
    id: "baby-shower",
    title: "Baby Shower & Godh Bharai Planning",
    hindiTitle: "गोद भराई एवं बेबी शॉवर",
    category: "parties",
    description: "Delightful pastel and floral themes honoring the mother-to-be with cozy seating, photo spots, and intimate celebration arrangements.",
    highlights: ["Pastel Floral Backdrops", "Personalized Welcome Boards", "Traditional Ritual Thali Setup", "Intimate Seating Lounges"],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    priceStartingFrom: "₹10,000"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Imperial Gold & Velvet Wedding Mandap",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    location: "Fatehgarh Lawn, Farrukhabad",
    description: "Grand mandap with golden pillars, fresh tuberose and red rose dome, crystal chandeliers."
  },
  {
    id: "gal-2",
    title: "Royal Grand Bride Entry with Cold Pyro",
    category: "entries",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    location: "Bholepur Resort, Farrukhabad",
    description: "Magical low-fog cloud smoke combined with 8 synchronized smokeless cold pyro sparklers."
  },
  {
    id: "gal-3",
    title: "Regal Stage with Golden Arch & Cascading Florals",
    category: "stages",
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=1200&q=80",
    location: "Bewar Road Palace, Farrukhabad",
    description: "Symmetrical floral architecture with golden mirror work, velvet Maharaja settee, and warm spotlights."
  },
  {
    id: "gal-4",
    title: "Vibrant Haldi Garden Theme with Floral Urli",
    category: "haldi_mehandi",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    location: "Kaimganj Farmhouse",
    description: "Bright yellow marigold drape curtains, carved brass urli with rose water, and festive photo swing."
  },
  {
    id: "gal-5",
    title: "Grand Varmala Revolving Stage with Laser Fireworks",
    category: "entries",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    location: "Farrukhabad City Center",
    description: "Synchronized hydraulic revolving Varmala platform with flower shower and CO2 jet effects."
  },
  {
    id: "gal-6",
    title: "Heritage Home Courtyard Wedding Illumination",
    category: "home",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    location: "Bholepur, Farrukhabad",
    description: "Curated warm golden fairy light tunnels and entrance torans for intimate Sangeet evening."
  },
  {
    id: "gal-7",
    title: "Royal Mehandi Lounge with Bohemian Cane Accents",
    category: "haldi_mehandi",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
    location: "Fatehgarh Cantt Area",
    description: "Colorful cushions, Rajasthani umbrella ceiling, and comfortable bridal seating."
  },
  {
    id: "gal-8",
    title: "Deluxe Banquet Reception & Live Food Counters",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    location: "Mohammadabad Grand Resort",
    description: "Grand reception layout accommodating 800+ guests with illuminated buffet stations."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "rev-1",
    clientName: "Rahul & Priyanka Sharma",
    location: "Fatehgarh, Farrukhabad",
    eventType: "Grand Royal Wedding",
    rating: 5,
    date: "February 2026",
    quote: "Vishal and his RV Events team turned our wedding into a royal fairy tale! The bride entry with cloud fog and cold fire was so magical that our guests are still talking about it. Super punctual, polite, and within our exact budget.",
    hindiQuote: "विशाल जी ने हमारी शादी को सच में यादगार बना दिया। स्टेज और दुल्हन की एंट्री बेहद खूबसूरत थी।"
  },
  {
    id: "rev-2",
    clientName: "Dr. Alok Verma",
    location: "Bholepur, Farrukhabad",
    eventType: "Daughter's Engagement & Sangeet",
    rating: 5,
    date: "January 2026",
    quote: "Very reliable team right here in Bholepur. They handled our stage decor, sound system, and family home lighting seamlessly. Honest pricing and Vishal personally supervised everything till midnight.",
    hindiQuote: "फर्रुखाबाद में इनसे बेहतर और भरोसेमंद इवेंट मैनेजमेंट कोई नहीं है। 100% संतुष्टि मिली।"
  },
  {
    id: "rev-3",
    clientName: "Amitabh & Neha Saxena",
    location: "Bewar Road, Farrukhabad",
    eventType: "Haldi-Mehandi Theme Setup",
    rating: 5,
    date: "November 2025",
    quote: "The marigold floral decor and swing setup for my sister's Haldi was Pinterest-worthy! Everyone loved taking photos at the selfie booth. Thank you RV Events for making it unforgettable.",
    hindiQuote: "हल्दी का सेटअप बहुत सुंदर था, फूलों की ताज़गी और सजावट दोनों नंबर 1 थीं।"
  },
  {
    id: "rev-4",
    clientName: "Sanjay Tiwari",
    location: "Kaimganj, Farrukhabad",
    eventType: "25th Wedding Anniversary Gala",
    rating: 5,
    date: "October 2025",
    quote: "Top-notch professionalism. Stage decoration, guest seating, catering coordination, and photography were managed without a single glitch. 5 stars well deserved!",
    hindiQuote: "समय के पाबंद और हर काम में पूरी परफेक्शन। धन्यवाद विशाल भैया!"
  }
];

export const FAQ_ITEMS = [
  {
    q: "How far in advance should we book RV Events for our wedding or party in Farrukhabad?",
    hindiQ: "शादी या पार्टी के लिए कितने दिन पहले बुकिंग करानी चाहिए?",
    a: "For weddings and peak auspicious dates (सहालग सीजन), we recommend booking at least 3 to 6 weeks in advance to reserve prime props and entry machinery. For birthdays and home events, 4 to 7 days advance notice is sufficient.",
    hindiA: "शादी के सीजन में कम से कम 3 से 4 हफ्ते पहले बुकिंग कराना बेहतर रहता है। छोटे कार्यक्रमों के लिए 4-5 दिन पहले भी संपर्क कर सकते हैं।"
  },
  {
    q: "Can RV Events customize themes according to our specific budget?",
    hindiQ: "क्या हमारे बजट के अनुसार सजावट और पैकेज कस्टमाइज हो सकता है?",
    a: "Yes, 100%! Vishal personally sits down with every family to design a custom package that matches your taste and budget, whether it's an intimate home gathering or a royal mega-wedding.",
    hindiA: "बिल्कुल! हम हर परिवार के बजट और पसंद को ध्यान में रखकर ही पैकेज तैयार करते हैं।"
  },
  {
    q: "Do you provide services in nearby areas like Kaimganj, Bewar, and Kannauj?",
    hindiQ: "क्या फर्रुखाबाद के बाहर जैसे कायमगंज, बेवर या कन्नौज में भी आपकी सर्विस मिलती है?",
    a: "Yes! While our central hub is at Bholepur, Fatehgarh (Farrukhabad), we regularly execute events across Fatehgarh, Kaimganj, Bewar, Mohammadabad, Chhibramau, and Kannauj.",
    hindiA: "हाँ! हम फर्रुखाबाद, फतेहगढ़, कायमगंज, बेवर, छिबरामऊ एवं आसपास के सभी क्षेत्रों में सेवाएं देते हैं।"
  },
  {
    q: "What special bride and groom entry options do you have?",
    hindiQ: "दूल्हा और दुल्हन की एंट्री के लिए क्या खास विकल्प उपलब्ध हैं?",
    a: "We offer cold firework sparkulars, dry ice fog carpets, floral royal chhatar, vintage buggy / chariot, hydraulic revolving stages, LED dhol welcome processions, and custom audio theme intros.",
    hindiA: "कोल्ड आतिशबाजी, बादलों जैसा ड्राई-आइस फॉग, रॉयल पालकी, विंटेज बग्गी, हाइड्रोलिक रिवॉल्विंग स्टेज और धमाकेदार ढोल एंट्री उपलब्ध हैं।"
  }
];
