import React, { useState } from 'react';
import { 
  HiDocumentText, 
  HiChartBar, 
  HiDownload, 
  HiOutlineEye, 
  HiSearch, 
  HiStar,
  HiCurrencyDollar,
  HiClipboardCheck,
  HiTemplate,
  HiCreditCard,
  HiPresentationChartLine,
  HiClock,
  HiUserGroup
} from 'react-icons/hi';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'all', name: 'Semua Template' },
    { id: 'business-plan', name: 'Rencana Bisnis' },
    { id: 'financial', name: 'Keuangan' },
    { id: 'marketing', name: 'Pemasaran' },
    { id: 'operations', name: 'Operasional' },
    { id: 'analysis', name: 'Analisis' },
    { id: 'presentation', name: 'Presentasi' },
  ];
  
  const templates = [
    {
      id: 1,
      title: 'Template Rencana Bisnis Komprehensif',
      description: 'Template lengkap untuk menyusun rencana bisnis profesional yang mencakup semua aspek penting dari visi misi hingga proyeksi finansial.',
      category: 'business-plan',
      downloadCount: 1280,
      rating: 4.8,
      format: 'DOCX, PDF',
      premium: false,
      icon: <HiDocumentText className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Analisis SWOT Interaktif',
      description: 'Template interaktif untuk menganalisis Strength, Weakness, Opportunity, dan Threat dari bisnis Anda dengan visualisasi yang mudah dipahami.',
      category: 'analysis',
      downloadCount: 950,
      rating: 4.7,
      format: 'XLSX, PDF',
      premium: false,
      icon: <HiChartBar className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Proyeksi Arus Kas 3 Tahun',
      description: 'Spreadsheet profesional untuk membuat proyeksi cash flow bisnis Anda hingga 3 tahun ke depan dengan analisis otomatis.',
      category: 'financial',
      downloadCount: 1540,
      rating: 4.9,
      format: 'XLSX',
      premium: true,
      icon: <HiCurrencyDollar className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Rencana Pemasaran Digital',
      description: 'Template komprehensif untuk menyusun strategi pemasaran digital yang efektif, termasuk timeline, KPI, dan anggaran.',
      category: 'marketing',
      downloadCount: 1150,
      rating: 4.6,
      format: 'PPTX, PDF',
      premium: true,
      icon: <HiPresentationChartLine className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'Business Model Canvas',
      description: 'Template Business Model Canvas untuk memvisualisasikan model bisnis Anda dengan 9 blok penting yang mudah diisi.',
      category: 'business-plan',
      downloadCount: 2100,
      rating: 4.9,
      format: 'PDF, PNG',
      premium: false,
      icon: <HiTemplate className="w-8 h-8" />
    },
    {
      id: 6,
      title: 'Kalkulasi Break-Even Point',
      description: 'Spreadsheet untuk menghitung titik impas bisnis Anda dengan visualisasi grafik dan analisis sensitivitas.',
      category: 'financial',
      downloadCount: 980,
      rating: 4.7,
      format: 'XLSX',
      premium: true,
      icon: <HiCurrencyDollar className="w-8 h-8" />
    },
    {
      id: 7,
      title: 'Checklist Peluncuran Produk',
      description: 'Checklist terperinci untuk memastikan semua aspek penting dipertimbangkan sebelum dan selama peluncuran produk baru.',
      category: 'operations',
      downloadCount: 850,
      rating: 4.5,
      format: 'DOCX, PDF',
      premium: false,
      icon: <HiClipboardCheck className="w-8 h-8" />
    },
    {
      id: 8,
      title: 'Pitch Deck Untuk Investor',
      description: 'Template presentasi profesional untuk meyakinkan investor dengan struktur yang telah terbukti efektif.',
      category: 'presentation',
      downloadCount: 1730,
      rating: 4.8,
      format: 'PPTX, PDF',
      premium: true,
      icon: <HiPresentationChartLine className="w-8 h-8" />
    },
    {
      id: 9,
      title: 'Template Perencanaan Keuangan Tahunan',
      description: 'Spreadsheet komprehensif untuk perencanaan keuangan bisnis selama setahun, termasuk proyeksi pendapatan, pengeluaran, dan profitabilitas.',
      category: 'financial',
      downloadCount: 1100,
      rating: 4.7,
      format: 'XLSX',
      premium: true,
      icon: <HiCurrencyDollar className="w-8 h-8" />
    },
    {
      id: 10,
      title: 'Competitor Analysis Framework',
      description: 'Framework lengkap untuk menganalisis kompetitor, termasuk perbandingan fitur, harga, dan strategi pemasaran.',
      category: 'analysis',
      downloadCount: 950,
      rating: 4.6,
      format: 'XLSX, PDF',
      premium: false,
      icon: <HiChartBar className="w-8 h-8" />
    },
    {
      id: 11,
      title: 'Template Gantt Chart Proyek',
      description: 'Spreadsheet Gantt Chart untuk merencanakan dan mengelola timeline proyek bisnis dengan mudah dan efektif.',
      category: 'operations',
      downloadCount: 780,
      rating: 4.5,
      format: 'XLSX',
      premium: false,
      icon: <HiClock className="w-8 h-8" />
    },
    {
      id: 12,
      title: 'Customer Persona Development',
      description: 'Template untuk mengembangkan customer persona yang detail dan akurat untuk strategi pemasaran yang lebih efektif.',
      category: 'marketing',
      downloadCount: 890,
      rating: 4.7,
      format: 'PPTX, PDF',
      premium: true,
      icon: <HiUserGroup className="w-8 h-8" />
    },
  ];
  
  // Filter templates based on category and search query
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Template & Tools Bisnis Premium"
          subtitle="Dapatkan akses ke koleksi template profesional dan tools untuk membantu Anda merencanakan, mengelola, dan mengembangkan bisnis Anda dengan lebih efektif."
          centered={true}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder="Cari template atau tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div>
                <select
                  className="input-field w-full md:w-44"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          
          {filteredTemplates.length === 0 && (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <HiSearch className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Tidak Ada Hasil</h3>
              <p className="text-gray-500 mb-4">Tidak ditemukan template yang sesuai dengan kriteria pencarian Anda.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
          
          {/* Premium Subscription Banner */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl overflow-hidden">
            <div className="p-8 md:p-10 text-white relative">
              <div className="max-w-3xl">
                <div className="flex items-center mb-4">
                  <HiCreditCard className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Akses Semua Template Premium</h3>
                </div>
                <p className="text-primary-100 mb-6">
                  Dapatkan akses penuh ke semua template premium kami, termasuk update berkala dengan template-template baru dan fitur-fitur eksklusif.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  {[
                    {
                      feature: '100+ Template Premium',
                      icon: <HiDocumentText className="w-5 h-5" />
                    },
                    {
                      feature: 'Update Bulanan',
                      icon: <HiClock className="w-5 h-5" />
                    },
                    {
                      feature: 'Dukungan Prioritas',
                      icon: <HiUserGroup className="w-5 h-5" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        {item.icon}
                      </div>
                      <span>{item.feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Mulai Berlangganan
                </Button>
              </div>
              
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mb-20 blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ template }) {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-hover border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${template.premium ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'}`}>
            {template.icon}
          </div>
          {template.premium && (
            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-md text-xs font-medium">
              Premium
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
        <p className="text-dark-400 mb-4 text-sm line-clamp-2">
          {template.description}
        </p>
        
        <div className="flex items-center text-sm text-dark-400 mb-4">
          <div className="flex items-center mr-4">
            <HiDocumentText className="w-4 h-4 mr-1" />
            <span>{template.format}</span>
          </div>
          <div className="flex items-center">
            <HiDownload className="w-4 h-4 mr-1" />
            <span>{template.downloadCount}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <HiStar 
                key={star} 
                className={`w-4 h-4 ${star <= Math.floor(template.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-dark-400">{template.rating.toFixed(1)}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            icon={<HiOutlineEye className="w-4 h-4" />}
          >
            Preview
          </Button>
          <Button
            variant={template.premium ? 'primary' : 'secondary'}
            size="sm"
            fullWidth
            icon={<HiDownload className="w-4 h-4" />}
          >
            {template.premium ? 'Premium' : 'Download'}
          </Button>
        </div>
      </div>
    </div>
  );
}