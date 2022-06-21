import { useState } from "react";
import { helpHttp } from "./HelpHttp";

const baseUrl = process.env.REACT_APP_BASE_URL;
export async function postAction(controller, model, token) {
  let url = `${baseUrl}${controller}`;
  let response = "";
  let options = {
    headers: {
      Autorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: model,
  };

  response = helpHttp().post(url, options);

  return response;
}
