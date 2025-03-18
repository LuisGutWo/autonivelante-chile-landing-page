import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import Preloader from "@/src/components/elements/Preloader";
import { fetchMainProducts } from "@/src/lib/api";

// Use React.lazy to load components lazily
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);
const CarouselComponent = lazy(() =>
  import("@/src/components/elements/carousel/CarouselComponent")
);

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await fetchMainProducts();
  const products = response ?? [];

  if (!Array.isArray(products)) {
    return [];
  }

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata(context) {
  const { params } = context;
  const response = await fetchMainProducts();

  if (!Array.isArray(response)) {
    console.error("SingleProduct: response.data is not an array", response);
    return { title: "Product not found" };
  }

  const { id } = await params;
  const product = response.find((p) => p?.id?.toString() === id);

  if (!product) {
    console.error(
      "SingleProduct: product is null or undefined",
      params?.id,
      response
    );
    return { title: "Product not found" };
  }

  return {
    title: product?.title ?? "Product not found",
  };
}

export default async function SingleProduct({ params = {} }) {
  const { id: productId } = await params;
  const response = await fetchMainProducts();
  const products = response || [];

  if (!Array.isArray(products)) {
    console.error("SingleProduct: response.data is not an array", response);
    notFound();
  }

  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    console.error(
      "SingleProduct: product is null or undefined",
      productId,
      products
    );
    notFound();
  }

  const { id, title } = product;

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="breadcrumb_container">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: title, href: `/products/${id}` },
          ]}
        />
        <Suspense fallback={<Preloader />}>
          <MainCardDetail product={product} key={`main-${product.id}`} />
          <CarouselComponent product={product} key={`carousel-${product.id}`} />
        </Suspense>
      </Container>
    </Layout>
  );
}
