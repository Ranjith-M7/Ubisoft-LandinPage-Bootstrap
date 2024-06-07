import React from "react";

function FAQ() {
  return (
    <section id="faq" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-1"
              >
                Where can I check for job openings at Ubisoft India studios?
              </button>
            </h2>
            <div
              id="question-1"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                You can apply for the job you like from the Ubisoft India{" "}
                <span className="fw-bold">careers page</span>. Once you click on Job Openings, you
                will be redirected to our open positions in Pune and Mumbai. You
                can click on the job opening of your choice and submit your
                application from there.
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-2"
              >
                Should I add my portfolio link along with my CV?
              </button>
            </h2>
            <div
              id="question-2"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Yes! You can apply for multiple positions at Ubisoft India.
                However, we encourage you to apply for the role best suited for
                you since it would increase your chances of being considered.
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-3"
              >
                What is the recruitment process at Ubisoft India?
              </button>
            </h2>
            <div
              id="question-3"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Absolutely! We would love to see a snapshot of your work. This
                will also help in making your application with us stronger.
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-4"
              >
                What is the recruitment process at Ubisoft India?
              </button>
            </h2>
            <div
              id="question-4"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                The recruitment process may vary according to the role. However,
                after you apply for a job, our recruiting team evaluates your
                skills and experience related to the job you've applied for. If
                you are selected to advance in the process, you'll hear from our
                recruiter. In this call, you will be guided with the hiring
                process for the relevant job. If you aren’t the best fit for the
                position, we will let you know through email.
              </div>
            </div>
          </div>
          {/* Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-5"
              >
                Does Ubisoft India offer intemship opportunities?
              </button>
            </h2>
            <div
              id="question-5"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Yes! Ubisoft India does offer internship opportunities. Follow
                our Careers page to keep up to date with the internship
                openings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
