import { useState, useEffect } from "react";

function Image({ source, customClass }) {
  const [dataSrc, setDataSrc] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    getImage(source);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getImage(params) {
    var raw = JSON.stringify({
      fileName: source,
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

    let result = await urlData?.json();

    let data = await result?.action_product_image?.url;

    setDataSrc(data);
  }

  return (
    <>
      <img src={dataSrc} alt="" className={customClass} />
    </>
  );
}

export default Image;
