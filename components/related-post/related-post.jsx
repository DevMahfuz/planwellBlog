import PostPreview from "../post-preview/post-preview";

async function getRelatedPost(str) {
  const res = await fetch(
    `https://demo.ghost.io/ghost/api/content/posts?key=${process.env.NEXT_PUBLIC_GHOST_APY_KEY}&include=authors,tags&limit=3&filter=tag:${str}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RelatedPost({ tagName }) {
  const posts = await getRelatedPost(tagName);

  return (
    <>
      <main className="container posts-container">
        {posts.posts?.map((post) => {
          return <PostPreview post={post} key={post.id} />;
        })}
      </main>
    </>
  );
}
