import { AiOutlineHeart } from "react-icons/ai";


const ProductDetail = () => {
  return (
    <div className="mt-10 mx-auto container relative">
      <div className="container flex justify-between mb-8">
        <h2 className="font-bold text-2xl cursor-pointer"> {`< Best Seller`}</h2>
      </div>

      <div className="flex gap-x-20 relative">
      <div className="absolute top-0 right-0 w-11 h-11 rounded-full bg-formInputBackground flex justify-center items-center cursor-pointer">
        <AiOutlineHeart size={22} />
      </div>
        <div className="w-[420px] h-[570px] bg-formInputBackground rounded-md flex-0 flex-col justify-center">
          <img
            src="assets/images/dune.png"
            alt=""
            className="w-[300px] h-[450px] rounded-sm m-14"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-[40px]">Dune</h2>
          <h3 className="font-semibold text-[32px] opacity-60">Frank Herbert</h3>
          <h4 className="font-bold text-[24px] pt-14">Summary</h4>
          <p className="font-normal text-xl leading-8 pt-3 text-justify">
            Dune is set in the distant future amidst a feudal interstellar
            society in which various noble houses control planetary fiefs. It
            tells the story of young Paul Atreides, whose family accepts the
            stewardship of the planet Arrakis. While the planet is an
            inhospitable and sparsely populated desert wasteland, it is the only
            source of melange, or "spice", a drug that extends life and enhances
            mental abilities. Melange is also necessary for space navigation,
            which requires a kind of multidimensional awareness and foresight
            that only the drug provides. As melange can only be produced on
            Arrakis, control of the planet is a coveted and dangerous
            undertaking. The story explores the multilayered interactions of
            politics, religion, ecology, technology, and human emotion, as the
            factions of the empire confront each other in a struggle for the
            control of Arrakis and its spice.
          </p>
        </div>
      </div>
      <button className="w-[400px] h-[60px] bg-formButton flex justify-between items-center absolute top-[720px] left-[880px] px-3 rounded">
        <span className="text-[color:white] font-semibold text-xl">87,75</span>
        <span className="text-[color:white] font-bold text-xl">Buy Now</span>
      </button>
    </div>
  );
};

export default ProductDetail;
