/**
 * Dynamic Economic Diagram Detection & Rendering System
 * Detects economic concepts in AI responses and renders appropriate diagrams
 */

import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Diagram component mapping - lazy loaded for performance
const DIAGRAM_COMPONENTS = {
  // AD/AS Analysis
  'ad-shift': lazy(() => import('@/components/diagrams/ADShiftDiagram')),
  'as-shift': lazy(() => import('@/components/diagrams/SRASLRASDiagram')),
  'adas-equilibrium': lazy(() => import('@/components/diagrams/ADASInteractiveDiagram')),
  'demand-pull-inflation': lazy(() => import('@/components/diagrams/DemandPullInflationDiagram')),
  'cost-push-inflation': lazy(() => import('@/components/diagrams/CostPushInflationDiagram')),
  
  // Market Equilibrium
  'demand-supply': lazy(() => import('@/components/diagrams/DemandSupplyEquilibriumDiagram')),
  'market-equilibrium': lazy(() => import('@/components/diagrams/MarketEquilibriumInteractive')),
  'demand-shift': lazy(() => import('@/components/diagrams/DemandShiftDiagram')),
  
  // Elasticity
  'price-elasticity': lazy(() => import('@/components/diagrams/PriceElasticityDiagram')),
  'elasticity-diagrams': lazy(() => import('@/components/diagrams/ElasticityDiagrams')),
  'ped-revenue': lazy(() => import('@/components/diagrams/PEDRevenueDiagram')),
  
  // Welfare Analysis
  'consumer-producer-surplus': lazy(() => import('@/components/diagrams/ConsumerProducerSurplusDiagram')),
  'welfare-surplus': lazy(() => import('@/components/diagrams/WelfareEconomicsSurplusDiagram')),
  'externalities': lazy(() => import('@/components/diagrams/ExternalitiesDiagram')),
  'tariff-deadweight': lazy(() => import('@/components/diagrams/TariffDeadweightDiagram')),
  
  // Trade
  'trade-creation': lazy(() => import('@/components/diagrams/TradeCreationDiagram')),
  'trade-diversion': lazy(() => import('@/components/diagrams/TradeDiversionDiagram')),
  'comparative-advantage': lazy(() => import('@/components/diagrams/ComparativeAdvantageDiagram')),
  'tariff-quota': lazy(() => import('@/components/diagrams/TariffQuotaDiagram')),
  'j-curve': lazy(() => import('@/components/diagrams/JCurveDiagram')),
  'marshall-lerner': lazy(() => import('@/components/diagrams/JCurveMarshallLernerDiagram')),
  
  // Macro Policy
  'fiscal-policy': lazy(() => import('@/components/diagrams/FiscalPolicyShiftDiagram')),
  'monetary-transmission': lazy(() => import('@/components/diagrams/MonetaryTransmissionDiagram')),
  'phillips-curve': lazy(() => import('@/components/diagrams/PhillipsCurveDiagram')),
  'multiplier': lazy(() => import('@/components/diagrams/MultiplierDiagram')),
  'circular-flow': lazy(() => import('@/components/diagrams/CircularFlowDiagram')),
  
  // PPC/Growth
  'ppc': lazy(() => import('@/components/diagrams/PPCConceptDiagram')),
  'ppc-shifts': lazy(() => import('@/components/diagrams/PPCShiftsDiagram')),
  'business-cycle': lazy(() => import('@/components/diagrams/BusinessCycleDiagram')),
  'output-gaps': lazy(() => import('@/components/diagrams/OutputGapsDiagram')),
  
  // Development
  'kuznets-curve': lazy(() => import('@/components/diagrams/KuznetsCurveDiagram')),
  'lorenz-curve': lazy(() => import('@/components/diagrams/LorenzCurveDiagram')),
  'harrod-domar': lazy(() => import('@/components/diagrams/HarrodDomarDiagram')),
  
  // Market Structures
  'monopoly': lazy(() => import('@/components/diagrams/MonopolyDiagram')),
  'perfect-competition': lazy(() => import('@/components/diagrams/PerfectCompetitionDiagram')),
  'kinked-demand': lazy(() => import('@/components/diagrams/KinkedDemandDiagram')),
  'cost-curves': lazy(() => import('@/components/diagrams/CostCurvesDiagram')),
  
  // Money & Banking
  'liquidity-preference': lazy(() => import('@/components/diagrams/LiquidityPreferenceDiagram')),
  'money-supply': lazy(() => import('@/components/diagrams/MoneySupplyDiagram')),
  'credit-multiplier': lazy(() => import('@/components/diagrams/CreditMultiplierDiagram')),
  
  // Labor Market
  'labor-market': lazy(() => import('@/components/diagrams/LaborMarketDiagram')),
  'unemployment': lazy(() => import('@/components/diagrams/CyclicalUnemploymentDiagram')),
  
  // Exchange Rates
  'exchange-rate': lazy(() => import('@/components/diagrams/ExchangeRateDiagram')),
  'fixed-exchange-rate': lazy(() => import('@/components/diagrams/FixedExchangeRateDiagram')),
  
  // Utility
  'utility': lazy(() => import('@/components/diagrams/UtilityDiagram')),
  'indifference-curves': lazy(() => import('@/components/diagrams/BudgetIndifferenceDiagram')),
} as const;

