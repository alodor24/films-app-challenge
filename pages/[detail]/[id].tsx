import Description from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { BASE_URL_IMAGE, CategorieMode } from "@/helpers/contants";
import { Movie, Serie } from "@/helpers/types";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { id, detail } = router.query;
  const [data, setData] = useState<Movie | Serie | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const getDetailById = useCallback(async () => {
    if (id && detail) {
      try {
        setLoading(true);
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY_DB_MOVIE;
        const url = `https://api.themoviedb.org/3/${detail}/${id}?api_key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [detail, id]);

  useEffect(() => {
    if (detail !== CategorieMode.FAVORITE) {
      getDetailById();
    }
  }, [detail, getDetailById]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data && (
            <>
              <Hero bgImage={BASE_URL_IMAGE + data.backdrop_path}>
                <Header data={data} />
              </Hero>
              <Description data={data} />
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Detail;
