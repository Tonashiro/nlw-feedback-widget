// Assets
import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";

export function GridCards() {
  return (
    <div className="pt-[116px] px-6 h-auto relative flex flex-col gap-6 md:px-20 lg:px-40">
      <div className="w-full h-28 bg-zinc-300 dark:bg-darkMode-bg text-zinc-900 dark:text-zinc-100 transition-colors flex items-center justify-center text-center rounded-lg p-4">
        <p className="lg:text-2xl">
          Experimente enviar um feedback de um <i>bug</i> na aplicação!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200  bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={ideaImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={thoughtImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={ideaImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={bugImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={thoughtImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={bugImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
        <div className="w-full h-auto lg:h-60 lg:overflow-hidden flex flex-col justify-between items-center text-black dark:text-zinc-200 bg-zinc-300 hover:bg-zinc-400 dark:bg-darkMode-bg dark:hover:bg-darkMode-hover transition-colors rounded-lg p-10">
          <img src={ideaImage} alt="bug" className="w-14 h-14" />
          <p className="w-auto text-center">
            "Encontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o
            siteEncontrei esse bug e estava quebrando o siteEncontrei esse bug e
            estava quebrando o siteEncontrei esse bug e estava quebrando o site"
          </p>
        </div>
      </div>
    </div>
  );
}
