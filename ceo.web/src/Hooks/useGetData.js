import axios from "axios";
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
        // console.log(response);
        setData(response.data);
      } catch (error) {
        setError(error.response.status);
      }
    };
    getData(controller);
  }, []);

  return { Data, Error, setData };
};

export const useGetDataProps = (controller, model) => {
  const [DataDet, setDataDet] = useState([]);
  const [ErrorDet, setError] = useState(null);
  console.log(model.codigoEmpresa);
  useEffect(() => {
    axios
      .get(`${baseUrl}${controller}`, {
        params: {
          codigoEmpresa: model.codigoEmpresa,
          consecutivo: model.consecutivo,
        },
      })
      .then(function (response) {
        if (response.data == null) {
          setDataDet([]);
        } else {
          const subtotal = response.data.reduce(
            (preValue, currentValue) =>
              preValue + currentValue.Cantidad * currentValue.PrecioUnitario,
            0
          );
          setDataDet(
            response.data.map((item) => ({
              ...item,
              Total: item.Cantidad * item.PrecioUnitario,
            }))
          );
        }
      });
  }, []);

  return { DataDet, ErrorDet, setDataDet };
};
