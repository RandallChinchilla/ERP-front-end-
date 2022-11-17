import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delAction } from "../Actions/Index";
import { helpHttp } from "./HelpHttp";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function deleteAction(controller, model, field) {
  const userLoggedToken = localStorage.getItem("mytoken");
  let url = `${baseUrl}${controller}`;
  let response = "";
  let options = {
    headers: {
      Authorization: `Bearer ${userLoggedToken}`,
      "content-type": "application/json",
    },
    body: model,
  };

  response = helpHttp().del(url, options);

  return response;
}