type DiagramType = keyof typeof DIAGRAM_COMPONENTS;

// Topic detection patterns with priority ranking
const TOPIC_PATTERNS: { pattern: RegExp; diagram: DiagramType; priority: number }[] = [
  // High priority - specific concepts
  { pattern: /marshall[-\s]?lerner|(\|PED_?[XM]\|.*>\s*1)|devaluation.*trade\s*balance/i, diagram: 'marshall-lerner', priority: 10 },
  { pattern: /j[-\s]?curve|short[-\s]?run.*worsening|BoP.*worsens.*improves/i, diagram: 'j-curve', priority: 10 },
  { pattern: /trade\s*creation|customs\s*union.*welfare\s*gain/i, diagram: 'trade-creation', priority: 10 },
  { pattern: /trade\s*diversion|customs\s*union.*welfare\s*loss/i, diagram: 'trade-diversion', priority: 10 },
  { pattern: /kuznets\s*curve|inequality.*development/i, diagram: 'kuznets-curve', priority: 10 },
  { pattern: /phillips\s*curve|inflation.*unemployment\s*trade[-\s]?off|SRPC|LRPC|NRU/i, diagram: 'phillips-curve', priority: 10 },
  { pattern: /liquidity\s*preference|liquidity\s*trap|interest\s*rate\s*determination/i, diagram: 'liquidity-preference', priority: 10 },
  { pattern: /harrod[-\s]?domar|savings.*investment.*growth/i, diagram: 'harrod-domar', priority: 10 },
  
  // Medium-high priority - main topics
  { pattern: /demand[-\s]?pull\s*inflation|AD\s*shift.*right.*inflation/i, diagram: 'demand-pull-inflation', priority: 8 },
  { pattern: /cost[-\s]?push\s*inflation|SRAS\s*shift.*left|stagflation/i, diagram: 'cost-push-inflation', priority: 8 },
  { pattern: /multiplier\s*effect|k\s*=|1\/(1[-\s]?MPC)|MPW/i, diagram: 'multiplier', priority: 8 },
  { pattern: /monetary\s*policy.*transmission|interest\s*rate.*AD/i, diagram: 'monetary-transmission', priority: 8 },
  { pattern: /fiscal\s*policy|government\s*spending.*AD|taxation.*AD/i, diagram: 'fiscal-policy', priority: 8 },
  { pattern: /comparative\s*advantage|specialization.*trade|opportunity\s*cost.*trade/i, diagram: 'comparative-advantage', priority: 8 },
  { pattern: /tariff|quota|protectionism|deadweight\s*loss.*trade/i, diagram: 'tariff-deadweight', priority: 8 },
  
  // Medium priority - core concepts
  { pattern: /aggregate\s*demand.*shift|AD\s*shift|increase\s*in\s*AD/i, diagram: 'ad-shift', priority: 6 },
  { pattern: /SRAS.*LRAS|aggregate\s*supply.*shift|AS\s*shift/i, diagram: 'as-shift', priority: 6 },
  { pattern: /AD[-\/]?AS.*equilibrium|macroeconomic\s*equilibrium|GPL.*real\s*output/i, diagram: 'adas-equilibrium', priority: 6 },
  { pattern: /consumer\s*surplus|producer\s*surplus|welfare\s*analysis/i, diagram: 'consumer-producer-surplus', priority: 6 },
  { pattern: /externality|MSC|MSB|MPC|MPB|market\s*failure.*social/i, diagram: 'externalities', priority: 6 },
  { pattern: /price\s*elasticity|PED|elastic.*inelastic|%ΔQ.*%ΔP/i, diagram: 'price-elasticity', priority: 6 },
  { pattern: /lorenz\s*curve|gini\s*coefficient|income\s*distribution/i, diagram: 'lorenz-curve', priority: 6 },
  { pattern: /output\s*gap|recessionary\s*gap|inflationary\s*gap|Y[_\s]*(fe|potential)/i, diagram: 'output-gaps', priority: 6 },
  
  // Lower priority - general topics
  { pattern: /demand.*supply.*equilibrium|market\s*equilibrium|P\s*=\s*MC/i, diagram: 'demand-supply', priority: 4 },
  { pattern: /shift.*demand\s*curve|demand\s*curve.*shift/i, diagram: 'demand-shift', priority: 4 },
  { pattern: /PPC|production\s*possibility|opportunity\s*cost.*frontier/i, diagram: 'ppc', priority: 4 },
  { pattern: /economic\s*growth.*PPC|PPC.*shift.*outward/i, diagram: 'ppc-shifts', priority: 4 },
  { pattern: /circular\s*flow|injections.*leakages|income\s*flow/i, diagram: 'circular-flow', priority: 4 },
  { pattern: /business\s*cycle|boom.*recession|economic\s*cycle/i, diagram: 'business-cycle', priority: 4 },
  { pattern: /monopoly|price\s*maker|MC\s*=\s*MR|supernormal\s*profit/i, diagram: 'monopoly', priority: 4 },
  { pattern: /perfect\s*competition|price\s*taker|normal\s*profit.*long[-\s]?run/i, diagram: 'perfect-competition', priority: 4 },
  { pattern: /kinked\s*demand|oligopoly.*price\s*rigidity/i, diagram: 'kinked-demand', priority: 4 },
  { pattern: /exchange\s*rate|depreciation|appreciation|currency/i, diagram: 'exchange-rate', priority: 4 },
  { pattern: /labor\s*market|wage\s*determination|MRP/i, diagram: 'labor-market', priority: 4 },
  { pattern: /unemployment|frictional|structural|cyclical/i, diagram: 'unemployment', priority: 4 },
  { pattern: /utility|marginal\s*utility|TU|MU|equi[-\s]?marginal/i, diagram: 'utility', priority: 4 },
  { pattern: /indifference\s*curve|budget\s*line|consumer\s*choice/i, diagram: 'indifference-curves', priority: 4 },
  { pattern: /cost\s*curves|MC|AC|AVC|AFC|economies\s*of\s*scale/i, diagram: 'cost-curves', priority: 4 },
];

