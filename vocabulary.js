const rows = (level, block) => block.trim().split('\n').map((line, index) => {
  const p = line.split('|');
  const word = { id: `${level.toLowerCase()}-${index + 1}`, level, category:p[0], type:p[1], dutch:p[2], english:p[3], persian:p[4], example:p[5] };
  if (word.type === 'noun') word.plural = p[6];
  if (word.type === 'verb') Object.assign(word, { presentIk:p[6], presentHij:p[7], pastSingular:p[8], pastPlural:p[9], participle:p[10], auxiliary:p[11] });
  return word;
});

const B1 = rows('B1', `
Communicatie|verb|afspreken|to arrange / agree|قرار گذاشتن|We spreken morgen om tien uur af.|spreek af|spreekt af|sprak af|spraken af|afgesproken|hebben
Werk|verb|aanvragen|to apply for / request|درخواست کردن|Ik vraag een stageplaats aan.|vraag aan|vraagt aan|vroeg aan|vroegen aan|aangevraagd|hebben
Communicatie|verb|aanbieden|to offer|پیشنهاد دادن|Zij biedt haar hulp aan.|bied aan|biedt aan|bood aan|boden aan|aangeboden|hebben
Dagelijks leven|verb|afhangen van|to depend on|بستگی داشتن به|Het hangt van het weer af.|hang af|hangt af|hing af|hingen af|afgehangen|hebben
Dagelijks leven|verb|beginnen|to begin|شروع کردن|De les begint om negen uur.|begin|begint|begon|begonnen|begonnen|zijn
Studie|verb|bereiken|to achieve / reach|رسیدن / دستیابی یافتن|Met oefenen bereik je meer.|bereik|bereikt|bereikte|bereikten|bereikt|hebben
Keuzes|verb|besluiten|to decide|تصمیم گرفتن|We besluiten thuis te blijven.|besluit|besluit|besloot|besloten|besloten|hebben
Communicatie|verb|begrijpen|to understand|فهمیدن|Ik begrijp de uitleg nu.|begrijp|begrijpt|begreep|begrepen|begrepen|hebben
Communicatie|verb|beschrijven|to describe|توصیف کردن|Beschrijf je werkervaring kort.|beschrijf|beschrijft|beschreef|beschreven|beschreven|hebben
Communicatie|verb|bespreken|to discuss|بحث کردن|We bespreken het plan morgen.|bespreek|bespreekt|besprak|bespraken|besproken|hebben
Studie|verb|deelnemen aan|to participate in|شرکت کردن در|Ik neem deel aan de cursus.|neem deel|neemt deel|nam deel|namen deel|deelgenomen|hebben
Studie|verb|ontdekken|to discover|کشف کردن|Tijdens de cursus ontdekte ik nieuwe woorden.|ontdek|ontdekt|ontdekte|ontdekten|ontdekt|hebben
Dagelijks leven|verb|gebeuren|to happen|اتفاق افتادن|Wat is er gisteren gebeurd?|gebeur|gebeurt|gebeurde|gebeurden|gebeurd|zijn
Keuzes|verb|kiezen|to choose|انتخاب کردن|Ik kies de opleiding die bij mij past.|kies|kiest|koos|kozen|gekozen|hebben
Communicatie|verb|klagen|to complain|شکایت کردن|De klant klaagt over de service.|klaag|klaagt|klaagde|klaagden|geklaagd|hebben
Dagelijks leven|verb|lukken|to succeed / work out|موفق شدن|Het lukt mij om op tijd te komen.|luk|lukt|lukte|lukten|gelukt|zijn
Dagelijks leven|verb|meenemen|to take along|همراه بردن|Ik neem mijn boek mee.|neem mee|neemt mee|nam mee|namen mee|meegenomen|hebben
Sociaal|verb|ontmoeten|to meet|ملاقات کردن|Ik ontmoette haar op school.|ontmoet|ontmoet|ontmoette|ontmoetten|ontmoet|hebben
Communicatie|verb|ontvangen|to receive|دریافت کردن|Ik ontvang morgen een antwoord.|ontvang|ontvangt|ontving|ontvingen|ontvangen|hebben
Problemen|verb|oplossen|to solve|حل کردن|Samen lossen we het probleem op.|los op|lost op|loste op|losten op|opgelost|hebben
Werk|verb|overleggen|to consult / discuss|مشورت کردن|Ik overleg eerst met mijn collega.|overleg|overlegt|overlegde|overlegden|overlegd|hebben
Studie|verb|proberen|to try|تلاش کردن|Ik probeer elke dag Nederlands te spreken.|probeer|probeert|probeerde|probeerden|geprobeerd|hebben
Werk|verb|regelen|to arrange|ترتیب دادن|Kun jij de afspraak regelen?|regel|regelt|regelde|regelden|geregeld|hebben
Studie|verb|slagen|to pass / succeed|قبول شدن|Zij is voor het examen geslaagd.|slaag|slaagt|slaagde|slaagden|geslaagd|zijn
Werk|verb|solliciteren|to apply for a job|درخواست کار دادن|Hij solliciteert naar een nieuwe baan.|solliciteer|solliciteert|solliciteerde|solliciteerden|gesolliciteerd|hebben
Studie|verb|verbeteren|to improve|بهبود دادن|Ik wil mijn uitspraak verbeteren.|verbeter|verbetert|verbeterde|verbeterden|verbeterd|hebben
Keuzes|verb|vergelijken|to compare|مقایسه کردن|We vergelijken de twee mogelijkheden.|vergelijk|vergelijkt|vergeleek|vergeleken|vergeleken|hebben
Dagelijks leven|verb|vergeten|to forget|فراموش کردن|Ik ben mijn afspraak vergeten.|vergeet|vergeet|vergat|vergaten|vergeten|zijn
Studie|verb|voorbereiden|to prepare|آماده کردن|Ik bereid mij op het gesprek voor.|bereid voor|bereidt voor|bereidde voor|bereidden voor|voorbereid|hebben
Communicatie|verb|voorstellen|to propose / introduce|پیشنهاد دادن / معرفی کردن|Ik stel een andere datum voor.|stel voor|stelt voor|stelde voor|stelden voor|voorgesteld|hebben
Dagelijks leven|noun|de afspraak|appointment / agreement|قرار / توافق|Ik heb morgen een afspraak bij de tandarts.|de afspraken
Werk|noun|de aanvraag|application / request|درخواست|De aanvraag is gisteren verstuurd.|de aanvragen
Werk|noun|het aanbod|offer / supply|پیشنهاد / عرضه|Ik heb het aanbod geaccepteerd.|de aanbiedingen
Communicatie|noun|het advies|advice|توصیه|Bedankt voor je goede advies.|de adviezen
Werk|noun|het bedrijf|company|شرکت|Zij werkt bij een internationaal bedrijf.|de bedrijven
Werk|noun|het beroep|profession|شغل|Leraar is een belangrijk beroep.|de beroepen
Keuzes|noun|de beslissing|decision|تصمیم|Dat was geen gemakkelijke beslissing.|de beslissingen
Dagelijks leven|noun|de buurt|neighbourhood|محله|Wij wonen in een rustige buurt.|de buurten
Werk|noun|de ervaring|experience|تجربه|Deze baan geeft mij praktische ervaring.|de ervaringen
Studie|noun|de fout|mistake|اشتباه|Van elke fout kun je leren.|de fouten
Dagelijks leven|noun|de gewoonte|habit|عادت|Lezen voor het slapen is een goede gewoonte.|de gewoonten
Communicatie|noun|het gesprek|conversation / interview|گفتگو / مصاحبه|Het gesprek duurde een halfuur.|de gesprekken
Gezondheid|noun|de gezondheid|health|سلامتی|Bewegen is goed voor je gezondheid.|—
Werk|noun|de kans|chance / opportunity|فرصت / احتمال|Dit is een goede kans om te leren.|de kansen
Communicatie|noun|de klacht|complaint|شکایت|De winkel heeft mijn klacht behandeld.|de klachten
Communicatie|noun|de mening|opinion|نظر|Wat is jouw mening hierover?|de meningen
Dagelijks leven|noun|de omgeving|environment / surroundings|محیط|De school staat in een groene omgeving.|de omgevingen
Studie|noun|de opleiding|study programme / training|دوره آموزشی / تحصیلات|Ik volg een opleiding aan de universiteit.|de opleidingen
Problemen|noun|de oplossing|solution|راه‌حل|We zoeken samen naar een oplossing.|de oplossingen
Studie|noun|het onderzoek|research / investigation|پژوهش / بررسی|Het onderzoek duurt zes maanden.|de onderzoeken
Problemen|noun|de oorzaak|cause|علت|De oorzaak van het probleem is nog onbekend.|de oorzaken
Studie|noun|het resultaat|result|نتیجه|Ik ben tevreden met het resultaat.|de resultaten
Maatschappij|noun|de samenleving|society|جامعه|Onderwijs is belangrijk voor de samenleving.|de samenlevingen
Vergelijken|noun|het verschil|difference|تفاوت|Het verschil is duidelijk zichtbaar.|de verschillen
Keuzes|noun|het voordeel|advantage|مزیت|Een voordeel van fietsen is de beweging.|de voordelen
Communicatie|noun|het voorbeeld|example|مثال|Kun je een voorbeeld geven?|de voorbeelden
Werk|noun|de voorwaarde|condition / requirement|شرط|Ervaring is een belangrijke voorwaarde.|de voorwaarden
Werk|noun|de werknemer|employee|کارمند|De werknemer bespreekt het contract.|de werknemers
Werk|noun|de werkgever|employer|کارفرما|De werkgever biedt een cursus aan.|de werkgevers
Gezondheid|noun|de zorg|care / concern|مراقبت / نگرانی|Goede zorg moet voor iedereen bereikbaar zijn.|—
Beschrijving|adjective|afhankelijk|dependent|وابسته|Het resultaat is afhankelijk van de voorbereiding.
Dagelijks leven|adjective|beschikbaar|available|در دسترس|De docent is morgen beschikbaar.
Beschrijving|adjective|bekend|known / familiar|شناخته‌شده / آشنا|Dit probleem is bij ons bekend.
Studie|adjective|belangrijk|important|مهم|Regelmatig oefenen is belangrijk.
Communicatie|adjective|duidelijk|clear|روشن / واضح|De instructie is duidelijk.
Communicatie|adjective|eerlijk|honest / fair|صادق / منصفانه|Geef alsjeblieft een eerlijk antwoord.
Werk|adjective|geschikt|suitable|مناسب|Deze functie is geschikt voor beginners.
Veiligheid|adjective|gevaarlijk|dangerous|خطرناک|Rijden zonder licht is gevaarlijk.
Vergelijken|adjective|gemiddeld|average|متوسط|De gemiddelde reistijd is dertig minuten.
Studie|adjective|ingewikkeld|complicated|پیچیده|Deze grammaticale regel is ingewikkeld.
Studie|adjective|noodzakelijk|necessary|ضروری|Een goede voorbereiding is noodzakelijk.
Dagelijks leven|adjective|normaal|normal|عادی|Het is normaal om fouten te maken.
Maatschappij|adjective|openbaar|public|عمومی|De bibliotheek is een openbare ruimte.
Persoonlijk|adjective|persoonlijk|personal|شخصی|Dat is mijn persoonlijke mening.
Communicatie|adjective|precies|exact / precise|دقیق|Ik weet niet precies wanneer hij komt.
Gevoelens|adjective|tevreden|satisfied|راضی|Ik ben tevreden met mijn vooruitgang.
Werk|adjective|verantwoordelijk|responsible|مسئول|Zij is verantwoordelijk voor het project.
Keuzes|adjective|waarschijnlijk|probable / probably|احتمالی / احتمالا|Hij komt waarschijnlijk later.
Werk|adjective|zelfstandig|independent|مستقل|Je moet zelfstandig kunnen werken.
Werk|adjective|zorgvuldig|careful / thorough|با دقت|Lees het formulier zorgvuldig.
Verband|other|daarom|therefore|بنابراین|Het regent; daarom neem ik de bus.
Verband|other|daardoor|as a result|در نتیجه|De trein had vertraging; daardoor kwam ik te laat.
Verband|other|hoewel|although|اگرچه|Hoewel het moeilijk was, ging ik door.
Tijd|other|inmiddels|meanwhile / by now|در این فاصله / تا حالا|Inmiddels woon ik al jaren in Nederland.
Tijd|other|uiteindelijk|eventually|در نهایت|Uiteindelijk vond hij een passende baan.
Toevoeging|other|bovendien|moreover / besides|علاوه بر این|De cursus is leerzaam en bovendien praktisch.
Communicatie|other|bijvoorbeeld|for example|برای مثال|Je kunt bijvoorbeeld elke dag tien woorden leren.
Gevoelens|other|helaas|unfortunately|متأسفانه|Helaas kan ik vandaag niet komen.
Tijd|other|meestal|usually|معمولاً|Ik fiets meestal naar mijn werk.
Keuzes|other|misschien|perhaps|شاید|Misschien kunnen we morgen afspreken.
Verband|other|ondanks|despite|با وجود|Ondanks de regen gingen we wandelen.
Hoeveelheid|other|ongeveer|approximately|تقریباً|De reis duurt ongeveer een uur.
Tijd|other|plotseling|suddenly|ناگهان|Plotseling begon het hard te regenen.
Tijd|other|regelmatig|regularly|به طور منظم|Ik oefen regelmatig met Nederlandse woorden.
Tijd|other|sinds|since|از زمانی که|Ik woon hier sinds 2018.
Verband|other|terwijl|while / whereas|در حالی که|Ik kook terwijl mijn zoon speelt.
Hoeveelheid|other|ten minste|at least|حداقل|Oefen ten minste tien minuten per dag.
Communicatie|other|volgens mij|in my opinion|به نظر من|Volgens mij is dit de beste oplossing.
Dagelijks leven|other|rekening houden met|to take into account|در نظر گرفتن|We moeten rekening houden met de reistijd.
Keuzes|other|in plaats van|instead of|به جای|Ik neem de fiets in plaats van de auto.
`);

