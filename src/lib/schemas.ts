export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sylvia-barick.github.io/portfolio',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Journey',
      item: 'https://sylvia-barick.github.io/#journey',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Projects',
      item: 'https://sylvia-barick.github.io/#projects',
    },
  ],
};

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Sylvia Barick Portfolio',
  description:
    'Professional portfolio showcasing geospatial development and software engineering projects',
  author: {
    '@type': 'Person',
    name: 'Sylvia Barick',
  },
  url: 'https://sylvia-barick.github.io/portfolio',
  dateCreated: '2024',
  inLanguage: 'en-US',
  audience: {
    '@type': 'Audience',
    audienceType: 'Employers, Clients, Recruiters',
  },
};
