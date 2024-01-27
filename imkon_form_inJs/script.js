const elBlock = document.querySelector(".block");
const elBlockTwo = document.querySelector(".blockTwo");

const heading1 = document.createElement("h1");
const form = document.createElement("form");
const labelOne = document.createElement("label");
const inputEmail = document.createElement("input");
const passwordDiv = document.createElement("div");
const labelTwo = document.createElement("label");
const linkForgot = document.createElement("a");
const inputPassword = document.createElement("input");
const buttonLink = document.createElement("a");
const orDiv = document.createElement("div");
const hrOne = document.createElement("hr");
const hrTwo = document.createElement("hr");
const span = document.createElement("span");
const iconDiv = document.createElement("div");
const googleLink = document.createElement("a");
const iconGoogle = document.createElement("i");
const facebookLink = document.createElement("a");
const iconFacebook = document.createElement("i");
const twitterLink = document.createElement("a");
const iconTwitter = document.createElement("i");
const vkLink = document.createElement("a");
const iconVk = document.createElement("i");
const yandexLink = document.createElement("a");
const iconYandex = document.createElement("i");
const appleLink = document.createElement("a");
const iconApple = document.createElement("i");
const byEnter = document.createElement("p");

const newProfile = document.createElement("p");
const regesterLink = document.createElement("a");



elBlock.append(heading1, form);
form.append(labelOne, inputEmail);
form.append(passwordDiv);
passwordDiv.append(labelTwo, linkForgot);
form.append(inputPassword, buttonLink);
form.append(orDiv);
orDiv.append(hrOne, span, hrTwo);
form.append(iconDiv);
iconDiv.append(googleLink, facebookLink, twitterLink, vkLink, yandexLink, appleLink);
googleLink.append(iconGoogle);
facebookLink.append(iconFacebook);
twitterLink.append(iconTwitter);
vkLink.append(iconVk);
yandexLink.append(iconYandex);
appleLink.append(iconApple);
form.append(byEnter);
elBlockTwo.append(newProfile, regesterLink);


document.body.setAttribute("class", "h-14 bg-gradient-to-r from-slate-900 to-cyan-950");
elBlock.setAttribute("class", " bg-[#3F474C] w-full max-w-[450px] mx-auto mt-32 rounded-md p-7");
heading1.setAttribute("class", "font-bold text-white/80 text-xl tracking-wider pb-6");

labelOne.setAttribute("class", "text-white/80 font-medium block");
labelOne.setAttribute("for", "email");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("class", "w-full mt-1 border-2 border-transparent focus:border-2 focus:border-blue-700 outline-none text-white/70 rounded-sm py-3 px-4 text-sm bg-[#121c2540]");
inputEmail.setAttribute("placeholder", "Pochta yoki telefon raqamingizni kiriting");

labelTwo.setAttribute("class", "text-white/80 font-medium block");
labelTwo.setAttribute("for", "password");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("id", "password");
inputPassword.setAttribute("class", "w-full mt-1 border-2 border-transparent focus:border-2 focus:border-blue-700 outline-none text-white/70 rounded-sm py-3 px-4 text-sm bg-[#121c2540]");
inputPassword.setAttribute("placeholder", "Parolingizni kiriting");

passwordDiv.setAttribute("class", "flex justify-between pt-4 items-center ");
linkForgot.setAttribute("href", "#");
linkForgot.setAttribute("class", "text-zinc-400 text-xs");

buttonLink.setAttribute("href", "about page/about.html");
buttonLink.setAttribute("class", "text-center block mt-4 py-2 font-medium text-sm cursor-pointer rounded-sm text-white/80 bg-blue-600 hover:bg-blue-700 transition duration-300");
orDiv.setAttribute("class", "pt-4 flex flex-row items-center justify-between");
span.setAttribute("class", "text-zinc-400 px-3 text-sm");
hrOne.setAttribute("class", "flex-auto border-0 h-[1px] bg-zinc-400");
hrTwo.setAttribute("class", "flex-auto border-0 h-[1px] bg-zinc-400");

iconDiv.setAttribute('class', 'flex justify-between items-center pt-4')
googleLink.setAttribute('href', '#');
facebookLink.setAttribute('href', '#');
twitterLink.setAttribute('href', '#');
vkLink.setAttribute('href', '#');
yandexLink.setAttribute('href', '#');
appleLink.setAttribute('href', '#');
regesterLink.setAttribute('href', 'about page/about.html');
googleLink.setAttribute('class', 'bg-white/30 hover:bg-white py-[5px] px-[10px] duration-300 rounded-md group cursor-pointer')
iconGoogle.setAttribute('class', 'fa-brands fa-google text-white group-hover:text-rose-600')
facebookLink.setAttribute('class', 'bg-white/30 hover:bg-gradient-to-r from-blue-500 to-blue-700 py-[5px] px-[13px] rounded-md cursor-pointer')
iconFacebook.setAttribute('class', 'fa-brands fa-facebook-f text-white')
twitterLink.setAttribute('class', 'bg-white/30 hover:bg-sky-500 py-[5px] px-[10px] duration-300 rounded-md  cursor-pointer')
iconTwitter.setAttribute('class', 'fa-brands fa-twitter text-white')
vkLink.setAttribute('class', 'bg-white/30 hover:bg-blue-500 py-[5px] px-[10px] duration-300 rounded-md  cursor-pointer')
iconVk.setAttribute('class', 'fa-brands fa-vk text-white')
yandexLink.setAttribute('class', 'bg-white/30 hover:bg-white py-[5px] px-[13px] duration-300 rounded-md group cursor-pointer')
iconYandex.setAttribute('class', 'fa-brands fa-yandex text-white group-hover:text-rose-600')
appleLink.setAttribute('class', 'bg-white/30 py-[5px] px-[11px] rounded-md group cursor-pointer')
iconApple.setAttribute('class', 'fa-brands fa-apple text-white duration-100 group-hover:text-gray-400')

byEnter.setAttribute('class', 'text-zinc-400 px-3 text-sm text-center pt-4')

elBlockTwo.setAttribute("class", " bg-[#3F474C] w-full max-w-[450px] mx-auto my-6 rounded-md px-7 py-3 flex items-center justify-between");
newProfile.setAttribute("class", "text-zinc-400 px-3 text-sm");
regesterLink.setAttribute("class", "text-white/70 rounded-sm py-2 px-8 text-sm bg-[#121c2540] hover:bg-[#132c6025]");


heading1.innerHTML = "KIRISH";
labelOne.innerHTML = "Login";
labelTwo.innerHTML = "Password";
linkForgot.innerHTML = "Parolni unutdingizmi?";
buttonLink.innerHTML = "Tizimga kirish";
span.innerHTML = "Yoki";
byEnter.innerHTML = "Orqali kiring";
newProfile.innerHTML = "Tarmoqda yangimisiz?"
regesterLink.innerHTML = "Ro‘yxatdan o‘tish?";