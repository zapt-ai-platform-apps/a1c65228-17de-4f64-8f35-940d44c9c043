import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '@/modules/core/components/SectionHeading';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      position: 'Founder, TechStartup',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Aplikasi ini sangat membantu dalam memvalidasi ide bisnis saya. Analisisnya mendalam dan rekomendasi yang diberikan sangat relevan dengan pasar Indonesia. Berkat aplikasi ini, saya bisa memulai bisnis dengan lebih percaya diri.',
      rating: 5,
    },
    {
      name: 'Siti Rahayu',
      position: 'CEO, Fashion Brand',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Fitur Generator RBX76S sangat inovatif! Saya mendapatkan inspirasi bisnis yang tidak pernah terpikirkan sebelumnya. Data pasar yang disediakan juga sangat membantu dalam mengembangkan strategi pemasaran yang efektif.',
      rating: 5,
    },
    {
      name: 'Ahmad Hidayat',
      position: 'F&B Entrepreneur',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      content: 'Saya telah menggunakan banyak aplikasi untuk mengembangkan bisnis kuliner saya, tapi Validator Ide Bisnis adalah yang terbaik. Template bisnis dan panduan step-by-step sangat detail dan mudah diikuti bahkan untuk pemula seperti saya.',
      rating: 4,
    },
    {
      name: 'Diana Purnama',
      position: 'Digital Marketer',
      image: 'https://randomuser.me/api/portraits/women/24.jpg',
      content: 'Sebagai konsultan digital marketing, saya merekomendasikan aplikasi ini ke semua klien saya. Analisis tren pasar sangat akurat dan membantu mereka memahami arah bisnis yang harus dikembangkan di era digital ini.',
      rating: 5,
    },
    {
      name: 'Reza Mahendra',
      position: 'Investor',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      content: 'Dari perspektif investor, aplikasi ini memberikan analisis yang komprehensif yang membantu saya mengevaluasi potensi investasi dengan lebih baik. Fitur simulasi bisnis sangat berguna untuk memprediksi return on investment.',
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Apa Kata Pengguna"
          subtitle="Lihat bagaimana aplikasi kami telah membantu para entrepreneur Indonesia mengembangkan dan memvalidasi ide bisnis mereka."
          centered={true}
        />
        
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-xl p-6 shadow-card h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-dark-600">{testimonial.name}</h4>
                      <p className="text-sm text-dark-400">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-dark-500 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-50 rounded-lg p-6 max-w-3xl">
            <div className="text-4xl text-primary-600 font-bold mb-2">500+</div>
            <p className="text-lg text-dark-500 mb-4">Pengusaha telah menggunakan aplikasi kami</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-dark-600">94%</div>
                <p className="text-sm text-dark-400">Tingkat Kepuasan</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-600">87%</div>
                <p className="text-sm text-dark-400">Sukses Bisnis</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-600">12K+</div>
                <p className="text-sm text-dark-400">Ide Tervalidasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}