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
    labelNeu.style.border = "";
});
// setInterval(() => {
//     const checkedRadio = document.querySelector('input[name="mood"]:checked');
//     console.log(checkedRadio);
// }, 1000);


//abbr
const barichs = document.querySelectorAll(".barich")
barichs.forEach(element => {
    element.setAttribute("title", "Click to edit")
});

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
    bar.append(newBarich)

    lastTime = lastTask.end;
    console.log("HHHHHHHOOOLLLEAAA" + lastTime )

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

const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    submit()
})
// object