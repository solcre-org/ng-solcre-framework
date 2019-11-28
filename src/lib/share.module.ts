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
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './panel/placeholder/placeholder.component';
// import { ShareLibraryComponent } from './share-library.component';

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
        // ShareLibraryComponent
    ],
    imports: [
        TranslateModule,
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
        PlaceholderComponent,
        // ShareLibraryComponent
    ],
    providers: [
        ApiService,
        DialogService,
        LoaderService
    ]

})
export class ShareModule {

}