import React, { useState } from 'react';
import { HiChartBar, HiClipboardCheck, HiLightBulb, HiChartPie, HiCurrencyDollar, HiUsers } from 'react-icons/hi';
import SectionHeading from '@/modules/core/components/SectionHeading';
import Button from '@/modules/core/components/Button';
import IdeaForm from '@/modules/ideValidator/components/IdeaForm';
import AnalysisResults from '@/modules/ideValidator/components/AnalysisResults';
import ValidatorSteps from '@/modules/ideValidator/components/ValidatorSteps';

export default function ValidatorPage() {
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    console.log('Submitting idea form data:', formData);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Generate mock analysis results
      const mockAnalysisData = {
        overallScore: Math.floor(65 + Math.random() * 25),
        categories: {
          marketPotential: Math.floor(60 + Math.random() * 30),
          financialFeasibility: Math.floor(55 + Math.random() * 35),
          competitionLevel: Math.floor(50 + Math.random() * 40),
          uniqueness: Math.floor(70 + Math.random() * 25),
          scalability: Math.floor(65 + Math.random() * 30),
          implementationEase: Math.floor(60 + Math.random() * 30),
        },
        recommendations: [
          'Lakukan validasi pasar dengan mencari umpan balik dari 20-30 potensial pelanggan',
          'Kembangkan fitur diferensiasi yang lebih kuat untuk menonjol di pasar',
          'Pertimbangkan model bisnis freemium untuk mendapatkan pengguna awal',
          'Fokus pada segmen pasar spesifik terlebih dahulu sebelum ekspansi',
          'Analisis lebih mendalam terhadap pesaing utama untuk menemukan kelemahan mereka',
        ],
        marketInsights: {
          trendDirection: 'upward',
          growthRate: `${(10 + Math.random() * 15).toFixed(1)}%`,
          targetSegments: ['Profesional Muda', 'Urban Families', 'Tech Enthusiasts'],
          competitorCount: Math.floor(5 + Math.random() * 10),
        },
        swotAnalysis: {
          strengths: [
            'Pendekatan inovatif',
            'Solusi untuk masalah yang belum terpecahkan',
            'Potensi margin keuntungan yang baik'
          ],
          weaknesses: [
            'Membutuhkan edukasi pasar',
            'Implementasi teknis yang kompleks',
            'Biaya awal yang relatif tinggi'
          ],
          opportunities: [
            'Tren pasar yang berkembang',
            'Regulasi baru mendukung solusi ini',
            'Potensi ekspansi ke pasar internasional'
          ],
          threats: [
            'Kompetitor dengan sumber daya besar',
            'Perubahan perilaku konsumen',
            'Ketidakpastian ekonomi'
          ]
        }
      };
      
      setAnalysisData(mockAnalysisData);
      setAnalysisComplete(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setAnalysisComplete(false);
    setAnalysisData(null);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Validator Ide Bisnis"
          subtitle="Analisis komprehensif untuk mengevaluasi potensi, kelayakan, dan prospek ide bisnis Anda dengan teknologi RBX76S."
          centered={true}
        />
        
        <ValidatorSteps currentStep={analysisComplete ? 2 : 1} />
        
        <div className="mt-8 max-w-4xl mx-auto">
          {!analysisComplete ? (
            <IdeaForm onSubmit={handleFormSubmit} loading={loading} />
          ) : (
            <div>
              <AnalysisResults data={analysisData} />
              <div className="mt-8 flex justify-center">
                <Button onClick={handleReset} variant="outline" size="lg">
                  Analisis Ide Baru
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {!analysisComplete && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">Mengapa Menggunakan Validator Ide Bisnis?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <HiChartBar className="w-6 h-6" />,
                  title: 'Analisis Berbasis Data',
                  description: 'Evaluasi ide bisnis Anda berdasarkan data pasar terkini dan tren industri yang relevan.'
                },
                {
                  icon: <HiChartPie className="w-6 h-6" />,
                  title: 'Skor Kelayakan Komprehensif',
                  description: 'Dapatkan penilaian menyeluruh dari berbagai aspek kritis bisnis Anda.'
                },
                {
                  icon: <HiLightBulb className="w-6 h-6" />,
                  title: 'Rekomendasi Actionable',
                  description: 'Terima saran praktis dan langkah-langkah konkret untuk meningkatkan peluang sukses Anda.'
                },
                {
                  icon: <HiUsers className="w-6 h-6" />,
                  title: 'Analisis Target Pasar',
                  description: 'Identifikasi segmen pelanggan potensial dan strategi untuk menjangkau mereka secara efektif.'
                },
                {
                  icon: <HiCurrencyDollar className="w-6 h-6" />,
                  title: 'Evaluasi Finansial',
                  description: 'Perkiraan kelayakan finansial dan proyeksi keuntungan berdasarkan model bisnis Anda.'
                },
                {
                  icon: <HiClipboardCheck className="w-6 h-6" />,
                  title: 'Analisis SWOT Otomatis',
                  description: 'Identifikasi kekuatan, kelemahan, peluang, dan ancaman bisnis Anda secara sistematis.'
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-card">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-dark-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}