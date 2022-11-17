import { useState } from "react";
import { helpHttp } from "./HelpHttp";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function putAction(controller, model) {
  const userLoggedToken = localStorage.getItem("mytoken");
  let response = null;
  let error = null;
  let url = `${baseUrl}${controller}`;
  let options = {
    headers: {
      Autorization: `Bearer ${userLoggedToken}`,
      "content-type": "application/json",
    },
    body: model,
  };

  response = helpHttp().put(url, options);

  return response;
}
