import './App.css';
import Header from './components/Standard/Header';
import MainComponent from './components/Standard/MainComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DisplayOptions from './components/Standard/DisplayOptions';
import LineChart from './components/Charts/LineChart';
import AreaChart from './components/Charts/AreaChart';
import BarChart from './components/Charts/BarChart';
import PieChart from './components/Charts/PieChart';
import RadarChart from './components/Charts/RadarChart';
import Footer from './components/Standard/Footer';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Route path='/home' component={DisplayOptions} exact /> 
          <Route path='/lineChart' component={LineChart} exact />
          <Route path='/areaChart' component={AreaChart} exact />
          <Route path='/barChart' component={BarChart} exact />
          <Route path='/pieChart' component={PieChart} exact />
          <Route path='/radarGraph'  component={RadarChart} exact />
          <Route path='/' component={MainComponent} exact />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
