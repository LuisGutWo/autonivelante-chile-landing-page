"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { formatPrice } from "@/src/config/formatPrice";
import { Files } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductCard({ product, id }) {
  const dispatch = useDispatch();

  if (!product) {
    console.warn(
      "An error occurred while trying to display the product on the card",
      "No se encontró información del producto"
    );
    return null;
  }

  const handleAddItemToCart = () => {
    if (!product) {
      console.error(
        "Ocurrió un error al intentar agregar el producto al carrito",
        "No se encontró información del producto"
      );
      return;
    }

    try {
      dispatch(addToCart(product));
      toast.success(
        `${product?.title} Se agrego satisfactoriamente al carrito!`
      );
    } catch (error) {
      console.error(
        "Ocurrió un error al agregar el producto al carrito",
        error
      );
      toast.error("Ocurrió  un error al agregar el producto al carrito");
    }
  };

  return (
    <section
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="500ms"
      data-wow-duration="1000ms"
    >
      <div className="card main__card">
        <Link
          className="main__card-img-container"
          href={`/products/${product?.id}`}
        >
          <Image
            height={product?.imageHeight || 200}
            width={product?.imageWidth || 100}
            src={product?.image}
            className="card-img-top"
            alt="Product card main Image"
          />
        </Link>
        <div className="card-body">
          {product?.title && (
            <h3 className="card-title fw-bold">{product?.title}</h3>
          )}
          <div className="card-price fw-bold">
            {product?.price && (
              <div className="card-price fw-bold">
                {formatPrice(product?.price)}
              </div>
            )}
          </div>
        </div>
        <div className="buttons__card">
          {product?.id && (
            <Link
              key={id}
              href={`/products/${product?.id}`}
              className="btn btn-outline-primary btn-lg d-flex justify-content-evenly align-content-center gap-4 ps-4"
            >
              <b className="fs-5">Ver detalle</b>
              <Files />
            </Link>
          )}

          <Button
            onClick={handleAddItemToCart}
            className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
          >
            <b>Agregar al carro</b>
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </section>
  );
}
