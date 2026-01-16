import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketStructures from "./pages/MarketStructures";
import BasicEconomicIdeas from "./pages/BasicEconomicIdeas";
import PriceSystem from "./pages/PriceSystem";
import DiagramBank from "./pages/DiagramBank";
import CaseStudies from "./pages/CaseStudies";
import NationalIncomeLegacy from "./pages/NationalIncome";
import IncomeDetermination from "./pages/IncomeDetermination";
import NationalIncome from "./pages/a2-macro/NationalIncome";
import NotFound from "./pages/NotFound";
import Elasticities from "./pages/Elasticities";
import MarketFailure from "./pages/MarketFailure";

// Landing pages for hierarchical navigation
import Microeconomics from "./pages/Microeconomics";
import Macroeconomics from "./pages/Macroeconomics";

// AS Macro chapters
import ADASEquilibrium from "./pages/as-macro/ADASEquilibrium";
import Inflation from "./pages/as-macro/Inflation";
import InternationalTrade from "./pages/as-macro/InternationalTrade";
import ExchangeRates from "./pages/as-macro/ExchangeRates";
import BalanceOfPayments from "./pages/as-macro/BalanceOfPayments";
import MacroeconomicPolicy from "./pages/as-macro/MacroeconomicPolicy";

// A2 Macro chapters
import Investment from "./pages/a2-macro/Investment";
import GovernmentTrade from "./pages/a2-macro/GovernmentTrade";
import MoneyBanking from "./pages/a2-macro/MoneyBanking";
import UnemploymentGrowth from "./pages/a2-macro/UnemploymentGrowth";
import PolicyObjectives from "./pages/a2-macro/PolicyObjectives";
import Development from "./pages/a2-macro/Development";

// A2 Microeconomics
import MarketStructuresA2 from "./pages/a2-micro/MarketStructuresA2";
import LaborMarketA2 from "./pages/a2-micro/LaborMarket";
import UtilityConsumerChoice from "./pages/a2-micro/UtilityConsumerChoice";
import EconomicEfficiency from "./pages/a2-micro/EconomicEfficiency";
import ProductionCosts from "./pages/a2-micro/ProductionCosts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Landing Pages */}
          <Route path="/microeconomics" element={<Microeconomics />} />
          <Route path="/macroeconomics" element={<Macroeconomics />} />
          
          {/* AS Microeconomics chapters */}
          <Route path="/basic-economic-ideas" element={<BasicEconomicIdeas />} />
          <Route path="/price-system" element={<PriceSystem />} />
          <Route path="/elasticities" element={<Elasticities />} />
          <Route path="/market-failure" element={<MarketFailure />} />
          
          {/* A2 Microeconomics chapters */}
          <Route path="/a2-micro/utility-consumer-choice" element={<UtilityConsumerChoice />} />
          <Route path="/a2-micro/economic-efficiency" element={<EconomicEfficiency />} />
          <Route path="/a2-micro/production-costs" element={<ProductionCosts />} />
          <Route path="/a2-micro/market-structures" element={<MarketStructuresA2 />} />
          <Route path="/a2-micro/labor-market" element={<LaborMarketA2 />} />
          
{/* AS Macroeconomics chapters */}
          <Route path="/as-macro/ad-as" element={<ADASEquilibrium />} />
          <Route path="/as-macro/inflation" element={<Inflation />} />
          <Route path="/as-macro/international-trade" element={<InternationalTrade />} />
          <Route path="/as-macro/exchange-rates" element={<ExchangeRates />} />
          <Route path="/as-macro/balance-of-payments" element={<BalanceOfPayments />} />
          <Route path="/as-macro/policy" element={<MacroeconomicPolicy />} />
          
          {/* A2 Macroeconomics chapters */}
          <Route path="/a2-macro/national-income" element={<NationalIncome />} />
          <Route path="/a2-macro/money-banking" element={<MoneyBanking />} />
          <Route path="/a2-macro/unemployment-growth" element={<UnemploymentGrowth />} />
          <Route path="/a2-macro/policy-objectives" element={<PolicyObjectives />} />
          <Route path="/a2-macro/development" element={<Development />} />
          
          {/* Utility pages */}
          <Route path="/diagrams" element={<DiagramBank />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/market-structures" element={<MarketStructures />} />
          
          {/* Legacy routes - redirect to new structure */}
          <Route path="/national-income" element={<NationalIncome />} />
          <Route path="/income-determination" element={<IncomeDetermination />} />
          <Route path="/basic-economic-problem" element={<BasicEconomicIdeas />} />
          <Route path="/theory-of-firm" element={<MarketStructuresA2 />} />
          <Route path="/labor-markets" element={<LaborMarketA2 />} />
          <Route path="/economic-growth" element={<Macroeconomics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
