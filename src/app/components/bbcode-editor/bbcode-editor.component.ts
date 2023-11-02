import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var sceditor:any;
declare var fromBBCode:any;

@Component({
  selector: 'app-bbcode-editor',
  templateUrl: './bbcode-editor.component.html',
  styleUrls: ['./bbcode-editor.component.css']
})
export class BbcodeEditorComponent implements OnInit, AfterViewInit {

    ngAfterViewInit() {
        console.log('ngAfterViewInit completed.');
        var bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        var sceditorEditor =  sceditor.create(bbcodeEditorTextarea, {
            format: 'bbcode',
            icons: 'monocons',
            resizeWidth: false,
            locale: 'cn',
            style: 'assets/sceditor/development/themes/content/default.css'
        });
        var instance = sceditor.instance(bbcodeEditorTextarea);
        console.log(sceditor.instance(bbcodeEditorTextarea).getSourceEditorValue(true));
    }
    ngOnInit() {
        console.log('init completed.');
    }

    genHTML():void {
        let generatedHtmlTextarea:HTMLElement = document.getElementById('generatedHtml')!;
        let bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        // generatedHtmlTextarea.innerHTML = sceditor.instance(bbcodeEditorTextarea).val();
        console.log('genHTML clicked.');
        // if(this.instance != null){
            console.log('genHTML inner clicked.');
            console.log(sceditor.instance(bbcodeEditorTextarea).getSourceEditorValue(true));
        // }
    }
    genBBCode():void {
        let generatedHtmlTextarea:HTMLElement = document.getElementById('generatedHtml')!;
        let bbcodeEditorTextarea:HTMLElement|null = document.getElementById('bbcodeEditorArea');
        console.log('genBBCode clicked.');
        // if(this.instance != null){
            console.log('genBBCode inner clicked.');
            sceditor.instance(bbcodeEditorTextarea).destroy();
        // }
    }
}



