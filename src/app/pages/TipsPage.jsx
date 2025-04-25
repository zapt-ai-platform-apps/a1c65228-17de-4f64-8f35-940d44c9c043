import React, { useState } from 'react';
import { 
  HiChip, 
  HiCurrencyDollar, 
  HiSearch, 
  HiShoppingBag, 
  HiLightBulb, 
  HiChartBar, 
  HiCube, 
  HiGlobe,
  HiFilter,
  HiAdjustments,
  HiBookOpen
} from 'react-icons/hi';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'all', name: 'Semua', icon: <HiGlobe className="w-5 h-5" /> },
    { id: 'marketing', name: 'Pemasaran', icon: <HiChartBar className="w-5 h-5" /> },
    { id: 'finance', name: 'Keuangan', icon: <HiCurrencyDollar className="w-5 h-5" /> },
    { id: 'operations', name: 'Operasional', icon: <HiCube className="w-5 h-5" /> },
    { id: 'innovation', name: 'Inovasi', icon: <HiLightBulb className="w-5 h-5" /> },
    { id: 'technology', name: 'Teknologi', icon: <HiChip className="w-5 h-5" /> },
    { id: 'sales', name: 'Penjualan', icon: <HiShoppingBag className="w-5 h-5" /> },
  ];
  
  // Sample tips data
  const allTips = [
    {
      id: 1,
      title: 'Manfaatkan Media Sosial untuk Brand Awareness',
      content: 'Media sosial adalah saluran yang efektif untuk meningkatkan kesadaran merek. Konsistenlah dalam posting konten berkualitas yang relevan dengan audiens target Anda. Gunakan hashtag yang relevan dan berinteraksi dengan pengikut Anda secara teratur.',
      category: 'marketing',
      author: 'Budi Santoso',
      position: 'Digital Marketing Specialist',
      readTime: '4 menit'
    },
    {
      id: 2,
      title: 'Atur Cash Flow dengan Metode 50/30/20',
      content: 'Metode 50/30/20 adalah cara sederhana untuk mengelola keuangan bisnis: alokasikan 50% pendapatan untuk operasional bisnis, 30% untuk pengembangan, dan 20% untuk tabungan atau investasi. Pendekatan ini membantu menjaga keseimbangan antara pengeluaran operasional dan investasi pertumbuhan.',
      category: 'finance',
      author: 'Diana Wijaya',
      position: 'Financial Advisor',
      readTime: '5 menit'
    },
    {
      id: 3,
      title: 'Optimasi Proses dengan Pendekatan Lean',
      content: 'Pendekatan lean fokus pada eliminasi pemborosan dalam proses bisnis. Identifikasi dan hilangkan aktivitas yang tidak menambah nilai bagi pelanggan. Ini akan meningkatkan efisiensi, mengurangi biaya, dan meningkatkan kualitas produk atau layanan Anda.',
      category: 'operations',
      author: 'Reza Mahendra',
      position: 'Operations Consultant',
      readTime: '6 menit'
    },
    {
      id: 4,
      title: 'Gunakan Metode Design Thinking untuk Inovasi',
      content: 'Design thinking adalah pendekatan inovasi yang berpusat pada manusia. Mulai dengan empati terhadap pengguna, definisikan masalah dengan jelas, lakukan brainstorming solusi, buat prototype, dan uji dengan pengguna nyata. Proses iteratif ini akan menghasilkan solusi yang benar-benar memenuhi kebutuhan pelanggan.',
      category: 'innovation',
      author: 'Andi Prakoso',
      position: 'Innovation Consultant',
      readTime: '7 menit'
    },
    {
      id: 5,
      title: 'Integrasikan AI untuk Meningkatkan Efisiensi',
      content: 'Kecerdasan buatan dapat mengotomatisasi tugas-tugas repetitif dan memberikan insight dari data. Pertimbangkan untuk mengintegrasikan chatbots untuk layanan pelanggan, analisis prediktif untuk keputusan bisnis, atau sistem rekomendasi untuk personalisasi pengalaman pelanggan.',
      category: 'technology',
      author: 'Siti Nuraini',
      position: 'Tech Entrepreneur',
      readTime: '5 menit'
    },
    {
      id: 6,
      title: 'Teknik SPIN Selling untuk Meningkatkan Konversi',
      content: 'SPIN Selling (Situation, Problem, Implication, Need-payoff) adalah teknik penjualan yang fokus pada mengajukan pertanyaan yang tepat daripada presentasi produk secara agresif. Metode ini membantu memahami kebutuhan pelanggan secara mendalam dan menunjukkan bagaimana produk Anda menyelesaikan masalah mereka.',
      category: 'sales',
      author: 'Agus Salim',
      position: 'Sales Director',
      readTime: '4 menit'
    },
    {
      id: 7,
      title: 'Content Marketing yang Efektif untuk B2B',
      content: 'Untuk bisnis B2B, content marketing harus fokus pada edukasi dan pemecahan masalah. Buat white paper, case studies, webinar, dan blog informatif yang menunjukkan keahlian Anda dalam industri. Konten berkualitas tinggi akan membangun kepercayaan dan menempatkan bisnis Anda sebagai pemimpin pemikiran.',
      category: 'marketing',
      author: 'Maya Putri',
      position: 'Content Strategist',
      readTime: '6 menit'
    },
    {
      id: 8,
      title: 'Strategi Penetapan Harga Value-Based',
      content: 'Value-based pricing menetapkan harga berdasarkan nilai yang dirasakan pelanggan, bukan hanya biaya produksi. Lakukan riset untuk memahami berapa nilai solusi Anda bagi pelanggan, kemudian tetapkan harga yang mencerminkan nilai tersebut. Pendekatan ini sering menghasilkan margin yang lebih tinggi dan pelanggan yang lebih puas.',
      category: 'finance',
      author: 'Hendra Wijaya',
      position: 'Pricing Consultant',
      readTime: '5 menit'
    },
    {
      id: 9,
      title: 'Bangun Tim Remote yang Produktif',
      content: 'Untuk tim remote yang efektif, investasikan pada alat kolaborasi yang tepat, tetapkan ekspektasi komunikasi yang jelas, dan fokus pada hasil daripada micromanaging jam kerja. Pertemuan virtual reguler dan aktivitas team building jarak jauh dapat membantu membangun hubungan tim yang kuat.',
      category: 'operations',
      author: 'Linda Susanto',
      position: 'HR Director',
      readTime: '7 menit'
    },
    {
      id: 10,
      title: 'Manfaatkan Open Innovation untuk Pertumbuhan',
      content: 'Open innovation melibatkan kolaborasi dengan pihak eksternal seperti startup, universitas, atau bahkan kompetitor untuk pengembangan produk atau layanan baru. Pendekatan ini mempercepat inovasi dan mendistribusikan risiko, memungkinkan bisnis dari segala ukuran bersaing secara lebih efektif di pasar global.',
      category: 'innovation',
      author: 'Bambang Sutrisno',
      position: 'Innovation Lead',
      readTime: '8 menit'
    },
  ];
  
  // Filter tips based on selected category and search query
  const filteredTips = allTips.filter(tip => {
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get icon for a category
  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <HiGlobe className="w-5 h-5" />;
  };

  // Get display name for a category
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Umum';
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Tips & Trik Bisnis"
          subtitle="Kumpulan strategi dan trik yang telah teruji dari pengusaha sukses di berbagai sektor untuk membantu bisnis Anda berkembang."
          centered={true}
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-card p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder="Cari tips bisnis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <HiFilter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500 text-sm">Filter:</span>
                <select
                  className="input-field py-1.5"
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
                  className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="mr-1.5">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tips List */}
          <div className="space-y-6">
            {filteredTips.length > 0 ? (
              filteredTips.map((tip) => (
                <TipCard key={tip.id} tip={tip} getCategoryIcon={getCategoryIcon} getCategoryName={getCategoryName} />
              ))
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <HiSearch className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Tidak Ada Hasil</h3>
                <p className="text-gray-500 mb-4">Tidak ditemukan tips bisnis yang sesuai dengan kriteria pencarian Anda.</p>
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
          </div>
          
          {/* Premium Tips Promotion */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl overflow-hidden">
            <div className="p-8 md:p-10 text-white relative">
              <div className="max-w-3xl">
                <div className="flex items-center mb-4">
                  <HiBookOpen className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Premium Business Tips</h3>
                </div>
                <p className="text-primary-100 mb-6">
                  Dapatkan akses ke ratusan tips bisnis premium dari pakar industri terkemuka. 
                  Dibuat khusus untuk membantu Anda mengatasi tantangan bisnis spesifik.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                  >
                    Dapatkan Akses Premium
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['200+ Tips Eksklusif', 'Update Mingguan', 'Konsultasi Pakar'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
                        <HiCheck className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mb-20 blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TipCard({ tip, getCategoryIcon, getCategoryName }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-hover">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
            {getCategoryIcon(tip.category)}
          </div>
          <span className="text-sm font-medium text-primary-600">{getCategoryName(tip.category)}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
        
        <p className="text-dark-500 mb-4">
          {expanded ? tip.content : `${tip.content.substring(0, 150)}${tip.content.length > 150 ? '...' : ''}`}
        </p>
        
        {tip.content.length > 150 && (
          <button
            className="text-primary-600 font-medium hover:text-primary-700 mb-4"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Lihat Lebih Sedikit' : 'Baca Selengkapnya'}
          </button>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <img 
                src={`https://randomuser.me/api/portraits/${tip.id % 2 === 0 ? 'women' : 'men'}/${tip.id + 20}.jpg`}
                alt={tip.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-dark-600">{tip.author}</div>
              <div className="text-xs text-dark-400">{tip.position}</div>
            </div>
          </div>
          
          <div className="flex items-center text-dark-400 text-sm">
            <HiClock className="w-4 h-4 mr-1" />
            <span>{tip.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HiCheck(props) {
  return (
    <svg 
      stroke="currentColor" 
      fill="none" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 13l4 4L19 7"></path>
    </svg>
  );
}