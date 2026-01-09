import { useState } from 'react'
import './App.css'
import CreditCheck from './pages/CRB/CreditCheck'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Guide from './pages/Guide/Guide'
import ServicePayment from './pages/deposit'
import CreditCheckStatus from './pages/CRB/CreditCheckStatus'
import EligibleLoans from './pages/CRB/EligibleLoans'
import LoanApplication from './pages/LoanApplication/LoanApplication'
import LoanEligibility from './pages/CRB/LoanEligibility'

function App() {

  return (
    <Router>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-wallet"></i>
            <h1>CRB Credit<span>Check</span></h1>
            <div className="kenya-flag" title="Kenya"></div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="crb-check" element={<CreditCheck />} />
        <Route path="guide" element={<Guide />} />
        <Route path="service-payment" element={<ServicePayment />} />
        <Route path="credit-check-status" element={<CreditCheckStatus />} />
        <Route path="eligible-loans" element={<EligibleLoans />} />
        <Route path="apply-loan" element={<LoanApplication />} />
        <Route path="loan" element={<LoanEligibility />} />
        
      </Routes>
      <div className="bottom-nav">
        <NavLink to="/" className="nav-item">
            <i className="fas fa-home" />   
            <span>Home</span>
        </NavLink>
        <NavLink to="crb-check" className="nav-item">
            <i className="fas fa-hand-holding-usd" />
            <span>CRB Check</span>
        </NavLink>
        <NavLink to="loan" className="nav-item">
            <i className="fas fa-money-check-alt" />
            <span>Loan</span>
        </NavLink>
        <NavLink to="guide" className="nav-item">
            <i className="fas fa-gem" />  
            <span>Guide</span>
        </NavLink>
    </div>
    </Router>
  )
}

export default App;
