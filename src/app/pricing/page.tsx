"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Zap, HelpCircle, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          plans={[
            {
              id: 'free',
              title: 'Free',
              price: '0',
              period: 'PKR',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-minimalist-illustration-representing-t-1772690551300-55177c55.png',
              imageAlt: 'Free Plan Features',
              button: { text: 'Get Started', href: '/signup' },
              features: ['5 AI Sparks daily', 'Limited tool access', 'Watermark on outputs', 'Community support']
            },
            {
              id: 'basic',
              title: 'Basic',
              price: '399',
              period: 'PKR/month',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-illustration-representing-the-basic-t-1772690553063-f4bd52b6.png',
              imageAlt: 'Basic Plan Features',
              button: { text: 'Subscribe Now', href: '/subscribe/basic' },
              features: ['500 AI Sparks monthly', 'Most tools unlocked', 'Faster processing', 'Email support']
            },
            {
              id: 'premium',
              title: 'Premium',
              price: '999',
              period: 'PKR/month',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-illustration-representing-the-premium-1772690552845-229df105.png',
              imageAlt: 'Premium Plan Features',
              button: { text: 'Subscribe Now', href: '/subscribe/premium' },
              features: ['2000 AI Sparks monthly', 'Almost all tools unlocked', 'HD outputs', 'Priority support']
            },
            {
              id: 'gold',
              title: 'Gold',
              price: '1999',
              period: 'PKR/month',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-illustration-representing-the-gold-ti-1772690553277-aad9a98e.png',
              imageAlt: 'Gold Plan Features',
              button: { text: 'Subscribe Now', href: '/subscribe/gold' },
              features: ['5000 AI Sparks monthly', 'All tools unlocked', '4K outputs', 'VIP support']
            },
            {
              id: 'diamond',
              title: 'Diamond',
              price: '3999',
              period: 'PKR/month',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-illustration-representing-the-diamond-1772690554030-280e9106.png',
              imageAlt: 'Diamond Plan Features',
              button: { text: 'Subscribe Now', href: '/subscribe/diamond' },
              features: ['Unlimited AI Sparks', 'All exclusive tools', '4K+ outputs', 'Dedicated support']
            }
          ]}
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your creative journey. Upgrade anytime or add AI Sparks on demand."
          tag="Pricing Plans"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: 'View All Plans', href: '/pricing' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: '1',
              title: 'What is Brainify?',
              content: 'Brainify is an AI-powered SaaS platform with 15+ cutting-edge AI tools for content creation. Generate images, videos, create designs, enhance photos, and more using our AI Sparks credit system. Perfect for creators, designers, and businesses.'
            },
            {
              id: '2',
              title: 'What are AI Sparks?',
              content: 'AI Sparks are credits used to run AI tools on Brainify. Each tool costs a certain number of Sparks. Free users get 5 Sparks daily. Premium plans include monthly Sparks. You can also buy Sparks separately through our Mini Packs: Starter (100+10 bonus for 399 PKR), Creator (250+25 for 999 PKR), Pro (800+80 for 2499 PKR), Mega (2000+200 for 4999 PKR).'
            },
            {
              id: '3',
              title: 'Can I try Brainify for free?',
              content: 'Yes! Sign up for free and get 5 AI Sparks daily. This gives you access to try most of our tools. Use our free tools like Image Converter, Image to PDF, and Background Remover to get started. Upgrade anytime for more Sparks and advanced features.'
            },
            {
              id: '4',
              title: 'What\'s the difference between plans?',
              content: 'Free: 5 daily Sparks, limited tools, watermark. Basic (399 PKR/mo): 500 monthly Sparks, most tools, faster processing. Premium (999 PKR/mo): 2000 Sparks, almost all tools, HD outputs. Gold (1999 PKR/mo): 5000 Sparks, all tools, 4K outputs. Diamond (3999 PKR/mo): Unlimited Sparks, exclusive tools, 4K+ quality.'
            },
            {
              id: '5',
              title: 'How do I pay?',
              content: 'We accept EasyPaisa QR payment in PKR (Pakistan Rupees). Account Name: Muhammad Muneeb UR Rehman, Number: 0314-7356117. Our system auto-verifies payments and adds credits instantly. All transactions are tracked in your dashboard.'
            },
            {
              id: '6',
              title: 'Can I upgrade or downgrade plans?',
              content: 'Absolutely! You can upgrade anytime to access more Sparks and features. Downgrades are also available. Changes take effect immediately. Your unused Sparks from your current plan don\'t roll over to a lower tier.'
            },
            {
              id: '7',
              title: 'Is my data secure?',
              content: 'Yes! Brainify uses enterprise-grade security with session management, CAPTCHA protection, rate limiting, and secure authentication. All user data is stored on Supabase cloud database with encryption. We never share your data with third parties.'
            },
            {
              id: '8',
              title: 'What happens if I run out of Sparks?',
              content: 'You can still access free tools and your daily 5 free Sparks. Upgrade your plan, buy Mini Packs, or wait for daily reset. Notifications remind you when Sparks are low. Gift credits and referral bonuses also help maintain your balance.'
            },
            {
              id: '9',
              title: 'Do you offer support?',
              content: 'Yes! We have 24/7 WhatsApp support at 0314-7356117. Admin can also send notifications and messages through the dashboard. Email support available at support@brainify.ai. Contact us anytime - we\'re here to help!'
            },
            {
              id: '10',
              title: 'What is the referral program?',
              content: 'Share your Brainify referral link with friends. When they purchase a plan, you get 10% bonus credits deposited to your account. Earn unlimited referral bonuses and help others discover Brainify!'
            },
            {
              id: '11',
              title: 'How many tools can I access?',
              content: 'Free: 3 tools (Image Generator, Image to PDF, Blur to HD). Basic: Most tools (10+). Premium: Almost all tools (14+). Gold & Diamond: All 15 tools including exclusive AI tools. More tools added monthly!'
            },
            {
              id: '12',
              title: 'Can I export my creations?',
              content: 'Yes! Download in multiple formats: PNG, JPG, WEBP, PDF (for images), and MP4 (for videos). Premium+ plans get HD/4K quality. All creations are yours to use - commercial or personal. No platform watermark on paid plans.'
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about Brainify, AI Sparks, pricing, and our tools."
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