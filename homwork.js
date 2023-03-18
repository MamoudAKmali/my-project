 
      function myString(a,b){
        var len1=a.length;
        var len2=b.length;
        if(len1 === len2){
          // document.getElementById('dome').innerHTML="true";  
          console.log('true');
        }
        else{
          // document.getElementById('dome').innerHTML="fales";
          console.log('fales');
        }
    }
      
    myString("mahtiyh","hiytham");
//.....................End qustion(1)............................................//



//..................... qustion(2)...........................................//

    //  Array [1 2 3 4 5 ];
    function sliceAraay(arr,startIdx,endIdx){
      let slicedArr=[];
      for(let i=0; i<arr.length;i++){
        if(i>startIdx && i<endIdx){
          slicedArr.push(arr[i]);
        }
      }
      return slicedArr; 
    }
    let arr=[1,3,4,5,6];
    let startIdx=0;
    let endIdx=4;
    // document.getElementById('dome').innerHTML=sliceAraay(arr,startIdx,endIdx); 
    console.log(sliceAraay(arr,startIdx,endIdx));

//.....................End qustion(2)................................................// 



//.....................Start qustion(3)..............................................//

    function stringToArray(str){
      return str.split(",");
    }
    console.log(stringToArray("JavaScript,c#,javaNotwork,python"));
    // let str1=' project,javaScript';
    // const split_string=str1.split(",");
    // console.log(split_string);

 //.....................End qustion(3)...............................................//


 //..................... qustion(4)...............................................//

function isValidEmail(email) {
  var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(email);
}

console.log(isValidEmail("john.doe@example.com")); // true
console.log(isValidEmail("jane.doe@")); // false
//..................... End qustion(4)...............................................//

//..................... qustion(5)...............................................//

function calculateAge(dateOfBirth) {
  var currentDate = new Date();
  var birthDate = new Date(dateOfBirth);
  
  var ageInMilliseconds = currentDate - birthDate;
  var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
  return Math.floor(ageInYears);
}

//.....................end qustion(5).............................................//



 //.....................start qustion(6).............................................//

         function replaceSubstring( str,sub,repl) {
           return str.replace(new RegExp(sub,'g'),repl);

         }
         let str="the javaScript is good";
         let sub="good";
         let repl="very good";
         console.log( replaceSubstring( str,sub,repl));


          //.....................End qustion(6)...............................................//



        //.....................start qustion(7).........[1,2,3,4,5]...........................// 
        function findSecondSmallest(arrs){
          let smallest =arrs[0];//1
          let secondSmallest=arrs[1];//2
          for (let i = 2; i < arrs.length; i++) {
            if (arrs[i]<smallest) {
              secondSmallest=smallest;
              smallest=arrs[i];
              
            }else if(arrs[i]>=smallest && arrs[i]<secondSmallest){
              secondSmallest=arrs[i];//1
            }
            
          }
          return secondSmallest;
        }
        let arrs=[3,5,6,8,9];
        const secondSmallest=findSecondSmallest(arrs);
        console.log(secondSmallest);
       
      //.....................End qustion(7)............................................//

     //.....................Start qustion(8)............................................//
     function findDiffernce(arr1,arr2){
       var diff=[];
       for (let j = 0; j < arr1.length; j++) {
         if (arr2.indexOf(arr1[j])===-1) {
           diff.push(arr1[j]);
           
         }
         
       }
       return diff;
     }
     var arr1=[1,2,3,4];
     var arr2=[3,1];
     var result=findDiffernce(arr1,arr2);
     console.log(result);
//.....................End qustion(8)............................................//



//.....................Start qustion(9)............................................//

       function formatTimeDuration(duration){
        let hours=Math.floor(duration/3600);
        let minutes=Math.floor((duration%3600)/60);
        let seconds=duration%60;
        let formattedDuration="";
        if(hours>0){
          "\n"
          formattedDuration+=hours+" hour"+(hours>1?"s":" ")+",";

        }
        if(minutes>0){
          formattedDuration+=minutes+" minute"+(minutes>1?"s":" ")+",";
        }
        if(seconds>0||formattedDuration===" "){
          formattedDuration+=seconds+" second"+(seconds>1?"s":" ");
        }
        return formattedDuration;

       }
     
console.log("\n",formatTimeDuration(3661));
//.....................End qustion(9)............................................//


//.....................start qustion(10)............................................//
       function toCamerlCase(str1){
         return str1.replace(/(?:^\w|[A-Z]|\b\w)/g,
         function(word,index){
           return index===0?
           word.toLowerCase():
           word.toUpperCase();
         }).replace(/\s+/g,"");

         }
      var myString="hello world";
       var camelCaseString=toCamerlCase(myString);
       console.log("\n",camelCaseString);
       //.....................End qustion(10)............................................//
      
