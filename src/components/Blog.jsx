import { BLOG_DATA } from "./BlogData";

function Blog() {
  // console.log(BLOG_DATA);
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__blog">
          <h2 className="heading__h2 spacing__medium">
            Read Our Tips on Plant Journal
          </h2>
          <div className="blogs">
            {BLOG_DATA.map((blog) => (
              <BlogItem blog={blog[0]} key={blog[0].id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function BlogItem({ blog }) {
  const { tag, author, date, topic, img } = blog;
  console.log(tag, author, date, topic, img);
  return (
    <div className="blog" id="blog">
      <div className="blog__top">
        <img src={img} alt="blog image" />
        <div className="blog__tag">
          <h6 className="heading__h6 spacing__max">{tag}</h6>
        </div>
      </div>
      <div className="blog__middle">
        <p className="paragraph__light">{author}</p>
        <p className="paragraph__light">{date}</p>
      </div>
      <h3 className="heading__h3">{topic}</h3>
    </div>
  );
}
export default Blog;
