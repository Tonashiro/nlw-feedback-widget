import { GridCards } from "./components/GridCards";
import { Navbar } from "./components/Navbar";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <div className="bg-zinc-50 dark:bg-[#09090A] text-zinc-300 transition-colors duration-500 min-h-[100vh] pb-8">
      <Navbar />
      <GridCards />
      <div className="fixed right-0 bottom-3 z-2">
        <Widget />
      </div>
    </div>
  );
}
