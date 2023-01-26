async function GetImage(name) {
  // console.log("props: ", name);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    fileName: "ikigai.png",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let urlData = await fetch(
    "https://assign-api.piton.com.tr/api/rest/cover_image/",
    requestOptions
  );
  let result = await urlData.json();

  return result?.action_product_image?.url;


}

export default GetImage;
