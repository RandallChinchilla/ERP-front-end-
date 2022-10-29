import axios from "axios";
import { useState, useEffect } from "react";
import { helpHttp } from "../Helpers/HelpHttp";
const baseUrl = process.env.REACT_APP_BASE_URL;
const userLoggedToken = "898972347523jhklqhflqjkwhjlhj"; //JSON.parse(localStorage.getItem("userLoggedToken"));

export const useGetData = (controller, model) => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(null);

  let url = new URL(`${baseUrl}${controller}`);
  url.search = new URLSearchParams(model);

  let options = {
    headers: {
      Autorization: `Bearer ${userLoggedToken}`,
    },
  };

  useEffect(() => {
    helpHttp()
      .get(url, options)
      .then((res) => {
        if (!res.err) {
          setData(res);
        } else {
          setError(res.err);
        }
      });
  }, [controller]);
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
