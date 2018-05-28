export class Problem{
    id: number;
    name: string;
    desc: string;
    difficulty: string;
}


export class DataService{
    problems:Problem[] = PROBLEMS;
    constructor(){}
}