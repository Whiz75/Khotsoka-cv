/**
 * Created by shane khotsoka on 5/23/2021.
 */

/*welcome popup dialog*/
var message = "Hi there! welcome to shane's resume...";
window.alert(message);
window.


$( document ).ready(myMove());

    var id = null;
    function myMove() {
        var elem = document.getElementById("user");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
