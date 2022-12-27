import {DocumentNode} from 'graphql'

export interface GraphClient {
    query(query: DocumentNode, variables?: {}): any;
}