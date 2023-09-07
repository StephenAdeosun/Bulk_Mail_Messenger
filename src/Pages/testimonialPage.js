import profile1 from "../images/Ellipse 4 (1).png";
import profile2 from "../images/Ellipse 4.png";
import arrow from "../images/Frame 1459.png";

function TestimonialPage() {
  return (
    <section className="testimonial-section flex flex-col justify-center items-center w-full pb-40 relative">
      <div className="w-5/6 flex flex-col justify-center items-center">
        <h4 className="font-semibold text-lg uppercase customer-h4 pt-5">customer reviews</h4>

        <div className="mt-6">
          <h3 className="customer-h3 font-semibold text-3xl md:text-4xl ">What our Customer Say</h3>
          <p className="font-normal text-base customer-p mt-5">Don’t take our words for it, listen to our customer.</p>
        </div>
      </div>

      <div className="flex mt-24 gap-7 testimonial-div md:flex-row flex-col justify-center items-center md:w-full" >
        <div className="profile-div p-6   rounded-2xl">
          <h3 className="profile-h3 text-left font-medium mb-7">Coordinating event announcements was a<br></br> challenge until we started using the Bulk<br></br> Message Messenger.</h3>

          <div className="flex gap-4">
            <img src={profile2} style={{ width: "50px", height: "50px" }} alt="customer" />
            <div className="text-left">
              <h4 className="profile-h4 text-base font-normal">Elizabeth Alma</h4>
              <p className="text-xs profile-p font-medium">Event Planner</p>
            </div>
          </div>
        </div>

        <div className="profile-div p-6  rounded-2xl">
          <h3 className="profile-h3 text-left font-medium mb-7">We needed a solution to manage our large<br></br> scale email communication and Quapaay<br></br> meet our expectations.</h3>

          <div className="flex gap-4">
            <img src={profile1} style={{ width: "50px", height: "50px" }} alt="customer" />
            <div className="text-left">
              <h4 className="profile-h4 text-base font-normal">Mark Anderson</h4>
              <p className="text-xs profile-p font-medium">CEO TechWave Inc.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="arrow-icon mt-11 absolute right-16 bottom-16 cursor-pointer">
        <img src={arrow} style={{ height: "44px", width: "44px" }} alt="arrow-icon" />
      </div>

    </section>


  )
}

export default TestimonialPage;
