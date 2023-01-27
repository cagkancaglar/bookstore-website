// router
import { useParams, Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// react-icons
import { AiOutlineHeart } from "react-icons/ai";
// components
import Navbar from "../components/Navbar";
import Image from "./ui/Image";
// helmet
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { product_id, category_id } = useParams();
  const prod = useSelector((state) => state.category.products);
  const category = prod.find((item) => item.id === Number(category_id));
  const product = category?.products.find(
    (item) => item.id === Number(product_id)
  );


  return (
    <>
      <Helmet>
        <title>Product Detail - PITON</title>
      </Helmet>
      <Navbar />
      <div className="mt-10 mx-auto container relative lg:px-10" key={product.id}> 
        <div className="container flex justify-between mb-8">
          <Link
            to={`/category/${category.id}`}
            className="font-bold text-2xl cursor-pointer"
          >
            {`< ${category.name}`}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-x-20 relative">
          <div className="absolute top-0 md:top-3 right-20 md:right-0 xxl:right-0 w-11 h-11 rounded-full bg-formInputBackground flex justify-center items-center cursor-pointer">
            <AiOutlineHeart size={22} />
          </div>
          <div className="w-[220px] md:w-[420px] md:h-[570px] bg-formInputBackground rounded-md flex-0 flex-col justify-center">
         <Image source={product.cover} customClass="w-full md:w-[300px] md:h-[450px] rounded-sm p-1 md:p-0 md:m-14"/>
          </div>
          <div className="flex-1 p-10 md:p-0">
            <h2 className="font-semibold text-[40px]">{product.name}</h2>
            <h3 className="font-semibold text-[32px] opacity-60">
              {product.author}
            </h3>
            <h4 className="font-bold text-[24px] pt-14">Summary</h4>
            <p className="font-normal text-xl leading-8 pt-3 text-justify">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center xl:justify-end mt-22">
          <button className="w-[400px] h-[60px] bg-formButton flex justify-between items-center px-3 rounded">
            <span className="text-[color:white] font-semibold text-xl">
              {product.price} $
            </span>
            <span className="text-[color:white] font-bold text-xl">
              Buy Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
