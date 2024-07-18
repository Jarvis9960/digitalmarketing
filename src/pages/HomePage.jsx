import Navbar from "../component/Navbar/Navbar";
import Card from "../component/Card";
import Carousel from "../component/Carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-[92vw] flex-col p-10">
          <h1 className="text-start text-[4rem]">
            EXELIGO <br /> <span className="ml-8">INNOVATIONS</span> <br />{" "}
            PVT.LTD
          </h1>
          <p className="text-xl my-6">
            EXELIGO INNOVATIONS.PVT.LMT offers digital marketing, web design,
            and social media services to help <br /> businesses grow online.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-80">
            Read Me More
          </button>
        </div>
      </div>
      <Carousel />
      <Card />
      {/* <AboutUs />
      <Growth />
      <Sections />
      <Reviews />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
