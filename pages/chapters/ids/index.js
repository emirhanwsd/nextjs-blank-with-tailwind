import Head from "next/head";
import Brand from "../../../components/Brand";
import Footer from "../../../components/Footer";
import Chapters from "../../../components/Chapters";
import Transition from "../../../components/Transition";

const IDs = () => {
    return (
        <>
            <Head>
                <title>IDs — MaintainableCSS</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Brand/>
            <Transition className="max-w-3xl mx-auto py-12 px-6 space-y-8">
                <span className="text-md font-bold text-gray-500 uppercase">
                  Chapter 4
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 break-words">
                    IDs
                </h1>

                <p className="text-lg sm:text-xl text-gray-700">
                    Semantically speaking, we should use an ID when there's only one instance of a thing. And we should
                    use a class when there are several.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    However, <span className="underline">IDs overpower class names</span> by orders of magnitude, which
                    is a problem when we want to override a style.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    To demonstrate the problem, let's override the colour of an element from <span
                    className="italic">red</span> to <span className="italic">blue</span> using an ID.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Here's the HTML:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div id="module" class="module-override">`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    And the CSS:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`#module {`}</code>
                    <code className="pl-6">{`color: red;`}</code>
                    <code>{`}`}</code>
                    <br/>
                    <code>{`.module-override {`}</code>
                    <code className="pl-6">{`color: blue;`}</code>
                    <code>{`}`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    The element will be red even though the override class declares blue. Let's fix this by swapping the
                    ID for a class:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div class="module module-override">`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    And the CSS:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`.module {`}</code>
                    <code className="pl-6">{`color: red;`}</code>
                    <code>{`}`}</code>
                    <br/>
                    <code>{`.module-override {`}</code>
                    <code className="pl-6">{`color: blue;`}</code>
                    <code>{`}`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    Now, the element is blue—problem solved.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Whilst using IDs for styling is problematic, we can still use them for other things. For example,
                    we'll most certainly need to use them to connect:
                </p>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        labels to form fields
                    </li>

                    <li>in-page anchors to a hash fragment in the URL</li>

                    <li>
                        ARIA attributes to help screen reader users
                    </li>
                </ul>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    Final thought
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Use IDs whenever you need to enable particular behaviours for browsers and assistive technology. But
                    avoid using them as hooks for styles.
                </p>

                <a
                    href="/chapters/reuse"
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold uppercase text-sm rounded-md"
                >
                    Next: Conventions
                </a>
            </Transition>

            <Transition>
                <Chapters currentChapter={3}/>
            </Transition>

            <Footer/>
        </>
    );
};

export default IDs;
