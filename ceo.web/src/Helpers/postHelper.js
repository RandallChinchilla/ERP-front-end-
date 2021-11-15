import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function postAction(controller, model, token) {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}${controller}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: model,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
}
