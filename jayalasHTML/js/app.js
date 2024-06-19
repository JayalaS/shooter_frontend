/**window.onload = function() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    let interval = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}**/

window.onload = function() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    let interval = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = '../pages/welcome.html';
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}