import React from 'react';
import Button from '@/modules/core/components/Button';
import { HiLightningBolt, HiChevronRight } from 'react-icons/hi';

export default function Cta() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Memvalidasi dan Mengembangkan Ide Bisnis Anda?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Dapatkan akses ke semua fitur canggih aplikasi kami dan mulai perjalanan bisnis Anda dengan langkah yang tepat.
              Menggunakan teknologi RBX76S yang inovatif untuk memaksimalkan potensi bisnis Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/validator"
                variant="secondary"
                size="lg"
                icon={<HiLightningBolt className="w-5 h-5" />}
              >
                Validasi Ide Bisnis Sekarang
              </Button>
              
              <Button
                to="/generator"
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                icon={<HiChevronRight className="w-5 h-5" />}
              >
                Coba Generator RBX76S
              </Button>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">
              Tidak perlu kartu kredit. Mulai dengan fitur dasar secara gratis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}