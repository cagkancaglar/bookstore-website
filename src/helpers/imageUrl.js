async function GetImage(name) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    fileName: name,
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
