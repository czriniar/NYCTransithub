import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Routes from './Routes'; // Import the Routes component we worked on earlier
import TransitUpdates from './TransitUpdates'; // Import the TransitUpdates component
import SubwayAlerts from './SubwayAlerts'; // Import the SubwayAlerts component
import LoginForm from './components/LoginForm/LoginForm';
import nyuLogo from './nyu_logo.png'; // Import the NYU logo
import Landing from './landing';

const MainMenu = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState('');

  const handleButtonClick = (pageName) => {
    setPage(pageName);
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const subTitleStyle = {
    color: '#555',
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '30px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px'
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage("en");
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <div>
        
        <h1 style={titleStyle}>{t('NYCTransit Hub')}</h1>
        <h2 style={subTitleStyle}>{t("New York University's LeetCode Bootcamp Project")}</h2>
        <div style={buttonContainerStyle}>
        
        <button style={buttonStyle} onClick={() => handleButtonClick('landing')}>{t('Landing')}</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('routeSearch')}>{t('Route Search')}</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('liveTransitUpdates')}>{t('Live Transit Updates')}</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('subwayAlerts')}>{t('Subway Alerts')}</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('LoginForm')}>{t('Login')}</button>
          <button style={buttonStyle} onClick={() => i18next.changeLanguage('en')}>English</button>
          <button style={buttonStyle} onClick={() => i18next.changeLanguage('es')}>Español</button>
          <button style={buttonStyle} onClick={() => i18next.changeLanguage('fr')}>Français</button>
        </div>

        {page === 'landing' && <Landing />}
        {page === 'routeSearch' && <Routes />}
        {page === 'liveTransitUpdates' && <TransitUpdates />}
        {page === 'subwayAlerts' && <SubwayAlerts />}
        {page === 'LoginForm' && <LoginForm />}
      </div>
      <div>
        <img src={nyuLogo} alt="NYU Logo" style={{ position: 'absolute', top: 10, left: 110, width: '7.33%', height: 'auto' }} />
        <img src={nyuLogo} alt="NYU Logo" style={{ position: 'absolute', top: 10, right: 110, width: '7.33%', height: 'auto' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'absolute', bottom: '210px' }}>
        
      </div>
      

      </div>
    </Suspense>
  );
};

export default MainMenu;
