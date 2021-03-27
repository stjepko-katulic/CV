$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});


$(document).ready(function () {
    $('[data-toggle="popover"]').popover({ html: true });
});


var menu = $(".menu")[0];
var menuBtn = $(".dropdown")[0];


menuBtn.onclick = function () {
    menu.classList.toggle("menu-unhide");
}


var closeX = document.querySelector(".X");

closeX.onclick = function () {
    menu.classList.toggle("menu-unhide");
}




//***** ANIMACIJA DIPLOME I PLOČE */

var deg = 0;
$(".diploma").on("mouseover", function (event) {
    deg += 360;
    rotation(this, deg);
});


function rotation(element, degrees) {
    $(element).css("transform", "rotate(" + degrees + "deg)");
    $(element).css("transition-duration", "3s");
}


$(".board").on("mouseover", function (event) {
    boardEffect(this, event);
});

function boardEffect(element, event) {
    $(element).animate({ zoom: "120%" });
    $(element).animate({ zoom: "100%" });
}





//*********  SIJANJE ZVJEZDICA KOD SKILLS ********/

var numOfStars;

$(".stars").on("mouseover", function () {
    numOfStars = $(this.parentElement).find(".checked-star").length;
    starsShine(this)
});


function starsShine(element) {
    var counter = 0;    
    var brojZvjezdica = $(element.parentElement).find(".checked-star").length;


    var interval = setInterval(function () {

        if (counter < brojZvjezdica) {
            $($(element.parentElement).find(".checked-star")[counter]).addClass("fa-pulse");

        } else {
            clearInterval(interval);
            ($(element.parentElement).find(".checked-star")).removeClass("fa-pulse");
        }

        counter++;

    }, 300)
};

$(".custom-control-input").prop("checked", true);


$(".custom-control-input").on("change", function() {
    var isChecked = $(this).prop("checked");
    
    if (isChecked == false) {
        clearInterval(intervalCloud1);
        clearInterval(intervalCloud2);
        clearInterval(intervalCloud3);

        cloud1PositionNum = window.screen.width*0.3;
        cloud2PositionNum =  window.screen.width*0.7;
        cloud3PositionNum = window.screen.width*0.3;

        $(".cloud1").css("right", cloud1PositionNum);
        $(".cloud2").css("right", cloud2PositionNum);
        $(".cloud3").css("right", cloud3PositionNum);

    } else {
        cloud1FloatRight();
        cloud2FloatLeft();
        cload3FloatRight();
    }
    
})




// **************************** ANIMACIJA OBLAKA *********************

$(document).ready(cloud1FloatRight);
$(document).ready(cloud2FloatLeft);
$(document).ready(cload3FloatRight);

//CLOUD1

var cloud1PositionString = $(".cloud1").css("right");
var cloud1PositionNum = parseInt(cloud1PositionString.substring(0, cloud1PositionString.indexOf(".")));


var intervalCloud1;

function cloud1FloatRight() {
    
    intervalCloud1 = setInterval(function() {
        
        if (cloud1PositionNum<window.screen.width*0.7) {
            cloud1PositionNum+=0.5;
            $(".cloud1").css("right", cloud1PositionNum+"px");
        } else {
            clearInterval(intervalCloud1);
            cloud1FloatLeft();
        }

    }, 40);

}

function cloud1FloatLeft() {
    
    intervalCloud1 = setInterval(function() {
        
        if (cloud1PositionNum>window.screen.width*0.3) {
            cloud1PositionNum-=0.5;
            $(".cloud1").css("right", cloud1PositionNum+"px");
        } else {
            clearInterval(intervalCloud1);
            cloud1FloatRight();
        }

    }, 40);

}

//CLOUD2

var cloud2PositionString = $(".cloud2").css("right");
var cloud2PositionNum = parseInt(cloud2PositionString.substring(0, cloud2PositionString.indexOf(".")));

var intervalCloud2;

function cload2FloatRight() {
    
    intervalCloud2 = setInterval(function() {
        
        if (cloud2PositionNum<window.screen.width*0.7) {
            cloud2PositionNum+=1;
            $(".cloud2").css("right", cloud2PositionNum+"px");
        } else {
            clearInterval(intervalCloud2);
            cloud2FloatLeft();
        }

    }, 40);

}

function cloud2FloatLeft() {
    
    intervalCloud2 = setInterval(function() {
        
        if (cloud2PositionNum>window.screen.width*0.3) {
            cloud2PositionNum-=1;
            $(".cloud2").css("right", cloud2PositionNum+"px");
        } else {
            clearInterval(intervalCloud2);
            cload2FloatRight();
        }

    }, 40);

}

//CLOUD3

var cloud3PositionString = $(".cloud3").css("right");
var cloud3PositionNum = parseInt(cloud3PositionString.substring(0, cloud3PositionString.indexOf(".")));

var intervalCloud3;

function cload3FloatRight() {
    
    intervalCloud3 = setInterval(function() {
        
        if (cloud3PositionNum<window.screen.width*0.7) {
            cloud3PositionNum+=1.5;
            $(".cloud3").css("right", cloud3PositionNum+"px");
        } else {
            clearInterval(intervalCloud3);
            cloud3FloatLeft();
        }

    }, 40);

}

function cloud3FloatLeft() {
    
    intervalCloud3 = setInterval(function() {
        
        if (cloud3PositionNum>window.screen.width*0.3) {
            cloud3PositionNum-=1.5;
            $(".cloud3").css("right", cloud3PositionNum+"px");
        } else {
            clearInterval(intervalCloud3);
            cload3FloatRight();
        }

    }, 40);

}

function proba() {
    console.log(2+5);
};
