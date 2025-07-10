import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetStartedPage from './pages/GetStartedPage';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MobileAppsPage from './pages/services/MobileAppsPage';
import SourceCodePage from './pages/SourceCodePage';
import ProductDetailPage from './pages/ProductDetailPage';
import EcommerceDetailPage from './pages/EcommerceDetailPage';
import ThankYouPage from './pages/ThankYouPage';
import CancelPage from './pages/CancelPage';
import AdminUploadPage from './pages/AdminUploadPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import EcommerceCaseStudy from './pages/case-studies/EcommerceCaseStudy';
import GymWebsiteCaseStudy from './pages/case-studies/GymWebsiteCaseStudy';
import FinancialDashboardCaseStudy from './pages/case-studies/FinancialDashboardCaseStudy';
import DigitalPetStoreCaseStudy from './pages/case-studies/DigitalPetStoreCaseStudy';
import LandingPageCaseStudy from './pages/case-studies/LandingPageCaseStudy';
import DevelopmentProgress from './pages/DevelopmentProgress';
import BlogPost from './pages/blog/BlogPost';
import FigmaDesigns from './pages/FigmaDesigns';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <div className="App">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/get-started" component={GetStartedPage} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/services" exact component={ServicesPage} />
              <Route path="/services/mobile-apps" component={MobileAppsPage} />
              <Route path="/services/:serviceId" component={ServiceDetailPage} />
              <Route path="/source-code" exact component={SourceCodePage} />
              <Route path="/source-code/:productId" component={ProductDetailPage} />
              <Route path="/product-detail" component={ProductDetailPage} />
              <Route path="/product-detailv" component={EcommerceDetailPage} />
              <Route path="/thank-you" component={ThankYouPage} />
              <Route path="/cancel" component={CancelPage} />
              <Route path="/admin/upload" component={AdminUploadPage} />
              <Route path="/admin-login" component={AdminLoginPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/case-studies/ecommerce" component={EcommerceCaseStudy} />
              <Route path="/case-studies/gym" component={GymWebsiteCaseStudy} />
              <Route path="/case-studies/financial-dashboard" component={FinancialDashboardCaseStudy} />
              <Route path="/case-studies/digital-pet-store" component={DigitalPetStoreCaseStudy} />
              <Route path="/case-studies/landing-page" component={LandingPageCaseStudy} />
              <Route path="/development-progress" component={DevelopmentProgress} />
              <Route path="/figma-designs" component={FigmaDesigns} />
              <Route path="/blog/:id" component={BlogPost} />
            </Switch>
          </div>
        </Layout>
        <Analytics />
      </Router>
    </AuthProvider>
  );
};

export default App;
