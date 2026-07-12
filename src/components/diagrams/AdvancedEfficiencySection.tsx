import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Scale, TrendingUp, Target, AlertTriangle, Calculator } from 'lucide-react';
import NoteCard from '@/components/NoteCard';
import AnalysisBlock from '@/components/AnalysisBlock';

/**
 * Advanced Efficiency, Market Failure & Cost-Benefit Analysis Section
 * Covers: Productive/Allocative/Dynamic Efficiency, Pareto Optimality,
 * Complete vs Partial Market Failure, and Social CBA
 * [A2 Specialist - Efficiency & Market Failure]
 */
const AdvancedEfficiencySection =  => {
 return (
 <div className="space-y-8">
 {/* Section Header */}
 <div className="text-center mb-8">
 <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
 [A2 Specialist - Efficiency & Market Failure]
 </span>
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-2">
 Advanced Efficiency Theory & Cost-Benefit Analysis
 </h2>
 <p className="text-muted-foreground max-w-3xl mx-auto">
 Comprehensive analysis of efficiency concepts, Pareto optimality, market failure classifications,
 and the methodology of Social Cost-Benefit Analysis for policy evaluation.
 </p>
 </div>

 <Tabs defaultValue="efficiency" className="w-full">
 <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-muted/50 p-1 rounded-xl">
 <TabsTrigger value="efficiency" className="flex items-center gap-2 text-xs sm:text-sm">
 <Target className="w-4 h-4" />
 <span className="hidden sm:inline">Efficiency Types</span>
 <span className="sm:hidden">Efficiency</span>
 </TabsTrigger>
 <TabsTrigger value="pareto" className="flex items-center gap-2 text-xs sm:text-sm">
 <Scale className="w-4 h-4" />
 <span className="hidden sm:inline">Pareto Optimality</span>
 <span className="sm:hidden">Pareto</span>
 </TabsTrigger>
 <TabsTrigger value="failure" className="flex items-center gap-2 text-xs sm:text-sm">
 <AlertTriangle className="w-4 h-4" />
 <span className="hidden sm:inline">Market Failure</span>
 <span className="sm:hidden">Failure</span>
 </TabsTrigger>
 <TabsTrigger value="cba" className="flex items-center gap-2 text-xs sm:text-sm">
 <Calculator className="w-4 h-4" />
 <span className="hidden sm:inline">Cost-Benefit</span>
 <span className="sm:hidden">CBA</span>
 </TabsTrigger>
 </TabsList>

 {/* Tab 1: Efficiency Types */}
 <TabsContent value="efficiency" className="mt-6 space-y-6">
 <EfficiencyTypesContent />
 </TabsContent>

 {/* Tab 2: Pareto Optimality */}
 <TabsContent value="pareto" className="mt-6 space-y-6">
 <ParetoOptimalityContent />
 </TabsContent>

 {/* Tab 3: Market Failure Classification */}
 <TabsContent value="failure" className="mt-6 space-y-6">
 <MarketFailureContent />
 </TabsContent>

 {/* Tab 4: Cost-Benefit Analysis */}
 <TabsContent value="cba" className="mt-6 space-y-6">
 <CostBenefitContent />
 </TabsContent>
 </Tabs>
 </div>
 );
};

/**
 * Tab 1: Efficiency Types Content
 */
