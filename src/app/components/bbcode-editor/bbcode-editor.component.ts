import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var sceditor:any;

@Component({
  selector: 'app-bbcode-editor',
  templateUrl: './bbcode-editor.component.html',
  styleUrls: ['./bbcode-editor.component.css']
})
export class BbcodeEditorComponent implements OnInit, AfterViewInit {
    ngAfterViewInit() {
        console.log('ngAfterViewInit completed.');
        var bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        sceditor.create(bbcodeEditorTextarea, {
            format: 'bbcode',
            icons: 'monocons',
            resizeWidth: false,
            locale: 'cn',
            style: 'assets/sceditor/minified/themes/content/default.min.css'
        });
    }
    ngOnInit() {
        console.log('ngOnInit completed.');
    }

    genHTML():void {
        let bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        console.log('genHTML clicked.');
        if(sceditor.instance(bbcodeEditorTextarea) != null){
            let value:string = '';
            console.log('genHTML inner clicked.');
            value = sceditor.instance(bbcodeEditorTextarea).getSourceEditorValue(true);
            console.log(value);
            value = sceditor.instance(bbcodeEditorTextarea).getWysiwygEditorValue(true);
            console.log(value);
            value = sceditor.instance(bbcodeEditorTextarea).getSourceEditorValue(false);
            console.log(value);
            value = sceditor.instance(bbcodeEditorTextarea).getWysiwygEditorValue(false);
            console.log(value);
            value = sceditor.instance(bbcodeEditorTextarea).val();
            console.log(value);
        }
    }
    genBBCode():void {
        var bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        console.log('genBBCode clicked.');
        if(sceditor.instance(bbcodeEditorTextarea) != null){
            let generatedHtmlWrapDiv:HTMLElement|null = document.getElementById('generatedHtmlWrap');
            let value:string = '';
            console.log('genBBCode inner clicked.');
            value = sceditor.instance(bbcodeEditorTextarea).getWysiwygEditorValue(false);
            console.log(value);
            if(generatedHtmlWrapDiv != null){
                generatedHtmlWrapDiv.innerHTML = value;
            }
            sceditor.instance(bbcodeEditorTextarea).destroy();
        }
    }
}



