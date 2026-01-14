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
          {/* Macroeconomics chapters */}
          <Route path="/national-income" element={<NationalIncome />} />
          <Route path="/income-determination" element={<IncomeDetermination />} />
          {/* Legacy routes - redirect to new structure */}
          <Route path="/basic-economic-problem" element={<BasicEconomicIdeas />} />
          {/* Placeholder routes for future chapters */}
          <Route path="/elasticities" element={<DiagramBank />} />
          <Route path="/market-failure" element={<DiagramBank />} />
          <Route path="/theory-of-firm" element={<DiagramBank />} />
          <Route path="/labor-markets" element={<DiagramBank />} />
          <Route path="/investment" element={<DiagramBank />} />
          <Route path="/government-trade" element={<DiagramBank />} />
          <Route path="/ad-as-analysis" element={<DiagramBank />} />
          <Route path="/money-banking" element={<DiagramBank />} />
          <Route path="/unemployment-growth" element={<DiagramBank />} />
          <Route path="/international-trade" element={<DiagramBank />} />
          <Route path="/development-economics" element={<DiagramBank />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
