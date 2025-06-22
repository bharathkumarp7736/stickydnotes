
//selecting popup box ,pop overlay and button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancle-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//select container,add-note,note-tite-input,note-schedule-input,note-description-input

var container=document.querySelector(".container")
var addnote=document.getElementById("add-note")
var notetitleinput=document.getElementById("note-title-input")
var notescheduleinput=document.getElementById("note-schedule-input")
var notedescriptioninput=document.getElementById("note-description-input")

addnote.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${notetitleinput.value}</h2>
                <input type="datetime-local" value="${notescheduleinput.value}" disabled>
                <p>${notedescriptioninput.value}</p>
                 <button onclick="deletenote(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deletenote(event){
    event.target.parentElement.remove()

}



