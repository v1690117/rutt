import RuttObject from "./object";

export default interface Specification extends RuttObject{
    title: string;
    owner: string;
    state: 'draft' | 'published' | 'obsolete';
}
