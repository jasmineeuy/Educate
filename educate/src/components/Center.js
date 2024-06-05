import React from "react";

const Center = () => {
  return (
    <div>
      <main className="form">
        <article>
          <h1>Tutoring Form</h1>
          <h2>Have a center to add?</h2>
          <form>
            <label htmlFor="name">Center Name</label>
            <input type="text" name="name" />
            <label htmlFor="address">Center Address</label>
            <input type="text" name="address" />
            <label htmlFor="number">Phone Number</label>
            <input type="text" name="number" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <button>Button</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Center;
