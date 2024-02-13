import Feed from "@/components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center ">
    Entdecken  & Teilen
      <br className="max-md:hidden " />
      <span className="orange_gradient text-center "> Was ist Ihre Meninung ?</span>
    </h1>
    <p className="desc text-center">
    JustShare ist eine offene Plattform, um Ihre Ideen mit anderen zu teilen!
    </p>
    <Feed/>
  </section>
);

export default Home;
