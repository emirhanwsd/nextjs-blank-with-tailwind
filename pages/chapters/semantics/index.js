import Head from "next/head";
import Brand from "../../../components/Brand";
import Footer from "../../../components/Footer";
import Chapters from "../../../components/Chapters";
import Transition from "../../../components/Transition";

const Semantics = () => {
    return (
        <>
            <Head>
                <title>Semantics — MaintainableCSS</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Brand/>
            <Transition className="max-w-3xl mx-auto py-12 px-6 space-y-8">
                <span className="text-md font-bold text-gray-500 uppercase">
                  Chapter 2
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 break-words">
                    Semantics
                </h1>

                <p className="text-lg sm:text-xl text-gray-700">
                    Semantic HTML isn't only about the elements we use. It's quite obvious
                    that we should use <code className="font-semibold">{"<a>"}</code> for links,{" "}
                    <code className="font-semibold">{"<table>"}</code> for tabular data and <code
                    className="font-semibold">{"<p>"}</code> for
                    paragraphs etc. What's less obvious is the names we use for classes.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    As Phil Karton says, “there are only two hard things in Computer
                    Science: cache invalidation and <strong>naming things</strong>.” So
                    spending a whole chapter talking about naming is essential.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Naming is the most important aspect of writing maintainable CSS. There
                    are two main approaches: the semantic approach and the non-semantic
                    approach.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    Semantic vs non-semantic
                </h2>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<!-- non semantic -->`}</code>
                    <code>{`<div class="red pull-left pb3">`}</code>
                    <code>{`<div class="grid row">`}</code>
                    <code>{`<div class="col-xs-4">`}</code>
                    <br/>
                    <code>{`<!-- semantic -->`}</code>
                    <code>{`<div class="basket">`}</code>
                    <code>{`<div class="product">`}</code>
                    <code>{`<div class="searchResults">`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    Non-semantic classes don't convey what an element represents. At most
                    they give you an idea of what an element looks like. Atomic, visual,
                    behavioural and utility classes are all forms of non-semantic classes.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Semantic classes don't convey their styles, but that's fine—that's
                    what CSS is for. Semantic classes mean something to HTML, CSS,
                    Javascript and automated functional tests.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Let's look at why semantic classes usually work best.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    1. Because they're readable
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Here's a real snippet of HTML using atomic classes:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div class="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">`}</code>
                    <code className="pl-4">{`<h1 class="f4 fw6 f1-ns lh-title measure mt0">Heading</h1>`}</code>
                    <code className="pl-4">{`<p class="f5 f4-ns fw4 b measure dib-m lh-copy">Tagline</p>`}</code>
                    <code>{`</div>`}</code>
                </div>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        Words are generally easier to understand than abbreviations which
                        have to be understood and interpreted before knowing what they stand
                        for
                    </li>

                    <li>It's unclear where the module begins and ends</li>

                    <li>
                        We have to wade through a very long list of classes to work out
                        what's going on; which classes override which; and which apply at
                        different breakpoints
                    </li>

                    <li>
                        The classes lack clarity—for example, it's not clear whether{" "}
                        <code className="font-semibold">black-70</code> is referring to the foreground or background
                        colour
                    </li>

                    <li>The content is obfuscated by the larger surrounding HTML</li>

                    <li>The HTML is large in size</li>
                </ul>

                <p className="text-lg sm:text-xl text-gray-700">
                    Here's the same HTML with semantic classes:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div class="hero">`}</code>
                    <code className="pl-4">{`<h1 class="hero-title">Heading</h1>`}</code>
                    <code className="pl-4">{`<p class="hero-tagline">Tagline</p>`}</code>
                    <code>{`</div>`}</code>
                </div>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        These classes are easy to read without needing to be interpreted
                    </li>

                    <li>It's clear where the module begins and ends</li>

                    <li>
                        It's easy to read the CSS because it uses the standard syntax for
                        this purpose
                    </li>

                    <li>The content is no longer obfuscated</li>

                    <li>The HTML is half the size</li>
                </ul>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    2. Because they make it easier to build responsive sites
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Imagine coding a two-column responsive grid whereby:
                </p>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        each column has <code className="font-semibold">20px</code> and <code
                        className="font-semibold">50px</code> padding on small and large screens
                        respectively
                    </li>

                    <li>each column has <code className="font-semibold">2em</code> and <code
                        className="font-semibold">3em</code> font-size on small and large screens
                        respectively
                    </li>

                    <li>
                        the columns stack on small screens. Note that column is now a misleading class name.
                    </li>
                </ul>

                <p className="text-lg sm:text-xl text-gray-700">
                    With non-semantic classes it may look like this:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div class="grid clearfix">`}</code>
                    <code className="pl-4">{`<div class="col pd20 pd50 fs2 fs3">Column 1</div>`}</code>
                    <code className="pl-4">{`<div class="col pd20 pd50 fs2 fs3">Column 2</div>`}</code>
                    <code>{`</div>`}</code>
                </div>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        There are 7 classes—some of which override each other
                    </li>

                    <li>
                        To make the columns work responsively we would need a <code
                        className="font-semibold">fs3large</code> class which means creating a naming convention that
                        recreates language constructs already provided by CSS
                    </li>

                    <li>
                        At certain break points, the classes are misleading and redundant—for example <code
                        className="font-semibold">.clearfix</code> doesn't clear on small screens
                    </li>
                </ul>

                <p className="text-lg sm:text-xl text-gray-700">
                    With semantic classes it looks like this:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<div class="thing">`}</code>
                    <code className="pl-4">{`<div class="thing-thingA"></div>`}</code>
                    <code className="pl-4">{`<div class="thing-thingB"></div>`}</code>
                    <code>{`</div>`}</code>
                </div>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        The classes are encapsulated to the module's design and content
                    </li>

                    <li>
                        It's easy to style elements without having to write a multiple classes and changing the HTML
                    </li>

                    <li>
                        The classes are meaningful in small and big screens
                    </li>

                    <li>
                        Media queries can be used to clear elements when needed
                    </li>
                </ul>

                <p className="text-md sm:text-lg text-gray-700 italic">
                    Question: how valuable is a codified responsive grid system? A <a href="#" className="underline">layout
                    should adapt to the content</a>, not the other way around.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    3. Because they're easier to find
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Searching HTML with non-semantic classes yields many results. Searching HTML with semantic classes
                    should yield one result which makes it quick to track down.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    4. Because they reduce the chance of regression
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Updating a non-semantic class could cause regression across multiple elements. Updating a semantic
                    class only applies to the specific module, eliminating the risk of regression.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    5. Because visual classes aren't necessarily valuable
                </h2>

                <ul
                    role="list"
                    className="list-disc text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        Atomic CSS and inline CSS aren't totally equivalent. For example, inline CSS can't use media
                        queries and styling in HTML stops us from being able to cache it.
                    </li>

                    <li>
                        But, in some ways we may as well use inline styles—at least it's explicit and reduces the CSS
                        footprint to zero.
                    </li>

                    <li>
                        <p className="italic">Question: isn't <code className="font-semibold">.red</code> the exact same
                            abstraction that CSS already gives us for free with <code className="font-semibold">color:
                                red</code>?</p>
                    </li>
                </ul>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    6. Because they provide hooks for automated tests
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Automated functional tests work by searching for and interacting with elements. For example, a test
                    might involve:
                </p>

                <ul
                    role="list"
                    className="list-decimal text-lg text-gray-800 pl-8 space-y-2"
                >
                    <li>
                        clicking a link
                    </li>

                    <li>
                        finding a text box
                    </li>

                    <li>
                        typing in text
                    </li>

                    <li>
                        submitting a form
                    </li>

                    <li>
                        verifying some criteria
                    </li>
                </ul>

                <p className="text-lg sm:text-xl text-gray-700">
                    We can't use non-semantic classes to target specific elements. And adding hooks specifically for
                    tests is wasteful as the user now has to download extra code.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    7. Because they provide hooks for JavaScript
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    We can't use non-semantic classes to target specific elements in order to enhance them with
                    JavaScript.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    8. Because they need less maintaining
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    When you name an element based on what it is, you don't have to update the HTML. That's because, a
                    heading, for example, is always a heading, no matter what it looks like.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    With visual classes, both the HTML and the CSS need updating—assuming there aren't any selectors
                    available for use.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    9. Because they're easier to debug
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Inspecting an element with multiple atomic classes, means having to wade through many selectors.
                    With a semantic class, there's only one which is much easier to work with.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    10. Because the standards recommend it
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    On using the class attribute, HTML5 specs say in 3.2.5.7:
                </p>

                <p className="text-lg sm:text-xl text-gray-700 italic">
                    "[...] authors are encouraged to use values that describe the nature of the content, rather than
                    values that describe the desired presentation of the content."
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    11. Because styling state is easier
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Consider this HTML:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`<a class="padding-left-20 red" href="#"></a>`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    Changing the padding and colour on hover is a difficult task. Try to avoid having to fix
                    self-induced problems like this
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    12. Because they produce a small HTML footprint
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Atomic classes create extra code in HTML. Semantic classes result in less code. And while the CSS
                    may increase in size, it can be cached.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    Final thought
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Semantic classes are a cornerstone of MaintainableCSS. Without them, everything else makes little
                    sense. Name something based on what it is and everything else falls into place.
                </p>

                <a
                    href="/chapters/reuse"
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold uppercase text-sm rounded-md"
                >
                    Next: Reuse
                </a>
            </Transition>

            <Transition>
                <Chapters currentChapter={1}/>
            </Transition>

            <Footer/>
        </>
    );
};

export default Semantics;
