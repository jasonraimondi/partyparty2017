import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'values'})

export class ValuesPipe implements PipeTransform {
    transform(obj: any): any[] {
        if (Array.isArray(obj) || !this.isObject(obj)) {
            return obj;
        }
        
        return Object.keys(obj).map(k => obj[k]);
    }
    
    private isObject(value: any) {
        return value !== null && typeof value === 'object';
    }
}