const EfficiencyTypesContent =  => {
 return (
 <div className="space-y-6">
 {/* Productive Efficiency */}
 <NoteCard title="Productive Efficiency" type="definition">
 <p>
 <strong className="text-primary">Definition:</strong> Productive efficiency occurs when resources 
 are used to give the <strong>maximum possible output</strong> at the <strong>lowest possible cost</strong>.
 </p>
 <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
 <p className="text-sm font-mono text-center text-primary">
 Condition: <span className="text-lg">$MC = AC$</span> (at minimum point of AC curve)
 </p>
 </div>
 <ul className="mt-4 space-y-2 text-sm">
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 <span>Firms produce at the <strong>lowest point on the average cost curve</strong></span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 <span>Since MC cuts AC at its minimum: <strong>$MC = AC$</strong> is the condition</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 <span>All points <strong>on the PPF</strong> are productively efficient (no spare capacity)</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-primary">•</span>
 <span>Points <strong>inside the PPF</strong> represent productive inefficiency (unemployed resources)</span>
 </li>
 </ul>
 </NoteCard>

 {/* Allocative Efficiency */}
 <NoteCard title="Allocative Efficiency" type="definition">
 <p>
 <strong className="text-secondary">Definition:</strong> Allocative efficiency occurs when resources 
 are allocated to the <strong>best interests of society</strong>, where there is <strong>maximum social welfare</strong> 
 and <strong>maximum utility</strong>.
 </p>
 <div className="mt-4 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
 <p className="text-sm font-mono text-center text-secondary">
 Condition: <span className="text-lg">$P = MC$</span> (Price = Marginal Cost)
 </p>
 </div>
 <ul className="mt-4 space-y-2 text-sm">
 <li className="flex items-start gap-2">
 <span className="text-secondary">•</span>
 <span>Consumers pay for the <strong>value of marginal utility</strong> they derive from the good</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-secondary">•</span>
 <span>At market level: <strong>$MSB = MSC$</strong> (Marginal Social Benefit = Marginal Social Cost)</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-secondary">•</span>
 <span>Free markets are considered allocatively efficient <em>in the absence of externalities</em></span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-secondary">•</span>
 <span>Resources distributed <strong>according to consumer preferences</strong></span>
 </li>
 </ul>
 </NoteCard>

 {/* Dynamic Efficiency */}
 <NoteCard title="Dynamic Efficiency" type="concept">
 <p>
 <strong className="text-amber-400">Definition:</strong> Dynamic efficiency is when all resources are 
 allocated efficiently <strong>over time</strong>, and the rate of innovation is at the <strong>optimum level</strong>, 
 leading to falling long-run average costs.
 </p>
 <div className="mt-4 grid md:grid-cols-2 gap-4">
 <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
 <h5 className="font-semibold text-amber-400 text-sm mb-2">Key Characteristics</h5>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Related to <strong>rate of innovation</strong></li>
 <li>• Consumer needs met as <strong>time progresses</strong></li>
 <li>• Creates new products and processes</li>
 <li>• Leads to <strong>lower LRAC over time</strong></li>
 </ul>
 </div>
 <div className="p-3 bg-muted/30 border border-border rounded-lg">
 <h5 className="font-semibold text-silver-bright text-sm mb-2">Trade-off Analysis</h5>
 <ul className="text-xs text-muted-foreground space-y-1">
 <li>• Short-run costs may ↑ to cause long-run costs ↓</li>
 <li>• Affected by: demand, interest rates, past profitability</li>
 <li>• Firm trade-off: <strong>dividends vs. R&D investment</strong></li>
 <li>• Long time lag between investment and cost reduction</li>
 </ul>
 </div>
 </div>
 </NoteCard>

 {/* Efficiency Comparison Table */}
 <div className="overflow-x-auto">
 <table className="w-full text-sm border-collapse">
 <thead>
 <tr className="border-b border-border">
 <th className="text-left p-3 text-silver-bright">Efficiency Type</th>
 <th className="text-left p-3 text-silver-bright">Condition</th>
 <th className="text-left p-3 text-silver-bright">Achieved In</th>
 <th className="text-left p-3 text-silver-bright">Time Dimension</th>
 </tr>
 </thead>
 <tbody className="text-muted-foreground">
 <tr className="border-b border-border/50 hover:bg-muted/30">
 <td className="p-3 text-primary font-medium">Productive</td>
 <td className="p-3">$MC = AC$ (min ATC)</td>
 <td className="p-3">Perfect Competition (LR)</td>
 <td className="p-3">Static</td>
 </tr>
 <tr className="border-b border-border/50 hover:bg-muted/30">
 <td className="p-3 text-secondary font-medium">Allocative</td>
 <td className="p-3">$P = MC$</td>
 <td className="p-3">Perfect Competition (LR)</td>
 <td className="p-3">Static</td>
 </tr>
 <tr className="border-b border-border/50 hover:bg-muted/30">
 <td className="p-3 text-amber-400 font-medium">Dynamic</td>
 <td className="p-3">Optimal R&D rate</td>
 <td className="p-3">Monopoly/Oligopoly (Schumpeter)</td>
 <td className="p-3">Inter-temporal</td>
 </tr>
 <tr className="hover:bg-muted/30">
 <td className="p-3 text-destructive font-medium">X-Efficiency</td>
 <td className="p-3">Min organizational slack</td>
 <td className="p-3">Contestable markets</td>
 <td className="p-3">Operational</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 );
};

/**
 * Tab 2: Pareto Optimality Content with PPF Diagram
 */
