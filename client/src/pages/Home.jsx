// import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import List from "../components/List";
import List2 from "../components/List2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <Categories />
      <List />
      <List2 />
      <Products />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Home;
