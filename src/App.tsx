import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// AnimatePresence + PageTransition removed — they were blocking navigation
// by waiting for exit animations that never completed
import ErrorBoundary from "@/components/ErrorBoundary";
import { AuthProvider } from "@/hooks/useAuth";
import { AuthGateProvider } from "@/hooks/useAuthGate";
import { usePageTracking } from "@/hooks/usePageTracking";
// Critical path - load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";

// Lazy load all other routes for code splitting
const MarketStructures = lazy(() => import("./pages/MarketStructures"));
const BasicEconomicIdeas = lazy(() => import("./pages/BasicEconomicIdeas"));
const PriceSystem = lazy(() => import("./pages/PriceSystem"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Notes = lazy(() => import("./pages/Notes"));
const NationalIncomeLegacy = lazy(() => import("./pages/NationalIncome"));
const IncomeDetermination = lazy(() => import("./pages/IncomeDetermination"));
const NationalIncome = lazy(() => import("./pages/a2-macro/NationalIncome"));
const Elasticities = lazy(() => import("./pages/Elasticities"));
const MarketFailure = lazy(() => import("./pages/MarketFailure"));
const ExamIntelligence = lazy(() => import("./pages/ExamIntelligence"));

// Landing pages for hierarchical navigation
const Microeconomics = lazy(() => import("./pages/Microeconomics"));
const Macroeconomics = lazy(() => import("./pages/Macroeconomics"));

// AS Macro chapters
const ADASEquilibrium = lazy(() => import("./pages/as-macro/ADASEquilibrium"));
const Inflation = lazy(() => import("./pages/as-macro/Inflation"));
const InternationalTrade = lazy(() => import("./pages/as-macro/InternationalTrade"));
const ExchangeRates = lazy(() => import("./pages/as-macro/ExchangeRates"));
const BalanceOfPayments = lazy(() => import("./pages/as-macro/BalanceOfPayments"));
const MacroeconomicPolicy = lazy(() => import("./pages/as-macro/MacroeconomicPolicy"));

// A2 Macro chapters
const Investment = lazy(() => import("./pages/a2-macro/Investment"));
const GovernmentTrade = lazy(() => import("./pages/a2-macro/GovernmentTrade"));
const MoneyBanking = lazy(() => import("./pages/a2-macro/MoneyBanking"));
const UnemploymentGrowth = lazy(() => import("./pages/a2-macro/UnemploymentGrowth"));
const PolicyObjectives = lazy(() => import("./pages/a2-macro/PolicyObjectives"));
const Development = lazy(() => import("./pages/a2-macro/Development"));

// A2 Microeconomics
const MarketStructuresA2 = lazy(() => import("./pages/a2-micro/MarketStructuresA2"));
const LaborMarketA2 = lazy(() => import("./pages/a2-micro/LaborMarket"));
const UtilityConsumerChoice = lazy(() => import("./pages/a2-micro/UtilityConsumerChoice"));
const EconomicEfficiency = lazy(() => import("./pages/a2-micro/EconomicEfficiency"));
const ProductionCosts = lazy(() => import("./pages/a2-micro/ProductionCosts"));

// Utility / Admin pages
const OwnerNexusVault = lazy(() => import("./pages/OwnerNexusVault"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AuthPage = lazy(() => import("./pages/Auth"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const LoginPage = lazy(() => import("./pages/Login"));
const ReviewsPage = lazy(() => import("./pages/Reviews"));
const ChatPage = lazy(() => import("./pages/Chat"));
const LectureHub = lazy(() => import("./pages/LectureHub"));
const ArticleHub = lazy(() => import("./pages/ArticleHub"));
const ArticleViewer = lazy(() => import("./pages/ArticleViewer"));
const AssignmentArchitectPage = lazy(() => import("./pages/AssignmentArchitectPage"));
const WorldEconomics = lazy(() => import("./pages/WorldEconomics"));
const DiagramHub = lazy(() => import("./pages/DiagramHub"));



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Skeleton loader — shows page structure instantly while lazy content loads
const PageLoader = () => (
  <div className="min-h-screen bg-background" style={{ willChange: 'opacity', transform: 'translate3d(0,0,0)' }}>
    <div className="w-[95%] max-w-[1200px] mx-auto px-4 pt-28 animate-fade-in">
      <div className="h-6 w-48 bg-muted/30 rounded-lg mb-6 animate-pulse" />
      <div className="h-12 w-96 max-w-full bg-muted/20 rounded-xl mb-4 animate-pulse" />
      <div className="h-4 w-80 max-w-full bg-muted/15 rounded-lg mb-8 animate-pulse" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-48 bg-muted/10 rounded-2xl animate-pulse" />
        <div className="h-48 bg-muted/10 rounded-2xl animate-pulse" />
      </div>
    </div>
  </div>
);

// Animated routes wrapper — NO AnimatePresence mode="wait" 
// (it was blocking navigation by waiting for exit animations that never fired)
const AnimatedRoutes = () => {
  const location = useLocation();
  usePageTracking();
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
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
          <Route path="/notes" element={<Notes />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/exam-intelligence" element={<ExamIntelligence />} />
          <Route path="/market-structures" element={<MarketStructures />} />
          
          {/* Utility & Admin */}
          <Route path="/owner-nexus-vault" element={<OwnerNexusVault />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/lecture-hub" element={<ProtectedRoute><LectureHub /></ProtectedRoute>} />
          <Route path="/article-hub" element={<ProtectedRoute><ArticleHub /></ProtectedRoute>} />
          <Route path="/article-hub/:slug" element={<ProtectedRoute><ArticleViewer /></ProtectedRoute>} />
          <Route path="/assignment-architect" element={<AssignmentArchitectPage />} />
          <Route path="/world-economics" element={<WorldEconomics />} />
          <Route path="/diagram-hub" element={<DiagramHub />} />

          
          {/* Legacy routes */}
          <Route path="/national-income" element={<NationalIncome />} />
          <Route path="/income-determination" element={<IncomeDetermination />} />
          <Route path="/basic-economic-problem" element={<BasicEconomicIdeas />} />
          <Route path="/theory-of-firm" element={<MarketStructuresA2 />} />
          <Route path="/labor-markets" element={<LaborMarketA2 />} />
          <Route path="/economic-growth" element={<Macroeconomics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthGateProvider>
            <AnimatedRoutes />
          </AuthGateProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
