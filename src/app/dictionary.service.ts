import {Injectable} from '@angular/core';

export interface IWord {
    key: string;
    meaning: string;
}

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {

    constructor() {
    }

    private words: IWord[] = [
        {key: 'hello', meaning: 'chào'},
        {key: 'cool', meaning: 'tuyệt'},
        {key: 'component', meaning: 'thành phần'}
    ];

    search(word: string): string {
        if (!word) {
            return '';
        }
        const w = this.words.find(item => item.key === word.toLowerCase());
        if (w) {
            return w.meaning;
        }
        return 'Not found';
    }

    getAll(): IWord[] {
        return this.words;
    }
}
