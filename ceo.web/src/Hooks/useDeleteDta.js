const baseUrl = process.env.REACT_APP_BASE_URL;
export async function useDeleteData(controller, model) {
  const postData = async () => {
    var axios = require("axios");
    var config = {
      method: "delete",
      url: `${baseUrl}${controller}`,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      data: model,
    };
    try {
      const response = await axios(config);
      console.log(response);
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  };
  postData(controller);
}
