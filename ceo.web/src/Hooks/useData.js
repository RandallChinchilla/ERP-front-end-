const baseUrl = process.env.REACT_APP_BASE_URL;

export const useData = (initialForm) => {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    createToken(form).then((tokenresponse) => {
      //window.localStorage.setItem("userLogged", JSON.stringify(response.data));
      if (tokenresponse.status === 201) {
        window.localStorage.setItem(
          "userLoggedToken",
          JSON.stringify(tokenresponse.data.token)
        );

        login(form, tokenresponse.data.token).then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem(
              "userLogged",
              JSON.stringify(response.data.result)
            );
            setForm(initialForm);
            if (response.data.result.rol == "Admin") {
              usehistory.push("./Dashboard");
            } else {
              usehistory.push("./FatherPay");
            }
          } else {
            setResponse(true);
          }
        });
      } else {
        setErrors("Error de usuario o contraseña");
        setResponse(true);
      }
    });

    return {
      form,
      response,
      handleSubmitLogin,
    };
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
