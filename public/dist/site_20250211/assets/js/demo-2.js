// AND 及閘運算子(&&)
console.log("\n---AND 及閘運算子(&&)---");
const isLoggedIn = true;
const isAdmin = false;
console.log("isLoggedIn && isAdmin", isLoggedIn && isAdmin);

// AND 運算子真值表
console.log("\n--- AND 運算子真值表 ---");
console.log("true && true", true && true); // true
console.log("true && false", true && false); // false
console.log("false && true", false && true); // false
console.log("false && false", false && false); // false

// 實際應用
const age = 20;
const hasParentConsent = true;

console.log("\n---實際應用示例---");
const canJoinActivity = age >= 18 && hasParentConsent;
console.log("是否可以參加活動:", canJoinActivity);

// OR 或閘運算子(||)
console.log("\n---OR 及閘運算子(||)---");
const isUser = true;
const isOnline = false;

console.log("isUser", isUser);
console.log("isOnline", isOnline);
console.log("isUser || isOnline", isUser || isOnline);

// OR 運算子真值表
console.log("\n--- OR 運算子真值表 ---");
console.log("true || true =", true || true); // true
console.log("true || false =", true || false); // true
console.log("false || true =", false || true); // true
console.log("false || false =", false || false); // false

// NOT 反閘運算子(!)

console.log("--- NOT 反閘運算子(!)---");

const isActive = true;
console.log("isActive", isActive); // true
console.log("!isActive", !isActive); // false

// NOT 運算子真值表
console.log("\n--- NOT 運算子真值表 ---");
console.log("!true =", !true); // false
console.log("!false =", !false); // true

// if ... else
let bao = 5;
let xigua = 0;
let sell_xigua = false;
let have_sell_xigua = sell_xigua ? "有" : "沒有";
let sell_xigua_str = `${have_sell_xigua}看到賣西瓜的`;

if (sell_xigua) {
    xigua = 1;
} else {
    bao += 5;
}

console.log(
    "---買五顆包子，如果看到賣西瓜的，買一顆西瓜，如果沒有看到賣西瓜的，多買五顆包子---"
);

console.log(`結果: ${sell_xigua_str}，所以買了${bao}顆包子跟${xigua}顆西瓜`);

// if (1 > 2) {} -> if (false) {} 隱式轉換
if (1 > 2) {
    console.log(true);
} else {
    console.log(false);
}
