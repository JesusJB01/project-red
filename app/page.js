import ArticlesHome from "./components/ArticlesHome";
import Description from "./components/Description";
import Hero from "./components/Hero";
import Carousel from "./components/Sliders";




export default function page() {
  return (
    <div className="pt-20  flex flex-col items-center justify-center">
    <Hero/>
    <Description/>
    <Carousel/>
    <ArticlesHome/>
  </div>
  );
}
