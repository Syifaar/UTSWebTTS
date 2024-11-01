 var list1 = ["class", "array", "run","p2p","python","networking", "json", "jvm", "kotlin","enkripsi"];
        var letters1 = ["C", "L", "A", "S", "S", "A", "R", "R", "A", "Y", "R", "U", "N","P","2","P","P","Y","T","H","O","N"];
        var letters2 = ["N","E","T","W","O","R","K","I","N","G","J","S","O","N","J","V","M","K","O","T","L","I","N","E","N","K","R","I","P","S","I"];
        var score1 = 0; 
        var score2 = 0; 
        var score3 = 0;
        var score4 = 0;
        var score5 = 0;
        var score6 = 0;
        var score7 = 0;
        var score8 = 0;
        var score9 = 0;
        var score10 = 0;
        var totalScore = 0;

        function updateScore() {
            document.getElementById("score").innerHTML = "Score: " + totalScore;
        }

        function submit1() {
            var enterWord = input1.value;
            var prevScore = totalScore;

            if (enterWord == list1[0] && score1 === 0) {
                a1.innerHTML = letters1[0];
                a2.innerHTML = letters1[1];
                a3.innerHTML = letters1[2];
                a4.innerHTML = letters1[3];
                a5.innerHTML = letters1[4];
                input1.value = "";
                score1 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[1] && score2 === 0) {
                a3.innerHTML = letters1[5];
                a6.innerHTML = letters1[6];
                a7.innerHTML = letters1[7];
                a8.innerHTML = letters1[8];
                a9.innerHTML = letters1[9];
                input1.value = "";
                score2 = 1;
                totalScore += 10;
            }

            if (enterWord == list1[2] && score3 === 0) {
                a7.innerHTML = letters1[10];
                a10.innerHTML = letters1[11];
                a11.innerHTML = letters1[12];
                input1.value = "";
                score3 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[3] && score4 === 0) {
                a12.innerHTML = letters1[13];
                a17.innerHTML = letters1[14];
                a19.innerHTML = letters1[15];
                input1.value = "";
                score4 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[4] && score5 === 0) {
                a12.innerHTML = letters1[16];
                a9.innerHTML = letters1[17];
                a13.innerHTML = letters1[18];
                a14.innerHTML = letters1[19];
                a15.innerHTML = letters1[20];
                a16.innerHTML = letters1[21];
                input1.value = "";
                score5 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[5] && score6 === 0) {
                a16.innerHTML = letters2[0];
                a18.innerHTML = letters2[1];
                a20.innerHTML = letters2[2];
                a21.innerHTML = letters2[3];
                a22.innerHTML = letters2[4];
                a23.innerHTML = letters2[5];
                a24.innerHTML = letters2[6];
                a25.innerHTML = letters2[7];
                a26.innerHTML = letters2[8];
                a27.innerHTML = letters2[9];
                input1.value = "";
                score6 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[6] && score7 === 0) {
                a28.innerHTML = letters2[10];
                a29.innerHTML = letters2[11];
                a22.innerHTML = letters2[12];
                a30.innerHTML = letters2[13];
                input1.value = "";
                score7 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[7] && score8 === 0) {
                a28.innerHTML = letters2[14];
                a31.innerHTML = letters2[15];
                a32.innerHTML = letters2[16];
                input1.value = "";
                score8 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[8] && score9 === 0) {
                a24.innerHTML = letters2[17];
                a33.innerHTML = letters2[18];
                a34.innerHTML = letters2[19];
                a35.innerHTML = letters2[20];
                a36.innerHTML = letters2[21];
                a37.innerHTML = letters2[22];
                input1.value = "";
                score9 = 1;
                totalScore += 10;
            } 

            if (enterWord == list1[9] && score10 === 0) {
                a38.innerHTML = letters2[23];
                a39.innerHTML = letters2[24];
                a40.innerHTML = letters2[25];
                a41.innerHTML = letters2[26];
                a36.innerHTML = letters2[27];
                a42.innerHTML = letters2[28];
                a43.innerHTML = letters2[29];
                a44.innerHTML = letters2[30];
                input1.value = "";
                score10 = 1;
                totalScore += 10;
            } 

            if (totalScore > prevScore) {
                message1.innerHTML = "Jawaban benar!";
            } else {
                message1.innerHTML = "Jawaban salah, coba lagi!";
            }

        
            updateScore();


            setTimeout(function() {
                message1.innerHTML = "";
            }, 1000); 

            var result1 = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9+ score10;
            if(result1 == 10){
                message1.innerHTML = "Congratulations";
            }
        }