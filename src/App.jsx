import React, { useEffect, useRef } from "react";

import Logo from "./Components/Assets/Logo.png";

import handwave from "./Components/Assets/handwave.png";
import photo from "./Components/Assets/Photo.png";

import github from "./Components/Assets/github.png";
import linkedin from "./Components/Assets/linkedin.png";

import react from "./Components/Assets/react.png";
import vite from "./Components/Assets/vite.png";
import tailwind from "./Components/Assets/tailwind.png";
import jsx from "./Components/Assets/jsx.png";

import frontend from "./Components/Assets/Frontend.gif";

import medlabview from "./Components/Assets/medlabview.png";
import medlabview_logo from "./Components/Assets/medlabview-logo.png";
import nmis from "./Components/Assets/nmis.png";
import nmis_logo from "./Components/Assets/nmis-logo.png";
import calotrac from "./Components/Assets/calotrac.png";
import calotrac_logo from "./Components/Assets/calotrac-logo.png";
import BIMS from "./Components/Assets/BIMS.png";
import BIMS_logo from "./Components/Assets/BIMS_logo.png";

import underline from "./Components/Assets/underline.png";

import location from "./Components/Assets/location.png";
import email from "./Components/Assets/email.png";
import phone from "./Components/Assets/phone.png";

import redirect from "./Components/Assets/redirect.png";

import facebook from "./Components/Assets/facebook.png";

import "./App.css";

