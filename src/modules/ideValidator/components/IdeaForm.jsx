import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/modules/core/components/Button';

const industryOptions = [
  'Teknologi & Software',
  'E-commerce & Retail',
  'Kuliner & F&B',
  'Jasa Profesional',
  'Pendidikan',
  'Kesehatan & Wellness',
  'Keuangan & Fintech',
  'Manufaktur',
  'Transportasi & Logistik',
  'Travel & Pariwisata',
  'Media & Hiburan',
  'Pertanian & Agritech',
  'Properti & Real Estate',
  'Fashion & Lifestyle',
  'Energi & Lingkungan',
  'Lainnya'
];

const businessModelOptions = [
  'B2C (Business to Consumer)',
  'B2B (Business to Business)',
  'B2B2C (Business to Business to Consumer)',
  'C2C (Consumer to Consumer)',
  'Marketplace',
  'SaaS (Software as a Service)',
  'Subscription',
  'Franchise',
  'Dropshipping',
  'Freemium',
  'Advertising',
  'Lainnya'
];

const targetMarketOptions = [
  'Lokal (Kota)',
  'Regional (Provinsi)',
  'Nasional (Indonesia)',
  'ASEAN',
  'Asia',
  'Global'
];

const capitalRangeOptions = [
  'Di bawah Rp 10 juta',
  'Rp 10 juta - Rp 50 juta',
  'Rp 50 juta - Rp 200 juta',
  'Rp 200 juta - Rp 500 juta',
  'Rp 500 juta - Rp 1 miliar',
  'Di atas Rp 1 miliar'
];

export default function IdeaForm({ onSubmit, loading }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-6">Detail Ide Bisnis Anda</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div>
            <label className="block text-dark-500 font-medium mb-2" htmlFor="ideaName">
              Nama Ide Bisnis <span className="text-accent-600">*</span>
            </label>
            <input
              id="ideaName"
              type="text"
              className="input-field"
              placeholder="Masukkan nama ide bisnis Anda"
              {...register('ideaName', { required: 'Nama ide bisnis wajib diisi' })}
            />
            {errors.ideaName && (
              <p className="mt-1 text-sm text-accent-600">{errors.ideaName.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-dark-500 font-medium mb-2" htmlFor="ideaDescription">
              Deskripsi Ide <span className="text-accent-600">*</span>
            </label>
            <textarea
              id="ideaDescription"
              rows="4"
              className="input-field"
              placeholder="Jelaskan ide bisnis Anda secara detail"
              {...register('ideaDescription', { 
                required: 'Deskripsi ide wajib diisi',
                minLength: { value: 50, message: 'Deskripsi minimal 50 karakter' }
              })}
            ></textarea>
            {errors.ideaDescription && (
              <p className="mt-1 text-sm text-accent-600">{errors.ideaDescription.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-dark-500 font-medium mb-2" htmlFor="industry">
                Industri <span className="text-accent-600">*</span>
              </label>
              <select
                id="industry"
                className="input-field"
                {...register('industry', { required: 'Pilih industri' })}
              >
                <option value="">Pilih industri</option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-accent-600">{errors.industry.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-dark-500 font-medium mb-2" htmlFor="businessModel">
                Model Bisnis <span className="text-accent-600">*</span>
              </label>
              <select
                id="businessModel"
                className="input-field"
                {...register('businessModel', { required: 'Pilih model bisnis' })}
              >
                <option value="">Pilih model bisnis</option>
                {businessModelOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.businessModel && (
                <p className="mt-1 text-sm text-accent-600">{errors.businessModel.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-dark-500 font-medium mb-2" htmlFor="targetMarket">
                Target Pasar <span className="text-accent-600">*</span>
              </label>
              <select
                id="targetMarket"
                className="input-field"
                {...register('targetMarket', { required: 'Pilih target pasar' })}
              >
                <option value="">Pilih target pasar</option>
                {targetMarketOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.targetMarket && (
                <p className="mt-1 text-sm text-accent-600">{errors.targetMarket.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-dark-500 font-medium mb-2" htmlFor="capitalRange">
                Rentang Modal <span className="text-accent-600">*</span>
              </label>
              <select
                id="capitalRange"
                className="input-field"
                {...register('capitalRange', { required: 'Pilih rentang modal' })}
              >
                <option value="">Pilih rentang modal</option>
                {capitalRangeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.capitalRange && (
                <p className="mt-1 text-sm text-accent-600">{errors.capitalRange.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-dark-500 font-medium mb-2" htmlFor="uniqueValue">
              Nilai Unik / Diferensiasi <span className="text-accent-600">*</span>
            </label>
            <textarea
              id="uniqueValue"
              rows="3"
              className="input-field"
              placeholder="Jelaskan apa yang membuat ide bisnis Anda unik atau berbeda dari yang sudah ada"
              {...register('uniqueValue', { required: 'Nilai unik wajib diisi' })}
            ></textarea>
            {errors.uniqueValue && (
              <p className="mt-1 text-sm text-accent-600">{errors.uniqueValue.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-dark-500 font-medium mb-2" htmlFor="competitors">
              Pesaing Utama
            </label>
            <textarea
              id="competitors"
              rows="2"
              className="input-field"
              placeholder="Sebutkan pesaing utama yang sudah ada di pasar (jika ada)"
              {...register('competitors')}
            ></textarea>
          </div>
          
          <div>
            <label className="block text-dark-500 font-medium mb-2" htmlFor="challenges">
              Tantangan Potensial
            </label>
            <textarea
              id="challenges"
              rows="2"
              className="input-field"
              placeholder="Tantangan atau hambatan apa yang mungkin Anda hadapi?"
              {...register('challenges')}
            ></textarea>
          </div>
          
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Analisis Ide Bisnis
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}