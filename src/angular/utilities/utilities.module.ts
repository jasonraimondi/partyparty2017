import { NgModule } from '@angular/core';

import { ReversePipe } from './pipes/reverse.pipe';
import { ValuesPipe } from './pipes/values.pipe';
import { MemoryEventsPipe } from './pipes/memory-events.pipe';

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
