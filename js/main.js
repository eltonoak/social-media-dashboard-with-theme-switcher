const button = document.querySelector(".button");
const usersSection = document.querySelector(".users");
const user = document.querySelector(".user");
const socialsSection = document.querySelector(".socials");
const social = document.querySelector(".social");
const head = document.querySelector("head");

button.addEventListener('click', () => {
  button.querySelector('.btn').classList.toggle('on');

  if (button.querySelector('.btn').classList.contains('on')) {
    button.classList.add('dark-active');
    const dark = document.createElement("link");
    dark.setAttribute("rel", "stylesheet");
    dark.setAttribute("href", "css/dark.css");
    head.appendChild(dark);
  } else {
    head.lastChild.remove();
    button.classList.remove('dark-active');
  }

})

const users = [
  {
    icon: 'images/icon-twitter.svg',
    name: "@nathanf",
    followers: "1044",
    text: "Followers",
    today: "99 Today",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-instagram.svg',
    name: "@realnathanf",
    followers: "11k",
    text: "Followers",
    today: "1099 Today",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-youtube.svg',
    name: "Nathan F.",
    followers: "8239",
    text: "Subscribers",
    today: "144 Today",
    arrow: 'images/icon-down.svg',
    textColor: 'text-red'
  }
];
const socials = [
  {
    icon: 'images/icon-facebook.svg',
    desc: "Likes",
    total: "52",
    percent: "2%",
    arrow: 'images/icon-down.svg',
    textColor: 'text-red'
  },
  {
    icon: 'images/icon-instagram.svg',
    desc: "Likes",
    total: "5462",
    percent: "2257%",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-instagram.svg',
    desc: "Profile Views",
    total: "52k",
    percent: "1375%",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-twitter.svg',
    desc: "Retweets",
    total: "117",
    percent: "303%",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-twitter.svg',
    desc: "Likes",
    total: "507",
    percent: "553%",
    arrow: 'images/icon-up.svg',
    textColor: 'text-green'
  },
  {
    icon: 'images/icon-youtube.svg',
    desc: "Likes",
    total: "107",
    percent: "19%",
    arrow: 'images/icon-down.svg',
    textColor: 'text-red'
  },
  {
    icon: 'images/icon-youtube.svg',
    desc: "Total Views",
    total: "1407",
    percent: "12%",
    arrow: 'images/icon-down.svg',
    textColor: 'text-red'
  }

];

users.map(usr => {
  const userClone = user.cloneNode(true);
  userClone.querySelector(".top img").src = usr.icon;
  userClone.querySelector(".top .name").innerHTML = usr.name;
  userClone.querySelector(".number").innerHTML = usr.followers;
  userClone.querySelector(".text").innerHTML = usr.text;
  userClone.querySelector(".text-green").innerHTML = usr.today;
  userClone.querySelector(".bottom-text img").src = usr.arrow;
  userClone.querySelector(".text-green").classList.add(usr.textColor);
  usersSection.appendChild(userClone);
});
socials.map(soc => {
  const socialClone = social.cloneNode(true);
  socialClone.querySelector(".top .desc").innerHTML = soc.desc;
  socialClone.querySelector(".top img").src = soc.icon;
  socialClone.querySelector(".total").innerHTML = soc.total;
  socialClone.querySelector(".percent").innerHTML = soc.percent;
  socialClone.querySelector(".percent").classList.add(soc.textColor);
  socialClone.querySelector(".bottom img").src = soc.arrow;
  socialsSection.appendChild(socialClone);
});
