
var isRun;
function animating() {
    if (!isRun) {
        isRun = true;
        var rotation = 0;
        var setting = document.getElementsByClassName('gear-icon');


        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            let max = 100;
            if (rotation >= 360*max || rotation <= -360*max) {
                setting[0].setAttribute("transform", `rotate(0)`);
                setting[1].setAttribute("transform", `rotate(0)`);
                setting[2].setAttribute("transform", `rotate(0)`);
                setting[3].setAttribute("transform", `rotate(0)`);
                clearInterval(timer);
                rotation = 0;
                isRun = false;
                return;
            } else {
                rotation += 2;
            }

            setting[0].setAttribute("transform", `rotate(${rotation*1.6})`);
            setting[1].setAttribute("transform", `rotate(${rotation*1.6})`);
            setting[2].setAttribute("transform", `rotate(${-rotation*1.6})`);
            setting[3].setAttribute("transform", `rotate(${-rotation*1.6})`);
        }, 20);
    }
}