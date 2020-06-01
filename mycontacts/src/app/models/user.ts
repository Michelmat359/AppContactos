export interface User {
    id?: number;
    email: string;
    password?: string;
    name: string;
    surname: string;
    avatar?: string;
    position?: {lat: number, lon: number, ts: number};

   }