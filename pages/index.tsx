import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import List from "@/components/List";
import Search from "@/components/Search";
import { CategorieMode } from "@/helpers/contants";
import { Movies } from "@/helpers/types";

type Props = {
  dataMovies: Movies[];
};

const Home: React.FC<Props> = ({ dataMovies }) => {
  return (
    <Layout>
      <Hero bgImage="/images/hero-home.jpg">
        <Search />
      </Hero>
      <List data={dataMovies} mode={CategorieMode.MOVIE} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY_DB_MOVIE;

  const urlMovies =
    "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY;

  const resMovies = await fetch(urlMovies);
  const dataMovies = await resMovies.json();

  return {
    props: {
      dataMovies: dataMovies.results,
    },
  };
}

export default Home;
