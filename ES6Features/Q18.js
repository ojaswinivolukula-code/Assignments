//a
if (true) {
  let x = 10;   
  var y = 20;  
}

console.log(y); 

//b

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);  

//c
const person = {
  info: null
};

console.log(person?.info?.address?.city);  
