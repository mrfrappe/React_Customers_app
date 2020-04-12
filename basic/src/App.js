// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import List from './components/List/List';
import Form from './components/Form/Form'
import { employeesData } from './assets/data/employeesData';
import './index.scss';

class App extends React.Component {

  state = {
    items: [...employeesData]
  }

  onAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.items.length + 1,
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      gender: e.target[3].value,
    }

    console.log(newItem)
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();

    console.log(e.target.value)
  }

  render() {
    return (
    <div className="row">
      <List items={this.state.items}/>
      <Form  submitFunction={this.onAddItem}/>
    </div>
    )
  }


}

export default App; 
