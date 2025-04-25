import React from 'react';
import { HiLightningBolt, HiDocumentDownload, HiPrinter } from 'react-icons/hi';
import Button from '@/modules/core/components/Button';

// Import Chart.js
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Radar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function AnalysisResults({ data }) {
  if (!data) return null;
  
  // Prepare radar chart data
  const radarData = {
    labels: [
      'Potensi Pasar',
      'Kelayakan Finansial',
      'Tingkat Persaingan',
      'Keunikan',
      'Skalabilitas',
      'Kemudahan Implementasi',
    ],
    datasets: [
      {
        label: 'Skor Analisis',
        data: [
          data.categories.marketPotential,
          data.categories.financialFeasibility,
          data.categories.competitionLevel,
          data.categories.uniqueness,
          data.categories.scalability,
          data.categories.implementationEase,
        ],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };
  
  // Prepare doughnut chart data
  const doughnutData = {
    labels: ['Berhasil', 'Gagal'],
    datasets: [
      {
        data: [data.overallScore, 100 - data.overallScore],
        backgroundColor: ['rgba(99, 102, 241, 0.8)', 'rgba(229, 231, 235, 0.8)'],
        borderColor: ['rgba(99, 102, 241, 1)', 'rgba(229, 231, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const getScoreColorClass = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 65) return 'text-primary-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-accent-600';
  };

  const getScoreCategory = (score) => {
    if (score >= 80) return 'Sangat Baik';
    if (score >= 65) return 'Baik';
    if (score >= 50) return 'Cukup';
    if (score >= 30) return 'Kurang';
    return 'Sangat Kurang';
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Hasil Analisis Ide Bisnis</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            icon={<HiDocumentDownload className="w-5 h-5" />}
            size="sm"
          >
            Download
          </Button>
          <Button
            variant="outline"
            icon={<HiPrinter className="w-5 h-5" />}
            size="sm"
          >
            Print
          </Button>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-lg p-4 flex items-center mb-8">
        <HiLightningBolt className="w-8 h-8 text-primary-600 mr-4" />
        <div>
          <h3 className="font-semibold">Dianalisis dengan Teknologi RBX76S</h3>
          <p className="text-sm text-dark-400">
            Hasil analisis ini didasarkan pada algoritma canggih yang menganalisis berbagai faktor keberhasilan bisnis
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Evaluasi Komprehensif</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-sm text-dark-400">Skor Keseluruhan</h4>
                <div className="flex items-end">
                  <span className={`text-4xl font-bold ${getScoreColorClass(data.overallScore)}`}>
                    {data.overallScore}
                  </span>
                  <span className="text-lg text-dark-400">/100</span>
                </div>
                <span className="text-sm font-medium">
                  {getScoreCategory(data.overallScore)}
                </span>
              </div>
              <div className="w-28 h-28">
                <Doughnut data={doughnutData} options={{ cutout: '70%', plugins: { legend: { display: false } } }} />
              </div>
            </div>
            
            <div className="space-y-3">
              {Object.entries(data.categories).map(([key, value]) => {
                const label = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase())
                  .replace('Market Potential', 'Potensi Pasar')
                  .replace('Financial Feasibility', 'Kelayakan Finansial')
                  .replace('Competition Level', 'Tingkat Persaingan')
                  .replace('Uniqueness', 'Keunikan')
                  .replace('Scalability', 'Skalabilitas')
                  .replace('Implementation Ease', 'Kemudahan Implementasi');
                
                return (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{label}</span>
                      <span className={`text-sm font-medium ${getScoreColorClass(value)}`}>{value}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${value >= 80 ? 'bg-green-500' : value >= 65 ? 'bg-primary-600' : value >= 50 ? 'bg-yellow-500' : 'bg-accent-600'} h-2 rounded-full`} 
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Analisis Dimensi</h3>
          <div className="bg-gray-50 rounded-lg p-6 h-full">
            <div className="h-64">
              <Radar 
                data={radarData} 
                options={{
                  scales: {
                    r: {
                      min: 0,
                      max: 100,
                      ticks: {
                        stepSize: 20,
                        showLabelBackdrop: false,
                        font: {
                          size: 8
                        }
                      },
                      pointLabels: {
                        font: {
                          size: 10
                        }
                      }
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Rekomendasi Utama</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              {data.recommendations.map((recommendation, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p>{recommendation}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Insight Pasar</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-dark-400 mb-1">Tren Pasar</h4>
                <div className="flex items-center">
                  <span className={`font-semibold ${data.marketInsights.trendDirection === 'upward' ? 'text-green-600' : 'text-accent-600'}`}>
                    {data.marketInsights.trendDirection === 'upward' ? 'Naik' : 'Turun'}
                  </span>
                  {data.marketInsights.trendDirection === 'upward' ? (
                    <svg className="w-5 h-5 text-green-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-accent-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-dark-400 mb-1">Tingkat Pertumbuhan</h4>
                <p className="font-semibold">{data.marketInsights.growthRate} per tahun</p>
              </div>
              
              <div>
                <h4 className="text-sm text-dark-400 mb-1">Jumlah Kompetitor</h4>
                <p className="font-semibold">{data.marketInsights.competitorCount} kompetitor utama</p>
              </div>
              
              <div>
                <h4 className="text-sm text-dark-400 mb-1">Target Segmen</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {data.marketInsights.targetSegments.map((segment, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800">
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Analisis SWOT</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <h4 className="text-green-700 font-medium mb-2">Kekuatan (Strengths)</h4>
            <ul className="space-y-1 text-sm">
              {data.swotAnalysis.strengths.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-green-600 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-accent-50 border border-accent-100 rounded-lg p-4">
            <h4 className="text-accent-700 font-medium mb-2">Kelemahan (Weaknesses)</h4>
            <ul className="space-y-1 text-sm">
              {data.swotAnalysis.weaknesses.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="text-blue-700 font-medium mb-2">Peluang (Opportunities)</h4>
            <ul className="space-y-1 text-sm">
              {data.swotAnalysis.opportunities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <h4 className="text-yellow-700 font-medium mb-2">Ancaman (Threats)</h4>
            <ul className="space-y-1 text-sm">
              {data.swotAnalysis.threats.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-yellow-600 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}