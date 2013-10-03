var passGen = function() {
    // edit `passLength` to adjust password length
    var passLength = 8;
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                   'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                   's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var password = [];

    var randInt = function(source) {
        return Math.floor(Math.random() * (source.length + 1));
    };

    for (var i = passLength - 1; i >= 0; i--) {
        var type = Math.random();

        if (type < 0.3333) {
            password[i] = letters[randInt(letters)];
        }
        else if (type >= 0.3333 && type < 0.6666) {
            password[i] = letters[randInt(letters)].toUpperCase();
        }
        else {
            password[i] = numbers[randInt(numbers)];
        }
    }

    document.getElementById("result").innerHTML=password.join("");
};








function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});

