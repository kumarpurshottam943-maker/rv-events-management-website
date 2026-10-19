import type { Metadata } from 'next';
import './globals.css';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'RV Events and Management Farrukhabad | Royal Weddings & Luxury Events',
  description: 'Premier 5.0-star event planner in Farrukhabad & Fatehgarh led by Vishal. Royal wedding planning, luxury stage decor, grand bride & groom entries, catering & party setups. Call +91 8090123175.',
  keywords: [
    'RV Events and Management Farrukhabad',
    'आर्वी इवेंट्स एंड मैनेजमेंट फर्रुखाबाद',
    'Event planner Farrukhabad',
    'Wedding planner Farrukhabad',
    'Best event management in Fatehgarh',
    'Bride and groom entry Farrukhabad',
    'Stage decoration Farrukhabad',
    'Haldi Mehandi decoration Bholepur',
    'Vishal RV Events',
    '8090123175'
  ],
  authors: [{ name: 'Vishal (RV Events)' }],
  openGraph: {
    title: 'RV Events and Management Farrukhabad | Royal Weddings & Luxury Events',
    description: 'Transforming Your Dreams into Royal Realities in Farrukhabad! 5.0 Star Rated Event Planner. Call Vishal: +91 8090123175.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'RV Events and Management Farrukhabad',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'RV Events and Management Farrukhabad Royal Wedding Stage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RV Events and Management Farrukhabad',
    description: 'Premier royal wedding & event planner in Farrukhabad. Luxury stages, grand entries & catering by Vishal. Call 8090123175.',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'RV Events and Management Farrukhabad',
  'alternateName': 'आर्वी इवेंट्स एंड मैनेजमेंट फर्रुखाबाद',
  'description': 'Premier luxury event management and royal wedding planning company in Farrukhabad and Fatehgarh, Uttar Pradesh.',
  'telephone': '+918090123175',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Bewar Rd, Bholepur, Fatehgarh',
    'addressLocality': 'Farrukhabad',
    'addressRegion': 'Uttar Pradesh',
    'postalCode': '209601',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 27.3674763,
    'longitude': 79.6129324
  },
  'url': 'https://maps.google.com/?q=RV+EVENTS+AND+MANAGEMENT+FARRUKHABAD',
  'priceRange': '₹₹₹',
  'founder': {
    '@type': 'Person',
    'name': 'Vishal'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'reviewCount': '4',
    'bestRating': '5'
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '08:00',
    'closes': '20:00'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#080808] text-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080808] text-neutral-100 antialiased selection:bg-amber-500 selection:text-neutral-950 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