const ParetoOptimalityContent =  => {
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) setIsVisible(true);
 },
 { threshold: 0.3 }
 );
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 const curveVariants = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" as const } }
 };

 return (
 <div className="space-y-6" ref={containerRef}>
 <NoteCard title="Pareto Optimality (Pareto Efficiency)" type="definition">
 <p>
 <strong className="text-cyan-400">Definition:</strong> Pareto efficiency occurs when resources are 
 allocated <strong>optimally</strong>, so that it is <strong>impossible to make one person better off 
 without making another person worse off</strong>.
 </p>
 <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
 <p className="text-sm text-center text-cyan-400">
 Pareto Improvement: A reallocation where <strong>at least one</strong> person gains 
 and <strong>no one</strong> loses.
 </p>
 </div>
 <ul className="mt-4 space-y-2 text-sm">
 <li className="flex items-start gap-2">
 <span className="text-cyan-400">•</span>
 <span>Occurs <strong>on the PPF</strong>—all resources fully employed</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-cyan-400">•</span>
 <span>Any reallocation involves a <strong>trade-off</strong> between goods</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-cyan-400">•</span>
 <span>Points <strong>inside</strong> the PPF are Pareto inefficient (improvements possible)</span>
 </li>
 <li className="flex items-start gap-2">
 <span className="text-cyan-400">•</span>
 <span>Multiple Pareto optimal points exist—distribution not specified</span>
 </li>
 </ul>
 </NoteCard>

 {/* Pareto Optimality PPF Diagram */}
 <div className="glass-card p-6 rounded-2xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Pareto Optimality on the Production Possibility Frontier
 </h4>
 
 <svg viewBox="0 0 420 340" className="w-full max-w-lg mx-auto">
 <defs>
 <pattern id="grid-pareto" width="30" height="30" patternUnits="userSpaceOnUse">
 <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--silver) / 0.08)" strokeWidth="0.5"/>
 </pattern>
 <linearGradient id="ppfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="hsl(var(--primary))" />
 <stop offset="100%" stopColor="hsl(var(--secondary))" />
 </linearGradient>
 </defs>
 <rect x="60" y="20" width="340" height="280" fill="url(#grid-pareto)" />
 
 {/* Axes */}
 <motion.line
 x1="60" y1="300" x2="400" y2="300"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 <motion.line
 x1="60" y1="300" x2="60" y2="20"
 stroke="hsl(var(--silver))" strokeWidth="2"
 initial={{ pathLength: 0 }} animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.5 }}
 />
 
 {/* Axis Labels */}
 <text x="230" y="330" textAnchor="middle" className="fill-muted-foreground text-sm">Good X (Consumer Goods)</text>
 <text x="30" y="160" textAnchor="middle" className="fill-muted-foreground text-sm" transform="rotate(-90, 30, 160)">Good Y (Capital Goods)</text>
 
 {/* PPF Curve */}
 <motion.path
 d="M 70 50 Q 100 80 160 160 Q 220 240 340 290"
 fill="none"
 stroke="url(#ppfGradient)"
 strokeWidth="3"
 strokeLinecap="round"
 variants={curveVariants}
 initial="hidden"
 animate={isVisible ? "visible": "hidden"}
 />
 
 {/* Pareto Efficient Points (on curve) */}
 <motion.g
 initial={{ opacity: 0, scale: 0 }}
 animate={isVisible ? { opacity: 1, scale: 1 }: {}}
 transition={{ delay: 1.2 }}
 >
 {/* Point A */}
 <circle cx="100" cy="80" r="8" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
 <text x="115" y="75" className="fill-primary text-sm font-bold">A</text>
 
 {/* Point B */}
 <circle cx="160" cy="160" r="8" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
 <text x="175" y="155" className="fill-primary text-sm font-bold">B</text>
 
 {/* Point C */}
 <circle cx="260" cy="250" r="8" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
 <text x="275" y="245" className="fill-primary text-sm font-bold">C</text>
 </motion.g>
 
 {/* Pareto Inefficient Point (inside) */}
 <motion.g
 initial={{ opacity: 0, scale: 0 }}
 animate={isVisible ? { opacity: 1, scale: 1 }: {}}
 transition={{ delay: 1.5 }}
 >
 <circle cx="180" cy="200" r="8" fill="hsl(var(--destructive))" stroke="white" strokeWidth="2" />
 <text x="195" y="195" className="fill-destructive text-sm font-bold">H</text>
 <text x="180" y="225" textAnchor="middle" className="fill-destructive text-[10px]">(Inefficient)</text>
 
 {/* Arrow from H to curve - Pareto Improvement possible */}
 <line x1="170" y1="190" x2="155" y2="165" stroke="hsl(var(--green-400))" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead)" />
 </motion.g>
 
 {/* Unattainable Point (outside) */}
 <motion.g
 initial={{ opacity: 0, scale: 0 }}
 animate={isVisible ? { opacity: 1, scale: 1 }: {}}
 transition={{ delay: 1.8 }}
 >
 <circle cx="280" cy="100" r="8" fill="hsl(var(--amber-400))" stroke="white" strokeWidth="2" />
 <text x="295" y="95" className="fill-amber-400 text-sm font-bold">F</text>
 <text x="280" y="125" textAnchor="middle" className="fill-amber-400 text-[10px]">(Unattainable)</text>
 </motion.g>
 
 {/* Legend */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 2 }}
 >
 <rect x="260" y="30" width="135" height="80" rx="8" fill="hsl(var(--card))" fillOpacity="0.9" stroke="hsl(var(--border))" />
 <circle cx="275" cy="50" r="5" fill="hsl(var(--primary))" />
 <text x="290" y="54" className="fill-muted-foreground text-[11px]">Pareto Optimal</text>
 <circle cx="275" cy="70" r="5" fill="hsl(var(--destructive))" />
 <text x="290" y="74" className="fill-muted-foreground text-[11px]">Pareto Inefficient</text>
 <circle cx="275" cy="90" r="5" fill="hsl(var(--amber-400))" />
 <text x="290" y="94" className="fill-muted-foreground text-[11px]">Unattainable</text>
 </motion.g>

 {/* Trade-off annotation */}
 <motion.g
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 2.2 }}
 >
 <path d="M 110 90 Q 130 120 150 150" fill="none" stroke="hsl(var(--cyan-400))" strokeWidth="2" strokeDasharray="4,4" />
 <text x="140" y="115" className="fill-cyan-400 text-[9px]">Trade-off:</text>
 <text x="140" y="127" className="fill-cyan-400 text-[9px]">A→B means</text>
 <text x="140" y="139" className="fill-cyan-400 text-[9px]">less Y for more X</text>
 </motion.g>
 </svg>

 <div className="mt-4 grid md:grid-cols-3 gap-3">
 <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <p className="text-xs text-muted-foreground">
 <strong className="text-primary">A, B, C:</strong> Pareto Optimal<br/>
 On PPF, no Pareto improvement possible
 </p>
 </div>
 <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
 <p className="text-xs text-muted-foreground">
 <strong className="text-destructive">H:</strong> Pareto Inefficient<br/>
 Inside PPF, improvements available
 </p>
 </div>
 <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
 <p className="text-xs text-muted-foreground">
 <strong className="text-amber-400">F:</strong> Unattainable<br/>
 Beyond current resource capacity
 </p>
 </div>
 </div>
 </div>

 <AnalysisBlock title="Pareto Optimality: Limitations & Critique" type="evaluation">
 <p>
 <strong className="text-amber-400">Limitation 1 - Equity:</strong> Pareto optimality says nothing about 
 <strong>distribution</strong>—a highly unequal allocation may still be Pareto optimal if no reallocation 
 can make anyone better off without harming another.
 <br/><br/>
 <strong className="text-amber-400">Limitation 2 - Multiple Optima:</strong> Infinite Pareto optimal points 
 exist along the PPF, providing no guidance on which is socially preferable.
 <br/><br/>
 <strong className="text-amber-400">Limitation 3 - Real-World Application:</strong> In practice, most policy 
 changes create winners and losers—strict Pareto improvements are rare. Economists use 
 <strong>Kaldor-Hicks efficiency</strong> (potential compensation criterion) as a more practical alternative.
 </p>
 </AnalysisBlock>
 </div>
 );
};

