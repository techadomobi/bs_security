import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Portfolio from "@/pages/Portfolio";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/service/cctv-camera-installation" component={ServiceDetails} />
          <Route path="/service/commercial-security" component={ServiceDetails} />
          <Route path="/service/home-security-systems" component={ServiceDetails} />
          <Route path="/service/dvr/nvr-setup-&-repair" component={ServiceDetails} />
          <Route path="/service/maintenance-&-amc" component={ServiceDetails} />
          <Route path="/service/wireless-cctv-systems" component={ServiceDetails} />
          <Route path="/service/access-control-systems" component={ServiceDetails} />
          <Route path="/service/fire-alarm-systems" component={ServiceDetails} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/process" component={Process} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
