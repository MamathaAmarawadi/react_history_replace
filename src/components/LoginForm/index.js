import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false, para: ''}

  onSubmitted = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({error: true, para: data.error_msg})
    }
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, error, para} = this.state
    return (
      <div className="login-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="pic"
          />
        </div>
        <div>
          <div className="card">
            <form onSubmit={this.onSubmitted}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                  className="logo"
                />
              </div>
              <div className="row-3">
                <label htmlFor="username">USERNAME</label>
                <br />
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="input"
                  onChange={this.onUsername}
                  value={username}
                  name="username"
                />
              </div>
              <div className="row-3">
                <label htmlFor="password">PASSWORD</label>
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="input"
                  onChange={this.onPassword}
                  value={password}
                  name="password"
                />
              </div>
              <div className="btn-around">
                <button className="btn">Login</button>
              </div>
              {error ? <p>{para}</p> : ''}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
