// 善用ES6的module模式，將js components匯入及匯出
import { loadFile, demo, currentFile } from "./components/Utils.js";
import { loadFile as loadFile2 } from "./components/Demo.js";
// 不同js檔案，卻有相同名稱的components時，要用 "as" 另外命名
import { load } from "./components/Header.js";

demo();
loadFile2();

currentFile();
load("#header-block");
