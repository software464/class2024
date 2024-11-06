class element{
    constructor(text) {
        this.setInnerText(text);
    }

    setInnerText(text){
        this.innerText=text;

    }

    render(){
        console.log(this.innerText);
    this.children?.forEach(child => {
        child.render();

            
        });
    }

    addChild(child){
        this.children.push(child);
}
}

class div extends element {
    constructor(text) {
        super(text);


        
    }

    children =[];
    render(){
        console.log("im a div");
        super.render();
    }
}
class h1 extends element {
    constructor(text) {
        super(text);


        
    }
    children =[];
    render(){
        console.log("im a h1");
        super.render();
    }
}
const div1=new div("a");
const h11=new h1("b");
const h12 =new h1("c");

div1.addChild(h11);
div1.addChild(h12);
console.log(div1);
div1.render();


