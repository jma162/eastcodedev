'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface EstimateContextType {
  showEstimateForm: boolean;
  setShowEstimateForm: (show: boolean) => void;
}

const EstimateContext = createContext<EstimateContextType | undefined>(undefined);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [showEstimateForm, setShowEstimateForm] = useState(false);

  return (
    <EstimateContext.Provider value={{ showEstimateForm, setShowEstimateForm }}>
      {children}
    </EstimateContext.Provider>
  );
}

export function useEstimate() {
  const context = useContext(EstimateContext);
  if (context === undefined) {
    throw new Error('useEstimate must be used within an EstimateProvider');
  }
  return context;
}

