import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function deleteAction(controller, model, token) {
  console.log(model);
  try {
    const response = await axios({
      method: "delete",
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
