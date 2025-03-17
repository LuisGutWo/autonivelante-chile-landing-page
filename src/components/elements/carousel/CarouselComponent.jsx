"use client";
import React from "react";
import CarouselPage from "./CarouselPage";

export default function CarouselComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!process.env.NEXT_PRODUCTS_PAGE_URL) {
        throw new Error(
          "NEXT_PRODUCTS_PAGE_URL environment variable is not defined"
        );
      }
      const cache = await caches.open(process.env.NEXT_PRODUCTS_PAGE_URL);
      const cachedResponse = await cache.match(
        process.env.NEXT_PRODUCTS_PAGE_URL
      );

      if (cachedResponse) {
        setData(await cachedResponse.json());
        return;
      }

      const response = await fetch(process.env.NEXT_PRODUCTS_PAGE_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const newData = await response.json();
      await cache.put(
        process.env.NEXT_PRODUCTS_PAGE_URL,
        new Response(JSON.stringify(newData))
      );
      setData(newData);
    };

    fetchData().catch(console.error);
  }, []);

  if (!data) {
    return null; // or show a loading state
  }

  return (
    <div className="carousel__container">
      <CarouselPage products={data} />
    </div>
  );
}
