// import { useEffect } from "react";

// const Image = ({ name }) => {

//     var image= "";


//     const getImage = (name) => {
//         fetch("https://assign-api.piton.com.tr/api/rest/cover_image", {
//           method: "POST",
//           body: JSON.stringify({
//             fileName: `/${name}`
//           }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//         console.log(data.action_product_image.url);
//          image = data.action_product_image.url
//          return image
//           })
//           .catch((err) => console.log("err: ",err));
//       };
    

//       useEffect(()=> {
//         getImage();
//       },[]) // eslint-disable-line react-hooks/exhaustive-deps
      

//     return (
//                     <img
//                         src={image}
//                         alt=""
//                         className="w-[120px] h-[180px] rounded-sm my-auto"
//                       />
//     )
// }

// export default Image;