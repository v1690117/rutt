import RuttObject from "../interfaces/object";

export default interface IObjectService<T extends RuttObject> {
    url: () => string;

    get: (id: string) => T;

    getAll: () => T[]
}