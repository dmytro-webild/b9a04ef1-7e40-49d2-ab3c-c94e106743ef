"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Zap, TrendingUp, Award, Mail, Twitter, Linkedin, Users, Heart, Image } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
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

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Transform Your Creativity with AI Sparks"
          description="Brainify is the ultimate AI-powered SaaS platform for content creators, designers, and innovators. Generate stunning images, videos, and designs with 15+ cutting-edge AI tools. Start for free today."
          tag="AI Innovation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: 'Start Creating Free', href: '/dashboard' },
            { text: 'View All Tools', href: '/tools' }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: 'plain' }}
          carouselItems={[
            {
              id: 'carousel-1',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-modern-ai-image-generation-interface-s-1772690553345-c5e0890c.png',
              imageAlt: 'AI Image Generator Interface'
            },
            {
              id: 'carousel-2',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-face-swap-technology-demo-showing-befo-1772690553867-55471df2.png',
              imageAlt: 'Face Swap Technology Demo'
            },
            {
              id: 'carousel-3',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-video-generation-interface-showing-a-t-1772690553297-5a0a51a7.png',
              imageAlt: 'Video Generation Results'
            },
            {
              id: 'carousel-4',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-background-remover-tool-interface-show-1772690553948-02d750dd.png',
              imageAlt: 'Background Remover Tool'
            },
            {
              id: 'carousel-5',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-ai-logo-creation-interface-showing-a--1772690553314-50d8ee23.png',
              imageAlt: 'AI Logo Creator'
            },
            {
              id: 'carousel-6',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-hd-image-enhancement-tool-showing-bef-1772690553537-d8223d4c.png',
              imageAlt: 'HD Image Enhancement'
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          features={[
            {
              id: 1,
              tag: 'Step 1',
              title: 'Sign Up',
              subtitle: 'Create your account in seconds',
              description: 'Join Brainify with email, phone, Google, or Facebook. Get 5 free AI Sparks daily. Secure authentication with CAPTCHA protection and session management.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-signup-form-interface-showing-email-ph-1772690553677-17b5236b.png',
              imageAlt: 'Sign Up Process',
              buttons: [{ text: 'Create Account', href: '/signup' }]
            },
            {
              id: 2,
              tag: 'Step 2',
              title: 'Choose Your Tool',
              subtitle: 'Select from 15+ AI tools',
              description: 'Browse our complete catalog of AI-powered tools. Each tool is designed for specific creative needs. Check AI Spark costs and available features for your plan.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-tool-selection-dashboard-showing-a-gri-1772690553993-bc91f729.png',
              imageAlt: 'Tool Selection',
              buttons: [{ text: 'View Tools', href: '/tools' }]
            },
            {
              id: 3,
              tag: 'Step 3',
              title: 'Create Content',
              subtitle: 'Generate professional results',
              description: 'Upload images, enter prompts, or provide URLs. AI processes your request and generates stunning results. Different tools offer unique capabilities - from image generation to video creation.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-active-tool-interface-showing-a-user--1772690553622-071c33ab.png',
              imageAlt: 'Content Creation',
              buttons: [{ text: 'Start Creating', href: '/dashboard' }]
            },
            {
              id: 4,
              tag: 'Step 4',
              title: 'Download & Share',
              subtitle: 'Export in multiple formats',
              description: 'Download your creations in HD quality (Premium+) or standard quality. Download as PNG, JPG, WEBP, PDF, or video formats. Share directly to social media or save for later.',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-download-export-dialog-showing-multipl-1772690551288-4817c43f.png',
              imageAlt: 'Download Options',
              buttons: [{ text: 'Explore Features', href: '/features' }]
            }
          ]}
          title="How Brainify Works"
          description="Simple, intuitive workflow for creating amazing AI content in minutes."
          tag="Getting Started"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: 'Start Free Trial', href: '/signup' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          metrics={[
            { id: '1', icon: TrendingUp, title: 'Active Users', value: '50,000+' },
            { id: '2', icon: Zap, title: 'AI Sparks Used', value: '10M+' },
            { id: '3', icon: Image, title: 'Content Created', value: '1M+' },
            { id: '4', icon: Heart, title: 'Satisfaction Rate', value: '98%' }
          ]}
          title="Growing Fast - Join Our Community"
          description="Trusted by thousands of creators, designers, and businesses worldwide."
          tag="Metrics"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          buttons={[{ text: 'Join Today', href: '/signup' }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: '1',
              name: 'Sarah Chen, Content Creator',
              date: 'Date: January 2025',
              title: 'Brainify Changed My Workflow!',
              quote: 'I used to spend hours on image editing. With Brainify\'s AI Image Generator and Background Remover, I create 10x more content in the same time. The AI Sparks system is incredibly fair and transparent.',
              tag: 'Premium Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-woman-1772690551807-b41482d4.png',
              avatarAlt: 'Sarah Chen',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-content-creator-s-workspace-showing-mu-1772690553889-35acd250.png',
              imageAlt: 'Sarah\'s Content Creation'
            },
            {
              id: '2',
              name: 'Ahmed Khan, Designer',
              date: 'Date: January 2025',
              title: 'Best AI Tools I\'ve Found',
              quote: 'The AI Logo Generator and AI Thumbnail Creator save me hours every week. The quality is professional-grade, and the pricing is unbeatable compared to competitors. Customer support is responsive and helpful.',
              tag: 'Gold Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-man-m-1772690551010-cf71a034.png',
              avatarAlt: 'Ahmed Khan',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-designer-s-portfolio-showcase-displayi-1772690553715-b8d696b5.png',
              imageAlt: 'Ahmed\'s Design Work'
            },
            {
              id: '3',
              name: 'Maya Patel, Video Producer',
              date: 'Date: December 2024',
              title: 'Face Swap Video is Incredible',
              quote: 'The Face Swap Video feature is industry-leading. I\'ve tried other platforms and Brainify\'s AI quality is superior. The Text to Video tool helped me create viral content. Highly recommend!',
              tag: 'Diamond Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-woman-1772690551659-ae2e874e.png',
              avatarAlt: 'Maya Patel',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-video-production-studio-setup-showing--1772690553761-2a1109bf.png',
              imageAlt: 'Maya\'s Video Production'
            },
            {
              id: '4',
              name: 'David Rodriguez, Entrepreneur',
              date: 'Date: December 2024',
              title: 'Game Changer for Marketing',
              quote: 'Brainify\'s tools have transformed my marketing strategy. The AI Art Generator and Photo Enhancer help me create stunning visuals for social media. The daily free sparks are a nice bonus!',
              tag: 'Basic Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-man-h-1772690551315-c2106a49.png',
              avatarAlt: 'David Rodriguez',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-marketing-dashboard-showing-social-med-1772690553698-fe9a940d.png',
              imageAlt: 'David\'s Marketing Materials'
            },
            {
              id: '5',
              name: 'Lisa Wong, Photographer',
              date: 'Date: November 2024',
              title: 'HD Enhancement is Perfect',
              quote: 'The Blur to HD Enhancer brings old photos back to life. The quality improvement is stunning and it\'s saved me hundreds of hours on manual retouching. Excellent platform!',
              tag: 'Premium Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-woman-1772690551633-17e96364.png',
              avatarAlt: 'Lisa Wong',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/before-and-after-photography-showing-old-1772690553975-3b8c8001.png',
              imageAlt: 'Lisa\'s Photo Enhancements'
            },
            {
              id: '6',
              name: 'Marcus Johnson, Agency Owner',
              date: 'Date: November 2024',
              title: 'Perfect for Agency Workflows',
              quote: 'We use Brainify for all our client projects. The team plan and credit system make scaling super easy. The AI quality is consistent and professional. Best investment for our agency!',
              tag: 'Gold Plan',
              avatarSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/a-professional-headshot-photo-of-a-man-a-1772690553430-08711ab4.png',
              avatarAlt: 'Marcus Johnson',
              imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/an-agency-office-environment-with-team-c-1772690554013-02d7e40c.png',
              imageAlt: 'Agency Portfolio'
            }
          ]}
          title="Loved by Creative Professionals"
          description="See what content creators, designers, and innovators are saying about Brainify."
          tag="Success Stories"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[]}
          buttonAnimation="none"
          textboxLayout="default"
          useInvertedBackground={false}
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

      <div id="payment" data-section="payment">
        <div className="w-full py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Payment Methods</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Choose your preferred payment method to get started with Brainify</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* EasyPaisa Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">EasyPaisa</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Fast and secure mobile payments</p>
                    </div>
                    <img 
                      src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/uploaded-1772690936952-j6mf96ds.png" 
                      alt="EasyPaisa Logo" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6 mb-6">
                    <img 
                      src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AVswAIYlsTNcIZ3oIHvVtQVpeu/uploaded-1772690936951-18eqjtj8.png" 
                      alt="EasyPaisa QR Code" 
                      className="w-full max-w-xs mx-auto"
                    />
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Instant payment processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700 dark:text-slate-300">No additional fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Secure and encrypted transactions</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                    Pay with EasyPaisa
                  </button>
                </div>
              </div>

              {/* Other Payment Methods */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Other Methods</h3>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                      Credit/Debit Card
                    </button>
                    <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                      Bank Transfer
                    </button>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                      JazzCash
                    </button>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                      PayPal
                    </button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Need help?</strong> Contact our support team at support@brainify.ai or WhatsApp us at +92 314 7356117
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          background={{ variant: 'plain' }}
          useInvertedBackground={false}
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