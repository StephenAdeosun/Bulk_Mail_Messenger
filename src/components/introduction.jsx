import playStore from "../assets/google-play.png"
import appleStore from "../assets/apple-icon.png"
import heroImage from "../assets/hero.png"

function introductoryPage() {
  return (
    <div className="bg-quaapay-indigo w-1/2 h-full intro hidden">
      <img src={heroImage} alt="hero" className="scale-[.65]" />
      <div>
        <div className="text-left w-96 mx-0 my-auto text-white">
          <h1 className="font-medium text-xl mb-1.5 -mt-7">
            Introducing you to Quaapay Wallet
          </h1>
          <p className="font-normal text-xs">
            Downloading our mobile app, unlocks a world of possibilities for
            managing your finances, including seamless currency exchange, both
            locally and internationally.
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
          <a
            href="#"
            className="w-5/12 bg-white flex items-center justify-center rounded-[10px] mr-1.5"
          >
            <img
              src={appleStore}
              alt="apple-logo"
              className="w-[30px] h-[30px]"
            />
            <button className="text-left ml-1.5 text-xs p-2">
              Download on <br />
              <span className="font-bold text-black">Apple Store</span>
            </button>
          </a>
          <a
            href="#"
            className="w-5/12 bg-white flex items-center justify-center rounded-[10px] ml-1.5"
          >
            <img
              src={playStore}
              alt="google-play-logo"
              className="w-[30px] h-[30px]"
            />
            <button className="text-left ml-1.5 text-xs p-2">
              Get on <br />
              <span className="font-bold text-black">Google Play</span>
            </button>
          </a>
        </div>
        <div>
          <img src="./assets/slide-info.png" alt="" className="mt-8 mb-4" />
        </div>
      </div>
    </div>
  );
}

export default introductoryPage;