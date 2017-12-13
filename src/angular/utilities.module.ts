import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse.pipe';

const forExport = [
    ReversePipe,
];

@NgModule({
    declarations: forExport,
    exports: forExport,
})

export class UtilitiesModule {
}
