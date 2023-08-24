//import { apiKeys } from './util'; //untuk import 1 variable dalam 1 file
//import apiKeys2 from './util'; //import default tidak perlu bracket
//import * as util from './util'; //import untuk group export
import {convertNumber} from './util';
  const user = {
    name : "Gal",
    age : 21
  }
  console.log(user.name);

  class userLog {
    constructor(nameLog, ageLog){
      this.nameLog = nameLog;
      this.ageLog = ageLog;
    }

    greet(){
      console.log('Hi');
    }
  }

  const user1 = new userLog('Galih', 21);
  console.log(user1);
  user1.greet();

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const editNumber = number.map((item) => ({val: item}));
  console.log(editNumber);

  function transformNumber(numberArray){
    return numberArray.map(number => {return {val: number}});
  };
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const objectArray = transformNumber(numberArray);
  console.log(objectArray);

  const numberArrayA = [1, 2, 3, 4, 5];
  const objectArrayA = convertNumber(numberArrayA);
  console.log(objectArrayA);
  
  //console.log(apiKeys);
  //console.log(apiKeys2);
  //console.log(util.apiKeys3); //cara cek berhasil import dengan group

  const password = prompt("Input Password");
  if (password === "Hello"){
    console.log("Success");
  } else if (password === "hello"){
    console.log("success");
  }else{
    console.log("access granted");
  };

  function handleTimeOut() {
    console.log("Time out....")
  }
  const handleTimeOut2 = () => {
    console.log("Time out ...... again");
  }

  setTimeout(handleTimeOut, 2000);
  setTimeout(handleTimeOut2, 3000);