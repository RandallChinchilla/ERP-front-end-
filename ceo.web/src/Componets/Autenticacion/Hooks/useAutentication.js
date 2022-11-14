import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateAlert } from "../../../Actions/Index";
import { helpHttp } from "../../../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const useAutentication = () => {
  const [response, setResponse] = useState(false);
  let usehistory = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { alert } = state.alert;

  // console.log(alert);
  const handleSubmitLogin = (data) => {
    let url = `${baseUrl}Account/CreateToken`;
    let token = "";
    let options = {
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        if (res.err) {
          dispatch(
            updateAlert({
              ...alert,
              open: true,
              severity: "error",
              message: "Usuario o contraseña incorrecta",
            })
          );
          return;
        }
        //dispatch(getToken({ ...user, usertoken: res.token }));
        //dispatch(getToken(res.token));
        localStorage.setItem("mytoken", res.token);
        let url = `${baseUrl}Account/Login`;
        token = res.token;
        options = {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: data,
        };
        helpHttp()
          .post(url, options)
          .then((resLogin) => {
            // console.log(resLogin.Result);
            //dispatch(getUser(resLogin.Result));
            localStorage.setItem("myuser", JSON.stringify(resLogin.Result));
            usehistory.push("./Dashboard");
          });
      });
  };

  return {
    response,
    handleSubmitLogin,
  };
};
