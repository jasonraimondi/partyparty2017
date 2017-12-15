import { Pipe, PipeTransform } from '@angular/core';
import { MemoryEvent} from '../../Guest/memory-event';
import { MemoryEventInterface } from '../../Guest/memory-event';

@Pipe({name: 'memoryEvents'})

export class MemoryEventsPipe implements PipeTransform {
    transform(obj: MemoryEventInterface): MemoryEvent[] {
        let memoryEvents: MemoryEventInterface[] = Object.keys(obj).map(k => obj[k]);
        
        return memoryEvents.map((event: MemoryEventInterface) => {
            return new MemoryEvent(event.type, event.timestamp, event.text, event.url, event.thumbnailURL)
        });
    }
}