// Loading component for diagrams
const DiagramLoader = () => (
  <div className="flex items-center justify-center p-8 glass-card my-4">
    <Loader2 className="w-6 h-6 animate-spin text-primary mr-2" />
    <span className="text-muted-foreground text-sm">Loading diagram...</span>
  </div>
);

/**
 * Detect diagrams that should be rendered based on message content
 */
export function detectDiagrams(content: string): DiagramType[] {
  const detected: { diagram: DiagramType; priority: number }[] = [];
  
  for (const { pattern, diagram, priority } of TOPIC_PATTERNS) {
    if (pattern.test(content)) {
      // Avoid duplicates
      if (!detected.some(d => d.diagram === diagram)) {
        detected.push({ diagram, priority });
      }
    }
  }
  
  // Sort by priority (highest first) and limit to top 2 diagrams
  return detected
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 2)
    .map(d => d.diagram);
}

/**
 * Parse AI response to extract diagram markers
 * The AI can include [DIAGRAM:type] markers in its response
 */
export function parseDiagramMarkers(content: string): { cleanContent: string; diagrams: DiagramType[] } {
  const markerPattern = /\[DIAGRAM:([a-z-]+)\]/gi;
  const diagrams: DiagramType[] = [];
  
  let match;
  while ((match = markerPattern.exec(content)) !== null) {
    const diagramType = match[1] as DiagramType;
    if (diagramType in DIAGRAM_COMPONENTS && !diagrams.includes(diagramType)) {
      diagrams.push(diagramType);
    }
  }
  
  // Remove markers from content
  const cleanContent = content.replace(markerPattern, '').trim();
  
  return { cleanContent, diagrams };
}

interface DynamicDiagramProps {
  type: DiagramType;
  compact?: boolean;
}

/**
 * Render a diagram component dynamically
 */
export function DynamicDiagram({ type, compact = true }: DynamicDiagramProps) {
  const DiagramComponent = DIAGRAM_COMPONENTS[type];
  
  if (!DiagramComponent) {
    return null;
  }
  
  // Cast to any to handle dynamic component loading
  const Component = DiagramComponent as React.LazyExoticComponent<React.ComponentType<Record<string, never>>>;
  
  return (
    <Suspense fallback={<DiagramLoader />}>
      <div className={compact ? 'my-4 scale-95 origin-top-left' : 'my-4'}>
        <Component />
      </div>
    </Suspense>
  );
}

interface ChatDiagramRendererProps {
  content: string;
  autoDetect?: boolean;
}

/**
 * Main component to render diagrams in chat messages
 * Can use explicit markers or auto-detect from content
 */
export function ChatDiagramRenderer({ content, autoDetect = true }: ChatDiagramRendererProps) {
  // First check for explicit markers
  const { diagrams: markedDiagrams } = parseDiagramMarkers(content);
  
  // If no markers and auto-detect is enabled, detect from content
  const diagrams = markedDiagrams.length > 0 
    ? markedDiagrams 
    : (autoDetect ? detectDiagrams(content) : []);
  
  if (diagrams.length === 0) {
    return null;
  }
  
  return (
    <div className="chat-diagrams-container space-y-4 mt-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <div className="w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <span className="uppercase tracking-wider font-medium">Visual Analysis</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      </div>
      {diagrams.map((diagram, index) => (
        <DynamicDiagram key={`${diagram}-${index}`} type={diagram} compact />
      ))}
    </div>
  );
}

export default ChatDiagramRenderer;
