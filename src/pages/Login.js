import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as listActions from '../actions';

class Login extends React.Component {
 state = {
   email: '',
   password: '',
   isDisabled: true,
 }

 handleChange = ({ target }) => {
   const { name, value } = target;
   this.setState({ [name]: value });

   this.setState(() => ({
     isDisabled: true,
   }), this.validateButton);
 }

  validateButton = () => {
    const { password, email } = this.state;
    const CINCO = 5;
    const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (password.length > CINCO && email.match(isValid)) {
      this.setState({
        isDisabled: false,
      });
    }
  }

 buttonClick = () => {
   const { email } = this.state;
   const { addUser, history } = this.props;

   history.push('/carteira');
   addUser(email);
 }

 render() {
   const { email, password, isDisabled } = this.state;
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
       <input
         name="password"
         type="password"
         value={ password }
         onChange={ this.handleChange }
         data-testid="password-input"
       />
       <button
         type="button"
         disabled={ isDisabled }
         onClick={ this.buttonClick }
       >
         Entrar
       </button>
     </section>
   );
 }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(listActions.addUser(user)),
});

Login.propTypes = {
  addUser: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
