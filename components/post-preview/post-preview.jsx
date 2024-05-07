import Image from "next/image";
import Link from "next/link";
import FormatDate from "../formateDate/formateDate";
const PostPreview = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className="post-item-wrapper">
      <Image
        src={post.feature_image}
        width={300}
        height={300}
        alt="feature image"
      />
      <div className="tag-name">{post.primary_tag?.name}</div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="meta">
        <span className="author">{post.primary_author.name}</span>
        <span className="date">{FormatDate(post.created_at)}</span>
      </div>
    </Link>
  );
};

export default PostPreview;
