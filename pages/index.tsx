import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title="Home page">
      <h1>Hello Next.js</h1>

      <p>
        <Link href={"/about"}>
          <a>About page</a>
        </Link>
      </p>

      <br />

      <p>
        <Link href="/posts">
          <a>Posts page</a>
        </Link>
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, enim? A,
        animi, quasi harum dolorem sapiente quaerat ut dolores nihil repellat
        ullam corporis aliquam magnam.
      </p>
    </MainLayout>
  );
}
