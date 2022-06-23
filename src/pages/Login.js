import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
 state = {
   email: '',
 }

 handleChange = ({ target }) => {
   const { name, value } = target;
   this.setState({ [name]: value });
 }

 render() {
   const { email } = this.state;
   return (
     <section className="login-box">
       Username:
       <input
         name="email"
         value={ email }
         type="email"
         onChange={ this.handleChange }
         data-testid="email-input"
       />
       Password:
       <input name="password-name" type="password" data-testid="password-input" />
       <button type="button">
         Entrar
       </button>
     </section>
   );
 }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
