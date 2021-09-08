//DOM elementleri
const question = document.getElementById('question');
const container = document.getElementById('quiz-container');
const answrA = document.getElementById('cevap-a');
const answrB = document.getElementById('cevap-b');
const answrC = document.getElementById('cevap-c');
const answrD = document.getElementById('cevap-d');
const submitBtn = document.getElementById('btn');
const inputs = document.getElementsByTagName('input');

//Gereken Değişkenler
class Quiz{
    constructor(soru, cevap1,cevap2,cevap3,cevap4,dogruCvp){
        this.soru = soru;
        this.cevap1 = cevap1;
        this.cevap2 = cevap2;
        this.cevap3 = cevap3;
        this.cevap4 = cevap4;
        this.dogruCvp = dogruCvp;
    }
}

const quiz1 = new Quiz(`1. Selçuklu Devleti'nin Gazne Devleti'ni yendiği Dandanakan Muharebesi kaç yılında olmuştur?`, '1023', '987', '1073', '1040', '1040');
const quiz2 = new Quiz(`2. Pasinler Savaşı'nda hangi Türk Devleti savaşmıştır?`, 'Karahanlılar', 'Osmanlılar', 'Selçuklular', 'Uygurlar', 'Selçuklular');
const quiz3 = new Quiz(`3. Malazgirt Meydan Savaşı'nda hangi ordu yenilmiştir?`, 'Haçlılar','Germenler','Bizans','Ruslar', 'Bizans')
const quiz4 = new Quiz(`4. Miryokefelon Savaşı'nda Türk ordusunun başında hangi komutan vardı?`, 'Sultan Alparslan','Orhan Gazi','II.Kılıçarslan','Sultan 1.Alaeddin Keykubad', 'II.Kılıçarslan');
const quiz5 = new Quiz(`5. Anadolu Selçuklu Devleti'nin yıkılmasına hangi savaş neden olmuştur?`, 'Kösedağ Savaşı', 'Dorileon Muharebesi', 'Yassıçemen Savaşı', 'Malazgirt Savaşı', 'Kösedağ Savaşı');
const quiz6 = new Quiz(`6. Sırpsındığı Savaşı hangi yılda olmuştur?`, '1021','1321','1064','1364', '1464');
const quiz7 = new Quiz(`7. Hangi Osmanlı padişahı I.Kosova Savaşı sonunda ölmüştür?`, 'I.Murat', 'Yıldırım Bayezıt', 'II.Murat', 'I.Mehmet', 'I.Murat');
const quiz8 = new Quiz(`8. Osmanlı'nın Fetret Devri hangi savaşla başlamıştır?`, 'Plevne Savunması', 'Niğbolu Savaşı', 'Kösedağ Savaşı', 'Ankara Savaşı', 'Ankara Savaşı' );
const quiz9 = new Quiz(`9. II. Viyana Kuşatması hangi padişah döneminde gerçekleşmiştir?`, 'II.Mehmet', 'Kanuni Sultan Süleyman', 'IV.Mehmet', 'Yavuz Sultan Selim', 'IV.Mehmet' );
const quiz10 = new Quiz(`10. 93 Harbi hangi yıllarda gerçekleşmiştir?`, '1877-1878', '1782-1793', '1682-1693', '1892-1893', '1877-1878' );
const quiz11 = new Quiz(`11. Trablusgarp Savaşı'nda Osmanlı hangi ülkeyle savaşmıştır?`, 'Fransa', 'Rusya', 'İtalya', 'Avusturya', 'İtalya' );
const quiz12= new Quiz(`12. Hangi savaş daha önce gerçekleşmiştir?`, 'Malazgirt Savaşı', 'Pasinler Savaşı', 'Otlukbeli Savaşı', 'Mercidabık Savaşı', 'Pasinler Savaşı' );
const quiz13 = new Quiz(`13. Anafartalar hangi savaşın bir cephesidir?`, '1.İnonü Savaşı', 'Çanakkale Savaşı', 'Sakarya Meydan Muharebesi', 'Oniki Adalar Savaşı', 'Çanakkale Savaşı' );
const quiz14 = new Quiz(`14. Türklerin II.Viyana Kuşatması ile başlayan geri çekilmesi hangi savaş ile son bulmuştur?`, 'II.İnönü Savaşı', 'I.İnönü Savaşı', 'Çanakkale Savaşı', 'Sakarya Meydan Muharebesi', 'Sakarya Meydan Muharebesi' );
const quiz15 = new Quiz(`15. Romen Diyojen hangi savaşta Türk ordularına yenilmiş bir komutandır?`, 'Malazgirt Meydan Savaşı', 'Dandanakan Savaşı', 'Rumeli Fethi', 'Kösedağ Savaşı', 'Malazgirt Meydan Savaşı' );

const quizzes = [quiz1,quiz2,quiz3,quiz4,quiz5,quiz6,quiz7,quiz8,quiz9,quiz10,quiz11,quiz12,quiz13,quiz14,quiz15];


let quizSira = 0;
let selection = '';

const QuizShow = () =>{
    question.textContent = quizzes[quizSira].soru;
    answrA.textContent = quizzes[quizSira].cevap1;
    answrB.textContent = quizzes[quizSira].cevap2;
    answrC.textContent = quizzes[quizSira].cevap3;
    answrD.textContent = quizzes[quizSira].cevap4;
}
const EndOfGame = () => {
    
    question.textContent = 'Quizimizin Sonuna Geldiniz!';
    answrA.textContent = ' ';
    answrB.textContent = ' ';
    answrC.textContent = ' ';
    answrD.textContent = ' ';

    
}



for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', () => selection = document.getElementsByTagName('span')[i].textContent)
}

submitBtn.addEventListener('click', () => {
    console.log(selection);
    if(selection === quizzes[quizSira].dogruCvp){
        alert('Doğru bildiniz!');
    }
    else{
        alert('Yanlış. Doğru Cevap: ' + quizzes[quizSira].dogruCvp)
    }
    console.log(quizSira);
    quizSira++;
    if (quizSira >= quizzes.length) {
        EndOfGame();
    }
    else{
        QuizShow();
    }
})


QuizShow();