/**
 * Tab 3: Market Failure Classification Content
 */
const MarketFailureContent =  => {
 return (
 <div className="space-y-6">
 <NoteCard title="Market Failure: Core Definition" type="definition">
 <p>
 <strong className="text-destructive">Definition:</strong> Market failure occurs whenever a market leads 
 to a <strong>misallocation of resources</strong>. Resources are not allocated to the best interests of 
 society—there could be more output if resources were used differently. 
 <strong>Economic and social welfare is not maximized.</strong>
 </p>
 </NoteCard>

 {/* Complete vs Partial */}
 <div className="grid md:grid-cols-2 gap-4">
 <Card className="glass-card border-destructive/30">
 <CardHeader className="pb-3">
 <CardTitle className="text-lg text-destructive">Complete Market Failure</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground">
 Occurs when there is a <strong>missing market</strong>. The market does not supply the product at all.
 </p>
 <div className="mt-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-destructive">Example:</strong> Public goods (street lighting, national defense) 
 face the free-rider problem—no private market emerges.
 </p>
 </div>
 </CardContent>
 </Card>

 <Card className="glass-card border-amber-500/30">
 <CardHeader className="pb-3">
 <CardTitle className="text-lg text-amber-400">Partial Market Failure</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground">
 Occurs when the market produces a good, but at the <strong>wrong quantity</strong> or <strong>wrong price</strong>.
 </p>
 <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-amber-400">Example:</strong> Demerit goods (cigarettes) are 
 <strong>over-provided</strong>; merit goods (education) are <strong>under-provided</strong>.
 </p>
 </div>
 </CardContent>
 </Card>
 </div>

 {/* Externalities Logic */}
 <div className="glass-card p-6 rounded-2xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-4">Externalities & Market Failure Logic</h4>
 
 <div className="grid md:grid-cols-2 gap-6">
 {/* Negative Externalities */}
 <div className="space-y-3">
 <div className="flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-destructive" />
 <h5 className="font-semibold text-destructive">Negative Externalities</h5>
 </div>
 <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
 <p className="text-sm text-muted-foreground mb-3">
 Caused by <strong>demerit goods</strong>. External costs spill over to third parties.
 </p>
 <div className="space-y-2 text-xs">
 <p className="font-mono text-destructive">$MSC = MPC + MEC$</p>
 <p className="text-muted-foreground">
 Where $MEC$ = Marginal External Cost
 </p>
 <p className="mt-2 p-2 bg-background/50 rounded">
 <strong>Result:</strong> Overproduction/overconsumption. 
 Free market produces Q<sub>market</sub> but social optimum is Q<sub>social</sub> where MSC = MSB.
 </p>
 </div>
 </div>
 <p className="text-xs text-muted-foreground italic">
 Example: Cigarette consumption → passive smoking costs on third parties
 </p>
 </div>

 {/* Positive Externalities */}
 <div className="space-y-3">
 <div className="flex items-center gap-2">
 <TrendingUp className="w-5 h-5 text-green-400" />
 <h5 className="font-semibold text-green-400">Positive Externalities</h5>
 </div>
 <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
 <p className="text-sm text-muted-foreground mb-3">
 Caused by <strong>merit goods</strong>. External benefits spill over to third parties.
 </p>
 <div className="space-y-2 text-xs">
 <p className="font-mono text-green-400">$MSB = MPB + MEB$</p>
 <p className="text-muted-foreground">
 Where $MEB$ = Marginal External Benefit
 </p>
 <p className="mt-2 p-2 bg-background/50 rounded">
 <strong>Result:</strong> Underproduction/underconsumption. 
 Free market produces Q<sub>market</sub> but social optimum is Q<sub>social</sub> where MSB = MSC.
 </p>
 </div>
 </div>
 <p className="text-xs text-muted-foreground italic">
 Example: Education → higher-skilled workforce benefits all employers
 </p>
 </div>
 </div>
 </div>

 {/* Welfare Triangles Diagram */}
 <WelfareTrianglesDiagram />

 <AnalysisBlock title="Externality Valuation Challenge" type="evaluation">
 <p>
 The extent to which the market fails involves a <strong>value judgement</strong>. It is difficult to 
 determine the <strong>monetary value of an externality</strong>. For example, what is the cost of 
 pollution to society? Different individuals assign different values based on their experiences 
 (e.g., how polluted their hometown is). This makes determining government policies difficult—
 setting the "correct" Pigouvian tax requires knowing the exact MEC, which is rarely observable.
 </p>
 </AnalysisBlock>
 </div>
 );
};

