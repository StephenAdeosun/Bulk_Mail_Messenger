import laptop from "../images/laptop.jpg";
import circle from "../images/circle-icon.svg";
import lines from "../images/lines-icon.svg";

function getStarted() {
  return (
    <section className="getStarted">
      <h4 className="text-pri100 font-semibold sm:text-[10px] md:sm:text-[6px] md:text-lg lg:text-2xl pt-7">
        READY TO START
      </h4>
      <div className="mb-28 ssm:text-[7px] md:m:w-[280px] md:w-full">
        <h2 className="sm:text-base md:text-lg lg:text-2xl lg:text-4xl text-pri011 font-semibold py-5">
          Want to Get Started?
        </h2>
        <p className="sm:text-[6px] md:text-xl text-pri005 md:w-[416px] mx-auto">
          Here's a step-by-step breakdown of how our Bulk Message Messenger
          works:
        </p>
      </div>
      <div className="md:w-9/12 mx-auto flex items-start justify-center">
        <div className="w-[142.981px] h-[142.981px] md:w-[486px]">
          <img src={laptop} alt="laptop.jpg" />
        </div>
        <div className="text-left sm:ml-5 sm:pr-11 md:ml-11 w-1/2">
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <img src={circle} alt="circle.svg" />
              <img src={lines} alt="lines.svg" />
            </div>
            <div>
              <h5 className="text-pri100 font-semibold sm:text-[10px] md:text-lg lg:text-2xl md:leading-8 md:mb-5">
                Register for free
              </h5>
              <p className="text-pri005 sm:text-[7px] md:text-base lg:text-lg sm:leading-[10px] md:leading-7 font-normal">
                Simply provide your basic details and create an account no
                upfront costs required.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <img src={circle} alt="circle.svg" />
              <img src={lines} alt="lines.svg" />
            </div>
            <div>
              <h5 className="text-pri100 font-semibold sm:text-[10px] md:text-lg lg:text-2xl md:leading-8 mb-5">
                Upload recipient emails
              </h5>
              <p className="text-pri005 sm:text-[7px] md:text-base lg:text-lg sm:leading-[10px] md:leading-7 font-normal">
                Simply provide your basic details and create an account no
                upfront costs required.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <img src={circle} alt="circle.svg" />
              <img src={lines} alt="lines.svg" />
            </div>
            <div>
              <h5 className="text-pri100 font-semibold sm:text-[10px] md:text-lg lg:text-2xl md:leading-8 mb-5">
                Personalize and reviews
              </h5>
              <p className="text-pri005 sm:text-[7px] md:text-base lg:text-lg sm:leading-[10px] md:leading-7 font-normal">
                Review your email content, subject and attachments to ensure
                everything is in order.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center justify-start">
              <img src={circle} alt="circle.svg" />
            </div>
            <div>
              <h5 className="text-pri100 font-semibold sm:text-[10px] md:text-lg lg:text-2xl md:leading-8 mb-5">
                Choose sending options
              </h5>
              <p className="text-pri005 sm:text-[7px] md:text-base lg:text-lg sm:leading-[10px] md:leading-7 font-normal">
                Decide whether to send immediately or schedule for a later time
                to deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default getStarted;
