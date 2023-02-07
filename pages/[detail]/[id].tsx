import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { BASE_URL_IMAGE } from "@/helpers/contants";
import { Movie, Serie } from "@/helpers/types";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { id, detail } = router.query;
  const [data, setData] = useState<Movie | Serie | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  console.log(data);

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
    getDetailById();
  }, [getDetailById]);

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
              <div style={{ height: "500px" }}></div>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Detail;
