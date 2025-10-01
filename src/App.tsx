import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Academics from "./pages/academics";
import Admissions from "./pages/admissions";
import ApplicationForm from "./pages/applicationform";
import Sports from "./pages/sports";
import Fees from "./pages/fees";
import Test from "./pages/test";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/applicationform" element={<ApplicationForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
