import { useState } from "react";
import { learningSteps, LearningStep } from "@/data/learnings";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import clsx from "clsx";
import { RiBookmark3Line, RiCheckDoubleLine, RiCodeBoxLine, RiFilter3Line } from "react-icons/ri";

export const Journal = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", "Architecture", "CI/CD", "Design System", "CSS & Tailwind", "React & Logic"];

  const filteredSteps = selectedCategory === "Tous"
    ? learningSteps
    : learningSteps.filter((step) => step.category === selectedCategory);

  return (
    <section id="apprentissages" className="py-20 bg-gradient-to-b from-white via-primary-200/10 to-white border-t border-gray-400">
      <Container className="space-y-12">
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-200 text-primary text-xs font-semibold rounded-full border border-primary-300">
            <RiBookmark3Line size={16} />
            <span>Journal d'Apprentissage & Carnet de Bord</span>
          </div>
          <Typography variant="h1" component="h2" className="text-gray">
            Mon Aventure & Mes Apprentissages Techniques
          </Typography>
          <Typography variant="lead" theme="gray" className="text-base">
            Découvrez le cheminement étape par étape, les défis surmontés et les compétences acquises durant la création de cette application Coders Monkeys.
          </Typography>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="text-xs text-gray-700 font-medium flex items-center gap-1 mr-2">
            <RiFilter3Line size={16} /> Filtrer :
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer",
                selectedCategory === cat
                  ? "bg-primary text-white shadow-sm scale-105"
                  : "bg-white text-gray-800 border border-gray-400 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TIMELINE / CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredSteps.map((step: LearningStep) => (
            <div
              key={step.id}
              className="group relative bg-white border border-gray-400 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* CARD HEADER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-primary-300 group-hover:text-primary transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary-200 text-primary flex items-center justify-center">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-400/50 text-gray-800 text-xs font-medium rounded-md border border-gray-500/30">
                    {step.category}
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <div className="space-y-2">
                  <Typography variant="h3" className="group-hover:text-primary transition-colors">
                    {step.title}
                  </Typography>
                  <Typography variant="body-sm" theme="gray">
                    {step.description}
                  </Typography>
                </div>

                {/* DETAILS BULLETS */}
                <ul className="space-y-2 pt-2 border-t border-gray-400/50">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-gray-800 leading-relaxed">
                      <RiCheckDoubleLine size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CODE SNIPPET (IF ANY) */}
                {step.codeSnippet && (
                  <div className="mt-4 p-4 bg-gray-900 rounded-xl text-gray-200 text-xs font-mono overflow-x-auto space-y-2">
                    <div className="flex items-center gap-1.5 text-primary-300 text-[10px] uppercase font-semibold tracking-wider">
                      <RiCodeBoxLine size={14} /> Extrait de code
                    </div>
                    <pre className="text-green-400">{step.codeSnippet}</pre>
                  </div>
                )}

                {/* KEY TAKEAWAY BOX (IF ANY) */}
                {step.keyTakeaway && (
                  <div className="p-4 bg-primary-200/50 border border-primary-300/60 rounded-xl text-xs text-primary-600 leading-relaxed font-medium">
                    {step.keyTakeaway}
                  </div>
                )}
              </div>

              {/* TAGS FOOTER */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-400/40 mt-6">
                {step.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-0.5 bg-gray-400/30 text-gray-700 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
