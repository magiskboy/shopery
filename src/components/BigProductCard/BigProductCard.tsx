import * as React from "react";
import Image from "next/image";
import Button from "../Button";
import { IoEyeOutline } from "react-icons/io5";
import { PiHeart } from "react-icons/pi";
import s from './BigProductCard.module.css';
import Rate from '../Rate/Rate';

interface BigProductCardProps {
  productImage: string;
  productName: string;
  discountedPrice: number;
  originalPrice: number;
  totalRatings: number;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
}

function BigProductCard({
  productImage,
  productName,
  discountedPrice,
  originalPrice,
  totalRatings,
  daysRemaining,
  hoursRemaining,
  minutesRemaining,
  secondsRemaining,
}: BigProductCardProps) {
  return (
    <div className="flex flex-col bg-white border-green-800 border-solid shadow-sm max-w-[528px] px-2 border">
      <div className="flex overflow-hidden relative flex-col pt-20 pb-6 w-full min-h-[448px] max-md:max-w-full">
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover absolute inset-0"
        />
      </div>
      <div className="flex justify-between items-center gap-4">
        <Button variant="ghost" className={s['like-button']}><PiHeart color="black" size={20} /></Button>
        <Button className="w-9/12" variant='fill'>Add to Cart</Button>
        <Button variant="ghost" className={s['view-button']}><IoEyeOutline color="black" size={20} /></Button>
    </div>
      <div className="flex flex-col items-center px-6 pt-3 w-full leading-[150%] max-md:px-5 max-md:max-w-full">
        <div className="self-stretch text-lg text-center text-green-800 max-md:max-w-full">
          {productName}
        </div>
        <div className="flex gap-1 mt-1 text-2xl whitespace-nowrap">
          <div className="font-medium text-zinc-900">${discountedPrice.toFixed(2)}</div>
          <div className="line-through text-neutral-400">${originalPrice.toFixed(2)}</div>
        </div>
        <div className="flex gap-0 mt-1 text-xs leading-4 text-zinc-500">
          <Rate rate={totalRatings} />
          <div>({totalRatings} Feedback)</div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 pt-5 pb-5 max-w-full text-center w-[251px]">
        <div className="self-center text-sm leading-5 text-neutral-400">
          Hurry up! Offer ends In:
        </div>
        <div className="flex gap-0 justify-around mt-2 font-medium whitespace-nowrap">
          <div className="flex flex-col">
            <div className="self-center text-lg leading-7 text-zinc-900">
              {daysRemaining.toString().padStart(2, "0")}
            </div>
            <div className="text-xs tracking-wide leading-3 uppercase text-neutral-400">
              Days
            </div>
          </div>
          <div className="flex flex-col">
            <div className="self-center text-lg leading-7 text-zinc-900">
              {hoursRemaining.toString().padStart(2, "0")}
            </div>
            <div className="text-xs tracking-wide leading-3 uppercase text-neutral-400">
              Hours
            </div>
          </div>
          <div className="self-start text-xl leading-7 text-zinc-500">:</div>
          <div className="flex flex-col">
            <div className="self-center text-lg leading-7 text-zinc-900">
              {minutesRemaining.toString().padStart(2, "0")}
            </div>
            <div className="text-xs tracking-wide leading-3 uppercase text-neutral-400">
              Mins
            </div>
          </div>
          <div className="self-start text-xl leading-7 text-zinc-500">:</div>
          <div className="flex flex-col">
            <div className="self-center text-lg leading-7 text-zinc-900">
              {secondsRemaining.toString().padStart(2, "0")}
            </div>
            <div className="text-xs tracking-wide leading-3 uppercase text-neutral-400">
              Secs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigProductCard;