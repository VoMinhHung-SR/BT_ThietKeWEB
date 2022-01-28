var c = document.querySelector(".color-option:first-child")
var s = document.querySelector(".sizing-option:first-child")
var cb = document.querySelector(".combo-option:first-child")
c.classList.add('chose-option')
s.classList.add('chose-option')
cb.classList.add('chose-option')



function color_change(color){
    var c = document.querySelectorAll(".color-option")
    removeClass("chose-option",c)
    color.classList.add("chose-option")
}
function size_change(size){
    var s = document.querySelectorAll(".sizing-option") 
    removeClass("chose-option",s)
    size.classList.add("chose-option")
}
function combo_change(combo){
    var cb = document.querySelectorAll(".combo-option") 
    removeClass("chose-option",cb)
    combo.classList.add("chose-option")
}
function removeClass(className, arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].classList.remove(className)
    }
}