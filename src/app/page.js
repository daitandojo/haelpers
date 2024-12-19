'use client';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BouncingIcons from './components/BouncingIcons';
import Footer from './components/Footer';
import InputField from './components/InputField';
import CatchPhrase from './components/CatchPhrase';

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, position: 'relative' }}>
          <BouncingIcons />
          <CatchPhrase />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <InputField />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
