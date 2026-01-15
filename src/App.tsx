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
import NationalIncome from "./pages/NationalIncome";
import IncomeDetermination from "./pages/IncomeDetermination";
import NotFound from "./pages/NotFound";

// AS Macro chapters
import ADASEquilibrium from "./pages/as-macro/ADASEquilibrium";
import Inflation from "./pages/as-macro/Inflation";
import InternationalTrade from "./pages/as-macro/InternationalTrade";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/market-structures" element={<MarketStructures />} />
          <Route path="/basic-economic-ideas" element={<BasicEconomicIdeas />} />
          <Route path="/price-system" element={<PriceSystem />} />
          <Route path="/diagrams" element={<DiagramBank />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          
          {/* AS Macroeconomics chapters */}
          <Route path="/as-macro/ad-as" element={<ADASEquilibrium />} />
          <Route path="/as-macro/inflation" element={<Inflation />} />
          <Route path="/as-macro/international-trade" element={<InternationalTrade />} />
          <Route path="/as-macro/balance-of-payments" element={<BalanceOfPayments />} />
          <Route path="/as-macro/policy" element={<MacroeconomicPolicy />} />
          
          {/* A2 Macroeconomics chapters */}
          <Route path="/a2-macro/national-income" element={<NationalIncome />} />
          <Route path="/a2-macro/income-determination" element={<IncomeDetermination />} />
          <Route path="/a2-macro/investment" element={<Investment />} />
          <Route path="/a2-macro/government-trade" element={<GovernmentTrade />} />
          <Route path="/a2-macro/money-banking" element={<MoneyBanking />} />
          <Route path="/a2-macro/unemployment-growth" element={<UnemploymentGrowth />} />
          <Route path="/a2-macro/policy-objectives" element={<PolicyObjectives />} />
          <Route path="/a2-macro/development" element={<Development />} />
          
          {/* Legacy routes */}
          <Route path="/national-income" element={<NationalIncome />} />
          <Route path="/income-determination" element={<IncomeDetermination />} />
          <Route path="/basic-economic-problem" element={<BasicEconomicIdeas />} />
          
          {/* A2 Microeconomics */}
          <Route path="/a2-micro/market-structures" element={<MarketStructuresA2 />} />
          <Route path="/a2-micro/labor-market" element={<LaborMarketA2 />} />
          
          {/* Microeconomics placeholders */}
          <Route path="/elasticities" element={<DiagramBank />} />
          <Route path="/market-failure" element={<DiagramBank />} />
          <Route path="/theory-of-firm" element={<MarketStructuresA2 />} />
          <Route path="/labor-markets" element={<LaborMarketA2 />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
