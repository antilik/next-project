import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | My project</title>
        <meta name="description" content="this is my little next project" />
        <meta name="keywords" content="next,javascript,next project" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>

      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          font-weight: 700;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }
        nav a:hover {
          color: yellow;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
