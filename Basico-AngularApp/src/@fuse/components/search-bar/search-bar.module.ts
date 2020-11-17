import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseSearchBarComponent } from './search-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

@NgModule({
    declarations: [
        FuseSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        TranslateModule
    ],
    exports     : [
        FuseSearchBarComponent
    ],
    providers   : [FuseTranslationLoaderService]
})
export class FuseSearchBarModule
{
}
