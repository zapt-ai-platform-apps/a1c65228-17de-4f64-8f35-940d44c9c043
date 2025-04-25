import React from 'react';
import { motion } from 'framer-motion';

export default function ShowcaseImage() {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium text-dark-500">
          Validator Ide Bisnis RBX76S
        </div>
        <div></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Hasil Analisis Ide Bisnis</h3>
          <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
            85% Berhasil
          </span>
        </div>
        
        <div className="space-y-4 mb-6">
          {['Potensi Pasar', 'Kelayakan Finansial', 'Tingkat Persaingan', 'Keunikan Ide'].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-dark-500">{item}</span>
                  <span className="text-sm text-dark-400">{75 + i * 5}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-primary-600 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${75 + i * 5}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                  ></motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
          <h4 className="font-medium mb-2 text-dark-500">Rekomendasi Utama:</h4>
          <p className="text-sm text-dark-400">
            Ide bisnis ini memiliki potensi yang baik. Pertimbangkan untuk mengembangkan 
            fitur differensiasi lebih lanjut dan lakukan validasi pasar dengan target segmen A dan B.
          </p>
        </div>
        
        <div className="flex justify-end">
          <button className="btn btn-primary">
            Lihat Analisis Lengkap
          </button>
        </div>
      </div>
    </div>
  );
}