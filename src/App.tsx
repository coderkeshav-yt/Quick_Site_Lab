import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
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
import ThankYouPage from './pages/ThankYouPage';
import CancelPage from './pages/CancelPage';
import AdminUploadPage from './pages/AdminUploadPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
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
              <Route path="/thank-you" component={ThankYouPage} />
              <Route path="/cancel" component={CancelPage} />
              <Route path="/admin/upload" component={AdminUploadPage} />
              <Route path="/admin-login" component={AdminLoginPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
            </Switch>
          </div>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
