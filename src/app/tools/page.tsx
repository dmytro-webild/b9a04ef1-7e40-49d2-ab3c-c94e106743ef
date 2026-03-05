"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Zap, Award, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: 'Home', id: '/' },
            { name: 'Pricing', id: '/pricing' },
            { name: 'Tools', id: '/tools' },
            { name: 'Dashboard', id: '/dashboard' },
            { name: 'Contact', id: '/contact' }
          ]}
          brandName="Brainify"
          bottomLeftText="AI Innovation Hub"
          bottomRightText="support@brainify.ai"
        />
      </div>

      <div id="tools" data-section="tools">
        <ProductCardThree
          products={[
            {
              id: '1',
              name: 'AI Image Generator',
              price: '3 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-stylized-icon-image-representing-ai-im-1772690552933-7b0f8e24.png',
              imageAlt: 'AI Image Generator',
              initialQuantity: 1
            },
            {
              id: '2',
              name: 'Face Swap Image',
              price: '5 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-face-swap-image-tool-s-1772690550960-12a432f2.png',
              imageAlt: 'Face Swap Tool',
              initialQuantity: 1
            },
            {
              id: '3',
              name: 'Face Swap Video',
              price: '10 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-face-swap-video-tool-s-1772690552710-4b7624d1.png',
              imageAlt: 'Face Swap Video Tool',
              initialQuantity: 1
            },
            {
              id: '4',
              name: 'Background Remover',
              price: '2 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-background-remover-sho-1772690551104-f53e0d61.png',
              imageAlt: 'Background Remover',
              initialQuantity: 1
            },
            {
              id: '5',
              name: 'Background Changer',
              price: '4 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-background-changer-sho-1772690553045-fd23d382.png',
              imageAlt: 'Background Changer',
              initialQuantity: 1
            },
            {
              id: '6',
              name: 'AI Cartoon Generator',
              price: '6 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-ai-cartoon-generator-s-1772690552405-3a88e541.png',
              imageAlt: 'Cartoon Generator',
              initialQuantity: 1
            },
            {
              id: '7',
              name: 'Image to PDF',
              price: '2 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-image-to-pdf-converter-1772690551425-0ae5cb46.png',
              imageAlt: 'Image to PDF Converter',
              initialQuantity: 1
            },
            {
              id: '8',
              name: 'Image Converter',
              price: '1 Spark',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-image-format-converter-1772690553911-2251a314.png',
              imageAlt: 'Image Format Converter',
              initialQuantity: 1
            },
            {
              id: '9',
              name: 'Blur to HD Enhancer',
              price: '4 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-blur-to-hd-enhancer-sh-1772690553114-05d405f0.png',
              imageAlt: 'HD Image Enhancer',
              initialQuantity: 1
            },
            {
              id: '10',
              name: 'Text to Video',
              price: '15 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-text-to-video-generato-1772690552976-ec6d11b5.png',
              imageAlt: 'Text to Video Generator',
              initialQuantity: 1
            },
            {
              id: '11',
              name: 'Prompt to Image',
              price: '5 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-prompt-to-image-genera-1772690553902-805935db.png',
              imageAlt: 'Prompt to Image Generator',
              initialQuantity: 1
            },
            {
              id: '12',
              name: 'AI Logo Generator',
              price: '8 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-ai-logo-generator-show-1772690553013-36ff205d.png',
              imageAlt: 'Logo Generator',
              initialQuantity: 1
            },
            {
              id: '13',
              name: 'AI Thumbnail Creator',
              price: '3 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-ai-thumbnail-creator-s-1772690553231-9be037be.png',
              imageAlt: 'Thumbnail Generator',
              initialQuantity: 1
            },
            {
              id: '14',
              name: 'AI Photo Enhancer',
              price: '3 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-ai-photo-enhancer-show-1772690553371-b321387b.png',
              imageAlt: 'Photo Enhancer',
              initialQuantity: 1
            },
            {
              id: '15',
              name: 'AI Art Generator',
              price: '7 Sparks',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/icon-representing-ai-art-generator-shows-1772690551775-4947ed9c.png',
              imageAlt: 'Art Generator',
              initialQuantity: 1
            }
          ]}
          title="15+ Powerful AI Tools"
          description="Access our complete suite of AI-powered creation tools. Each tool uses AI Sparks - start with 5 daily free sparks."
          tag="AI Tools Catalog"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: 'Explore All Tools', href: '/tools' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={['Digital Creators Inc', 'Content Studios Pro', 'Creative Agency Network', 'Design Studios Group', 'Media Production Co', 'Tech Innovation Labs', 'AI Solutions Partners']}
          title="Trusted by Industry Leaders"
          description="Join thousands of creators and businesses using Brainify for their AI content creation needs."
          tag="Partners"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[{ text: 'Start Free', href: '/signup' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Brainify"
          copyrightText="© 2025 Brainify | AI SaaS Platform. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: 'https://twitter.com/brainify', ariaLabel: 'Twitter' },
            { icon: Linkedin, href: 'https://linkedin.com/company/brainify', ariaLabel: 'LinkedIn' },
            { icon: Mail, href: 'mailto:support@brainify.ai', ariaLabel: 'Email' }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}