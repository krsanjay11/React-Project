import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
// import { useRouter } from "next/router";

// Dynamically generated (SSR)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

// getStaticPaths + getStaticProps to generate static pages (SSG)

function Cabins({ cabin }) {
  // const router = useRouter(); // router.query.cabinId

  return (
    <>
      <Head>
        <title>Cabin {cabin.name} | The Wild Oasis</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabins;
