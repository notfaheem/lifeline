//popup
const popup = document.getElementById("edit-pp");
const popupBg = document.getElementById("bg-pp");
function openPopup(){
    activityStart.value = lastTime;
    activityEnd.min = lastTime;
    popupBg.style.opacity = 1;
    popup.style.opacity = 1;
    popupBg.style.pointerEvents = "all";
    popup.style.pointerEvents = "all";
}
function closePopup(){
    popupBg.style.opacity = 0;
    popup.style.opacity = 0;
    popupBg.style.pointerEvents = "none";
    popup.style.pointerEvents = "none";
}
const addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", ()=>{
    openPopup()
})
const closeBtn = document.getElementById("close-pp");
closeBtn.addEventListener("click", ()=>{
    closePopup();
})
const moodFire = document.getElementById("m-fire")
const moodGood = document.getElementById("m-good")
const moodNeu = document.getElementById("m-neu")
const moodBad = document.getElementById("m-bad")
const labelFire = document.querySelector('label[for="m-fire"]')
const labelGood = document.querySelector('label[for="m-good"]')
const labelNeu = document.querySelector('label[for="m-neu"]')
const labelBad = document.querySelector('label[for="m-bad"]')
labelFire.addEventListener("click",()=>{
    labelFire.style.border = "1px solid #fff";
    labelGood.style.border = "";
    labelNeu.style.border = "";
    labelBad.style.border = "";
});
labelGood.addEventListener("click",()=>{
    labelGood.style.border = "1px solid #fff";
    labelFire.style.border = "";
    labelNeu.style.border = "";
    labelBad.style.border = "";
});
labelNeu.addEventListener("click",()=>{
    labelNeu.style.border = "1px solid #fff";
    labelFire.style.border = "";
    labelGood.style.border = "";
    labelBad.style.border = "";
});
labelBad.addEventListener("click",()=>{
    labelBad.style.border = "1px solid #fff";
    labelFire.style.border = "";
    labelNeu.style.border = "";
    labelGood.style.border = "";
});
// setInterval(() => {
//     const checkedRadio = document.querySelector('input[name="mood"]:checked');
//     console.log(checkedRadio);
// }, 1000);


// data managing
const barichColors = [
  "#00043F",
  "#001A38",
  "#003131",
  "#173518",
  "#2F3A00",
  "#3C2D00",
  "#461E0A",
  "#410F1E",
  "#370532",
  "#28003C",
  "#0F0041",
  "#000F41",
  "#00233C",
  "#002D28",
  "#1E320A"
];
const bar = document.getElementById("bar")
const activityName = document.getElementById("activity-name");
const activityStart = document.getElementById("activity-start");
const activityEnd = document.getElementById("activity-end");
let lastTime = "00:00";

let datas = [];
function submit(){
    let newTask = {
        id: datas.length + 1,
        name: activityName.value,
        start: activityStart.value,
        end: activityEnd.value,
        mood: document.querySelector('input[name="mood"]:checked').value,
        color: datas.length <= 15 ? barichColors[datas.length] : "rgb(0, 4, 63)" 
    }
    datas.push(newTask);
    console.log(datas);

    let lastTask = datas[datas.length -1];
    let width = getDuration(lastTask.start , lastTask.end);
    console.log(width)
    width = width / 14.4;
    console.log(width + "%")

    let newBarich = document.createElement("div")
    newBarich.className = "barich";
    newBarich.style.width = width + "%";
    newBarich.style.background = lastTask.color;
    if(lastTask.id == 1){
        newBarich.style.borderTopLeftRadius = "20px"
        newBarich.style.borderBottomLeftRadius = "20px"
    }
    let emoji;
    if(lastTask.mood == 0){
        emoji = "👎";
    }else if(lastTask.mood == 1){
        emoji = "😐";
    }else if(lastTask.mood == 2){
        emoji = "👍";
    }else if(lastTask.mood == 3){
        emoji = "🔥";
    }
    newBarich.style.setProperty("--after-content", `"${lastTask.name} \\A ${emoji}"`);
    bar.append(newBarich)

    lastTime = lastTask.end;
    console.log("HH" + lastTime )

    closePopup()
}

function getDuration(start, end){
    let [startH, startM] = start.split(":").map(Number);
    let [endH, endM] = end.split(":").map(Number);
    let startMinutes = startH * 60 + startM;
    let endMinutes = endH * 60 + endM;
    let diff = endMinutes - startMinutes;
    return diff;
}


const ppBtn = document.getElementById("btn-pp")
ppBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const mood = document.querySelector('input[name="mood"]:checked');
    if(activityName.value.trim() === "" || activityEnd.value === ""){
        normalpp("Error", "Please fill all the fields...")
    }
    else if (!mood){
        normalpp("Error", "Please choose a mood...")
    }
    else{
        submit()
    }
})

//normal-popup
const nppBg = document.getElementById("npp-bg");
const npp = document.getElementById("normal-pp");
const nppH = document.getElementById("npp-head");
const nppP = document.getElementById("para2");
const nppClose = document.getElementById("npp-btn");
const nppBtn = document.getElementById("npp-btn");
function normalpp(title, para, btn){
    nppBg.style.opacity = 1;
    npp.style.pointerEvents = "all";
    npp.style.opacity = 1;
    nppH.innerText = title;
    nppP.innerText = para;
    if(btn != undefined){
        nppBtn.innerText = btn;
    }
}
nppBtn.addEventListener("click", ()=>{
    npp.style.opacity = 0;
    nppBg.style.opacity = 0;
    npp.style.pointerEvents = "none";
})
nppClose.addEventListener("click", ()=>{
    npp.style.opacity = 0;
    nppBg.style.opacity = 0;
    npp.style.pointerEvents = "none";
})

setInterval(()=>{
    console.log(activityName.value)
},1000)