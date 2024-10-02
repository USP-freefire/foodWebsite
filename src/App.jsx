import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import NewsletterSignUp from './components/NewsletterSignUp';
import MoreFoodSection from './components/MoreFoodSection';
import ReciepeCard from './components/ReciepeCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Main />
      <NewsletterSignUp />      
      <MoreFoodSection />
      <ReciepeCard />
      <Footer />
    </div>
  );
};


export default App;
