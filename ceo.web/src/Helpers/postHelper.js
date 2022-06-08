import { helpHttp } from "./HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
export async function postAction(controller, model, token) {
  //let token = "";
  let url = `${baseUrl}${controller}`;
  const response = "";
  let options = {
    headers: {
      Autorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: model,
  };

  helpHttp()
    .post(url, options)
    .then((res) => {
      console.log(res);
      response = res;
    });

  return response;
}

// try {
//   const response = await axios({
//     method: "POST",
//     url: `${baseUrl}${controller}`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },

//     data: model,
//   });
//   console.log(response);
//   return response;
// } catch (error) {
//   return error.response;
// }
