import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Blocos KAU Presença - Materiais de Construção e Obras | Ibirapuã-BA";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Blocos KAU Presença oferece blocos de concreto, ferragens e lajes pré-moldadas em Ibirapuã-BA. Materiais de qualidade desde 2019. Orçamento gratuito!'
      );
    }

    // Add structured data (JSON-LD) for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Blocos KAU Presença",
      "description": "Materiais de construção de qualidade - blocos de concreto, ferragens e lajes pré-moldadas",
      "url": "https://www.blocoskaupresenca.com.br",
      "telephone": "+5573981736376",
      "email": "kaupresenca@gmail.com",
      "foundingDate": "2019",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Presença, 10",
        "addressLocality": "Ibirapuã",
        "addressRegion": "BA",
        "postalCode": "45940-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-15.4833",
        "longitude": "-39.7167"
      },
      "openingHours": [
        "Mo-Fr 07:00-17:00",
        "Sa 07:00-11:00"
      ],
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/blocoskaupresenca"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Materiais de Construção",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Blocos de Concreto",
              "description": "Blocos de concreto de alta resistência e qualidade"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Ferragens",
              "description": "Completa linha de ferragens para construção civil"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product", 
              "name": "Lajes Pré-moldadas",
              "description": "Lajes pré-moldadas para facilitar e agilizar sua obra"
            }
          }
        ]
      }
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header with fixed navigation */}
      <Header />
      
      {/* Main sections */}
      <Hero />
      <About />
      <Services />
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </main>
  );
};

export default Index;