"use client";

import CardProjectArchive from "@/components/card-project-archive";
import LinkText from "@/components/link-text";
import { LinkPreview } from "@/components/ui/link-preview";
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
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { x, y } = useFollowPointerHook(ref);

  const projects = [
    {
      title: "Build a Kesrepro App",
      description:
        '"Kesrepro App" is an educational game about reproductive health for early teenagers (aged 10-15). Built by using Flutter, Redux, and Firebase, this app offers engaging quizzes to enhance their understanding of this topic.',
      href: "https://drive.google.com/file/d/1ZXzjolTaB_ovo5m_vqVk_MnbN0Rl4m9Z/view?usp=sharing",
      image: "/images/kesrep.png",
    },
    {
      title: "Build a StayCation Web",
      description:
        'StayCation Web App is an e-commerce application which is a web-based application used to help its users compare accommodation prices based on date. Built by using NextJs, Redux, Auth.Js, Shadcn/UI, ExpressJs, Nodemailer, Node-corn, Prisma and MySQL.',
      href: "https://jcwdol130204.purwadhikabootcamp.com/",
      image: "/images/staycation.png",
    },
    {
      title: "Build a LiveBold Web",
      description:
        '"LA - Live bold" is a gamification website for personality tests. Built by using NextJs, this application offers engaging quizzes to increase sales of LA Bold brand products',
      href: "https://www.livebold.id/",
      image: "/images/livebold.png",
    },
  ];

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
                <Link href="https://github.com/vyaninsyanurmuhammad">
                  <LinkText>
                    <Github className="h-8 w-8" />
                  </LinkText>
                </Link>

                <Link href="https://www.linkedin.com/in/vyaninsyanurmuhammad/">
                  <LinkText>
                    <Linkedin className="h-8 w-8" />
                  </LinkText>
                </Link>
                <Link href="https://www.instagram.com/vyaninsyanurmuhammad/">
                  <LinkText>
                    <Instagram className="h-8 w-8" />
                  </LinkText>
                </Link>
                <Link href="https://x.com/NurVyan">
                  <LinkText>
                    <X className="h-8 w-8" />
                  </LinkText>
                </Link>
                <Link href="https://discordapp.com/users/pororo8058">
                  <LinkText>
                    <Discord className="h-8 w-8" />
                  </LinkText>
                </Link>
              </div>
            </div>
            <div className="w-full h-full lg:mr-28 2xl:mr-80">
              <div className="flex flex-col gap-16 py-24">
                <div className="flex flex-col gap-4">
                  <p className="text-slate-400">
                    My journey into the world of coding commenced in 2018 within
                    the hallowed halls of the Information Technology program
                    at&nbsp;
                    <LinkPreview url="https://www.umy.ac.id/">
                      <LinkText>Muhammadiyah University of Yogyakarta</LinkText>
                    </LinkPreview>
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
                    <LinkPreview url="https://purwadhika.com/">
                      <LinkText>Purwadhika School</LinkText>
                    </LinkPreview>
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
                  <p className="text-slate-400 break-words">
                    Now, armed with a robust foundation from my academic
                    endeavors, I stand at the threshold of professional
                    exploration, eager to apply my skills in&nbsp;
                    <LinkPreview url="https://react.dev/">
                      <LinkText>React.js</LinkText>
                    </LinkPreview>
                    ,&nbsp;
                    <LinkPreview url="https://nextjs.org/">
                      <LinkText>Next.js</LinkText>
                    </LinkPreview>
                    ,&nbsp;
                    <LinkPreview url="https://expressjs.com/">
                      <LinkText>Express.js</LinkText>
                    </LinkPreview>
                    ,&nbsp;
                    <LinkPreview url="https://laravel.com/">
                      <LinkText>Laravel</LinkText>
                    </LinkPreview>
                    ,&nbsp;
                    <LinkPreview url="https://flutter.dev/">
                      <LinkText>Flutter</LinkText>
                    </LinkPreview>
                    ,&nbsp;
                    <LinkPreview url="https://firebase.google.com/?hl=id">
                      <LinkText>Firebase</LinkText>
                    </LinkPreview>
                    , and{" "}
                    <LinkPreview url="https://www.mysql.com/">
                      <LinkText>MySQL</LinkText>
                    </LinkPreview>{" "}
                    and passion in real-world contexts. With each line of code
                    and every project undertaken, I am committed to continuous
                    learning and growth, driven by the conviction that
                    innovation and perseverance are the cornerstones of success
                    in the dynamic realm of technology.
                  </p>
                </div>
                <div className="flex flex-col gap-6 group/list">
                  <div className="flex flex-col gap-8 group/list">
                    {projects.map(
                      ({ title, description, image, href }, index) => (
                        <CardProjectArchive
                          key={`${title}-${index}`}
                          index={index}
                          title={title}
                          description={description}
                          href={href}
                          image={image}
                        />
                      )
                    )}
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1NOJuOIT1GKf-6KpeL0UhIUcPA_qgaODt/view?usp=sharing"
                    className="text-slate-100 hover:text-lime-400 flex flex-row gap-2 group justify-start items-center"
                  >
                    <span>See My Resume</span>
                    <ArrowRight className="w-4 h-4 text-slate-100 group-hover:text-lime-400 group-hover:scale-125 group-hover:stroke-2 transition-all ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
