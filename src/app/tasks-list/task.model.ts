export class Task {
    public taskId: number;
    public title: string;
    public description: string;
    public done: boolean;
    public deadline: number;

    constructor(title: string) {
        this.title = title;
    }
}
