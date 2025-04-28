import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Our Mission</p>
          <h3>Making Healthcare Accessible</h3>
          <p>
            Our mission is to make quality healthcare accessible to every individual, no matter where they are.
          </p>
          <p>
            With Good Health, you can connect with top consultants and experienced doctors from the comfort of your home.
          </p>
          <p>
            We bring modern healthcare to your fingertips — from booking appointments, online video consultations, digital prescriptions, to managing your medical history securely.
          </p>
          <p>
            At Good Health, we believe everyone deserves trusted, timely, and personalized medical care.
          </p>
          <p>
            Your well-being is our priority, and we are committed to delivering a seamless, safe, and empowering healthcare experience across Nepal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
