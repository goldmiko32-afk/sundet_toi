const calendarDays =
    document.getElementById("calendarDays");


/* =========================
   КҮНТІЗБЕ
========================= */

const selectedDay = 28;

const year = 2026;

const month = 10; // Қараша


const firstDay =
    new Date(
        year,
        month,
        1
    ).getDay();


const daysInMonth =
    new Date(
        year,
        month + 1,
        0
    ).getDate();


let startDay;

if (firstDay === 0) {
    startDay = 6;
} else {
    startDay = firstDay - 1;
}


/* Бос ұяшықтар */

for (
    let i = 0;
    i < startDay;
    i++
) {

    const empty =
        document.createElement("span");

    calendarDays.appendChild(empty);
}


/* Күндер */

for (
    let day = 1;
    day <= daysInMonth;
    day++
) {

    const dayElement =
        document.createElement("span");

    dayElement.textContent = day;


    /* 28 қарашаны белгілеу */

    if (day === selectedDay) {

        dayElement.style.background =
            "#292923";

        dayElement.style.color =
            "#d8bd7c";

        dayElement.style.fontWeight =
            "600";

        dayElement.style.boxShadow =
            "0 0 0 4px rgba(189,163,100,0.15)";
    }


    calendarDays.appendChild(dayElement);
}


/* =========================
   МУЗЫКА
========================= */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

const musicIcon =
    document.getElementById("musicIcon");

let isPlaying = false;


/*
    Музыканы іске қосу
*/

function startMusic() {

    if (isPlaying) {
        return;
    }

    music.volume = 0.35;

    music.play()
        .then(() => {

            isPlaying = true;

            musicIcon.textContent = "❚❚";

            musicBtn.classList.add(
                "playing"
            );

        })
        .catch(() => {

            console.log(
                "Браузер autoplay-ды блоктады."
            );

        });
}


/*
    Телефонда немесе компьютерде
    бірінші әрекеттен кейін музыка қосылады.
*/

document.addEventListener(
    "click",
    startMusic,
    { once: true }
);

document.addEventListener(
    "touchstart",
    startMusic,
    { once: true }
);


/* Музыка кнопкасы */

musicBtn.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        if (isPlaying) {

            music.pause();

            isPlaying = false;

            musicIcon.textContent = "♫";

            musicBtn.classList.remove(
                "playing"
            );

        } else {

            music.play()
                .then(() => {

                    isPlaying = true;

                    musicIcon.textContent =
                        "❚❚";

                    musicBtn.classList.add(
                        "playing"
                    );

                });

        }

    }
);


/* =========================
   ПЛАВНЫЕ АНИМАЦИИ
========================= */

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(
    (section) => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(35px)";

        section.style.transition =
            "opacity 1s ease, transform 1s ease";

        observer.observe(section);

    }
);
