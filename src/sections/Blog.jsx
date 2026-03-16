import React from "react";
import TitleHeader from "../components/TitleHeader";
import posts from "../constants/posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="section-padding">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        <TitleHeader
          title="Understand Design Choices"
          sub="🖊️ Technical Blog"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card h-full rounded-2xl border border-white/10 bg-black-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-56 md:h-60 overflow-hidden border-b border-white/10 bg-black-200">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="mb-4">
                    <p className="text-sm text-blue-50 mb-3">{post.date}</p>
                    <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                      {post.title}
                    </h2>
                  </div>

                  <p className="text-white-50 text-sm md:text-base leading-7 mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(post.tags || []).map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 relative z-10"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
