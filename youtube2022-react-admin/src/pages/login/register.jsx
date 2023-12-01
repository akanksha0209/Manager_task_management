// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from '../../firebase';
// import './register.css';
// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();
//   const register = () => {
//     if (!name) alert('Please enter name');
//     registerWithEmailAndPassword(name, email, password);
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (user) history.replace('/');
//   }, [user, loading]);
//   return (
//     <div className="register">
//       <div className="register__container">
//         <input
//           type="text"
//           className="register__textBox"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Full Name"
//         />
//         <input
//           type="text"
//           className="register__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="register__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button className="register__btn" onClick={register}>
//           Register
//         </button>
//         <button
//           className="register_btn register_google"
//           onClick={signInWithGoogle}
//         >
//           Register with Google
//         </button>
//         <div>
//           Already have an account? <Link to="/">Login</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Register;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.scss';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Maybe trigger a loading screen
      return;
    }

    const redirectUser = () => {
      if (user) {
        navigate('/'); // Redirect to the home page after successful registration
      }
    };

    redirectUser();
  }, [user, loading, navigate]);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error registering user:', error.message);
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        {/* Registration Form */}
        <div className="register__card">
          <h2>Register</h2>
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="number"
            className="register__textBox"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="register__btn"
            disabled={loading}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>

      <div>
        Already have an account? <Link to="/login">Login</Link> here.
      </div>

      <div className="register__actions">
        {/* Social Login Buttons */}
        <button className="register_btn register_google" onClick={signInWithGoogle}>
          Register with Google
        </button>
      </div>
    </div>
  );
}

export default Register;
