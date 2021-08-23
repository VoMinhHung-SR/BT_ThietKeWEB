
function init(){
    var searchInput = document.getElementById("text__input");
    var SearchBar = document.querySelector("li > div.searchBar"); 
    var searchIcon = document.getElementById("search-icon");
    var searchBackspaceIcon = document.querySelector("li > div > span.backspace-icon");
    var activeCloseIcon = document.querySelector("li > div > span.close-icon");
    searchIcon.addEventListener("click", function(){
        SearchBar.classList.add("open");
        searchInput.classList.add("open");
        searchInput.focus();
        searchIcon.classList.add("openIconClick");
        activeCloseIcon.classList.add("active-closeIcon");
        searchBackspaceIcon.classList.add("active-backspaceIcon");
    })
    activeCloseIcon.addEventListener("click", function(){
        SearchBar.classList.remove("open");
        searchInput.classList.remove("open");
        searchIcon.classList.remove("openIconClick");
        activeCloseIcon.classList.remove("active-closeIcon");
        searchBackspaceIcon.classList.remove("active-backspaceIcon");
        document.getElementById("hidden").style.visibility = "hidden";
        searchInput.value = "";
        
    })
    searchBackspaceIcon.addEventListener("click", function(){
        searchInput.value = "";
        searchInput.focus();
    })
    searchInput.addEventListener("input",function(){
        var x = document.getElementById("text__input").value;
        console.log(x);
        toString(x);
        if ( x != null)
            document.getElementById("hidden").style.visibility = "visible";
        else
            if ( x = undefined)
                document.getElementById("hidden").style.visibility = "hidden";
    })
}


