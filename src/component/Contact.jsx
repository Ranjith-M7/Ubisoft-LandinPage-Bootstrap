import React from "react";

function Contact() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> Saint-Mandé , France
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Contact Number:</span> +91 9524890192
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Email:</span>{" "}
                support@ubisoftescapegames.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33859098.71777259!2d-12.32858730000005!3d-58.80400019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2sAntarctica!5e0!3m2!1sen!2sin!4v1717396491172!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
