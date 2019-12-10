const products=[];

module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        products.push(this); //push the object created on the basic of the class 
    }
    //static allow you to call the method on the class itself instead on the instance of the class
    static fecthAll(){
        return products;
    }
}