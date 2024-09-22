let p = "   haribabu    ";

let q = p.trim();

console.log(q);

let r = q.charAt(0).toUpperCase().concat(q.slice(1,7).concat(q.charAt(7).toUpperCase()));

console.log(r);

let s = r.slice(3,5);

console.log(s);

console.log(s.concat('rock'));