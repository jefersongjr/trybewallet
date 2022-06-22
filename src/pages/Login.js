import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section className="login-box">
        <label name="login-name">
          Username:
          <input name="login-name" type="email" data-testid="email-input" />
        </label>

        <label name="password-name">
          Password:
          <input name="password-name" type="password" data-testid="password-input" />
        </label>
        <button type="button">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
