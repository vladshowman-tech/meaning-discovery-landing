
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import TochkaStarta from "./pages/TochkaStarta";
import YaVigre from "./pages/YaVigre";
import MoyaIstoriya from "./pages/MoyaIstoriya";
import Index from "./pages/Index";
import Relationships from "./pages/Relationships";
import Career from "./pages/Career";
import Breakthrough from "./pages/Breakthrough";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataConsentsAdmin from "./pages/DataConsentsAdmin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/1" element={<Index />} />
          <Route path="/2" element={<Relationships />} />
          <Route path="/3" element={<Career />} />
          <Route path="/4" element={<Breakthrough />} />
          <Route path="/5" element={<Home />} />
          <Route path="/tochkastarta" element={<TochkaStarta />} />
          <Route path="/yavigre" element={<YaVigre />} />
          <Route path="/moyaistoriya" element={<MoyaIstoriya />} />
          <Route path="/denegnyiproryv" element={<Breakthrough />} />
          <Route path="/oplata/:slug" element={<Payment />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/data-consents-report-x7k9m2" element={<DataConsentsAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;