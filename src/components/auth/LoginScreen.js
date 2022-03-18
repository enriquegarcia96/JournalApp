import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


import { useForm } from "../../hooks/useForm";
import { login } from "../../actions/auth";

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: "kike@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();

    dispatch( login(12345, 'Enrique') );

  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin} >
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          className="auth__input"
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <hr />

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
