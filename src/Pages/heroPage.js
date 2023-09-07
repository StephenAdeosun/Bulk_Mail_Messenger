import dashboard from "../images/image 9.png";
import Nav from "../components/nav.jsx";

function HeroPage() {
  return (
    <section className="bg-section pb-24 flex flex-col justify-center items-center w-full relative">
      <Nav />

      <div className="mt-24 w-5/6 flex flex-col justify-center items-center ">
        <div className="mb-20">
          <div className="mb-16 ">
            <h1 className="font-bold text-lg md:text-5xl md:leading-snug bulk-h1">
              Send bulk email effortlessly with<br></br> Quapaay
              <span className="bulk-span"> Bulk</span>
              <span className="messenger-span"> messenger</span>
              <span className="api-span"> Api</span>
            </h1>

            <p className="md:text-lg mt-5 hidden md:block">
              Engage your audience on a personal level by customizing messages
              with our friendly<br></br> bulk message Api to enhancing your
              campaign's impact.
            </p>
          </div>

          <div className="flex gap-6 md:gap-8  justify-center items-center ">
            <button className="trial-btn text-base px-2 py-2 md:px-7 md:py-2.5 rounded-md font-semibold">
              Try 3Days free trial
            </button>
            <button className="learn-btn text-base px-2 py-1.5 md:px-5 md:py-2 rounded-md font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={dashboard} className="h-max md:w-2/3  dashboard" alt="dashboard" />
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
