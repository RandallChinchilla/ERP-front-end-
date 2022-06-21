import axios from "axios";
import { helpHttp } from "./HelpHttp";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function deleteAction(controller, model, token) {
  let url = `${baseUrl}${controller}`;
  let response = "";
  let options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: model,
  };

  response = helpHttp().del(url, options);

  return response;
  // try {
  //   const response = await axios({
  //     method: "delete",
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
}
