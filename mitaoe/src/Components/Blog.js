import React from 'react';

import '../Components/Blog.css';
import B1 from '../Image/B1.jpeg';
import B2 from '../Image/B2.jpeg';
import B3 from '../Image/B3.jpeg';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-box">
        <img src={B1} alt="Blog 1" className="blog-img" />
        <h2>Blog Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at orci ac nisi imperdiet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#" className="read-more-btn">Read More</a>
      </div>
      <div className="blog-box">
        <img src={B2} alt="Blog 2" className="blog-img" />
        <h2>Blog Title 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at orci ac nisi imperdiet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#" className="read-more-btn">Read More</a>
      </div>
      <div className="blog-box">
        <img src={B3} alt="Blog 3" className="blog-img" />
        <h2>Blog Title 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at orci ac nisi imperdiet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <a href="#" className="read-more-btn">Read More</a>
      </div>
    </div>
  );
}

export default Blog;
