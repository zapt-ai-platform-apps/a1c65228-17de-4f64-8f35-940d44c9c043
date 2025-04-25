import React from 'react';
import { motion } from 'framer-motion';
import {
  HiDocumentText,
  HiLightningBolt,
  HiDatabase,
  HiChartBar,
  HiClock,
  HiGlobe,
} from 'react-icons/hi';
import SectionHeading from '@/modules/core/components/SectionHeading';

export default function FeatureShowcase() {
  const advancedFeatures = [
    {
      icon: <HiDocumentText className="w-6 h-6" />,
      title: 'Template Premium',
      description: 'Akses lengkap ke berbagai template bisnis profesional untuk mempercepat implementasi dan pengembangan.',
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Kecerdasan Buatan',
      description: 'Teknologi AI canggih untuk analisis mendalam dan rekomendasi personalisasi sesuai kebutuhan bisnis.',
    },
    {
      icon: <HiDatabase className="w-6 h-6" />,
      title: 'Database Studi Kasus',
      description: 'Koleksi studi kasus bisnis yang sukses dan gagal sebagai pembelajaran dan inspirasi.',
    },
    {
      icon: <HiChartBar className="w-6 h-6" />,
      title: 'Analitik Tren Pasar',
      description: 'Pemantauan dan analisis tren pasar terkini untuk membantu Anda melihat peluang yang berkembang.',
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      title: 'Evaluasi Berkala',
      description: 'Sistem evaluasi otomatis untuk membantu Anda terus mengukur dan meningkatkan performa bisnis.',
    },
    {
      icon: <HiGlobe className="w-6 h-6" />,
      title: 'Jaringan Global',
      description: 'Akses ke jaringan mitra potensial dan kolaborasi bisnis di berbagai industri dan pasar.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Fitur Inovasi Premium"
          subtitle="Nikmati rangkaian fitur premium yang akan membawa bisnis Anda ke level berikutnya dengan teknologi terdepan."
          centered={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-soft"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-600">{feature.title}</h3>
                  <p className="text-dark-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 relative p-8 rounded-2xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Teknologi RBX76S Ekslusif</h2>
              <p className="text-lg text-white/90 mb-6">
                Akses teknologi eksklusif RBX76S yang menggabungkan kecerdasan buatan dan analisis big data 
                untuk memberikan wawasan bisnis yang lebih mendalam dan akurat.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Analisis ide bisnis dengan akurasi 95%',
                  'Generator ide bisnis berdasarkan tren pasar terkini',
                  'Simulasi virtual untuk menguji kelayakan bisnis',
                  'Rekomendasi personalisasi berdasarkan profil dan minat'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs uppercase font-bold py-1 px-2 rounded-md">
                Exclusive
              </div>
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <HiLightningBolt className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-semibold">RBX76S Generator</h3>
              </div>
              <p className="text-white/80 mb-4">
                Teknologi canggih yang memadukan analisis big data dan kecerdasan buatan untuk 
                menghasilkan ide bisnis dengan potensi pasar yang tinggi.
              </p>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Processing Power</span>
                  <span className="text-sm">96%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-2xl font-bold">98.5%</div>
                  <div className="text-xs text-white/70">Akurasi</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-2xl font-bold">3.2M+</div>
                  <div className="text-xs text-white/70">Data Points</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}