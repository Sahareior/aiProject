
import { Button } from 'antd';
import Navbar from './components/shared_components/Navbar/Navbar';
import Hero from './components/About/About';
import Solutions from './components/solutions/Solutions';
import Actions from './components/solutions_actions/Actions';
import Technology from './components/Technology/Technology';
import Benifits from './components/Benifits/Benifits';
import Case from './components/Case/Case';
import GetStart from './components/GetStart/GetStart';
import Footer from './components/shared_components/Footer/Footer';



function App() {


  return (
<div>
<Navbar />
<Hero />
<Solutions />
<Actions />
<Technology />
<Benifits />
<Case />
<GetStart />
<Footer />
</div>
  )
}

export default App
