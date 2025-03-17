import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { notFound } from "next/navigation";
import Preloader from "@/src/components/elements/Preloader";
import { fetchHomeProducts } from "@/src/lib/api";

// Use React.lazy to load components lazily
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);

export async function generateStaticParams() {
  const response = await fetchHomeProducts();
  const products = response ?? [];

  if (!Array.isArray(products)) {
    return [];
  }

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const response = await fetchHomeProducts();
  const products = response || [];

  if (!Array.isArray(products)) {
    console.error("SingleProduct: response.data is not an array", response);
    return { title: "Product not found" };
  }

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    console.error(
      "SingleProduct: product is null or undefined",
      params.id,
      products
    );
    return { title: "Product not found" };
  }

  return {
    title: product.title,
  };
}

export default async function SingleHomeProduct({ params: paramsPromise }) {
  const params = await paramsPromise;
  const response = await fetchHomeProducts();
  const products = response || [];

  if (!Array.isArray(products)) {
    console.error("SingleProduct: response.data is not an array", response);
    notFound();
  }

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    console.error(
      "SingleProduct: product is null or undefined",
      params.id,
      products
    );
    notFound();
  }

  const { id, title } = product;

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: title, href: `/homeproducts/${id}` },
          ]}
        />
        <Suspense fallback={<Preloader />}>
          <MainCardDetail product={product} key={product.id} />
        </Suspense>
      </Container>
    </Layout>
  );
}
