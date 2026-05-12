import React from "react";
import Image from "next/image";

export const runtime = "edge";
import {
  ArrowRight,
  Bot,
  BookImage,
  CalendarDays,
  Camera,
  Clapperboard,
  GalleryHorizontal,
  Gift,
  Globe,
  LayoutGrid,
  LayoutTemplate,
  MessageCircle,
  Palette,
  ScanSearch,
  Sparkles,
  Store,
  TrendingUp,
} from "lucide-react";
import { MotionArticle, Reveal } from "./components/Motion";
import { FaqAccordion } from "./components/FaqAccordion";
import { WorksGallery } from "./components/WorksGallery";

const whatsappNumber = "910000000000";
const whatsappMessage =
  "Hi D Creative Studio, I want AI creatives for my business. Please share details.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const navItems = ["Services", "Portfolio", "Process", "FAQ"];

const fanImages = [
  { src: "/images/hero/girl-ugc.png", alt: "AI UGC style girl creative for lifestyle brands" },
  { src: "/images/hero/mens.png", alt: "Men's fashion model creative by D Creative Studio" },
  { src: "/images/hero/jewels.png", alt: "AI jewellery model creative for accessories brands" },
  { src: "/images/hero/kuruthi.png", alt: "AI fashion model in ethnic wear for clothing brands" },
  { src: "/images/hero/product.png", alt: "AI product photography creative for ecommerce" },
  { src: "/images/hero/tops.png", alt: "AI fashion model creative for kurti and tops brands" },
  { src: "/images/hero/women.png", alt: "AI women fashion model creative for clothing brands" },
];

const services = [
  {
    icon: Bot,
    color: "#7C3AED",
    bg: "#F3EEFF",
    title: "AI Product Models",
    description: "Professional AI models for product branding"
  },
  {
    icon: Camera,
    color: "#2563EB",
    bg: "#EFF6FF",
    title: "AI Product Photoshoots",
    description: "Premium product photos without expensive shoots"
  },
  {
    icon: LayoutGrid,
    color: "#DB2777",
    bg: "#FDF2F8",
    title: "Instagram AI Creatives",
    description: "Modern Instagram creatives for better engagement"
  },
  {
    icon: Store,
    color: "#059669",
    bg: "#ECFDF5",
    title: "Small Business Posts",
    description: "Creative daily posts for growing businesses"
  },
  {
    icon: LayoutTemplate,
    color: "#EA580C",
    bg: "#FFF7ED",
    title: "AI Banner Designs",
    description: "Eye-catching banners designed for online promotions"
  },
  {
    icon: TrendingUp,
    color: "#DC2626",
    bg: "#FEF2F2",
    title: "High-Converting Ad Creatives",
    description: "Ad creatives focused on clicks and sales"
  },
  {
    icon: GalleryHorizontal,
    color: "#0891B2",
    bg: "#ECFEFF",
    title: "Creative Carousel Designs",
    description: "Interactive carousel posts for social media"
  },
  {
    icon: BookImage,
    color: "#D97706",
    bg: "#FFFBEB",
    title: "Product Catalogue Images",
    description: "Clean catalogue visuals for product showcasing"
  },
  {
    icon: Globe,
    color: "#0284C7",
    bg: "#F0F9FF",
    title: "Website Visual Content",
    description: "Professional website graphics for better branding"
  },
  {
    icon: CalendarDays,
    color: "#4F46E5",
    bg: "#EEF2FF",
    title: "Daily Social Media Posts",
    description: "Consistent daily content for audience engagement"
  },
  {
    icon: Gift,
    color: "#E11D48",
    bg: "#FFF1F2",
    title: "Festival Offer Creatives",
    description: "Special offer designs for seasonal promotions"
  },
  {
    icon: Palette,
    color: "#9333EA",
    bg: "#FAF5FF",
    title: "Brand Marketing Designs",
    description: "Creative visuals to build strong branding"
  }
];

const process = [
  {
    title: "Send Your Product",
    text: "Share your product photo, business name, offer, and where you want to post it."
  },
  {
    title: "Creative Direction",
    text: "We plan the scene, model style, background, campaign angle, and format for your audience."
  },
  {
    title: "AI Visual Production",
    text: "Your creatives are generated, refined, composed, and prepared for social media or ads."
  },
  {
    title: "Ready To Publish",
    text: "You receive polished images that fit Instagram posts, stories, ads, banners, and product listings."
  }
];

