import Hero from "@/sections/Hero/Hero.jsx";
import Categories from "@/sections/Categories/index.js";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
     <Hero />
      <Categories />
    </>
  )
}
