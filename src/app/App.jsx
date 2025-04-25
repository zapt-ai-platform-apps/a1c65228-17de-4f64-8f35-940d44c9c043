import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/modules/core/components/Layout';
import HomePage from '@/app/pages/HomePage';
import ValidatorPage from '@/app/pages/ValidatorPage';
import GuidePage from '@/app/pages/GuidePage';
import TipsPage from '@/app/pages/TipsPage';
import TemplatesPage from '@/app/pages/TemplatesPage';
import MarketResearchPage from '@/app/pages/MarketResearchPage';
import GeneratorPage from '@/app/pages/GeneratorPage';
import ZaptBadge from '@/modules/core/components/ZaptBadge';

export default function App() {
  return (
    <div className="h-full bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/validator" element={<ValidatorPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/market-research" element={<MarketResearchPage />} />
          <Route path="/generator" element={<GeneratorPage />} />
        </Routes>
      </Layout>
      <ZaptBadge />
    </div>
  );
}