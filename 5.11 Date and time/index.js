let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date ); // 1.01.2011, 02:03:04.567

/*
getFullYear()
getMonth()
getDate()
getHours(), getMinutes(), getSeconds(), getMilliseconds()
getDay()        Get the day of week, from 0 (Sunday) to 6 (Saturday). 
getTimezoneOffset()     UTC+k return -k * 60
getUTCHours()

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

let today = new Date();
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0, 0);
console.log(today); 

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log( date ); // 1 Mar 2016

date = new Date();
console.log(+date); 

let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
console.log( `The loop took ${end - start} ms` ); 

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // 1327611110417  (timestamp)
date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(date);