/**
 * Welfare Loss/Gain Triangles Diagram
 */
const WelfareTrianglesDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) setIsVisible(true);
 },
 { threshold: 0.3 }
 );
 if (containerRef.current) observer.observe(containerRef.current);
 return  => observer.disconnect;
 }, []);

 return (
 <div ref={containerRef} className="glass-card p-6 rounded-2xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-2 text-center">
 Welfare Triangles: Deadweight Loss & Welfare Gain
 </h4>
 <p className="text-xs text-muted-foreground text-center mb-4">
 Visualizing the misallocation of resources from externalities
 </p>

 <div className="grid md:grid-cols-2 gap-6">
 {/* Negative Externality - Welfare Loss */}
 <div>
 <h5 className="text-sm font-semibold text-destructive text-center mb-3">
 Negative Externality: Deadweight Welfare Loss
 </h5>
 <svg viewBox="0 0 280 220" className="w-full max-w-xs mx-auto">
 <defs>
 <pattern id="grid-neg" width="20" height="20" patternUnits="userSpaceOnUse">
 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--silver) / 0.08)" strokeWidth="0.5"/>
 </pattern>
 </defs>
 <rect x="40" y="10" width="220" height="180" fill="url(#grid-neg)" />
 
 {/* Axes */}
 <line x1="40" y1="190" x2="260" y2="190" stroke="hsl(var(--silver))" strokeWidth="1.5" />
 <line x1="40" y1="190" x2="40" y2="10" stroke="hsl(var(--silver))" strokeWidth="1.5" />
 <text x="150" y="208" textAnchor="middle" className="fill-muted-foreground text-[10px]">Quantity</text>
 <text x="20" y="100" textAnchor="middle" className="fill-muted-foreground text-[10px]" transform="rotate(-90, 20, 100)">Price/Cost</text>
 
 {/* MSC Curve (above MPC) */}
 <motion.path
 d="M 50 160 Q 120 100 220 40"
 fill="none"
 stroke="#ef4444"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1 }}
 />
 <text x="225" y="35" className="fill-red-400 text-[10px] font-semibold">MSC</text>
 
 {/* MPC Curve */}
 <motion.path
 d="M 50 180 Q 120 130 220 80"
 fill="none"
 stroke="#22c55e"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1, delay: 0.2 }}
 />
 <text x="225" y="75" className="fill-green-400 text-[10px] font-semibold">MPC</text>
 
 {/* Demand/MPB Curve */}
 <motion.path
 d="M 50 40 Q 120 100 220 160"
 fill="none"
 stroke="#3b82f6"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1, delay: 0.4 }}
 />
 <text x="225" y="155" className="fill-blue-400 text-[10px] font-semibold">D=MPB</text>
 
 {/* Deadweight Loss Triangle */}
 <motion.polygon
 points="155,95 155,115 135,105"
 fill="hsl(var(--destructive) / 0.4)"
 stroke="hsl(var(--destructive))"
 strokeWidth="1"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 1.5 }}
 />
 
 {/* Quantity markers */}
 <motion.g initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 }: {}} transition={{ delay: 1.8 }}>
 <line x1="135" y1="190" x2="135" y2="105" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
 <text x="135" y="200" textAnchor="middle" className="fill-cyan-400 text-[9px]">Q*</text>
 <line x1="155" y1="190" x2="155" y2="95" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
 <text x="155" y="200" textAnchor="middle" className="fill-destructive text-[9px]">Qₘ</text>
 </motion.g>
 </svg>
 <p className="text-xs text-center text-muted-foreground mt-2">
 <span className="text-destructive">▲ DWL:</span> Over-production from $Q^*$ to $Q_m$
 </p>
 </div>

 {/* Positive Externality - Welfare Gain */}
 <div>
 <h5 className="text-sm font-semibold text-green-400 text-center mb-3">
 Positive Externality: Triangle of Welfare Gain
 </h5>
 <svg viewBox="0 0 280 220" className="w-full max-w-xs mx-auto">
 <defs>
 <pattern id="grid-pos" width="20" height="20" patternUnits="userSpaceOnUse">
 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--silver) / 0.08)" strokeWidth="0.5"/>
 </pattern>
 </defs>
 <rect x="40" y="10" width="220" height="180" fill="url(#grid-pos)" />
 
 {/* Axes */}
 <line x1="40" y1="190" x2="260" y2="190" stroke="hsl(var(--silver))" strokeWidth="1.5" />
 <line x1="40" y1="190" x2="40" y2="10" stroke="hsl(var(--silver))" strokeWidth="1.5" />
 <text x="150" y="208" textAnchor="middle" className="fill-muted-foreground text-[10px]">Quantity</text>
 <text x="20" y="100" textAnchor="middle" className="fill-muted-foreground text-[10px]" transform="rotate(-90, 20, 100)">Price/Benefit</text>
 
 {/* Supply/MPC Curve */}
 <motion.path
 d="M 50 180 Q 120 130 220 80"
 fill="none"
 stroke="#f59e0b"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1 }}
 />
 <text x="225" y="75" className="fill-amber-400 text-[10px] font-semibold">S=MPC</text>
 
 {/* MSB Curve (above MPB) */}
 <motion.path
 d="M 50 20 Q 120 80 220 140"
 fill="none"
 stroke="#22c55e"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1, delay: 0.2 }}
 />
 <text x="225" y="135" className="fill-green-400 text-[10px] font-semibold">MSB</text>
 
 {/* MPB Curve */}
 <motion.path
 d="M 50 60 Q 120 110 220 160"
 fill="none"
 stroke="#3b82f6"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 1, delay: 0.4 }}
 />
 <text x="225" y="155" className="fill-blue-400 text-[10px] font-semibold">D=MPB</text>
 
 {/* Welfare Gain Triangle */}
 <motion.polygon
 points="130,115 155,100 155,125"
 fill="hsl(142 76% 36% / 0.4)"
 stroke="#22c55e"
 strokeWidth="1"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 1.5 }}
 />
 
 {/* Quantity markers */}
 <motion.g initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 }: {}} transition={{ delay: 1.8 }}>
 <line x1="130" y1="190" x2="130" y2="115" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
 <text x="130" y="200" textAnchor="middle" className="fill-destructive text-[9px]">Qₘ</text>
 <line x1="155" y1="190" x2="155" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3,3" />
 <text x="155" y="200" textAnchor="middle" className="fill-green-400 text-[9px]">Q*</text>
 </motion.g>
 </svg>
 <p className="text-xs text-center text-muted-foreground mt-2">
 <span className="text-green-400">▲ Potential Gain:</span> Under-consumption from $Q_m$ to $Q^*$
 </p>
 </div>
 </div>
 </div>
 );
};

