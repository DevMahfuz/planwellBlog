import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Header from "@/components/header/header";
import Link from "next/link";
import PostPreview from "@/components/post-preview/post-preview";
import Pagination from "../../Pagination";
import Footer from "@/components/footer/footer";

async function getData(num) {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/posts/?key=22444f78447824223cefc48062&include=authors,tags&limit=6&page=${num}`
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
  const posts = await getData(Number(params.id));

  return (
    <>
      <Header />
      <nav aria-label="breadcrumbs">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home/ Planwell Blog</Link>
          </li>
          <li className="breadcrumb-item">page {params.id}</li>
        </ul>
      </nav>
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
