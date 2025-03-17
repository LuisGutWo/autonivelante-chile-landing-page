export async function fetchMainProducts() {
  const url = process.env.NEXT_MAIN_PRODUCTS_URL;
  if (!url) {
    throw new Error(
      "fetchProducts: NEXT_PRODUCTS_URL is not defined. Make sure you have set the environment variable."
    );
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`fetchProducts: Failed to fetch products, status: ${res.status}`);
    }

    const data = await res.json();
    if (!data) {
      throw new Error("fetchProducts: No data was returned from the API");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("fetchProducts: An error occurred while fetching the products");
  }
}

export async function fetchHomeProducts() {
  if (!process.env.NEXT_HOME_PRODUCTS_URL) {
    throw new Error(
      "fetchProducts: NEXT_STRAPI_URL is not defined. Make sure you have set the environment variable."
    );
  }

  const res = await fetch(process.env.NEXT_HOME_PRODUCTS_URL);

  if (!res.ok) {
    throw new Error(
      `fetchProducts: Failed to fetch products, status: ${res.status}`
    );
  }

  const data = await res.json();
  if (!data) {
    throw new Error("fetchProducts: No data was returned from the API");
  }

  return data;
}
export async function fetchProductsPage() {
  if (!process.env.NEXT_PRODUCTS_PAGE_URL) {
    throw new Error(
      "fetchProducts: NEXT_STRAPI_URL is not defined. Make sure you have set the environment variable."
    );
  }

  const res = await fetch(process.env.NEXT_PRODUCTS_PAGE_URL);

  if (!res.ok) {
    throw new Error(
      `fetchProducts: Failed to fetch products, status: ${res.status}`
    );
  }

  const data = await res.json();
  if (!data) {
    throw new Error("fetchProducts: No data was returned from the API");
  }

  return data;
}
