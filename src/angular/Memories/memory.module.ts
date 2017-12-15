import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryDetailComponent } from './memory/memory.component';
import { MemoryService } from './memory.service';
import { UtilitiesModule } from '../utilities/utilities.module';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UtilitiesModule,
        MemoryRoutingModule,
    ],
    declarations: [
        MemoryDetailComponent,
    ],
    providers: [
        MemoryService,
    ]
})

export class MemoryModule {
}
