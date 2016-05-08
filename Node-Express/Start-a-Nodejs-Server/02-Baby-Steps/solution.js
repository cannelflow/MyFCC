var abc = process.argv;
console.log(abc);
var myarr = process.argv;
var myarrlength = myarr.length;
myarr = myarr.slice(2,myarrlength);
//console.log(myarr);
var total = 0;
for ( var i = 0; i < myarr.length; i++ ){
    total += (+myarr[i]);
}
