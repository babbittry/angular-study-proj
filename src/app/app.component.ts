import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title: string = 'my-first-proj';
    ngAfterViewInit() {
        console.log("view inited");
    }

    students: { id: number, name: string }[] = [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王五" },
    ]

    fontColor: string = "blue";
    canClick: boolean = false;
    message: string = "You can not edit me!";
    canEdit: boolean = false;

    changeState() {
        this.canClick = true;
        console.log("只能按一次奥");
    }

    changeEditable() {
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            this.message = "You can edit me!"
        } else {
            console.log(this.message);
            this.message = "You can not edit me!";
        }
    }
}

