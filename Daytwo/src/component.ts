let Component=(config:any)=>{
    return (TargetClass:any)=>{
        let tc=new TargetClass();
        return class{
            title:string=tc.title;
            power:number=config.power;
            selector:string=config.selector
            template:string=config.template
        }
    }
}
@Component({
    power:100000,
    selector:"app-root",
    template:`
    <div>
    <h2>{{title}}</h2>
    <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    <h2>Power is:{{power}}</h2>
    </ul>
    </div>
    `
})
class MyComp{
    title:string="Welcome to my Life"
}