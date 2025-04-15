import React from "react";
import HackthonFooter from "./HackthonFooter";

const Hackathon = () => {
  return (
   <>
    <div className="min-h-screen bg-black text-white px-3 py-4">
      <div className="text-start mb-8 md:mb-32 px-0 md:px-10 leading-10 md:leading-15 ">
        <h1 className="text-[40px] md:text-6xl lg:text-7xl font-extrabold tracking-wider">
          TYPOGRAPHY &
        </h1>
        <h2 className="text-[40px] md:text-6xl lg:text-7xl italic tracking-widest font-light md:ml-58 mb-2.5 md:mb-5 mt-0">
          CREATIVITY
        </h2>
        <div className="text-4xl md:text-6xl lg:text-6xl md:flex-col md:justify-self-end flex flex-col  lg:flex-row leading-[20px] md:leading-6 font-light">
          <span className="font-normal tracking-widest">CREATES DIGITAL</span>{" "}
          <br />
          <span className="tracking-widest font-bold ">EXPERIENCES</span>
        </div>
      </div>
      <div className="w-full min-h-[30vh] flex flex-col md:flex-row justify-center items-center md:items-end gap-3 mb-8 md:mb-20">
        <div className="bg-gray-700 w-full md:w-[47%] lg:w-[45%] h-[50vh] md:mb-30 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover " src="./src/assets/images/Image1.png" alt="" />
        </div>
        <div className="bg-gray-700 w-full md:w-[47%] lg:w-[45%] h-[50vh] rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover " src="./src/assets/images/Image2.png" alt="" />

        </div>
      </div>
      <div className="w-full min-[50vh]-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex md:justify-end mb-4 px-3">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-semibold uppercase md:mr-4">
            Who <span className="font-normal">am </span> 
             <span className="font-extrabold">i</span>?
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-6 md:gap-y-11 px-4 mb-10 md:px-0">
          <h1 className="text-base md:text-lg lg:text-2xl uppercase">
            I'm Aditya, a Computer and
            Communication student at LNMIIT Jaipur, driven by
            creativity and a passion for blending design with technology. As a
            designer, I love bringing ideas to life through motion and design.
          </h1>
          <h1 className="text-base md:text-lg lg:text-2xl uppercase">
            Movement, both in design and life, keeps me inspired—whether it's
            gaming, football, or simply walking
            outside. I believe that staying energized
            and adaptable in all aspects of life fuels my creativity and approach to
            problem-solving
          </h1>
          <h1 className="text-base md:text-lg lg:text-2xl uppercase">
            A huge sci-fi fan, I draw inspiration from Cyberpunk and Arcane, 
            fascinated by their world building and futuristic ideas. 
            Just as these stories push creative boundaries, I
            strive to craft digital experiences
            that captivate and inspire. I thrive in dynamic environments, 
            always eager to learn, adapt, and innovate in the ever-evolving
            world of technology.
          </h1>
        </div>
      
      </div>
      <div className="w-full min-[30vh] px-4 md:flex lg:flex lg:gap-x-20 md:gap-x-10 text-white">
             <div className="mb-4">
              <h1 className="underline decoration-2 text-xl ">HONORS & AWARDS</h1>
              <p className="text-30 ">Google GEN AI Hackathon Top 5 (2024)</p>
              <p className="text-30 ">MNIT Web-A-Thon Runner up (2024)</p>
              <p className="text-30 ">Informatica for AI/GenAI Finalist (2025)</p>
             </div>
             <div className="lg:flex md:flex lg:gap-x-20 md:gap-x-10">
            <div >
            <h1 className="underline decoration-2 text-xl  ">SKILLS</h1>
              <p className="text-30 ">Figma</p>
              <p className="text-30 ">GSAP</p>
              <p className="text-30 ">C</p>
            </div>
            <p className="lg:mt-7 text-30">C++</p>
             </div>
        </div>
    </div>
    <HackthonFooter/>
   </>
    
  );
};

export default Hackathon;
