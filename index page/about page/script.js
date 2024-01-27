const elBlock = document.querySelector(".block");
const elBlockTwo = document.querySelector(".blockTwo");


const form = document.createElement("form");
const heading1 = document.createElement("h1");

const inputDiv = document.createElement("div");
const inputNameDiv = document.createElement("div");
const labelOne = document.createElement("label");
const inputName = document.createElement("input");

const inputLastnameDiv = document.createElement("div");
const labelTwo = document.createElement("label");
const inputLastame = document.createElement("input");

const labelThree = document.createElement("label");
const inputPassword = document.createElement("input");


const labelBirth = document.createElement("label");
const selectDiv = document.createElement("div");
const selectIcon1 = document.createElement("i");
const selectDay = document.createElement("div");
const option1 = document.createElement("div");
const optionDiv = document.createElement("div");
const option2 = document.createElement("div");
const option3 = document.createElement("div");

const selectIcon2 = document.createElement("i");
const selectMonth = document.createElement("div");
const optionMonth1 = document.createElement("div");
const optionMonthDiv = document.createElement("div");
const optionMonth2 = document.createElement("div");
const optionMonth3 = document.createElement("div");

const selectIcon3 = document.createElement("i");
const selectYear = document.createElement("div");
const optionYear1 = document.createElement("div");
const optionYearDiv = document.createElement("div");
const optionYear2 = document.createElement("div");
const optionYear3 = document.createElement("div");

const radioDiv = document.createElement("div"); 
const radioLabel = document.createElement("label"); 
const maleLabel = document.createElement("label"); 
const femaleLabel = document.createElement("label"); 
const maleRadio = document.createElement("input"); 
const femaleRadio = document.createElement("input"); 
const maleDiv = document.createElement("div"); 
const femaleDiv = document.createElement("div"); 
const buttonLink = document.createElement("a");
const enterButton = document.createElement("div");
const byEnter = document.createElement("p");
const enterLinkOne = document.createElement("a");

const newProfile = document.createElement("p");
const regesterLink = document.createElement("a");




elBlock.append(heading1, form);
form.append(inputDiv);
inputDiv.append(inputNameDiv, inputLastnameDiv);
inputNameDiv.append(labelOne, inputName);
inputLastnameDiv.append(labelTwo, inputLastame);
form.append(labelThree, inputPassword);
form.append(labelBirth, selectDiv);
selectDiv.append(selectDay, selectIcon1, selectMonth, selectIcon2, selectYear, selectIcon3);
selectDay.append( option1, optionDiv);
selectMonth.append( optionMonth1, optionMonthDiv);
selectYear.append( optionYear1, optionYearDiv);
optionDiv.append(option2, option3)
optionMonthDiv.append(optionMonth2, optionMonth3)
optionYearDiv.append(optionYear2, optionYear3);
form.append(radioLabel, radioDiv);
radioDiv.append(maleDiv, femaleDiv);
maleDiv.append(maleRadio, maleLabel)
femaleDiv.append(femaleRadio, femaleLabel)

form.append(buttonLink);
form.append(enterButton);
enterButton.append(byEnter);

elBlockTwo.append(newProfile, regesterLink);






document.body.setAttribute("class", "h-14 bg-gradient-to-r from-slate-900 to-cyan-950");
elBlock.setAttribute("class", " bg-[#3F474C] w-full max-w-[600px] mx-auto mt-32 rounded-md p-7");
heading1.setAttribute("class", "font-bold text-white/80 text-xl tracking-wider pb-6");
inputDiv.setAttribute('class', 'flex justify-between items-center pb-6')

labelOne.setAttribute("class", "text-white/80 font-xs font-medium block");
labelOne.setAttribute("for", "email");
labelTwo.setAttribute("class", "text-white/80 font-xs font-medium block");
labelTwo.setAttribute("for", "familiya");
labelThree.setAttribute("class", "text-white/80 font-xs font-medium block pb-2");
labelThree.setAttribute("for", "password");
labelBirth.setAttribute("class", "text-white/80 font-xs font-medium block pt-6 pb-2");
radioLabel.setAttribute("class", "text-white/80 font-xs font-medium block pt-6 ");
maleLabel.setAttribute("class", "text-white/80 font-xs font-medium block group-hover:text-white/30 ");
femaleLabel.setAttribute("class", "text-white/80 font-xs font-medium block group-hover:text-white/30");


inputName.setAttribute("type", "text");
inputName.setAttribute("id", "email");
inputName.setAttribute("class", "mt-2 w-[260px] border-2 border-transparent focus:border-2 focus:border-blue-700 outline-none text-white/70 rounded-sm py-2 px-4 text-sm bg-[#121c2540]");
inputName.setAttribute("placeholder", "Ismingiz");


