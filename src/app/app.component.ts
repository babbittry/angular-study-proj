import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService } from "@ngneat/transloco";
import { LangDefinition } from "@ngneat/transloco";
import { Subscription, take } from "rxjs";
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
        initFlowbite();
    }
    isCollapsed = false;
    title: string = "my-first-proj";
    service = inject(TranslocoService);
    availableLangs = this.service.getAvailableLangs() as LangDefinition[];
    private subscription: Subscription | null = null;

    get activeLang() {
        return this.service.getActiveLang();
    }

    changeLang(lang: string) {
        // Ensure new active lang is loaded
        this.subscription?.unsubscribe();
        this.subscription = this.service
            .load(lang)
            .pipe(take(1))
            .subscribe(() => {
                this.service.setActiveLang(lang);
            });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
        this.subscription = null;
    }
}
