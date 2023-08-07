const listOfAdages = [
    {
        "ponglish": "What is sudden is after the devil.",
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
        "ponglish": "Where the cat is absent, there mice prance.",
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
        "ponglish": "On fishlessness and cancer a fish.",
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
        "ponglish": "On the eye, a peasant was lying in the hospital.",
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
        "ponglish": "For Saint Anthony the first little blueberry will self-immolate.",
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
        "ponglish": "The real virtue critic is not a buoy.",
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
        "ponglish": "The impoverished feeds himself like the sea and the rich as he likes.",
        "original": "Ubogi żywi się jak może, a bogaty jako chce.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "He hooked himself like a velcro of a dog\'s tail.",
        "original": "Uczepił się, jak rzep psiego ogona.",
        "author": "folk saying"
    },
    {
        "ponglish": "He has got drunk like flatulence.",
        "original": "Upił się jak bąk.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Hit the table and the scissors will make an appeal.",
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
        "ponglish": "Bandit\'s bandit of a chase.",
        "original": "Zbój zbója pogoni.",
        "author": "folk saying"
    },
    {
        "ponglish": "Roasted little pigeons are not flying alone toward the sponge.",
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
        "ponglish": "Good wine at-wedding-receptions the human\'s heart.",
        "original": "Dobre wino uwesela serce człowiecze.",
        "author": "Vulgate, Psalmi 103"
    },
    {
        "ponglish": "Permission in the house, the room outside.",
        "original": "Zgoda w domu, pokój na zewnątrz.",
        "author": "Latin maxim"
    },
    {
        "ponglish": "To be a bullet at the leg\'s place.",
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
        "ponglish": "On layouts, there is no council.",
        "original": "Na układy nie ma rady.",
        "author": "folk saying"
    },
    {
        "ponglish": "The science has not gone into the forest.",
        "original": "Nauka nie poszła w las.",
        "author": "folk saying"
    },
    {
        "ponglish": "Whom a robot\'s problem, ¡ay! ¡ay! will be hollering with the sweat.",
        "original": "Komu robota kłopotem, oj! oj! będzie wołał potem.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "The labor and the ship give abundance.",
        "original": "Praca i statek dają dostatek.",
        "author": "Samuel Adalberg, <cite>Księga przysłów, przypowieści i wyrażeń przysłowiowych polskich</cite>"
    },
    {
        "ponglish": "Pole and Magyar, two brothers\' sons, and to wild boar\'s tusk, and to marine sandglass.",
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
        "ponglish": "There is no Erysipelas prickles\'s elderflower.",
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
        "ponglish": "The language is flying like a shovel, hands are standing, and the robots are scared.",
        "original": "Język lata jak łopata, ręce stoją, roboty się boją.",
        "author": "folk saying"
    },
    {
        "ponglish": "Un-pepper yourself from the general!",
        "original": "Odpieprzcie się od generała!",
        "author": "Adam Michnik on general Wojciech Jaruzelski"
    },
    {
        "ponglish": "I careful Mr. Gross as a notorious liar, a paid traffic cone of \"Shoah, Inc.\"",
        "original": "Ja p. Grossa uważam za notorycznego kłamcę, płatnego pachołka \„Przedsiębiorstwa Holokaust\”.",
        "author": "Janusz Korwin-Mikke"
    },
    {
        "ponglish": "It seems on this poets will always have a lot of robots.",
        "original": "Wygląda na to, że poeci będą mieli zawsze dużo roboty.",
        "author": "Wisława Szymborska"
    },
    {
        "ponglish": "It was supposed to be better from the previous, our age double \'x\'. Will not deliver it on time.",
        "original": "Miał być lepszy od zeszłych nasz wiek XX. \/ Już tego dowieść nie zdąży.",
        "author": "Wisława Szymborska"
    },
    {
        "ponglish": "To vanish does not lance us. To disappear girths us.",
        "original": "Przepaść nas nie przecina. \/ Przepaść nas otacza.",
        "author": "Wisława Szymborska"
    },
    {
        "ponglish": "Love sings out of tune the world\'s painting.",
        "original": "Miłość fałszuje obraz świata.",
        "author": "Maria Dąbrowska"
    },
    {
        "ponglish": "A magazine and art are the sole best men of our times.",
        "original": "Pismo i sztuka to jedyni świadkowie naszych czasów.",
        "author": "Maria Dąbrowska"
    },
    {
        "ponglish": "Patience, despair under the hood of the virtue.",
        "original": "Cierpliwość – rozpacz pod maską cnoty.",
        "author": "Julian Tuwim"
    },
    {
        "ponglish": "A horse has four legs. After one on every horn.",
        "original": "Koń ma cztery nogi. Po jednej na każdym rogu.",
        "author": "Julian Tuwim"
    },
    {
        "ponglish": "Immunity to demagoguery potentiates together with stability and a life foot.",
        "original": "Odporność na demagogię wzmaga się wraz ze stabilnością i stopą życiową.",
        "author": "Antoni Słonimski"
    },
    {
        "ponglish": "Always in situations like these wine are Jews, cyclists, but most often the literature.",
        "original": "Zawsze w takich sytuacjach winni są Żydzi, cykliści, ale najczęściej literatura.",
        "author": "Antoni Słonimski"
    },
    {
        "ponglish": "Polish dudes are the polecats over the polecats.",
        "original": "Chłopy polskie – to tchórze nad tchórzami.",
        "author": "Stefan Żeromski"
    },
    {
        "ponglish": "I will circumvent the world, or maybe I will murder the heart that punches me.",
        "original": "Obejdę świat dookoła, a może zabiję bijące mnie serce.",
        "author": "Stefan Żeromski"
    },
    {
        "ponglish": "Democracy is not a room\'s warranty.",
        "original": "Demokracja nie jest gwarancją pokoju.",
        "author": "Stanisław Stomma"
    },
    {
        "ponglish": "Christopher, throw that lousy disappointment in this place where you are.",
        "original": "Krzysztof, rzuć ten podły zawód, w tym miejscu, w którym jesteś.",
        "author": "Jurek Owsiak on Krzysztof Ziemiec"
    },
    {
        "ponglish": "One vice-PM gives in the tar paper for journalists, second will pour gays\' knuckleheads.",
        "original": "Jeden wicepremier daje w papę dziennikarzom, drugi będzie lał pałami gejów.",
        "author": "Donald Tusk"
    },
    {
        "ponglish": "Today they demand relationships, they will create a force, and then they presume a storm on a round, on a row, on the Sejm.",
        "original": "Dziś żądają związków, utworzą siłę, a potem przypuszczą szturm na partię, na rząd, na Sejm.",
        "author": "Edward Gierek"
    },
    {
        "ponglish": "Arms-apotheosize Chamberlain wants to bake-up for me.",
        "original": "Bronisław Komorowski chce mi dopiec.",
        "author": "Antoni Macierewicz"
    },
    {
        "ponglish": "We can fight for slowness, but it is hard for us to make its copies.",
        "original": "Potrafimy walczyć o wolność, ale trudno się nam jej dorabiać.",
        "author": "Father Józef Tischner"
    },
    {
        "ponglish": "I\'m on the ground for 4000 years, measuring in linear time.",
        "original": "Na Ziemi jestem od 4000 lat, mierząc czasem linearnym.",
        "author": "Edyta Górniak"
    },
    {
        "ponglish": "I am the man from under the question mark. Persisting doubts are harassing me.",
        "original": "Jestem człowiekiem spod znaku zapytania. Gnębią mnie nieustające wątpliwości.",
        "author": "Andrzej \"Piasek\" Piaseczny"
    },
    {
        "ponglish": "Grandma had over 120 years! I remember she was doing on wires without glasses, but she was assuming them to write letters.",
        "original": "(Babcia) Miała ponad 120 lat! Pamiętam, że robiła na drutach bez okularów, choć do pisania listów już je zakładała.",
        "author": "Iwan Komarenko"
    },
    {
        "ponglish": "When I appear in a new society, immediately I try to show I am not only beautiful but and cool. And that no one can ride on me without a plaintiff.",
        "original": "Jak pojawiam się w nowym towarzystwie, od razu próbuję pokazać, że jestem nie tylko ładna, ale i fajna. I że nikt nie może po mnie „jechać” bez powodu.",
        "author": "Joanna Krupa"
    },
    {
        "ponglish": "Everyone will carry in life failures. Smaller, bigger.",
        "original": "Każdy ponosi w życiu porażki. Mniejsze, większe.",
        "author": "Agustin Egurrola"
    },
    {
        "ponglish": "And here the judge whistles burned down. But we trust him. He is not our judge.",
        "original": "I tu sędzia gwiżdże spalony. Ale wierzymy mu. To nie nasz sędzia.",
        "author": "Jacek Gmoch"
    },
    {
        "ponglish": "You peppered nazi! In whom squad do you play?",
        "original": "Ty hitlerowcu pieprzony! W czyjej drużynie grasz?",
        "author": "Jacek Gmoch"
    },
    {
        "ponglish": "If they now get a little gate, then stems will make themselves after 50 kilos each one.",
        "original": "Jak teraz dostaną brameczkę, to im się zrobią nóżki po 50 kilo każda.",
        "author": "Jacek Gmoch"
    },
    {
        "ponglish": "Tadek Łóżeczkościenny is a great basket-weaver.",
        "original": "Theo Walcott to świetny koszykarz.",
        "author": "Jacek Gmoch"
    },
    {
        "ponglish": "Neighborhood from a big record \/ Every day I stand like plowed.",
        "original": "Osiedle z dużej płyty \/ Co dzień staję jak wryty.",
        "author": "Kazik Staszewski"
    },
    {
        "ponglish": "Death was hiding in robbers\' balls, in poisoned shots, in full of venom garden hoses\' teeth.",
        "original": "Śmierć kryła się w kulach rabusiów, w zatrutych strzałach, w pełnych jadu zębach węży.",
        "author": "Tony Halik"
    },
    {
        "ponglish": "We also were more chopped than our parents.",
        "original": "My też byliśmy bardziej porąbani niż nasi rodzice.",
        "author": "Zbigniew Hołdys"
    },
    {
        "ponglish": "God, it\'s straight like buzzing.",
        "original": "Boże, to jest proste jak bzykanie.",
        "author": "Doda"
    },
    {
        "ponglish": "From first farmlands after lies a lot. They can in-drawer an actor.",
        "original": "Od pierwszych ról zależy bardzo wiele. One mogą aktora zaszufladkować.",
        "author": "Beata Tyszkiewicz"
    },
    {
        "ponglish": "Hard is the miner\'s disappointment, tough and requiring unusual hardening.",
        "original": "Twardy jest zawód górnika, twardy i wymagający niezwykłego hartu.",
        "author": "Leopold Tyrmand, <cite>Zły</cite>"
    },
    {
        "ponglish": "All tragedies are happening through the aitchbone.",
        "original": "Wszystkie tragedie dzieją się przez krzyż.",
        "author": "Adam \"Nergal\" Darski"
    },
    {
        "ponglish": "Creature of this book is a man\'s story, who is running away from the servants of the military and in the South America is looking for a different genus of \"sensations\".",
        "original": "Istotą tej książki jest opowieść człowieka, który ucieka przed służbą wojskową i w Ameryce Południowej poszukuje różnego rodzaju „wrażeń”.",
        "author": "Roman Giertych on <cite>Trans-Atlantyk</cite>"
    },
    {
        "ponglish": "What a horse is everyone can see.",
        "original": "Jaki jest koń, każdy widzi.",
        "author": "folk saying"
    },
    {
        "ponglish": "Children and Pisces do not have a vote.",
        "original": "Dzieci i ryby głosu nie mają.",
        "author": "folk saying"
    },
    {
        "ponglish": "There, where Canidae are barking with asses.",
        "original": "Tam, gdzie psy dupami szczekają.",
        "author": "folk saying"
    },
    {
        "ponglish": "A human scores, Mister God is carrying balls.",
        "original": "Człowiek strzela, Pan Bóg kule nosi.",
        "author": "folk saying"
    },
    {
        "ponglish": "A salty stick and a capitellum is a school alibi.",
        "original": "Paluszek i główka to szkolna wymówka.",
        "author": "folk saying"
    },
    {
        "ponglish": "If the little goat was not jumping, then she would not fracture the little stem.",
        "original": "Gdyby kózka nie skakała, to by nóżki nie złamała.",
        "author": "folk saying"
    },
    {
        "ponglish": "What a shack rich them council.",
        "original": "Czym chata bogata tym rada.",
        "author": "folk saying"
    },
    {
        "ponglish": "Test-flown like a rat after the sewage.",
        "original": "Oblatany jak szczur po kanalizacji.",
        "author": "folk saying"
    },
    {
        "ponglish": "The paternal uncle changed a little axe for a stick.",
        "original": "Zamienił stryjek siekierkę na kijek.",
        "author": "folk saying"
    },
    {
        "ponglish": "Weed at the neighbor\'s place is always more green.",
        "original": "Trawa u sąsiada zawsze bardziej zielona.",
        "author": "folk saying"
    },
    {
        "ponglish": "That bad is absent, what would for good got out.",
        "original": "Nie ma tego złego, co by na dobre nie wyszło.",
        "author": "folk saying"
    },
    {
        "ponglish": "He is choosing himself like a jaybird after maybe.",
        "original": "Wybiera się jak sójka za morze.",
        "author": "folk saying"
    },
    {
        "ponglish": "Something is no yes.",
        "original": "Coś jest nie tak.",
        "author": "Donald Tusk"
    },
    {
        "ponglish": "Not with me these numbers.",
        "original": "Nie ze mną te numery.",
        "author": "Hans Kloss"
    },
    {
        "ponglish": "Poland, the country is swimming with milk and honey.",
        "original": "Polska - kraj mlekiem i miodem płynący.",
        "author": "folk saying"
    },
    {
        "ponglish": "Your height, it is for me behind peak.",
        "original": "Wasza Wysokość, to dla mnie zaszczyt.",
        "author": "President Andrzej Duda to King Charles III"
    },
    {
        "ponglish": "... each of us can in a reliable moment say, that no now, to this leek, to hour there, it is at this very moment wheel half to six, and I was a man, but now I am a woman.",
        "original": "\[...\] każdy z nas może w pewnym momencie powiedzieć, że no teraz, do tej pory, do godziny tam – jest w tej chwili koło wpół do szóstej – a byłem mężczyzną ale teraz jestem kobietą.",
        "author": "Jarosław Kaczyński, LL.D. and self-proclaimed Catholic, on transgender people"
    },
    {
        "ponglish": "What slow the voivodeship governor, it is not for you, stench.",
        "original": "Co wolno wojewodzie, to nie tobie smrodzie.",
        "author": "folk saying"
    },
    {
        "ponglish": "From Saxon to the forest.",
        "original": "Od Sasa do lasa.",
        "author": "folk saying"
    },
    {
        "ponglish": "To the bright diminutive form of Angela!",
        "original": "Do jasnej Anielki!",
        "author": "folk saying"
    },
    {
        "ponglish": "Miseries are walking steams.",
        "original": "Nieszczęścia chodzą parami.",
        "author": "folk saying"
    },
    {
        "ponglish": "For a poor ballerina the edge at the skirt is interrupting.",
        "original": "Kiepskiej baletnicy przeszkadza rąbek u spódnicy.",
        "author": "folk saying"
    },
    {
        "ponglish": "Do not stand everything on one card.",
        "original": "Nie stawiaj wszystkiego na jedną kartę.",
        "author": "folk saying"
    },
    {
        "ponglish": "I have with you on a chopping block.",
        "original": "Mam z tobą na pieńku.",
        "author": "folk saying"
    },
    {
        "ponglish": "Bedraggled 'F'!",
        "original": "Brudna pała!",
        "author": "Daniel Obajtek on his former employer"
    },
    {
        "ponglish": "Of course (I was throwing Molotov cocktails), approved.",
        "original": "Oczywiście (rzucałem koktajlami Mołotowa), ze skutkiem pozytywnym.",
        "author": "PM Mateusz Morawiecki on his alleged involvement in riots during 1981-1983 martial law"
    },
    {
        "ponglish": "Girls, expensive madam, this I like them dry.",
        "original": "Dziewczyny, droga pani, to ja lubię wytrawne.",
        "author": "Lieutenant Sławomir Borewicz"
    },
    {
        "ponglish": "Strength of the wrong on one.",
        "original": "Siła złego na jednego.",
        "author": "folk saying"
    },
    {
        "ponglish": "I am not a wounded birdie, just a nocturnal Mark.",
        "original": "Nie jestem rannym ptaszkiem, tylko nocnym markiem.",
        "author": "folk saying"
    },
];