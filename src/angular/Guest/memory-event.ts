export interface MemoryEventInterface {
    type?: 'Karaoke' | 'WeirdFact' | 'CheckIn' | string;
    title?: string;
    timestamp?: number;
}

export class MemoryEvent implements MemoryEventInterface {
    constructor(
        public type?: 'Karaoke' | 'WeirdFact' | 'CheckIn' | string,
        public title?: string,
        public timestamp?: number
    ) {
    }
    
    get isKaraoke(): boolean {
        return this.type === 'Karaoke';
    }
    
    get isWeirdFact(): boolean {
        return this.type === 'WeirdFact';
    }
    
    get isCheckIn(): boolean {
        return this.type === 'CheckIn';
    }
}