const faqs = [
  {
    question: "Can AI product images work for small businesses?",
    answer:
      "Yes. AI product images help small businesses create premium-looking visuals quickly for Instagram, WhatsApp, ecommerce listings, ads, and seasonal campaigns."
  },
  {
    question: "Can you create model photos for clothing products?",
    answer:
      "Yes. D Creative Studio creates AI fashion model visuals for clothing brands using your product direction, preferred model style, background mood, and campaign requirement."
  },
  {
    question: "Do you make ad creatives for Instagram businesses?",
    answer:
      "Yes. We create ad-ready visuals for offers, launches, festive campaigns, retargeting, and social media promotions for Instagram-first brands."
  },
  {
    question: "How long does it take to receive my creatives?",
    answer:
      "Most orders are delivered within 24 to 48 hours after we receive your product details, brand reference, and campaign brief. Bulk packs or full campaign kits may take slightly longer."
  },
  {
    question: "What do I need to share to get started?",
    answer:
      "Just send your product photo or reference, your business name, the offer or message you want to communicate, and where you plan to use the creative — Instagram, ads, WhatsApp, or listings."
  },
  {
    question: "Do you offer packages for regular content?",
    answer:
      "Yes. We have weekly and monthly content packages for businesses that need consistent Instagram posts, story creatives, ad banners, and campaign visuals on an ongoing basis."
  },
  {
    question: "Can I request changes to my creatives?",
    answer:
      "Yes. Each order includes revision rounds so you can request adjustments to the layout, background, model style, colours, or text before the final delivery."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="D Creative Studio home">
          <Image src="/logo.png" alt="D Creative Studio" width={294} height={55} priority style={{ width: 'auto', height: 'auto' }} />
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          WhatsApp
        </a>
      </header>

      <section id="top" className="hero-v2">
        <Reveal className="hero-v2-heading">
          <h1>AI creatives that make your brand shine.</h1>
        </Reveal>

        <div className="hero-fan-wrap" aria-label="AI creative examples">
          <span className="hero-tag hero-tag-left">
            <span className="tag-dot" aria-hidden="true" />
            Products
          </span>
          <span className="hero-tag hero-tag-ads">
            <span className="tag-dot" aria-hidden="true" />
            Ad Creatives
          </span>
          <span className="hero-tag hero-tag-smallbiz">
            <span className="tag-dot" aria-hidden="true" />
            Small Biz
          </span>
          <span className="hero-tag hero-tag-ecom">
            <span className="tag-dot" aria-hidden="true" />
            Ecommerce
          </span>
          <div className="hero-fan">
            {fanImages.map((img, i) => (
              <div className="fan-card" key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i < 5}
                  sizes="(max-width: 640px) 78px, (max-width: 768px) 120px, (max-width: 980px) 130px, 165px"
                  className="creative-image"
                />
              </div>
            ))}
          </div>
          <span className="hero-tag hero-tag-right">
            <span className="tag-dot" aria-hidden="true" />
            Fashion
          </span>
        </div>

        <Reveal className="hero-v2-bottom" delay={0.12}>
          <p className="hero-text">
            D Creative Studio creates AI-powered product images, fashion model visuals, and ad creatives
            for brands that want to look premium without a photoshoot.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
              Start on WhatsApp
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="secondary-button" href="#portfolio">
              View Creative Work
            </a>
          </div>
        </Reveal>
      </section>

      <section id="services" className="section-shell services-section">
        <Reveal className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Weekly creative visuals for growing businesses.</h2>
          <p>
            From one product image to a full Instagram campaign pack, every visual is built around your
            brand, audience, offer, and sales channel.
          </p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionArticle className="service-card" key={service.title} index={index}>
                <div
                  className="icon-box"
                  style={{ background: service.bg, color: service.color } as React.CSSProperties}
                >
                  <Icon aria-hidden="true" />
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="section-shell">
          <Reveal className="section-heading light">
            <p className="eyebrow">Showcase</p>
            <h2>Our Works</h2>
            <p>
              Use these as examples of the kind of polished, campaign-ready creative direction D Creative
              Studio can bring to small-business marketing.
            </p>
          </Reveal>
          <WorksGallery />
        </div>
      </section>

      <section id="process" className="section-shell process-section">
        <Reveal className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A simple creative workflow for busy business owners.</h2>
        </Reveal>
        <div className="process-grid">
          {process.map((step, index) => (
            <MotionArticle className="process-card" key={step.title} index={index}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </MotionArticle>
          ))}
        </div>
      </section>

      <section className="section-shell audience-section">
        <Reveal className="audience-panel">
          <div>
            <p className="eyebrow">Best for</p>
            <h2>Instagram-first brands that need premium content without a full photoshoot.</h2>
          </div>
          <div className="audience-list" aria-label="Business types">
            {[
              "Instagram shops",
              "Fashion sellers",
              "Beauty brands",
              "Restaurants",
              "Product brands",
              "Local businesses",
              "Clothing brands",
              "Jewellery brands",
              "Food businesses",
              "Online stores",
              "Skincare brands",
              "Home decor brands",
            ].map(
              (item) => (
                <span key={item}>
                  <ScanSearch aria-hidden="true" />
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>
      </section>

      <section id="faq" className="section-shell faq-section">
        <Reveal className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions business owners ask before starting with AI creatives.</h2>
        </Reveal>
        <FaqAccordion faqs={faqs} />
      </section>

      <section className="final-cta section-shell">
        <Reveal className="cta-panel">
          <Clapperboard aria-hidden="true" />
          <p className="eyebrow">Ready for better business visuals?</p>
          <h2>Send your product photo and get a creative direction for your first AI campaign.</h2>
          <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Message D Creative Studio
            <Sparkles aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.png" alt="D Creative Studio" width={200} height={38} style={{ width: "auto", height: "auto" }} />
            <p>AI-powered product images, model visuals, and ad creatives for brands that want to look premium — without a photoshoot.</p>
          </div>
          <div className="footer-nav">
            <p className="footer-nav-label">Quick Links</p>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <p className="footer-nav-label">Get In Touch</p>
            <a className="footer-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              WhatsApp Us
            </a>
            <p className="footer-tagline">Creatives delivered fast.<br />No photoshoot needed.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} D Creative Studio. All rights reserved.</p>
          <p className="footer-made">Made with AI, crafted with care.</p>
        </div>
      </footer>
    </main>
  );
}
