var i = 0;

function scoretrackings() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar");
        var width = 1;
        var id = setInterval(scoreborder, 100);

        function scoreborder() {
            if (width >= 36) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "";
                elem.innerHTML = width + "";
            }
        }

    }
}