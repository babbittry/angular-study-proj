import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var sceditor:any;

@Component({
  selector: 'app-bbcode-editor',
  templateUrl: './bbcode-editor.component.html',
  styleUrls: ['./bbcode-editor.component.css']
})
export class BbcodeEditorComponent implements OnInit, AfterViewInit{
    ngAfterViewInit() {
        var textarea = document.getElementById('bbcodeEditorArea');
        sceditor.create(textarea, {
            format: 'bbcode',
            icons: 'monocons',
            resizeWidth: false,
            locale: 'cn',
            style: 'assets/sceditor/development/themes/content/default.css'
        });

        // var themeInput = document.getElementById('theme');
        // themeInput.onchange = function():void {
        //     var theme = 'assets/minified/themes/' + themeInput.value + '.min.css';
        //
        //     document.getElementById('theme-style').href = theme;
        // };
    }
    ngOnInit() {
        console.log('init completed.');
    }
}
