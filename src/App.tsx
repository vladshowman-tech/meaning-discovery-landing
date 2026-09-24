
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
import InDevelopment from "./pages/InDevelopment";
import ConfidenceV1 from "./pages/ConfidenceV1";
import ConfidenceV2 from "./pages/ConfidenceV2";
import ConfidenceV3 from "./pages/ConfidenceV3";
import ConfidenceV4 from "./pages/ConfidenceV4";
import ConfidenceV5 from "./pages/ConfidenceV5";
import ConfidenceA1 from "./pages/ConfidenceA1";
import ConfidenceA2 from "./pages/ConfidenceA2";
import ConfidenceA3 from "./pages/ConfidenceA3";
import ConfidenceA4 from "./pages/ConfidenceA4";
import ConfidenceA5 from "./pages/ConfidenceA5";
import ConfidenceB1 from "./pages/ConfidenceB1";
import ConfidenceB2 from "./pages/ConfidenceB2";
import ConfidenceB3 from "./pages/ConfidenceB3";
import ConfidenceB4 from "./pages/ConfidenceB4";
import ConfidenceB5 from "./pages/ConfidenceB5";
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
          <Route path="/" element={<InDevelopment />} />
          <Route path="/1" element={<Index />} />
          <Route path="/2" element={<Relationships />} />
          <Route path="/3" element={<Career />} />
          <Route path="/4" element={<Breakthrough />} />
          <Route path="/5" element={<Home />} />
          <Route path="/tochkastarta" element={<TochkaStarta />} />
          <Route path="/yavigre" element={<YaVigre />} />
          <Route path="/moyaistoriya" element={<Shop />} />
          <Route path="/moyaistoriya-2" element={<MoyaIstoriya />} />
          <Route path="/denegnyiproryv" element={<Breakthrough />} />
          <Route path="/oplata/:slug" element={<Payment />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/data-consents-report-x7k9m2" element={<DataConsentsAdmin />} />
          <Route path="/v1" element={<ConfidenceV1 />} />
          <Route path="/v2" element={<ConfidenceV2 />} />
          <Route path="/v3" element={<ConfidenceV3 />} />
          <Route path="/v4" element={<ConfidenceV4 />} />
          <Route path="/v5" element={<ConfidenceV5 />} />
          <Route path="/a1" element={<ConfidenceA1 />} />
          <Route path="/a2" element={<ConfidenceA2 />} />
          <Route path="/a3" element={<ConfidenceA3 />} />
          <Route path="/a4" element={<ConfidenceA4 />} />
          <Route path="/a5" element={<ConfidenceA5 />} />
          <Route path="/b1" element={<ConfidenceB1 />} />
          <Route path="/b2" element={<ConfidenceB2 />} />
          <Route path="/b3" element={<ConfidenceB3 />} />
          <Route path="/b4" element={<ConfidenceB4 />} />
          <Route path="/b5" element={<ConfidenceB5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;