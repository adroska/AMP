import { Course } from '../interfaces/course';

export var courses: Course[] = [
    {
        id: 1,
        title: 'Video course 1',
        duration: 88,
        creationDate: new Date(2017, 11, 16),
        description: 'Description of video course 1',
        topRated: false
    },
    {
        id: 2,
        title: 'Video course 2',
        duration: 15,
        creationDate: new Date (2022, 3, 20),
        description: 'Description of video course 2',
        topRated: false
    },
    {
        id: 3,
        title: 'Video course 3',
        duration: 135,
        creationDate: new Date(2012, 4, 30),
        description: 'Description of video course 3',
        topRated: true
    }
];
