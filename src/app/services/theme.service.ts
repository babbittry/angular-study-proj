import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ThemeService {
    private isDarkMode = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkMode.asObservable();

    toggleDarkMode() {
        const currentMode = this.isDarkMode.value;
        console.log("currentMode:" + currentMode );
        this.isDarkMode.next(!currentMode);
        document.documentElement.classList.toggle('dark');
    }
    
}
