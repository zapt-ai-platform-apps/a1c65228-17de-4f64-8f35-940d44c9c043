import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp, HiChevronRight, HiCheck, HiClock, HiClipboardList, HiCurrencyDollar, HiGlobe, HiPencil, HiUser } from 'react-icons/hi';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';

export default function GuidePage() {
  const [selectedIndustry, setSelectedIndustry] = useState('technology');
  const [selectedStage, setSelectedStage] = useState('planning');
  
  const industries = [
    { id: 'technology', name: 'Teknologi & Digital' },
    { id: 'food', name: 'Kuliner & F&B' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'services', name: 'Jasa Profesional' },
    { id: 'creative', name: 'Industri Kreatif' },
  ];
  
  const stages = [
    { id: 'planning', name: 'Perencanaan Awal', icon: <HiPencil className="w-5 h-5" /> },
    { id: 'validation', name: 'Validasi Pasar', icon: <HiClipboardList className="w-5 h-5" /> },
    { id: 'launching', name: 'Peluncuran Bisnis', icon: <HiGlobe className="w-5 h-5" /> },
    { id: 'growth', name: 'Pertumbuhan', icon: <HiCurrencyDollar className="w-5 h-5" /> },
    { id: 'scaling', name: 'Ekspansi', icon: <HiUser className="w-5 h-5" /> },
  ];
  
  const getGuideSteps = () => {
    // This would pull different content based on industry and stage
    // Here we'll just show sample data for technology + planning
    
    const steps = {
      technology: {
        planning: [
          {
            title: 'Mendefinisikan Visi dan Misi',
            description: 'Tentukan visi jangka panjang dan misi bisnis teknologi Anda dengan jelas.',
            tasks: [
              'Definisikan masalah yang ingin diselesaikan',
              'Identifikasi target pengguna utama',
              'Tentukan nilai unik yang Anda tawarkan',
              'Jelaskan dampak jangka panjang yang ingin dicapai'
            ],
            resources: [
              { title: 'Template Visi & Misi', link: '#' },
              { title: 'Panduan Penentuan Value Proposition', link: '#' }
            ],
            estimatedTime: '1-2 minggu'
          },
          {
            title: 'Riset Pasar & Analisis Kompetitor',
            description: 'Lakukan riset mendalam tentang pasar teknologi dan analisis kompetitor utama.',
            tasks: [
              'Lakukan survei terhadap 30-50 potensial pengguna',
              'Analisis 5 kompetitor utama (fitur, harga, model bisnis)',
              'Identifikasi celah pasar dan kebutuhan yang belum terpenuhi',
              'Kumpulkan data tren teknologi terkini di sektor Anda'
            ],
            resources: [
              { title: 'Template Analisis Kompetitor', link: '#' },
              { title: 'Panduan Metode Riset Pasar Efektif', link: '#' }
            ],
            estimatedTime: '2-4 minggu'
          },
          {
            title: 'Menyusun Rencana Bisnis',
            description: 'Buat rencana bisnis komprehensif yang mencakup aspek operasional, finansial, dan pemasaran.',
            tasks: [
              'Tentukan model bisnis (SaaS, marketplace, subscription)',
              'Buat proyeksi keuangan 3 tahun ke depan',
              'Tentukan kebutuhan sumber daya (tim, teknologi, modal)',
              'Identifikasi metrik keberhasilan utama'
            ],
            resources: [
              { title: 'Template Business Model Canvas', link: '#' },
              { title: 'Template Proyeksi Keuangan', link: '#' }
            ],
            estimatedTime: '3-4 minggu'
          },
          {
            title: 'Pembuatan MVP (Minimum Viable Product)',
            description: 'Kembangkan versi awal produk dengan fitur minimal namun cukup untuk menguji pasar.',
            tasks: [
              'Definisikan fitur-fitur inti yang harus ada di MVP',
              'Buat wireframe dan prototype produk',
              'Tentukan teknologi yang akan digunakan',
              'Tetapkan timeline pengembangan'
            ],
            resources: [
              { title: 'Panduan Menentukan Fitur MVP', link: '#' },
              { title: 'Daftar Tool Wireframing dan Prototyping', link: '#' }
            ],
            estimatedTime: '1-3 bulan'
          },
          {
            title: 'Perencanaan Go-to-Market',
            description: 'Siapkan strategi peluncuran produk dan pengenalan ke pasar.',
            tasks: [
              'Tentukan strategi akuisisi pengguna awal',
              'Buat timeline dan checklist peluncuran',
              'Siapkan materi pemasaran (website, konten, pitch deck)',
              'Rancang program feedback dan iterasi produk'
            ],
            resources: [
              { title: 'Template Go-to-Market Strategy', link: '#' },
              { title: 'Checklist Peluncuran Produk Digital', link: '#' }
            ],
            estimatedTime: '2-4 minggu'
          }
        ],
        // Other stages would be populated here similarly
      },
      // Other industries would be populated here similarly
    };
    
    // If the selected combination doesn't exist yet, return the technology+planning as default
    return steps[selectedIndustry]?.[selectedStage] || steps.technology.planning;
  };
  
  const guideSteps = getGuideSteps();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Panduan Step-by-Step Bisnis"
          subtitle="Langkah-langkah rinci dari perencanaan awal hingga ekspansi bisnis yang disesuaikan dengan jenis industri dan tahap perkembangan bisnis Anda."
          centered={true}
        />
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-card overflow-hidden mb-10">
          <div className="bg-primary-600 p-6 text-white">
            <h2 className="text-xl font-semibold">Pilih Panduan Bisnis Anda</h2>
            <p className="text-primary-100">Customized untuk kebutuhan spesifik berdasarkan industri dan tahap bisnis</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <label className="block text-dark-500 font-medium mb-2">
                Industri Bisnis
              </label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    className={`px-4 py-2 rounded-lg border text-center cursor-pointer transition-colors
                      ${selectedIndustry === industry.id 
                        ? 'bg-primary-600 text-white border-primary-600' 
                        : 'bg-white text-dark-500 border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setSelectedIndustry(industry.id)}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-dark-500 font-medium mb-2">
                Tahap Bisnis
              </label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {stages.map((stage) => (
                  <button
                    key={stage.id}
                    className={`flex items-center justify-center px-4 py-3 rounded-lg border text-center cursor-pointer transition-colors
                      ${selectedStage === stage.id 
                        ? 'bg-primary-600 text-white border-primary-600' 
                        : 'bg-white text-dark-500 border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setSelectedStage(stage.id)}
                  >
                    <span className="mr-2">{stage.icon}</span>
                    <span>{stage.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {guideSteps.map((step, index) => (
              <GuideStep 
                key={index}
                step={step}
                stepNumber={index + 1}
              />
            ))}
          </div>
          
          <div className="mt-10 bg-primary-50 rounded-xl p-6 border border-primary-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                <HiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Reminder Tahap Bisnis</h3>
                <p className="text-dark-500 mb-4">
                  Sistem kami akan mengirimkan notifikasi dan reminder otomatis untuk membantu Anda 
                  melacak progres dan deadline masing-masing tahap.
                </p>
                <Button variant="primary" size="md">
                  Aktifkan Reminder
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideStep({ step, stepNumber }) {
  const [isOpen, setIsOpen] = useState(stepNumber === 1);

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100">
      <div 
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
            {stepNumber}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-dark-400">{step.description}</p>
          </div>
        </div>
        <div>
          {isOpen ? (
            <HiChevronUp className="w-6 h-6 text-dark-400" />
          ) : (
            <HiChevronDown className="w-6 h-6 text-dark-400" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium mb-3">To-Do List</h4>
                <ul className="space-y-3">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <div className="w-6 h-6 rounded-full border border-primary-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <HiCheck className="w-4 h-4 text-primary-600" />
                      </div>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-3">Sumber Daya</h4>
                  <ul className="space-y-2">
                    {step.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex}>
                        <a 
                          href={resource.link} 
                          className="flex items-center text-primary-600 hover:text-primary-700"
                        >
                          <HiChevronRight className="w-5 h-5 mr-1" />
                          <span>{resource.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-medium mb-1">Estimasi Waktu</h4>
                    <div className="flex items-center">
                      <HiClock className="w-5 h-5 text-dark-400 mr-2" />
                      <span>{step.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  className="w-full mt-3"
                >
                  Tandai Selesai
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}