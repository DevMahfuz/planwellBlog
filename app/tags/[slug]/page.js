import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Header from "@/components/header/header";

import PostPreview from "@/components/post-preview/post-preview";
import Pagination from "../../Pagination";
import Footer from "@/components/footer/footer";

async function getData(str) {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_APY_KEY}&include=authors,tags&limit=6&filter=tag:${str}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TagPage({ params }) {
  const posts = await getData(params.slug);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <h1 style={{ textAlign: "center" }}>Planwell Blog</h1>

      <main className="container posts-container">
        {posts.posts?.map((post) => {
          return <PostPreview post={post} key={post.id} />;
        })}
      </main>
      <div className="pagination-container">
        {posts.meta.pagination.pages > 1 ? (
          <Pagination pagination={posts.meta.pagination} />
        ) : null}
      </div>
      <Footer />
    </>
  );
}
