import * as React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt, className, width, height }) => (
  <Image src={src} alt={alt} className={className} width={width} height={height} />
);

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => (
  <CustomImage
    src="/images/separator.svg"
    alt=""
    className={`shrink-0 my-auto w-1 border border-solid aspect-[0.5] ${className}`}
    width={24}
    height={24}
  />
);

interface MyComponentProps {
  backgroundImage: string;
  icon: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  backgroundImage,
  icon,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-12 text-base leading-6 whitespace-nowrap min-h-[120px] max-md:px-5">
      <CustomImage
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
        width={1920}
        height={120}
      />
      <div className="flex relative gap-3 ml-60 max-md:ml-2.5">
        <CustomImage src={icon} alt="" className="shrink-0 w-6 aspect-square" width={64} height={64} />
        <Separator className="border-neutral-400 stroke-[1px] stroke-neutral-400" />
        <div className="text-neutral-400">Account</div>
        <Separator className="border-zinc-500 stroke-[1px] stroke-zinc-500" />
        <div className="text-green-600">Login</div>
      </div>
    </section>
  );
};

export default MyComponent;