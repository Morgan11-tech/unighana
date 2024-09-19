import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValid = validateEmail(value);
    setEmailValid(isValid);
    checkFormValidity(isValid, passwordValid);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const isValid = validatePassword(value);
    setPasswordValid(isValid);
    checkFormValidity(emailValid, isValid);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (!emailValid) {
      setEmailValid(false);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    if (!passwordValid) {
      setPasswordValid(false);
    }
  };

  const checkFormValidity = (isEmailValid, isPasswordValid) => {
    setFormValid(isEmailValid && isPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) {
      if (!emailValid) setEmailValid(false);
      if (!passwordValid) setPasswordValid(false);
    } else {
      // Handle the form submission
      console.log('Form submitted');
    }
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-white py-10">
        <div className="flex shadow-lg">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '26rem', height: '32rem' }}>
            <div className="w-80">
              <h1 className="text-2xl font-bold">Access UniGhana</h1>
              <small className="text-xs text-gray-400">Fill in your details to continue from where you left off</small>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`text-sm block w-full rounded-md border ${
                      emailTouched && !emailValid ? 'border-red-500' : emailValid ? 'border-green-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  {emailTouched && !emailValid && <span className="text-red-500 text-xs">Please enter a valid email.</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className={`text-sm block w-full rounded-md border ${
                      passwordTouched && !passwordValid ? 'border-red-500' : passwordValid ? 'border-green-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                  />
                  {passwordTouched && !passwordValid && <span className="text-red-500 text-xs">Password must be at least 6 characters long.</span>}
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                  <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember me</label>
                  <a href="#" className="text-xs font-semibold text-purple">Forgot password?</a>
                </div>

                <div className="mb-3 mt-9">
                  <button
                    type="submit"
                    className={`mb-1.5 block w-full text-center text-white bg-purple hover:bg-purple-hover px-2 py-2 rounded-md ${
                      !formValid ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!formValid}
                  >
                    Sign in
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-2 rounded-md text-sm">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      alt="Google"
                    />
                    Sign in with Google
                  </button>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have an account?</span>
                <Link to="/register" className="text-xs font-semibold text-purple">Sign up</Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
            <img
              className="p-4 w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="./image1.jpg"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
