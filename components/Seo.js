import Head from "next/head";

export default function Seo({ title }) {
  const fullTitle = `${title} | Next Movies`;
  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
