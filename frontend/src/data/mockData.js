// Mock data for uSafe website

export const products = [
  {
    id: 'usafe-one',
    name: 'uSafe One',
    description: 'Complete security suite with 2FA authenticator, backup codes, secure notes, and business calculator with GST',
    status: 'live',
    features: ['2FA Authenticator', 'Backup Codes', 'Biometric Protection', 'Secure Notes', 'Business Calculator'],
    icon: 'https://customer-assets.emergentagent.com/job_17c03c47-4240-49cd-8b07-32bdaf64363e/artifacts/bxwnoxg1_icon.png'
  },
  {
    id: 'usafe-cloud',
    name: 'uSafe Cloud',
    description: 'Secure cloud backup and restore with privacy-focused storage plans',
    status: 'upcoming',
    features: ['Cloud Backup', 'Secure Storage', 'Privacy-First', 'Easy Restore'],
    icon: null
  },
  {
    id: 'usafe-tools',
    name: 'uSafe Tools',
    description: 'Marketing and business tools for small businesses including SEO checker and calculators',
    status: 'upcoming',
    features: ['SEO Checker', 'Page Rank Checker', 'Business Calculators', 'Marketing Tools'],
    icon: null
  },
  {
    id: 'usafe-chat',
    name: 'uSafe Chat',
    description: 'Encrypted messaging platform with privacy-first communication',
    status: 'planned',
    features: ['End-to-End Encryption', 'No Ads', 'No Tracking', 'Privacy-First'],
    icon: null
  },
  {
    id: 'usafe-legal',
    name: 'uSafe Legal',
    description: 'Complete legal services including company registration, compliance, and trademark support',
    status: 'upcoming',
    features: ['Company Registration', 'Compliance & Filings', 'Trademark Support', 'Business Setup'],
    icon: null
  }
];

export const services = [
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    description: 'Secure, scalable mobile applications built with security-first approach for iOS and Android platforms',
    icon: 'Smartphone'
  },
  {
    id: 'web-dev',
    title: 'Web App Development',
    description: 'Modern web applications with robust backend systems and intuitive user interfaces',
    icon: 'Globe'
  },
  {
    id: 'website',
    title: 'Website Design & Development',
    description: 'Professional websites that build trust and convert visitors into customers',
    icon: 'Layout'
  },
  {
    id: 'branding',
    title: 'Branding & Brand Kits',
    description: 'Complete brand identity design including logos, color schemes, and brand guidelines',
    icon: 'Palette'
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven marketing strategies to improve visibility and drive business growth',
    icon: 'TrendingUp'
  },
  {
    id: 'automation',
    title: 'Business Tools & Automation',
    description: 'Custom tools and automation solutions to streamline your business operations',
    icon: 'Zap'
  },
  {
    id: 'company-reg',
    title: 'Company Registration',
    description: 'Complete support for registering your business with all necessary documentation',
    icon: 'FileText'
  },
  {
    id: 'compliance',
    title: 'Legal Compliance & Filings',
    description: 'Ongoing compliance management and timely filings to keep your business compliant',
    icon: 'Shield'
  },
  {
    id: 'startup',
    title: 'Startup & Small Business Support',
    description: 'End-to-end support for startups and SMEs from incorporation to growth',
    icon: 'Rocket'
  }
];

export const contactFormSubmissions = [];

export const submitContactForm = (data) => {
  const submission = {
    id: Date.now(),
    ...data,
    timestamp: new Date().toISOString()
  };
  contactFormSubmissions.push(submission);
  return submission;
};