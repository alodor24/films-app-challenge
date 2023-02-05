import HeroHome from "@/components/HeroHome";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroHome />
      <div style={{ height: "1000px" }}></div>
    </Layout>
  );
};

export default Home;
