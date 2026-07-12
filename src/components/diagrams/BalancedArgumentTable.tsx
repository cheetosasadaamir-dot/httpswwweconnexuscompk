import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, User, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const BalancedArgumentTable = () => {
  const [activeTab, setActiveTab] = useState<'firm-benefits' | 'worker-risks' | 'firm-risks'>('firm-benefits');

  const tabs = [
    { id: 'firm-benefits', label: 'Benefits to the Firm', icon: Building2, color: 'green' },
    { id: 'worker-risks', label: 'Risks to the Worker', icon: User, color: 'amber' },
    { id: 'firm-risks', label: 'Risks to the Firm', icon: AlertTriangle, color: 'red' }
  ];

  const content = {
    'firm-benefits': {
      icon: CheckCircle,
      items: [
        {
          point: 'Reduced Average Costs',
          explanation: 'Division of labour increases output per worker, spreading fixed costs over more units and reducing unit costs.',
          essay: 'Lower costs can be passed on to consumers as lower prices, increasing competitiveness.'
        },
        {
          point: 'Higher Profit Margins',
          explanation: 'Increased productivity without proportional wage increases means more output per dollar of labour cost.',
          essay: 'Firms can reinvest profits into R&D and capital, creating a virtuous cycle of growth.'
        },
        {
          point: 'Competitive Pricing',
          explanation: 'Lower costs enable firms to price below competitors while maintaining profitability.',
          essay: 'In perfectly competitive markets, cost leadership is essential for survival.'
        },
        {
          point: 'Economies of Scale',
          explanation: 'Specialized production enables bulk purchasing of inputs and efficient use of specialized machinery.',
          essay: 'Technical, managerial, and financial economies become accessible at higher output levels.'
        },
        {
          point: 'Quality Improvements',
          explanation: 'Workers become experts in their specific tasks, reducing errors and improving output quality.',
          essay: 'Consistency in production builds brand reputation and customer loyalty.'
        }
      ]
    },
    'worker-risks': {
      icon: XCircle,
      items: [
        {
          point: 'Boredom and Alienation (Monotony)',
          explanation: 'Repetitive tasks lead to psychological disengagement and reduced job satisfaction.',
          essay: 'Marx\'s concept of "alienation" describes workers feeling disconnected from the product of their labour.'
        },
        {
          point: 'Loss of Craftsmanship',
          explanation: 'Workers lose the ability to create a complete product, reducing pride in work.',
          essay: 'Traditional skills may be lost, affecting cultural heritage and artisanal industries.'
        },
        {
          point: 'Structural Unemployment Risk',
          explanation: 'If a specialized skill becomes obsolete due to technology, workers may become unemployable.',
          essay: 'Occupational immobility increases as workers are trained only in narrow skills.'
        },
        {
          point: 'Reduced Bargaining Power',
          explanation: 'Easily replaceable workers have limited leverage in wage negotiations.',
          essay: 'This contributes to wage inequality between skilled and unskilled workers.'
        },
        {
          point: 'Health Issues',
          explanation: 'Repetitive strain injuries and mental health issues from monotonous work.',
          essay: 'Firms may face higher healthcare costs and absenteeism in the long run.'
        }
      ]
    },
    'firm-risks': {
      icon: AlertTriangle,
      items: [
        {
          point: 'Interdependence Risk',
          explanation: 'If one part of the production line fails, the entire process stops. A single worker\'s absence can halt production.',
          essay: 'Just-in-time production systems are particularly vulnerable to supply chain disruptions.'
        },
        {
          point: 'High Training Costs',
          explanation: 'Although tasks are simple, training new workers still requires time and resources.',
          essay: 'High labour turnover can erode the cost savings from specialization.'
        },
        {
          point: 'Inflexibility',
          explanation: 'Production systems designed for one product are hard to adapt to changing consumer preferences.',
          essay: 'In dynamic markets, flexibility may be more valuable than efficiency.'
        },
        {
          point: 'Worker Motivation Issues',
          explanation: 'Bored workers produce lower quality output and have higher absenteeism.',
          essay: 'Firms may need to invest in job rotation, enrichment, or higher wages to compensate.'
        },
        {
          point: 'Overspecialization',
          explanation: 'Firms may become too dependent on a narrow product range, vulnerable to market shifts.',
          essay: 'Diversification becomes difficult when all resources are optimized for one output.'
        }
      ]
    }
  };

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      green: {
        bg: isActive ? 'bg-green-500/20' : 'bg-green-500/10',
        border: isActive ? 'border-green-400' : 'border-green-500/30',
        text: 'text-green-400'
      },
      amber: {
        bg: isActive ? 'bg-amber-500/20' : 'bg-amber-500/10',
        border: isActive ? 'border-amber-400' : 'border-amber-500/30',
        text: 'text-amber-400'
      },
      red: {
        bg: isActive ? 'bg-red-500/20' : 'bg-red-500/10',
        border: isActive ? 'border-red-400' : 'border-red-500/30',
        text: 'text-red-400'
      }
    };
    return colors[color];
  };

  const activeContent = content[activeTab as keyof typeof content];
  const activeTabData = tabs.find(t => t.id === activeTab)!;
  const colors = getColorClasses(activeTabData.color, true);

  return (
    <div className="w-full">
      <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
         Evaluation: Division of Labour – A Balanced Argument
      </h4>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Required for A-grade essays: Present both benefits and risks
      </p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const tabColors = getColorClasses(tab.color, activeTab === tab.id);
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300
                ${tabColors.bg} ${tabColors.border}
                ${activeTab === tab.id ? 'scale-105 shadow-lg' : 'hover:scale-102'}
              `}
            >
              <Icon className={`w-4 h-4 ${tabColors.text}`} />
              <span className={`text-sm font-medium ${tabColors.text}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Panel */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`rounded-xl border-2 overflow-hidden ${colors.bg} ${colors.border}`}
      >
        <div className="p-4">
          <div className="grid gap-3">
            {activeContent.items.map((item, index) => (
              <motion.div
                key={item.point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-charcoal-deep/50 border border-silver/10"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${colors.bg}`}>
                    <span className={`text-xs font-bold ${colors.text}`}>{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-semibold ${colors.text} mb-1`}>{item.point}</h5>
                    <p className="text-sm text-muted-foreground mb-2">{item.explanation}</p>
                    <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20">
                      <p className="text-xs text-amber-300">
                        <span className="font-semibold">Essay Link:</span> {item.essay}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Examiner Tip */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/30">
        <p className="text-sm text-center">
          <span className="text-amber-400 font-semibold">🎯 Examiner Tip:</span> For 
          <span className="text-cyan-400 font-semibold">  (Evaluation)</span>, always present 
          <strong> both sides</strong> of the argument. Use phrases like: 
          <em className="text-silver-bright">"However, it could be argued that..."</em> and 
          <em className="text-silver-bright">"On balance, the benefits outweigh the costs when..."</em>
        </p>
      </div>
    </div>
  );
};

export default BalancedArgumentTable;
