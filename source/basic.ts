interface Messenger {
    getMessage(): string;
}

class HelloConf implements Messenger {
    getMessage(): string {
        return "Hello, Syntax Con - 2018!";
    }
}

class Types {
    trueOrFalse: boolean = true;
    message: string = "Hi there";
    value: number = 7;
    tuple: [string, number] = ["David", 32];
    children: Types[] = [];
    date: Date = new Date(1984, 7, 7);
    nothingOrNonExistent = (null || undefined);
}

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}