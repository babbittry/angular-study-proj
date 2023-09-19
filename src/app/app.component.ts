import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = 'my-first-proj';
    ngAfterViewInit() {
        console.log("view inited");
    }

    fontColor:string = "blue";
    canClick:boolean = false;
    message:string = "You can not edit me!";
    canEdit:boolean = false;

    buttonClick() {
        console.log("button clicked!");
        this.canClick = true;
    }

    changeEditable() {
        this.canEdit = !this.canEdit;
        if(this.canEdit){
            this.message = "You can edit me!"
        }else{
            console.log(this.message);
            this.message = "You can not edit me!";
        }
    }
}

