import { useState, useEffect } from "react";
import categoryData from "../mock/categories.json";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData);
      }, []);

    return(
        <div className="mt-10 mx-auto container">
            <div className="container flex justify-between mb-2">
                <h2 className="font-semibold"> {`< Best Seller`}</h2>
            </div>

        <div className="grid grid-cols-4 gap-x-7">
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                className="flex w-[300px] h-[433px] bg-formInputBackground rounded-md flex-col"
              >
                <div className="flex justify-center">
                  <img
                    src="assets/images/dune.png"
                    alt=""
                    className="w-[200px] h-[300px] rounded-sm pt-5"
                  />
                </div>
                <div className="flex justify-between mx-5">
                  <div className="card-header mt-7">
                    <h5 className="text-formText font-semibold">
                      {category.title}
                    </h5>
                    <span className="text-sm font-semibold opacity-60">
                      {category.author}
                    </span>
                  </div>
                  <div className="card-price flex flex-col justify-end">
                    <span className="font-semibold text-formRegister text-lg">
                      {category.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
}

export default Categories;