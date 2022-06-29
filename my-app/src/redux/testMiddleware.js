
//This is the way of writing middle ware

export default function testMiddleware(){
    return(next) =>{
        return(action) =>{
            console.log(action,"HELLO FRZOM MIDDLEWAE");
        }
    }

}