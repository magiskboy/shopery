import * as React from "react";
import Image from "next/image";
import Button from "../Button";
import { PiHandbag } from "react-icons/pi";
import Tag from "../Tag/Tag";
import s from "./ProductCard.module.css";

type ProductCardProps = {
  productImageSrc: string;
  productImageAlt: string;
  productName: string;
  productPrice: number;
  productOriginalPrice: number;
  productRating: number;
  tags?: {
    text: string;
    color: string;
  }[];
  onAddToCart: () => void;
};

export function ProductCard({
  productImageSrc,
  productImageAlt,
  productName,
  productPrice,
  productOriginalPrice,
  productRating,
  onAddToCart,
  tags,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col bg-white border border-solid border-neutral-200 leading-[150%] max-w-[264px] ${s["product-card"]}`}
    >
      <div className="flex flex-col justify-center p-3 w-full text-sm text-white whitespace-nowrap">
        {tags && (
          <div className="flex gap-1 w-full">
            {tags.map((tag) => (
              <Tag text={tag.text} className={tag.color} key={tag.text} />
            ))}
          </div>
        )}

        <div className="flex overflow-hidden relative flex-col items-start pt-3 pb-20 w-full aspect-[1.1]">
          <Image
            fill
            src={productImageSrc}
            alt={productImageAlt}
            className="object-cover absolute inset-0"
          />
        </div>
      </div>
      <div className="flex justify-between items-center p-3 w-full">
        <div className="flex flex-col">
          <div className="text-sm text-neutral-600">{productName}</div>
          <div className="flex gap-0.5 text-base whitespace-nowrap">
            <div className="font-medium text-zinc-900">${productPrice}</div>
            <div className="text-neutral-400 line-through">
              ${productOriginalPrice}
            </div>
          </div>
          <div className="mt-1.5 flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < productRating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={onAddToCart}
          className={s["add-product-cart"]}
        >
          <PiHandbag size={20} className={s["add-product-cart-icon"]} />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
