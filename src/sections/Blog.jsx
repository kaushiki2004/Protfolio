import React from 'react'
import TitleHeader from '../components/TitleHeader'
import posts from "../constants/posts"
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Understand Design Choices" sub="🖊️Technical Blog" />

        <div className=" lg:columns-3 md:columns-2 columns-1 mt-16 ">
          {posts.map((post) => (
            <article className="card pad py-10" key={post.id}>
              <div className="row-between">
                <div className="image-wrapper bg-[#271b2b]">
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="text-content mt-5">
                  <h2 className="  text-white-50 md:text-xl">{post.title}</h2>
                  <div className="muted ">{post.date}</div>
                </div>
              </div>

              <p className="muted">{post.excerpt}</p>

              <div className="chips">
                {(post.tags || []).map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="cta-wrapper mt-5 w-30">
                <div className="cta-button hover:bg-blue-900  transition duration-300">
                  <Link className=" primary" to={`/blog/${post.slug}`}>
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog