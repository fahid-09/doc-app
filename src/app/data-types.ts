export interface signup{
    name:string,
    email: string,
    password: string,
    image:string;
}

export interface login{
    email: string,
    password: string
}
export interface doctor{
    id:number,
    image: string
    name: string,
    status: string,
    specialization: string,
    about: string,
    fee: number
}