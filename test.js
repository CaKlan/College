const $checkbox = document.querySelector('.darkTheme')

window.localStorage.setItem('darkTheme', 'dark');
const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOsColorTheme);

window.onload = function () {
    console.log($checkbox);
    if (getUserTheme() === 'dark') {
        localStorage.setItem('color-theme', 'dark');
        document.querySelector('html').setAttribute('color-theme', 'dark');
        if ($checkbox) {
            $checkbox.checked = true;
        } else { console.log("\'$checkbox\' do not contains anything"); }
    } else {
        localStorage.setItem('color-theme', 'light');
        document.querySelector('html').setAttribute('color-theme', 'light');
        if ($checkbox) {
            $checkbox.checked = false;
        } else { console.log("\'$checkbox\' do not contains anything"); }
    }
};


if ($checkbox) {
    $checkbox.addEventListener('click', e => {
        if (e.target.checked) {
            localStorage.setItem('color-theme', 'dark');
            document.querySelector('html').setAttribute('color-theme', 'dark');
            alert("Darkmode Enable!");
        }
        else {
            localStorage.setItem('color-theme', 'light');
            document.querySelector('html').setAttribute('color-theme', 'light');
            alert("Darkmode Disable!");
        }
    });
}
//var x = document.querySelector('.darkTheme');