inputLastame.setAttribute("type", "text");
inputLastame.setAttribute("id", "familiya");
inputLastame.setAttribute("class", "mt-2 w-[260px] border-2 border-transparent focus:border-2 focus:border-blue-700 outline-none text-white/70 rounded-sm py-2 px-4 text-sm bg-[#121c2540]");
inputLastame.setAttribute("placeholder", "Familiyangiz");

inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("id", "password");
inputPassword.setAttribute("class", "w-full mt-1 border-2 border-transparent focus:border-2 focus:border-blue-700 outline-none text-white/70 rounded-sm py-2 px-4 text-sm bg-[#121c2540]");
inputPassword.setAttribute("placeholder", "info@imkon.uz");



selectDiv.setAttribute("class", "flex relative justify-between");
selectDay.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none rounded-md relative");
selectMonth.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none rounded-md relative");
selectYear.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none rounded-md relative");
selectIcon1.setAttribute('class', 'fa-solid fa-angle-down absolute left-[130px] top-3 text-white');
selectIcon2.setAttribute('class', 'fa-solid fa-angle-down absolute right-[20px] top-3 text-white');
selectIcon3.setAttribute('class', 'fa-solid fa-angle-down absolute right-[210px] top-3 text-white');


radioDiv.setAttribute('class', 'flex items-center pt-4 gap-6');
maleDiv.setAttribute('class', 'flex items-center gap-3 group');
femaleDiv.setAttribute('class', 'flex items-center gap-3 group');
maleRadio.setAttribute("type", "radio");
maleRadio.setAttribute("class", "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600");

femaleRadio.setAttribute("type", "radio");
femaleRadio.setAttribute("class", "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600");

buttonLink.setAttribute("href", "../index.html");
buttonLink.setAttribute("class", "text-center block mt-4 py-2 font-medium text-sm cursor-pointer rounded-sm text-white/80 bg-blue-600 hover:bg-blue-700 transition duration-300");
enterButton.setAttribute('class', 'pt-4');
byEnter.setAttribute('class', 'text-zinc-400 block text-center ');

elBlockTwo.setAttribute("class", " bg-[#3F474C] w-full max-w-[600px] mx-auto mt-4 rounded-md px-7 py-4 flex items-center justify-between");
newProfile.setAttribute("class", "text-zinc-400 px-3 text-sm");
regesterLink.setAttribute("class", "text-white/70 rounded-sm py-2 px-8 text-sm bg-[#121c2540] hover:bg-[#132c6025]");
regesterLink.setAttribute("href", "../index.html");




optionDiv.setAttribute('class', 'hidden');
selectDay.addEventListener('click', () =>  {
    selectDay.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none elative rounded-t-md")
    optionDiv.setAttribute('class', 'block absolute bg-[#121c2540] w-[170px] pl-3 left-0 top-[100%] rounded-b-md')    
})

optionMonthDiv.setAttribute('class', 'hidden');
selectMonth.addEventListener('click', () =>  {
    selectMonth.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none relative rounded-t-md")
    optionMonthDiv.setAttribute('class', 'block absolute bg-[#121c2540] w-[170px] pl-3 left-0 top-[100%] rounded-b-md')    
})

optionYearDiv.setAttribute('class', 'hidden');
selectYear.addEventListener('click', () =>  {
    selectYear.setAttribute("class", "bg-[#121c2540] py-2 w-[170px] pl-3 text-white appearance-none relative rounded-t-md")
    optionYearDiv.setAttribute('class', 'block absolute bg-[#121c2540] w-[170px] pl-3 left-0 top-[100%] rounded-b-md')    
})




heading1.innerHTML = "KIRISH";
labelOne.innerHTML = "Ism";
labelTwo.innerHTML = "Familiya";
labelThree.innerHTML = "Elektron pochtangiz";
labelBirth.innerHTML = "Tugʻilgan kuningiz";
radioLabel.innerHTML = "Jinsingiz";
maleLabel.innerHTML = "Erkak";
femaleLabel.innerHTML = "Ayol";
option1.innerHTML = "1";
option2.innerHTML = "2";
option3.innerHTML = "3";
optionMonth1.innerHTML = "2010";
optionMonth2.innerHTML = "2012";
optionMonth3.innerHTML = "2013";
optionYear1.innerHTML = "Sentabr";
optionYear2.innerHTML = "Oktabr";
optionYear3.innerHTML = "Noyabr";
buttonLink.innerHTML = "Tizimga kirish";
byEnter.innerHTML = `Ro‘yxatdan o‘tish bilan siz <a style="color: #fff; font-size:14px" href="#">Foydalanish qoidalar</a> va <a style="color: #fff; font-size:14px" href="#">maxfiylik siyosatiga</a> roziligingzini bildirasiz`;

newProfile.innerHTML = "Akkauntingiz bormi?"
regesterLink.innerHTML = "Kirish";