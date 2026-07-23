import { clinicInfo, services, faqs } from "@/lib/content";

const siteUrl = "https://dishekimimeliscakan.vercel.app";

// LocalBusiness / Dentist structured data — only verified, real information.
export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicInfo.name,
  image: `${siteUrl}/images/team/melis-cakan.jpg`,
  url: siteUrl,
  telephone: "+902642794404",
  email: clinicInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dr. Kamil Sk. Süleyman Baş İş Merkezi K:1",
    addressLocality: "Adapazarı / Sakarya",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinicInfo.coords.lat,
    longitude: clinicInfo.coords.lng,
  },
  hasMap: clinicInfo.mapsPlaceUrl,
  openingHours: "Mo-Sa 09:00-19:00",
  founder: {
    "@type": "Person",
    name: "Melis Çakan",
    jobTitle: "Diş Hekimi",
  },
};

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Dentist",
      name: clinicInfo.name,
    },
  };
}

export { siteUrl };
