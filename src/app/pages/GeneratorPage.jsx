import React, { useState } from 'react';
import { 
  HiLightningBolt, 
  HiCurrencyDollar, 
  HiLightBulb, 
  HiBeaker, 
  HiShieldCheck, 
  HiDocumentText, 
  HiArrowRight,
  HiChevronRight,
  HiOutlineDownload,
  HiOutlineSave,
  HiRefresh
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';

export default function GeneratorPage() {
  const [formData, setFormData] = useState({
    interests: [],
    skills: [],
    capitalRange: '',
    timeCommitment: '',
    riskTolerance: '',
    preferredIndustry: '',
    ideaCount: 3
  });
  
  const [generatingIdeas, setGeneratingIdeas] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState(null);
  
  const interestOptions = [
    'Teknologi', 'Makanan & Minuman', 'Kesehatan', 'Edukasi', 'Keuangan',
    'Hiburan', 'Fashion', 'Fitness', 'Lingkungan', 'Seni & Kreativitas',
    'Travel', 'E-commerce', 'Media Sosial', 'Permainan', 'Real Estate'
  ];
  
  const skillOptions = [
    'Coding/Programming', 'Marketing', 'Sales', 'Design', 'Writing',
    'Data Analysis', 'Project Management', 'Customer Service', 'Networking',
    'Content Creation', 'Financial Management', 'Leadership', 'Cooking/Baking',
    'Handcrafting', 'Teaching', 'Public Speaking'
  ];
  
  const capitalRangeOptions = [
    { value: 'low', label: '< Rp 10 Juta' },
    { value: 'medium', label: 'Rp 10 Juta - Rp 100 Juta' },
    { value: 'high', label: 'Rp 100 Juta - Rp 500 Juta' },
    { value: 'very_high', label: '> Rp 500 Juta' }
  ];
  
  const timeCommitmentOptions = [
    { value: 'part_time', label: 'Part-time (10-20 jam/minggu)' },
    { value: 'full_time', label: 'Full-time (40+ jam/minggu)' }
  ];
  
  const riskToleranceOptions = [
    { value: 'low', label: 'Rendah (Bisnis Stabil & Aman)' },
    { value: 'medium', label: 'Sedang (Berimbang)' },
    { value: 'high', label: 'Tinggi (Inovatif & Potensial Besar)' }
  ];
  
  const industryOptions = [
    { value: 'tech', label: 'Teknologi & Digital' },
    { value: 'food', label: 'Kuliner & F&B' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'services', label: 'Jasa Profesional' },
    { value: 'creative', label: 'Industri Kreatif' },
    { value: 'health', label: 'Kesehatan & Wellness' },
    { value: 'education', label: 'Pendidikan' },
    { value: 'any', label: 'Tidak Ada Preferensi' }
  ];
  
  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };
  
  const handleSkillToggle = (skill) => {
    setFormData(prev => {
      if (prev.skills.includes(skill)) {
        return { ...prev, skills: prev.skills.filter(s => s !== skill) };
      } else {
        return { ...prev, skills: [...prev.skills, skill] };
      }
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.interests.length === 0 || formData.skills.length === 0 || !formData.capitalRange || !formData.riskTolerance) {
      alert('Silakan lengkapi form dengan data yang diperlukan.');
      return;
    }
    
    setGeneratingIdeas(true);
    
    // Mock delay to simulate API call
    setTimeout(() => {
      // Generate random business ideas based on inputs
      const mockIdeas = generateMockIdeas(formData);
      setGeneratedIdeas(mockIdeas);
      setGeneratingIdeas(false);
      
      // Scroll to results
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };
  
  const handleRegenerate = () => {
    setGeneratingIdeas(true);
    
    // Mock delay to simulate API call
    setTimeout(() => {
      // Generate new random business ideas
      const mockIdeas = generateMockIdeas(formData);
      setGeneratedIdeas(mockIdeas);
      setGeneratingIdeas(false);
    }, 2000);
  };
  
  const generateMockIdeas = (data) => {
    // In a real app, this would call an AI API to generate ideas
    // Here we'll just create some mock data based on user inputs
    
    const ideas = [];
    const count = Number(data.ideaCount) || 3;
    
    // Sample idea templates for each industry
    const ideaTemplates = {
      tech: [
        {
          title: 'Platform Marketplace untuk Jasa Freelance Lokal',
          description: 'Platform yang menghubungkan freelancer lokal dengan klien potensial, dengan fokus pada verifikasi keahlian dan sistem pembayaran yang aman.',
          businessModel: 'Marketplace / Commission',
          potential: 'high',
          competition: 'medium',
          timeline: '6-12 bulan',
          capitalNeeded: 'medium',
          keySuccessFactors: [
            'Membangun user base freelancer berkualitas',
            'Sistem verifikasi keahlian yang kredibel',
            'UX yang intuitif untuk klien dan freelancer',
            'Sistem escrow untuk transaksi aman'
          ]
        },
        {
          title: 'Aplikasi Smart Home untuk Efisiensi Energi',
          description: 'Aplikasi yang terintegrasi dengan perangkat smart home untuk mengoptimalkan penggunaan energi dan mengurangi tagihan listrik rumah tangga.',
          businessModel: 'SaaS / Subscription',
          potential: 'high',
          competition: 'medium',
          timeline: '12-18 bulan',
          capitalNeeded: 'high',
          keySuccessFactors: [
            'Integrasi dengan berbagai perangkat smart home',
            'Algoritma AI untuk optimasi penggunaan energi',
            'UX yang sederhana dan intuitif',
            'Fitur reporting penghematan yang terukur'
          ]
        },
        {
          title: 'Edtech Platform untuk Skill Digital',
          description: 'Platform pembelajaran interaktif yang fokus pada keterampilan digital dengan kurikulum yang update dengan tren teknologi terkini.',
          businessModel: 'Subscription / Freemium',
          potential: 'high',
          competition: 'high',
          timeline: '6-12 bulan',
          capitalNeeded: 'medium',
          keySuccessFactors: [
            'Konten berkualitas tinggi dan updated',
            'Metode pembelajaran yang interaktif',
            'Sertifikasi yang diakui industri',
            'Komunitas pengguna yang aktif'
          ]
        }
      ],
      food: [
        {
          title: 'Cloud Kitchen untuk Makanan Sehat Delivery',
          description: 'Cloud kitchen yang menyediakan makanan sehat dan nutrisi lengkap dengan layanan berlangganan dan delivery ke rumah/kantor.',
          businessModel: 'Subscription / Direct Sales',
          potential: 'medium',
          competition: 'medium',
          timeline: '3-6 bulan',
          capitalNeeded: 'medium',
          keySuccessFactors: [
            'Menu yang bervariasi dan nutrisi seimbang',
            'Sistem delivery yang efisien',
            'Packaging ramah lingkungan',
            'Aplikasi pemesanan yang user-friendly'
          ]
        },
        {
          title: 'Kit Masak Meal-Prep dengan Resep Lokal',
          description: 'Layanan berlangganan meal kit dengan fokus pada masakan lokal yang dikirim lengkap dengan bahan-bahan yang sudah diukur dan instruksi memasak.',
          businessModel: 'Subscription',
          potential: 'medium',
          competition: 'low',
          timeline: '3-6 bulan',
          capitalNeeded: 'medium',
          keySuccessFactors: [
            'Resep yang mudah diikuti tapi lezat',
            'Bahan berkualitas dari sumber lokal',
            'Packaging yang efisien dan ramah lingkungan',
            'Rotasi menu yang menarik'
          ]
        }
      ],
      // Templates for other industries would be added similarly
    };
    
    // Generate random ideas based on user preference
    for (let i = 0; i < count; i++) {
      // Choose one interest and one skill randomly from user selections
      const randomInterest = data.interests[Math.floor(Math.random() * data.interests.length)];
      const randomSkill = data.skills[Math.floor(Math.random() * data.skills.length)];
      
      // Pick a relevant industry (either user selected or random)
      let industry = data.preferredIndustry;
      if (industry === 'any' || !industry) {
        const industries = Object.keys(ideaTemplates);
        industry = industries[Math.floor(Math.random() * industries.length)];
      }
      
      // Get random template for the industry
      const templates = ideaTemplates[industry] || ideaTemplates.tech;
      const template = templates[Math.floor(Math.random() * templates.length)];
      
      // Add some randomness
      const profitPotential = Math.floor(60 + Math.random() * 35);
      const implementationDifficulty = Math.floor(30 + Math.random() * 60);
      const innovationScore = Math.floor(50 + Math.random() * 45);
      
      ideas.push({
        id: i + 1,
        title: template.title,
        description: template.description,
        industry: industry,
        businessModel: template.businessModel,
        profitPotential,
        implementationDifficulty,
        innovationScore,
        keyFactors: template.keySuccessFactors,
        timeline: template.timeline,
        interests: [randomInterest],
        skills: [randomSkill],
        capitalNeeded: template.capitalNeeded,
        competition: template.competition
      });
    }
    
    return ideas;
  };
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Generator Ide Bisnis RBX76S"
          subtitle="Teknologi AI canggih untuk menghasilkan ide bisnis yang sesuai dengan minat, keahlian, dan anggaran Anda. Temukan inspirasi usaha unik dan inovatif."
          centered={true}
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden mb-12">
            <div className="p-8 md:p-10 text-white relative">
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFFFFF" d="M39.4,-67.3C50.5,-60.3,58.9,-48.5,64.6,-36C70.4,-23.4,73.5,-10,73.4,3.6C73.2,17.2,69.9,30.9,62.3,41.6C54.8,52.2,43.1,59.8,30.7,63.7C18.3,67.6,5.2,67.8,-7.7,65.7C-20.5,63.6,-33.2,59.3,-45.1,52C-57,44.6,-68.2,34.2,-72.8,21.3C-77.5,8.3,-75.6,-7.2,-69.4,-19.9C-63.2,-32.6,-52.7,-42.4,-41.3,-49.3C-29.8,-56.2,-17.3,-60.1,-3.5,-64.9C10.3,-69.6,28.3,-74.3,39.4,-67.3Z" transform="translate(100 100)" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="flex items-center mb-4">
                    <HiLightningBolt className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-semibold">Teknologi RBX76S</h3>
                  </div>
                  <p className="text-primary-100 mb-6">
                    Generator ide bisnis RBX76S menggunakan algoritma AI canggih yang menganalisis tren pasar, 
                    kebutuhan konsumen, dan peluang bisnis untuk menghasilkan ide yang paling sesuai dengan profil Anda.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <HiBeaker className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Algoritma Canggih</h4>
                        <p className="text-sm text-primary-100">Menganalisis jutaan data point pasar</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <HiLightBulb className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Ide Inovatif</h4>
                        <p className="text-sm text-primary-100">Inspirasi bisnis yang relevan & unik</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <HiCurrencyDollar className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Analisis Finansial</h4>
                        <p className="text-sm text-primary-100">Potensi keuntungan & modal yang dibutuhkan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <HiShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Validasi Konsep</h4>
                        <p className="text-sm text-primary-100">Skor kelayakan berdasarkan data historis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="absolute -top-3 -right-3 bg-secondary-500 text-white text-xs uppercase font-bold py-1 px-2 rounded-md">
                    Powered by AI
                  </div>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-3">
                      <HiLightningBolt className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold">RBX76S Generator</h3>
                    <p className="text-sm text-primary-100">Business Idea Generator System</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Accuracy</span>
                        <span>98.2%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '98.2%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Data Coverage</span>
                        <span>97.8%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '97.8%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Processing Power</span>
                        <span>99.5%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '99.5%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 text-center">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-2xl font-bold">3.4M+</div>
                        <div className="text-xs text-white/70">Data Points</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">250K+</div>
                        <div className="text-xs text-white/70">Ideas Generated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6 md:p-8 border-b border-gray-100">
                  <h2 className="text-xl font-semibold mb-2">Personalisasi Generator Ide Bisnis</h2>
                  <p className="text-dark-400">
                    Sesuaikan parameter untuk mendapatkan ide bisnis yang paling cocok dengan profil, preferensi, dan situasi Anda.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-dark-500 font-medium mb-2">
                        Minat & Passion Anda
                      </label>
                      <p className="text-sm text-dark-400 mb-3">
                        Pilih area yang Anda minati dan passionate dalam mengembangkannya (pilih 1-5)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {interestOptions.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              formData.interests.includes(interest)
                                ? 'bg-primary-100 text-primary-800 border border-primary-200'
                                : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                            }`}
                            onClick={() => handleInterestToggle(interest)}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-dark-500 font-medium mb-2">
                        Keahlian & Skill Anda
                      </label>
                      <p className="text-sm text-dark-400 mb-3">
                        Pilih skill atau keahlian yang Anda miliki (pilih 1-5)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillOptions.map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              formData.skills.includes(skill)
                                ? 'bg-primary-100 text-primary-800 border border-primary-200'
                                : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                            }`}
                            onClick={() => handleSkillToggle(skill)}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-dark-500 font-medium mb-2" htmlFor="capitalRange">
                          Rentang Modal
                        </label>
                        <select
                          id="capitalRange"
                          name="capitalRange"
                          className="input-field"
                          value={formData.capitalRange}
                          onChange={handleChange}
                        >
                          <option value="">Pilih rentang modal</option>
                          {capitalRangeOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-dark-500 font-medium mb-2" htmlFor="timeCommitment">
                          Komitmen Waktu
                        </label>
                        <select
                          id="timeCommitment"
                          name="timeCommitment"
                          className="input-field"
                          value={formData.timeCommitment}
                          onChange={handleChange}
                        >
                          <option value="">Pilih komitmen waktu</option>
                          {timeCommitmentOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-dark-500 font-medium mb-2" htmlFor="riskTolerance">
                          Toleransi Risiko
                        </label>
                        <select
                          id="riskTolerance"
                          name="riskTolerance"
                          className="input-field"
                          value={formData.riskTolerance}
                          onChange={handleChange}
                        >
                          <option value="">Pilih toleransi risiko</option>
                          {riskToleranceOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-dark-500 font-medium mb-2" htmlFor="preferredIndustry">
                          Preferensi Industri
                        </label>
                        <select
                          id="preferredIndustry"
                          name="preferredIndustry"
                          className="input-field"
                          value={formData.preferredIndustry}
                          onChange={handleChange}
                        >
                          <option value="">Pilih preferensi industri</option>
                          {industryOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-dark-500 font-medium mb-2" htmlFor="ideaCount">
                        Jumlah Ide yang Diinginkan
                      </label>
                      <select
                        id="ideaCount"
                        name="ideaCount"
                        className="input-field"
                        value={formData.ideaCount}
                        onChange={handleChange}
                      >
                        <option value="3">3 Ide Bisnis</option>
                        <option value="5">5 Ide Bisnis</option>
                        <option value="10">10 Ide Bisnis</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon={<HiLightningBolt className="w-5 h-5" />}
                        loading={generatingIdeas}
                        disabled={generatingIdeas}
                        fullWidth
                      >
                        {generatingIdeas ? 'Generating Ideas...' : 'Generate Ide Bisnis'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-card p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold mb-4">Mengapa Menggunakan RBX76S?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <HiLightBulb className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ide Bisnis Inovatif</h4>
                      <p className="text-sm text-dark-400">
                        Dapatkan ide bisnis yang unik, relevan, dan disesuaikan dengan minat serta keahlian Anda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <HiDocumentText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Analisis Komprehensif</h4>
                      <p className="text-sm text-dark-400">
                        Setiap ide dilengkapi dengan analisis kelayakan, potensi keuntungan, dan faktor kesuksesan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <HiCurrencyDollar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Kebutuhan Modal Realistis</h4>
                      <p className="text-sm text-dark-400">
                        Ide bisnis disesuaikan dengan budget yang Anda miliki, dari modal kecil hingga besar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <HiBeaker className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Data-Driven</h4>
                      <p className="text-sm text-dark-400">
                        Algoritma kami menganalisis jutaan data point dari bisnis yang sukses dan gagal.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <HiChevronRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Langkah Selanjutnya</h4>
                      <p className="text-sm text-dark-400">
                        Dapatkan panduan implementasi untuk mengubah ide menjadi bisnis nyata.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-sm font-medium ml-1">4.92/5</span>
                  </div>
                  <p className="text-sm text-dark-400 italic">
                    "RBX76S memberikan saya inspirasi bisnis yang tidak pernah terpikirkan sebelumnya. 
                    Dari 5 ide yang dihasilkan, 2 di antaranya sekarang menjadi bisnis yang berkembang!"
                  </p>
                  <div className="flex items-center mt-3">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="User" 
                      className="w-8 h-8 rounded-full mr-2" 
                    />
                    <div>
                      <div className="text-sm font-medium">Ahmad Riyadi</div>
                      <div className="text-xs text-dark-400">Tech Entrepreneur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {generatedIdeas && (
            <div id="results-section" className="mt-12">
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">
                      Ide Bisnis yang Direkomendasikan
                    </h2>
                    <p className="text-dark-400">
                      {generatedIdeas.length} ide bisnis yang sesuai dengan profil Anda, dianalisis oleh RBX76S
                    </p>
                  </div>
                  <div className="flex mt-4 md:mt-0 space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<HiRefresh className="w-4 h-4" />}
                      onClick={handleRegenerate}
                      loading={generatingIdeas}
                      disabled={generatingIdeas}
                    >
                      Regenerate
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<HiOutlineSave className="w-4 h-4" />}
                    >
                      Simpan Hasil
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<HiOutlineDownload className="w-4 h-4" />}
                    >
                      Download
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="space-y-8">
                    {generatedIdeas.map((idea, index) => (
                      <BusinessIdeaCard key={index} idea={idea} />
                    ))}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold mb-1">Selanjutnya: Validasi Ide Bisnis</h3>
                      <p className="text-dark-400">
                        Pilih ide yang paling menarik dan validasi kelayakannya dengan alat analisis kami
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      to="/validator"
                      icon={<HiArrowRight className="w-5 h-5" />}
                    >
                      Lanjut ke Validator
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BusinessIdeaCard({ idea }) {
  const [expanded, setExpanded] = useState(false);
  
  // Calculate combined score (weighted average)
  const combinedScore = Math.round(
    (idea.profitPotential * 0.4) + 
    ((100 - idea.implementationDifficulty) * 0.3) + 
    (idea.innovationScore * 0.3)
  );
  
  // Get status color for scores
  const getScoreColor = (score, isInverted = false) => {
    if (isInverted) {
      score = 100 - score; // For difficulty, lower is better
    }
    
    if (score >= 80) return 'text-green-600';
    if (score >= 65) return 'text-primary-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-accent-600';
  };
  
  // Get capital needed display text
  const getCapitalText = (capital) => {
    switch (capital) {
      case 'low': return '< Rp 10 Juta';
      case 'medium': return 'Rp 10 Juta - Rp 100 Juta';
      case 'high': return 'Rp 100 Juta - Rp 500 Juta';
      case 'very_high': return '> Rp 500 Juta';
      default: return 'Bervariasi';
    }
  };
  
  // Get competition level display text and color
  const getCompetitionText = (level) => {
    switch (level) {
      case 'low': return { text: 'Rendah', color: 'text-green-600' };
      case 'medium': return { text: 'Sedang', color: 'text-yellow-600' };
      case 'high': return { text: 'Tinggi', color: 'text-accent-600' };
      default: return { text: 'Bervariasi', color: 'text-gray-600' };
    }
  };
  
  const competitionInfo = getCompetitionText(idea.competition);
  
  return (
    <motion.div 
      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{idea.title}</h3>
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${getScoreColor(combinedScore)}`}>
              {combinedScore}
            </span>
            <span className="text-sm text-gray-500 ml-1">/100</span>
          </div>
        </div>
        
        <p className="text-dark-500 mb-6">{idea.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Business Model</div>
            <div className="font-medium">{idea.businessModel}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Kebutuhan Modal</div>
            <div className="font-medium">{getCapitalText(idea.capitalNeeded)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Timeline</div>
            <div className="font-medium">{idea.timeline}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Kompetisi</div>
            <div className={`font-medium ${competitionInfo.color}`}>{competitionInfo.text}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Potensi Profit</span>
              <span className={`text-sm ${getScoreColor(idea.profitPotential)}`}>{idea.profitPotential}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${idea.profitPotential >= 80 ? 'bg-green-500' : idea.profitPotential >= 65 ? 'bg-primary-600' : idea.profitPotential >= 50 ? 'bg-yellow-500' : 'bg-accent-600'} h-2 rounded-full`} 
                style={{ width: `${idea.profitPotential}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Kemudahan Implementasi</span>
              <span className={`text-sm ${getScoreColor(idea.implementationDifficulty, true)}`}>{100 - idea.implementationDifficulty}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${idea.implementationDifficulty <= 20 ? 'bg-green-500' : idea.implementationDifficulty <= 35 ? 'bg-primary-600' : idea.implementationDifficulty <= 50 ? 'bg-yellow-500' : 'bg-accent-600'} h-2 rounded-full`} 
                style={{ width: `${100 - idea.implementationDifficulty}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Inovasi</span>
              <span className={`text-sm ${getScoreColor(idea.innovationScore)}`}>{idea.innovationScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${idea.innovationScore >= 80 ? 'bg-green-500' : idea.innovationScore >= 65 ? 'bg-primary-600' : idea.innovationScore >= 50 ? 'bg-yellow-500' : 'bg-accent-600'} h-2 rounded-full`} 
                style={{ width: `${idea.innovationScore}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 mb-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Minat yang Cocok</div>
            <div className="flex flex-wrap gap-2">
              {idea.interests.map((interest, index) => (
                <span key={index} className="inline-block bg-primary-50 text-primary-800 px-2 py-0.5 rounded text-xs font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Keahlian yang Diperlukan</div>
            <div className="flex flex-wrap gap-2">
              {idea.skills.map((skill, index) => (
                <span key={index} className="inline-block bg-secondary-50 text-secondary-800 px-2 py-0.5 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium mb-2">Faktor Kunci Keberhasilan:</h4>
            <ul className="space-y-1">
              {idea.keyFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-primary-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-4 flex justify-between items-center">
          <button
            className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
            {expanded ? (
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
          
          <Button
            variant="primary"
            size="sm"
            to="/validator"
          >
            Validasi Ide
          </Button>
        </div>
      </div>
    </motion.div>
  );
}