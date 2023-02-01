let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "가";
let arr = [1, 2, "가"];  // let arr = [];  이렇게 하면 배열 초기화
let user = {
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    }
};

console.log("n1 : " + user.hobby[1]);
console.log("n1 : ", user.email);
console.log(`n1의 값은 ${n1} 입니다.`);
