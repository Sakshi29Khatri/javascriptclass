
//let num1 = 5;
//let num2 = 10;
//let sum = --num1 + ++num2 + num1--
//console.log(sum)

//let checkin = true
//let checkout = true

//console.log(checkin == checkout);

//let checkin = "world"
//let checkout = "hello";

//console.log(checkin == checkout);

//let checkin = 10
//let checkout = "10"

//console.log(checkin === checkout);

//let checkin = 10
//let checkout = "10";
//console.log(typeof checkin)
//console.log(typeof checkout)
//console.log(checkin == checkout);

//let checkin = true
//let chcekout = "10"
//console.log(!checkin);

//let checkin = "world"
//let checkout = "hello";

//console.log(checkin);

//let checkin = "world"
//let checkout = 10;

//console.log(checkout);

//let checkin = true
//let checkout = true ;

//console.log(checkin && checkout);

//let checkin = true
//let checkout = true ;

//console.log(checkin && checkout);

//let checkin = false
//let checkout = false ;

//console.log(!checkin && !checkout);

//let checkin = false
//let checkout = false ;

//console.log(checkin || checkout);

//let checkin = 10
//let checkout = 20;
//let result = (checkin == checkout)?"yes":"no"
//console.log(result);

//let checkin = 10
//let checkout = 20;
//let result = (checkin > checkout)?"yes":"no"
//console.log(result);

//let a = 10
//let b = 20;
//let c = 30
//let result = (a > b && a > c)?"a":(b > c) ? "b" : "c";
//console.log(result);

//let a = 10
//let b = 20;
//let c = 30
//let result = (a < b && a < c)?"a":(b < c) ? "b" : "c";
//console.log(result);

//let a = 10
//let b = 20;
//let c = 5
//let result = (a < b && a > c)?"a":(b > c) ? "b" : "c";
//console.log(result);

//let age = 18
//let result = (age<18)?"not vote":"vote";
//console.log(result);

//let num1 = 20;
//let num2 = 30;

//let result = (num1 > num2)? "yes": "no";
//let result1 = (num1 > num2)? num1 : num2;
//console.log(result);
//console.log(result1);

//let num1 = 0;
//let num2 = 30;

//let result = (num1 && num2)? "yes": "no";
//console.log(result);

//let num1 = 10;
//let num2 = "";

//let result = (num1 && num2)? "yes": "no";
//console.log(result);

//let num1 = 10;
//let num2 = "";
//if(num1){
 // console.log("hello")
//}

//let result = (num1 && num2)? "yes": "no";
//console.log(result);


//function add(){
  //  console.log("hello")
//}
//add();

//function add(a){
    //console.log(a)
//}
//add(10);

//function add(a=20){
  //  console.log(a)
//}
//add(10);
//add();

//function add(...a){  //seperated operator
  //  console.log(a[0])
//}
//add(10,20,30,40);

//function add(...a){
  //  console.log(a)
//}
//add(10,{"key":"val"},30);

//function add(b,...a){
   // console.log(b);
//}
//add("10","20",{"key":"val"});

//function add (a){
    //console.log(a);
  //  return a;
//}

//const result = add("hello")
//console.log(result);

//function add (a){
    //console.log(a);
  //  return a + a;
//}

//const result = add("hello")
//console.log(result);

//function add (a){
    //console.log(a);
  //  return a * a;
//}

//const result = add(2)
//console.log(result);

//function add (a){
    //console.log(a);
  //  return a + a;
//}

//const result = add("2");
//console.log(result);



//const result = function (a){
  //  return a + a;
//}
//console.log(result(10));

//const result = function (a = 10){
     //return a + a;
  //}
  //console.log(result(20));
  
 // const result = function (a,b,c,e,d){
     // return d;
  //}
  //console.log(result(10,20,30,40,50));
  
  //const result = function (a,b,c,e,d,...h){
  //  return h;
//}
//console.log(result(10,20,30,40,50,120));

//const result = (a,b) =>{
  //  return b;
//}
//console.log(result(10,20));

//(() =>{
   // console.log("hello");
//})()

//let str="hello is my name";

//console.log(str);

//let str="hello is my name";

//console.log(str[3]);

//let str="hello is my name";

//console.log(str.slice(0,9));

//let str="hello is my name";

//console.log(str.length);

//let num = 120
//console.log(num);

//let num = "120"
//console.log(parseInt (num));

//const obj = {"key":"val","name":"raj"}
//console.log(obj);

//const obj = {"key":"val","name":"raj"}
//console.log(obj.key);

//const obj = {"key":"val","name":"raj"}
//console.log(obj.name);

//const obj = {"key":"val","first name":"raj"}
//console.log(obj["first name"]);

//const obj = {
    //"key":"val",
    //"first name": "raj",
    //age : function(){
    //    return "age"
    //}
    //}
    //console.log(obj["key"]);
   // console.log(obj.age());

//const arr = ["hello","one",2,20]
//console.log(arr);

//const arr = ["hello","one",2,20]
//console.log(arr[1]);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, 160]]
//console.log(arr);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, 160]]
//console.log(arr[2]);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, 160]]
//console.log(arr[2]["firstname"]);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, 160]]
//console.log(arr[3]);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, 160]]
//console.log(arr[3][2]);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, [3,2,1]]]
//console.log(arr);

//const arr = ["hello","one",{"firstname":"hello","secondname":"surname"},[120, 140, [3,2,1]]]
//console.log(arr[3][2][2])




