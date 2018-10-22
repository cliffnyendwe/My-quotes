export class QUOTES {
    QUOTES:string[]
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string, public submitDate:Date, public upVote:number,public downVote:number,public author:string){
        this.showDescription=false

    }
    
}
