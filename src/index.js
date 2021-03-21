import "./styles.css";

// const synChronousFunc = () => {
//   console.log("これは同期処理関数内のログです。");
//   return "完了"

// }

// const message = "同期処理"
// const result = synChronousFunc()
// console.log(message + result)

// const getGitUserName = () => {
//   const url = "https://api.github.com/users/Ryota-takei";

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log("これは非同期処理成功のメッセージです。");
//       return json.login;
//     }).catch(error => {
//       console.log("これは非同期処理失敗のメッセージです。", error)
//       return null
//     })
// };

// const message = "GitのユーザーIDは"
// const username = getGitUserName();
// console.log(message + username)

// promise

// const getGitUserName = () => {
//   return new Promise((resolve, reject) => {
//     const url = "https://api.github.com/users/Ryota-takei";

//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log("これは非同期処理成功のメッセージです。");
//         return resolve(json.login);
//       })
//       .catch((error) => {
//         console.log("これは非同期処理失敗のメッセージです。", error);
//         return reject(null);
//       });
//   });
// };

// const message = "GitのユーザーIDは";
// getGitUserName().then((username) => {
//   console.log(message + username);
// });

//async/awaot

const getGitUserName = async () => {
  const message = "GitのユーザーIDは";
  const url = "https://api.github.com/users/Ryota-takei";

  const json = await fetch(url)
    .then((res) => {
      console.log("これは非同期処理成功のメッセージです。");
      return res.json();
    })
    .catch((error) => {
      console.log("これは非同期処理失敗のメッセージです。", error);
      return null;
    });

  console.log(message + json.login);
};

getGitUserName();
