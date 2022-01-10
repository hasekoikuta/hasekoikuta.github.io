// -------------------------------------------------------------------------
// stopWatch.js ストップウォッチプログラム
//
//		1970年1月1日からの経過時間（ミリ秒単位）を使っている
//
// 					created at 2014-06-26 on torisky.com
// -------------------------------------------------------------------------

var mode;					// ストップウォッチのモード	RUN/STOP
var startTime;				// スタートした時刻
var nowTime;				// ストップした時刻
var addTime;				// 経過時間（ストップウォッチ再開時に加算する）
var millisec;					// 1000分の1秒
var sec100;					// 100分の1秒
var sec;						// 秒
var min;						// 分
var hour;					// 時
var gmt;						// タイムゾーンのオフセット値
							//	例）GMT+0900 なら 標準時より9時間後をさしているので-9する
var timerId;					// タイマー
var array;
var ii;


/*
 * 定数
 */
var RUN = 1;				// 動作中
var STOP = 0;				// 停止中
var array = ["0","15","52","122","237","406","637","942","1326","1800","2369","3041","3822","4719",
"5737","6881","8155","9564","11111","12800","14632","16610","18737","21012",
"23437","26012","28737","31610","34632","37800","41111","44564","48155","51881",
"55737","59719","63822","68041","72369","76800","81326","85942","90637","95406",
"100237","105122","110052","115015","120001","125000","131324","137795","144410",
"151165","158056","165079","172229","179503","186894","194400","202013","209728",
"217540","225443","233431","241496","249633","257834","267406","276458","286328",
"296358","305767","316074","326531","336255","346965","357812","367807","378880",
"390077","400293","411686","423190","433572","445239","457001","467489","479378",
"491346","501878","513934","526049","536557","548720","560922","571333","583539",
"591882","600000"];

/*
 * ストップウォッチのリセット
 */
function resetStopWatch(){
	mode = STOP;
	addTime = 0;
	millisec = sec100 = sec = min = hour = 0;
	gmt = new Date().getTimezoneOffset() / 60;	// 戻り値は分のため60で割る
	document.getElementById("time").innerHTML = "00:00:00";
	document.getElementById("level").innerHTML = "1";
	document.getElementById("ep").innerHTML = "0/15";
    ii = 0;
}
		
/*
 * ボタン処理
 */
function startStop(){
	switch(mode){
		case STOP:		// スタートを押したとき
			mode = RUN;
			timerId = setTimeout(runStopWatch, 100);
			document.getElementById("btnClear").disabled = "true";	// クリアボタンを使用不可
			document.getElementById("btnStart").innerHTML = "ストップ";
			// スタート時刻を設定（ストップウォッチが進んでいれば加算）
			startTime = new Date().getTime();
			addTime = (hour*60*60*1000 + min*60*1000 + sec * 1000 + millisec);
			startTime -= addTime;
			break;

		case RUN:		// ストップを押したとき
			mode = STOP;
			clearTimeout(timerId);
//			nowTime = new Date().getTime();
			document.getElementById("btnStart").innerHTML = "スタート";
			document.getElementById("btnClear").disabled = "";		// クリアボタンを使用可
			drawTime();
	}
}

/*
 * 時間表示
 */
function drawTime(){
	var strTime = "";
	var strSec100, strSec, strMin, strHour, strEP;
	// 数値を文字に変換及び2桁表示設定
	strSec100 = "" + sec100;
	if ( strSec100.length < 2){
		strSec100 = "0" + strSec100;
	}
	strSec = "" + sec;
	if ( strSec.length < 2){
		strSec = "0" + strSec;
	}
	strMin = "" + min;
	if ( strMin.length < 2){
		strMin = "0" + strMin;
	}
	strHour = "" + hour;
	if ( strHour.length < 2){
		strHour = "0" + strHour;
	}
	// 表示形式を設定
    strEP = EP - array[ii];
    if ( array[ii + 1] < EP){
        ii++;
        document.getElementById("level").innerHTML = ii + 1;
    }
	strTime = strHour + ":" + strMin + ":" + strSec;
	document.getElementById("time").innerHTML = strTime;
	document.getElementById("ep").innerHTML = strEP + "/" + (array[ii + 1] - array[ii]);
}

/*
 * 時間計測
 */
function runStopWatch(){
	// スタートからの差分をとる
	nowTime = new Date().getTime();
	diff = new Date(nowTime - startTime);
	// ミリ秒、100分の1秒、秒、分、時を設定
	millisec = diff.getMilliseconds();
	sec100 = Math.floor(millisec / 10);
	sec = diff.getSeconds();
	min = diff.getMinutes();
	hour = diff.getHours() + gmt;	// タイムゾーンのオフセットを考慮する
    
    EP = Math.floor(hour*60*60*100 + min*60*100 + sec * 100 + millisec * 0.1);

	drawTime();			// 時間表示
	timerId = setTimeout(runStopWatch, 100);
}

/*
 * 実行時の処理
 */
window.onload = function(){
	resetStopWatch();
}