import AnimeList from "@/components/AnimeList";
import LoadMore from "@/components/LoadMore";
import { ToggleTheme } from "@/components/ToggleTheme";

export default async function App() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="flex justify-end pr-10 items-center pt-5">
        <ToggleTheme />
      </div>
      <AnimeList />
      <LoadMore />
    </div>
  );
}
