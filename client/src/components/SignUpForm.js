import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CheckboxAlert from './CheckboxAlert';
import firebaseApp from '../firebase';
import { connect } from 'react-redux';
import '../App.css';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false,
      displayErr: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        let uid = data.user.uid;
        let newUser = {};
        newUser[uid] = { name: 'somename' };
        firebaseApp
          .database()
          .ref(`users/${uid}`)
          .set({ name: this.state.name }, function (e) {
            if (e) console.log(e);
          });
      })
      .catch(
        function () {
          this.setState({ displayErr: true });
        }.bind(this)
      );

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    console.log('PROPS: ', this.props);
    return this.props.userInfo.email ? (
      <Redirect to='/home' push={true} />
    ) : (
      <div className='FormCenter'>
        <form onSubmit={this.handleSubmit} className='FormFields'>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='name'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your full name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='email'>
              E-Mail Address
            </label>
            <input
              type='email'
              id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div
              className='SUF-err-msg'
              style={{
                color: 'fireBrick',
                fontWeight: '400',
                visibility: this.state.displayErr ? 'visible' : 'hidden',
              }}
            >
              Something went wrong :( check your input
            </div>
          </div>

          <div className='FormField'>
            <label className='FormField__CheckboxLabel'>
              <input
                className='FormField__Checkbox'
                type='checkbox'
                name='hasAgreed'
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{' '}
              I agree all statements in <CheckboxAlert className='FormField__TermsLink'></CheckboxAlert>
            </label>
          </div>

          <div className='FormField'>
            <button className='FormField__Button mr-20'>Sign Up</button>{' '}
            <Link to='/sign-in' className='FormField__Link'>
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userInfo: state.loginInfo };
};

export default connect(mapStateToProps, null)(SignUpForm);
