import dashboard from "../images/image 9.png";

// const [showMore, setShowMore] = useState(false);

// function NavBarClick() {
//   setShowMore(!showMore);
// }

function HeroPage() {
  // const navBarClick = () => {
  //   const btn = document.querySelector("#menu-btn");
  //   const nav = document.querySelector("#menu");
  //   btn.classList.toggle("open");
  //   nav.classList.toggle("flex");
  //   nav.classList.toggle("hidden");
  // };

  return (
    <section className="bg-section pb-24 flex flex-col justify-center items-center w-full relative">
      <header className="p-7 flex items-center justify-between md:justify-around w-full ">
        <button className="border-black border-2 text-lg px-3 py-1 font-semibold">
          Logo
        </button>

        <div className="w-2/3 hidden md:block">
          <nav className=" md:flex items-center justify-around ">
            <ul className="flex gap-6 font-semibold text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
            </ul>

            <button className="sign-in px-8 py-2.5 rounded-md ">Sign In</button>
          </nav>
        </div>

        <button
          // onClick={NavBarClick}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none items-end"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </header>

      <div class="md:hidden">
        <div id="menu " className="hidden nav-menu">
          <ul className="flex flex-col absolute gap-6 font-semibold text-lg">
            <li className="hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4">
              <a href="#">Home</a>
            </li>

            <li>
              <a
                href="#"
                className="hover:underline decoration-solid decoration-2 decoration-black underline-offset-4"
              >
                Pricing
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
          </ul>

          <button className="sign-in px-8 py-2.5 rounded-md">Sign In</button>
        </div>
      </div>

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
          <img src={dashboard} className="h-max md:w-2/3  dashboard" />
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
