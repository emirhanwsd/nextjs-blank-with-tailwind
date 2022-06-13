import Head from "next/head";
import Brand from "../../../components/Brand";
import Footer from "../../../components/Footer";
import Chapters from "../../../components/Chapters";
import Transition from "../../../components/Transition";

const Reuse = () => {
    return (
        <>
            <Head>
                <title>Reuse — MaintainableCSS</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Brand/>
            <Transition className="max-w-3xl mx-auto py-12 px-6 space-y-8">
                <span className="text-md font-bold text-gray-500 uppercase">
                  Chapter 3
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 break-words">
                    Reuse
                </h1>

                <p className="text-lg sm:text-xl text-gray-700">
                    As Harry Roberts says, “DRY is often misinterpreted as the necessity to never repeat the exact same
                    thing twice. This is impractical and usually counterproductive, and can lead to forced abstractions,
                    over-thought and over-engineered code.”
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    This forced abstraction, over-thought and over-engineered code often results in visual and atomic
                    classes. We know how painful they are because we discussed them thoroughly in <a href="#"
                                                                                                     className="underline">semantics</a>.
                    Mixins may
                    also be a problem which we'll discuss shortly.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Whilst we often try to abstract CSS too much too soon, there are obviously going to be times when
                    reuse makes sense. The question must be answered, <span className="italic">how can we reuse a style?</span>
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    How can we reuse a style?
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    If we want to reuse a style, one option would be to comma-delimit selectors inside a well-named
                    file, which if you're into SASS is exactly what <code className="font-semibold">@extend</code> does.
                    For example, if multiple elements need
                    red text, we could do this:
                </p>

                <div className="flex flex-col text-xl p-4 bg-indigo-100 border-l-4 border-indigo-300 rounded">
                    <code>{`.someThing,`}</code>
                    <code>{`.anotherThing {`}</code>
                    <code className="pl-6">{`color: red;`}</code>
                    <code>{`}`}</code>
                </div>

                <p className="text-lg sm:text-xl text-gray-700">
                    This approach should be used for convenience, not for performance. (If the abstraction only has one
                    rule, we're simply exchanging one line of code for another.)
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    If a selector deviates from the rules inside the abstraction, it should be removed from the list.
                    Otherwise it could regress the other selectors and cause override issues.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    It's important to note that this is one of several techniques at our disposal. When a thing is well
                    understood we can make use of other techniques, which we'll discuss in <a href="#"
                                                                                              className="underline">Modules</a>, <a
                    href="#" className="underline">State</a> and <a href="#" className="underline">Modifiers</a>.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    What about mixins?
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Mixins provide the best of both worlds. At least in theory.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Like utility classes, updating a mixin propagates to all instances. If we don't have a handle of
                    what's using the mixin, we increase the risk of regression. Instead of updating a mixin, we can
                    create another, but this causes redundancy.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    To mitigate this complexity, we can create granular mixins, such as one for red text. At first this
                    seems better. But isn't the declaration of a red mixin, the same as the rule itself i.e. <code
                    className="font-semibold">color: red</code>?
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    If we need to update the rule in multiple places, a search and replace might be all that's necessary. Also, when the red mixin changes to orange, its name will need updating anyway.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    With all that said, mixins can be very useful. We might, for example, want to apply clearfix rules across different elements and only within certain breakpoints. This is something that vanilla CSS can't do elegantly.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    As such, mixins are not bad, it's just that we should use them judiciously.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    What about performance?
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    We often overthink performance and get obsessed with tiny details. Even if CSS did total more than 100kb, there's little to gain from mindlessly striving for DRYness.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    Making CSS small makes HTML big. CSS can always be cached. But HTML often contains dynamic and personalised content—so it can't be cached.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    The compression of a single image gives us a better return on investment. And as we've discussed, resolving other forms of redundancy improves maintainability and performance.
                </p>

                <p className="text-lg sm:text-xl text-gray-700">
                    As you'll see in later chapters, the conventions in this guide, mean CSS class names have repeated prefixes which works especially well with GZip.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    Is this violating DRY principles?
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Attempting to reuse, for example <a href="#" className="font-semibold">float: left</a>, is akin to trying to reuse variable names in different Javascript objects. It's simply not in violation of DRY.
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 break-words">
                    Final thought
                </h2>

                <p className="text-lg sm:text-xl text-gray-700">
                    Striving for DRY leads to over-thought and over-engineered code. In doing so we make maintenance harder, not easier. Instead of obsessing over styles, we should focus on reusing tangible modules. Something we'll discuss in upcoming chapters.
                </p>

                <a
                    href="/chapters/ids"
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold uppercase text-sm rounded-md"
                >
                    Next: IDs
                </a>
            </Transition>

            <Transition>
                <Chapters currentChapter={2}/>
            </Transition>

            <Footer/>
        </>
    );
};

export default Reuse;
