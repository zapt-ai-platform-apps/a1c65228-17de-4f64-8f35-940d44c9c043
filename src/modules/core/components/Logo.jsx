import React from 'react';
import { Link } from 'react-router-dom';
import { HiLightningBolt } from 'react-icons/hi';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white p-1.5 rounded">
        <HiLightningBolt className="w-5 h-5" />
      </span>
      <span className="font-bold text-xl text-dark-600">
        Validator<span className="text-primary-600">Bisnis</span>
      </span>
      <span className="text-xs bg-primary-100 text-primary-800 px-1.5 py-0.5 rounded-md font-medium">
        RBX76S
      </span>
    </Link>
  );
}