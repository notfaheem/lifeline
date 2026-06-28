//popup
const popup = document.getElementById("edit-pp");
const popupBg = document.getElementById("bg-pp");
function openPopup(){
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
const editBtn = document.getElementById("editbtn");
addBtn.addEventListener("click", ()=>{
    openPopup()
})
editBtn.addEventListener("click", ()=>{
    openPopup()
})
const closeBtn = document.getElementById("close-pp");
closeBtn.addEventListener("click", ()=>{
    closePopup();
})
openPopup()
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