/**
 * Tab 4: Cost-Benefit Analysis Content
 */
const CostBenefitContent =  => {
 return (
 <div className="space-y-6">
 {/* Core Formulas */}
 <div className="glass-card p-6 rounded-2xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-4 text-center">
 Social Cost-Benefit Analysis: Core Formulas
 </h4>
 
 <div className="grid md:grid-cols-2 gap-6">
 {/* Social Cost */}
 <div className="p-5 bg-destructive/10 border border-destructive/30 rounded-xl">
 <h5 className="font-semibold text-destructive mb-3 text-center">Social Cost</h5>
 <div className="p-4 bg-background/50 rounded-lg text-center">
 <p className="font-mono text-lg text-destructive">
 $SC = PC + EC$
 </p>
 <p className="text-xs text-muted-foreground mt-2">
 Social Cost = Private Cost + External Cost
 </p>
 </div>
 <div className="mt-4 space-y-2 text-xs text-muted-foreground">
 <p><strong className="text-silver-bright">Private Costs:</strong> Rent, machinery, labour, insurance, transport, raw materials</p>
 <p><strong className="text-silver-bright">External Costs:</strong> Pollution, congestion, health impacts on third parties</p>
 <p className="font-mono mt-2 text-destructive">$MSC = MPC + MEC$</p>
 </div>
 </div>

 {/* Social Benefit */}
 <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
 <h5 className="font-semibold text-green-400 mb-3 text-center">Social Benefit</h5>
 <div className="p-4 bg-background/50 rounded-lg text-center">
 <p className="font-mono text-lg text-green-400">
 $SB = PB + EB$
 </p>
 <p className="text-xs text-muted-foreground mt-2">
 Social Benefit = Private Benefit + External Benefit
 </p>
 </div>
 <div className="mt-4 space-y-2 text-xs text-muted-foreground">
 <p><strong className="text-silver-bright">Private Benefits:</strong> Consumer utility, firm revenue</p>
 <p><strong className="text-silver-bright">External Benefits:</strong> Skilled workforce, herd immunity, reduced crime</p>
 <p className="font-mono mt-2 text-green-400">$MSB = MPB + MEB$</p>
 </div>
 </div>
 </div>

 {/* Social Optimum */}
 <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-xl text-center">
 <h5 className="font-semibold text-primary mb-2">Social Optimum Position</h5>
 <p className="font-mono text-xl text-primary">$MSC = MSB$</p>
 <p className="text-sm text-muted-foreground mt-2">
 Point of <strong>maximum welfare</strong>: the social cost of producing the last unit 
 equals the social benefit of consuming it.
 </p>
 </div>
 </div>

 {/* CBA Decision Framework */}
 <NoteCard title="Cost-Benefit Analysis: Decision Framework" type="concept">
 <p>
 Cost-Benefit Analysis (CBA) is used for <strong>decision-making</strong> by weighing the relative 
 costs of a choice against potential benefits.
 </p>
 
 <div className="mt-4 space-y-3">
 <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
 <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-full font-bold">1</span>
 <span className="text-sm">Identify and list all costs (private + external)</span>
 </div>
 <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
 <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-full font-bold">2</span>
 <span className="text-sm">Assign <strong>monetary values</strong> to each cost</span>
 </div>
 <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
 <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-full font-bold">3</span>
 <span className="text-sm">Identify and list all benefits (private + external)</span>
 </div>
 <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
 <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-full font-bold">4</span>
 <span className="text-sm">Assign <strong>monetary values</strong> to each benefit</span>
 </div>
 <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
 <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-full font-bold">5</span>
 <span className="text-sm">Compare costs vs benefits; calculate <strong>payback period</strong></span>
 </div>
 </div>

 <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
 <p className="text-sm text-center">
 <strong className="text-green-400">Decision Rule:</strong> Intervention justified if 
 <span className="font-mono mx-2 text-green-400">SB &gt; SC</span>
 (Social Benefits exceed Social Costs)
 </p>
 </div>
 </NoteCard>

 {/* Payback Period */}
 <div className="glass-card p-6 rounded-2xl">
 <h4 className="text-lg font-semibold text-silver-bright mb-4">Payback Period Analysis</h4>
 <p className="text-sm text-muted-foreground mb-4">
 The <strong>payback period</strong> considers how long it takes to repay costs using the gained benefits.
 Commonly used when evaluating capital investments or infrastructure projects.
 </p>
 
 <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
 <p className="font-mono text-primary">
 Payback Period = Total Initial Cost / Annual Net Benefit
 </p>
 </div>

 <div className="mt-4 grid md:grid-cols-2 gap-4">
 <div className="p-3 bg-muted/30 border border-border rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-silver-bright">Short Payback:</strong> Investment recovers quickly; 
 lower risk but may miss long-term gains.
 </p>
 </div>
 <div className="p-3 bg-muted/30 border border-border rounded-lg">
 <p className="text-xs text-muted-foreground">
 <strong className="text-silver-bright">Long Payback:</strong> Higher risk; dependent on 
 stable conditions over extended period.
 </p>
 </div>
 </div>
 </div>

 {/* CBA Limitations */}
 <AnalysisBlock title="CBA Limitations & Evaluation Challenges" type="evaluation">
 <div className="space-y-3">
 <p>
 <strong className="text-amber-400">1. Valuation Difficulty:</strong> Assigning monetary values 
 to externalities is inherently problematic. What is the value of "peace and quiet"? 
 How do we price environmental damage or loss of biodiversity? Different stakeholders 
 assign vastly different values.
 </p>
 <p>
 <strong className="text-amber-400">2. Predicting Future Benefits:</strong> It is difficult to 
 predict how much revenue something will earn, or what economic conditions will prevail. 
 Discount rates used to calculate present values are subjective.
 </p>
 <p>
 <strong className="text-amber-400">3. Distributional Effects:</strong> CBA focuses on aggregate 
 welfare but ignores who bears costs vs who receives benefits. A project may pass CBA 
 while imposing concentrated costs on vulnerable groups.
 </p>
 <p>
 <strong className="text-amber-400">4. Non-Monetizable Values:</strong> Some values—cultural heritage, 
 sacred sites, species extinction—may be considered "priceless" or incommensurable with 
 monetary values.
 </p>
 </div>
 </AnalysisBlock>

 {/* Examiner Connection */}
 <div className="p-4 bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 rounded-r-lg">
 <p className="text-sm text-muted-foreground">
 <strong className="text-amber-400">Examiner Focus:</strong> When evaluating CBA in essays, 
 always discuss the practical difficulty of <strong>monetizing externalities</strong>, the 
 <strong>time horizon problem</strong> (discount rates), and the <strong>equity dimension</strong> 
 (who wins, who loses). A top-band answer recognizes CBA as a useful <em>framework</em> while 
 acknowledging its significant limitations in practice.
 </p>
 </div>
 </div>
 );
};

export default AdvancedEfficiencySection;
