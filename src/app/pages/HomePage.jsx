import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiLightningBolt,
  HiChartBar,
  HiClipboardCheck,
  HiLightBulb,
  HiTemplate,
  HiSearch,
  HiSparkles,
  HiCubeTransparent,
  HiShieldCheck,
} from 'react-icons/hi';
import Button from '@/modules/core/components/Button';
import SectionHeading from '@/modules/core/components/SectionHeading';
import FeatureCard from '@/modules/core/components/FeatureCard';
import HeroSection from '@/modules/home/components/HeroSection';
import FeatureShowcase from '@/modules/home/components/FeatureShowcase';
import Testimonials from '@/modules/home/components/Testimonials';
import Cta from '@/modules/home/components/Cta';

export default function HomePage() {
  const mainFeatures = [
    {
      icon: <HiChartBar className="w-6 h-6" />,
      title: 'Analisis Ide Bisnis',
      description: 'Analisis komprehensif untuk potensi pasar, tren industri, kelayakan, dan tingkat persaingan bisnis Anda.',
      link: '/validator',
      color: 'primary'
    },
    {
      icon: <HiClipboardCheck className="w-6 h-6" />,
      title: 'Panduan Step-by-Step',
      description: 'Panduan langkah demi langkah yang terperinci dari perencanaan awal hingga ekspansi bisnis.',
      link: '/guide',
      color: 'green'
    },
    {
      icon: <HiLightBulb className="w-6 h-6" />,
      title: 'Tips & Trik Bisnis',
      description: 'Strategi operasional, pemasaran, dan solusi dari pengusaha sukses di berbagai sektor.',
      link: '/tips',
      color: 'orange'
    },
    {
      icon: <HiTemplate className="w-6 h-6" />,
      title: 'Template & Tools',
      description: 'Template profesional untuk rencana bisnis, analisis SWOT, roadmap pertumbuhan, dan model bisnis kanvas.',
      link: '/templates',
      color: 'blue'
    },
    {
      icon: <HiSearch className="w-6 h-6" />,
      title: 'Riset Pasar',
      description: 'Fitur pencarian tren berdasarkan keyword ide bisnis dan analisis demografi konsumen.',
      link: '/market-research',
      color: 'purple'
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Generator RBX76S',
      description: 'Generator ide bisnis otomatis yang didorong oleh algoritma AI untuk memberikan ide unik sesuai minat Anda.',
      link: '/generator',
      color: 'accent'
    },
  ];

  const rbxFeatures = [
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: 'Ide Kreatif & Inovatif',
      description: 'Sistem cerdas yang menghasilkan ide bisnis berdasarkan analisis tren pasar dan kebutuhan konsumen.'
    },
    {
      icon: <HiCubeTransparent className="w-6 h-6" />,
      title: 'Simulasi Virtual',
      description: 'Uji kelayakan ide bisnis melalui simulasi dan lihat prediksi hasil sebelum implementasi di dunia nyata.'
    },
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: 'Validasi Keberhasilan',
      description: 'Teknologi AI yang mampu memprediksi tingkat keberhasilan berdasarkan analisis data historis.'
    },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Fitur Utama Aplikasi"
            subtitle="Dapatkan akses ke berbagai fitur canggih untuk membantu menganalisis, memvalidasi, dan mengembangkan ide bisnis Anda."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* RBX76S Technology */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Teknologi RBX76S"
            subtitle="Nikmati keunggulan teknologi terdepan dalam validasi dan pengembangan ide bisnis Anda dengan sistem RBX76S."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rbxFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              to="/generator" 
              variant="secondary" 
              size="lg"
              icon={<HiLightningBolt className="w-5 h-5" />}
            >
              Coba Generator RBX76S
            </Button>
          </div>
        </div>
      </section>
      
      <FeatureShowcase />
      
      <Testimonials />
      
      <Cta />
    </div>
  );
}