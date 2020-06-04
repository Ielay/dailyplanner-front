export class Task {
    public title: string;
    public description: string;
    public isDone: boolean;
    public deadline: Date;

    constructor(title: string) {
        this.title = title;
    }
}
