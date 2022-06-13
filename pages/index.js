import Head from "next/head";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Transition from "../components/Transition";

const Home = () => {
  return (
    <>
      <Head>
        <title>MaintainableCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Brand />
      <Transition className="max-w-3xl mx-auto pt-12 pb-3 px-6 space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 break-words">
          MaintainableCSS
        </h1>

        <p className="text-lg sm:text-xl text-gray-700">
          Write CSS without worrying that overzealous, pre-existing styles will
          cause problems. MaintainableCSS is an approach to writing modular,
          scalable and maintainable CSS.
        </p>

        <div className="flex flex-col text-lg sm:text-xl">
          <i className="text-gray-700">
            “A handy little read on learning how to write modular and
            maintainable CSS.”
          </i>

          <i>
            <strong className="text-gray-900">Smashing Magazine</strong>
          </i>
        </div>

        <div className="flex flex-col text-lg sm:text-xl">
          <i className="text-gray-700">
            “Finally a good book on how to write maintainable CSS.”
          </i>

          <i>
            <strong className="text-gray-900">Alexander Dajani</strong>
          </i>
        </div>

        <div className="flex flex-col text-lg sm:text-xl">
          <i className="text-gray-700">
            “I actually love everything about this.”
          </i>

          <i>
            <strong className="text-gray-900">Simon Taggart</strong>
          </i>
        </div>

        <a
          href="/chapters/introduction"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold uppercase text-sm rounded-md"
        >
          Start Reading
        </a>
      </Transition>

      <Footer />
    </>
  );
};

export default Home;
