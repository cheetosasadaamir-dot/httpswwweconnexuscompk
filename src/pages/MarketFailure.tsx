import { motion } from 'framer-motion';
import ChapterLayout from '@/components/ChapterLayout';
import KeyTakeaways from '@/components/KeyTakeaways';
import RealWorldExample from '@/components/RealWorldExample';
import MarketFailureExternalityDiagram from '@/components/diagrams/MarketFailureExternalityDiagram';
import NegativeProductionExternalityDiagram from '@/components/diagrams/NegativeProductionExternalityDiagram';
import PositiveConsumptionExternalityDiagram from '@/components/diagrams/PositiveConsumptionExternalityDiagram';
import SurplusWithTaxDiagram from '@/components/diagrams/SurplusWithTaxDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Scale, Lightbulb, TrendingDown, Users, ShieldAlert, BookOpen } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const MarketFailure =  => {
 return (
 <ChapterLayout
 chapterNumber={4}
 title="Market Failure"
 subtitle="Analyzing the failure of the price mechanism, externalities, public goods, and government intervention in achieving allocative efficiency"
 >
 {/* Key Takeaways Summary */}
 <KeyTakeaways
 title="Key Takeaways: Market Failure"
 takeaways={[
 "Market failure occurs when free markets fail to achieve allocative efficiency (MSB = MSC).",
 "Externalities: MSC = MPC + MEC (costs); MSB = MPB + MEB (benefits). Divergence creates welfare loss.",
 "Negative externalities → overproduction (Qm > Q*); Positive externalities → under-consumption (Qm < Q*).",
 "Public goods are non-excludable and non-rivalrous → Free-Rider Problem → complete market failure.",
 "Merit goods are under-consumed due to information failure; Demerit goods are over-consumed.",
 "Pigouvian taxes internalize externalities: set tax = MEC to shift MPC to MSC.",
 "Government failure risk: imperfect information, admin costs, unintended consequences, regulatory capture."
 ]}
 />

 {/* Section 1: Defining Efficiency and Market Failure */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 1. The Concept of Market Failure and Allocative Efficiency
 </h2>

 {/* High-Density Definition Block */}
 <Card className="glass-card border-destructive/30 mb-4">
 <CardContent className="pt-6">
 <div className="flex items-start gap-3">
 <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
 <div>
 <h4 className="font-semibold text-silver-bright mb-2">Definition: Market Failure</h4>
 <p className="text-muted-foreground text-justify leading-relaxed">
 <strong className="text-primary">Market failure</strong> occurs when the free market mechanism, operating through the forces of demand and supply, fails to achieve an optimal allocation of scarce resources. In technical terms, market failure represents a situation where the equilibrium reached by private market transactions diverges from the socially optimal outcome, meaning that <strong className="text-primary">Allocative Efficiency</strong>—defined by the condition <InlineMath math="P = MC" /> at the firm level and <InlineMath math="MSB = MSC" /> at the societal level—is not attained. The consequence is a net loss of total economic welfare, often visualized as a <strong className="text-amber-400">Deadweight Loss Triangle</strong> on a standard supply-demand diagram. It is critical to distinguish between <strong className="text-cyan-400">Partial Market Failure</strong>, where markets exist but produce sub-optimal quantities (leading to over-consumption of demerit goods or under-consumption of merit goods), and <strong className="text-cyan-400">Complete Market Failure</strong>, where markets fail to form entirely due to the characteristics of the good in question (as with pure public goods where the Free-Rider Problem prevents private provision).
 </p>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Chain of Analysis: The Invisible Hand */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
 <Scale className="w-5 h-5" />
 The Failure of the "Invisible Hand"
 </h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 Adam Smith's concept of the "Invisible Hand" posits that the pursuit of individual self-interest, guided by market prices, leads to an outcome that is beneficial for society as a whole. In a perfectly functioning market, the price mechanism performs three key functions: <strong className="text-silver-bright">rationing</strong> (allocating goods to those who value them most), <strong className="text-silver-bright">signaling</strong> (transmitting information about scarcity through price changes), and <strong className="text-silver-bright">incentivizing</strong> (motivating producers and consumers to alter their behavior). However, this elegant mechanism fails when the fundamental assumptions of perfect competition are violated. Specifically, the Invisible Hand cannot guide resources efficiently when there are <strong className="text-cyan-400">Externalities</strong> (unpriced spillover effects), <strong className="text-cyan-400">Information Asymmetries</strong> (where one party possesses more knowledge than another), <strong className="text-cyan-400">Public Goods</strong> (which are non-excludable and non-rivalrous), or <strong className="text-cyan-400">Market Power</strong> (where firms can influence prices). In each of these cases, the private equilibrium (<InlineMath math="MPC = MPB" />) diverges from the social optimum (<InlineMath math="MSC = MSB" />), resulting in a misallocation of resources and a reduction in total welfare. Understanding why and how this divergence occurs is the analytical core of this chapter.
 </p>
 </div>

 {/* Efficiency Conditions */}
 <div className="grid md:grid-cols-2 gap-4 mb-6">
 <Card className="glass-card border-primary/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-primary">Allocative Efficiency Condition</CardTitle>
 </CardHeader>
 <CardContent>
 <div className="bg-charcoal-deep/50 p-3 rounded-lg text-center mb-2">
 <BlockMath math="MSB = MSC" />
 </div>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed">
 Resources are optimally allocated when the marginal benefit to society from consuming the last unit equals the marginal cost to society of producing it. At this point, it is impossible to make anyone better off without making someone else worse off (Pareto Optimality).
 </p>
 </CardContent>
 </Card>
 <Card className="glass-card border-secondary/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-secondary">Market Equilibrium Condition</CardTitle>
 </CardHeader>
 <CardContent>
 <div className="bg-charcoal-deep/50 p-3 rounded-lg text-center mb-2">
 <BlockMath math="MPB = MPC" />
 </div>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed">
 In unregulated markets, self-interested agents trade until their private marginal benefit equals their private marginal cost. This ignores external effects on third parties, causing market equilibrium to diverge from the social optimum.
 </p>
 </CardContent>
 </Card>
 </div>
 </motion.section>

 {/* Section 2: Externalities - The Gap Between Private and Social */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 2. Externalities: The Divergence Between Private and Social Costs/Benefits
 </h2>

 {/* Core Formulas */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-amber-400 mb-3">The Fundamental Externality Equations</h3>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-charcoal-deep/50 p-4 rounded-lg">
 <p className="text-sm text-muted-foreground mb-2 text-center">For Costs (Production Externalities):</p>
 <BlockMath math="MSC = MPC + MEC" />
 <p className="text-xs text-muted-foreground mt-2 text-center">
 Marginal Social Cost = Marginal Private Cost + Marginal External Cost
 </p>
 </div>
 <div className="bg-charcoal-deep/50 p-4 rounded-lg">
 <p className="text-sm text-muted-foreground mb-2 text-center">For Benefits (Consumption Externalities):</p>
 <BlockMath math="MSB = MPB + MEB" />
 <p className="text-xs text-muted-foreground mt-2 text-center">
 Marginal Social Benefit = Marginal Private Benefit + Marginal External Benefit
 </p>
 </div>
 </div>
 </div>

 {/* Negative Externalities of Production - Dense Analysis */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-destructive mb-3 flex items-center gap-2">
 <TrendingDown className="w-5 h-5" />
 Negative Externalities of Production
 </h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 A <strong className="text-destructive">Negative Externality of Production</strong> arises when the act of producing a good imposes costs on third parties who are neither the producer nor the consumer in the transaction. The classic example is industrial pollution: a factory manufacturing chemicals may discharge effluent into a river, imposing costs on downstream fishermen, local residents requiring healthcare, and the environment itself. Crucially, these <strong className="text-amber-400">External Costs</strong> are not reflected in the firm's private cost calculations. The profit-maximizing firm, operating rationally, will produce at the output level where its <strong className="text-primary">Marginal Private Cost (MPC)</strong> equals its <strong className="text-secondary">Marginal Private Benefit (MPB)</strong>—which, in a competitive market, is the market price. However, the true <strong className="text-destructive">Marginal Social Cost (MSC)</strong> exceeds MPC by the value of the externality (<InlineMath math="MSC = MPC + MEC" />). The consequence is that the market equilibrium quantity (<InlineMath math="Q_m" />) exceeds the socially optimal quantity (<InlineMath math="Q^*" />), resulting in <strong className="text-amber-400">overproduction</strong>. Furthermore, because the external costs are not borne by the polluter, the market price is <strong className="text-cyan-400">too low</strong>, failing to reflect the true resource cost to society. The area of the triangle between the MSC curve, the demand curve, and the vertical lines at <InlineMath math="Q^*" /> and <InlineMath math="Q_m" /> represents the <strong className="text-destructive">Deadweight Welfare Loss</strong>—the net reduction in total economic surplus attributable to the externality. This welfare loss represents units of production where the social cost of production exceeded the social benefit, yet production occurred anyway due to the firm's myopic focus on private costs.
 </p>
 </div>

 {/* Positive Externalities of Consumption - Dense Analysis */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
 <Users className="w-5 h-5" />
 Positive Externalities of Consumption
 </h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 A <strong className="text-green-400">Positive Externality of Consumption</strong> occurs when the consumption of a good generates benefits for third parties who are not directly involved in the transaction. Education and vaccination are paradigmatic examples. When an individual obtains a university degree, they gain private benefits in the form of higher lifetime earnings and personal development (the MPB). However, society as a whole also benefits: a more educated workforce drives innovation, increases productivity, reduces crime rates, and strengthens democratic institutions. These <strong className="text-amber-400">External Benefits</strong> are not captured by the individual's private decision-making calculus. The rational consumer will consume up to the point where their MPB equals the price they pay. However, the true <strong className="text-green-400">Marginal Social Benefit (MSB)</strong> exceeds MPB by the value of the external benefit (<InlineMath math="MSB = MPB + MEB" />). The consequence is that the market equilibrium quantity (<InlineMath math="Q_m" />) falls short of the socially optimal quantity (<InlineMath math="Q^*" />), resulting in <strong className="text-amber-400">under-consumption</strong>. Vaccination provides an even more striking example: when an individual is vaccinated, they not only protect themselves but also contribute to "herd immunity," reducing transmission to vulnerable populations who cannot be vaccinated. Because individuals do not account for this positive spillover, the free market will systematically under-provide vaccination, necessitating government intervention through subsidies or direct provision.
 </p>
 </div>

 {/* Interactive Externality Diagram */}
 <MarketFailureExternalityDiagram />

 {/* Precision Diagram: Negative Production Externality */}
 <div className="mt-8">
 <NegativeProductionExternalityDiagram />
 </div>

 {/* Precision Diagram: Positive Consumption Externality */}
 <div className="mt-8">
 <PositiveConsumptionExternalityDiagram />
 </div>
 </motion.section>

 {/* Section 3: Public Goods, Merit Goods, and Demerit Goods */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.5 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 3. Public Goods, Merit Goods, and Information Failure
 </h2>

 {/* Public Goods - Dense Analysis with Step-by-Step */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
 <ShieldAlert className="w-5 h-5" />
 Pure Public Goods: Non-Excludability and Non-Rivalry
 </h3>
 
 {/* Key Definitions */}
 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <div className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5">
 <h4 className="font-semibold text-cyan-400 text-sm mb-1">Non-Excludability (CIE Definition)</h4>
 <p className="text-xs text-muted-foreground">Once a good is provided, it is <strong>impossible or prohibitively costly</strong> to prevent anyone from consuming it, regardless of whether they have paid. This creates the <strong>Free-Rider Problem</strong>.</p>
 </div>
 <div className="p-3 rounded-lg border border-primary/30 bg-primary/5">
 <h4 className="font-semibold text-primary text-sm mb-1">Non-Rivalry (CIE Definition)</h4>
 <p className="text-xs text-muted-foreground">One person's consumption <strong>does not reduce</strong> the quantity or quality available to others. The marginal cost of an additional user is <strong>zero</strong>.</p>
 </div>
 </div>
 
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 <strong className="text-cyan-400">Pure Public Goods</strong> represent a case of <strong>complete market failure</strong>: the private market will fail to provide these goods entirely, not merely in sub-optimal quantities. Public goods possess two defining characteristics. First, they are <strong className="text-primary">Non-Excludable</strong>: once the good is provided, it is impossible (or prohibitively costly) to prevent anyone from consuming it, regardless of whether they have paid. Second, they are <strong className="text-secondary">Non-Rivalrous</strong>: one person's consumption of the good does not diminish the quantity or quality available to others; the marginal cost of an additional user is zero. National defense is the canonical example: if a country is protected from invasion, all citizens benefit equally, and it is impossible to exclude any individual from this protection, nor does one citizen's consumption of "security" reduce the security available to others. Street lighting, lighthouses, and public fireworks displays exhibit similar properties.
 </p>

 {/* Step-by-Step Analysis: Free-Rider Problem */}
 <div className="p-4 bg-charcoal-deep/50 rounded-lg border border-cyan-500/30 mb-3">
 <h4 className="font-semibold text-cyan-400 text-sm mb-2">Step-by-Step Analysis: The Free-Rider Problem</h4>
 <div className="text-xs text-muted-foreground space-y-1">
 <p><strong className="text-cyan-400">Step 1:</strong> Public goods are non-excludable → individuals can consume without paying.</p>
 <p><strong className="text-cyan-400">Step 2:</strong> Rational, self-interested individuals realize they will benefit even if they don't contribute.</p>
 <p><strong className="text-cyan-400">Step 3:</strong> Each individual has an incentive to "free-ride" on others' contributions.</p>
 <p><strong className="text-cyan-400">Step 4:</strong> If everyone reasons this way, <strong>no one voluntarily pays</strong>.</p>
 <p><strong className="text-cyan-400">Step 5:</strong> Private firms cannot recover costs → <strong>no incentive to provide the good</strong>.</p>
 <p><strong className="text-primary">Result:</strong> Complete market failure—socially valuable goods are not produced despite positive social benefit.</p>
 <p><strong className="text-secondary">Solution:</strong> Government provision funded by compulsory taxation (collective action).</p>
 </div>
 </div>

 {/* Quasi-Public Goods */}
 <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
 <p className="text-xs text-amber-400 font-semibold mb-1">Examiner Note: Quasi-Public Goods</p>
 <p className="text-xs text-muted-foreground">Many goods described as "public" are actually <strong>Quasi-Public Goods</strong>—they exhibit one but not both characteristics. Examples: A congested road is non-excludable but <em>rivalrous</em> (adds to congestion); A cinema is non-rivalrous (empty seats cost nothing extra) but <em>excludable</em> (through ticket sales). True public goods satisfying both conditions are rare.</p>
 </div>
 </div>

 {/* Merit and Demerit Goods - Enhanced Dense Analysis */}
 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <Card className="glass-card border-green-400/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-green-400 flex items-center gap-2">
 <Lightbulb className="w-4 h-4" /> Merit Goods
 </CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-3">
 <strong className="text-green-400">Merit goods</strong> are goods that society deems intrinsically desirable and which would be <strong>under-consumed</strong> if left to free market forces. The under-consumption arises primarily from <strong className="text-amber-400">Information Failure</strong>: consumers underestimate the private benefits of consumption (due to "myopia" or short-termism) or are unaware of the positive externalities generated.
 </p>
 
 {/* Step-by-Step Chain */}
 <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 mb-2">
 <p className="text-xs text-green-400 font-semibold mb-1">Chain of Analysis: Education as a Merit Good</p>
 <div className="text-xs text-muted-foreground space-y-0.5">
 <p><strong>Step 1:</strong> Young person underestimates future income gains from university (myopia).</p>
 <p><strong>Step 2:</strong> Also unaware of external benefits to society (innovation, lower crime, stronger democracy).</p>
 <p><strong>Step 3:</strong> MPB (perceived) &lt; True MPB → Individual consumes less than optimal.</p>
 <p><strong>Step 4:</strong> MSB &gt; MPB → Society values education more than individual does.</p>
 <p><strong>Step 5:</strong> Market equilibrium at Qm &lt; Q* (socially optimal).</p>
 <p><strong>Solution:</strong> Subsidies, free provision, or compulsory consumption (schooling laws).</p>
 </div>
 </div>
 
 <p className="text-xs text-muted-foreground">
 <strong>Examples:</strong> Education, healthcare, vaccinations, museums, libraries
 </p>
 </CardContent>
 </Card>
 
 <Card className="glass-card border-destructive/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-destructive flex items-center gap-2">
 <AlertTriangle className="w-4 h-4" /> Demerit Goods
 </CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-3">
 <strong className="text-destructive">Demerit goods</strong> are the converse of merit goods: they are goods that society deems harmful and which would be <strong>over-consumed</strong> if left to free market forces. The over-consumption stems from consumers underestimating the private costs (particularly long-term health consequences) and ignoring negative externalities.
 </p>
 
 {/* Step-by-Step Chain */}
 <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 mb-2">
 <p className="text-xs text-red-400 font-semibold mb-1">Chain of Analysis: Tobacco as a Demerit Good</p>
 <div className="text-xs text-muted-foreground space-y-0.5">
 <p><strong>Step 1:</strong> Young smoker underestimates addiction risk and future cancer costs.</p>
 <p><strong>Step 2:</strong> Also ignores external costs: passive smoking, NHS burden, lost productivity.</p>
 <p><strong>Step 3:</strong> MPC (perceived) &lt; True MPC → Individual consumes more than privately optimal.</p>
 <p><strong>Step 4:</strong> MSC &gt; MPC → Society bears costs individual ignores.</p>
 <p><strong>Step 5:</strong> Market equilibrium at Qm &gt; Q* (socially optimal).</p>
 <p><strong>Solution:</strong> Indirect taxes, regulation (smoking bans), information campaigns.</p>
 </div>
 </div>
 
 <p className="text-xs text-muted-foreground">
 <strong>Examples:</strong> Tobacco, alcohol, gambling, illicit drugs, high-sugar foods
 </p>
 </CardContent>
 </Card>
 </div>

 {/* Information Failure Block */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-amber-400 mb-3 flex items-center gap-2">
 <BookOpen className="w-5 h-5" />
 Information Failure: The Root Cause
 </h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 <strong className="text-amber-400">Information Failure</strong> (or Asymmetric Information) occurs when one party in a transaction possesses more or better information than the other, or when consumers lack complete information about the costs and benefits of their consumption decisions. This market failure underlies both merit and demerit goods problems and extends to broader market contexts.
 </p>
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
 <h5 className="font-semibold text-amber-400 text-sm mb-1">Imperfect Information (Consumer Side)</h5>
 <p className="text-xs text-muted-foreground">
 Consumers may lack knowledge about product quality, long-term health effects, or true benefits. Example: Patients cannot assess medical treatment quality; food buyers cannot evaluate nutritional content.
 </p>
 </div>
 <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
 <h5 className="font-semibold text-cyan-400 text-sm mb-1">Asymmetric Information</h5>
 <p className="text-xs text-muted-foreground">
 One party knows more than the other. <strong>Adverse Selection:</strong> Used car sellers know defects buyers don't (Akerlof's "Lemons"). <strong>Moral Hazard:</strong> Insured people take more risks because they don't bear full costs.
 </p>
 </div>
 </div>
 </div>
 </motion.section>

 {/* Section 4: Government Intervention */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 4. Government Intervention to Correct Market Failure
 </h2>

 {/* Indirect Taxes - Long Chain of Analysis */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-amber-400 mb-3">Indirect Taxation: Internalizing the Externality</h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 The primary purpose of a <strong className="text-amber-400">Pigouvian Tax</strong> (named after economist Arthur Pigou) is to "internalize the externality"—that is, to force the polluter to bear the external costs they impose on society. In diagrammatic terms, imposing a per-unit tax equal to the Marginal External Cost (<InlineMath math="MEC" />) shifts the firm's perceived cost curve upward from <InlineMath math="MPC" /> to <InlineMath math="MPC + Tax = MSC" />. The new market equilibrium will occur at a higher price and lower quantity—precisely the socially optimal outcome where <InlineMath math="MSC = MSB" />. The tax thus achieves allocative efficiency by aligning private incentives with social costs. The revenue generated can, in principle, be used to compensate those harmed by the pollution or to fund environmental remediation. However, several practical challenges limit the effectiveness of Pigouvian taxes. First, accurately quantifying the Marginal External Cost is extremely difficult: how does one place a monetary value on ecosystem damage, aesthetic degradation, or increased mortality risk? Second, if the demerit good has <strong className="text-cyan-400">inelastic demand</strong> (as with addictive substances like tobacco), the tax will raise revenue but have a limited effect on reducing consumption—the behavioral response is muted. Third, indirect taxes are often <strong className="text-destructive">regressive</strong>, imposing a proportionately higher burden on low-income households who spend a larger share of their income on taxed goods. Fourth, firms may relocate production to jurisdictions with lower environmental standards ("pollution havens"), resulting in no net reduction in global emissions. These limitations must be weighed against the theoretical elegance of the Pigouvian approach.
 </p>
 </div>

 {/* Interactive Tax Diagram */}
 <div className="mb-6">
 <SurplusWithTaxDiagram />
 </div>

 {/* Tax Incidence - High-Density Analysis */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-primary mb-3">The Incidence of Taxation: Who Bears the Burden?</h3>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 The <strong className="text-primary">economic incidence</strong> of a tax—that is, who ultimately bears the burden in terms of reduced welfare—does not depend on who legally pays the tax; it depends on the relative <strong className="text-cyan-400">elasticities of demand and supply</strong>. This is a critical distinction often missed in policy debates. When an indirect tax is imposed, the market price rises, but typically by less than the full amount of the tax. The difference represents the portion of the tax absorbed by producers through reduced producer surplus. The formal result is as follows: the share of the tax burden falling on consumers is proportional to the ratio of the elasticity of supply to the sum of the elasticities:
 </p>
 <div className="bg-charcoal-deep/50 p-4 rounded-lg my-3">
 <BlockMath math="\text{Consumer Share} = \frac{PES}{PES + |PED|}" />
 <BlockMath math="\text{Producer Share} = \frac{|PED|}{PES + |PED|}" />
 </div>
 <p className="text-muted-foreground text-justify leading-relaxed">
 If demand is relatively <strong className="text-destructive">inelastic</strong> compared to supply (as with addictive goods or necessities), consumers will bear the majority of the tax burden because they cannot easily reduce their consumption in response to price increases. Conversely, if supply is relatively inelastic (as with goods requiring specialized factors of production that cannot be easily redeployed), producers will absorb more of the tax. This analysis has profound implications for policy: a tax intended to correct a negative externality (such as a carbon tax) may fail to significantly reduce consumption if demand is inelastic, while simultaneously imposing a heavy burden on low-income consumers. Similarly, a tax on landlords (such as a property tax) may ultimately be borne by tenants if the supply of housing is inelastic.
 </p>
 </div>

 {/* Subsidies and Regulation */}
 <div className="grid md:grid-cols-2 gap-4 mb-4">
 <Card className="glass-card border-green-400/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-green-400">Subsidies for Positive Externalities</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed">
 <strong className="text-green-400">Subsidies</strong> can correct under-consumption of goods with positive externalities by reducing the price paid by consumers, shifting the demand curve rightward toward the socially optimal quantity. Alternatively, a production subsidy shifts the supply curve downward. The optimal subsidy equals the Marginal External Benefit (<InlineMath math="MEB" />). However, subsidies carry an <strong className="text-amber-400">opportunity cost</strong>: government funds devoted to subsidies cannot be used for other purposes. There is also a risk of <strong className="text-destructive">government failure</strong> if the subsidy is set incorrectly (due to imperfect information about the true MEB) or if it creates perverse incentives (such as over-production of subsidized crops leading to environmental damage).
 </p>
 </CardContent>
 </Card>
 <Card className="glass-card border-destructive/30">
 <CardHeader className="pb-2">
 <CardTitle className="text-base text-destructive">Regulation and Direct Controls</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground text-justify leading-relaxed">
 <strong className="text-destructive">Direct regulation</strong>—such as emission standards, bans on harmful substances, or mandatory safety requirements—offers a more certain outcome than market-based instruments. If the government bans CFC gases, emissions fall to zero, regardless of demand elasticity. However, regulation lacks the flexibility of taxation: a uniform emission standard ignores the fact that abatement costs differ across firms. Some firms could reduce pollution cheaply, while others face prohibitive costs. A tax or tradeable permit system, by contrast, allows emission reductions to occur where they are cheapest, achieving the same environmental outcome at lower total cost. Regulation also carries significant <strong className="text-amber-400">administrative costs</strong> and may be subject to <strong className="text-cyan-400">regulatory capture</strong>, where the regulated industry influences the rules in its favor.
 </p>
 </CardContent>
 </Card>
 </div>

 {/* Tradeable Permits */}
 <div className="glass-card p-5 rounded-xl mb-4">
 <h3 className="text-lg font-semibold text-cyan-400 mb-3">Tradeable Pollution Permits: Market-Based Efficiency</h3>
 <p className="text-muted-foreground text-justify leading-relaxed">
 <strong className="text-cyan-400">Tradeable pollution permits</strong> (also known as "cap-and-trade" systems) combine the certainty of quantity-based regulation with the efficiency of market mechanisms. The government sets a total "cap" on permissible emissions and issues permits up to this limit. Firms must hold permits equal to their emissions; those who reduce emissions below their permit allocation can sell surplus permits to firms for whom abatement is more costly. The result is that emission reductions occur where they are cheapest, minimizing the total cost of achieving the environmental target. The permit price that emerges from trading reflects the marginal abatement cost across the economy. This system has been applied successfully to sulfur dioxide emissions in the United States and to carbon dioxide under the EU Emissions Trading System. Critics argue that initial permit allocation can create windfall profits for polluters (if permits are given free), that price volatility creates uncertainty for business planning, and that monitoring and enforcement are administratively complex.
 </p>
 </div>
 </motion.section>

 {/* Section 5: Senior Examiner's Evaluation */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.7 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 5. Evaluation: Limitations and Government Failure
 </h2>

 {/* Balanced Evaluation Block */}
 <Card className="glass-card border-amber-500/40 mb-4">
 <CardHeader className="pb-2">
 <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
 <BookOpen className="w-5 h-5" />
 Senior Examiner's Conclusion: The Risk of Government Failure
 </CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground text-justify leading-relaxed mb-3">
 While the theoretical case for government intervention to correct market failure is compelling, it is essential to recognize that intervention is not costless and may itself lead to <strong className="text-destructive">Government Failure</strong>—a situation where the costs of intervention exceed the welfare losses from the original market failure. Government failure may arise from several sources. First, <strong className="text-cyan-400">Imperfect Information</strong>: governments rarely possess accurate data on the magnitude of external costs or benefits, leading to taxes or subsidies set at the "wrong" level—either failing to correct the distortion or overcorrecting and creating a new misallocation. Second, <strong className="text-amber-400">Administrative and Compliance Costs</strong>: implementing, monitoring, and enforcing regulations consumes real resources that could be used productively elsewhere. Third, <strong className="text-destructive">Unintended Consequences</strong>: policies designed to correct one market failure may create new distortions; a minimum alcohol price may reduce consumption among heavy drinkers but also harm moderate consumers and create incentives for black markets. Fourth, <strong className="text-primary">Regulatory Capture and Rent-Seeking</strong>: powerful interest groups may influence policy to serve their own ends rather than the public interest, leading to regulations that protect incumbent firms from competition rather than maximizing social welfare. Fifth, <strong className="text-muted-foreground">Time Lags</strong>: the legislative process is slow, and by the time a policy is implemented, the underlying problem may have changed or resolved itself.
 </p>
 <p className="text-muted-foreground text-justify leading-relaxed">
 Ultimately, the decision to intervene must weigh the magnitude of the market failure against the probability and severity of government failure. A pragmatic approach recognizes that neither pure laissez-faire nor comprehensive central planning is optimal; the appropriate level of intervention depends on the specific characteristics of the market, the nature of the failure, and the institutional capacity of the government to implement and enforce policy effectively. Examiners will reward candidates who demonstrate this balanced, nuanced understanding rather than advocating dogmatically for either market solutions or state intervention.
 </p>
 </CardContent>
 </Card>

 {/* Final Weighing */}
 <div className="glass-card p-5 rounded-xl border-l-4 border-l-primary">
 <h3 className="text-lg font-semibold text-silver-bright mb-3">Final Analytical Weighing</h3>
 <p className="text-muted-foreground text-justify leading-relaxed">
 The concept of market failure provides a powerful analytical framework for understanding why unfettered markets may fail to maximize social welfare. However, its policy implications must be treated with caution. The existence of an externality is a <strong className="text-cyan-400">necessary but not sufficient</strong> condition for intervention: intervention is only justified if the expected benefits (in terms of reduced deadweight loss) exceed the expected costs (including the risk of government failure). In practice, this calculation is fraught with uncertainty. The most effective approach often combines multiple instruments—taxes, subsidies, regulation, and information provision—tailored to the specific characteristics of each market failure. Furthermore, international coordination is increasingly necessary for externalities that cross national borders, such as climate change and pandemic disease. The analytical toolkit developed in this chapter equips students to evaluate both market outcomes and policy proposals with rigor and nuance—essential skills for achieving the highest marks in AS Level Economics.
 </p>
 </div>
 </motion.section>

 {/* Section 6: Real-World Case Studies (Original Analysis) */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mb-8"
 >
 <h2 className="text-2xl font-serif font-bold text-silver-bright mb-4">
 6. Real-World Case Studies
 </h2>
 <p className="text-muted-foreground text-justify leading-relaxed mb-5">
 The following cases translate the abstract theory of externalities, merit/demerit goods and government failure into recent, examinable evidence. Use them as evaluation ammunition — attach one case per essay to lift marks.
 </p>

 <div className="grid md:grid-cols-2 gap-4">
 <RealWorldExample
 type="positive"
 title="UK Soft Drinks Industry Levy (2018–present)"
 description="A tiered Pigouvian tax on sugary drinks aimed at correcting the demerit-good status of high-sugar beverages linked to childhood obesity. Producers reformulated aggressively: total sugar sold in soft drinks fell by roughly 44% within four years of the tax being announced, with most reduction achieved before the levy even took effect via reformulation, not consumer price response."
 impact="Reformulation shifted the MPC curve toward MSC by cutting the external cost embedded in each unit. The unusual mechanism — supply-side response rather than demand contraction — sidesteps the regressive burden critics predicted, though evaluation must note that overall calorie intake fell only modestly."
 source="UK Treasury data; BMJ (2020, 2023) reformulation studies"
 />

 <RealWorldExample
 type="positive"
 title="EU Emissions Trading System (EU ETS)"
 description="The world's largest tradable-permit scheme, capping CO₂ from ~10,000 power and industrial installations. Since 2005 covered emissions have fallen ~47%, and the permit price rose from under €10/tonne (2018) to peaks above €90/tonne (2023), sharply raising the marginal private cost of pollution."
 impact="Demonstrates cap-and-trade delivering abatement where it is cheapest. Evaluation: initial over-allocation of free permits produced windfall profits for utilities; carbon leakage to non-ETS regions remains a live concern, partially addressed by the incoming Carbon Border Adjustment Mechanism."
 source="European Environment Agency; ICAP Emissions Trading Worldwide Status Report"
 />

 <RealWorldExample
 type="negative"
 title="US Opioid Crisis — Information Failure at Scale"
 description="Aggressive marketing of OxyContin from the late 1990s combined with prescriber information failure and asymmetric information about addiction risk. Over 500,000 US overdose deaths from 1999–2021, with vast external costs on families, employers and the state (CDC estimates over $1 trillion cumulative economic burden)."
 impact="A textbook demerit-good failure: private consumption decisions ignored both internal harm (bounded rationality, addiction) and external costs (crime, healthcare, lost productivity). Corrective policy — prescribing limits, litigation against manufacturers, naloxone subsidies — arrived only after enormous deadweight welfare loss."
 source="CDC WONDER database; Council of Economic Advisers (2019)"
 />

 <RealWorldExample
 type="neutral"
 title="England 5p Plastic Bag Charge (2015)"
 description="A minimal per-unit charge internalising the marine-litter externality of single-use bags. Consumption at major supermarkets fell over 95% within six years — from ~7.6 billion bags (2014) to under 200 million (2022). A small nudge produced a disproportionately large behavioural shift."
 impact="Illustrates that when demand is highly elastic with respect to salient prices, even a token Pigouvian charge closes the gap between MPC and MSC. Evaluation: total plastic use fell less than bag counts suggest because consumers substituted toward heavier 'bags for life', partially reversing the environmental gain."
 source="UK Department for Environment, Food & Rural Affairs (DEFRA) annual returns"
 />

 <RealWorldExample
 type="negative"
 title="Beijing Air Quality & Congestion — Persistent Negative Externality"
 description="Rapid motorisation pushed PM2.5 above 500 µg/m³ in 2013. Interventions combined regulation (odd/even licence-plate driving days, coal boiler bans), Pigouvian tools (fuel taxes), and public-good provision (metro expansion from 2 to 27 lines in 20 years). PM2.5 fell to ~30 µg/m³ by 2023."
 impact="Shows the mixed-instrument approach the theory recommends. Evaluation point: regulation delivered speed and certainty; the tradable/tax component delivered cost-efficiency; the public-good investment (transit) provided the substitute needed for the tax to actually shift behaviour rather than merely raise revenue."
 source="Beijing Municipal Ecology and Environment Bureau; World Bank Urban Transport reports"
 />

 <RealWorldExample
 type="negative"
 title="EU Common Agricultural Policy — Government Failure Case"
 description="Decades of price-support subsidies designed to correct rural income failure produced structural over-production ('butter mountains', 'wine lakes'), depressed world prices harming developing-country farmers, and encouraged intensive farming with its own negative externalities (nitrate run-off, biodiversity loss)."
 impact="Classic government failure: intervention created deadweight welfare loss larger than the original market imperfection. Successive reforms (decoupling in 2003, greening in 2013) illustrate the difficulty of unwinding poorly-designed intervention once producer interest groups organise around it (regulatory capture)."
 source="OECD Agricultural Policy Monitoring; European Court of Auditors reviews"
 />
 </div>
 </motion.section>
 </ChapterLayout>
 );
};

export default MarketFailure;
