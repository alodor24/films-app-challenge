import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { id, detail } = router.query;
  const [data, setData] = useState({});
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
    <div>
      {loading ? (
        <div style={{ color: "#fff" }}>Loading...!!</div>
      ) : (
        <Layout>{/* <Hero bgImage={} /> */}</Layout>
      )}
    </div>
  );
};

export default Detail;
