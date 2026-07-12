import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TradeCreationDiagram =  => {
 const [isVisible, setIsVisible] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect( => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 },
 { threshold: 0.2 }
 );

 if (containerRef.current) {
 observer.observe(containerRef.current);
 }

 return  => observer.disconnect;
 }, []);

 const width = 600;
 const height = 480;
 const margin = { top: 50, right: 80, bottom: 70, left: 70 };
 const chartWidth = width - margin.left - margin.right;
 const chartHeight = height - margin.top - margin.bottom;

 const xScale = (val: number) => margin.left + (val / 100) * chartWidth;
 const yScale = (val: number) => margin.top + chartHeight - (val / 100) * chartHeight;

 // Price levels (matching reference image structure)
 const pDomestic = 75; // S_Domestic intersects at high price 
 const pEU_tariff = 60; // P1: S_EU + tariff (before CU)
 const pEU = 42; // P2: S_EU price (after joining CU - tariff removed)
 
 // Quantity points
 const q1 = 20; // Q1: Domestic supply at P1 (S_EU + tariff)
 const q2 = 30; // Q2: Domestic supply at P2 (S_EU price - lower)
 const q3 = 60; // Q3: Demand at P1 (S_EU + tariff)
 const q4 = 75; // Q4: Demand at P2 (S_EU price - higher)

 // Supply curve equation
 const supplyY = (x: number) => 12 + x * 0.95;
 const demandY = (x: number) => 95 - x * 0.88;

 return (
 <div ref={containerRef} className="glass-card p-5 my-5">
 <h3 className="font-serif text-xl text-gradient mb-2">Trade Creation: Welfare Gains from Customs Union Membership</h3>
 <p className="text-sm text-muted-foreground mb-4">
 Trade creation occurs when tariff removal allows high-cost domestic production to be replaced by lower-cost imports from a member country, resulting in a <strong>net welfare gain</strong>.
 </p>

 {/* Legend */}
 <div className="flex flex-wrap gap-4 mb-4 text-xs">
 <div className="flex items-center gap-2">
 <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--cambridge-orange))', opacity: 0.6 }}></div>
 <span className="text-muted-foreground">Areas 2 & 4: Trade Creation (Net Welfare Gain)</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--muted-foreground))', opacity: 0.25 }}></div>
 <span className="text-muted-foreground">Areas 1 & 3: Revenue Transfer to Consumer Surplus</span>
 </div>
 </div>

 <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl mx-auto">
 {/* Grid pattern */}
 <defs>
 <pattern id="grid-tc" width="40" height="40" patternUnits="userSpaceOnUse">
 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.1" />
 </pattern>
 </defs>
 <rect x={margin.left} y={margin.top} width={chartWidth} height={chartHeight} fill="url(#grid-tc)" />
 
 {/* Axes */}
 <line x1={margin.left} y1={margin.top + chartHeight} x2={margin.left + chartWidth} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + chartHeight} stroke="hsl(var(--silver))" strokeWidth="2" />
 
 {/* Axis Labels */}
 <text x={margin.left - 15} y={margin.top - 15} fill="hsl(var(--foreground))" fontSize="13" fontWeight="600">Price</text>
 <text x={margin.left - 15} y={margin.top - 2} fill="hsl(var(--foreground))" fontSize="12">£</text>
 <text x={margin.left + chartWidth + 10} y={margin.top + chartHeight + 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="500">Q millions</text>

 {/* AREA 1: Producer surplus transferred to consumers (between P1 and P2, from 0 to Q2) */}
 <motion.polygon
 points={`${xScale(0)},${yScale(pEU_tariff)} ${xScale(q1)},${yScale(pEU_tariff)} ${xScale(q2)},${yScale(pEU)} ${xScale(0)},${yScale(pEU)}`}
 fill="hsl(var(--muted-foreground))"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.15 }: {}}
 transition={{ delay: 0.5, duration: 0.4 }}
 />
 <text x={xScale(10)} y={(yScale(pEU_tariff) + yScale(pEU)) / 2 + 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">1</text>

 {/* AREA 3: Tariff revenue transferred to consumers (rectangle between Q1/Q2 and Q3) */}
 <motion.rect
 x={xScale(q2)}
 y={yScale(pEU_tariff)}
 width={xScale(q3) - xScale(q2)}
 height={yScale(pEU) - yScale(pEU_tariff)}
 fill="hsl(var(--muted-foreground))"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.15 }: {}}
 transition={{ delay: 0.6, duration: 0.4 }}
 />
 <text x={(xScale(q2) + xScale(q3)) / 2} y={(yScale(pEU_tariff) + yScale(pEU)) / 2 + 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">3</text>

 {/* AREA 2: Trade Creation Triangle (Production Effect) - Amber Gold */}
 <motion.polygon
 points={`${xScale(q1)},${yScale(pEU_tariff)} ${xScale(q2)},${yScale(pEU)} ${xScale(q1)},${yScale(pEU)}`}
 fill="hsl(var(--cambridge-orange))"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.6 }: {}}
 transition={{ delay: 0.7, duration: 0.4 }}
 />
 <text x={xScale(q1) + 18} y={(yScale(pEU_tariff) + yScale(pEU)) / 2 + 10} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="13" fontWeight="bold">2</text>

 {/* AREA 4: Trade Creation Triangle (Consumption Effect) - Amber Gold */}
 <motion.polygon
 points={`${xScale(q3)},${yScale(pEU_tariff)} ${xScale(q3)},${yScale(pEU)} ${xScale(q4)},${yScale(pEU)}`}
 fill="hsl(var(--cambridge-orange))"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.6 }: {}}
 transition={{ delay: 0.75, duration: 0.4 }}
 />
 <text x={xScale(q3) + 25} y={(yScale(pEU_tariff) + yScale(pEU)) / 2 + 10} textAnchor="middle" fill="hsl(var(--cambridge-orange))" fontSize="13" fontWeight="bold">4</text>

 {/* Supply Curve S_Domestic - steep upward slope */}
 <motion.line
 x1={xScale(0)} y1={yScale(12)}
 x2={xScale(80)} y2={yScale(supplyY(80))}
 stroke="hsl(var(--foreground))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.6 }}
 />
 <text x={xScale(83)} y={yScale(supplyY(80)) - 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">S Domestic</text>

 {/* Demand Curve D - downward slope */}
 <motion.line
 x1={xScale(8)} y1={yScale(demandY(8))}
 x2={xScale(95)} y2={yScale(demandY(95))}
 stroke="hsl(var(--foreground))"
 strokeWidth="2.5"
 initial={{ pathLength: 0 }}
 animate={isVisible ? { pathLength: 1 }: {}}
 transition={{ duration: 0.6, delay: 0.1 }}
 />
 <text x={xScale(97)} y={yScale(demandY(95)) + 5} fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">D</text>

 {/* S_EU + tariff (P1) - horizontal line */}
 <motion.line
 x1={margin.left} y1={yScale(pEU_tariff)}
 x2={margin.left + chartWidth} y2={yScale(pEU_tariff)}
 stroke="hsl(var(--foreground))"
 strokeWidth="2"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 0.3 }}
 />
 <text x={margin.left + chartWidth + 5} y={yScale(pEU_tariff) + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">S EU + tariff</text>
 
 {/* Tariff annotation bracket */}
 <motion.path
 d={`M ${margin.left + chartWidth - 35} ${yScale(pEU)} L ${margin.left + chartWidth - 25} ${yScale(pEU)} L ${margin.left + chartWidth - 25} ${yScale(pEU_tariff)} L ${margin.left + chartWidth - 35} ${yScale(pEU_tariff)}`}
 fill="none"
 stroke="hsl(var(--destructive))"
 strokeWidth="1.5"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 0.9 }}
 />
 <text x={margin.left + chartWidth - 15} y={(yScale(pEU) + yScale(pEU_tariff)) / 2 + 4} fill="hsl(var(--destructive))" fontSize="9" fontWeight="500">tariff</text>

 {/* S_EU (P2) - horizontal line (member price after CU) */}
 <motion.line
 x1={margin.left} y1={yScale(pEU)}
 x2={margin.left + chartWidth} y2={yScale(pEU)}
 stroke="hsl(var(--foreground))"
 strokeWidth="2"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 0.35 }}
 />
 <text x={margin.left + chartWidth + 5} y={yScale(pEU) + 4} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">S EU</text>

 {/* Price Labels P1 and P2 with arrow */}
 <text x={margin.left - 8} y={yScale(pEU_tariff) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">P1</text>
 <text x={margin.left - 8} y={yScale(pEU) + 4} textAnchor="end" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">P2</text>

 {/* Price fall arrow */}
 <motion.path
 d={`M ${margin.left - 25} ${yScale(pEU_tariff) - 5} L ${margin.left - 25} ${yScale(pEU) + 5}`}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="2"
 markerEnd="url(#arrowhead-tc)"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 1 }}
 />
 <defs>
 <marker id="arrowhead-tc" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
 <path d="M 0 0 L 8 4 L 0 8 Z" fill="hsl(var(--cambridge-green))" />
 </marker>
 </defs>

 {/* Quantity markers and dashed lines */}
 <motion.line x1={xScale(q1)} y1={yScale(pEU_tariff)} x2={xScale(q1)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 }: {}} transition={{ delay: 0.5 }} />
 <motion.line x1={xScale(q2)} y1={yScale(pEU)} x2={xScale(q2)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 }: {}} transition={{ delay: 0.55 }} />
 <motion.line x1={xScale(q3)} y1={yScale(pEU_tariff)} x2={xScale(q3)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 }: {}} transition={{ delay: 0.6 }} />
 <motion.line x1={xScale(q4)} y1={yScale(pEU)} x2={xScale(q4)} y2={yScale(0) + 5} stroke="hsl(var(--muted-foreground))" strokeDasharray="4,3" strokeWidth="1" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 0.6 }: {}} transition={{ delay: 0.65 }} />

 <text x={xScale(q1)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q1</text>
 <text x={xScale(q2)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q2</text>
 <text x={xScale(q3)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q3</text>
 <text x={xScale(q4)} y={yScale(0) + 20} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Q4</text>

 {/* Import expansion arrows */}
 <motion.path
 d={`M ${xScale(q1)} ${yScale(pEU_tariff) - 15} L ${xScale(q3)} ${yScale(pEU_tariff) - 15}`}
 fill="none"
 stroke="hsl(var(--muted-foreground))"
 strokeWidth="1.5"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 0.6 }: {}}
 transition={{ delay: 0.85 }}
 />
 <text x={(xScale(q1) + xScale(q3)) / 2} y={yScale(pEU_tariff) - 20} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Imports before CU</text>

 <motion.path
 d={`M ${xScale(q2)} ${yScale(pEU) + 15} L ${xScale(q4)} ${yScale(pEU) + 15}`}
 fill="none"
 stroke="hsl(var(--cambridge-green))"
 strokeWidth="2"
 initial={{ opacity: 0 }}
 animate={isVisible ? { opacity: 1 }: {}}
 transition={{ delay: 0.9 }}
 />
 <text x={(xScale(q2) + xScale(q4)) / 2} y={yScale(pEU) + 28} textAnchor="middle" fill="hsl(var(--cambridge-green))" fontSize="9" fontWeight="500">Expanded imports after CU</text>
 </svg>

 {/* Technical Analysis Below Diagram */}
 <div className="mt-5 space-y-4">
 {/* Welfare Area Mapping */}
 <div className="grid md:grid-cols-2 gap-4">
 <div className="p-4 rounded-lg border border-cambridge-orange/40 bg-cambridge-orange/10">
 <h4 className="font-semibold text-cambridge-orange text-sm mb-2">Area 2 — Production Effect (Efficiency Gain)</h4>
 <p className="text-xs text-muted-foreground leading-relaxed">
 This triangle represents the <strong>welfare gain from replacing inefficient domestic production</strong> with lower-cost EU imports. Domestic producers with costs between P1 and P2 (output between Q1 and Q2) are displaced by more efficient member producers. Resources previously tied to these high-cost firms are released for more productive uses, improving allocative efficiency.
 </p>
 </div>
 <div className="p-4 rounded-lg border border-cambridge-orange/40 bg-cambridge-orange/10">
 <h4 className="font-semibold text-cambridge-orange text-sm mb-2">Area 4 — Consumption Effect (Surplus Gain)</h4>
 <p className="text-xs text-muted-foreground leading-relaxed">
 This triangle represents the <strong>welfare gain from increased consumption</strong> enabled by lower prices. Consumers who were previously priced out of the market (with reservation prices between P2 and P1) now enter at the lower EU price. Consumption expands from Q3 to Q4, with each additional unit generating consumer surplus above P2.
 </p>
 </div>
 </div>

 {/* Revenue Transfer Explanation */}
 <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
 <h4 className="font-serif text-base text-gradient mb-2">Areas 1 & 3: Redistribution, Not Net Gain</h4>
 <p className="text-sm text-muted-foreground leading-relaxed text-justify">
 <strong>Area 1</strong> represents <strong>producer surplus</strong> that is transferred to consumers as prices fall—domestic producers lose, but consumers gain equally, so there is no net change in social welfare. <strong>Area 3</strong> represents <strong>tariff revenue</strong> that was previously collected by the government but is now retained by consumers as additional surplus. Again, this is a <em>redistribution</em> from government to consumers rather than a net societal gain. The <span className="text-cambridge-orange font-semibold">true welfare gains (Areas 2 + 4)</span> arise purely from improved productive and allocative efficiency.
 </p>
 </div>

 {/* Net Welfare Conclusion */}
 <div className="p-4 bg-gradient-to-r from-cambridge-green/15 to-transparent rounded-lg border-l-4 border-cambridge-green">
 <h4 className="font-serif text-sm font-semibold text-cambridge-green mb-2">Chain of Analysis: The Trade Creation Mechanism</h4>
 <p className="text-sm text-foreground/90 leading-relaxed text-justify">
 Trade Creation occurs when the removal of trade barriers allows production to shift from a high-cost domestic source to a lower-cost member of the trading bloc. The price falls from P1 (S<sub>EU</sub> + tariff) to P2 (S<sub>EU</sub>). Domestic production contracts from Q1 to Q2 as inefficient firms exit, while consumption expands from Q3 to Q4 as lower prices attract new buyers. This results in a <strong>net welfare gain</strong> represented by the two <span className="text-cambridge-orange font-semibold">Amber Gold triangles (Areas 2 and 4)</span>. Area 2 represents the production effect (increased efficiency), while Area 4 represents the consumption effect (increased consumer choice and surplus).
 </p>
 </div>

 {/* Senior Examiner's Conclusion */}
 <div className="p-4 bg-gradient-to-r from-cambridge-gold/10 to-transparent rounded-lg border-l-4 border-cambridge-gold">
 <h4 className="font-serif text-sm font-semibold text-cambridge-gold mb-2">Senior Examiner's Conclusion</h4>
 <p className="text-sm text-foreground/90 leading-relaxed text-justify italic">
 "Ultimately, trade creation represents an unambiguous welfare improvement for society. Unlike trade diversion—which risks substituting efficient global producers with less efficient bloc members—trade creation aligns with the principle of comparative advantage by redirecting resources from high-cost domestic production to lower-cost partner imports. The magnitude of welfare gains (Areas 2 + 4) depends on the elasticities of domestic supply and demand: the more elastic these curves, the larger the efficiency triangles and the greater the benefit from customs union membership. This analysis underpins the economic rationale for regional integration, provided that the bloc's internal producers are globally competitive."
 </p>
 </div>
 </div>
 </div>
 );
};

export default TradeCreationDiagram;
