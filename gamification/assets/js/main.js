setReady();

function setReady(){
    timer = document.getElementById('timer');
    stop = document.getElementById('f-stop');
    start = document.getElementById('start');
    reset = document.getElementById('reset');
	x = 0;
	y = 1;
	z = 1;
    //クリック時の時間を保持するための変数定義
    var startTime;

    //経過時刻を更新するための変数。 初めはだから0で初期化
    elapsedTime = 0;

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timerId;

    //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。
    timeToadd = 0;

	

}

    //ミリ秒の表示ではなく、分とか秒に直すための関数, 他のところからも呼び出すので別関数として作る
    //計算方法として135200ミリ秒経過したとしてそれを分とか秒に直すと -> 02:15:200
    function updateTimetText(){

        //h(時) = 135200 / 3600000ミリ秒で割った数の商　
        var h = Math.floor(elapsedTime / 3600000);

        //m(分) = 135200 / 60000ミリ秒で割った数の商　-> 2分
        var m = Math.floor(elapsedTime / 60000);

        //s(秒) = 135200 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
        var s = Math.floor(elapsedTime % 60000 / 1000);



        //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
        //javascriptでは文字列数列を連結すると文字列になる
        //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
        h = ('0' + h).slice(-2); 
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);

        //HTMLのid　timer部分に表示させる　
        timer.textContent = h + ':' + m + ':' + s ;
    }

    //再帰的に使える用の関数
    function countUp(){

        //timerId変数はsetTimeoutの返り値になるので代入する
        timerId = setTimeout(function(){

            //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText()

            //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
            countUp();

        //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
        },10);
    }

    //startボタンにクリック時のイベントを追加(タイマースタートイベント)
    start.addEventListener('click',function(){

	//f-stopをstopにid変更
	document.getElementById("f-stop").id="stop";

	//startをf-startにid変更
	document.getElementById("start").id="f-start";


	setInterval(showNowExp(),1000);

        //在時刻を示すDate.nowを代入
        startTime = Date.now();

	        

        //再帰的に使えるように関数を作る
        countUp();
    });
function showNowExp(){
		x ++;
		document.getElementById("exp").innerHTML = x + "/" + y;
        	document.getElementById('level').innerHTML= z;

		if (x >= y){
			x =-1;
			z++;
			y = Math.pow(z, 2);
	}
}

    //stopボタンにクリック時のイベントを追加(タイマーストップイベント)
    stop.addEventListener('click',function(){

        //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
       clearTimeout(timerId);


        //タイマーに表示される時間elapsedTimeが現在時刻かたスタートボタンを押した時刻を引いたものなので、
        //タイマーを再開させたら0になってしまう。elapsedTime = Date.now - startTime
        //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
       timeToadd += Date.now() - startTime;


	//stopをf-stopにid変更
	document.getElementById("stop").id="f-stop";

	//f-startをstartにid変更
	document.getElementById("f-start").id="start";


    });

    //resetボタンにクリック時のイベントを追加(タイマーリセットイベント)
    reset.addEventListener('click',function(){

        //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
        elapsedTime = 0;

        //リセット時に0に初期化したいのでリセットを押した際に0を代入してあげる
        timeToadd = 0;

        //updateTimetTextで0になったタイムを表示
        updateTimetText();

    });

