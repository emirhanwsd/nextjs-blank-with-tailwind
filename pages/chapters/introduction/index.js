import Head from "next/head";
import Brand from "../../../components/Brand";
import Footer from "../../../components/Footer";
import Chapters from "../../../components/Chapters";
import Transition from "../../../components/Transition";

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Introduction — MaintainableCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Brand />
      <Transition className="max-w-3xl mx-auto py-12 px-6 space-y-8">
        <span className="text-md font-bold text-gray-500 uppercase">
          Chapter 1
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 break-words">
          Introduction
        </h1>

        <p className="text-lg sm:text-xl text-gray-700">
          MaintainableCSS is an approach to writing modular, scalable and
          maintainable CSS for small and large codebases. You can learn it in 20
          minutes and implement it immediately in your project.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
          Modular
        </h2>

        <p className="text-lg sm:text-xl text-gray-700">
          A module is a distinct, independent unit that can be combined with
          other modules to create a more complex structure. In a living room, we
          can consider the TV, the sofa and the wall art to be modules.
        </p>

        <p className="text-lg sm:text-xl text-gray-700">
          When one module is taken away, the other modules continue to work. For
          example, we can sit on the sofa even if the TV breaks down. On a web
          page, a header, product list and menu can all be thought about as
          modules.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
          Scalable
        </h2>

        <p className="text-lg sm:text-xl text-gray-700">
          Scalable CSS means that as CSS increases in size, it's still easy to
          maintain. If you've ever inherited a large CSS codebase, and been
          afraid to make changes, you'll sympathise with this.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
          Maintainable
        </h2>

        <p className="text-lg sm:text-xl text-gray-700">
          Maintainable CSS makes it easy to make styling changes without
          worrying about accidentally causing problems elsewhere.
        </p>

        <a
          href="/chapters/semantics"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold uppercase text-sm rounded-md"
        >
          Next: Semantics
        </a>
      </Transition>

      <Transition>
        <Chapters currentChapter={0} />
      </Transition>

      <Footer />
    </>
  );
};

export default Introduction;
