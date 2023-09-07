import checkIcon from '../images/check.svg'
import whiteCheckIcon from '../images/white-check.svg'

function pricing() {
  return (
    <section className="pricing md:mt-32">
      <h4 className="pri100 font-semibold sm:text-[10px] md:sm:text-[6px] md:text-lg lg:text-2xl pt-7">
        OUR PRICING PLANS
      </h4>
      <div className="mx-auto mb-28 sm:w-full md:w-9/12 text-center flex items-center justify-center flex-col">
        <h2 className="md:w-4/12 sm:text-base md:text-lg lg:text-4xl text-pri011 font-semibold py-5">
          A Range of Options to Match Your Budget
        </h2>
        <p className="sm:text-[6px] md:text-xl pri005 mx-auto">
          Unlock unlimited sending, advanced features, and dedicated support.
        </p>
      </div>
      <div className="pricing-plans sm:flex sm:items-center sm:justify-center sm:flex-col lg:grid lg:grid-cols-3 gap-3 lg:px-28">
        {/* free plan */}
        <div className="pricing-plan text-left mb-8 px-9 py-14 rounded-3xl">
          <div className="pb-6">
            <h4 className="pri100 text-2xl font-semibold">Free Plan</h4>
            <p className="pb-4">Perfect for getting started and exploring.</p>
            <p className="text-5xl font-semibold">
              $0 <span className="text-xs font-medium">/month</span>
            </p>
          </div>
          <div className='mb-6'>
            <h5 className="text-2xl font-medium mb-5">FEATURES</h5>
            <ul>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />500 emails at once</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />Limited attachment size</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />No access to api documentation</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />No free pre-built email templates</li>
              <li className='flex'><img src={checkIcon} alt="checkIcon" className='pr-3' />Reporting and analysis</li>
            </ul>
          </div>
          <button className='bg-pri100 w-full p-2.5 rounded-lg white'>Try Free Plan</button>
        </div>
        {/* basic plan */}
        <div className="pricing-plan text-left mb-8 px-9 py-14 rounded-3xl bg-pri100 white">
          <div className="pb-6">
            <h4 className="text-2xl font-semibold">Basic Plan</h4>
            <p className="pb-4">Perfect for getting started and exploring.</p>
            <p className="text-5xl font-semibold">
              $0 <span className="text-xs font-medium">/month</span>
            </p>
          </div>
          <div className='mb-6'>
            <h5 className="text-2xl font-medium mb-5">FEATURES</h5>
            <ul>
              <li className='flex mb-5'><img src={whiteCheckIcon} alt="checkIcon" className='pr-3' />500 emails at once</li>
              <li className='flex mb-5'><img src={whiteCheckIcon} alt="checkIcon" className='pr-3' />Limited attachment size</li>
              <li className='flex mb-5'><img src={whiteCheckIcon} alt="checkIcon" className='pr-3' />No access to api documentation</li>
              <li className='flex mb-5'><img src={whiteCheckIcon} alt="checkIcon" className='pr-3' />No free pre-built email templates</li>
              <li className='flex'><img src={whiteCheckIcon} alt="checkIcon" className='pr-3' />Reporting and analysis</li>
            </ul>
          </div>
          <button className='bg-white w-full p-2.5 rounded-lg pri100'>Try Free Plan</button>
        </div>
        {/* organizational plan */}
        <div className="pricing-plan text-left mb-8 px-9 py-14 rounded-3xl">
          <div className="pb-6">
            <h4 className="pri100 text-2xl font-semibold">Organizational Plan</h4>
            <p className="pb-4">Perfect for getting started and exploring.</p>
            <p className="text-5xl font-semibold">
              $0 <span className="text-xs font-medium">/month</span>
            </p>
          </div>
          <div className='mb-6'>
            <h5 className="text-2xl font-medium mb-5">FEATURES</h5>
            <ul>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />500 emails at once</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />Limited attachment size</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />No access to api documentation</li>
              <li className='flex mb-5'><img src={checkIcon} alt="checkIcon" className='pr-3' />No free pre-built email templates</li>
              <li className='flex'><img src={checkIcon} alt="checkIcon" className='pr-3' />Reporting and analysis</li>
            </ul>
          </div>
          <button className='bg-pri100 w-full p-2.5 rounded-lg white'>Try Free Plan</button>
        </div>
      </div>
    </section>
  );
}

export default pricing;
