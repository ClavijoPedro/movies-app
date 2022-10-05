// import axios from 'axios';
import axios from './../utils/customAxios';
import { useEffect, useState } from 'react';

// export function useFetch(url) {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get(url);
// 				setData(response.data);
// 			} catch (error) {
// 				console.log(error.message);
// 				setError(true);
// 			}

// 			setLoading(false);
// 		};

// 		fetchData();
// 	}, [url]);

// 	return { data, loading, error };
// }

// import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
                headers: {
                        Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmQzMzAyOGJjNTM3NzAyZjZjNGJkOTNjMjQ3ODIxYiIsInN1YiI6IjYzMzRhNGZhMjA5ZjE4MDA4NWRhNzdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1sqPCtvJjoEYFviBR3FWofLsJ_vH9prJn5seuySz5Oo',
                        'Content-Type': 'application/json;charset=utf-8',
                    },

        });
        const json = await res.json();
        setData(json.results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    doFetch();
  }, [url]);

  return { data, loading, error };
}
