const StartBtn = document.getElementById("start");
const ScoreText = document.getElementById("score");
const Köstebekler = document.querySelectorAll(".köstebek");

let ÖncekiKöstebek;
let SüreDoldu;
let skor = 0;

function RastgeleKöstebek() {
    const Sira = Math.floor(Math.random() * Köstebekler.length);
    const SecilenKöstebek = Köstebekler[Sira];
    if (ÖncekiKöstebek === SecilenKöstebek) {
        return RastgeleKöstebek();
    } else {
        ÖncekiKöstebek = SecilenKöstebek;
    }
    return SecilenKöstebek;
}

function RastgeleSüre(min, max) {
    const Süre = Math.round(Math.random() * (max - min) + min);
    return Süre;
}

function Yukari() {
    const Köstebek = RastgeleKöstebek();
    const Süre = RastgeleSüre(1000, 1500);
    Köstebek.classList.add("secilen");
    setTimeout(() => {
        Köstebek.classList.remove("secilen");
        if (!SüreDoldu) {
            Yukari();
        }
    }, Süre);
}

function StartGame() {
    Yukari();
    setTimeout(() => {
        SüreDoldu = true;
    }, 15000);
}
function peep(e){
    if(e.target.classList.container("secilen")){
        skor++;
        e.target.classList.remove("secilen");
    }

    ScoreText.textContent =skor;
}

StartBtn.addEventListener("click", () => {
    StartGame();
});

Köstebekler.forEach(Köstebek =>{
    Köstebek.addEventListener("click",peep)
})
