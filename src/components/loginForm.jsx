import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  };


  handleSubmit = e => {
    e.preventDefault();
    //Call the server
  };

  handleChange = e => {
    const account = { ...this.state.account }; // ... spread operator to clone state account
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              className='form-control'
              id='username'
              type='text' />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Password</label>
            <input
              //value={this.state.account.password}
              className='form-control'
              id='password'
              type='password'></input>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm
