"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

import { formatPrice } from "@/src/config/formatPrice";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";

const safeFormatPrice = (price) => {
  if (price === undefined || price === null) {
    console.warn(
      "An error occurred while trying to display the product price on the card",
      "No se encontró el precio del producto"
    );
    return "N/A";
  }
  return formatPrice(price);
};

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();

  function handleDeleteItem(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success(
      `${cartItem?.title || cartItem?.name} se removió con éxito del carrito`
    );
  }
  function handleIncrementQty(cartId) {
    dispatch(incrementQty(cartId));
  }
  function handleQtyDecrement(cartId) {
    dispatch(decrementQty(cartId));
  }

  return (
    <tr className="w_200">
      <td colSpan="4" className="prod-column">
        <div className="column-box">
          <Button
            onClick={() => handleDeleteItem(cartItem.id)}
            className="bg-transparent border-0"
          >
            <Trash2 className="text-danger" />
          </Button>

          <Image
            src={cartItem?.image}
            className="img-fluid"
            priority
            unoptimized
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 100px) 100vw, 100px"
            alt={cartItem?.title || cartItem?.name || "Product Image"}
          />

          <div className="prod-title">
            <h3 className="card-title fw-bold">{cartItem?.title}</h3>
          </div>
        </div>
      </td>
      <td className="price">
        <span className="pe-3">
          {safeFormatPrice(cartItem?.price * cartItem?.qty)}
        </span>
        <span className="text-primary">(x{cartItem.qty})</span>
      </td>
      <td className="qty">
        <div className="item-quantity">
          <div className="cart__items-qty d-flex align-items-center p-1 b_radius_10 b_shadow_3">
            <Button
              onClick={() => {
                if (cartItem.qty === 1) {
                  if (confirm("Desea eliminar este producto?")) {
                    handleDeleteItem(cartItem.id);
                  }
                } else {
                  handleQtyDecrement(cartItem.id);
                }
              }}
              className="btn py-1 px-2"
            >
              <Minus />
            </Button>
            <p className="d-flex justify-content-center align-items-center flex-grow-1 text-center">
              {cartItem?.qty}
            </p>
            <Button
              onClick={() => handleIncrementQty(cartItem.id)}
              className="btn py-1 px-2"
            >
              <Plus />
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
}
