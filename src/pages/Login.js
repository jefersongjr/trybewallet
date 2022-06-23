import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as listActions from '../actions';

class Login extends React.Component {
 state = {
   email: '',
 }

 handleChange = ({ target }) => {
   const { name, value } = target;
   this.setState({ [name]: value });
 }

 buttonClick = () => {
   const { email } = this.state;
   const { addUser } = this.props;

   addUser(email);
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
       <Link to="carteira">
         <button type="button" onClick={ this.buttonClick }>
           Entrar
         </button>
       </Link>
     </section>
   );
 }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(listActions.addUser(user)),
});

Login.propTypes = {
  addUser: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
