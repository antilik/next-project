import Router from "next/router";

import { MainLayout } from "../../components/MainLayout";

interface AboutPageProps {
  title: string;
}

export default function About({ title }: AboutPageProps) {
  const linkClickHandler = () => Router.push("/");

  return (
    <MainLayout title="About page">
      <h1>{title}</h1>

      <button onClick={linkClickHandler}>Go to home</button>
      <button onClick={() => Router.push("/posts")}>Go back to posts</button>
      <br />
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const result = await fetch(`${process.env.API_URI}/about`);
  const data: AboutPageProps = await result.json();

  return {
    title: data.title,
  };
};
