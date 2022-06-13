const Footer = () => {
  return (
    <footer className="py-6 px-6 max-w-3xl mx-auto">
      <h6 className="text-md">
        Written by{" "}
        <a
          className="underline hover:opacity-90 transition-opacity"
          href="https://github.com/adamsilver/"
        >
          Adam Silver
        </a>
        , edited by{" "}
        <a
          className="underline hover:opacity-90 transition-opacity"
          href="https://github.com/emirhanwsd/"
        >
          Emirhan Akpınar
        </a>
        .
      </h6>
    </footer>
  );
};

export default Footer;
