const baseUrl = process.env.REACT_APP_BASE_URL;

export async function postAction(controller, model) {
  const postData = async () => {
    var axios = require("axios");
    var config = {
      method: "post",
      url: `${baseUrl}${controller}`,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      data: model,
    };
    try {
      const response = await axios(config);
      console.log(response.data.isSuccess);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };
  postData(controller);
}
