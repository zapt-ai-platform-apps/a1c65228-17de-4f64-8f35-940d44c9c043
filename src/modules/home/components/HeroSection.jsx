import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiArrowRight } from 'react-icons/hi';
import Button from '@/modules/core/components/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden bg-hero-pattern">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4">
              Powered by RBX76S Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-700 mb-6">
              Validasi Ide Bisnis Anda<br />
              <span className="text-gradient">Secara Profesional</span>
            </h1>
            <p className="text-lg text-dark-500 mb-8 max-w-lg">
              Aplikasi komprehensif untuk menganalisis, memvalidasi, dan mengembangkan ide bisnis Anda 
              dengan teknologi RBX76S. Jadikan impian bisnis Anda menjadi kenyataan!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                to="/validator"
                variant="primary"
                size="lg"
                icon={<HiLightningBolt className="w-5 h-5" />}
              >
                Validasi Ide Bisnis Sekarang
              </Button>
              
              <Button
                to="/generator"
                variant="outline"
                size="lg"
                icon={<HiArrowRight className="w-5 h-5" />}
              >
                Coba Generator RBX76S
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(num => (
                  <img 
                    key={num}
                    src={`https://randomuser.me/api/portraits/men/${num + 20}.jpg`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-dark-400">
                <span className="text-primary-600 font-medium">500+</span> pengusaha telah menggunakan aplikasi ini
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm font-medium text-dark-500">
                  Validator Ide Bisnis RBX76S
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Hasil Analisis Ide Bisnis</h3>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                    85% Berhasil
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  {['Potensi Pasar', 'Kelayakan Finansial', 'Tingkat Persaingan', 'Keunikan Ide'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-dark-500">{item}</span>
                          <span className="text-sm text-dark-400">{75 + i * 5}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full" 
                            style={{ width: `${75 + i * 5}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
                  <h4 className="font-medium mb-2 text-dark-500">Rekomendasi Utama:</h4>
                  <p className="text-sm text-dark-400">
                    Ide bisnis ini memiliki potensi yang baik. Pertimbangkan untuk mengembangkan 
                    fitur differensiasi lebih lanjut dan lakukan validasi pasar dengan target segmen A dan B.
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn btn-primary">
                    Lihat Analisis Lengkap
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary-300 rounded-full blur-2xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}