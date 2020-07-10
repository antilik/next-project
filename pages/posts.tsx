import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MainLayout } from "../components/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URI}/posts`);
      const data = await response.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
    return () => {
      setPosts([]);
    };
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Posts page">
      <h1>Posts page</h1>

      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>

      <style jsx>{`
        li {
          list-style-type: none;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch(`${process.env.API_URI}/posts`);
  const posts: MyPost[] = await response.json();

  return {
    posts,
  };
};
