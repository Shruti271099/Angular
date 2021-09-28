import { isConstructorDeclaration } from "typescript";

export class Recipe{
    public name:string;
    public desc:string;
    public imagepath:string;

    constructor(name:string,desc:string,imagepath:string){
        this.name = name;
        this.desc = desc;
        this.imagepath = imagepath;
    }
}