"use client";

import useFollowPointerHook from "@/hooks/use-follow-pointer-hook";
import { motion } from "framer-motion";
import { Discord, Github, Instagram, Linkedin, X } from "iconoir-react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { x, y } = useFollowPointerHook(ref);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#0E1200] flex relative">
        <div
          ref={ref}
          className="pointer-events-none fixed inset-0 -z-0 text-white lg:absolute"
          style={{
            backgroundImage: `radial-gradient(600px at ${x}px ${y}px, rgba(192, 255, 0, 0.15), transparent 80%)`,
          }}
        ></div>
        <motion.div
          className="fixed w-5 h-5 bg-lime-400"
          ref={ref}
          animate={{ x, y }}
          transition={{
            type: "spring",
            bounce: 0,
          }}
        ></motion.div>
        <div className="w-full h-full overflow-hidden">
          <div className="max-w-full max-h-screen flex flex-row overflow-auto gap-24">
            <div className="sticky top-0 w-full max-h-screen flex flex-col justify-between py-24 lg:ml-28 2xl:ml-80">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <h1 className="text-slate-100 text-5xl font-bold">
                    Hello, I&apos;m Vyan Insya Nur Muhammad;
                  </h1>
                  <span className="text-xl font-medium text-slate-100">
                    A Software Engineer from Pati, Indonesia.
                  </span>
                </div>
                <p className="text-slate-400">
                  Crafting digital masterpieces: pixel-perfect, captivating, and
                  seamlessly accessible.
                </p>
              </div>
              <div className="flex gap-4 text-slate-100">
                <Github className="h-8 w-8" />
                <Linkedin className="h-8 w-8" />
                <Instagram className="h-8 w-8" />
                <X className="h-8 w-8" />
                <Discord className="h-8 w-8" />
              </div>
            </div>
            <div className="w-full h-full lg:mr-28 2xl:mr-80">
              <div className="flex flex-col gap-16 py-24">
                <div className="flex flex-col gap-4">
                  <p className="text-slate-400">
                    My journey into the world of coding commenced in 2018 within
                    the hallowed halls of the Information Technology program
                    at&nbsp;
                    <a href="">
                      <span className="text-slate-100">
                        Muhammadiyah University of Yogyakarta
                      </span>
                    </a>
                    . Enrolled with an insatiable curiosity and a hunger for
                    knowledge, I immersed myself in the fundamentals of
                    programming languages, algorithms, and software development
                    methodologies. Throughout my academic tenure, I not only
                    absorbed theoretical concepts but also actively participated
                    in hands-on projects and sought out enriching internships,
                    each experience shaping me into a more adept and versatile
                    software enthusiast.
                  </p>
                  <p className="text-slate-400">
                    Within the confines of my university education and course
                    from&nbsp;
                    <a href="">
                      <span className="text-slate-100">Purwadhika School</span>
                    </a>
                    , I discovered a passion for solving complex problems and
                    transforming abstract ideas into tangible, functional
                    solutions. As I navigated through the intricacies of coding
                    challenges and collaborative projects, I unearthed a knack
                    for crafting elegant and efficient code that resonated with
                    both form and functionality. These formative experiences not
                    only solidified my technical prowess but also ignited a
                    fervent desire to contribute meaningfully to the
                    ever-evolving landscape of software development.
                  </p>
                  <p className="text-slate-400">
                    Now, armed with a robust foundation from my academic
                    endeavors, I stand at the threshold of professional
                    exploration, eager to apply my skills in&nbsp;
                    <a href="">
                      <span className="text-slate-100">React.js</span>
                    </a>
                    ,&nbsp;
                    <a href="">
                      <span className="text-slate-100">Next.js</span>
                    </a>
                    ,&nbsp;
                    <a href="">
                      <span className="text-slate-100">Express.js</span>
                    </a>
                    ,&nbsp;
                    <a href="">
                      <span className="text-slate-100">Laravel</span>
                    </a>
                    ,&nbsp;
                    <a href="">
                      <span className="text-slate-100">Flutter</span>
                    </a>
                    ,&nbsp;
                    <a href="">
                      <span className="text-slate-100">Firebase</span>
                    </a>
                    , and&nbsp;
                    <a href="">
                      <span className="text-slate-100">SQL</span>
                    </a>
                    ,&nbsp; and passion in real-world contexts. With each line
                    of code and every project undertaken, I am committed to
                    continuous learning and growth, driven by the conviction
                    that innovation and perseverance are the cornerstones of
                    success in the dynamic realm of technology.
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="bg-lime-400 h-28 w-28 shrink-0 rounded-lg"></div>
                  <div>
                    <h4 className="text-white font-medium">Build a Spotify Connected App</h4>
                    <p className="text-slate-400">
                      Video course that teaches how to build a web app with the
                      Spotify Web API. Topics covered include the principles of
                      REST APIs, user auth flows, Node, Express, React, Styled
                      Components, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
