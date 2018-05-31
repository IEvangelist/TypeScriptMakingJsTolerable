export interface Messenger {
    getMessage(): string;
}

export class HelloConf implements Messenger {
    getMessage(): string {
        return "Hello, Syntax Con - 2018!";
    }
}

export class Types {
    trueOrFalse: boolean = true;
    message: string = "Hi there";
    value: number = 7;
    tuple: [string, number] = ["David", 33];
    children: Types[] = [];
    date: Date = new Date(1984, 7, 7);
    nothingOrNonExistent = (null || undefined);
}

export enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}









// There be hackers!