import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetStartedPage from './pages/GetStartedPage';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/get-started" component={GetStartedPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services" exact component={ServicesPage} />
          <Route path="/services/:serviceId" component={ServiceDetailPage} />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