const B2 = rows('B2', `
Onderzoek|verb|aantonen|to demonstrate|نشان دادن / اثبات کردن|De resultaten tonen een duidelijk verschil aan.|toon aan|toont aan|toonde aan|toonden aan|aangetoond|hebben
Denken|verb|aannemen|to assume / accept|فرض کردن / پذیرفتن|We nemen aan dat de gegevens juist zijn.|neem aan|neemt aan|nam aan|namen aan|aangenomen|hebben
Communicatie|verb|beweren|to claim|ادعا کردن|Hij beweert dat de methode betrouwbaar is.|beweer|beweert|beweerde|beweerden|beweerd|hebben
Maatschappij|verb|bijdragen aan|to contribute to|کمک کردن به|Onderwijs draagt bij aan gelijke kansen.|draag bij|draagt bij|droeg bij|droegen bij|bijgedragen|hebben
Communicatie|verb|benadrukken|to emphasize|تأکید کردن|De docent benadrukt het belang van oefenen.|benadruk|benadrukt|benadrukte|benadrukten|benadrukt|hebben
Werk|verb|beoordelen|to assess / evaluate|ارزیابی کردن|De commissie beoordeelt alle aanvragen.|beoordeel|beoordeelt|beoordeelde|beoordeelden|beoordeeld|hebben
Mogelijkheden|verb|beschikken over|to have at one's disposal|در اختیار داشتن|De school beschikt over moderne lokalen.|beschik|beschikt|beschikte|beschikten|beschikt|hebben
Verband|verb|beïnvloeden|to influence|تأثیر گذاشتن|Slaap beïnvloedt je concentratie.|beïnvloed|beïnvloedt|beïnvloedde|beïnvloedden|beïnvloed|hebben
Onderzoek|verb|concluderen|to conclude|نتیجه‌گیری کردن|We concluderen dat de aanpak werkt.|concludeer|concludeert|concludeerde|concludeerden|geconcludeerd|hebben
Onderzoek|verb|constateren|to observe / establish|مشاهده / مشخص کردن|De onderzoekers constateren een verbetering.|constateer|constateert|constateerde|constateerden|geconstateerd|hebben
Werk|verb|eisen|to demand / require|الزام کردن / مطالبه کردن|De functie eist goede communicatievaardigheden.|eis|eist|eiste|eisten|geëist|hebben
Communicatie|verb|erkennen|to acknowledge / recognize|به رسمیت شناختن|De organisatie erkent het probleem.|erken|erkent|erkende|erkenden|erkend|hebben
Zekerheid|verb|garanderen|to guarantee|تضمین کردن|Ervaring garandeert niet altijd succes.|garandeer|garandeert|garandeerde|garandeerden|gegarandeerd|hebben
Onderzoek|verb|interpreteren|to interpret|تفسیر کردن|We moeten de resultaten voorzichtig interpreteren.|interpreteer|interpreteert|interpreteerde|interpreteerden|geïnterpreteerd|hebben
Communicatie|verb|onderbouwen|to substantiate|با دلیل پشتیبانی کردن|Onderbouw je mening met een voorbeeld.|onderbouw|onderbouwt|onderbouwde|onderbouwden|onderbouwd|hebben
Vergelijken|verb|onderscheiden|to distinguish|تمایز قائل شدن|Je moet feiten en meningen onderscheiden.|onderscheid|onderscheidt|onderscheidde|onderscheidden|onderscheiden|hebben
Communicatie|verb|overtuigen|to convince|متقاعد کردن|De resultaten overtuigen de commissie.|overtuig|overtuigt|overtuigde|overtuigden|overtuigd|hebben
Gebeurtenissen|verb|plaatsvinden|to take place|برگزار / رخ دادن|De bijeenkomst vindt online plaats.|vind plaats|vindt plaats|vond plaats|vonden plaats|plaatsgevonden|hebben
Communicatie|verb|reageren op|to respond to|واکنش نشان دادن به|Zij reageert rustig op de kritiek.|reageer|reageert|reageerde|reageerden|gereageerd|hebben
Doelen|verb|realiseren|to realize / achieve|محقق کردن|Het team realiseert zijn belangrijkste doel.|realiseer|realiseert|realiseerde|realiseerden|gerealiseerd|hebben
Communicatie|verb|samenvatten|to summarize|خلاصه کردن|Vat de hoofdpunten kort samen.|vat samen|vat samen|vatte samen|vatten samen|samengevat|hebben
Onderzoek|verb|schatten|to estimate|برآورد کردن|We schatten de kosten op duizend euro.|schat|schat|schatte|schatten|geschat|hebben
Ontwikkeling|verb|stimuleren|to stimulate / encourage|تشویق کردن|De docent stimuleert zelfstandig leren.|stimuleer|stimuleert|stimuleerde|stimuleerden|gestimuleerd|hebben
Praktijk|verb|toepassen|to apply|به کار بردن|Studenten passen de theorie in de praktijk toe.|pas toe|past toe|paste toe|pasten toe|toegepast|hebben
Denken|verb|uitgaan van|to assume / start from|بر اساس چیزی فرض کردن|We gaan uit van de beschikbare gegevens.|ga uit|gaat uit|ging uit|gingen uit|uitgegaan|zijn
Werk|verb|uitvoeren|to carry out|اجرا کردن|Het team voert het onderzoek uit.|voer uit|voert uit|voerde uit|voerden uit|uitgevoerd|hebben
Communicatie|verb|verklaren|to explain / declare|توضیح دادن / اعلام کردن|Deze factor verklaart een deel van het verschil.|verklaar|verklaart|verklaarde|verklaarden|verklaard|hebben
Problemen|verb|voorkomen|to prevent|جلوگیری کردن|Een goede planning voorkomt vertraging.|voorkom|voorkomt|voorkwam|voorkwamen|voorkomen|hebben
Communicatie|verb|verwijzen naar|to refer to|ارجاع دادن به|De auteur verwijst naar eerder onderzoek.|verwijs|verwijst|verwees|verwezen|verwezen|hebben
Onderzoek|verb|weergeven|to represent / display|نمایش دادن|De grafiek geeft de resultaten weer.|geef weer|geeft weer|gaf weer|gaven weer|weergegeven|hebben
Reden|noun|de aanleiding|reason / occasion|دلیل / انگیزه|Het gesprek was de aanleiding voor verandering.|de aanleidingen
Werk|noun|de aanpak|approach|رویکرد|Deze aanpak bespaart veel tijd.|de aanpakken
Communicatie|noun|het argument|argument|استدلال|Zijn belangrijkste argument is overtuigend.|de argumenten
Maatschappij|noun|het beleid|policy|سیاست / خط‌مشی|De gemeente verandert haar beleid.|—
Maatschappij|noun|de bijdrage|contribution|مشارکت|Iedere deelnemer levert een bijdrage.|de bijdragen
Onderzoek|noun|de conclusie|conclusion|نتیجه‌گیری|De conclusie volgt uit de resultaten.|de conclusies
Maatschappij|noun|het conflict|conflict|تعارض|Het conflict werd rustig opgelost.|de conflicten
Verband|noun|het gevolg|consequence|پیامد|Stress kan een gevolg van werkdruk zijn.|de gevolgen
Gedrag|noun|de houding|attitude / posture|نگرش / وضعیت بدن|Een open houding helpt bij samenwerking.|de houdingen
Studie|noun|het inzicht|insight|بینش|Het onderzoek geeft nieuw inzicht.|de inzichten
Maatschappij|noun|de maatregel|measure|اقدام|De maatregel moet de veiligheid verbeteren.|de maatregelen
Ontwikkeling|noun|de ontwikkeling|development|توسعه|De technologische ontwikkeling gaat snel.|de ontwikkelingen
Denken|noun|de overtuiging|conviction / belief|باور|Die overtuiging is moeilijk te veranderen.|de overtuigingen
Denken|noun|het perspectief|perspective|دیدگاه|Bekijk het probleem vanuit een ander perspectief.|de perspectieven
Werk|noun|de prestatie|performance / achievement|عملکرد / دستاورد|Het team leverde een goede prestatie.|de prestaties
Werk|noun|het proces|process|فرایند|Het proces bestaat uit drie stappen.|de processen
Verband|noun|de verhouding|relationship / ratio|نسبت / رابطه|De verhouding tussen kosten en opbrengsten is gunstig.|de verhoudingen
Werk|noun|de verantwoordelijkheid|responsibility|مسئولیت|De manager draagt de eindverantwoordelijkheid.|de verantwoordelijkheden
Onderzoek|noun|het verschijnsel|phenomenon|پدیده|De onderzoekers bestuderen dit verschijnsel.|de verschijnselen
Toekomst|noun|de verwachting|expectation|انتظار|De resultaten waren beter dan de verwachting.|de verwachtingen
Maatschappij|noun|het vooroordeel|prejudice|پیش‌داوری|Persoonlijk contact kan een vooroordeel verminderen.|de vooroordelen
Communicatie|noun|het voorstel|proposal|پیشنهاد|De raad bespreekt het voorstel.|de voorstellen
Problemen|noun|het vraagstuk|issue / problem|مسئله|Dit maatschappelijke vraagstuk is complex.|de vraagstukken
Onderzoek|noun|de waarschijnlijkheid|probability|احتمال|De waarschijnlijkheid van succes is groot.|de waarschijnlijkheden
Verandering|noun|de weerstand|resistance|مقاومت|De verandering veroorzaakte weerstand.|—
Gezondheid|noun|het welzijn|well-being|رفاه / بهزیستی|Werkdruk kan het welzijn beïnvloeden.|—
Maatschappij|noun|de wetgeving|legislation|قانون‌گذاری|De wetgeving wordt volgend jaar aangepast.|—
Onderzoek|noun|het bewijs|evidence / proof|مدرک / شواهد|Er is onvoldoende bewijs voor die bewering.|de bewijzen
Grenzen|noun|de beperking|limitation / restriction|محدودیت|De kleine steekproef is een beperking.|de beperkingen
Verband|noun|de samenhang|relationship / coherence|ارتباط / انسجام|Er is samenhang tussen de twee factoren.|—
Hoeveelheid|adjective|aanzienlijk|considerable|قابل توجه|De kosten zijn aanzienlijk gestegen.
Beschrijving|adjective|aantrekkelijk|attractive|جذاب|De organisatie biedt aantrekkelijke voorwaarden.
Denken|adjective|bewust|conscious / aware|آگاه|Zij is zich bewust van het risico.
Maatschappij|adjective|duurzaam|sustainable|پایدار|We zoeken naar een duurzame oplossing.
Onderzoek|adjective|effectief|effective|موثر|Deze methode blijkt effectief te zijn.
Belang|adjective|essentieel|essential|ضروری / اساسی|Goede communicatie is essentieel.
Communicatie|adjective|geloofwaardig|credible|قابل اعتماد|Zijn verklaring klinkt geloofwaardig.
Onderzoek|adjective|grondig|thorough|جامع / دقیق|Het probleem vraagt om een grondige analyse.
Mogelijkheden|adjective|haalbaar|feasible|شدنی|Het plan is financieel haalbaar.
Beschrijving|adjective|kenmerkend|characteristic|مشخصه|De open structuur is kenmerkend voor het ontwerp.
Denken|adjective|kritisch|critical|انتقادی|Studenten moeten kritisch leren denken.
Maatschappij|adjective|maatschappelijk|social / societal|اجتماعی|Het onderwerp heeft grote maatschappelijke betekenis.
Beschrijving|adjective|opmerkelijk|remarkable|قابل توجه|Het verschil tussen de groepen is opmerkelijk.
Communicatie|adjective|overtuigend|convincing|قانع‌کننده|Zij gaf een overtuigend antwoord.
Studie|adjective|relevant|relevant|مرتبط|Gebruik alleen relevante informatie.
Verband|adjective|tegenstrijdig|contradictory|متناقض|De twee onderzoeken geven tegenstrijdige resultaten.
Hoeveelheid|adjective|uitgebreid|extensive|گسترده|Het rapport bevat een uitgebreide beschrijving.
Tijd|adjective|voorlopig|provisional / temporary|موقت / فعلاً|Dit is een voorlopige conclusie.
Verband|adjective|wederzijds|mutual|متقابل|Een goede samenwerking vraagt wederzijds vertrouwen.
Nut|adjective|zinvol|meaningful / useful|معنادار / مفید|Regelmatig herhalen is een zinvolle strategie.
Reden|other|aangezien|since / because|از آنجا که|Aangezien het regent, blijven we binnen.
Vergelijken|other|anderzijds|on the other hand|از سوی دیگر|Anderzijds biedt de verandering nieuwe kansen.
Verband|other|desalniettemin|nevertheless|با این وجود|Het was moeilijk; desalniettemin ging zij door.
Vergelijken|other|enerzijds|on the one hand|از یک سو|Enerzijds bespaart de methode tijd.
Tegenstelling|other|echter|however|با این حال|De resultaten zijn echter niet zeker.
Tegenstelling|other|integendeel|on the contrary|برعکس|Het werk werd niet eenvoudiger; integendeel.
Onderwerp|other|met betrekking tot|with regard to|در رابطه با|Er zijn nieuwe regels met betrekking tot privacy.
Reden|other|naar aanleiding van|as a result of / in response to|در پی / به مناسبت|Naar aanleiding van het gesprek is het plan aangepast.
Verband|other|naarmate|as / in proportion as|هرچه / به تناسب|Naarmate je meer oefent, spreek je gemakkelijker.
Tegenstelling|other|niettemin|nevertheless|با این حال|De kans was klein; niettemin probeerde hij het.
Tegenstelling|other|ondanks het feit dat|despite the fact that|با وجود اینکه|Ondanks het feit dat hij ziek was, werkte hij door.
Basis|other|op basis van|on the basis of|بر اساس|De conclusie is op basis van de gegevens getrokken.
Onderwerp|other|op het gebied van|in the field of|در زمینه|Zij heeft ervaring op het gebied van onderwijs.
Toevoeging|other|tevens|also / furthermore|همچنین|Het gebouw is tevens een ontmoetingsplek.
Voorwaarde|other|tenzij|unless|مگر اینکه|Ik kom morgen, tenzij ik ziek ben.
Grenzen|other|voor zover|as far as / insofar as|تا آنجا که|Voor zover ik weet, begint de cursus maandag.
Volgorde|other|vervolgens|subsequently / next|سپس|Vervolgens worden de resultaten besproken.
Onderwerp|other|wat betreft|as regards|در مورد|Wat betreft de kosten is nog niets besloten.
Gevolg|other|zodoende|thus / in this way|بدین ترتیب|Hij oefende dagelijks en verbeterde zodoende snel.
Vergelijken|other|zowel ... als|both ... and|هم ... و هم|De cursus behandelt zowel spreken als schrijven.
`);

const STARTER_VOCABULARY = [...B1, ...B2];
