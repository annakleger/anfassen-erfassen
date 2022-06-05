var i = 0;

function scoretrackings() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar1");
        var width = 1;
        var id = setInterval(scoreborder, 36);

        function scoreborder() {
            if (width >= 36) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "";
            }
        }
    }
}

function scoreaufstützen() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar2");
        var width = 1;
        var id = setInterval(scoreborder, 36);

        function scoreborder() {
            if (width >= 117) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "";
            }
        }
    }
}

function scorejucken() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar3");
        var width = 1;
        var id = setInterval(scoreborder, 36);

        function scoreborder() {
            if (width >= 114) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "";
            }
        }
    }
}

function scoregewohnheit() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar4");
        var width = 1;
        var id = setInterval(scoreborder, 36);

        function scoreborder() {
            if (width >= 61) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "";
            }
        }
    }
}

function scorebewusst() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("scorebar5");
        var width = 1;
        var id = setInterval(scoreborder, 36);

        function scoreborder() {
            if (width >= 14) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "";
            }
        }
    }
}