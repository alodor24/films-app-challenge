import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import List from "@/components/List";
import Search from "@/components/Search";
import { CategorieMode } from "@/helpers/contants";
import { Movies, Series } from "@/helpers/types";

type Props = {
  dataMovies: Movies[];
  dataSeries: Series[];
};

const Home: React.FC<Props> = ({ dataMovies, dataSeries }) => {
  return (
    <Layout>
      <Hero bgImage="/images/hero-home.jpg">
        <Search />
      </Hero>
      <List data={dataMovies} mode={CategorieMode.MOVIE} title="Movies" />
      <List
        data={dataSeries}
        mode={CategorieMode.TV}
        title="Series"
        showDropdown={false}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY_DB_MOVIE;

  const urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

  const resMovies = await fetch(urlMovies);
  const dataMovies = await resMovies.json();

  const resSeries = await fetch(urlSeries);
  const dataSeries = await resSeries.json();

  return {
    props: {
      dataMovies: dataMovies.results,
      dataSeries: dataSeries.results,
    },
  };
}

export default Home;
