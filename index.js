const message = [];

function writeCards(name,event){
    const newMessage = [...message];
    for (let i= 0; i < name.length; i++){
    newMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newMessage;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
    for (let i = 0; i <11; i++ ){

        console.log(number--);
        
    }
    
}
