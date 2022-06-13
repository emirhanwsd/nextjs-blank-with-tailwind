const chapters = [
  "Introduction",
  "Semantics",
  "Reuse",
  "IDs",
  "Conventions",
  "Modules",
  "State",
  "Modifiers",
  "Versioning",
  "JavaScript",
  "Organisation",
  "FAQs",
];

const Chapters = ({ currentChapter }) => {
  return (
    <section className="py-12 bg-indigo-100">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <span className="text-xl text-indigo-400 font-bold uppercase">
          Chapters
        </span>

        <ul className="list-decimal px-8 text-xl space-y-1" role="list">
          {chapters.map((chapter, index) => (
            <li key={index}>
              <a
                href={`/chapters/${chapter.toLowerCase()}`}
                className={index === currentChapter ? "font-bold" : undefined}
              >
                {chapter}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Chapters;
