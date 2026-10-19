export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
};

// Helper function to generate real website screenshots
const getScreenshot = (url: string) => `https://image.thum.io/get/width/1200/crop/800/${url}`;

export const portfolioItems: PortfolioItem[] = [
  // --- Category: Trading Terminal ---
  {
    id: "flagship-1",
    title: "Koraxis Trading Terminal v2",
    category: "Trading Terminal",
    description: "High-performance trading interface featuring real-time market data via WebSockets, TradingView integration, and professional order management.",
    imageUrl: getScreenshot("https://tradingterminal2.vercel.app"),
    link: "https://tradingterminal2.vercel.app"
  },
  // --- Category: Demo Funded ---
  {
    id: "flagship-2",
    title: "Demo Funded Prop Firm System",
    category: "Demo Funded",
    description: "Prop firm management system handling thousands of daily evaluations with automated risk management and trader dashboard.",
    imageUrl: getScreenshot("https://propfirm-frontend-phi.vercel.app"),
    link: "https://propfirm-frontend-phi.vercel.app"
  },
  // --- Category: Payments & Fintech (8 items) ---
  {
    id: "pay-sharpay",
    title: "Sharpay Payments",
    category: "Payments & Fintech",
    description: "Next-generation payment processing and automated settlement system for global prop firms.",
    imageUrl: getScreenshot("https://payments.sharkfunded.com"),
    link: "https://payments.sharkfunded.com"
  },
  {
    id: "pay-1",
    title: "Stripe",
    category: "Payments & Fintech",
    description: "Financial infrastructure platform for the internet.",
    imageUrl: getScreenshot("https://stripe.com"),
    link: "https://stripe.com"
  },
  {
    id: "pay-2",
    title: "Ramp",
    category: "Payments & Fintech",
    description: "Finance automation platform designed to save you time and money.",
    imageUrl: getScreenshot("https://ramp.com"),
    link: "https://ramp.com"
  },
  {
    id: "pay-3",
    title: "Brex",
    category: "Payments & Fintech",
    description: "Corporate cards and spend management for modern companies.",
    imageUrl: getScreenshot("https://brex.com"),
    link: "https://brex.com"
  },
  {
    id: "pay-4",
    title: "Mercury",
    category: "Payments & Fintech",
    description: "Powerful banking designed for startups.",
    imageUrl: getScreenshot("https://mercury.com"),
    link: "https://mercury.com"
  },
  {
    id: "pay-5",
    title: "Plaid",
    category: "Payments & Fintech",
    description: "The data network powering the fintech tools that millions rely on.",
    imageUrl: getScreenshot("https://plaid.com"),
    link: "https://plaid.com"
  },
  {
    id: "pay-6",
    title: "Paddle",
    category: "Payments & Fintech",
    description: "The complete payments, tax, and subscriptions solution for SaaS.",
    imageUrl: getScreenshot("https://paddle.com"),
    link: "https://paddle.com"
  },
  {
    id: "pay-7",
    title: "Square",
    category: "Payments & Fintech",
    description: "Point of sale systems, card readers, and business software.",
    imageUrl: getScreenshot("https://squareup.com"),
    link: "https://squareup.com"
  },
  {
    id: "pay-8",
    title: "Adyen",
    category: "Payments & Fintech",
    description: "End-to-end payments, data, and financial management.",
    imageUrl: getScreenshot("https://www.adyen.com"),
    link: "https://www.adyen.com"
  },

  // --- Category: CRM (7 items) ---
  {
    id: "crm-1",
    title: "Attio",
    category: "CRM",
    description: "A radically new CRM built for the modern era of software.",
    imageUrl: getScreenshot("https://attio.com"),
    link: "https://attio.com"
  },
  {
    id: "crm-2",
    title: "HubSpot",
    category: "CRM",
    description: "Inbound marketing, sales, and service software.",
    imageUrl: getScreenshot("https://www.hubspot.com"),
    link: "https://www.hubspot.com"
  },
  {
    id: "crm-3",
    title: "Intercom",
    category: "CRM",
    description: "The only AI customer service solution you need.",
    imageUrl: getScreenshot("https://www.intercom.com"),
    link: "https://www.intercom.com"
  },
  {
    id: "crm-4",
    title: "Salesforce",
    category: "CRM",
    description: "The world's leading enterprise customer relationship management.",
    imageUrl: getScreenshot("https://www.salesforce.com"),
    link: "https://www.salesforce.com"
  },
  {
    id: "crm-5",
    title: "Zendesk",
    category: "CRM",
    description: "Award-winning customer service software.",
    imageUrl: getScreenshot("https://www.zendesk.com"),
    link: "https://www.zendesk.com"
  },
  {
    id: "crm-6",
    title: "Pipedrive",
    category: "CRM",
    description: "Sales CRM and pipeline management software.",
    imageUrl: getScreenshot("https://www.pipedrive.com"),
    link: "https://www.pipedrive.com"
  },
  {
    id: "crm-7",
    title: "Freshworks",
    category: "CRM",
    description: "Customer service, ITSM, and CRM software.",
    imageUrl: getScreenshot("https://www.freshworks.com"),
    link: "https://www.freshworks.com"
  },

  // --- Category: AI Related (7 items) ---
  {
    id: "ai-zenvestt",
    title: "Zenvestt Journaling",
    category: "AI Related",
    description: "Comprehensive trading journal and analytics platform for retail and institutional traders.",
    imageUrl: getScreenshot("https://zenvestt.com"),
    link: "https://zenvestt.com"
  },
  {
    id: "ai-1",
    title: "OpenAI",
    category: "AI Related",
    description: "Leading AI research and deployment company behind ChatGPT.",
    imageUrl: getScreenshot("https://openai.com"),
    link: "https://openai.com"
  },
  {
    id: "ai-2",
    title: "Anthropic",
    category: "AI Related",
    description: "AI safety and research company behind Claude.",
    imageUrl: getScreenshot("https://anthropic.com"),
    link: "https://anthropic.com"
  },
  {
    id: "ai-3",
    title: "Perplexity AI",
    category: "AI Related",
    description: "AI-powered search engine and knowledge discovery.",
    imageUrl: getScreenshot("https://www.perplexity.ai"),
    link: "https://www.perplexity.ai"
  },
  {
    id: "ai-4",
    title: "Midjourney",
    category: "AI Related",
    description: "Independent research lab exploring new mediums of thought via AI.",
    imageUrl: getScreenshot("https://www.midjourney.com"),
    link: "https://www.midjourney.com"
  },
  {
    id: "ai-5",
    title: "Scale AI",
    category: "AI Related",
    description: "The data platform for artificial intelligence.",
    imageUrl: getScreenshot("https://scale.com"),
    link: "https://scale.com"
  },
  {
    id: "ai-6",
    title: "Jasper",
    category: "AI Related",
    description: "The AI copilot for enterprise marketing teams.",
    imageUrl: getScreenshot("https://www.jasper.ai"),
    link: "https://www.jasper.ai"
  },
  {
    id: "ai-7",
    title: "Hugging Face",
    category: "AI Related",
    description: "The AI community building the future of open source machine learning.",
    imageUrl: getScreenshot("https://huggingface.co"),
    link: "https://huggingface.co"
  },

  // --- Category: iOS Apps (9 items) ---
  {
    id: "ios-thrum",
    title: "Thrum",
    category: "iOS Apps",
    description: "Next-generation 3D music experience and social platform.",
    imageUrl: "/images/music/home.png",
    link: "#"
  },
  {
    id: "ios-1",
    title: "Robinhood",
    category: "iOS Apps",
    description: "Pioneering commission-free investing app.",
    imageUrl: getScreenshot("https://robinhood.com"),
    link: "https://robinhood.com"
  },
  {
    id: "ios-2",
    title: "Revolut",
    category: "iOS Apps",
    description: "Global financial superapp.",
    imageUrl: getScreenshot("https://www.revolut.com"),
    link: "https://www.revolut.com"
  },
  {
    id: "ios-3",
    title: "Cash App",
    category: "iOS Apps",
    description: "The easiest way to send, spend, save, and invest your money.",
    imageUrl: getScreenshot("https://cash.app"),
    link: "https://cash.app"
  },
  {
    id: "ios-4",
    title: "Monzo",
    category: "iOS Apps",
    description: "Banking made easy. Built for your smartphone.",
    imageUrl: getScreenshot("https://monzo.com"),
    link: "https://monzo.com"
  },
  {
    id: "ios-5",
    title: "Wealthfront",
    category: "iOS Apps",
    description: "Automated investing and high-yield savings.",
    imageUrl: getScreenshot("https://www.wealthfront.com"),
    link: "https://www.wealthfront.com"
  },
  {
    id: "ios-6",
    title: "Chime",
    category: "iOS Apps",
    description: "Banking that has your back.",
    imageUrl: getScreenshot("https://www.chime.com"),
    link: "https://www.chime.com"
  },
  {
    id: "ios-7",
    title: "N26",
    category: "iOS Apps",
    description: "The mobile bank. The world's first bank you'll love.",
    imageUrl: getScreenshot("https://n26.com"),
    link: "https://n26.com"
  },
  {
    id: "ios-8",
    title: "Acorns",
    category: "iOS Apps",
    description: "Invest spare change automatically.",
    imageUrl: getScreenshot("https://www.acorns.com"),
    link: "https://www.acorns.com"
  }
];
