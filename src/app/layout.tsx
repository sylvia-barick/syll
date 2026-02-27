import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', // Better font loading performance
  preload: true,
  variable: '--font-space-grotesk',
});

// Metadata needs to be exported this way in Next.js 13+
export const metadata: Metadata = {
  title: {
    default: 'Sylvia Barick - AI-ML Engineer',
    template: '%s | Sylvia Barick',
  },
  description:
    "I’m an aspiring AI-ML engineer who loves building meaningful tech, exploring Web3, joining hackathons, and creating solutions that truly help people.",
  keywords: [
    'Geospatial Developer',
    'Software Engineer',
    'Germany',
    'ArcGIS',
    'QGIS',
    'OpenLayers',
    'Leaflet',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'PostGIS',
    'GIS',
    'Web Development',
    'Data Visualization',
    'Maps',
    'Cartography',
    'Remote Sensing',
  ],
  authors: [{ name: 'Sylvia Barick', url: 'https://sylvia-barick.github.io' }],
  creator: 'Sylvia Barick',
  publisher: 'Sylvia Barick',
  metadataBase: new URL('https://sylvia-barick.github.io'),
  alternates: {
    canonical: 'https://sylvia-barick.github.io/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sylvia Barick - AI-ML Engineer',
    description:
      "Based in Germany, I'm a Geospatial Developer and Software Engineer specializing in maps, data visualization, and web technologies. Expert in ArcGIS, QGIS, OpenLayers, Python, and JavaScript.",
    url: 'https://sylvia-barick.github.io/',
    siteName: 'Sylvia Barick Portfolio',
    images: [
      {
        url: 'https://sylvia-barick.github.io/sylvia.png',
        width: 1200,
        height: 630,
        alt: 'Sylvia Barick - AI-ML Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sylvia Barick - AI-ML Engineer',
    description:
      "Based in Germany, I'm a Geospatial Developer and Software Engineer specializing in maps, data visualization, and web technologies.",
    images: ['https://sylvia-barick.github.io/sylvia.png'],
    creator: '@5_barick', // Add your Twitter handle if you have one
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code when available
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sylvia Barick',
    jobTitle: 'AI-ML Engineer',
    description:
      'Geospatial Developer and Software Engineer specializing in maps, data visualization, and web technologies.',
    url: 'https://sylvia-barick.github.io/',
    image: 'https://sylvia-barick.github.io/sylvia.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Germany',
    },
    knowsAbout: [
      'Geospatial Development',
      'Software Engineering',
      'ArcGIS',
      'QGIS',
      'OpenLayers',
      'Leaflet',
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'PostGIS',
      'Web Development',
      'Data Visualization',
      'Geographic Information Systems',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://github.com/sylvia-barick',
      'https://linkedin.com/in/sylvia-barick-081651321/',
      'https://x.com/5_barick',
      // Add other social profiles as needed
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
