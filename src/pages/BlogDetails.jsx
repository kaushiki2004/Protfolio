import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../constants/posts";

function renderSimpleMarkdown(md) {
  const lines = md.trim().split("\n");

  return lines.map((line, idx) => {
    if (line.startsWith("### ")) {
      return (
        <h3
          className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3"
          key={idx}
        >
          {line.replace("### ", "")}
        </h3>
      );
    }

    if (line.startsWith("## ")) {
      return (
        <h2
          className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-4"
          key={idx}
        >
          {line.replace("## ", "")}
        </h2>
      );
    }

    if (line.startsWith("# ")) {
      return (
        <h1
          className="text-3xl md:text-4xl font-bold text-white mt-8 mb-5"
          key={idx}
        >
          {line.replace("# ", "")}
        </h1>
      );
    }

    if (line.startsWith("- ")) {
      return (
        <li className="text-white-50 leading-8 ml-5 list-disc" key={idx}>
          {line.replace("- ", "")}
        </li>
      );
    }

    if (!line.trim()) {
      return <div className="h-4" key={idx} />;
    }

    if (line.trim() === "---") {
      return <div className="my-8 h-px w-full bg-white/10" key={idx} />;
    }

    return (
      <p
        className="text-white-50 leading-8 text-base md:text-lg mb-4"
        key={idx}
      >
        {line}
      </p>
    );
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} | Blog` : "Post Not Found | Blog";
  }, [post]);

  if (!post) {
    return (
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="card rounded-2xl border border-white/10 bg-black-100 p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Post not found
            </h1>
            <p className="text-white-50 text-base md:text-lg mb-6">
              That slug doesn’t match any post in your data file.
            </p>
            <div className="flex items-center">
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1"
                to="/blog"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 md:mb-12">
          <Link
            to="/#blog"
            className="inline-flex items-center text-sm md:text-base text-blue-50 hover:text-white transition-colors mb-6"
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap gap-3 mb-5">
            {(post.tags || []).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white max-w-4xl">
            {post.title}
          </h1>

          <p className="text-blue-50 text-sm md:text-base mt-4">{post.date}</p>
        </div>

        <article className="card rounded-2xl border border-white/10 bg-black-100 overflow-hidden">
          {post.coverImage && (
            <div className="w-full h-[240px] md:h-[380px] xl:h-[460px] overflow-hidden border-b border-white/10">
              <img
                src={post.coverImage}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-10 xl:p-12">
            <div className="blog-content">
              {renderSimpleMarkdown(post.content)}
            </div>

            
          </div>
        </article>
      </div>
    </section>
  );
}
