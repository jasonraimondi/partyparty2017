import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse.pipe';
import { ValuesPipe } from './values.pipe';
import { MemoryEventsPipe } from './memory-events.pipe';

const forExport = [
    MemoryEventsPipe,
    ReversePipe,
    ValuesPipe,
];

@NgModule({
    declarations: forExport,
    exports: forExport,
})

export class UtilitiesModule {
}
