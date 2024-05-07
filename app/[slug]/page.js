import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Header from "@/components/header/header";
import FormatDate from "@/components/formateDate/formateDate";
import Footer from "@/components/footer/footer";
import Link from "next/link";

async function getData(str) {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/posts/slug/${str}?key=${process.env.NEXT_PUBLIC_GHOST_APY_KEY}&include=authors,tags`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const posts = await getData(params.slug);
  const post = await posts.posts[0];

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className="container single-post-container">
        <h1 style={{ textAlign: "center" }}>{post?.title}</h1>

        <p className="meta">
          {post.primary_author.name} / {FormatDate(post.updated_at)} /{" "}
          {post.primary_tag.name}
        </p>
        <div className="feature-img">
          <img src={post.feature_image} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

        <div className="tags-container">
          {post.tags?.map((x) => {
            return (
              <Link key={x.slug} href={`/tags/${x.slug}`}>
                {x.name}
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
