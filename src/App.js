import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Insureance from './component/Insureance/Insureance';
import ServicePackage from './component/ServicePackage/ServicePackage';
import Advantages from './component/Advantages/Advantages';
import ClientReview from './component/ClientReview/ClientReview';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Insureance></Insureance>
      <ServicePackage></ServicePackage>
      <Advantages></Advantages>
      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
