import Layout from "@/components/Layout";
import { Parallax } from "react-parallax";

const Hero = "/images/hero-home.jpg";

const Home = () => {
  return (
    <Layout>
      <Parallax bgImage={Hero} bgImageAlt="Parallax" strength={200}>
        <div style={{ height: "400px" }}>
          <p style={{ color: "#fff" }}>Home</p>
        </div>
      </Parallax>

      <div style={{ height: "1000px" }}></div>
    </Layout>
  );
};

export default Home;
