import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BoPStructureDiagram = () => {
  const [activeAccount, setActiveAccount] = useState<string | null>(null);

  const accounts = [
    {
      id: 'current',
      name: 'Current Account',
      color: '#22D3EE',
      components: [
        { name: 'Trade in Goods', desc: 'Visible exports/imports', value: '±X-M' },
        { name: 'Trade in Services', desc: 'Invisibles (tourism, finance)', value: '±Net Services' },
        { name: 'Primary Income', desc: 'Investment income, wages', value: '±Net Income' },
        { name: 'Secondary Income', desc: 'Remittances, aid', value: '±Transfers' }
      ]
    },
    {
      id: 'capital',
      name: 'Capital Account',
      color: '#A78BFA',
      components: [
        { name: 'Capital Transfers', desc: 'Debt forgiveness, migrant transfers', value: '±Net Capital' },
        { name: 'Non-Produced Assets', desc: 'Patents, copyrights, land', value: '±Assets' }
      ]
    },
    {
      id: 'financial',
      name: 'Financial Account',
      color: '#F59E0B',
      components: [
        { name: 'FDI', desc: 'Long-term business investment', value: '±Net FDI' },
        { name: 'Portfolio Investment', desc: 'Stocks, bonds, securities', value: '±Portfolio' },
        { name: 'Other Investment', desc: 'Bank loans, trade credits', value: '±Other' },
        { name: 'Reserve Assets', desc: 'Central bank holdings', value: 'Δ Reserves' }
      ]
    }
  ];

  return (
    <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 text-center font-playfair">
        Structure of the Balance of Payments
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Visual Diagram */}
        <div className="lg:w-1/2">
          <svg viewBox="0 0 400 350" className="w-full h-auto">
            {/* Background */}
            <defs>
              <linearGradient id="bopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Main Container */}
            <rect x="20" y="10" width="360" height="330" rx="8" fill="url(#bopGradient)" stroke="white" strokeOpacity="0.2" />
            
            {/* Title */}
            <text x="200" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              Balance of Payments = 0
            </text>
            
            {/* Current Account Box */}
            <motion.g
              onMouseEnter={() => setActiveAccount('current')}
              onMouseLeave={() => setActiveAccount(null)}
              style={{ cursor: 'pointer' }}
            >
              <rect 
                x="35" y="50" width="150" height="130" rx="6" 
                fill={activeAccount === 'current' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0.15)'} 
                stroke="#22D3EE" strokeWidth="2"
              />
              <text x="110" y="72" textAnchor="middle" fill="#22D3EE" fontSize="12" fontWeight="bold">
                CURRENT ACCOUNT
              </text>
              <text x="50" y="95" fill="white" fontSize="9" opacity="0.8">• Trade in Goods</text>
              <text x="50" y="112" fill="white" fontSize="9" opacity="0.8">• Trade in Services</text>
              <text x="50" y="129" fill="white" fontSize="9" opacity="0.8">• Primary Income</text>
              <text x="50" y="146" fill="white" fontSize="9" opacity="0.8">• Secondary Income</text>
              <text x="110" y="168" textAnchor="middle" fill="#22D3EE" fontSize="10" fontWeight="bold">
                (X - M) + Net Income
              </text>
            </motion.g>
            
            {/* Capital Account Box */}
            <motion.g
              onMouseEnter={() => setActiveAccount('capital')}
              onMouseLeave={() => setActiveAccount(null)}
              style={{ cursor: 'pointer' }}
            >
              <rect 
                x="215" y="50" width="150" height="80" rx="6" 
                fill={activeAccount === 'capital' ? 'rgba(167, 139, 250, 0.3)' : 'rgba(167, 139, 250, 0.15)'} 
                stroke="#A78BFA" strokeWidth="2"
              />
              <text x="290" y="72" textAnchor="middle" fill="#A78BFA" fontSize="12" fontWeight="bold">
                CAPITAL ACCOUNT
              </text>
              <text x="230" y="95" fill="white" fontSize="9" opacity="0.8">• Capital Transfers</text>
              <text x="230" y="112" fill="white" fontSize="9" opacity="0.8">• Non-Produced Assets</text>
            </motion.g>
            
            {/* Financial Account Box */}
            <motion.g
              onMouseEnter={() => setActiveAccount('financial')}
              onMouseLeave={() => setActiveAccount(null)}
              style={{ cursor: 'pointer' }}
            >
              <rect 
                x="215" y="145" width="150" height="110" rx="6" 
                fill={activeAccount === 'financial' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.15)'} 
                stroke="#F59E0B" strokeWidth="2"
              />
              <text x="290" y="167" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">
                FINANCIAL ACCOUNT
              </text>
              <text x="230" y="190" fill="white" fontSize="9" opacity="0.8">• FDI (Long-term)</text>
              <text x="230" y="207" fill="white" fontSize="9" opacity="0.8">• Portfolio Investment</text>
              <text x="230" y="224" fill="white" fontSize="9" opacity="0.8">• Other Investment</text>
              <text x="230" y="241" fill="white" fontSize="9" opacity="0.8">• Reserve Assets</text>
            </motion.g>
            
            {/* Balancing Item */}
            <rect x="35" y="195" width="150" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="white" strokeOpacity="0.3" strokeDasharray="4,4" />
            <text x="110" y="220" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" opacity="0.7">
              Errors & Omissions
            </text>
            <text x="110" y="238" textAnchor="middle" fill="white" fontSize="9" opacity="0.5">
              (Statistical Balancing)
            </text>
            
            {/* Equals Zero */}
            <rect x="100" y="275" width="200" height="50" rx="8" fill="rgba(34, 211, 238, 0.1)" stroke="#22D3EE" strokeWidth="2" />
            <text x="200" y="297" textAnchor="middle" fill="white" fontSize="11">
              CA + Capital + Financial + E&O
            </text>
            <text x="200" y="315" textAnchor="middle" fill="#22D3EE" fontSize="14" fontWeight="bold">
              = 0 (Always Balances)
            </text>
          </svg>
        </div>
        
        {/* Detail Panel */}
        <div className="lg:w-1/2 space-y-4">
          {accounts.map((account) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: activeAccount === account.id ? 1.02 : 1
              }}
              className="p-4 rounded-lg border transition-all duration-300"
              style={{ 
                borderColor: account.color,
                backgroundColor: activeAccount === account.id ? `${account.color}20` : 'rgba(0,0,0,0.2)'
              }}
            >
              <h4 className="font-semibold mb-2" style={{ color: account.color }}>
                {account.name}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {account.components.map((comp, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-white/80 font-medium">{comp.name}</span>
                    <span className="text-white/50 block">{comp.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-white/70 italic">
              <strong className="text-cyan-400">Key Identity:</strong> A Current Account deficit must be financed 
              by a Financial Account surplus (capital inflows), demonstrating that international borrowing 
              is the mirror image of a trade deficit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoPStructureDiagram;
