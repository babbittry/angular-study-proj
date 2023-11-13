import { NgModule, isDevMode, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

/* material design */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from "@angular/material/select";

/* ng zorro */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';

/* components and pages */
import { HomeComponent } from './components/home/home.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BbcodeEditorComponent } from './components/bbcode-editor/bbcode-editor.component';

/** i18n **/
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
registerLocaleData(en);
registerLocaleData(zh);

/** 配置 ng-zorro-antd 国际化 **/
import { provideNzI18n, en_US, NZ_I18N, zh_CN, NzI18nService  } from 'ng-zorro-antd/i18n';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ChatBoxComponent,
        IndexComponent,
        AboutComponent,
        PageNotFoundComponent,
        BbcodeEditorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        HttpClientModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzCardModule,
        NgOptimizedImage,
        NzBackTopModule,
        NzButtonModule,
        NzGridModule,
        NzListModule,
    ],
    providers: [{
        provide: NZ_I18N,
        useFactory: (localId: string) => {
            switch (localId) {
                case 'en':
                    return en_US;
                /** 与 angular.json i18n/locales 配置一致 **/
                case 'zh':
                    return zh_CN;
                default:
                    return en_US;
            }
        },
        deps: [LOCALE_ID]
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
