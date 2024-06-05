import React from "react";

const Login = () => {
  return (
    <div>
      <main className="login">
        <section>
          <div>
            <h2>Log In</h2>
          </div>

          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" />
            </div>
            <button>Login</button>
            <a>Forgot Password</a>
          </form>
          <a href="signup.html">Create an account</a>
        </section>
      </main>
    </div>
  );
};

export default Login;
