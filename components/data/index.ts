import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  cardImage1,
  cardImage2,
  cardImage3,
  marketImage1,
  marketImage2,
  marketImage3,
} from "@/public/assets";
import { StaticImageData } from "next/image";

interface NavbarLinks {
  id: number;
  name: string;
  coming?: boolean | "";
}

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  description: string;
}

interface MarketData {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

interface VisonData {
  id: number;
  title: string;
  icon: StaticImageData;
  description?: string;
}

export const navbarLinks: NavbarLinks[] = [
  {
    id: 1,
    name: "Creon Pass",
  },
  {
    id: 2,
    name: "Token",
    coming: true,
  },
  {
    id: 3,
    name: "AI Revenue",
    coming: true,
  },
  {
    id: 4,
    name: "AI Launchpad",
    coming: true,
  },
];

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Token",
    subtitle: "The Gateway token to the world of AI",
    image: cardImage1,
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    id: 2,
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    image: cardImage2,
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
  },
  {
    id: 3,
    title: "Launchpad",
    subtitle: "Driving the future of AI Innovation",
    image: cardImage3,
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];

export const marketDatas: MarketData[] = [
  {
    id: 1,
    title: "AI Prospects, Market Size, and Development Pace",
    image: marketImage1,
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    id: 2,
    title: "AI Tools and Market",
    image: marketImage2,
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    id: 3,
    title: "AI, Crypto, and NFT Market",
    image: marketImage3,
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];

export const visionDatas: VisonData[] = [
  {
    id: 1,
    title: "Profitability and Grwoth",
    icon: Icon1,
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
  },
  {
    id: 2,
    title: "Transparent & Fair Decentralized Earnings",
    icon: Icon2,
  },
  {
    id: 3,
    title: "Launching the Future",
    icon: Icon3,
  },
  {
    id: 4,
    title: "Limitless Possibilities of AI & Crypto",
    icon: Icon4,
  },
];
