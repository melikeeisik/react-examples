import  {getData}  from "./app.js";
const userId = 1
getData(userId)
  .then(({ user, post }) => {
    console.log("Kullanıcı:", user);
    console.log("Post'lar:", post);
  })
  .catch((error) => {
    console.error("İşlem başarısız:", error.message);
  });