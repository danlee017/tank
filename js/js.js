document.addEventListener('DOMContentLoaded', function () {
    let left = document.querySelector("#left"),
        up = document.querySelector("#up"),
        down = document.querySelector("#down"),
        right = document.querySelector("#right"),
        reset = document.querySelector("#reset"),
        tank = document.querySelector(".tank");

    let rt,
        lt,
        ut,
        dt,
        countX = 0,
        countY = 0,
        rot = 0;

    //LEFT

    function onLeft(t) {
        function translateLeft() {
            tank.style.cssText = `transform: translate(${--countX}px, ${countY}px) rotate(${rot}deg);`;
            if (rot > 0) {
                --rot;
            } else {
                ++rot;
            }
        }
        lt = setInterval(translateLeft, t);
    }

    left.addEventListener('mousedown', function () {
        onLeft(10)
    });
    left.addEventListener('mouseup', function () {
        clearInterval(lt);
    });
    left.addEventListener('mouseout', function () {
        clearInterval(lt);
    });

    window.addEventListener('keydown', function (event) {
        if (event.code == "ArrowLeft") {
            onLeft(500);
        }
    });

    //RIGHT

    function onRight(t) {
        function translateRight() {
            tank.style.cssText = `transform: translate(${++countX}px, ${countY}px) rotate(${rot}deg);`;
            if (rot > 0) {
                --rot;
            } else {
                ++rot;
            }
        }
        rt = setInterval(translateRight, t);
    }

    right.addEventListener('mousedown', function () {
        onRight(10)
    });
    right.addEventListener('mouseup', function () {
        clearInterval(rt);
    });
    right.addEventListener('mouseout', function () {
        clearInterval(rt);
    });

    window.addEventListener('keydown', function (event) {
        if (event.code == "ArrowRight") {
            onRight(500);
        }
    });

    //UP

    function onUp(t) {
        function translateUp() {
            tank.style.cssText = `transform: translate(${countX}px, ${--countY}px) rotate(${rot}deg);`;
            if (rot == -90) {
                ++rot;
            } else {
                --rot;
            }
        }
        ut = setInterval(translateUp, t);
    }

    up.addEventListener('mousedown', function () {
        onUp(10);
    });
    up.addEventListener('mouseup', function () {
        clearInterval(ut);
    });
    up.addEventListener('mouseout', function () {
        clearInterval(ut);
    });

    window.addEventListener('keydown', function (event) {
        if (event.code == "ArrowUp") {
            onUp(500);
        }
    });

    //DOWN

    function onDown(t) {
        function translateDown() {
            tank.style.cssText = `transform: translate(${countX}px, ${++countY}px) rotate(${rot}deg);`;
            if (rot == 90) {
                --rot;
            } else {
                ++rot;
            }
        }
        dt = setInterval(translateDown, t);
    }

    down.addEventListener('mousedown', function () {
        onDown(10);
    });
    down.addEventListener('mouseup', function () {
        clearInterval(dt);
    });
    down.addEventListener('mouseout', function () {
        clearInterval(dt);
    });

    window.addEventListener('keydown', function (event) {
        if (event.code == "ArrowDown") {
            onDown(500);
        }
    });

    window.addEventListener('keyup', function () {
        clearInterval(dt);
        clearInterval(ut);
    });

    reset.addEventListener('click', function () {
        countX = 0;
        countY = 0;
        rot = 0;
        tank.style.cssText = `transform: translate(${countX}px, ${countY}px) rotate(${rot}deg);`;
    });



});