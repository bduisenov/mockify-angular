import {Injectable} from 'angular2/core';
import {Pair} from '../assets/pair';
import {Mock} from '../models/mock';

@Injectable()
export class MockService {

    save(mock: Mock): Promise<Pair<string, number>> {
        return null;
    }

    find(uid: string): Mock {
        return null;
    }

}
