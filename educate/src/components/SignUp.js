import React from "react";

const SignUp = () => {
  return (
    <div>
      {" "}
      <main className="signup">
        <section>
          <div>
            <h2>Sign Up</h2>
          </div>

          <form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input
                type="number"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div>
              <button>Submit</button>
            </div>
            <a href="login.html">Already Have An Account?</a>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
