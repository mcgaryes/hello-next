import {Container} from 'inversify';
import 'reflect-metadata';

const container = new Container();

if (typeof window === 'undefined') {
    // server-side dependencies
} else {
    // client-side dependencies
}

export default container;
