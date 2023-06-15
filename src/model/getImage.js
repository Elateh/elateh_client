import IP from "../References/IP";

export default getImageByNameAndType = (name) => {
  fetch(IP + "/public/images" + name, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      return data;
    });
};
