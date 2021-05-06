export function addfiles() {
    addcssfile("src/css/main.css");
    addjsfilemodule("src/js/Game.js", 'head');
}

export function addcssfile(file) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = file;
    $("head").append(css);
}

export function addjsfile(file, dir) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    if(dir == 'head')
    $("head").append(script);
    else if(dir == 'body')
    $("body").append(script);
}

export function addjsfilemodule(file, dir) {
    var script = document.createElement('script');
    script.type = 'module';
    script.src = file;
    if(dir == 'head')
    $("head").append(script);
    else if(dir == 'body')
    $("body").append(script);
}
