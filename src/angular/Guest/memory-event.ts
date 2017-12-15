export interface MemoryEventInterface {
    type: 'Karaoke' | 'WeirdFact' | 'CheckIn' | string;
    timestamp: number;
    text?: string;
    url?: string;
    thumbnailURL?: string;
}

export class MemoryEvent implements MemoryEventInterface {
    constructor(
        public type: 'Karaoke' | 'WeirdFact' | 'CheckIn' | 'Photo' | string,
        public timestamp: number,
        public text?: string,
        public url?: string,
        public thumbnailURL?: string,
    ) {
    }
    
    get isPhoto(): boolean {
        return this.type === 'Photo';
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
