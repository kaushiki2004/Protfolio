import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/projects";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = project
      ? `${project.title} | Portfolio`
      : "Project Not Found | Portfolio";
  }, [project]);

  if (!project) {
    return (
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="card rounded-2xl border border-white/10 bg-black-100 p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Project not found
            </h1>
            <p className="text-white-50 text-base md:text-lg mb-6">
              That slug doesn’t match any project in your data file.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="mb-8 md:mb-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-sm md:text-base text-blue-50 hover:text-white transition-colors mb-6"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white max-w-4xl">
            {project.title}
          </h1>

          <p className="text-white-50 text-base md:text-lg leading-8 mt-5 max-w-4xl">
            {project.description}
          </p>
        </div>

        <article className="card rounded-2xl border border-white/10 bg-black-100 overflow-hidden">
          <div className="w-full h-[240px] md:h-[380px] xl:h-[460px] overflow-hidden border-b border-white/10 bg-black-200">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 xl:p-12">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                Highlights
              </h2>

              <ul className="space-y-4">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-white-50 text-base md:text-lg leading-8 pl-6 relative"
                  >
                    <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-white" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  View GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black text-white px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-black-200"
                >
                  Visit Live Site
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
