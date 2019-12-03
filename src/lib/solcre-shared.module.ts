import { NgModule } from "@angular/core";
import { FilterPipe } from './fiter.pipe';
import { ApiService } from './api/api.service';
import { PagerComponent } from './api/pager/pager.component';
import { TableComponent } from './table/table.component';
import { SimplePanelComponent } from './panel/simple-panel/simple-panel.component';
import { DialogComponent } from './panel/dialog/dialog.component';
import { DialogService } from './panel/dialog/dialog.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { ModalComponent } from './panel/modal/modal.component';
import { InputHolderComponent } from './input-holder/input-holder.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './panel/placeholder/placeholder.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
    declarations: [
        FilterPipe,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        ModalComponent,
        InputHolderComponent,
        LoaderComponent,
        DialogComponent,
        PlaceholderComponent,
    ],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        FilterPipe,
        PagerComponent,
        TableComponent,
        SimplePanelComponent,
        ModalComponent,
        InputHolderComponent,
        LoaderComponent,
        DialogComponent,
        PlaceholderComponent
    ],
    providers: [
        ApiService,
        DialogService,
        LoaderService
    ]

})
export class SolcreSharedModule {

}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}