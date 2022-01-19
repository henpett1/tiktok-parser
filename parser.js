const userdata = require(`${process.cwd()}/user_data.json`);
const fs = require("fs");

var logo = [
  "████████╗██╗██╗  ██╗████████╗ ██████╗ ██╗  ██╗    ██████╗  █████╗ ██████╗ ███████╗███████╗██████╗ ",
  "╚══██╔══╝██║██║ ██╔╝╚══██╔══╝██╔═══██╗██║ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗",
  "   ██║   ██║█████╔╝    ██║   ██║   ██║█████╔╝     ██████╔╝███████║██████╔╝███████╗█████╗  ██████╔╝",
  "   ██║   ██║██╔═██╗    ██║   ██║   ██║██╔═██╗     ██╔═══╝ ██╔══██║██╔══██╗╚════██║██╔══╝  ██╔══██╗",
  "   ██║   ██║██║  ██╗   ██║   ╚██████╔╝██║  ██╗    ██║     ██║  ██║██║  ██║███████║███████╗██║  ██║",
  "   ╚═╝   ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝",
].join("\n");

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};
start();
async function start() {
  console.clear();
  console.log(logo);
  console.log("made by: henpett1#6870");
  console.log("press any key to run!");
  await keypress();
  await video();
  await hashtag();
  await favsound();
  await favvid();
  await following();
  await likevid();
  await logininfo();
  await videoraw();
  await favhashtag();
  await comments();
  await process.exit();
}

async function video() {
  let wadata = userdata["Activity"]["Video Browsing History"]["VideoList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no videos watched");
    vdarr = "no videos watched";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["VideoLink"];

    let finnihsed = `-------------------------------------\ndate -> ${datee}\nvideolink -> ${vd}\n-------------------------------------\n`;

    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./video_list.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function videoraw() {
  let wadata = userdata["Activity"]["Video Browsing History"]["VideoList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no videos watched");
    vdarr = "no videos watched";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let vd = wadata[i]["VideoLink"];

    let finnihsed = `videolink -> ${vd}\n`;
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./video_raw.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function hashtag() {
  let wadata = userdata["Activity"]["Hashtag"]["HashtagList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no hashtags");
    vdarr = "no hashtags";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["HashtagName"];
    let vd = wadata[i]["HashtagLink"];

    let finnihsed = `-------------------------------------\nhashtag -> ${datee}\nHashtagLink -> ${vd}\n-------------------------------------\n`;
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./hashtags.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function favsound() {
  let wadata = userdata["Activity"]["Favorite Sounds"]["FavoriteSoundList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no fav sounds");
    vdarr = "no fav sounds";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["Link"];

    let finnihsed = `-------------------------------------\ndate -> ${datee}\nSoundlink -> ${vd}\n-------------------------------------\n`;
    //let finnihsed = `videolink -> ${vd}\n`
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./sounds_fav.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function favvid() {
  let wadata = userdata["Activity"]["Favorite Videos"]["FavoriteVideoList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no fav videos");
    vdarr = "no fav videos";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["Link"];

    let finnihsed = `-------------------------------------\ndate -> ${datee}\nvideolink -> ${vd}\n-------------------------------------\n`;
    //let finnihsed = `videolink -> ${vd}\n`
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./video_fav.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function following() {
  let wadata = userdata["Activity"]["Following List"]["Following"];

  let vdarr = [];
  if (wadata === null) {
    console.log("you are not following anyone");
    vdarr = "you are not following anyone";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["UserName"];

    let finnihsed = `-------------------------------------\nDate -> ${datee}\nUserName -> ${vd}\n-------------------------------------\n`;
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./followers.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function likevid() {
  let wadata = userdata["Activity"]["Like List"]["ItemFavoriteList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no liked vids");
    vdarr = "no liked vids";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["VideoLink"];

    let finnihsed = `-------------------------------------\ndate -> ${datee}\nvideolink -> ${vd}\n-------------------------------------\n`;
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./video_like.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function logininfo() {
  let wadata = userdata["Activity"]["Login History"]["LoginHistoryList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no login info");
    vdarr = "no login info";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let ip = wadata[i]["IP"];
    let devmod = wadata[i]["DeviceModel"];
    let devos = wadata[i]["DeviceSystem"];
    let nw = wadata[i]["NetworkType"];
    let car = wadata[i]["Carrier"];

    let finnihsed = `-------------------------------------\ndate -> ${datee}\nIP -> ${ip}\nDeviceModel -> ${devmod}\nDeviceSystem -> ${devos}\nNetworkType -> ${nw}\nCarrier -> ${car}\n-------------------------------------\n`;
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./logins.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
}

async function favhashtag() {
  let wadata = userdata["Activity"]["Favorite Hashtags"]["FavoriteHashtagList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no fav hashtags");
    vdarr = "no fav hashtags";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["HashtagName"];
    let vd = wadata[i]["HashtagLink"];

    let finnihsed = `-------------------------------------\nhashtag -> ${datee}\nHashtagLink -> ${vd}\n-------------------------------------\n`;
    //let finnihsed = `videolink -> ${vd}\n`
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./hashtag_fav.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });

  
}

async function comments() {
  let wadata = userdata["Comment"]["Comments"]["CommentsList"];

  let vdarr = [];
  if (wadata === null) {
    console.log("no fav hashtags");
    vdarr = "no fav hashtags";
  } else {
  for (let i = 0; i < wadata.length; i++) {
    let datee = wadata[i]["Date"];
    let vd = wadata[i]["Comment"];

    let finnihsed = `-------------------------------------\nDate -> ${datee}\nComment -> ${vd}\n-------------------------------------\n`;
    //let finnihsed = `videolink -> ${vd}\n`
    console.log(finnihsed);
    vdarr.push(finnihsed);
  }
}
  let fin = vdarr.toString().replace(/,/g, "");
  fs.writeFileSync("./comments.txt", fin, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });

}