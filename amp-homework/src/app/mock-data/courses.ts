import { Course } from '../interfaces/course';

export var courses: Course[] = [
    {
        id: 1,
        title: 'Video course 1',
        duration: 88,
        creationDate: new Date(1992, 2, 10),
        description: 'Description of video course 1'
    },
    {
        id: 2,
        title: 'Video course 2',
        duration: 15,
        creationDate: new Date (2002, 3, 20),
        description: 'Description of video course 2'
    },
    {
        id: 3,
        title: 'Video course 3',
        duration: 135,
        creationDate: new Date(2012, 4, 30),
        description: 'Description of video course 3'
    }
];
