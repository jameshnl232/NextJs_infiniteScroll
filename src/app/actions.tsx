"use server";

import AnimeItem from "@/components/AnimeItem";
import { Anime } from "@/types/types";

export async function fetchAnimeList(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );
  const data = await response.json();

  return data.map((item: Anime, index: number) => (
    <AnimeItem index={index} key={index} item={item} />
  ));
}