function SidebarButton({
  label,
  shortLabel,
  onClick,
  hoverTextClass,
  hoverIconClass,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex w-full flex-col items-center justify-center gap-1
        rounded-2xl px-2 py-3 text-center font-['Poppins']
        text-[11px] font-semibold text-white
        transition duration-300
        md:text-[12px]
        ${hoverTextClass}
      `}
    >
      <span
        className={`
          flex h-10 w-10 items-center justify-center rounded-full
          bg-white/15 text-base font-bold text-white
          transition duration-300 group-hover:scale-110
          ${hoverIconClass}
        `}
      >
        {shortLabel}
      </span>

      <span>{label}</span>
    </button>
  );
}

function SocialButton({ href, icon, alt }) {
  return (
    <a href={href} className="no-underline">
      <img
        src={icon}
        alt={alt}
        className="
          w-[4vh] transition duration-300
          hover:scale-110
        "
      />
    </a>
  );
}

function TechIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="
        w-[3.5vh] transition-transform duration-300
        hover:-translate-y-[10px]
        md:w-[4vh]
      "
    />
  );
}

function ProjectButton({ href, children, icon, alt, accentColor }) {
  return (
    <a href={href} className="no-underline">
      <button
        type="button"
        style={{ backgroundColor: accentColor }}
        className="
          flex shrink-0 items-center justify-center gap-[0.8vh]
          whitespace-nowrap rounded-[1vh] border border-black/5
          px-[1.25vh] py-[1vh]
          font-['Poppins'] text-[1.75vh] font-bold text-white
          shadow-[0_8px_20px_rgba(15,23,42,0.08)]
          transition duration-300
          hover:cursor-pointer hover:-translate-y-[2px] hover:brightness-110
          hover:shadow-[0_12px_26px_rgba(15,23,42,0.12)]
          md:gap-[1vh] md:px-[1.5vh] md:text-[2vh]
        "
      >
        <span className="whitespace-nowrap">{children}</span>
        <img
          src={icon}
          alt={alt}
          className="w-[2.8vh] shrink-0 brightness-0 invert md:w-[2.75vh]"
        />
      </button>
    </a>
  );
}

function ProjectCard({
  direction = "left",
  image,
  imageAlt,
  logo,
  logoAlt,
  title,
  accentColor,
  description,
  stack,
  codeHref,
  liveHref,
  logoOnColor = false,
}) {
  const isLeft = direction === "left";

  const imageHoverShift = isLeft
    ? "md:group-hover:-translate-x-[26vh]"
    : "md:group-hover:translate-x-[26vh]";

  const infoPosition = isLeft
    ? "md:right-[4vh] md:translate-x-[4vh]"
    : "md:left-[4vh] md:-translate-x-[4vh]";

  const imageBlock = (
    <div
      className={`
        z-20 flex w-full justify-center transition-all duration-500 ease-out
        md:w-auto
        ${imageHoverShift}
      `}
    >
      <img
        src={image}
        alt={imageAlt}
        className="
          w-full max-w-[72vh] rounded-[1.5vh] border border-black/5
          object-cover shadow-[0_22px_50px_rgba(15,23,42,0.14)]
          transition duration-300 group-hover:shadow-[0_26px_60px_rgba(15,23,42,0.20)]
        "
      />
    </div>
  );

  const infoBlock = (
    <div
      className={`
        z-30 flex w-full max-w-[42vh] flex-col items-center justify-center
        rounded-[2vh] border border-black/5 bg-white/90 p-[2.6vh]
        text-center shadow-[0_18px_45px_rgba(15,23,42,0.12)]
        backdrop-blur-sm transition-all duration-500 ease-out
        md:p-[3vh]
      
        md:absolute md:opacity-0 md:pointer-events-none
        md:group-hover:opacity-100 md:group-hover:pointer-events-auto
        md:group-hover:translate-x-0
      
        ${infoPosition}
      `}
    >
      <div
        className="flex flex-col items-center text-[1em] font-bold md:text-[2vh]"
        style={{ color: accentColor }}
      >
        {logoOnColor ? (
          <div
            className="
              mb-[0.75vh] hidden h-[5.8vh] w-[5.8vh] items-center justify-center
              rounded-full shadow-[0_8px_20px_rgba(15,23,42,0.18)]
              md:flex
            "
            style={{ backgroundColor: accentColor }}
          >
            <img
              src={logo}
              alt={logoAlt}
              className="h-[3.8vh] w-[3.8vh] object-contain"
            />
          </div>
        ) : (
          <img src={logo} alt={logoAlt} className="hidden w-[5vh] md:block" />
        )}
        {title}
      </div>

      <div
        className="
          mt-[1.25vh] w-full text-center text-[1.75vh] leading-[1.4]
          text-[#6b7280] md:text-[2vh]
        "
      >
        {description}
      </div>

      <div className="mt-[1.5vh] flex gap-[1.25vh] text-[1.8vh] font-bold text-[#101010] md:text-[2vh]">
        {stack.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div className="mt-[1.5vh] flex flex-row items-center justify-center gap-[1vh]">
        <ProjectButton
          href={codeHref}
          icon={github}
          alt="github"
          accentColor={accentColor}
        >
          Code
        </ProjectButton>

        {liveHref && (
          <ProjectButton
            href={liveHref}
            icon={redirect}
            alt="redirect"
            accentColor={accentColor}
          >
            Live View
          </ProjectButton>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="
        group relative flex w-full max-w-[136vh] flex-col items-center
        justify-center gap-[3vh] md:min-h-[48vh]
      "
    >
      {imageBlock}
      {infoBlock}
    </div>
  );
}

function ContactItem({ icon, alt, children }) {
  return (
    <div
      className="
        flex w-[35vh] flex-row items-center justify-start
        md:w-auto md:justify-center
      "
    >
      <img src={icon} alt={alt} className="w-[5vh] pr-[2.5vh] md:w-[6vh]" />
      {children}
    </div>
  );
}

function App() {
  const Me = useRef(null);
  const About = useRef(null);
  const Projects = useRef(null);
  const Contact = useRef(null);

  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateViewportHeight();

    window.addEventListener("resize", updateViewportHeight);
    window.addEventListener("load", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("load", updateViewportHeight);
    };
  }, []);

  useEffect(() => {
    const handWaveImage = document.querySelector(".hand-wave");

    if (!handWaveImage) {
      return;
    }

    handWaveImage.classList.add("animate-wave");

    const handleAnimationEnd = () => {
      handWaveImage.classList.remove("animate-wave");
    };

    handWaveImage.addEventListener("animationend", handleAnimationEnd);

    return () => {
      handWaveImage.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (!section) {
      return;
    }
  
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollToMe = () => handleScrollToSection("Me");
  const handleScrollToAbout = () => handleScrollToSection("About");
  const handleScrollToProjects = () => handleScrollToSection("Projects");
  const handleScrollToContact = () => handleScrollToSection("contact");

  return (
    <div className="min-h-screen overflow-x-hidden caret-transparent font-['Poppins','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans',Arial,sans-serif] text-[#101010]">
      <aside
        className="
          fixed left-0 top-0 z-[1000] hidden h-screen w-[6rem]
          flex-col items-center justify-between border-r border-white/10
          bg-[#05070a] px-2 py-4
          shadow-[0_0_18px_4px_rgba(0,0,0,0.45)]
          md:flex
        "
      >
        <button
          type="button"
          onClick={handleScrollToMe}
          className="flex flex-col items-center border-none bg-transparent"
        >
          <img
            src={Logo}
            alt="Logo"
            className="
              h-12 w-auto shrink-0 object-contain transition-transform
              duration-300 hover:scale-110 md:h-16
            "
          />
        </button>

        <nav className="flex w-full flex-col items-center gap-3">
          <SidebarButton
            label="Hello"
            shortLabel="H"
            onClick={handleScrollToMe}
            hoverTextClass="hover:text-white"
            hoverIconClass="group-hover:bg-white group-hover:text-black"
          />

          <SidebarButton
            label="About"
            shortLabel="A"
            onClick={handleScrollToAbout}
            hoverTextClass="hover:text-[#ff5100]"
            hoverIconClass="group-hover:bg-[#ff5100] group-hover:text-white"
          />

          <SidebarButton
            label="Projects"
            shortLabel="P"
            onClick={handleScrollToProjects}
            hoverTextClass="hover:text-[#21a35e]"
            hoverIconClass="group-hover:bg-[#21a35e] group-hover:text-white"
          />

          <SidebarButton
            label="Contact"
            shortLabel="C"
            onClick={handleScrollToContact}
            hoverTextClass="hover:text-[#0fa3d0]"
            hoverIconClass="group-hover:bg-[#0fa3d0] group-hover:text-white"
          />
        </nav>

        <div />
      </aside>

      <main className="min-h-screen overflow-x-hidden md:pl-[6rem]">
        <div ref={Me} id="Me" className="mt-[-2vh]" />

        <section
          className="
            flex h-[105vh] w-full items-center justify-center
            max-[321px]:h-[105vh]
            min-[383px]:max-[385px]:h-screen
          "
          style={{
            background:
              "radial-gradient(circle at 78% 35%, rgba(15, 23, 42, 0.12) 0%, transparent 28%), radial-gradient(circle at 22% 72%, rgba(15, 23, 42, 0.07) 0%, transparent 30%), linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #ffffff 100%)",
          }}
        >
          <div>
            <div className="flex flex-col-reverse items-center justify-center gap-[6vh] md:flex-row md:gap-[12vh]">
              <div className="flex flex-col items-center gap-1 md:items-start">
                <div className="flex flex-col">
                  <div className="text-[5vh] font-bold md:text-[7vh]">
                    Front-End React
                  </div>

                  <div className="flex items-center gap-[2vh] text-[5vh] font-bold md:text-[7vh]">
                    Developer
                    <img
                      src={handwave}
                      alt="handwave"
                      className="
                        hand-wave h-[clamp(42px,6vw,78px)] w-auto shrink-0
                        origin-[70%_70%] object-contain ml-4
                        transition-transform duration-300 hover:animate-wave
                      "
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <div className="mt-[1vh] pl-[0.6vh] text-[1.5vh] md:mt-[3.5vh] md:text-[2vh]">
                    Hi, I'm Michael David N Agudo. A learning Front-end React
                  </div>

                  <div className="mt-[1vh] pl-[0.6vh] text-[1.52vh] md:text-[2vh]">
                    Developer from the University of the Philippines Manila. 📍
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center md:block">
                  <div className="my-[3vh] hidden gap-[3vh] md:ml-[1vh] md:flex">
                    <SocialButton
                      href="https://www.facebook.com/3L.DNA/"
                      icon={facebook}
                      alt="facebook"
                    />

                    <SocialButton
                      href="https://www.linkedin.com/in/avi-na"
                      icon={linkedin}
                      alt="linkedin"
                    />

                    <SocialButton
                      href="https://github.com/MD-4Good0"
                      icon={github}
                      alt="github"
                    />
                  </div>

                  <div
                    className="
                      mt-[1vh] flex flex-row items-center gap-[2.1vh]
                      pl-[0.5vh] text-[2vh] md:gap-[4.75vh]
                    "
                  >
                    Tech Stack
                    <span className="px-[3.5vh] text-[2vh] font-light">|</span>
                    <TechIcon src={react} alt="react" />
                    <TechIcon src={vite} alt="vite" />
                    <TechIcon src={tailwind} alt="tailwind" />
                    <TechIcon src={jsx} alt="jsx" />
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-[3em] flex h-[42vh] w-[42vh] items-center justify-center
                  md:mt-0 md:h-[50vh] md:w-[50vh]
                "
              >
                <div className="profile-blob">
                  <img src={photo} alt="Michael David Agudo" className="profile-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={About}
          id="About"
          className="
            flex min-h-screen w-full items-center justify-center overflow-hidden
            px-[2vh] py-[10vh]
            md:min-h-[110vh] md:px-0 md:py-0
          "
          style={{
            background:
              "radial-gradient(circle at 18% 42%, rgba(255, 81, 0, 0.24) 0%, transparent 30%), radial-gradient(circle at 85% 20%, rgba(251, 146, 60, 0.20) 0%, transparent 32%), linear-gradient(135deg, #fff7ed 0%, #ffffff 48%, #fff3e6 100%)",
          }}
        >
          <div
            className="
              mx-auto flex w-full flex-col
              items-center justify-center gap-[5vh] text-center
              md:min-h-[105vh] md:w-[150vh] md:flex-row md:gap-[6vh] md:text-left
            "
          >
            <div className="w-full max-w-[34vh] rounded-[3vh] p-[2vh] md:w-[140vh] md:max-w-none">
              <img
                src={frontend}
                alt="frontend"
                className="w-[20vh] pr-0 md:w-[30vh]"
              />
            </div>

            <div
              className="
                w-[40vh] rounded-[2.5vh] border border-orange-200/70
                bg-white/75 px-[2.75vh] py-[3vh]
                shadow-[0_18px_50px_rgba(255,81,0,0.10)]
                backdrop-blur-sm md:w-auto
              "
            >
              <div className="text-[2.4vh] font-bold text-[#ff5100] md:text-[2.5vh]">
                📌 About Me ~
              </div>

              <div className="mt-[1.5vh] text-[2.9vh] font-bold text-[#2F3037] md:mt-[1vh] md:text-[3.5vh]">
                <div>A passionate Front-end Developer from</div>
                <div>the University of the Philippines Manila</div>
              </div>

              <div
                className="
                  mt-[1.5vh] text-center text-[2vh] font-light leading-[3.5vh]
                  text-[#101010] md:text-justify md:text-[1.80vh]
                  md:font-normal md:leading-[3vh]
                "
              >
                I am a front-end developer with a strong interest in creating clean, responsive, and user-friendly web experiences. I work with React, Vite, Tailwind CSS, JavaScript, and JSX to build interfaces that are functional, organized, and visually clear. Through my academic and personal projects, I have gained experience in developing web applications, structuring reusable components, improving layouts, and refining user interactions. I am continuously improving my skills and working toward becoming a more capable, well-rounded, and reliable front-end developer.
              </div>
            </div>
          </div>
        </section>

        <section
          ref={Projects}
          id="Projects"
          className="
            flex w-full items-center justify-center overflow-hidden px-[2vh] py-[10vh]
            md:px-0 md:py-[8vh]
          "
          style={{
            backgroundColor: "#f8fafc",
            backgroundImage:
              "linear-gradient(rgba(33, 163, 94, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 163, 94, 0.08) 1px, transparent 1px), radial-gradient(circle at 80% 15%, rgba(33, 163, 94, 0.16) 0%, transparent 30%), radial-gradient(circle at 18% 72%, rgba(15, 23, 42, 0.06) 0%, transparent 28%)",
            backgroundSize: "44px 44px, 44px 44px, 100% 100%, 100% 100%",
          }}
        >
        <div
          className="
            mx-auto flex w-full max-w-[140vh] flex-col items-center
            justify-center px-[4vh]
          "
        >
          <div className="flex w-full flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="text-[2.4vh] font-bold text-[#21a35e] md:text-[2.5vh]">
              🧩 Projects ~
            </div>

            <div
              className="
                mt-[1.5vh] max-w-[34vh] text-center text-[2.7vh] font-bold
                leading-tight text-[#2F3037]
                md:max-w-none md:text-left md:text-[3.25vh]
              "
            >
              The pieces that create the full picture.
            </div>
          </div>

          <div className="mt-[5vh] flex w-full flex-col items-center gap-[8vh] md:gap-[10vh]">
            <ProjectCard
              direction="left"
              image={nmis}
              imageAlt="nmis"
              logo={nmis_logo}
              logoAlt="nmis logo"
              title="~ NMIS ~"
              accentColor="#2B9DC1"
              description="NMIS is a Laboratory Information Management System made for making the process of viewing laboratory results easier."
              stack={["REACT", "CSS"]}
              codeHref="https://github.com/MD-4Good0/LIMS-128.2"
              liveHref="https://nmis.vercel.app/login"
            />

            <ProjectCard
              direction="right"
              image={calotrac}
              imageAlt="calotrac"
              logo={calotrac_logo}
              logoAlt="calotrac logo"
              title="~ CalotraC ~"
              accentColor="#d54400"
              description="CalotraC is a calorie tracking app that uses Gemini to identify food details and calculate calorie goals based on the user’s age, weight, and fitness goal."
              stack={["ANGULAR", "CSS"]}
              codeHref="https://github.com/MD-4Good0/CalotraC"
            />

            <ProjectCard
              direction="left"
              image={medlabview}
              imageAlt="medlabview"
              logo={medlabview_logo}
              logoAlt="medlabview logo"
              title="~ MEDLABVIEW (EOL) ~"
              accentColor="#18694e"
              description="MedLabView is a Laboratory Test Portal made to ease the process of sending, inputting, and viewing test requests and results."
              stack={["REACT", "CSS"]}
              codeHref="https://github.com/BohemianRasberry/medlabview/tree/neoneo"
              liveHref="https://bohemianrasberry.github.io/medlabview/"
            />

            <ProjectCard
              direction="right"
              image={BIMS}
              imageAlt="UPM-BIMS dashboard preview"
              logo={BIMS_logo}
              logoAlt="UPM-BIMS logo"
              title="~ UPM-BIMS ~"
              accentColor="#8d1b39"
              description="UPM-BIMS is a building information management system for organizing campus building data, facilities, compliance details, user access, and report generation through a role-based web platform."
              stack={["REACT", "VITE", "TAILWIND", "SUPABASE"]}
              codeHref="https://github.com/MD-4Good0/C-BIMS.git"
              liveHref="https://upm-bims.vercel.app/"
              logoOnColor
            />
          </div>
        </div>
        </section>

        <section
          ref={Contact}
          id="contact"
          className="
            mx-auto flex min-h-[90vh] w-full items-center justify-center
            overflow-hidden px-[2vh] py-[8vh]
          "
          style={{
            background:
              "radial-gradient(circle at 18% 35%, rgba(15, 163, 208, 0.30) 0%, transparent 30%), radial-gradient(circle at 82% 68%, rgba(0, 238, 255, 0.24) 0%, transparent 32%), linear-gradient(135deg, #dffaff 0%, #f8fdff 45%, #c9f5ff 100%)",
          }}
        >
          <div
            className="
              flex w-full max-w-[120vh] flex-col items-center justify-center
              rounded-[3vh] border border-cyan-300/70 bg-[#f7fdff]/85
              px-[4vh] py-[5vh] text-center
              shadow-[0_24px_65px_rgba(15,163,208,0.20)]
              backdrop-blur-sm
            "
          >
            <div className="flex items-center justify-center text-[2.4vh] font-bold text-[#0fa3d0] md:text-[2.5vh]">
              📱 Contact ~
            </div>

            <div
              className="
                mt-[1vh] flex w-[39vh] items-center justify-center text-center
                text-[2.9vh] font-bold text-[#2F3037] md:w-auto md:text-[3vh]
              "
            >
              "I'm only one call away..." - Sun Tzu
            </div>

            <div className="my-[2vh] h-[0.35vh] w-[32vh] rounded-full bg-[#0FA3D0]/20" />

            <div
              className="
                mt-[2vh] flex flex-col items-center justify-center gap-[4vh]
                rounded-[2.5vh] border border-cyan-200/80 bg-white/50
                px-[4vh] py-[3vh] text-[2vh]
                shadow-[0_14px_38px_rgba(15,163,208,0.12)]
                md:flex-row md:gap-[3.5vh]
              "
            >
              <ContactItem icon={location} alt="location">
                <a
                  href="https://www.google.com/maps/place/Antipolo"
                  className="text-[#101010] no-underline transition duration-300 hover:text-[#0FA3D0]"
                >
                  Antipolo City, Rizal
                </a>
              </ContactItem>

              <ContactItem icon={email} alt="email">
                <a
                  href="mailto:agudo.mdn@gmail.com"
                  className="text-[#101010] no-underline transition duration-300 hover:text-[#0FA3D0]"
                >
                  agudo.mdn@gmail.com
                </a>
              </ContactItem>

              <ContactItem icon={phone} alt="phone">
                <div className="flex flex-col gap-[0.5vh]">
                  <a
                    href="tel:+63960-609-0601"
                    className="text-[#101010] no-underline transition duration-300 hover:text-[#0FA3D0]"
                  >
                    +63 960 609 0601
                  </a>
                  <a
                    href="tel:+63976-338-5485"
                    className="text-[#101010] no-underline transition duration-300 hover:text-[#0FA3D0]"
                  >
                    +63 976 338 5485
                  </a>
                </div>
              </ContactItem>
            </div>

            <a
              href="https://drive.google.com/file/d/1BXWhv0IQL32Pz2BTvuvIyLyERrZ5PIlH/view?usp=sharing"
              className="mt-[3vh] flex justify-center no-underline"
            >
              <button
                type="button"
                className="
                  rounded-full border border-[#0FA3D0]/20 bg-[#0FA3D0]
                  px-[3vh] py-[1.25vh] font-['Poppins'] text-[2.25vh]
                  font-semibold text-white shadow-[0_10px_25px_rgba(15,163,208,0.22)]
                  transition duration-300
                  hover:bg-[#085870]
                  hover:shadow-[0_14px_32px_rgba(15,163,208,0.30)]
                "
              >
                La Resumé
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;