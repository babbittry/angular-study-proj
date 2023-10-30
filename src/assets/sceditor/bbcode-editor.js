document.write('<link rel="stylesheet" href="minified/themes/default.min.css" id="theme-style" />');
document.write('<script src="minified/sceditor.min.js" type="text/javascript" charset="utf-8"></script>');
document.write('<script src="minified/formats/bbcode.js" type="text/javascript" charset="utf-8"></script>');

function mySceditor() {
    var textarea = document.getElementById('example');
    sceditor.create(textarea, {
        format: 'bbcode',
        style: 'minified/themes/content/default.min.css'
    });

    var themeInput = document.getElementById('theme');
    themeInput.onchange = function() {
        var theme = 'minified/themes/' + themeInput.value + '.min.css';

        document.getElementById('theme-style').href = theme;
    };

    alert("running");
}

