import React, { useState } from 'react';
import { 
  HiSearch, 
  HiTrendingUp, 
  HiClock, 
  HiGlobe,
  HiUserGroup,
  HiShoppingCart,
  HiChartBar,
  HiCurrencyDollar,
  HiAdjustments,
  HiChip
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';

export default function MarketResearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [activeTrend, setActiveTrend] = useState('teknologi');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setSearchLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Searching for:', searchQuery);
      
      // Generate mock search results
      const mockResults = {
        query: searchQuery,
        trendStatus: Math.random() > 0.3 ? 'upward' : 'downward',
        growthRate: (5 + Math.random() * 20).toFixed(1),
        marketSize: `$${(2 + Math.random() * 8).toFixed(1)} Miliar`,
        competitorCount: Math.floor(5 + Math.random() * 20),
        consumerInterest: Math.floor(65 + Math.random() * 30),
        predictedTrend: Math.random() > 0.7 ? 'rising_fast' : Math.random() > 0.4 ? 'rising_slow' : 'stable',
        targetDemographics: [
          {
            name: 'Usia',
            groups: ['18-24', '25-34', '35-44'],
            primaryGroup: Math.random() > 0.5 ? '25-34' : '18-24'
          },
          {
            name: 'Lokasi',
            groups: ['Urban', 'Suburban', 'Rural'],
            primaryGroup: 'Urban'
          },
          {
            name: 'Pendapatan',
            groups: ['Rendah', 'Menengah', 'Tinggi'],
            primaryGroup: Math.random() > 0.6 ? 'Menengah' : 'Tinggi'
          }
        ],
        relatedKeywords: [
          `${searchQuery} online`,
          `${searchQuery} terbaik`,
          `cara memulai ${searchQuery}`,
          `bisnis ${searchQuery}`,
          `tren ${searchQuery}`
        ],
        competitorInsights: [
          {
            type: 'Pemain Besar',
            count: Math.floor(2 + Math.random() * 3),
            marketShare: (50 + Math.random() * 30).toFixed(1)
          },
          {
            type: 'Pemain Menengah',
            count: Math.floor(5 + Math.random() * 7),
            marketShare: (15 + Math.random() * 20).toFixed(1)
          },
          {
            type: 'Startup & UKM',
            count: Math.floor(10 + Math.random() * 20),
            marketShare: (5 + Math.random() * 15).toFixed(1)
          }
        ],
        opportunityAreas: [
          'Segmen premium yang belum terlayani',
          'Integrasi teknologi untuk pengalaman lebih baik',
          'Model bisnis subscription untuk recurring revenue',
          'Pasar di kota-kota tier 2 yang berkembang'
        ]
      };
      
      setSearchResults(mockResults);
      setSearchLoading(false);
    }, 1500);
  };
  
  const trendingTopics = [
    {
      id: 'teknologi',
      name: 'Teknologi',
      icon: <HiChip className="w-6 h-6" />,
      trends: [
        'AI untuk UKM',
        'Software as a Service (SaaS)',
        'E-commerce D2C',
        'Fintech P2P',
        'EdTech Interaktif'
      ]
    },
    {
      id: 'kuliner',
      name: 'Kuliner & F&B',
      icon: <HiShoppingCart className="w-6 h-6" />,
      trends: [
        'Cloud Kitchen',
        'Plant-based Food',
        'Minuman Fungsional',
        'Meal Subscription',
        'Artisanal Coffee'
      ]
    },
    {
      id: 'kesehatan',
      name: 'Kesehatan',
      icon: <HiUserGroup className="w-6 h-6" />,
      trends: [
        'Telemedicine',
        'Supplement & Vitamin',
        'Fitness Digital',
        'Mental Health Apps',
        'Wellness Programs'
      ]
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: <HiCurrencyDollar className="w-6 h-6" />,
      trends: [
        'Social Commerce',
        'AR Shopping Experience',
        'Subscription Box',
        'Sustainable Products',
        'Buy Now Pay Later'
      ]
    },
  ];
  
  const activeTrendData = trendingTopics.find(topic => topic.id === activeTrend);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Riset & Analisis Pasar"
          subtitle="Analisis tren pasar, data demografis konsumen, dan peluang yang belum dimanfaatkan untuk mendukung pengambilan keputusan bisnis Anda."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Cari Tren & Insight Pasar</h2>
              <form onSubmit={handleSearch}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="input-field pl-10"
                      placeholder="Masukkan keyword ide bisnis atau produk..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    loading={searchLoading}
                    disabled={!searchQuery.trim() || searchLoading}
                  >
                    Analisis Pasar
                  </Button>
                </div>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                Contoh: coffee shop, aplikasi fintech, produk skincare, jasa konsultasi bisnis
              </p>
            </div>
            
            {searchResults && !searchLoading && (
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">
                    Hasil Analisis: <span className="text-primary-600">{searchResults.query}</span>
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    searchResults.trendStatus === 'upward' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    <div className="flex items-center">
                      {searchResults.trendStatus === 'upward' ? (
                        <>
                          <HiTrendingUp className="w-4 h-4 mr-1" />
                          <span>Trending Up</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                          </svg>
                          <span>Declining</span>
                        </>
                      )}
                    </div>
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <HiTrendingUp className="w-5 h-5 text-gray-500 mr-2" />
                      <h4 className="font-medium">Tingkat Pertumbuhan</h4>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">{searchResults.growthRate}%</p>
                    <p className="text-sm text-gray-500">per tahun</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <HiGlobe className="w-5 h-5 text-gray-500 mr-2" />
                      <h4 className="font-medium">Ukuran Pasar</h4>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">{searchResults.marketSize}</p>
                    <p className="text-sm text-gray-500">global market</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <HiUserGroup className="w-5 h-5 text-gray-500 mr-2" />
                      <h4 className="font-medium">Minat Konsumen</h4>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">{searchResults.consumerInterest}/100</p>
                    <p className="text-sm text-gray-500">consumer interest score</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3">Demografi Target Utama</h4>
                    <div className="space-y-4">
                      {searchResults.targetDemographics.map((demo, index) => (
                        <div key={index}>
                          <div className="text-sm font-medium mb-1">{demo.name}</div>
                          <div className="flex flex-wrap gap-2">
                            {demo.groups.map((group, groupIndex) => (
                              <span 
                                key={groupIndex} 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  group === demo.primaryGroup
                                    ? 'bg-primary-100 text-primary-800 border border-primary-200'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {group}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Insight Kompetitor</h4>
                    <div className="space-y-3">
                      {searchResults.competitorInsights.map((insight, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{insight.type}</div>
                            <div className="text-sm text-gray-500">{insight.count} perusahaan</div>
                          </div>
                          <div>
                            <div className="text-right font-bold">{insight.marketShare}%</div>
                            <div className="text-sm text-gray-500">market share</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Area Peluang Potensial</h4>
                  <ul className="space-y-2">
                    {searchResults.opportunityAreas.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Keyword Terkait</h4>
                  <div className="flex flex-wrap gap-2">
                    {searchResults.relatedKeywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      <HiClock className="w-5 h-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Terakhir diperbarui: {new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>}
                  >
                    Simpan Hasil
                  </Button>
                </div>
              </div>
            )}
            
            {!searchResults && !searchLoading && (
              <div className="p-6 md:p-8 text-center">
                <div className="bg-primary-50 rounded-lg p-6 max-w-xl mx-auto">
                  <HiSearch className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Temukan Insight Pasar</h3>
                  <p className="text-gray-500 mb-0">
                    Masukkan keyword ide bisnis atau produk untuk mendapatkan analisis pasar komprehensif, 
                    termasuk tren, demografi target, dan peluang potensial.
                  </p>
                </div>
              </div>
            )}
            
            {searchLoading && (
              <div className="p-10 text-center">
                <div className="animate-spin w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-lg font-medium text-primary-600">Menganalisis Data Pasar...</p>
                <p className="text-gray-500">Harap tunggu sementara kami mengumpulkan insight tentang "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Tren Pasar Terkini</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-card p-4">
                <h3 className="text-lg font-semibold mb-4">Kategori Tren</h3>
                <ul className="space-y-2">
                  {trendingTopics.map((topic) => (
                    <li key={topic.id}>
                      <button
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTrend === topic.id
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-dark-500 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveTrend(topic.id)}
                      >
                        <span className={`mr-3 ${activeTrend === topic.id ? 'text-primary-600' : 'text-gray-500'}`}>
                          {topic.icon}
                        </span>
                        <span>{topic.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Tren Populer: {activeTrendData?.name}</h3>
                  <span className="bg-primary-100 text-primary-800 px-2.5 py-0.5 rounded text-sm font-medium">
                    Updated Today
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeTrendData?.trends.map((trend, index) => (
                    <motion.div
                      key={trend}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-5 flex flex-col hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-2">
                        <HiTrendingUp className={`w-5 h-5 ${index % 3 === 0 ? 'text-green-500' : index % 3 === 1 ? 'text-primary-500' : 'text-yellow-500'} mr-2`} />
                        <h4 className="font-medium">{trend}</h4>
                      </div>
                      <div className="space-y-2 mt-auto pt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Pertumbuhan</span>
                          <span className="font-medium">{(15 + Math.random() * 40).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Kompetisi</span>
                          <span className="font-medium">{Math.random() > 0.5 ? 'Sedang' : Math.random() > 0.3 ? 'Tinggi' : 'Rendah'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Potensi</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < 3 + Math.floor(Math.random() * 3) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    icon={<HiChartBar className="w-5 h-5" />}
                  >
                    Lihat Analisis Lengkap
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl overflow-hidden">
            <div className="p-8 md:p-10 text-white relative">
              <div className="max-w-3xl">
                <div className="flex items-center mb-4">
                  <HiAdjustments className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Market Research Pro</h3>
                </div>
                <p className="text-primary-100 mb-6">
                  Dapatkan akses ke laporan analisis pasar mendalam, data demografis konsumen terperinci, 
                  dan prediksi tren ekslusif untuk keputusan bisnis yang lebih cerdas.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Tingkatkan ke Pro
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