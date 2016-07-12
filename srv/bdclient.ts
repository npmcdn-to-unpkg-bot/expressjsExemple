import {Db, Collection} from "mongodb";
import { Client } from "../web/client/client";

const COLLECTION = 'client';

export class BdClient {
    private _db: Db;
    private _collection: Collection;

    constructor(db: Db) {
        this._db = db;
        this._collection = db.collection(COLLECTION);
    }

    public listerTousLesClients(): Promise<any[]> {
        return this._collection.find().toArray();
    }

}
