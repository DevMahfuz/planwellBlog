import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://demo.ghost.io",
  key: "22444f78447824223cefc48062",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts.browse().catch((err) => {
    console.error(err);
  });
}
