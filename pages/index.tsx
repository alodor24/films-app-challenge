import HeroHome from "@/components/HeroHome";
import Layout from "@/components/Layout";
import List from "@/components/List";
import { CategorieMode } from "@/helpers/contants";
import { Movies } from "@/helpers/types";

type Props = {
  dataMovies: Movies[];
};

const Home: React.FC<Props> = ({ dataMovies }) => {
  return (
    <Layout>
      <HeroHome />
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
