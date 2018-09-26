export interface Messenger {
    getMessage(): string;
}

export class HelloConf implements Messenger {
    getMessage(): string {
        return "Hello, #DeveloperCommunity!";
    }
}

export class Types {
    trueOrFalse: boolean = true;
    message: string = "Hi there";
    value: number = 7;
    tuple: [string, number] = ["David", 34];
    children: Types[] = [];
    date: Date = new Date(1984, 7, 7);
    nothingOrNonExistent = (null || undefined);
}

export enum DayOfWeek {
    Sunday,     // Sunday's aren't bad
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,     // I love Friday's
    Saturday    // And Saturday's too
}

function notHappening(): never {
    while (true) {
        // (っ◔◡◔)っ
        // We are laughing!
    }
}









// There be hackers!