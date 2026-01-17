import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PolicyCorrectionDiagram = () => {
  const [activePolicy, setActivePolicy] = useState<'reducing' | 'switching'>('switching');

  return (
    <div className="my-8 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2 text-center font-playfair">
        Policies to Correct a Current Account Deficit
      </h3>
      <p className="text-center text-white/60 text-sm mb-6">
        Expenditure-Switching vs Expenditure-Reducing Approaches
      </p>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActivePolicy('switching')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activePolicy === 'switching' 
              ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Expenditure-Switching
        </button>
        <button
          onClick={() => setActivePolicy('reducing')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activePolicy === 'reducing' 
              ? 'bg-amber-500/30 text-amber-400 border border-amber-500' 
              : 'bg-white/5 text-white/60 border border-white/20'
          }`}
        >
          Expenditure-Reducing
        </button>
      </div>

      <svg viewBox="0 0 700 420" className="w-full h-auto">
        <defs>
          <marker id="policyArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={activePolicy === 'switching' ? '#22D3EE' : '#F59E0B'} />
          </marker>
        </defs>

        {activePolicy === 'switching' ? (
          <g>
            {/* AD/AS Diagram for Expenditure Switching */}
            <text x="350" y="30" textAnchor="middle" fill="#22D3EE" fontSize="14" fontWeight="bold">
              EXPENDITURE-SWITCHING: Redirect Demand to Domestic Output
            </text>

            {/* Left side - Policy instruments */}
            <rect x="30" y="60" width="180" height="200" rx="8" fill="rgba(34, 211, 238, 0.1)" stroke="#22D3EE" strokeWidth="2" />
            <text x="120" y="85" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">POLICY INSTRUMENTS</text>
            
            {[
              { y: 110, text: 'Depreciation/Devaluation', icon: '📉' },
              { y: 145, text: 'Import Tariffs', icon: '🏛️' },
              { y: 180, text: 'Import Quotas', icon: '🚫' },
              { y: 215, text: 'Supply-Side Policies', icon: '⚙️' }
            ].map((item, idx) => (
              <g key={idx}>
                <text x="50" y={item.y} fill="white" fontSize="10">{item.icon}</text>
                <text x="70" y={item.y} fill="white" fontSize="10">{item.text}</text>
              </g>
            ))}

            {/* Arrow to mechanism */}
            <path d="M 210 160 L 260 160" stroke="#22D3EE" strokeWidth="2" markerEnd="url(#policyArrow)" />

            {/* Central mechanism */}
            <rect x="270" y="90" width="160" height="140" rx="8" fill="rgba(167, 139, 250, 0.15)" stroke="#A78BFA" strokeWidth="2" />
            <text x="350" y="115" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="bold">TRANSMISSION</text>
            
            <text x="290" y="140" fill="white" fontSize="9">• Exports cheaper (X↑)</text>
            <text x="290" y="160" fill="white" fontSize="9">• Imports dearer (M↓)</text>
            <text x="290" y="180" fill="white" fontSize="9">• (X-M) improves</text>
            <text x="290" y="200" fill="white" fontSize="9">• AD shifts RIGHT</text>
            <text x="290" y="220" fill="white" fontSize="9">• Domestic output↑</text>

            {/* Arrow to outcome */}
            <path d="M 430 160 L 480 160" stroke="#A78BFA" strokeWidth="2" markerEnd="url(#policyArrow)" />

            {/* Right side - Outcomes */}
            <rect x="490" y="60" width="180" height="200" rx="8" fill="rgba(34, 211, 238, 0.1)" stroke="#22D3EE" strokeWidth="2" />
            <text x="580" y="85" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold">OUTCOMES</text>
            
            <text x="510" y="115" fill="#10B981" fontSize="10">✓ CA Deficit Reduced</text>
            <text x="510" y="135" fill="#10B981" fontSize="10">✓ Output (Y) Increases</text>
            <text x="510" y="155" fill="#10B981" fontSize="10">✓ Employment Rises</text>
            
            <text x="510" y="185" fill="#EF4444" fontSize="10">✗ Imported Inflation</text>
            <text x="510" y="205" fill="#EF4444" fontSize="10">✗ Retaliation Risk</text>
            <text x="510" y="225" fill="#EF4444" fontSize="10">✗ J-Curve Delay</text>

            {/* Warnings box */}
            <rect x="180" y="280" width="340" height="60" rx="6" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" strokeWidth="1" />
            <text x="350" y="300" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">⚠️ LIMITATIONS</text>
            <text x="350" y="318" textAnchor="middle" fill="white" fontSize="9">
              Success depends on Marshall-Lerner Condition being satisfied (PEDx + PEDm {'>'} 1)
            </text>
            <text x="350" y="332" textAnchor="middle" fill="white" fontSize="9">
              Short-run J-Curve worsening before long-run improvement
            </text>

            {/* AD/AS mini diagram */}
            <g transform="translate(80, 350)">
              <line x1="20" y1="60" x2="120" y2="60" stroke="white" strokeOpacity="0.3" />
              <line x1="20" y1="0" x2="20" y2="60" stroke="white" strokeOpacity="0.3" />
              <text x="120" y="75" fill="white" fontSize="8">Y</text>
              <text x="5" y="30" fill="white" fontSize="8">P</text>
              
              {/* AD curves */}
              <line x1="30" y1="55" x2="100" y2="10" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="4,2" />
              <line x1="50" y1="55" x2="120" y2="10" stroke="#22D3EE" strokeWidth="2" />
              <text x="110" y="8" fill="#22D3EE" fontSize="7">AD₂</text>
              <text x="90" y="8" fill="#22D3EE" fontSize="7" opacity="0.6">AD₁</text>
              
              {/* Arrow showing shift */}
              <path d="M 60 35 L 80 25" stroke="#22D3EE" strokeWidth="1" markerEnd="url(#policyArrow)" />
            </g>

            <text x="200" y="405" textAnchor="middle" fill="white" fontSize="9">AD shifts right as (X-M) improves</text>

            {/* Trade diagram */}
            <g transform="translate(420, 350)">
              <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(34, 211, 238, 0.1)" stroke="#22D3EE" />
              <text x="50" y="20" textAnchor="middle" fill="white" fontSize="9">Before: X {'<'} M</text>
              <text x="50" y="40" textAnchor="middle" fill="#22D3EE" fontSize="9" fontWeight="bold">After: X ≈ M</text>
              <text x="50" y="55" textAnchor="middle" fill="#10B981" fontSize="8">Deficit Reduced</text>
            </g>
          </g>
        ) : (
          <g>
            {/* Expenditure Reducing */}
            <text x="350" y="30" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold">
              EXPENDITURE-REDUCING: Lower Total Demand in Economy
            </text>

            {/* Left side - Policy instruments */}
            <rect x="30" y="60" width="180" height="200" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" strokeWidth="2" />
            <text x="120" y="85" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold">POLICY INSTRUMENTS</text>
            
            {[
              { y: 115, text: 'Higher Taxes (T↑)', sub: 'Reduces disposable income' },
              { y: 155, text: 'Lower Gov Spending (G↓)', sub: 'Direct AD reduction' },
              { y: 195, text: 'Higher Interest Rates (r↑)', sub: 'Reduces C and I' },
              { y: 235, text: 'Credit Controls', sub: 'Limits borrowing capacity' }
            ].map((item, idx) => (
              <g key={idx}>
                <text x="45" y={item.y} fill="white" fontSize="10" fontWeight="bold">{item.text}</text>
                <text x="45" y={item.y + 12} fill="white" fontSize="8" opacity="0.6">{item.sub}</text>
              </g>
            ))}

            {/* Arrow to mechanism */}
            <path d="M 210 160 L 260 160" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#policyArrow)" />

            {/* Central mechanism */}
            <rect x="270" y="90" width="160" height="140" rx="8" fill="rgba(167, 139, 250, 0.15)" stroke="#A78BFA" strokeWidth="2" />
            <text x="350" y="115" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="bold">TRANSMISSION</text>
            
            <text x="290" y="140" fill="white" fontSize="9">• National income (Y↓)</text>
            <text x="290" y="160" fill="white" fontSize="9">• Consumer spending (C↓)</text>
            <text x="290" y="180" fill="white" fontSize="9">• Import demand (M↓)</text>
            <text x="290" y="200" fill="white" fontSize="9">• AD shifts LEFT</text>
            <text x="290" y="220" fill="white" fontSize="9">• Via MPM effect</text>

            {/* Arrow to outcome */}
            <path d="M 430 160 L 480 160" stroke="#A78BFA" strokeWidth="2" markerEnd="url(#policyArrow)" />

            {/* Right side - Outcomes */}
            <rect x="490" y="60" width="180" height="200" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" strokeWidth="2" />
            <text x="580" y="85" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold">OUTCOMES</text>
            
            <text x="510" y="115" fill="#10B981" fontSize="10">✓ CA Deficit Reduced</text>
            <text x="510" y="135" fill="#10B981" fontSize="10">✓ Inflation Falls</text>
            <text x="510" y="155" fill="#10B981" fontSize="10">✓ No Retaliation</text>
            
            <text x="510" y="185" fill="#EF4444" fontSize="10">✗ RECESSION Risk</text>
            <text x="510" y="205" fill="#EF4444" fontSize="10">✗ Unemployment Rises</text>
            <text x="510" y="225" fill="#EF4444" fontSize="10">✗ Living Standards↓</text>

            {/* Trade-off warning */}
            <rect x="180" y="280" width="340" height="60" rx="6" fill="rgba(220, 38, 38, 0.1)" stroke="#EF4444" strokeWidth="1" />
            <text x="350" y="300" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="bold">⚠️ SEVERE TRADE-OFF</text>
            <text x="350" y="318" textAnchor="middle" fill="white" fontSize="9">
              Reduces deficit by CONTRACTING the economy—"curing the disease by killing the patient"
            </text>
            <text x="350" y="332" textAnchor="middle" fill="white" fontSize="9">
              Politically unpopular due to employment and growth costs
            </text>

            {/* AD/AS mini diagram showing contraction */}
            <g transform="translate(80, 350)">
              <line x1="20" y1="60" x2="120" y2="60" stroke="white" strokeOpacity="0.3" />
              <line x1="20" y1="0" x2="20" y2="60" stroke="white" strokeOpacity="0.3" />
              <text x="120" y="75" fill="white" fontSize="8">Y</text>
              <text x="5" y="30" fill="white" fontSize="8">P</text>
              
              {/* AD curves - contraction */}
              <line x1="50" y1="55" x2="120" y2="10" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4,2" />
              <line x1="30" y1="55" x2="100" y2="10" stroke="#F59E0B" strokeWidth="2" />
              <text x="90" y="8" fill="#F59E0B" fontSize="7">AD₁</text>
              <text x="70" y="8" fill="#F59E0B" fontSize="7" opacity="0.6">AD₂</text>
              
              {/* Arrow showing leftward shift */}
              <path d="M 80 25 L 60 35" stroke="#F59E0B" strokeWidth="1" markerEnd="url(#policyArrow)" />
            </g>

            <text x="200" y="405" textAnchor="middle" fill="white" fontSize="9">AD shifts LEFT → Y↓ → M↓</text>

            {/* MPM explanation */}
            <g transform="translate(420, 350)">
              <rect x="0" y="0" width="140" height="60" rx="4" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" />
              <text x="70" y="18" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">MPM Effect</text>
              <text x="70" y="35" textAnchor="middle" fill="white" fontSize="8">ΔM = MPM × ΔY</text>
              <text x="70" y="52" textAnchor="middle" fill="white" fontSize="8" opacity="0.7">Lower Y → Lower M</text>
            </g>
          </g>
        )}
      </svg>

      {/* Analysis Box */}
      <div className="mt-4 p-4 rounded-lg bg-slate-800/50 border border-amber-500/30">
        <p className="text-sm text-white/80">
          <strong className={activePolicy === 'switching' ? 'text-cyan-400' : 'text-amber-400'}>
            Senior Examiner's Evaluation:
          </strong>{' '}
          {activePolicy === 'switching' 
            ? 'Expenditure-switching is the preferred approach as it can improve the current account without sacrificing economic growth. However, its effectiveness is conditional on the Marshall-Lerner condition being satisfied and requires time for the J-Curve effect to complete. The risk of imported inflation and potential retaliation limits its applicability for countries in trading blocs.'
            : 'Expenditure-reducing policies are a "blunt instrument"—effective in reducing imports but at the cost of domestic prosperity. They are typically used as a last resort or in conjunction with switching policies. The contractionary impact violates the objective of economic growth, creating a direct policy conflict that governments seek to avoid.'
          }
        </p>
      </div>
    </div>
  );
};

export default PolicyCorrectionDiagram;
