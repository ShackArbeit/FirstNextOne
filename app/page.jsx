import Feed from "@/components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center ">
      Discover & Share
      <br className="max-md:hidden " />
      <span className="orange_gradient text-center "> 說出你的想法</span>
    </h1>
    <p className="desc text-center">
     JustShare 是開放可以分享的平台，讓你能發現、創作和分享你的創意想法
    </p>
    <Feed/>
  </section>
);

export default Home;
