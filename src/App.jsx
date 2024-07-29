
import './App.css';
import DownloadLinks from './components/DownloadLinks';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
const App = () => (
  <div className="App">
    <Header />
    <MainContent />
    <Testimonials />
    <DownloadLinks />
<Footer/>
  </div>
);

export default App;
