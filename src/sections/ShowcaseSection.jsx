import { Link } from "react-router-dom";
import { projects } from "../constants/projects";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5});
    const projectList = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];
    projectList.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2 * (index + 1),
            scrollTrigger: {
              trigger: project,
              start: "top bottom -=100",
            },
          },
        );
      }
    });
  },[]);


  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {projects.map((p, index) => (
            <div
              key={p.slug}
              ref={
                index === 0
                  ? project1Ref
                  : index === 1
                    ? project2Ref
                    : index === 2
                      ? project3Ref
                      : project4Ref
              }
              className="project-list-wrapper overflow-hidden"
            >
              <div className="project">
                <div className="image-wrapper bg-[#271b2b]">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="text-content">
                  <h2>{p.title}</h2>
                  <p className="text-white-50 md:text-xl">{p.description}</p>
                </div>
                <div className="chips">
                  {p.techStack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="cta-wrapper mt-5">
                  <div className="cta-button hover:bg-blue-900  transition duration-300">
                    <Link className=" primary" to={`/portfolio/${p.slug}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
