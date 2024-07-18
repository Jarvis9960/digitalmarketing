import React from "react";
import "../css/blogpage.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Marketing",
      content: "This is the content of the first blog post ",
    },
    {
      id: 2,
      title: "Another Blog Post",
      content: "This is the content of another blog post.",
    },
    {
      id: 3,
      title: "Yet Another Post",
      content: "This is the content of yet another blog post.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#EDEDED" }}>
      <Navbar />
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2 className="blog-title">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
