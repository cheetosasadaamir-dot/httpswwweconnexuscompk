/**
 * Dynamic Economic Diagram Detection & Rendering System
 * Enhanced with Advanced Geometric Logic Integration
 * 
 * Features:
 * - Automatic concept detection from AI responses
 * - Explicit [DIAGRAM:type] marker parsing
 * - Priority-based diagram selection
 * - Lazy loading for performance
 */

import { lazy, Suspense } from 'react';
import { Loader2, TrendingUp } from 'lucide-react';

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
  'world-price-welfare': lazy(() => import('@/components/diagrams/WelfareWithWorldPriceDiagram')),
  
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
  
  // Market Structures (Enhanced with Geometric Precision)
  'monopoly': lazy(() => import('@/components/diagrams/MonopolyDiagram')),
  'perfect-competition': lazy(() => import('@/components/diagrams/PerfectCompetitionDiagram')),
  'monopolistic-competition': lazy(() => import('@/components/diagrams/MonopolisticCompetitionDiagram')),
  'kinked-demand': lazy(() => import('@/components/diagrams/KinkedDemandDiagram')),
  'cost-curves': lazy(() => import('@/components/diagrams/CostCurvesDiagram')),
  
  // Money & Banking (Enhanced with Liquidity Trap)
  'liquidity-preference': lazy(() => import('@/components/diagrams/LiquidityPreferenceDiagram')),
  'liquidity-trap': lazy(() => import('@/components/diagrams/LiquidityTrapDiagram')),
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

