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
      <section className="container section">
        <div className="card pad">
          <h1 className="h1">Project not found</h1>
          <p className="muted">
            That slug doesn’t match any project in your data file.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/portfolio">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container section">
      <div className="page-head">
        <h1 className="h1">{project.title}</h1>
        <p className="muted">{project.description}</p>
      </div>

      <div className="card">
        <div className="detail-hero">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        <div className="pad">
          <h2 className="h2">Tech Stack</h2>
          <div className="chips">
            {project.techStack.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div className="divider" />

          <h2 className="h2">Highlights</h2>
          <ul className="list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="divider" />

          <div className="actions">

            {project.githubUrl && (
              <a
                className="btn primary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                className="btn ghost"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
