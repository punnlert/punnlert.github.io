import { filteredPosts } from '$lib/data/blog-posts';
import graphics from '$lib/data/graphics';

export async function load() {
  return {
    posts: filteredPosts,
    graphics
  };
}
