import { useState, useEffect } from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const useGetData = (controller) => {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const getData = async (controller) => {
      var axios = require("axios");
      var config = {
        method: "get",
        url: `${baseUrl}${controller}`,
      };
      try {
        const response = await axios(config);
        console.log(response);
        setData(response.data);
      } catch (error) {
        setError(error.response.status);
      }
    };
    getData(controller);
  }, [controller]);

  return { Data, Error, setData };
};
