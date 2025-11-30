let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'awesome'];
let noun = ['jogger', 'racoon', 'developer'];
let domain = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let d of domain) {
                console.log(p + a + n + d);
            }
        }
    }
}

let hacks = ['es', 'io', 'us'];

for(let n of noun) {
    for (let h of hacks) {
        if(n.endsWith(h)) {
            let base = n.slice(0, n.length - h.length);
            console.log(base + '.' + h);
        }
    }
}
