"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Mail, HelpCircle, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Create with AI?"
          description="Join thousands of creators using Brainify. Start for free today with 5 daily AI Sparks. No credit card required."
          buttons={[
            { text: 'Sign Up Free', href: '/signup' },
            { text: 'WhatsApp Support', href: 'https://wa.me/923147356117?text=Hello%2C%20I%20need%20help%20with%20Brainify' }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: 'aurora' }}
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: '1',
              title: 'How do I get started with Brainify?',
              content: 'Sign up for a free account with email, phone, Google, or Facebook. You\'ll immediately get 5 AI Sparks daily to try our tools. No credit card required. Explore our 15+ AI tools and start creating within minutes.'
            },
            {
              id: '2',
              title: 'What payment methods do you accept?',
              content: 'We accept EasyPaisa QR payment in PKR (Pakistan Rupees). Account Name: Muhammad Muneeb UR Rehman, Number: 0314-7356117. Our system auto-verifies payments and credits are added instantly to your account. All transactions are secure and tracked.'
            },
            {
              id: '3',
              title: 'Is there customer support available?',
              content: 'Yes! We provide 24/7 WhatsApp support at 0314-7356117. You can also email us at support@brainify.ai or contact through the dashboard. Our team responds quickly to all inquiries. Premium plan users get priority support.'
            },
            {
              id: '4',
              title: 'Can I cancel my subscription anytime?',
              content: 'Yes, you can cancel or downgrade your subscription anytime from your account settings. Changes take effect immediately. Your unused Sparks don\'t roll over to lower tiers, but you can always upgrade again later without any penalties.'
            },
            {
              id: '5',
              title: 'How do I report bugs or technical issues?',
              content: 'Please contact our support team via WhatsApp at 0314-7356117 or email support@brainify.ai with detailed information about the issue. Include screenshots if possible. Our technical team investigates and resolves issues quickly.'
            },
            {
              id: '6',
              title: 'Do you have an API for developers?',
              content: 'Currently, Brainify focuses on our web platform. We\'re exploring API access for enterprise customers. Contact support@brainify.ai for inquiries about custom integrations or enterprise solutions.'
            }
          ]}
          title="Contact & Support"
          description="Have questions? We're here to help. Get in touch with our team anytime."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          buttons={[{ text: 'Contact Support', href: 'https://wa.me/923147356117?text=Hello%2C%20I%20need%20help%20with%20Brainify' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
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