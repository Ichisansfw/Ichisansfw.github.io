function openNav() {
    
    ///mySidenav///
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.transitionTimingFunction = "ease-in-out";
    document.getElementById("mySidenav").style.opacity = "250";
    ///Main///
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.transition = "0.5s";
    document.getElementById("main").style.transitionTimingFunction = "ease-in-out";
    ///Info1///
    document.getElementById("info1").style.opacity = "250";
    document.getElementById("info1").style.transition = "1s";

    document.getElementById("span").style.transition = "0.5s";
    document.getElementById("span").style.opacity = "0";

}

function closeNav() {

    ///mySidenav///
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transitionTimingFunction = "ease-in-out";
    document.getElementById("mySidenav").style.opacity = "0";

    ///Main///
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.transition = "0.5s";
    document.getElementById("main").style.transitionTimingFunction = "ease-in-out";

    ///Info1///
    document.getElementById("info1").style.opacity = "0";
    document.getElementById("info1").style.transition = "0.4s";

    document.getElementById("span").style.transition = "0.5s";
    document.getElementById("span").style.opacity = "255";
}
