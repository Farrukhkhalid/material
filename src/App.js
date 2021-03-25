import './styles.css';
import Cards from './components/cards/Card' ;
import Chart from './components/charts/Chart';
import Selector from './components/selector/Selector';
import {fetchData} from './api/Api';
import React, { Component, PropTypes } from 'react';

class App extends React.Component {

state = {
  data : {},
}
  async componentDidMount()
  {
    const getData = await fetchData();
    this.setState({data : getData});
    
  }

  render() {
  return (
    <div className="App">
     <Cards data={this.state.data}/>
     <Selector/>
     <Chart/>
    </div>
  );
 }
}

export default App;
