import React from "react";
import profile1 from "../images/Ellipse 4 (1).png";

function ProfileCardTwo() {
  return (
    <div className="profile-div md:p-6 px-4 py-6  md:px-0 md:py-0  rounded-2xl inline-block ">
      <h3 className="profile-h3 text-left font-medium mb-7">
        We needed a solution to manage our large<br></br> scale email
        communication and Quapaay<br></br> meet our expectations.
      </h3>

      <div className="flex gap-4">
        <img
          src={profile1}
          style={{ width: "50px", height: "50px" }}
          alt="customer"
        />
        <div className="text-left">
          <h4 className="profile-h4 text-base font-normal">Mark Anderson</h4>
          <p className="text-xs profile-p font-medium">CEO TechWave Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardTwo;
