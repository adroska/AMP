export class Course {
    public id: number;
    public title: string;
    public duration: number;
    public creationDate: Date;
    public description: string;
    public topRated: boolean;

    constructor(obj?) {
        if (obj) {
            this.id = obj.id;
            this.title = obj.name;
            this.duration = obj.length;
            this.creationDate = obj.date;
            this.description = obj.description;
            this.topRated = obj.isTopRated;
        }
    }
}
