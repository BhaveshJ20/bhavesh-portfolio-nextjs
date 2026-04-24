import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProjectDetail from "../../components/ProjectDetail";
import DATA from "../../data/data";

export default function ProjectPage({ project }: { project: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - Bhavesh J20</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProjectDetail 
          project={project} 
          goBack={() => router.back()} 
          go={(page: string) => router.push(`/${page}`)} 
          openProject={(proj: any) => router.push(`/projects/${proj.slug}`)} 
        />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = DATA.projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}
