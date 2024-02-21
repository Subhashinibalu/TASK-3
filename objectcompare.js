let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};

    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);

    
    if (props1.length != props2.length) {
      console.log("false");
    }
    for (let i = 0; i < props1.length; i++) {
      let prop = props1[i];
      
      
      if (obj1.prop !== obj2.prop) {
        console.log("false");
      }
    }
    console.log("true");
  
  