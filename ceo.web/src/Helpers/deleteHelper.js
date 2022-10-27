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
}
