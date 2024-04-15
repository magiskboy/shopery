import * as React from "react";
import Image from "next/image";
import Button from "../Button";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ProductItemProps {
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageUrl,
  name,
  quantity,
  price,
}) => (
  <div className="flex gap-2 items-center bg-white">
    <Image
      src={imageUrl}
      alt={name}
      width={120}
      height={100}
      className="shrink-0 self-stretch max-w-full aspect-[1.2]"
    />
    <div className="flex flex-col self-stretch my-auto flex-1">
      <div className="text-zinc-900">{name}</div>
      <div className="flex gap-1 text-zinc-500">
        <div>{quantity} kg</div>
        <div>x</div>
        <div className="my-auto font-semibold leading-[120%] text-zinc-900">
          {price.toFixed(2)}
        </div>
      </div>
    </div>
    <Button variant="ghost">
      <IoCloseCircleOutline size={20} />
    </Button>
  </div>
);

type Props = {
  products: ProductItemProps[];
};

export const CartPopup: React.FC<Props> = ({ products }) => {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="flex flex-col p-6 text-sm leading-5 bg-white shadow-sm max-w-[424px] border">
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <ProductItem {...product} />
          {index < products.length - 1 && (
            <div className="shrink-0 mt-4 h-px border border-solid bg-neutral-200 border-neutral-200" />
          )}
        </React.Fragment>
      ))}
      <div className="flex gap-5 justify-between py-4 mt-4 text-base bg-white shadow-sm text-zinc-900">
        <div>{products.length} Product</div>
        <div className="font-medium text-right">
          {totalPrice.toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}
        </div>
      </div>
      <div className="flex flex-col mt-4 font-semibold leading-[120%] gap-2">
        <Button>Checkout</Button>
        <Button variant="border">Go To Cart</Button>
      </div>
    </div>
  );
};
