const profileImg=document.querySelector("[userPhoto]");
const userName=document.querySelector("[userName]");
const profileLink=document.querySelector("[profileLink]");
const joinDate=document.querySelector(".join-date");
const boiData=document.querySelector(".bio-data");
const repoData=document.querySelector("[repos]");
const followersData=document.querySelector("[followers]");
const followingData=document.querySelector("[following]");
const locationData=document.querySelector(".location");
const modeBtn=document.querySelector("[mode]");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const searchBtn=document.querySelector(".search-btn");
const input=document.querySelector("[userInput]");
const url = "https://api.github.com/users/";

getUserData("https://api.github.com/users/mahendrajangid2583");

searchBtn.addEventListener("click",function(){
    if (input.value !== "") {
        getUserData(url + input.value);
      }
      console.log("button clicked");
});

input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        searchBtn.click();
    }
});

const errorMsg=document.querySelector(".error");

input.addEventListener("input", function () {
    errorMsg.style.display = "none";
 });


async function getUserData(gitUrl) {
    try {
        const response=await fetch(gitUrl);
        const data=await response.json();
        if (!response.ok) {
            throw data;
        }
          console.log(data);
          updateProfile(data);
        
        
    } catch (error) {
        console.log(error);
        errorMsg.style.display="block";
        errorMsg.innerText=error?.message;
    }
     
      
}
const blog=document.querySelector("[blog]");
const twitterLink=document.querySelector("[twitter]");
const companyName=document.querySelector("[company]");
const linkedin=document.querySelector(".block2");
const twitter=document.querySelector(".block3");
 
function updateProfile(data){
    errorMsg.style.display="none";
    profileImg.src=data?.avatar_url;
    userName.innerText=data?.name;
    profileLink.href=data?.html_url;
    profileLink.innerText=`@ ${data?.login}`;
    datesegments = data.created_at.split("T").shift().split("-");
    joinDate.innerText=`Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    boiData.innerText=data?.bio;
    if(boiData.innerText==""){
        boiData.innerText="This Profile has no bio";
    }

    repoData.innerText=data?.public_repos;
    followersData.innerText=data?.followers;
    followingData.innerText=data?.following;
    locationData.innerText=data?.location;
    blog.innerText=data?.blog;
    linkedin.href=data?.blog;
    twitterLink.innerText=data?.twitter_username;
    twitter.href=data?.twitter_username;
    companyName.innerText=data?.company;

}


const modeNam=document.querySelector("[modeName]");
const modeImg=document.querySelector("[modeImg]");
const bg=document.querySelector(".search-container");
const userBg=document.querySelector(".user-container");
const bodyBg=document.getElementsByTagName("body");
const headName=document.querySelector("[headName]");
const repoContainer=document.querySelector(".repo-detail");
const dataRepo=document.querySelectorAll(".data");
const div_array = [...dataRepo];

const addressBlock=document.querySelectorAll(".block");
const block_array=[...addressBlock];


// const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
// const darkMode=flase;

let currentMode="dark";

if (localStorage.getItem("mode")=="dark") {
  darkMode();
} else {
  lightMode();
}



modeBtn.addEventListener("click",function(){
    if(currentMode=="dark"){
        localStorage.setItem("mode","light");
       lightMode();
    }
    else{
        localStorage.setItem("mode","dark");
       darkMode();
    }
})

function lightMode(){
    currentMode="light";
    modeNam.innerText="light";
       modeImg.src="./assets/Sun-512.webp";
       bg.classList.add("light");
       
       input.setAttribute('style','color:black');
       userBg.classList.add("light");
       userName.setAttribute('style','color:black');
       joinDate.setAttribute('style','color:black');
       document.body.style.background = "white";
       modeNam.setAttribute('style','color:#141D2F')
       headName.setAttribute('style','color:#141D2F');
       repoContainer.classList.add("light");
       
       div_array.forEach(dataRepo => {
        dataRepo.classList.add("light");
       });
        
       block_array.forEach(addressBlock => {
        addressBlock.classList.add("light");
       });
}

function darkMode(){
    currentMode="dark";
    modeNam.innerText="dark";
    modeImg.src="./assets/moon-icon.svg";
    console.log("work");
    bg.classList.remove("light");
    input.setAttribute('style','color:white');
   
    userBg.classList.remove("light");
    userName.setAttribute('style','color:white');
    joinDate.setAttribute('style','color:white');
    document.body.style.background = "#141D2F";
    modeNam.setAttribute('style','color:gainsboro');
    headName.setAttribute('style','color:white');
    repoContainer.classList.remove("light");
    
    
   div_array.forEach(dataRepo => {
    dataRepo.classList.remove("light");
   });
   block_array.forEach(addressBlock => {
    addressBlock.classList.remove("light");
   });
}

  