// Topic detection patterns with priority ranking - Full Syllabus Coverage
// Priority 10: Highly specific A2 concepts
// Priority 8: Major macro/micro frameworks
// Priority 6: Core AD/AS and welfare
// Priority 4: Foundational concepts
const TOPIC_PATTERNS: { pattern: RegExp; diagram: DiagramType; priority: number }[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PRIORITY 10 - A2 ADVANCED CONCEPTS (Highly Specific)
  // ═══════════════════════════════════════════════════════════════════════════
  
  // International Economics - Exchange Rates
  { pattern: /marshall[-\s]?lerner|(\|PED_?[XM]\|.*>\s*1)|devaluation.*elasticity|sum\s*of\s*elasticities/i, diagram: 'marshall-lerner', priority: 10 },
  { pattern: /j[-\s]?curve|worsens?\s*before\s*improv|BoP.*worsens.*improves|current\s*account.*deteriorat|time\s*lag.*devaluation/i, diagram: 'j-curve', priority: 10 },
  { pattern: /terms\s*of\s*trade|ToT|export.*import.*price\s*ratio|commodity.*price.*developing/i, diagram: 'comparative-advantage', priority: 10 },
  
  // Trade Blocs & Integration
  { pattern: /trade\s*creation|customs\s*union.*welfare\s*gain|tariff\s*removal.*member|efficiency.*bloc/i, diagram: 'trade-creation', priority: 10 },
  { pattern: /trade\s*diversion|CET.*welfare\s*loss|higher[-\s]?cost\s*member|external\s*tariff.*divert/i, diagram: 'trade-diversion', priority: 10 },
  
  // Development Economics
  { pattern: /kuznets\s*curve|inequality.*inverted[-\s]?U|development.*inequality.*falls|structural\s*transformation/i, diagram: 'kuznets-curve', priority: 10 },
  { pattern: /harrod[-\s]?domar|g\s*=\s*s\/k|savings.*gap|capital[-\s]?output\s*ratio|warranted\s*growth/i, diagram: 'harrod-domar', priority: 10 },
  { pattern: /lewis\s*model|dual\s*sector|unlimited\s*labour|subsistence.*modern\s*sector/i, diagram: 'labor-market', priority: 10 },
  
  // Phillips Curve Analysis
  { pattern: /phillips\s*curve|inflation.*unemployment\s*trade[-\s]?off|SRPC|LRPC|NAIRU|expectations[-\s]?augmented/i, diagram: 'phillips-curve', priority: 10 },
  { pattern: /natural\s*rate.*unemployment|NRU|vertical\s*LRPC|adaptive\s*expectations/i, diagram: 'phillips-curve', priority: 10 },
  
  // Money & Banking - Liquidity
  { pattern: /liquidity\s*trap|horizontal\s*L[PM]\s*curve|zero\s*lower\s*bound|monetary\s*policy.*ineffective/i, diagram: 'liquidity-trap', priority: 10 },
  { pattern: /liquidity\s*preference|speculative\s*demand.*money|transactionary|precautionary\s*motive/i, diagram: 'liquidity-preference', priority: 10 },
  { pattern: /quantity\s*theory|MV\s*=\s*PY|fisher\s*equation|velocity.*money/i, diagram: 'money-supply', priority: 10 },
  
  // Market Structures - Oligopoly & Game Theory
  { pattern: /kinked\s*demand|price\s*rigidity.*oligopoly|discontinuous\s*MR|sticky\s*prices.*oligopol/i, diagram: 'kinked-demand', priority: 10 },
  { pattern: /game\s*theory|prisoner'?s?\s*dilemma|nash\s*equilibrium|dominant\s*strategy|collusion.*cartel/i, diagram: 'kinked-demand', priority: 10 },
  { pattern: /contestable\s*market|hit[-\s]?and[-\s]?run|sunk\s*costs.*entry|potential\s*competition/i, diagram: 'perfect-competition', priority: 10 },
  
  // Labour Market - Monopsony
  { pattern: /monopsony|single\s*buyer.*labour|MCL.*above.*ACL|wage.*below.*MRP|labour\s*exploitation/i, diagram: 'labor-market', priority: 10 },
  { pattern: /trade\s*union|collective\s*bargaining|bilateral\s*monopoly.*labour|union.*wage\s*mark[-\s]?up/i, diagram: 'labor-market', priority: 10 },
  { pattern: /wage\s*differential|compensating\s*differential|human\s*capital.*wage|MRP.*labour\s*demand/i, diagram: 'labor-market', priority: 10 },
  
  // Efficiency Types
  { pattern: /allocative\s*efficiency|P\s*=\s*MC|marginal\s*social\s*benefit|resources.*optimal/i, diagram: 'consumer-producer-surplus', priority: 10 },
  { pattern: /productive\s*efficiency|minimum\s*AC|lowest\s*cost.*production|on\s*the\s*PPC/i, diagram: 'cost-curves', priority: 10 },
  { pattern: /dynamic\s*efficiency|innovation.*investment|R&D.*long[-\s]?run|supernormal.*reinvest/i, diagram: 'monopoly', priority: 10 },
  { pattern: /x[-\s]?inefficiency|organisational\s*slack|managerial.*inefficien|lack.*competitive\s*pressure/i, diagram: 'monopoly', priority: 10 },
  
  // Taxation - Laffer Curve
  { pattern: /laffer\s*curve|tax\s*rate.*revenue.*inverted|prohibitive\s*range|optimal\s*tax\s*rate/i, diagram: 'fiscal-policy', priority: 10 },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // PRIORITY 8 - MAJOR FRAMEWORKS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Inflation Types
  { pattern: /demand[-\s]?pull\s*inflation|AD\s*shift.*right.*inflation|excessive\s*spending|overheating\s*economy/i, diagram: 'demand-pull-inflation', priority: 8 },
  { pattern: /cost[-\s]?push\s*inflation|SRAS\s*shift.*left|stagflation|supply[-\s]?side\s*shock|oil\s*price\s*shock/i, diagram: 'cost-push-inflation', priority: 8 },
  { pattern: /hyperinflation|money\s*supply.*inflation|monetary\s*financing|printing\s*money/i, diagram: 'money-supply', priority: 8 },
  
  // Multiplier Effects
  { pattern: /multiplier\s*effect|k\s*=|1\/(1[-\s]?MPC)|MPW|marginal\s*propensity|injection.*rounds/i, diagram: 'multiplier', priority: 8 },
  { pattern: /accelerator|induced\s*investment|capital.*output.*growth|investment.*volatile/i, diagram: 'multiplier', priority: 8 },
  
  // Policy Transmission
  { pattern: /monetary\s*policy.*transmission|interest\s*rate.*AD|base\s*rate.*effect|QE.*transmission/i, diagram: 'monetary-transmission', priority: 8 },
  { pattern: /fiscal\s*policy|government\s*spending.*AD|budget.*deficit|crowding\s*out|automatic\s*stabilisers/i, diagram: 'fiscal-policy', priority: 8 },
  { pattern: /supply[-\s]?side\s*policy|LRAS.*shift|productivity.*potential|deregulation.*privatisation/i, diagram: 'as-shift', priority: 8 },
  
  // Trade Theory
  { pattern: /comparative\s*advantage|opportunity\s*cost.*trade|gains\s*from\s*trade|ricardian|specialisation/i, diagram: 'comparative-advantage', priority: 8 },
  { pattern: /absolute\s*advantage|more\s*output.*same\s*resources|adam\s*smith.*trade/i, diagram: 'comparative-advantage', priority: 8 },
  { pattern: /tariff|quota|protectionism|deadweight\s*loss.*trade|infant\s*industry/i, diagram: 'tariff-deadweight', priority: 8 },
  
  // Money Creation
  { pattern: /credit\s*multiplier|money\s*creation|reserve\s*ratio|fractional\s*reserve|deposit.*multiplier/i, diagram: 'credit-multiplier', priority: 8 },
  
  // Income Distribution
  { pattern: /gini\s*coefficient|lorenz\s*curve|income\s*distribution|inequality\s*measure|A\/(A\s*\+\s*B)/i, diagram: 'lorenz-curve', priority: 8 },
  
  // Market Structures
  { pattern: /monopolistic.*competition|product\s*differentiation|AR\s*tangent.*AC|brand.*loyalty/i, diagram: 'monopolistic-competition', priority: 8 },
  { pattern: /natural\s*monopoly|economies\s*of\s*scale.*barrier|subadditive\s*costs|utility.*regulation/i, diagram: 'monopoly', priority: 8 },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // PRIORITY 6 - CORE AD/AS & WELFARE
  // ═══════════════════════════════════════════════════════════════════════════
  
  // AD/AS Framework
  { pattern: /aggregate\s*demand.*shift|AD\s*shift|increase\s*in\s*AD|decrease\s*in\s*AD|C\s*\+\s*I\s*\+\s*G/i, diagram: 'ad-shift', priority: 6 },
  { pattern: /SRAS.*LRAS|aggregate\s*supply.*shift|AS\s*shift|classical.*keynesian\s*AS/i, diagram: 'as-shift', priority: 6 },
  { pattern: /AD[-\/]?AS.*equilibrium|macroeconomic\s*equilibrium|GPL.*real\s*output|national\s*income\s*equilibrium/i, diagram: 'adas-equilibrium', priority: 6 },
  { pattern: /keynesian\s*cross|45[-\s]?degree|AE\s*=\s*Y|injection.*withdrawal/i, diagram: 'multiplier', priority: 6 },
  
  // Welfare Economics
  { pattern: /consumer\s*surplus|producer\s*surplus|welfare\s*analysis|total\s*surplus|area\s*below\s*demand/i, diagram: 'consumer-producer-surplus', priority: 6 },
  { pattern: /deadweight\s*loss|DWL|welfare\s*loss.*triangle|allocative.*inefficiency/i, diagram: 'consumer-producer-surplus', priority: 6 },
  { pattern: /externality|MSC|MSB|MPC|MPB|market\s*failure.*social|third[-\s]?party\s*effects/i, diagram: 'externalities', priority: 6 },
  { pattern: /negative\s*externality|pollution|social\s*cost.*private|overproduction|pigouvian\s*tax/i, diagram: 'externalities', priority: 6 },
  { pattern: /positive\s*externality|merit\s*good|education.*healthcare|underconsumption|subsidy.*correction/i, diagram: 'externalities', priority: 6 },
  { pattern: /public\s*good|non[-\s]?excludable|non[-\s]?rival|free[-\s]?rider|government\s*provision/i, diagram: 'externalities', priority: 6 },
  
  // Elasticity
  { pattern: /price\s*elasticity|PED|elastic.*inelastic|%ΔQ.*%ΔP|responsiveness.*price/i, diagram: 'price-elasticity', priority: 6 },
  { pattern: /income\s*elasticity|YED|normal.*inferior\s*good|luxury.*necessity/i, diagram: 'price-elasticity', priority: 6 },
  { pattern: /cross[-\s]?elasticity|XED|substitute.*complement|positive.*XED.*negative/i, diagram: 'price-elasticity', priority: 6 },
  { pattern: /supply\s*elasticity|PES|time\s*period.*elasticity|factor\s*mobility/i, diagram: 'price-elasticity', priority: 6 },
  
  // Output Gaps
  { pattern: /output\s*gap|recessionary\s*gap|inflationary\s*gap|actual.*potential\s*output|Y[_\s]*fe/i, diagram: 'output-gaps', priority: 6 },
  { pattern: /deflationary\s*gap|negative\s*output\s*gap|spare\s*capacity|below\s*full\s*employment/i, diagram: 'output-gaps', priority: 6 },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // PRIORITY 4 - FOUNDATIONAL CONCEPTS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Basic Market Equilibrium
  { pattern: /demand.*supply.*equilibrium|market\s*equilibrium|price\s*mechanism|invisible\s*hand/i, diagram: 'demand-supply', priority: 4 },
  { pattern: /shift.*demand\s*curve|demand\s*curve.*shift|determinants\s*of\s*demand|ceteris\s*paribus/i, diagram: 'demand-shift', priority: 4 },
  { pattern: /shift.*supply\s*curve|supply\s*curve.*shift|determinants\s*of\s*supply/i, diagram: 'demand-supply', priority: 4 },
  { pattern: /movement\s*along|extension.*contraction|change\s*in\s*quantity\s*demanded/i, diagram: 'demand-supply', priority: 4 },
  
  // PPC & Opportunity Cost
  { pattern: /PPC|PPF|production\s*possibility|opportunity\s*cost.*frontier|scarcity.*choice/i, diagram: 'ppc', priority: 4 },
  { pattern: /economic\s*growth.*PPC|PPC.*shift.*outward|potential\s*output.*increase/i, diagram: 'ppc-shifts', priority: 4 },
  
  // Circular Flow
  { pattern: /circular\s*flow|injections.*leakages|income\s*flow|expenditure\s*flow|withdrawal/i, diagram: 'circular-flow', priority: 4 },
  
  // Business Cycle
  { pattern: /business\s*cycle|boom.*recession|economic\s*cycle|trade\s*cycle|peak.*trough/i, diagram: 'business-cycle', priority: 4 },
  
  // Market Structures - Basic
  { pattern: /monopoly|price\s*maker|MC\s*=\s*MR|supernormal\s*profit|barriers\s*to\s*entry/i, diagram: 'monopoly', priority: 4 },
  { pattern: /perfect\s*competition|price\s*taker|normal\s*profit.*long[-\s]?run|homogeneous\s*products/i, diagram: 'perfect-competition', priority: 4 },
  
  // Cost Curves
  { pattern: /cost\s*curves?|MC|AC|AVC|AFC|economies\s*of\s*scale|short[-\s]?run\s*costs|U[-\s]?shaped/i, diagram: 'cost-curves', priority: 4 },
  { pattern: /marginal\s*cost|average\s*cost|total\s*cost|variable\s*cost|fixed\s*cost/i, diagram: 'cost-curves', priority: 4 },
  
  // Exchange Rates - Basic
  { pattern: /exchange\s*rate|depreciation|appreciation|currency.*value|floating\s*exchange/i, diagram: 'exchange-rate', priority: 4 },
  { pattern: /fixed\s*exchange|pegged|central\s*bank.*intervention|currency\s*board/i, diagram: 'fixed-exchange-rate', priority: 4 },
  
  // Labour Market - Basic
  { pattern: /labor\s*market|labour\s*market|wage\s*determination|MRP|derived\s*demand.*labour/i, diagram: 'labor-market', priority: 4 },
  
  // Unemployment Types
  { pattern: /frictional\s*unemployment|job\s*search|transitional|between\s*jobs/i, diagram: 'unemployment', priority: 4 },
  { pattern: /structural\s*unemployment|mismatch|occupational.*geographical|technological\s*change/i, diagram: 'unemployment', priority: 4 },
  { pattern: /cyclical\s*unemployment|demand[-\s]?deficient|recession.*unemployment/i, diagram: 'unemployment', priority: 4 },
  
  // Utility Theory
  { pattern: /utility|marginal\s*utility|TU|MU|equi[-\s]?marginal|diminishing\s*utility/i, diagram: 'utility', priority: 4 },
  { pattern: /indifference\s*curve|budget\s*line|consumer\s*choice|optimal\s*consumption|tangency/i, diagram: 'indifference-curves', priority: 4 },
  
  // Balance of Payments
  { pattern: /balance\s*of\s*payments|BoP|current\s*account|capital\s*account|financial\s*account/i, diagram: 'exchange-rate', priority: 4 },
  { pattern: /trade\s*deficit|trade\s*surplus|visible.*invisible|net\s*exports/i, diagram: 'exchange-rate', priority: 4 },
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
