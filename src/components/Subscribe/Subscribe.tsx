import Button from "../Button";

interface SubscribeProps {
  socialIcons: string[];
  logo: string;
  paymentIcons: string[];
}

export const Subscribe: React.FC<SubscribeProps> = ({
  socialIcons,
  logo,
  paymentIcons,
}) => {
  return (
    <section className="flex justify-center items-center px-16 py-10 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1320px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-stretch max-md:max-w-full">
          <h2 className="text-2xl font-semibold leading-9 text-zinc-900 max-md:max-w-full">
            Subcribe our Newsletter
          </h2>
          <p className="mt-1 text-sm leading-5 text-neutral-400 max-w-[448px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <form>
          <label htmlFor="email" className="sr-only">
            Your email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-[400px] pr-10 mr-[-100px] justify-center items-start self-stretch px-6 py-3.5 my-auto text-base leading-6 bg-white border border-solid border-neutral-200 rounded-[46px] text-zinc-500"
          />
          <Button type="fill" size="medium">Subscribe</Button>
        </form>
        <div className="flex gap-2 self-stretch my-auto">
          {socialIcons.map((icon, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              loading="lazy"
              src={icon}
              alt=""
              className="shrink-0 w-10 aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
