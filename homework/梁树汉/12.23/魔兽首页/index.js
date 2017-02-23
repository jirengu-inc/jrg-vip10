// var a=1,b=2,c=3;
// var val=typeof a+b||c>0;
// console.log(val); // number2

// var d=5;
// var data=d==5&&console.log("bb");
// console.log(data); //undefined

// var data2 =d=0||console.log("haha");
// console.log(data2); //undefined

// var x=!!"hello"+(!"world",!!"from here!!");
// console.log(x); // 2

// var arr =[3,4,5];
// for (var i = 0; i<arr.length; i++) {
// 	console.log(arr[i]*arr[i]);
// }

// var obj={
// 	name:"梁树汉",
// 	sex:"male",
// 	age: "23",

// }
// for( info in obj) {
// 	console.log(info+":"+obj[info]);
// }

// // function isNumber(el){
// // 	if (typeof el==="number") {
// // 		return true;
// // 	}
// // 	else {
// // 		return false;
// // 	}
// // }
// // function isSting(el) {
// // 	if (typeof el==="string") {
// // 		return true;
// // 	}
// // 	else {
// // 		return false;
// // 	}
// // }
// // function isBoolean(el) {
// // 	if (typeof el==="boolean") {
// // 		return true;
// // 	}
// // 	else {
// // 		return false;
// // 	}
// // }
// // function isFunction(el) {
// // 	if (typeof el="function") {
// // 		return true;
// // 	}
// // 	else {
// // 		return false;
// // 	}
// // }
// // var a=2,b=jirengu,c=false;
// // 	console.log(isNumber(a));
// // 	console.log(isSting(a));
// // 	console.log(isSting(b));
// // 	console.log(isBoolean(c));
// // 	console.log(isFunction(a));
// // 	console.log(isFunction(isNumber));

// console.log(1+1);
// console.log("2"+"4");
// console.log(2+"4");
// console.log(+new Date());
// console.log(+"4");

function sayhello(){
	console.log('hello');
	console.log('jirengu');
}
sayhello();


var sayhello=function(){
	console.log('hello');
}

sayhello();
// 匿名函数  声明必须放在调用前面
function sayGoodbye(name){
	console.log('good bye'+name)
}

sayGoodbye('饥人谷');
sayGoodbye('杭州');

function printInfo(name,age,sex){
	console.log(name);
	console.log(age);
	console.log(sex);
}
printInfo('饥人谷','2','male');

function fn(a,b) {
	a++;
	b++;
	console.log(a);    // 4
  console.log(b);    // 7
	return a+b;
}
var result=fn(2,3);
console.log(result);

var a=1;
console.log(a++);  // 1

var x=10;
bar();
