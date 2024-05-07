import Header from "@/components/header/header";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import Footer from "@/components/footer/footer";

async function getData() {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/tags/?key=${process.env.NEXT_PUBLIC_GHOST_APY_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Tags() {
  const data = await getData();

  return (
    <>
      <Header />
      <Breadcrumbs />
      <h1 style={{ textAlign: "center" }}>Tags</h1>

      <main className="container posts-container">
        <div className="tags-container">
          {data.tags?.map((x) => {
            return (
              <Link key={x.id} href={`/tags/${x.slug}`}>
                {x.name}
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
