import React from "react";
import profile2 from "../images/Ellipse 4.png";

function ProfileCardOne() {
  return (
    <div className="profile-div md:p-6 md:px-0 md:py-0 px-4 py-6  rounded-2xl inline-block ">
      <h3 className="profile-h3 text-left font-medium mb-7">
        Coordinating event announcements was a<br></br> challenge until we
        started using the Bulk<br></br> Message Messenger.
      </h3>

      <div className="flex gap-4">
        <img
          src={profile2}
          style={{ width: "50px", height: "50px" }}
          alt="customer"
        />
        <div className="text-left">
          <h4 className="profile-h4 text-base font-normal">Elizabeth Alma</h4>
          <p className="text-xs profile-p font-medium">Event Planner</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileCardOne;
