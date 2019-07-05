import React, {useReducer} from "react";
import SongsContext from "./songsContext";
import songsReducer from "./songsReducer";
import {
    SONGS_CURRENT,
    SONGS_CURRENT_CLEAR,
    SONGS_SEARCH,
    SONGS_SEARCH_CLEAR
} from "../types";

const SongsState = (props) => {
    const initialState = {
        songs: [
            {
                id: 1,
                slug: "ach-boze-z-nebe",
                title: "Ach bože z nebe",
                text: "<p>Ach bože z nebe já prosím tebe <br />Starého muža mám <br />Rač ně ho vzáti mladého dáti <br />Ať hříchu nepáchám<br />Rač ně ho vzáti mladého dáti <br />Ať hříchu nepáchám</p><p>Ach bože z nebe já prosím tebe <br />Jak já mu zvonit dám <br />Na staré hrnce hotové zvonce <br />Tak já mu zvonit dám <br />Na staré hrnce hotové zvonce <br />Tak já mu zvonit dám </p><p>Ach bože z nebe já prosím tebe <br />Jak já ho pochovám <br />Na starém došku zapřáhnu kočku <br />Tak já ho pochovám<br />Na starém došku zapřáhnu kočku <br />Tak já ho pochovám</p><p>Ach bože z nebe já prosím tebe <br />Jak já plakat budu <br />Na jeho hrobě vyskočím sobě <br />Co je mně po tobě <br />Na jeho hrobě vyskočím sobě <br />Co je mně po tobě </p>",
                views: 0,
                added: 0
            },
            {
                id: 2,
                slug: "az-to-se-mnu-sekne",
                title: "Až to se mnu sekne",
                text: "<p>Až obuju si rano černe papirove boty<br />až i moja stara pochopi že nejdu do roboty<br />až vyjde dluhy pruvod smutečnich hostu<br />na Slezsku Ostravu od Sikorova mostu<br />až to se mnu sekne<br />to bude pěkne pěkne fajne a pěkne<br />až to se mnu definitivně sekne</p><p>Aby všeckym bylo jasne že mě lidi měli radi<br />ať je gulaš silny baby smutne muzika ať ladi<br />bo jak sem nesnašel šlendryjan ve vyrobě<br />nebudu ho trpěť ani co sem v hrobě<br />to bude pěkne pěkne fajne a pěkne<br />až to se mnu definitivně sekne</p><p>S někerym to seka že až neviš co se robi<br />jestli pomohla by deka nebo teplo mlade roby<br />kdybych si moh vybrat chtěl bych hned a honem<br />ať to se mnu šlahne tajak se starym Magdonem<br />to bude pěkne pěkne fajne a pěkne<br />až to se mnu definitivně sekne</p><p>Jedine co nevim jestli Startku nebo Spartu<br />bo bych tam nahoře v nebi nerad trhal partu<br />na každy pad s sebu beru bandasku s rumem<br />bo rum nemuže uškodit když pije se s rozumem<br />to bude pěkne pěkne fajne a pěkne<br />až to se mnu definitivně sekne</p><p>Já vím že Bože nejsi ale kdybys třeba byl tak<br />hoď mě na cimru kde leži stary Lojza Miltag<br />s Lojzu chodili sme do Orlove na zakladni školu<br />farali sme dolu tak už doklepem to spolu<br />až to se mnu sekne pěkne to bude pěkne<br />až to se mnu definitivně sekne</p><p>Až obuju si rano černe papirove boty<br />až i moja stara pochopi že nejdu do roboty<br />kdybych co chtěl dělal všechno malo platne<br />mohlo to byt horši nebylo to špatne<br />až to se mnu sekne<br />kdybych co chtěl dělal všechno malo platne<br />mohlo to byt horši nebylo to špatne<br />až to se mnu ná na na ná na<br />ná na na ná na ná na na ná na na<br />na ná na ná ná na na na ná na<br />na ná ná na ná na ná na ná</p>",
                views: 0,
                added: 0
            },
            {
                id: 3,
                slug: "dedek-s-cibuli",
                title: "Děděk s cibulí",
                text: "<p>  Na posledním kilometru</br>  medle vedle bedny s cibulí</br>  seděl dědek, osud čet´z run,</br>  ať se holky taky vybulí. </p><p>  Jak se na mě podíval,</br>  popotah´si šle,</br>  ve vousech se drbal jaký div, ale</br>  když tu náhle sebou o zem šleh´ </p><p>  Mě nosí chromá kobyla,</br>  jiná na mě, jiná na mě, jiná na mě nezbyla.</br>  Ať si kulhá do svahu,</br>  má vytrvalost, srdce, věrnost,</br>  vytrvalost, srdce, odvahu. </p><p>  Všecky tetky od naproti</br>  seběhly se trapem v jeden šik,</br>  klevetějí, hlavou kroutí,</br>  a koukají se na ten dědkův trik. </p><p>  Nač se mordovat máme</br>  s cizím osudem,</br>  dříve než ten svůj poznáme,</br>  na věky tu přece nebudem. </p><p>  Mě nosí chromá kobyla,</br>  jiná na mě, jiná na mě, jiná na mě nezbyla.</br>  Ať si kulhá do svahu,</br>  má vytrvalost, srdce, věrnost,</br>  vytrvalost, srdce, odvahu. </p><p>  Na posledním kilometru</br>  cibulička se tam kutálí,</br>  větu větru se rtu setru</br>  dědkovi ať se tam neválí. </p><p>  Tetky už si zuby brousejí</br>  na ten jeho flek,</br>  voklepal se dědek jeden,</br>  řek Ale fuj, to sem se ňáko lek´. </p><p>  Mě nosí chromá kobyla,</br>  jiná na mě, jiná na mě, jiná na mě nezbyla.</br>  Ať si kulhá do svahu,</br>  má vytrvalost, srdce, věrnost,</br>  vytrvalost, srdce, odvahu. </p><p>  Ba jo</p>",
                views: 0,
                added: 0
            },
            {
                id: 4,
                slug: "dej-mi-vic-sve-lasky",
                title: "Dej mi víc své lásky",
                text: "<p>  Vymyslel jsem spoustu nápadů a hůů</br>  Co podporujou hloupou náladu a hůů</br>  Hodit klíče do kanálu</br>  Sjet po zadku holou skálu</br>  V noci chodit strašit do hradu</p><p>  Dám si dvoje housle pod bradu a hůů</br>  V bílé plachtě chodím pozadu a hůů</br>  Úplně melancholicky</br>  S citem pro věc jako vždycky</br>  Vyrábím tu hradní záhadu</p><p>  [: Má drahá dej mi víc :]</br>  Má drahá dej mi víc své lásky a hůů</br>  [: Já nechci skoro nic :]</br>  Já chci jen pohladit tvé vlásky a hůů</p><p>  Nejlepší z těch divnejch nápadů a hůů</br>  Mi dokonale zvednul náladu hůů</br>  Natrhám ti sedmikrásky</br>  Tebe celou s tvými vlásky</br>  Zamknu si na sedm západů</p><p>  R:</br>  Nejlepší z těch divnejch nápadů a hůů</br>  Mi dokonale zvednul náladu a hůů</br>  Natrhám ti sedmikrásky</br>  Tebe celou s tvými vlásky</br>  Zamknu si na sedm západů</p>",
                views: 0,
                added: 0
            },
            {
                id: 5,
                slug: "bedna-od-whiskey",
                title: "Ej vandrovali Hudci",
                text: "<p>  Ej, vandrovali hudci, ej vandrovali hudci</br>  dvá švarní mládenci ej, dvá švarní mládenci.</p><p>  Ej, vandrovali horú, ej vandrovali horú</br>  horú javorovú, ej, horú javorovú.</p><p>  Ej, uhlédli tam drevo, ej uhlédli tam drevo</br>  drevo javorové,ej na husličky dobré.</p><p>  Ej, pojďme, ho utnime, ej pojďme, ho utnime</br>  huslí naděláme, ej huslí naděláme.</p><p>  Ej, po najprv zaťali, ej po najprv zaťali</br>  drevo zesinalo, ej drevo zesinalo.</p><p>  Ej, po druhé zaťali, ej po druhé zaťali</br>  drevo zaplakalo, ej drevo zaplakalo.</p><p>  Ej, po tretí zaťali, ej po treti zaťali,</br>  drevo promlúvilo,ej drevo promlúvilo.</p><p>  Ej, nejsem já to drevo, ej nejsem já to drevo,</br>  jsem já krev a tělo, ej, jsem já krev a tělo,</br>  jsem já krev a tělo, ej jsem já krev a tělo </p>",
                views: 0,
                added: 0
            },
            {
                id: 6,
                slug: "gorale",
                title: "Gorale",
                text: "<p>  R:</br>  za lasami za gorami za dolinami</br>  pobili sie dwaj gorale ciupagami</p><p>  ej gorale nie bijta sie</br>  ma goralka dwa warkocze</br>  podzielita sie</br>  ej gorale nie bijta sie</br>  ma goralka dwa warkocze</br>  podzielita sie</p><p>  R</p><p>  ej gorale nie bijta sie</br>  ma goralka dwoje oczu</br>  podzielita sie</br>  ej gorale nie bijta sie</br>  ma goralka dwoje oczu</br>  podzielita sie</p><p>  R</p><p>  ej gorale nie bijta sie</br>  ma goralka wielke serce</br>  podzielita sie</br>  ej gorale nie bijta sie</br>  ma goralka wielke serce</br>  podzielita sie</p><p>  R</p><p>  ej gorale nie bijta sie</br>  ma goralka z przodu z tylu</br>  podzielita sie</br>  ej gorale nie bijta sie</br>  ma goralka z przodu z tylu</br>  podzielita sie</p>",
                views: 0,
                added: 0
            },
            {
                id: 7,
                slug: "hvezda-na-vrbe",
                title: "Hvězda na vrbě",
                text: "<p>  Kdo se večer hájem vrací</br>  ten ať klopí zraky</br>  ať je nikdy neobrací</br>  k vrbě křivolaký.</p><p>  Jinak jeho oči zjistí</br>  i když se to nezdá,</br>  že na větvi kromě listí</br>  visí malá hvězda.</p><p>  Viděli jsme jednou v lukách</br>  plakat na tý vrbě kluka</br>  který pevně věřil tomu,</br>  že ji sundá z toho stromu.</p><p>  Kdo o hvězdy jeví zájem</br>  zem když večer chladne</br>  ať jde klidně přesto hájem</br>  hvězda někdy spadne.</p><p>  Ať se pro ni rosou brodí</br>  a pak vrbu najde si</br>  a pro ty, co kolem chodí</br>  na tu větev zavěsí.</p><p>  Kdo se večer hájem vrací</br>  ten ať klopí zraky</br>  ať je nikdy neobrací</br>  k vrbě křivolaký.</p><p>  Jinak jeho oči zjistí</br>  i když se to nezdá,</br>  že na větvi kromě listí</br>  visí malá hvězda.</p><p>  Viděli jsme jednou v lukách</br>  plakat na tý vrbě kluka</br>  který pevně věřil tomu,</br>  že ji sundá z toho stromu.</p><p>  Kdo o hvězdy jeví zájem</br>  zem když večer chladne</br>  ať jde přesto klidně hájem</br>  hvězda někdy spadne.</p><p>  Ať se pro ni rosou brodí</br>  a pak vrbu najde si</br>  a pro ty, co kolem chodí</br>  na tu větev zavěsí.</p>",
                views: 0,
                added: 0
            },
            {
                id: 8,
                slug: "chodim-po-brodway",
                title: "Chodím po Brodway",
                text: "<p>  Chodím po Broadwayi hladov sem a tam,</br>  chodím po Broadwayi hladov sem a tam,</br> chodím po Broadwayi, po Broadwayi,</br > po Broadwayi hladov sem a tam.</p > <p>  R:  Singi jau, jau, ju pi ju pi jau,</br>  Singi jau, jau, ju pi ju pi jau,</br > Singi jau, jau, ju pi, jau, jau, ju pi,</br > Singi jau, jau, ju pi ju pi jau.</p > <p>  Moje černé děti mají stále hlad,</br>  moje černé děti mají stále hlad,</br > moje černé děti, černé děti,</br > černé děti mají stále hlad.</p > <p>  R</p> <p>  Práci nedostanu, černou kůži mám,</br>  práci nedostanu, černou kůži mám,</br > práci nedostanu, nedostanu,</br > protože já černou kůži mám.</p > <p>  R</p> <p>  A já pevně věřím, že zas přijde den,</br>  a já pevně věřím, že zas přijde den,</br > a já pevně věřím, pevně věřím,</br > že zas černoch bude svoboden.</p > <p>  R</p>",
                views: 0,
                added: 0
            },
            {
                id: 9,
                slug: "jednou-to-pomine",
                title: "Jednou to pomine",
                text: "<p>  Jednou to pomine,</br>  dobrý, zlý, jen my ne.</br>  Jednou to přebolí,</br>  ať je to cokoli.</br>  Jednou se vyhrabem,</br>  z každýho trápení,</br>  mezi zemí, nebem,</br>  nic na věky neni.</p><p>  Nad ránem, domů do Dejvic,</br>  nezapomeň navěky - sám nejsi nic,</br>  nezapomeň navěky - sám nejsi nic!</p><p>  Jednou se zbavíme,</br>  všeho co vlečeme,</br>  nějak to přežijme,</br>  těžko a přece ne.</br>  Jednou nás vopustí,</br>  co jsme si nalhali,</br>  křídlama zašustí,</br>  kéž je to za námi.</p><p>  Nad ránem, domů do Dejvic,</br>  nezapomeň navěky - sám nejsi nic,</br>  nzapomeň navěky - sám nejsi nic! </p><p>  Jednou to pomine,</br>  dobrý, zlý, jen my ne.</br>  Jednou to přebolí,</br>  ať je to cokoli.</br>  Jednou se vyhrabem,</br>  z každýho trápení,</br>  mezi zemí, nebem,</br>  nic na věky neni.</p><p>  Na, na, na.... ná</p><p>  Jednou to pomine,</br>  dobrý, zlý, jen my ne.</br>  Jednou to přebolí,</br>  ať je to cokoli...</p><p>  Na, na, ná..... ná</p>",
                views: 0,
                added: 0
            },
            {
                id: 10,
                slug: "keramicka",
                title: "Keramická",
                text: "<p>  Když je smutno malíři, pozve si modelky,</br>  maluje jim profily, anfasy i celky,</br>  děvčata jsou veselá s překrásnými těly,</br>  malíři však pod štětcem pláčou akvarely.</p><p>  Když je smutno sochaři, tak si vezme dláto,</br>  formu z dřeva udělá, kdepak, nezvorá to,</br>  pak si z kovu odlije ňákou pěknou sošku,</br>  jenomže je studená, teplá ani trošku.</p><p>  Když je smutný keramik, to je jiná píseň,</br>  ten si v peci zatopí a už netrápí se,</br>  nejdřív spálí dopisy od svý první lásky,</br>  potom skripta z umprumu, jsou jich čtyři svazky,</br>  potom přijdou na řadu dva oddací listy,</br>  pak monografie polského symbolisty,</br>  z komína valí se kysličník uhličitý,</br>  když hoří akryly, lepty a linoryty,</br>  mezitím, co pálí veškeré svoje šaty,</br>  opravuji: jde o kysličník uhelnatý,</br>  v peci oheň plápolá, umělec usíná,</br>  když je smutný keramik, je to vždycky hlína.</p>",
                views: 0,
                added: 0
            },
            {
                id: 11,
                slug: "kojot-sakal-a-hyena",
                title: "Kojot, Šakal a Hyena",
                text: "<p>  Seděli Kojot Šakal a Hyena</br>  Seděli v La Casa Blue u vína</br>  Seděli a plánovali prázdniny</br>  Že vypadnou někam do pustiny</p><p>  Já chci jet na Hawai zvolá Hyena</br>  Kojot na to: Nesmysl, kravina</br>  Odcházeje od stolu </br>  šlápne do lejna</p><p>  Návrh Šakala: pojeďme do Gruzie</br>  Je tam lacino a pěkná prérie</br>  Šakele ty vemeno, to si vymyslel jak</br>  Máme jen deset dní a nejezdí tam vlak</p><p>  Po frenetické vřavě po chvíli křiku</br>  Shodli se že vyrazí na Korsiku</br>  Na Korsiku! Pojedeme na Korsiku!</p><p>  Tak nastal den odjezdu sraz byl u hyeny</br>  Kojot i šakal měli oba zpoždění</br>  Atmosféra napjatá dala by se krájet</br>  Všichni tři nervózní už dávno chtěli vyjet</p><p>  Sotva minuli první zatáčku </br>  Šakalův mobil se rozezvonil</br>  Šakal ho zvled náhle mu ztuhla tvář</br>  Šéf ho volal na povinný seminář</p><p>  Nakonec s vámi nejedeu, sorry lidi,</br>  Kojote, řekni mu, ať se stydí</br>  Události nabrali rychlý sled</br>  Pouze ve dvou vyrazili na výlet</p><p>  Pouze kojot a hyena mířili na korsiku</br>  Spolu se nebavili a cestovali v tichu</br>  Jak todle půjde dál to ani hvězdy neví,</br>  Proč ti dva tu spolu sedí, když si nesedí</p><p>  Hyeno, ptá se kojot, co bude k večeři</br>  Jak to mám vědět, vole, hrníček od peří</br>  Hyena odsekla </br>  a kojota tím nakrkla</p><p>  pandemonium vzteku v záchvatu zuřivosti</br>  vrhl se kojot na hyenu že zláme jí kosti</br>  zuby se zaťaly hluboko pod kůži</br>  krvavá zranění je bolestí souží</p><p>  když od sebe se odtrhli oba ztěžka dýchali</br>  netrvalo dlouho a znovu se porvali</br>  ze seschlé země prach se vzdouvá</br>  těmhle dvěma bude nějaký čas ouva</p><p>  po pár dnech co putovali po korsice</br>  přišla šakalová bohorovná propozice</br>  přijeďte pro mě zítra večer</br>  tak pojedeme pro šakala aby se nerozbrečel</p><p>  když opět se sešli všichni tři spolu</br>  chvíli jim trvalo než dali se do hovoru</br>  lepší je si věci přímo vyříkat</br>  než skuhrat a naříkat</br>  Ref</p>",
                views: 0,
                added: 0
            },
            {
                id: 12,
                slug: "kometa",
                title: "Kometa",
                text: "<p>  Spatřil jsem kometu, oblohou letěla,</br>  chtěl jsem jí zazpívat, ona mi zmizela,</br>  zmizela jako laň u lesa v remízku,</br>  v očích mi zbylo jen pár žlutých penízků.</p><p>  Penízky ukryl jsem do hlíny pod dubem,</br>  až příště přiletí, my už tu nebudem,</br>  my už tu nebudem, ach, pýcho marnivá,</br>  spatřil jsem kometu, chtěl jsem jí zazpívat.</p><p>  O vodě, o trávě, o lese,</br>  o smrti, se kterou smířit nejde se,</br>  o lásce, o zradě, o světě</br>  a o všech lidech, co kdy žili na téhle planetě.</p><p>  Na hvězdném nádraží cinkají vagóny,</br>  pan Kepler rozepsal nebeské zákony,</br>  hledal, až nalezl v hvězdářských triedrech</br>  tajemství, která teď neseme na bedrech.</br>  Velká a odvěká tajemství přírody,</br>  že jenom z člověka člověk se narodí,</br>  že kořen s větvemi ve strom se spojuje</br>  a krev našich nadějí vesmírem putuje.</p><p>  Na na na ...</p><p>  Spatřil jsem kometu, byla jak reliéf</br>  zpod rukou umělce, který už nežije,</br>  šplhal jsem do nebe, chtěl jsem ji osahat,</br>  marnost mne vysvlékla celého donaha.</br>  Jak socha Davida z bílého mramoru</br>  stál jsem a hleděl jsem, hleděl jsem nahoru,</br>  až příště přiletí, ach, pýcho marnivá,</br>  my už tu nebudem, ale jiný jí zazpívá.</p><p>  O vodě, o trávě, o lese,</br>  o smrti, se kterou smířit nejde se,</br>  o lásce, o zradě, o světě,</br>  bude to písnička o nás a kometě ...</p>",
                views: 0,
                added: 0
            },
            {
                id: 13,
                slug: "maluju-si-boty",
                title: "Maluju si boty",
                text: "<p>  Chodím po městech a maluju si boty,</br>  chodím si světem sám.</br>  Nekouřím a nepiju nechodím do roboty,</br>  nevím, co hledat mám.</br>  Tuším, co se stalo a nevím co mě čeká,</br>  jak se v tom vyznat mám.</br>  Někde je vody málo a jinde teče řeka,</br>  tímto asi zavírám.</p><p>  R:</br>  Co se stalo a nemělo jsou plané kecy v kleci,</br>  kašlu na to.</br>  Co  se jednou rozhořelo, to popel zanechalo,</br>  kladu na to.</br>  Lidé nejsou černo bílí někdy zlí a někdy milí,</br>  já se na to.</br>  Kdo todle nepochopí ještě si žerty tropí, </br>  seru na to.</br>  Stíny mě doprovází, síla života schází,</br>  seru na to</br>  Pomalu se blíží konec s velkou tíží,</br>  seru na to.</p><p>  R</p>",
                views: 0,
                added: 0
            },
            {
                id: 14,
                slug: "mana",
                title: "Máňa",
                text: "<p>  Šinu si to takhle večer k zapadáku,</br>  když v tom jeden komplic ke mně hovoří:</br>  chytili jsme Máňu v koženým kabátu,</br>  a do rána jí svíčka dohoří. </p><p>  No tak vidíš, Máňo, přece jsme tě lízli,</br>  tohle jsi nám, holka, dělat neměla!</br>  Zradila jsi partu, chodila jsi s fízly,</br>  teď dostaneš mordu do těla. </p><p>  Byla velká bída, bylo málo cejnů,</br>  proto jsi se Máňo sčuchla s chlupatým</br>  a já si tě teď za to vlastoručně sejmu,</br>  nechám tě tu s prádlem flekatým. </p><p>  Nejhorší je na tom, že to bylo s chlupem,</br>  co nám loni v létě partu rozdělal</br>  naše drahá Máňo, a já jsem zas klukem,</br>  kterej tě teď za to voddělá. </p><p>  Zavři oči smutný,moje milá Máňo,</br>  já jsem tě měl holka, doopravdy rád,</br>  že jsi krysařila, máš tedˇ dokonáno,</br>  parta chce bejt jistá, tak jdi spát! </p><p>  Náhle třeskl výstřel , tichým zapadákem,</br>  tam kde policajti nikdy nechodí,</br>  nežije už Máňa v koženým kabátě,</br>  na nikoho nic už nepoví</br>  nežije už Máňa v koženým kabátě,</br>  na nikoho nic už nepoví.</p>",
                views: 0,
                added: 0
            },
            {
                id: 15,
                slug: "na-hotelu-v-olomouci",
                title: "Na hotelu v Olomouci",
                text: "<p>  V půlce ledna, ve tmě tmoucí,</br>  na hotelu v Olomouci.</br>  Kdo jste, pane? Šátrám dlaní...</br>  řekla bych, že Mastroianni.</br>  Ten je ale mrtvej přece.</br>  Leží v zemi, a ne v dece,</br>  pod níž slyším srdce tlouci</br>  na hotelu v Olomouci.</p><p>  Má dlaň je jak pytlák v lese,</br>  tlukot srdce zrychluje se.</br>  Nejste starší ročník, ba ne,</br>  rty však máte rozpukané...</br>  Moře smutku je holt slané.</br>  Chyťte se mne, chyťte, pane!</br>  Jsem to stéblo pro tonoucí</br>  na hotelu v Olomouci.</p><p>  Chytil jste mě smyčkou hada.</br>  Ale kdo jsem? Zkuste hádat.</br>  No, to sotva uhodnete.</br>  Budu totiž vším, čím chcete.</br>  Krásnou, blbou, útlou, tučnou,</br>  oněmělou, či tak hlučnou</br>  až si zacpou uši brouci</br>  na hotelu v Olomouci.</p><p>  Ztěžka dýchám. Byls jak zvíře.</br>  A teď spíš. Jsi se vším smířen.</br>  Do ruky si boty beru...</br>  Než ti zmizím v ranním šeru,</br>  políbím tě. To se může.</br>  Líbám přece svého muže.</br>  Však víš - změna neublíži.</br>  Příští pátek v Kroměříži.</p>",
                views: 0,
                added: 0
            },
            {
                id: 16,
                slug: "na-tu-svatu-katerinu",
                title: "Na tu svatu Katerinu",
                text: "<p>  Na tu svatú Katerinu, katerinskú nedělu,</br>  na tu svatú Katerinu, katerinskú nedělu,</br>  zverbovali šohajíčka na vojnu, </br>  zverbovali šohajíčka na vojnu.</p><p>  Sama královna, sama královna </br>  ceduličku psala, ceduličku psala, </br>  aby šohajka, aby šohajka </br>  na vojnu dostala, na vojnu dostala. </p><p>  R:</br>  Čobogaj, nebogaj, čáry nebogaj, </br>  čobogaj, nebogaj, čáry nebogaj, </br>  čobogaj, nebogaj, čáry nebogaj, </br>  bogaj, bogaj, bogaj, bogaj, čáry nebogaj. </p><p>  Prečo ste ma zverbovali, zverbovali v nedělu, </br>  prečo ste ma zverbovali, zverbovali v nedělu. </br>  Prečo ste to něnechali na stredu? </br>  prečo ste to něnechali na stredu? </p><p>  Sama královna, sama královna </br>  ceduličku psala, ceduličku psala, </br>  aby šohajka, aby šohajka </br>  z vojny dom dostala, z vojny dom dostala. </p><p>  R</p>",
                views: 0,
                added: 0
            },
            {
                id: 17,
                slug: "nosorozec",
                title: "Nosorožec",
                text: "<p>  Přivedl jsem domů Božce nádhernýho nosorožce,</br>  originál tlustokožce, koupil jsem ho v hospodě.</br>  Za dva rumy a dvě vodky připadal mi velmi krotký,</br>  pošlapal mi polobotky, ale jinak v pohodě.</p><p>  Vznikly menší potíže při nástupu do zdviže,</br>  při výstupu ze zdviže už nám to šlo lehce.</br>  Vznikly větší potíže, když Božena v negližé,</br>  když Božena v negližé řvala, že ho nechce.</p><p>  Marně jsem se snažil Božce vnutit toho tlustokožce,</br>  originál nosorožce, co nevidíš v obchodech.</br>  Řvala na mě, že jsem bohém, pak mi řekla: Padej, sbohem,</br>  zabouchla nám před nosorohem, tak tu sedím na schodech.</p><p>  Co nevidím - souseda, jak táhne domů medvěda,</br>  originál medvěda, tuším značky grizzly.</br>  Už ho ženě vnucuje a už ho taky pucuje</br>  a zamčela a trucuje, tak si to taky slízli.</p><p>  Tak tu sedím se sousedem, s nosorožcem a s medvědem,</br>  nadáváme jako jeden na ty naše slepice.</p>",
                views: 0,
                added: 0
            },
            {
                id: 18,
                slug: "pijte-vodu",
                title: "Pijte vodu",
                text: "<p>  [: Pijte vodu</br>  pijte pitnou vodu</br>  pijte vodu</br>  a nepijte rum :]</p><p>  Jeden smutný ajznboňák</br>  pil na pátém nástupišti ajerkoňak</br>  huba se mu slepila</br>  dýzl lokomotiva ho zabila</p><p>  V rodině u Becherů</br>  becherovku pijou přímo ze džberů</br>  proto všichni Becheři</br>  mají trable s játrama a páteří</p><p>  Pil som vodku značky Gorbatschow</br>  a potom povedal som všeličo a volačo</br>  vyfásol som za to tri roky</br>  teraz pijem chlorované patoky</p><p>  Jesteśmy chłopci z Warszawy</br>  jeżdżimy pociągiem za robotą do Ostrawy</br>  cztery litry wódki a mnóstwo piw</br>  po prostu bardzo fajny kolektyw</p><p>  Jedna paní v Americe</br>  ztrapnila se převelice</br>  vypila na ex rum</br>  a poblila jim Bílý dům</p><p>  Pijte vodu</br>  pijte pitnou vodu</br>  pijte vodu</br>  a nepijte rum</br>  rum,rum-bum-bum</p>",
                views: 0,
                added: 0
            },
            {
                id: 19,
                slug: "po-schodoch",
                title: "Po schodoch",
                text: "<p>  Výťah opäť nechodí, tak zdolať 13 poschodí,</br>  zostáva mi znovu po svojich.</br>  Na schodoch čosi šramotí a neón kde tu nesvieti,</br>  ešte že sa po tme nebojím.</p><p>  Á... počuť hlasné stereo, aj výstrahy pred neverou,</br>  kdosi čosi vrta v paneloch.</br>  Tatramatky ródeo, zas mieša sa tu s operou,</br>  všetko počuť cestou po schodoch.</p><p>  Štekot smutnej kólie, za premárnené prémie,</br>  vyhráža sa manžel rozvodom.</br>  Disko, tenis, árie, kritika televízie,</br>  oddnes chodím iba po schodoch.</p><p>  Cestou po schodoch, po schodoch,</br>  poznávam poschodia.</br>  Poznám po schodoch, po zvukoch,</br>  čo sme kto za ľudia.</p><p>  Po schodoch, po schodoch,</br>  poznávam poschodia.</br>  Poznám po schodoch, po zvukoch,</br>  čo sme kto za ľudia.</p>",
                views: 0,
                added: 0
            },
            {
                id: 20,
                slug: "prodavac",
                title: "Prodavač",
                text: "<p>  Pojďte všichni dovnitř, pozvěte si všechny známé,</br>  my vám dobrou radu dáme, neboť právě otvíráme,</br>  prodáváme, vyděláváme, co kdo chcete, tak to máme,</br>  co nemáme objednáme, všechno známe, všechno víme,</br>  poradíme, posloužíme.</p><p>  Stál krámek v naší ulici, v něm párky, buřty s hořčicí</br>  a bonbóny a sýr a sladký mák.</br>  Tam chodíval jsem potají, tak jak to kluci dělají</br>  a ochutnával od okurek lák</br>  a pro mou duši nevinnou pan vedoucí byl</br>  hrdinou, když po obědě začal prodávat:</br>  Měl jazyk mrštný jako bič a já byl z něho celý pryč a</br>  toužil jsem se prodavačem stát.</p><p>  Pět deka, deset deka, dvacet deka, třicet deka, kilo chleba, kilo cukru,</br>  jeden rohlík, jedna veka, všechno máme, co kdo chcete,</br>  obchod kvete, jen si račte říct.</br>  Čtyři kila, deset kilo, dvacet kilo, třicet kilo, </br>  navážíme, zabalíme, klaníme se, to by bylo, prosím pěkně, </br>  mohu nechat o jedenáct deka víc.</p><p>  Já nezapomněl na svůj cíl</br>  a záhy jsem se vyučil</br>  a moh být ze mě prodavačů král.</br>  Jenomže, jak běžel čas,</br>  náhle zaslechl jsem hudby hlas</br>  a znenadání na jevišti stál.</br>  I když nejsem králem zpěváků,</br>  teď zpívám s partou Fešáků</br>  a nikdo vlastně neví, co jsem zač</br>  Mě potlesk hřeje do uší</br>  a mnohý divák netuší,</br>  že mu vlastně zpívá prodavač.</p><p>  R</br>  Vím, že se život rozletí</br>  a sním o konci století,</br>  kdy nikdo neví, co je chvat a shon </br>  a dětem líčí babička,</br>  jak vypadala elpíčka</br>  a co byl vlastně starý gramofon.</br>  I kdyby v roce dva tisíce</br>  byla veta po muzice,</br>  obchod je věc stále kvetoucí.</br>  Už se vidím, je to krása,</br>  ve výloze nápis hlásá:</br>  Michal Tučný : odpovědný vedoucí.</p><p>  R</p>",
                views: 0,
                added: 0
            }
        ],
        currentSong: {},
        matchingSongs: null
    };

    const [state, dispatch] = useReducer(songsReducer, initialState);

    // Set current song
    const setCurrentSong = (id) => {
        dispatch({type: SONGS_CURRENT, payload: id});
    };

    // Clear current song
    const clearCurrentSong = () => {
        dispatch({type: SONGS_CURRENT_CLEAR});
    };

    // Search songs
    const searchSongs = (text) => {
        dispatch({type: SONGS_SEARCH, payload: text});
    };

    // Clear songs search
    const clearSearchSongs = () => {
        dispatch({type: SONGS_SEARCH_CLEAR});
    };
  
    return (
        <SongsContext.Provider
            value={{
                songs: state.songs,
                currentSong: state.currentSong,
                setCurrentSong,
                clearCurrentSong,
                matchingSongs: state.matchingSongs,
                searchSongs,
                clearSearchSongs
            }}
        >
            {props.children}
        </SongsContext.Provider>
    );
};

export default SongsState;
