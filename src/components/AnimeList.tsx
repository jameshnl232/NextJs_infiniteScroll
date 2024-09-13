import { fetchAnimeList } from "@/app/actions";

export default async function AnimeList() {
  const data: JSX.Element[] = await fetchAnimeList(1);
  return <>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid  grid-flow-row-2 grid-cols-2 gap-3 md:grid-cols-3 md:grid-flow-col-3 md:gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:gap-5  ">
        {data && data.length > 0 ? (
         data
        ) : (
          <div className="text-center"> No data</div>
        )}
      </div>
    </div>
  </>;
}
