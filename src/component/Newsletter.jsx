import React from "react";

function Newsletter() {
  return (
    <section className="bg-primary p-5 text-light">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
          <div class="input-group news-input">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              aria-label="sign-up-btn-for-newsletter"
              aria-describedby="input-field-for-newsletter"
            />
            <button class="btn btn-dark btn-lg" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
