"use client";

import CardProjectArchive from "@/components/card-project-archive";
import LinkText from "@/components/link-text";
import useFollowPointerHook from "@/hooks/use-follow-pointer-hook";
import { LayoutGroup, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Discord,
  Github,
  Instagram,
  Linkedin,
  X,
} from "iconoir-react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { x, y } = useFollowPointerHook(ref);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#0E1200] flex relative scroll-smooth">
        <div
          ref={ref}
          className="pointer-events-none fixed inset-0 -z-0 text-white lg:absolute"
          style={{
            backgroundImage: `radial-gradient(600px at ${x}px ${y}px, rgba(192, 255, 0, 0.15), transparent 80%)`,
          }}
        ></div>

        <div className="w-full h-full overflow-hidden">
          <div className="max-w-full max-h-screen flex flex-col px-12 lg:flex-row overflow-auto gap-24">
            <div className="lg:sticky top-0 w-full max-h-screen flex flex-col justify-between py-24 lg:ml-28 2xl:ml-80">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <h1 className="text-slate-100 text-5xl font-bold">
                    Hello, I&apos;m Vyan Insya Nur Muhammad
                  </h1>
                  <span className="text-xl font-medium text-slate-100">
                    A Software Developer from Pati, Indonesia.
                  </span>
                </div>
                <p className="text-slate-400">
                  Crafting digital masterpieces: pixel-perfect, captivating, and
                  seamlessly accessible.
                </p>
              </div>
              <div className="flex gap-4 text-slate-100">
                <LinkText>
                  <Github className="h-8 w-8" />
                </LinkText>
                <LinkText>
                  <Linkedin className="h-8 w-8" />
                </LinkText>
                <LinkText>
                  <Instagram className="h-8 w-8" />
                </LinkText>
                <LinkText>
                  <X className="h-8 w-8" />
                </LinkText>
                <LinkText>
                  <Discord className="h-8 w-8" />
                </LinkText>
              </div>
            </div>
            <div className="w-full h-full lg:mr-28 2xl:mr-80">
              <div className="flex flex-col gap-16 py-24">
                <div className="flex flex-col gap-4">
                  <p className="text-slate-400">
                    My journey into the world of coding commenced in 2018 within
                    the hallowed halls of the Information Technology program
                    at&nbsp;
                    <LinkText>Muhammadiyah University of Yogyakarta</LinkText>.
                    Enrolled with an insatiable curiosity and a hunger for
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
                    <LinkText>Purwadhika School</LinkText>, I discovered a
                    passion for solving complex problems and transforming
                    abstract ideas into tangible, functional solutions. As I
                    navigated through the intricacies of coding challenges and
                    collaborative projects, I unearthed a knack for crafting
                    elegant and efficient code that resonated with both form and
                    functionality. These formative experiences not only
                    solidified my technical prowess but also ignited a fervent
                    desire to contribute meaningfully to the ever-evolving
                    landscape of software development.
                  </p>
                  <p className="text-slate-400 break-words">
                    Now, armed with a robust foundation from my academic
                    endeavors, I stand at the threshold of professional
                    exploration, eager to apply my skills in&nbsp;
                    <LinkText>React.js</LinkText>
                    ,&nbsp;
                    <LinkText>Next.js</LinkText>
                    ,&nbsp;
                    <LinkText>Express.js</LinkText>
                    ,&nbsp;
                    <LinkText>Laravel</LinkText>
                    ,&nbsp;
                    <LinkText>Flutter</LinkText>
                    ,&nbsp;
                    <LinkText>Firebase</LinkText>, and&nbsp;
                    <LinkText>SQL</LinkText>
                    ,&nbsp; and passion in real-world contexts. With each line
                    of code and every project undertaken, I am committed to
                    continuous learning and growth, driven by the conviction
                    that innovation and perseverance are the cornerstones of
                    success in the dynamic realm of technology.
                  </p>
                </div>
                <div className="flex flex-col gap-6 group/list">
                  <div className="flex flex-col gap-8 group/list">
                    <CardProjectArchive
                      title="Build a Kesrepro App"
                      description={
                        '"Kesrepro App" is an educational game about reproductive health for early teenagers (aged 10-15). Built using Flutter, Redux, and Firebase, this app offers engaging quizzes to enhance their understanding of this topic.'
                      }
                    />
                    <CardProjectArchive
                      title="Cassavain"
                      description={`"Cassavain" is a Laravel and MySQL project owned by PT. Blantika Alam Perkasa. It's a trading company collaborating with suppliers and manufacturers of cassava derivative products in Central Java.`}
                    />
                  </div>
                  <a
                    href=""
                    className="text-slate-100 hover:text-lime-400 flex flex-row gap-2 group justify-start items-center"
                  >
                    <span>See My Resume</span>
                    <ArrowRight className="w-4 h-4 text-slate-100 group-hover:text-lime-400 group-hover:scale-125 group-hover:stroke-2 transition-all ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
