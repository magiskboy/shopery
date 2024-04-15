import * as React from "react";
import Image from "next/image";
import Link from 'next/link'

interface EventCardProps {
  image: string;
  date: string;
  month: string;
  category: string;
  author: string;
  comments: number;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  date,
  month,
  category,
  author,
  comments,
  title,
}) => {
  return (
    <article className="flex flex-col max-w-[424px]">
      <div className="flex overflow-hidden relative flex-col items-start px-6 pt-20 pb-6 w-full font-medium text-center whitespace-nowrap min-h-[324px]">
        <Image src={image} alt="" fill className="object-cover absolute" />
        <div className="flex relative flex-col px-4 py-3.5 mt-40 rounded bg-white bg-opacity-80 h-[58px] w-[58px] justify-center">
          <time className="text-xl leading-8 text-zinc-900">{date}</time>
          <div className="text-xs tracking-wide leading-3 uppercase text-zinc-500">
            {month}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 w-full bg-white rounded-none">
        <div className="flex flex-col">
          <div className="flex gap-4 pr-20 text-sm leading-5 text-neutral-600">
            <div className="flex gap-1 whitespace-nowrap">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eaf7680dc79cc4c8008e7a9babdfca0d9cde78d85af423c8fe31e3d51f1dc97?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
                alt=""
                width={20}
                height={20}
                className="shrink-0 self-start"
              />
              <div>{category}</div>
            </div>
            <div className="flex gap-1">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3ab8d4a52b6ca7a903dd6410e0238a0c289e5c27765184f0744c3006d8946a?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
                alt=""
                width={20}
                height={20}
                className="shrink-0 self-start"
              />
              <div>
                <span className="text-zinc-500">By</span> {author}
              </div>
            </div>
            <div className="flex gap-1 text-stone-500">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcf0f402a2ce3c7ed81c1e4875c8ac169c1b6ff3f5a8dd0876fe7341b120112?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
                alt=""
                width={18}
                height={18}
                className="shrink-0 my-auto"
              />
              <div>{comments} Comments</div>
            </div>
          </div>
          <h3 className="mt-2 text-lg font-medium leading-7 text-zinc-900">
            {title}
          </h3>
        </div>
        <div className="flex gap-3 self-start mt-5 text-base font-semibold leading-5 text-green-600 rounded-[43px]">
          <Link href="/">Read More</Link>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821f62952f52860fbf2e3fce2f1dccccf89d162d4755f2f4bc4ea818eec75f9?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
            alt=""
            width={15}
            height={13}
            className="shrink-0 my-auto"
          />
        </div>
      </div>
    </article>
  );
};

export default EventCard;
