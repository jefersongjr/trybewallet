import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section className="login-box">
        Username:
        <input name="login-name" type="email" data-testid="email-input" />
        Password:
        <input name="password-name" type="password" data-testid="password-input" />
        <button type="button">
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
