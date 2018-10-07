export class Item{
    _id: string;
    name: string;
    is_done: boolean;

    constructor(name, isDone){
        this.name = name;
        this.is_done = isDone;
    }
}