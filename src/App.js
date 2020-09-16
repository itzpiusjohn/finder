import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    isLoading: false,
    user: [],
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      isLoading: false,
      user: res.data,
    });
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Pius John' />
        <div className='container'>
          <Users user={this.state.user} isLoading={this.state.isLoading} />
        </div>
      </div>
    );
  }
}
export default App;
