// 答え
let ans = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + ans);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a1 = document.querySelector('button#ans');
    a1.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i=document.querySelector('input[name="kaz"]');  
  let yoso = i.value;
  
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力

  // 課題3-1における出力先はコンソール
  console.log(kaisu + 1 + "回目の予想: "+yoso);
  kaisu = kaisu + 1;
  let n1 = document.querySelector('span#kaisu');
  n1.textContent = kaisu;
  let n2 = document.querySelector('span#answer');
  n2.textContent = yoso;
  let result = document.querySelector('p#result');
  
  if(kaisu <= 3){
    if(yoso == ans){
          result.textContent = "正解です。おめでとう！";
    }else if(yoso >ans){
          result.textContent = "まちがい。答えはもっと小さいです。";
      }else if(yoso < ans){
          result.textContent = "まちがい。答えはもっと大きいです。";
    }
  }else if(kaisu >= 4){
  result.textContent = "答えは" + ans + "でした。すでにゲームは終わっています。";
  }
}