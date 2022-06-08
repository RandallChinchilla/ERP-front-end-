import { useState } from "react";
import { useHistory } from "react-router";
import { postAction } from "../Helpers/postHelper";
import { putAction } from "../Helpers/putHelper";
import { helpHttp } from "../Helpers/HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const useData = (form, controller) => {
  const [response, setResponse] = useState(false);
  const [errors, setErrors] = useState("");
  let usehistory = useHistory();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    let url = `${baseUrl}Account/CreateToken`;
    let token = "";
    let options = {
      headers: {
        //Autorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: form,
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        console.log(res);
        if (res.token !== "") {
          let url = `${baseUrl}Account/Login`;
          token = res.token;
          console.log(token);
          options = {
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "application/json",
            },
            body: form,
          };
          helpHttp()
            .post(url, options)
            .then((resLogin) => {
              //console.log(resLogin);
              setResponse(true);
              window.localStorage.setItem(
                "userLogged",
                JSON.stringify(resLogin.result)
              );
              usehistory.push("./Dashboard");
            });
        } else {
          setResponse(false);
        }
      });

    // postAction("Account/CreateToken", form, "").then((tokenresponse) => {
    //   if (tokenresponse.status === 201) {
    //     console.log(tokenresponse);
    //     window.localStorage.setItem(
    //       "userLoggedToken",
    //       JSON.stringify(tokenresponse.data.token)
    //     );
    //     postAction("Account/Login", form, tokenresponse.data.token).then(
    //       (response) => {
    //         if (response.status === 200) {
    //           setResponse(true);
    //           window.localStorage.setItem(
    //             "userLogged",
    //             JSON.stringify(response.data.result)
    //           );
    //           usehistory.push("./Dashboard");
    //         } else {
    //         }
    //       }
    //     );
    //   } else {
    //     setErrors("Error de usuario o contraseña");
    //   }
    // });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    console.log(form);
    putAction(controller, form, userLoggedToken).then((response) => {
      if (response.status === 200) {
        setResponse(true);
        console.log("Registro Actualizado");
        usehistory.push("/Dashboard/CliMaestroView");
      } else {
        console.log("Fallo la Actualizacion del registro");
      }
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const userLoggedToken = JSON.parse(localStorage.getItem("userLoggedToken"));
    console.log(form);
    postAction(controller, form, userLoggedToken).then((response) => {
      if (response.status === 200) {
        setResponse(true);
        console.log("Registro Creado");
        usehistory.push("/Dashboard/CliMaestroView");
      } else {
        console.log("Fallo la creacion del regisro");
      }
    });
  };

  return {
    response,
    handleSubmitLogin,
    handleUpdate,
    handleAdd,
  };
};

// export async function postAction(controller, model) {
//   const postData = async () => {
//     var axios = require("axios");
//     var config = {
//       method: "post",
//       url: `${baseUrl}${controller}`,
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       data: model,
//     };
//     try {
//       const response = await axios(config);
//       console.log(response.data.isSuccess);
//       return response;
//     } catch (error) {
//       return error.response.data;
//     }
//   };
//   postData(controller);
// }
