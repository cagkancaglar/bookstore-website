import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GetImage from "../helpers/imageUrl"
import { useEffect, useState } from "react";

const ProductDetail = () => {
  
  const { product_id, category_id  } = useParams(); 
  const [url, setUrl]=useState("")

  console.log(product_id)

  const prod = useSelector(state => state.category.products)

  console.log(prod)

  const data1 =  prod.find(item => item.id ===  Number(category_id))
  console.log(data1)
  const data2 = data1?.products.find(item => item.id  === Number(product_id))
   console.log(data2)



  useEffect(()=>{
    getUrl()

  },[])

  async function getUrl() {
    setUrl(await GetImage())
  }

  return (
    <>
      <Navbar />

      <div className="mt-10 mx-auto container relative lg:px-10">
        <div className="container flex justify-between mb-8">
          <h2 className="font-bold text-2xl cursor-pointer">
            {" "}
            {`< Best Seller`}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-x-20 relative">
          <div className="absolute top-0 md:top-3 right-20 md:right-0 xxl:right-0 w-11 h-11 rounded-full bg-formInputBackground flex justify-center items-center cursor-pointer">
            <AiOutlineHeart size={22} />
          </div>
          <div className="w-[220px] md:w-[420px] md:h-[570px] bg-formInputBackground rounded-md flex-0 flex-col justify-center">
            <img
              src={url}
              alt=""
              className="w-full md:w-[300px] md:h-[450px] rounded-sm p-1 md:p-0 md:m-14"
            />
          </div>
          <div className="flex-1 p-10 md:p-0">
            <h2 className="font-semibold text-[40px]">Dune</h2>
            <h3 className="font-semibold text-[32px] opacity-60">
              Frank Herbert
            </h3>
            <h4 className="font-bold text-[24px] pt-14">Summary</h4>
            <p className="font-normal text-xl leading-8 pt-3 text-justify">
              Dune is set in the distant future amidst a feudal interstellar
              society in which various noble houses control planetary fiefs. It
              tells the story of young Paul Atreides, whose family accepts the
              stewardship of the planet Arrakis. While the planet is an
              inhospitable and sparsely populated desert wasteland, it is the
              only source of melange, or "spice", a drug that extends life and
              enhances mental abilities. Melange is also necessary for space
              navigation, which requires a kind of multidimensional awareness
              and foresight that only the drug provides. As melange can only be
              produced on Arrakis, control of the planet is a coveted and
              dangerous undertaking. The story explores the multilayered
              interactions of politics, religion, ecology, technology, and human
              emotion, as the factions of the empire confront each other in a
              struggle for the control of Arrakis and its spice.
            </p>
          </div>
        </div>
        <div className="flex justify-center xl:justify-end">
          <button className="w-[400px] h-[60px] bg-formButton flex justify-between items-center px-3 rounded">
            <span className="text-[color:white] font-semibold text-xl">
              87,75
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
