import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const SurveyNew = () => <h2>Suvery New</h2>;
const Landing = () => <h2>Landing Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Header = () => <h2>Header</h2>;

export default () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Landing} exact />
        <Route path="/surveys" component={Dashboard} exact />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  </div>
);
