import { assets } from "../assets/assets";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useGsapAnimations = (refs) => {
  useGSAP(() => {
    gsap.from(".hero-contaienr .left, .hero-contaienr .right", {
      y: 390,
      duration: 1.4,
      opacity: 0,
    });
  }, [refs[0]]);

  const scrollTriggerSettings = [
    {
      ref: refs[1],
      x: 0,
      y: 200,
      trigger: "rating-img",
      start: "25% 93%",
      end: "30% 90%",
    },
    {
      ref: refs[2],
      x: -200,
      y: 0,
      trigger: "rating-img",
      start: "30% 93%",
      end: "35% 90%",
    },
    {
      ref: refs[3],
      x: -200,
      y: 0,
      trigger: "rating-img",
      start: "86% 93%",
      end: "98% 90%",
    },
    {
      ref: refs[4],
      x: 200,
      y: 0,
      trigger: "rating-img",
      start: "65% 93%",
      end: "75% 90%",
    },
    {
      ref: refs[5],
      x: -400,
      y: 0,
      trigger: "rating-img",
      start: "40% 93%",
      end: "60% 90%",
    },
  ];

  scrollTriggerSettings.forEach(({ ref, x, y, trigger, start, end }) => {
    useGSAP(() => {
      gsap.from(ref.current, {
        x,
        y,
        duration: 1.4,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger,
          start,
          end,
          scrub: true,
          yoyo: true,
        },
      });
    }, [ref]);
  });
};

const Home = () => {
  const containerRefs = Array.from({ length: 6 }, () => useRef(null));

  useGsapAnimations(containerRefs);

  const features = [
    {
      imgSrc: assets.img9,
      title: "Light Weight",
      description: "Motion Art for Elementor is designed to be lightweight.",
    },
    {
      imgSrc: assets.img6,
      title: "100% Responsive",
      description: "Create a consistent visual experience across all devices.",
    },
    {
      imgSrc: assets.img7,
      title: "User Friendly Interface",
      description:
        "Ensure a smooth experience for both applicants and administrators.",
    },
  ];

  const ratingItems = [
    { img: assets.img2, score: "4.5 Score, 9 Reviews" },
    { img: assets.img1, score: "4.5 Score, 9 Reviews" },
    { img: assets.img3, score: "4.5 Score, 9 Reviews" },
  ];

  const applyItems = [
    {
      title: "Apply On Section",
      description:
        "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.",
      imgSrc: assets.img11,
      extraClass: "",
    },
    {
      title: "Apply On Page",
      description:
        "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
      imgSrc: assets.img10,
      extraClass: "sm:mt-20",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-3 overflow-hidden">
      <div className="header flex justify-between pt-9 items-center">
        <a href="">
          <img src={assets.logo} alt="motion art logo" />
        </a>
        <a
          className="sm:block hidden bg-white text-black px-8 py-3 font-medium rounded-lg inline-block h-fit border-2 hover:border-white hover:text-white hover:bg-transparent duration-300 ease-in-out"
          href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
          target="_blank"
        >
          Purchase Now
        </a>
      </div>

      <div
        ref={containerRefs[0]}
        className="hero-contaienr overflow-hidden grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto py-20 gap-4 justify-items-center sm:justify-items-start sm:text-start text-center"
      >
        <div className="left md:col-span-3">
          <p className="bg-clip-text text-transparent bg-gradient1 text-xl font-medium mb-3">
            Transform <br />
            <span className="bg-clip-text text-transparent bg-gradient1 text-xl font-medium">
              Your Website
            </span>
          </p>
          <span className="sm:max-w-36 block">With Motion Art Effect</span>
        </div>
        <div className="right md:col-span-6">
          <h1 className="leading-[80px] font-sora font-medium mb-5">
            Attract Your Visitors Attention With Colorful <br />
            <span className="bg-clip-text text-transparent bg-gradient1 font-semibold">
              Motion Art Effect
            </span>
          </h1>
          <p className="text-zinc-400">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
        <div className="md:col-span-2"></div>
      </div>

      <div className="rating">
        <h3 className="text-zinc-300 text-xl text-center">
          Trusted by thousands of users around the world
        </h3>
        <div
          ref={containerRefs[1]}
          className="overflow-hidden flex lg:gap-24 gap-10 pt-12 flex-wrap lg:justify-between justify-center"
        >
          {ratingItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={item.img} alt="" />
              <div>
                <img src={assets.img4} alt="" />
                <p className="mt-4 text-zinc-400">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={containerRefs[2]}
        className="cursor-magic grid grid-cols-1 md:grid-cols-5 gap-10 pt-28 justify-items-center md:justify-items-end sm:text-start text-center"
      >
        <div className="md:col-span-3">
          <div className="left">
            <h2>
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="text-zinc-400 my-5">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <a
              className="px-6 py-4 rounded-2xl bg-gradient-to-r text-xl inline-block"
              href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
              target="_blank"
            >
              Purchase From Envato{" "}
              <span className="inline-block ml-3">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 right">
          <img src={assets.img5} alt="" />
        </div>
      </div>

      <div ref={containerRefs[5]} className="apply pt-28">
        <h2 className="text-center max-w-2xl mx-auto">
          Apply On Any Section Or Enable For Whole Page
        </h2>
        <div className="flex gap-4 flex-wrap sm:flex-nowrap mt-14">
          {applyItems.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient3 border-2 border-[#251E35] rounded-3xl p-8 max-w-[610px] h-fit ${item.extraClass}`}
            >
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-zinc-400 my-5 leading-[30px]">
                {item.description}
              </p>
              <img
                className="max-w-full h-auto"
                src={item.imgSrc}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={containerRefs[4]}
        className="browser bg-gradient3 border-2 border-[#251E35] rounded-3xl sm:mt-32 mt-6 px-10 py-12"
      >
        <div className="max-w-[460px] mx-auto text-center">
          <h2>Supported by All Popular Browsers</h2>
          <p className="my-6 text-zinc-400">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img src={assets.img8} alt="" />
        </div>
      </div>

      <div ref={containerRefs[3]} className="apply my-28">
        <div className="text-center max-w-2xl mx-auto">
          <h2>An All-Round Plugin With Powerful Features</h2>
          <p className="text-zinc-400 mt-3">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-14 flex-wrap sm:flex-nowrap">
          {features.map((item, index) => (
            <div
              key={index}
              className="feature bg-gradient3 border-2 border-[#251E35] rounded-3xl sm:max-w-[400px] w-full"
            >
              <img src={item.imgSrc} alt={item.title} />
              <h2 className="px-9 pt-6 mb-3">{item.title}</h2>
              <p className="px-9 pb-10 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
