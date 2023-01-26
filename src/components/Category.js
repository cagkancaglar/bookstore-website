import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const Category = () => {
  
  const { category_id } = useParams(); 
  console.log(category_id);

  const prod = useSelector(state => state.category.products)

  // console.log(prod);

  const data = prod.find((item) => item.id === Number(category_id));
  // console.log(data);
  // console.log(data?.products);

  return (
    <>
      <Navbar />
     
          <div className="mt-10 mx-auto container">
            <div className="container mb-8">
              <Link className="font-semibold"> {`< `}</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mx-auto justify-center">
              {
                data?.products?.map((product, index) => (
                  <div
                    key={index}
                    className="w-[300px] h-[433px] bg-formInputBackground rounded-md"
                  >
                    <div className="flex justify-center">
                      <img
                        src={"assets/images/dune.png"}
                        alt=""
                        className="w-[200px] h-[300px] rounded-sm pt-5"
                      />
                    </div>
                    <div className="flex justify-between mx-5">
                      <div className="card-header mt-7">
                        <h5 className="text-formText font-semibold">
                          {product.name}
                        </h5>
                        <span className="text-sm font-semibold opacity-60">
                          {product.author}
                        </span>
                      </div>
                      <div className="card-price flex flex-col justify-end">
                        <span className="font-semibold text-formRegister text-lg">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  ))}   
            </div>
          </div>
    </>
  );  
};

export default Category;
