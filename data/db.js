const listOfAdages = [
    {
        "ponglish": "What is sudden is after devil.",
        "original": "Co nagle, to po diable.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "The scythe bumped into a stone.",
        "original": "Trafiła kosa na kamień.",
        "author": "folk saying"
    },
    {
        "ponglish": "A Bundt cake from the cart, lighter for horses.",
        "original": "Baba z wozu, koniom lżej.",
        "author": "folk saying"
    },
    {
        "ponglish": "What does a gingerbread have to a windmill?",
        "original": "Co ma piernik do wiatraka?",
        "author": "folk saying"
    },
    {
        "ponglish": "What two heads, it is not one.",
        "original": "Co dwie głowy, to nie jedna.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "Where cat is absent, there mouses prance.",
        "original": "Gdzie kota nie ma, tam myszy harcują.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "How they see you, yes they write you.",
        "original": "Jak cię widzą, tak cię piszą.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "The appetite grows in the measure of food.",
        "original": "Apetyt rośnie w miarę jedzenia.",
        "author": "François Rabelais"
    },
    {
        "ponglish": "Who gives and receives in hell is knocking about.",
        "original": "Kto daje i zabiera, ten w piekle się poniewiera.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "Better a saffron milk cap than nothing.",
        "original": "Lepszy rydz niż nic.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "On fishlessness and a cancer a fish.",
        "original": "Na bezrybiu i rak ryba.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Even a good style does inkblots.",
        "original": "Nawet dobre pióro kleksy robi.",
        "author": "folk saying"
    },
    {
        "ponglish": "On the language honey, ice in the heart.",
        "original": "Na języku miód, a w sercu lód.",
        "author": "folk saying"
    },
    {
        "ponglish": "On the eye a peasant was lying in the hospital.",
        "original": "Na oko – to chłop w szpitalu leżał.",
        "author": "folk saying"
    },
    {
        "ponglish": "On the stupid head and a hair will not earn a living.",
        "original": "Na głupiej głowie i włos się nie utrzyma.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "The top does not want to come to Muhammad, Muhammad must come up.",
        "original": "Nie chce góra przyjść do Mahometa, musi Mahomet przyjść do góry.",
        "author": "folk saying"
    },
    {
        "ponglish": "Will not help a wounded standing-up and a slow circumvolution.",
        "original": "Nie pomoże ranne wstanie i pomału obracanie.",
        "author": "folk saying"
    },
    {
        "ponglish": "For saint Anthony's the first little blueberry will self-immolate.",
        "original": "Na święty Antoni pierwsza się jagódka zapłoni.",
        "author": "folk saying"
    },
    {
        "ponglish": "Do not say chmiel before you jump over.",
        "original": "Nie mów hop, póki nie przeskoczysz.",
        "author": "folk saying"
    },
    {
        "ponglish": "Do not suppose and you will not be put on trial.",
        "original": "Nie sądźcie, a nie będziecie sądzeni.",
        "author": "New Testament, Mt 4, 4; Lk 4, 4."
    },
    {
        "ponglish": "Your eye, mister, is fattening a horse.",
        "original": "Pańskie oko konia tuczy.",
        "author": "folk saying"
    },
    {
        "ponglish": "A humble ninny sucks two mothers.",
        "original": "Pokorne cielę dwie matki ssie.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "To rip oneself apart with a hoe for the sun.",
        "original": "Porywać się z motyką na słońce.",
        "author": "folk saying"
    },
    {
        "ponglish": "The real virtue critic is not buoy.",
        "original": "Prawdziwa cnota krytyk się nie boi.",
        "author": "Ignacy Krasicki"
    },
    {
        "ponglish": "Recipes are for this to break them.",
        "original": "Przepisy są po to, aby je łamać.",
        "author": "folk saying"
    },
    {
        "ponglish": "Guarded one Mister God guards.",
        "original": "Strzeżonego Pan Bóg strzeże.",
        "author": "folk wisdom"
    },
    {
        "ponglish": "The impoverished feeds himself like sea, and the rich like he likes.",
        "original": "Ubogi żywi się jak może, a bogaty jako chce.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "He hooked himself like a velcro of a dog's tail.",
        "original": "Uczepił się, jak rzep psiego ogona.",
        "author": "folk saying"
    },
    {
        "ponglish": "He has got drunk like a flatulence.",
        "original": "Upił się jak bąk.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Hit in the table and the scissors will make an appeal.",
        "original": "Uderz w stół, a nożyce się odezwą.",
        "author": "folk saying"
    },
    {
        "ponglish": "He tanned himself with a cannon on sparrows.",
        "original": "Wyprawił się z armatą na wróble.",
        "author": "folk saying"
    },
    {
        "ponglish": "Behind the uniform Virgoes rope.",
        "original": "Za mundurem panny sznurem.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Bandit's bandit of a chase.",
        "original": "Zbój zbója pogoni.",
        "author": "folk saying"
    },
    {
        "ponglish": "Roasted little pidgeons are not flying alone towards the sponge.",
        "original": "Pieczone gołąbki same nie lecą do gąbki.",
        "author": "folk saying"
    },
    {
        "ponglish": "The gunpowder levels everyone; we are born uneven, smooth we die.",
        "original": "Wszystkich zrównuje proch; rodzimy się nierówni, równi umieramy.",
        "author": "Seneca"
    },
    {
        "ponglish": "The art is to hide a piece.",
        "original": "Sztuką jest ukryć sztukę.",
        "author": "Ovid"
    },
    {
        "ponglish": "The target consecrates resources.",
        "original": "Cel uświęca środki.",
        "author": "Niccolo Machiavelli"
    },
    {
        "ponglish": "Good wine at-wedding-receptions the human's heart.",
        "original": "Dobre wino uwesela serce człowiecze.",
        "author": "Vulgate, Psalmi 103"
    },
    {
        "ponglish": "Permission in the house, the room outside.",
        "original": "Zgoda w domu, pokój na zewnątrz.",
        "author": "Latin maxim"
    },
    {
        "ponglish": "To be a bullet at leg's place.",
        "original": "Być kulą u nogi.",
        "author": "folk saying"
    },
    {
        "ponglish": "Even if a human forge from they stood, this and yes time will topple for him.",
        "original": "Choć człek ukuje ze stali, to i tak mu czas obali.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Do not look a spared horse in the teeth.",
        "original": "Darowanemu koniowi nie zaglądaj w zęby.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "A large kick scooter soul, hell is not present.",
        "original": "Hulaj dusza – piekła nie ma.",
        "author": "folk saying"
    },
    {
        "ponglish": "Curiosity is the first degree to she was baking.",
        "original": "Ciekawość to pierwszy stopień do piekła.",
        "author": "folk saying"
    },
    {
        "ponglish": "What was and is not, you do not write into the registry.",
        "original": "Co było, a nie jest, nie pisze sie w rejestr.",
        "author": "folk saying"
    },
    {
        "ponglish": "What was standing, it will not de-stand.",
        "original": "Co się stało, to sie nie odstanie.",
        "author": "folk saying"
    },
    {
        "ponglish": "Electrician electricity does not beanpole.",
        "original": "Elektryka prąd nie tyka.",
        "author": "folk saying"
    },
    {
        "ponglish": "On layouts there is no council.",
        "original": "Na układy nie ma rady.",
        "author": "folk saying"
    },
    {
        "ponglish": "The science has not gone into the forest.",
        "original": "Nauka nie poszła w las.",
        "author": "folk saying"
    },
    {
        "ponglish": "Whom a robot's problem, ¡ay! ¡ay! will be hollering with the sweat.",
        "original": "Komu robota kłopotem, oj! oj! będzie wołał potem.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "The labor and the ship give abundance.",
        "original": "Praca i statek dają dostatek.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Pole and Magyar, two brother's sons, and to wild boar's tusk, and to marine sandglass.",
        "original": "Polak, Węgier – dwa bratanki, i do szabli, i do szklanki.",
        "author": "folk saying"
    },
    {
        "ponglish": "Is pulling the lupus to the forest.",
        "original": "Ciągnie wilka do lasu.",
        "author": "folk saying"
    },
    {
        "ponglish": "Go with a stupid for climbing irons, he will be hunting frogs.",
        "original": "Idź z głupim po raki, on żaby łowić będzie.",
        "author": "folk saying"
    },
    {
        "ponglish": "Two things not to things: asking a young for a council, and an old for a short response.",
        "original": "Dwie rzeczy nie do rzeczy: młodego o radę pytać, a starego o krótką odpowiedź.",
        "author": "folk saying"
    },
    {
        "ponglish": "There is no erysipelas prickles's elderflower.",
        "original": "Nie ma róży bez kolców.",
        "author": "folk saying"
    },
    {
        "ponglish": "Who is counting on lottery tickets, will be naked and barefoot.",
        "original": "Kto liczy na losy, będzie nagi i bosy.",
        "author": "folk saying"
    },
    {
        "ponglish": "A shirt is closer to a corpse than a straitjacket.",
        "original": "Bliższa koszula ciała niż kaftan.",
        "author": "folk saying"
    },
    {
        "ponglish": "The language is flying like a shovel, hands are standing, the robots are scared.",
        "original": "Język lata jak łopata, ręce stoją, roboty się boją.",
        "author": "folk saying"
    }
];