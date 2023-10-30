import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var sceditor:any;

@Component({
  selector: 'app-bbcode-editor',
  templateUrl: './bbcode-editor.component.html',
  styleUrls: ['./bbcode-editor.component.css']
})
export class BbcodeEditorComponent implements OnInit, AfterViewInit{
    ngAfterViewInit() {
        var textarea = document.getElementById('example');
        sceditor.create(textarea, {
            format: 'bbcode',
            icons: 'monocons',
            style: 'minified/themes/content/default.min.css'
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
