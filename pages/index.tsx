import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import List from "@/components/List";
import Search from "@/components/Search";
import Selector from "@/components/Selector";
import useFilterContext from "@/context/FilterContext/useFilterContext";
import { CategorieMode } from "@/helpers/contants";
import { Movies, Series } from "@/helpers/types";
import useStoreFavorite from "@/hooks/useStoreFavorite";

type Props = {
  dataMovies: Movies[];
  dataSeries: Series[];
};

const Home: React.FC<Props> = ({ dataMovies, dataSeries }) => {
  const { filter } = useFilterContext();
  const { favorites } = useStoreFavorite();

  return (
    <Layout>
      <Hero bgImage="/images/hero-home.jpg">
        <Search />
      </Hero>

      <Selector />

      {filter === CategorieMode.ALL && (
        <>
          <List data={dataMovies} mode={CategorieMode.MOVIE} title="Movies" />
          <List data={dataSeries} mode={CategorieMode.TV} title="Series" />
          <List
            data={favorites}
            mode={CategorieMode.FAVORITE}
            title="Favorites"
          />
        </>
      )}

      {filter === CategorieMode.MOVIE && (
        <List data={dataMovies} mode={CategorieMode.MOVIE} title="Movies" />
      )}

      {filter === CategorieMode.TV && (
        <List data={dataSeries} mode={CategorieMode.TV} title="Series" />
      )}

      {filter === CategorieMode.FAVORITE && (
        <List
          data={favorites}
          mode={CategorieMode.FAVORITE}
          title="Favorites"
        />
      )}
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
