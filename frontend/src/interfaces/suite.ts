import RuttObject from "./object";

export default interface Suite extends RuttObject {
    title: string;
    description: string;
    state: 'draft' | 'published' | 'obsolete';
}
