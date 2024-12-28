import React from "react";

function LearnMorePage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h1 className="card-title text-center text-primary mb-4">
                Get Your Free Cheese Fries!
              </h1>
              <p className="lead text-center text-muted mb-4">
                You've clicked the right button! Here's everything you need to
                know about claiming your free cheese fries.
              </p>
              <div className="mb-4">
                <h3 className="text-danger">How to Claim Your Free Fries</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Step 1:</strong> Visit our store during business
                    hours.
                  </li>
                  <li className="list-group-item">
                    <strong>Step 2:</strong> Show this page or mention the offer
                    to our staff.
                  </li>
                  <li className="list-group-item">
                    <strong>Step 3:</strong> Enjoy your free cheese fries!
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <a
                  href="/"
                  className="btn btn-secondary px-5 py-2 rounded-pill mt-3"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;
