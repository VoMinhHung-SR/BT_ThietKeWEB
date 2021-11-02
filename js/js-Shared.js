

// bắt sự kiện trượt trang. sử lí thanh header
window.addEventListener("scroll",function(){
    var navScroll = document.querySelector("header");
    navScroll.classList.toggle("areaScroll", window.scrollY > 0)
})

function init(){
    //Search-bar
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


    // // Burger-menu 
    let menuOpen = false;
    var subMenuBtn = document.querySelector(".burger-menu > div");

    subMenuBtn.addEventListener("click", function(){
        if (!menuOpen)
        {
            document.getElementById("active-subMenu").style.display = "block";
            // subMenuBtn.classList.add(".burger-open");
            menuOpen = true;
        }
        else{
            document.getElementById("active-subMenu").style.display = "none";
            menuOpen = false;
        }
    })
    
    //Jquery
    //go--to--top
    $("a.go-to-top-btn").click(function(){
        $("body, html").animate({
            scrollTop : 0
        },1000);
        return false;
    } )
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200){
            $("a.go-to-top-btn > i").css("display", "block");
            $("a.go-to-top-btn ").fadeIn(500);
        }
        else{
            $("a.go-to-top-btn ").fadeOut(500);
        }
    })

    
}

