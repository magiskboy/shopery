import * as React from "react";
import Image from "next/image";
import Link from 'next/link';

interface StoreLocationProps {
  location: string;
}

const StoreLocation: React.FC<StoreLocationProps> = ({ location }) => (
  <div className="flex gap-2">
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb159b06de7ca6cc54fa39af40e1e51b23aa5a142227387dbcd5f0c6e18806b5?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
      alt=""
      width={15}
      height={18}
      className="shrink-0"
    />
    <div>Store Location: {location}</div>
  </div>
);

interface LanguageCurrencyProps {
  languages: string[];
  currencies: string[];
}

const LanguageCurrency: React.FC<LanguageCurrencyProps> = ({
  languages,
  currencies,
}) => (
  <div className="flex gap-5 text-center whitespace-nowrap">
    {languages.map((language) => (
      <div key={language} className="flex gap-1.5">
        <div>{language}</div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90efde3b84da930c9b59f35ed0a2a3ed600270b55584817488a0ced84e283b8c?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
          alt=""
          width={7}
          height={4}
          className="shrink-0 my-auto"
        />
      </div>
    ))}
    {currencies.map((currency) => (
      <div key={currency} className="flex gap-1.5">
        <div>{currency}</div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90efde3b84da930c9b59f35ed0a2a3ed600270b55584817488a0ced84e283b8c?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
          alt=""
          width={7}
          height={4}
          className="shrink-0 my-auto"
        />
      </div>
    ))}
  </div>
);

const TopBar: React.FC = () => (
  <div className="flex justify-center items-center px-16 py-3 w-full text-xs leading-4 shadow-sm bg-zinc-800 text-zinc-400 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-w-[1320px] max-md:flex-wrap max-md:max-w-full">
      <StoreLocation location="Lincoln- 344, Illinois, Chicago, USA" />
      <div className="flex gap-5 justify-between self-start">
        <LanguageCurrency languages={["Eng"]} currencies={["USD"]} />
        <div className="flex gap-1">
          <Link href="/login">Sign In</Link>
          <div>/</div>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
);

const SearchBar: React.FC = () => (
  <div className="flex gap-0 self-stretch whitespace-nowrap rounded-md border border-solid border-neutral-200 max-md:flex-wrap">
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="flex gap-2 py-3 pr-5 pl-4 text-base leading-5 text-zinc-500">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d66d66d0b5b46fac3a584d5b042551084af1ba26388eff1f02009db05a15a192?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
        alt=""
        width={20}
        height={20}
        className="shrink-0 self-start"
      />
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="bg-transparent focus:outline-none"
        aria-label="Search"
      />
    </div>
    <button
      type="submit"
      className="justify-center px-6 py-3.5 text-sm font-semibold leading-4 text-white bg-green-600 rounded-none max-md:px-5"
    >
      Search
    </button>
  </div>
);

const ShoppingCart: React.FC = () => (
  <div className="flex gap-3">
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb55bd693a6205237fc577dbb2338f5e3ae0f6a017d9e97ade02e4cd10a1c4fe?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
      alt=""
      width={34}
      height={34}
      className="shrink-0"
    />
    <div className="flex flex-col">
      <div className="text-xs leading-3 text-neutral-600">Shopping cart:</div>
      <div className="mt-2 text-sm font-medium leading-4 text-zinc-900">
        $57.00
      </div>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="flex justify-center items-center px-16 py-6 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between items-center w-full max-w-[1320px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2 self-stretch my-auto text-3xl font-medium tracking-tighter leading-10 whitespace-nowrap text-green-950">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/226f5a39e9d51e775dcf55eb2022c7d2234909f31c53637bd89cd4c386a97842?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
          alt=""
          width={32}
          height={32}
          className="shrink-0 my-auto"
        />
        <div>Ecobazar</div>
      </div>
      <SearchBar />
      <div className="flex gap-4 justify-between self-stretch my-auto">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df90dc71dac20ed8e5f23f1e131103bee25e02af9d4fb4329fdd222dbcd78db6?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
          alt=""
          width={32}
          height={32}
          className="shrink-0 self-start"
        />
        <ShoppingCart />
      </div>
    </div>
  </header>
);

const Navigation: React.FC = () => (
  <nav className="flex justify-center items-center px-16 py-4 w-full text-sm font-medium leading-5 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-w-[1320px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-7 justify-between my-auto text-stone-500 max-md:flex-wrap">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Pages</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="flex gap-2 text-zinc-900">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c5fa6720cc2e7ccf6a9933e3f076e7de6a023d4b962785417ea86731c34c29?apiKey=19dd9cda44174f2b9e30a7b65a715630&"
          alt=""
          width={28}
          height={28}
          className="shrink-0"
        />
        <div className="my-auto">(219) 555-0114</div>
      </div>
    </div>
  </nav>
);

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navigation />
    </div>
  );
};

export default MyComponent;