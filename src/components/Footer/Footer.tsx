import * as React from "react";

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col leading-[150%]">
      <h3 className="text-base font-medium text-white">{title}</h3>
      <ul className="flex flex-col mt-5 text-sm text-neutral-400">
        {links.map((link, index) => (
          <li key={index} className={index > 0 ? "mt-3" : ""}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

interface FooterProps {
  logo: string;
  paymentIcons: string[];
}

export const Footer: React.FC<FooterProps> = ({ logo, paymentIcons }) => {
  return (
    <footer className="flex justify-center items-center px-16 pt-16 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col self-stretch text-sm font-medium text-white">
            <div className="flex gap-2 text-3xl tracking-tighter leading-10 whitespace-nowrap">
              <img loading="lazy" src={logo} alt="Ecobazar logo" className="shrink-0 my-auto w-8 aspect-square" />
              <h2>Ecobazar</h2>
            </div>
            <p className="mt-4 leading-5 text-zinc-500">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-4 pr-14 mt-4 leading-[150%] max-md:pr-5">
              <p className="justify-center py-1.5 shadow-sm bg-zinc-900">(219) 555-0114</p>
              <p className="my-auto text-base text-zinc-500">or</p>
              <p className="justify-center py-1.5 whitespace-nowrap shadow-sm bg-zinc-900">Proxy@gmail.com</p>
            </div>
          </div>
          <FooterLink title="My Account" links={["My Account", "Order History", "Shoping Cart", "Wishlist"]} />
          <FooterLink title="Helps" links={["Contact", "Faqs", "Terms & Condition", "Privacy Policy"]} />
          <FooterLink title="Proxy" links={["About", "Shop", "Product", "Track Order"]} />
          <FooterLink title="Categories" links={["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"]} />
        </div>
        <div className="flex gap-5 justify-between py-6 mt-16 w-full shadow-sm bg-zinc-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <p className="my-auto text-sm leading-5 text-zinc-500">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex gap-2 text-white whitespace-nowrap leading-[100%]">
            {paymentIcons.map((icon, index) => (
              <img key={index} loading="lazy" src={icon} alt="" className="shrink-0 aspect-[1.41] w-[45px]" />
            ))}
            <div className="flex flex-col justify-center">
              <div className="flex flex-col px-1.5 py-1 w-full rounded-md border border-solid bg-zinc-900 border-zinc-800">
                <div className="flex gap-0.5 text-xs">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f22a075a26811cb81b577baf8816037e44ed135adc862ca7b5cebb75303a04b?apiKey=1d65eaa227da48a9908a318b50c4785b&" alt="" className="shrink-0 aspect-square fill-zinc-900 w-[11px]" />
                  <span>Secure</span>
                </div>
                <p className="text-xs font-semibold text-center">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

