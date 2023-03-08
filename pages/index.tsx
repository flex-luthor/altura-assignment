import type { NextPage } from "next";
import Collection from "../components/containers/Collection";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-between py-2">
      <Header />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
