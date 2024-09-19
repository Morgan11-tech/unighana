import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    educationalLevel: '',
    password: ''
  });
  const [formValidity, setFormValidity] = useState({
    firstName: null,
    lastName: null,
    email: null,
    educationalLevel: null,
    password: null
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    educationalLevel: false,
    password: false
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let isValid = false;
    if (name === 'email') isValid = validateEmail(value);
    else if (name === 'password') isValid = validatePassword(value);
    else isValid = value.trim() !== '';

    setFormValidity({ ...formValidity, [name]: isValid });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const isFormValid = () => {
    return Object.values(formValidity).every(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    } else {
      // Mark all fields as touched to show errors
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        educationalLevel: true,
        password: true
      });
    }
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-white py-10">
        <div className="flex shadow-lg">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '28rem', height: '45rem' }}>
            <div className="w-80">
              <h1 className="text-2xl font-bold">Access UniGhana</h1>
              <small className="text-xs text-gray-400">Create an account and join us on this journey now</small>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={`text-sm block w-full rounded-md border ${touched.firstName && !formValidity.firstName ? 'border-red-500' : formValidity.firstName ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && !formValidity.firstName && <span className="text-red-500 text-xs">First name is required.</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={`text-sm block w-full rounded-md border ${touched.lastName && !formValidity.lastName ? 'border-red-500' : formValidity.lastName ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && !formValidity.lastName && <span className="text-red-500 text-xs">Last name is required.</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`text-sm block w-full rounded-md border ${touched.email && !formValidity.email ? 'border-red-500' : formValidity.email ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && !formValidity.email && <span className="text-red-500 text-xs">Please enter a valid email.</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Educational Level</label>
                  <input
                    type="text"
                    name="educationalLevel"
                    placeholder="Enter your educational level"
                    className={`text-sm block w-full rounded-md border ${touched.educationalLevel && !formValidity.educationalLevel ? 'border-red-500' : formValidity.educationalLevel ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={formData.educationalLevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.educationalLevel && !formValidity.educationalLevel && <span className="text-red-500 text-xs">Educational level is required.</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className={`text-sm block w-full rounded-md border ${touched.password && !formValidity.password ? 'border-red-500' : formValidity.password ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-1 py-2 px-1.5 text-gray-500`}
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && !formValidity.password && <span className="text-red-500 text-xs">Password must be at least 6 characters long.</span>}
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                  <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember me</label>
                  <a href="#" className="text-xs font-semibold text-purple">Forgot password?</a>
                </div>

                <div className="mb-3 mt-9">
                  <button
                    type="submit"
                    className={`mb-1.5 block w-full text-center text-white bg-purple hover:bg-purple-hover px-2 py-2 rounded-md ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isFormValid()}
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
                <span className="text-xs text-gray-400 font-semibold">Already have an account?</span>
                <Link to="/" className="text-xs font-semibold text-purple">Sign in</Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-wrap content-center justify-center rounded-r-md" style={{ width: '28rem', height: '45rem' }}>
            <div className='bg-purple w-full h-full'>
                <img
                    className="py-32 px-12 "
                    src="./unighana-logo-transparent-bg.png"
                    alt="Login"
                />

            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
