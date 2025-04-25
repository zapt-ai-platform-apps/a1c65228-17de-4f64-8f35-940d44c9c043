import React from 'react';
import { HiPencilAlt, HiLightningBolt, HiClipboardCheck } from 'react-icons/hi';

export default function ValidatorSteps({ currentStep = 1 }) {
  const steps = [
    {
      number: 1,
      title: 'Masukkan Detail',
      description: 'Jelaskan ide bisnis Anda',
      icon: <HiPencilAlt className="w-6 h-6" />
    },
    {
      number: 2,
      title: 'Analisis',
      description: 'Ide Anda dianalisis oleh RBX76S',
      icon: <HiLightningBolt className="w-6 h-6" />
    },
    {
      number: 3,
      title: 'Hasil & Rekomendasi',
      description: 'Dapatkan insight & langkah selanjutnya',
      icon: <HiClipboardCheck className="w-6 h-6" />
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div className="flex flex-col items-center relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                ${currentStep >= step.number ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {step.icon}
              </div>
              <div className="text-center">
                <div className={`font-medium 
                  ${currentStep >= step.number ? 'text-primary-600' : 'text-gray-500'}`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 max-w-[120px] text-center mt-1 hidden md:block">
                  {step.description}
                </div>
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-primary-600 transition-all duration-300"
                  style={{ width: currentStep > step.number ? '100%' : currentStep === step.number ? '50%' : '0%' }}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}