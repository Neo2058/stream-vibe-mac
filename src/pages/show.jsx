import ShowBanner from "@/sections/ShowBanner/index.js";
import MovieDetails from "@/sections/MovieDetails/index.js";
import Seasons from "@/components/Seasons/index.js";

export const metadata = {
  title: 'Shows - Stranger Things',
}

export default function () {
  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}
