// This script get the lot title. Make sure to remove movie/show from string manually if string includes it.
// Side note this script also get movie/show. So please remove manually

let a = document.getElementsByClassName("gridView_title");
let b = [];
for (let i = 0; i < a.length; i++) {
    let e = a[i].innerText;
    e = e.substring(e.indexOf(" ") + 3, e.length - 1);
    b[i] = e;
}
for (let i = 0; i < b.length; i++) {
    document.body.append(b[i])
    document.body.append(document.createElement("br"));
}
console.log(b);

// This script is for the hammer price including the buyer's premium.

let c = document.getElementsByClassName("gridView_winningbid");
let d = [];
for (let i = 0; i < c.length; i++) {
    let t = c[i].innerText;
    if (t.length === 1) {
        d[i] = "UNSOLD";
        continue;
    }
    t = t.substring(t.lastIndexOf(" ") + 1, t.length - 3);
    while (t.includes(",")) {
        t = t.replace(",", "");
    }
    d[i] = t;
}
for (let i = 0; i < d.length; i++) {
    document.body.append(d[i])
    document.body.append(document.createElement("br"));
}
console.log(d);

// This script is for the lowest estimated price

let a = document.getElementsByClassName("startpriceestimates");
for (let i = 0; i < a.length; i++) {
    let str = a[i].innerText;
    let val = str.substring(str.indexOf(": ") + 2, str.indexOf(".00"));
    while (val.includes(",")) {
        val = val.replace(",", "");
    }
    document.body.append(val);
    document.body.append(document.createElement("br"));
}

// This script is for the highest estimated price
let a = document.getElementsByClassName("startpriceestimates");
for (let i = 0; i < a.length; i++) {
    let str = a[i].innerText;
    let val = str.substring(str.indexOf("- ") + 2, str.length - 3);
    while (val.includes(",")) {
        val = val.replace(",", "");
    }
    document.body.append(val);
    document.body.append(document.createElement("br"));
}