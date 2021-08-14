$(document).ready(() => {
    $(".about-section").waypoint(direction=>{
        if(direction==="down"){
            $("nav").addClass("sticky-nav");
        }else{
            $("nav").removeClass("sticky-nav");
        }
    });

    $(".about-section").waypoint(direction=>{
        $(".about-section").addClass("animate__animated animate__fadeInUp");
    },{
        offset:"50%"
    });
})