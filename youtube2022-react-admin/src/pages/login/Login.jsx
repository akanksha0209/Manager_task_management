// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   auth,
//   signInWithEmailAndPassword,
//   signInWithGoogle,
// }from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import './login.scss';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       // Maybe trigger a loading screen
//       return;
//     }

//     const redirectUser = () => {
//       if (user && user.email === 'deepthag.cs20@rvce.edu.in') {
//         navigate('/');
//       } else if (user) {
//         navigate('/login');
//       }
//     };

//     redirectUser();
//   }, [user, loading, navigate]);

//   return (
//     <div className="login">
//       <div className="login__container">
//         <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           disabled={loading}
//           onClick={async () => {
//             try {
//               await signInWithEmailAndPassword(email, password);
//             } catch (error) {
//               console.log('Error signing in:', error.message);
//             }
//           }}
//         >
//           Login
//         </button>

//         <button className="login_btn login_google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>
//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>
//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
          
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import './login.scss';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loading) {
//       // Maybe trigger a loading screen
//       return;
//     }

//     const redirectUser = () => {
//       if (user && user.email === 'manager@example.com') {
//         navigate('/manager-dashboard'); // Adjust the route for the manager dashboard
//       } else if (user && user.email === 'employee@example.com') {
//         navigate('/employee-dashboard'); // Adjust the route for the employee dashboard
//       } else if (user) {
//         navigate('/login');
//       }
//     };

//     redirectUser();
//   }, [user, loading, navigate]);

//   return (
//     <div className="login">
//       <div className="login__container">
//         {/* Manager Login Card */}
//         <div className="login__card manager-card">
//           <h2>Manager Login</h2>
//           <input
//             type="text"
//             className="login__textBox"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="E-mail Address"
//           />
//           <input
//             type="password"
//             className="login__textBox"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//           <button
//             className="login__btn manager-btn"
//             disabled={loading}
//             onClick={async () => {
//               try {
//                 await signInWithEmailAndPassword(email, password);
//               } catch (error) {
//                 console.log('Error signing in:', error.message);
//               }
//             }}
//           >
//             Login as Manager
//           </button>
//         </div>

//         {/* Employee Login Card */}
//         <div className="login__card employee-card">
//           <h2>Employee Login</h2>
//           <input
//             type="text"
//             className="login__textBox"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="E-mail Address"
//           />
//           <input
//             type="password"
//             className="login__textBox"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//           <button
//             className="login__btn employee-btn"
//             disabled={loading}
//             onClick={async () => {
//               try {
//                 await signInWithEmailAndPassword(email, password);
//               } catch (error) {
//                 console.log('Error signing in:', error.message);
//               }
//             }}
//           >
//             Login as Employee
//           </button>
//         </div>

//         {/* Social Login Buttons */}
//         <button className="login_btn login_google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>

//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>

//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// Login.js

// Login.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Maybe trigger a loading screen
      return;
    }

    const redirectUser = () => {
      if (user && user.email === 'akankshaapai@gmail.com') {
        navigate('/'); // Adjust the route for the manager dashboard
      } else if (user && user.email === 'akankshaapai@gmail.com') {
        navigate('/'); // Adjust the route for the employee dashboard
      } else if (user) {
        navigate('/login');
      }
    };

    redirectUser();
  }, [user, loading, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        {/* Manager Login Card */}
        <div className="login__card">
          <h2>Manager Login</h2>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Manager E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Manager Password"
          />
          <button
            className="login__btn"
            disabled={loading}
            onClick={async () => {
              try {
                await signInWithEmailAndPassword(email, password);
              } catch (error) {
                console.log('Error signing in:', error.message);
              }
            }}
          >
            Login as Manager
          </button>
        </div>

        {/* Employee Login Card */}
        <div className="login__card">
          <h2>Employee Login</h2>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Employee E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Employee Password"
          />
          <button
            className="login__btn"
            disabled={loading}
            onClick={async () => {
              try {
                await signInWithEmailAndPassword(email, password);
              } catch (error) {
                console.log('Error signing in:', error.message);
              }
            }}
          >
            Login as Employee
          </button>
        </div>
      </div>

      <div className="login__actions">
        {/* Social Login Buttons */}
        <button className="login_btn login_google" onClick={signInWithGoogle}>
          Login with Google
        </button>

        {/* Forgot Password Link */}
        <div className="login__forgot-password">
          <Link to="/reset">Forgot Password</Link>
        </div>
      </div>

      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </div>
  );
}

export default Login;


// ReactLogin.js

// import React, { useEffect, useState } from 'react';
// import './login.css';



// const Login = () => {
//   useEffect(() => {
//     const signUpButton = document.getElementById('signUp');
//     const signInButton = document.getElementById('signIn');
//     const container = document.getElementById('container');

//     const handleSignUpClick = () => {
//       container.classList.add("right-panel-active");
//     };

//     const handleSignInClick = () => {
//       container.classList.remove("right-panel-active");
//     };

//     signUpButton.addEventListener('click', handleSignUpClick);
//     signInButton.addEventListener('click', handleSignInClick);

//     return () => {
//       signUpButton.removeEventListener('click', handleSignUpClick);
//       signInButton.removeEventListener('click', handleSignInClick);
//     };
//   }, []);

//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-up-container">
//         <form action="#">
//           <h1>Create Account</h1>
//           <div className="social-container">
//             <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
          
//         </form>
        
      
//       </div>
//       <div className="form-container sign-in-container">
//         <form action="#">
//           <h1>Sign in</h1>
//           <div className="social-container">
//             <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your account</span>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <a href="#">Forgot your password?</a>
//           <button href='/'>Sign In</button>
//         </form>
//       </div>
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us, please login with your personal info</p>
//             <button className="ghost" id="signIn">Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start the journey with us</p>
//             <button className="ghost" id="signUp">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './login.css';

// const Login = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const signUpButton = document.getElementById('signUp');
//     const signInButton = document.getElementById('signIn');
//     const container = document.getElementById('container');

//     const handleSignUpClick = () => {
//       container.classList.add("right-panel-active");
//     };

//     const handleSignInClick = () => {
//       container.classList.remove("right-panel-active");
//     };

//     signUpButton.addEventListener('click', handleSignUpClick);
//     signInButton.addEventListener('click', handleSignInClick);

//     return () => {
//       signUpButton.removeEventListener('click', handleSignUpClick);
//       signInButton.removeEventListener('click', handleSignInClick);
//     };
//   }, []);

//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-up-container">
//         <form action="#">
//           <h1>Create Account</h1>
//           <div className="social-container">
//             <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           {/* Use Link to navigate to the home page */}
//           {isAuthenticated && (
//             <Link to="/" className="home-link">
//               Sign In
//             </Link>
//           )}
//         </form>
//       </div>
//       {/* ... (rest of the component code) */}
//     </div>
//   );
// };

// export default Login;
