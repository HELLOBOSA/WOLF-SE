(function(){
  'use strict';

  var activeLang=localStorage.getItem('wb-se-lang')||'sv';
  document.documentElement.lang=activeLang;

  var avatar=document.querySelector('.byline-avatar');
  if(avatar){
    var mark=document.createElement('img');
    mark.src='../../images/210 sq_white-02.webp';
    mark.alt='Wolfblanc Architects';
    mark.width=34;
    mark.height=34;
    avatar.appendChild(mark);
  }

  var slug=location.pathname.split('/').filter(Boolean).pop()||'';
  var additions={
    'att-lasa-en-fastighet-innan-du-binder-kapital':[
      'Sex kontroller före ett förvärvsbeslut','Six checks before an acquisition decision',
      'Kontrollera först vilken rättslig och fysisk enhet som faktiskt köps: fastighet, bostadsrätt, lokal eller bolag. Ägandeformen styr vilka handlingar som finns, vem som beslutar om förändringar och vilka kostnader som kan ligga utanför den egna lokalen eller bostaden.','First clarify the legal and physical asset being acquired: property, cooperative apartment, premises or company. The ownership structure determines which documents exist, who decides on changes and which costs may sit outside the individual unit or space.',
      'Jämför sedan kommunens arkiv, föreningens underlag och verkligheten på plats. Planritningar kan vara gamla, ombyggnader kan sakna dokumentation och areauppgifter kan bygga på olika mätregler. Avvikelser är inte automatiskt ett stopp, men de behöver prissättas och utredas.','Then compare municipal archives, association documents and the conditions on site. Plans may be outdated, alterations may lack documentation and area figures may use different measurement rules. Discrepancies are not automatically a reason to stop, but they need investigation and a cost allowance.',
      'Bedöm klimatskärm och installationer i rätt skala. En arkitekt kan identifiera rumsliga och byggnadstekniska varningssignaler, men specialistbesiktning kan behövas för exempelvis fukt, el, VVS, ventilation, miljöinventering eller konstruktion. Rätt kompetens kopplas in där konsekvensen av ett fel är stor.','Assess the envelope and services at the right level. An architect can identify spatial and building-related warning signs, while specialist surveys may be required for moisture, electrical work, plumbing, ventilation, hazardous materials or structure. The right expertise is added where the consequence of error is high.',
      'Pröva planlösningens potential mot bärande delar, stammar, dagsljus, brand, tillgänglighet och föreningens eller fastighetsägarens regler. En attraktiv skiss är inte ett beslutsunderlag förrän de avgörande beroendena är synliga och det framgår vilka antaganden som fortfarande måste verifieras.','Test layout potential against structure, risers, daylight, fire, accessibility and the rules of the association or property owner. An attractive sketch is not a decision basis until critical dependencies are visible and the assumptions still requiring verification are clearly stated.',
      'Gör minst två investeringsscenarier och ett nollalternativ. Nollalternativet visar kostnaden för att behålla och underhålla. De andra kan jämföra en begränsad förbättring med en större ombyggnad. Koppla varje scenario till tid, lovrisk, evakuering, tekniska beroenden och en rimlig reserv.','Prepare at least two investment scenarios and a do-minimum option. The do-minimum case shows the cost of retaining and maintaining. Other cases can compare a focused improvement with a larger transformation. Link each scenario to time, permit risk, decanting, technical dependencies and a reasonable contingency.',
      'Avsluta med tydliga beslutspunkter: vad som är känt, vad som behöver kontrolleras före kontrakt och vad som kan vänta till projektering. Ett bra underlag säger också när möjligheten inte motiverar risken. Att avstå från fel objekt är lika värdefullt som att hitta potentialen i rätt.','Finish with clear decision points: what is known, what must be checked before signing and what can wait until design. A useful review also says when the opportunity does not justify the risk. Walking away from the wrong asset is as valuable as identifying the potential in the right one.'
    ],
    'renovera-villa-stockholm':[
      'Från förstudie till byggstart','From feasibility to construction',
      'Mät upp huset och samla originalritningar, tidigare lov, energidata och kända skador innan nya lösningar ritas. Förstudien bör skilja mellan måste, bör och kan. Då kan budgeten skyddas när oväntade förhållanden upptäcks.','Measure the house and collect original drawings, previous permits, energy data and known defects before drawing new solutions. The feasibility study should separate must-have, should-have and optional work. This protects the budget when unexpected conditions are found.',
      'Inför upphandling behöver entreprenörerna samma ritningar, rumsbeskrivning och gränsdragning. Jämför inte bara slutsumman. Kontrollera antaganden, undantag, tidplan, ansvar för installationer och hur ändringar prissätts. Ett tydligt underlag gör anbuden jämförbara.','For procurement, contractors need the same drawings, room description and scope boundaries. Compare more than the final price. Check assumptions, exclusions, programme, responsibility for services and how changes are priced. Clear documents make tenders comparable.'
    ],
    'tillbyggnad-stockholm-guide':[
      'Kopplingen till det befintliga huset','Connecting to the existing house',
      'En bra tillbyggnad löser nivåskillnader, dagsljus, rörelse och installationer tillsammans. Studera var den gamla klimatskärmen öppnas, hur takavvattningen fungerar och om befintlig stomme kan belastas. Det är ofta i mötet mellan gammalt och nytt som risk och kvalitet avgörs.','A good extension resolves levels, daylight, movement and services together. Study where the old envelope is opened, how roof drainage works and whether the existing structure can take new loads. The meeting between old and new often determines both risk and quality.',
      'Rita möblering tidigt. Extra kvadratmeter skapar inte automatiskt bättre rum. En mindre volym med rätt siktlinjer, förvaring och kontakt med trädgården kan ge större vardagsnytta än en maximal utbyggnad som lämnar mörka restytor i det befintliga huset.','Draw furniture layouts early. Extra area does not automatically create better rooms. A smaller volume with the right views, storage and garden connection may provide more daily value than a maximum extension that leaves dark residual spaces in the old house.'
    ],
    'kostnad-arkitekt-stockholm':[
      'Så jämför du arkitektofferter','How to compare architects’ proposals',
      'Be varje arkitekt beskriva leveranser per skede: antal möten, ritningar, visualiseringar, myndighetskontakt, konsultsamordning och revideringar. Ett lägre arvode kan bygga på ett smalare uppdrag. Jämför därför omfattning och ansvar innan du jämför pris.','Ask each architect to describe deliverables by stage: meetings, drawings, visualisations, authority contact, consultant coordination and revisions. A lower fee may reflect a narrower scope. Compare scope and responsibility before comparing price.',
      'Bestäm också hur beslut dokumenteras och hur tillägg beställs. Fast arvode ger trygghet när uppgiften är tydlig. Löpande arvode passar bättre när flera alternativ behöver prövas. En kombination, med fast pris för definierade skeden och timpris för tillägg, är ofta transparent.','Also decide how decisions are recorded and additional work is authorised. A fixed fee provides certainty when the task is clear. Hourly fees suit work where several options must be tested. A combination of fixed stages and hourly additions is often transparent.'
    ],
    'arkitektritat-kok-badrum-stockholm':[
      'Samordning i bostadsrätt','Coordination in a housing cooperative',
      'Kontrollera föreningens stadgar och tekniska anvisningar innan planlösningen låses. Flytt av kök eller badrum påverkar ofta avlopp, ventilation, tätskikt, brand och ljud. Styrelsens godkännande ersätter inte kommunens krav på anmälan eller startbesked när sådana krav gäller.','Check the association’s statutes and technical guidance before fixing the layout. Moving kitchens or bathrooms often affects drainage, ventilation, waterproofing, fire and acoustics. Board approval does not replace municipal notification or a start notice where these are required.',
      'En användbar bygghandling anger mått, materialövergångar, fall, belysning, el, VVS och fast inredning. Den ska minska behovet av improvisation på byggplatsen. Provbitar och en enkel materialförteckning hjälper beställare, arkitekt och entreprenör att fatta samma beslut.','Useful construction documents define dimensions, material junctions, falls, lighting, electrical work, plumbing and fitted furniture. They should reduce improvisation on site. Samples and a simple material schedule help the client, architect and contractor make the same decisions.'
    ],
    'fritidshus-skargard-stockholm':[
      'Platsanalys och bygglogistik','Site analysis and construction logistics',
      'Studera sol, vind, berg, vegetation, utsikt och insyn under flera tider på dagen. Placeringen bör ge lä utan att skapa onödiga markarbeten. En lågmäld volym som följer terrängen kan minska sprängning, synlighet och påverkan på naturen.','Study sun, wind, rock, vegetation, views and privacy at different times of day. Placement should provide shelter without unnecessary groundworks. A restrained volume following the terrain can reduce blasting, visibility and impact on nature.',
      'Transporter kan styra ekonomi och genomförande lika mycket som ritningen. Kartlägg vägstandard, båttransport, lyft, upplag, vatten, avlopp och el innan system väljs. Prefabricering kan vara klokt på en svår tomt, men modulerna måste dimensioneras efter den faktiska transportkedjan.','Transport can shape cost and delivery as much as the design. Map road standards, boat transport, lifting, storage, water, drainage and electricity before choosing systems. Prefabrication may suit a difficult site, but modules must be designed for the actual transport chain.'
    ],
    'hallbar-arkitektur-stockholm':[
      'Prioritera rätt åtgärd','Prioritise the right measure',
      'Börja med behovet: kan den befintliga byggnaden användas, byggas om eller kompletteras innan ny yta skapas? Därefter kommer enkel geometri, robust klimatskärm, rätt orientering och installationer som går att underhålla. Materialval ger störst effekt när den grundläggande designen redan är resurssnål.','Start with the need: can the existing building be used, adapted or extended before new area is created? Then address simple geometry, a robust envelope, orientation and maintainable services. Material choices have the greatest effect when the underlying design is already resource-efficient.',
      'Sätt mätbara mål i programskedet och följ dem genom projekteringen. Energi, klimatpåverkan, dagsljus, luft, akustik, flexibilitet och demonterbarhet behöver ansvariga personer och tydliga verifieringsmetoder. Certifiering kan ge struktur, men ersätter inte projektspecifika prioriteringar.','Set measurable targets during briefing and follow them through design. Energy, embodied carbon, daylight, air, acoustics, flexibility and disassembly need named owners and clear verification methods. Certification can provide structure, but it does not replace project-specific priorities.'
    ],
    'sekelskifte-planlosning-stockholm':[
      'Undersök innan du river','Investigate before demolition',
      'Ta reda på vilka väggar som är bärande, var stammar och ventilation ligger och vilka ändringar föreningen godkänner. Äldre ritningar kan avvika från verkligheten, så kritiska mått och konstruktioner ska verifieras på plats. En liten provöppning kan ibland ersätta dyra antaganden.','Identify load-bearing walls, service risers, ventilation and the changes accepted by the association. Old drawings may differ from reality, so critical dimensions and structures should be verified on site. A small investigative opening can sometimes replace expensive assumptions.',
      'Nya delar behöver inte imitera de gamla. En lugn detaljering, rätt proportion och ett begränsat materialregister kan låta originalet vara huvudperson. Dokumentera det som demonteras och återanvänd dörrar, beslag, socklar och golv där det är tekniskt möjligt.','New elements do not need to imitate the old. Calm detailing, correct proportions and a limited material palette can let the original fabric remain central. Document what is removed and reuse doors, hardware, skirtings and floors where technically possible.'
    ],
    'inredning-liten-lagenhet-stockholm':[
      'Mät vardagen, inte bara rummet','Measure daily life, not only the room',
      'Lista aktiviteter, föremål och återkommande konflikter innan möbler köps. Var ska ytterkläder torka, dammsugaren stå och en gäst sova? När funktionerna får mått kan samma yta arbeta flera gånger under dagen utan att kännas överlastad.','List activities, possessions and recurring conflicts before buying furniture. Where will wet coats dry, the vacuum stand and a guest sleep? Once functions are dimensioned, the same area can work several times during the day without feeling overloaded.',
      'Prioritera fria siktlinjer och sammanhängande golvyta. Förvaring till tak kan vara effektiv, men varje vägg behöver inte fyllas. En tom väggyta, en låg möbel och konsekvent belysning kan skapa mer upplevd rymd än ännu ett skåp.','Prioritise clear sightlines and continuous floor area. Full-height storage can be efficient, but every wall need not be filled. An empty wall, a low piece of furniture and consistent lighting can create more perceived space than another cabinet.'
    ]
  };

  var depth={
    'arkitektritat-kok-badrum-stockholm':[
      'Beslut som måste tas före byggstart','Decisions to make before construction',
      'I en Stockholmslägenhet behöver arkitekt, förening och entreprenör vara överens om våtrumszoner, avloppsdragning, ventilation, el och eventuella ingrepp i bärande delar. Vi börjar därför med uppmätning och tekniska förutsättningar innan luckor, sten och armaturer väljs. Det minskar sena kompromisser och gör styrelsens granskning enklare.','In a Stockholm apartment, architect, housing association and contractor need agreement on wet zones, drainage, ventilation, electrical work and any structural intervention. We therefore begin with measured information and technical constraints before selecting fronts, stone and fittings. This reduces late compromises and makes the board’s review easier.',
      'Budgeten blir mer träffsäker när ritningarna visar mått, materialmöten, fast inredning och ansvar mellan yrkesgrupper. Be om jämförbara anbud med samma omfattning och en tydlig reserv för sådant som först syns när befintliga ytskikt öppnas. Ett vackert kök eller badrum är också ett samordningsprojekt.','The budget becomes more reliable when drawings define dimensions, material junctions, fitted elements and responsibilities between trades. Ask for comparable tenders based on the same scope and retain a contingency for conditions only revealed when existing finishes are opened. A beautiful kitchen or bathroom is also a coordination project.'
    ],
    'atmosfar-som-affarsstrategi':[
      'Från känsla till operativt koncept','From atmosphere to operating concept',
      'Atmosfär börjar med verksamheten: vilka gäster som kommer, hur länge de stannar, vilka tider som är intensiva och hur personalen rör sig. Ljus, akustik, temperatur, material och doft behöver stödja samma idé. När de behandlas separat blir resultatet ofta dekorativt men svårt att driva.','Atmosphere begins with the operation: who the guests are, how long they stay, when demand peaks and how staff move. Light, acoustics, temperature, materials and scent need to support the same idea. When treated separately, the result is often decorative but difficult to operate.',
      'Vi testar därför både gästresa och arbetsflöde i plan. Antal sittplatser, serveringsvägar, köbildning, städning och underhåll påverkar lönsamheten lika mycket som den visuella identiteten. Den starkaste hospitalitymiljön känns självklar för gästen eftersom de praktiska besluten redan är lösta i arkitekturen.','We test both guest journey and staff workflow in plan. Seat count, service routes, queues, cleaning and maintenance affect profitability as much as visual identity. The strongest hospitality environment feels effortless to the guest because practical decisions have already been resolved through the architecture.'
    ],
    'att-bygga-vidare-pa-minne':[
      'En metod för nytt i historisk miljö','A method for building within history',
      'Arbetet börjar med att skilja mellan det som bär platsens identitet och det som har förändrats utan större värde. Arkivmaterial, uppmätning, materialanalys och dialog med antikvarisk kompetens ger en hierarki. Då kan nya ingrepp placeras där de gör minst skada och mest nytta.','The work begins by distinguishing what carries the identity of a place from later changes of limited value. Archives, measured surveys, material analysis and dialogue with heritage expertise create a hierarchy. New interventions can then be placed where they cause least harm and offer most benefit.',
      'Det nya behöver vara läsbart utan att konkurrera. Proportion, skala, rytm och materialens åldrande är viktigare än att imitera historiska detaljer. I Stockholms kulturmiljöer bör också lovplikt, varsamhetskrav och dokumentation klarläggas tidigt så att gestaltningsidén kan överleva myndighetsprocess och byggande.','The new should be legible without competing. Proportion, scale, rhythm and how materials age matter more than imitating historic details. In Stockholms heritage environments, permit requirements, conservation duties and documentation should also be clarified early so the design idea can survive approvals and construction.'
    ],
    'att-lasa-en-fastighet-innan-du-binder-kapital':[
      'Ett beslutsunderlag, inte en snabb visning','A decision basis, not a quick viewing',
      'En arkitektonisk förvärvsanalys kompletterar den ekonomiska kalkylen med planförutsättningar, bärande struktur, installationer, dagsljus, tillgänglighet och möjlig omdisponering. Vi skiljer på säkra förutsättningar, sådant som behöver verifieras och möjligheter som kräver lov eller föreningsbeslut. Det gör riskerna synliga innan bud eller kontrakt.','An architectural acquisition review complements the financial model with planning conditions, structure, services, daylight, accessibility and potential reconfiguration. We separate confirmed conditions, matters requiring verification and opportunities dependent on permits or association approval. This makes risk visible before bidding or signing.',
      'Nästa steg är scenarier: behålla och förbättra, bygga om i etapper eller genomföra en större transformation. Varje scenario kopplas till ungefärlig tid, beroenden och investeringsnivå. Syftet är inte att lova en exakt byggkostnad före projektering, utan att visa vilket alternativ som förtjänar fortsatt kapital och utredning.','The next step is scenario testing: retain and improve, renovate in stages or undertake a larger transformation. Each scenario is linked to indicative time, dependencies and investment level. The purpose is not to promise an exact construction cost before design, but to show which option deserves further capital and investigation.'
    ],
    'bim-fran-ide-till-nyckelfardigt':[
      'Beställ rätt information ur modellen','Ask for the right information from the model',
      'BIM skapar värde först när projektet bestämmer vilken information som behövs, av vem och vid vilket beslut. En modell för tidig volymstudie ska inte bedömas som en bygghandling. Vi definierar därför leveranser, detaljnivå, ansvar och kontrollpunkter per skede innan modellerna blir stora.','BIM creates value only when the project defines what information is needed, by whom and for which decision. An early massing model should not be judged as construction documentation. We therefore define deliverables, level of detail, responsibilities and review points for each stage before models grow.',
      'För beställaren bör resultatet vara konkret: tydligare alternativ, samordnade ritningar, spårbara ändringar och färre konflikter mellan arkitektur, konstruktion och installationer. Modellen kan också stödja mängder och förvaltning, men bara när datan kvalitetssäkras och överlämningen planeras från början.','For the client, the result should be concrete: clearer options, coordinated drawings, traceable changes and fewer conflicts between architecture, structure and services. The model can also support quantities and facility management, but only when data is quality-controlled and handover is planned from the outset.'
    ],
    'bostaden-som-metod':[
      'Programmet byggs av vardagen','The brief is built from daily life',
      'Vi kartlägger återkommande situationer snarare än att börja med en stilbild: morgonlogistik, arbete hemma, matlagning, gäster, förvaring och behov av avskildhet. När aktiviteterna får mått och prioritet blir det tydligt vilka rum som kan delas, vilka som måste vara flexibla och var extra yta faktiskt gör skillnad.','We map recurring situations rather than beginning with a style image: morning routines, home working, cooking, guests, storage and privacy. Once activities receive dimensions and priorities, it becomes clear which rooms can be shared, which must remain flexible and where additional area actually matters.',
      'Metoden gör också budgetdiskussionen bättre. Pengar kan läggas på sådant som används varje dag—ljus, snickeri, akustik och robusta material—i stället för på lösningar som bara fungerar i en rendering. Resultatet blir personligt utan att vara låst och kan anpassas när livet förändras.','The method also improves the budget conversation. Investment can go to elements used every day—light, joinery, acoustics and durable materials—rather than solutions that work only in a rendering. The result becomes personal without being rigid and can adapt as life changes.'
    ],
    'bygglov-stockholm-guide':[
      'Minska lovrisken innan ritningarna låses','Reduce permit risk before fixing the design',
      'Börja med fastighetens detaljplan, gällande planbestämmelser, eventuellt kulturhistoriskt värde och tidigare lov. En tidig volym- eller fasadstudie kan sedan pröva höjd, placering, användning och påverkan på omgivningen. Det är billigare att ändra en princip i förstudien än en komplett ansökan efter kommunens första granskning.','Begin with the property’s detailed plan, applicable provisions, possible heritage value and previous permits. An early volume or facade study can then test height, placement, use and impact on surroundings. It is cheaper to change a principle during feasibility than a complete application after the municipality’s first review.',
      'En komplett ansökan behöver vara konsekvent mellan situationsplan, planer, fasader, sektioner och beskrivningar. Kommunens handläggning och eventuella kompletteringar ligger utanför arkitektens direkta kontroll, så tidplanen bör innehålla marginal även efter beslut för tekniskt samråd, startbesked och entreprenörens förberedelser när de momenten krävs.','A complete application must be consistent across site plan, plans, elevations, sections and descriptions. Municipal review and requests for additions are outside the architect’s direct control, so the programme should include margin after the decision for technical consultation, start clearance and contractor preparation where those steps are required.'
    ],
    'fran-lokal-till-upplevelse':[
      'Rita både kundresan och driften','Design both customer journey and operation',
      'Ett kommersiellt koncept behöver fungera från trottoaren till betalning och återbesök. Vi studerar synlighet, entré, orientering, tempo, pauser och hur varumärkets viktigaste erbjudande möter kunden. Samtidigt ritas leveranser, lager, personalflöden och städning så att upplevelsen inte skapar onödigt arbete bakom kulisserna.','A commercial concept must work from the pavement through payment and return visits. We study visibility, entrance, orientation, pace, pauses and how the brand’s key offer meets the customer. Deliveries, storage, staff routes and cleaning are designed at the same time so the experience does not create unnecessary work backstage.',
      'Material och detaljer bedöms utifrån kontakt, slitage och möjlighet att reparera. Prototyper av disk, skyltning eller belysning kan lösa fler frågor än ännu en presentationsbild. När designen kopplas till öppningsbudget, myndighetskrav och upphandling blir den ett verktyg för lansering—inte ett separat dekorationsprojekt.','Materials and details are assessed by touch, wear and repairability. Prototypes of counters, signage or lighting can resolve more questions than another presentation image. When design is connected to opening budget, approvals and procurement, it becomes a launch tool rather than a separate decoration project.'
    ],
    'fritidshus-skargard-stockholm':[
      'Skärgårdens villkor styr arkitekturen','Archipelago conditions shape the architecture',
      'Tomtens topografi, strandskydd, detaljplan, angöring, vatten och avlopp behöver kartläggas innan husets form bestäms. Sol, vind och utsikt studeras tillsammans med insyn och påverkan på landskapet. En välplacerad mindre byggnad kan ge större kvalitet och lägre markkostnad än en maximal volym.','Site topography, shoreline protection, planning rules, access, water and drainage need mapping before the form of the house is fixed. Sun, wind and views are studied alongside privacy and landscape impact. A well-positioned smaller building can provide greater quality and lower ground costs than a maximum volume.',
      'Bygglogistiken är en designfråga när transporter, kranlyft eller vinterväder begränsar arbetet. Konstruktion, modulmått och material bör väljas för den faktiska vägen till tomten och för enkelt underhåll i salt, fukt och temperaturskiftningar. Då blir huset robust utan att förlora lätthet eller närvaro i naturen.','Construction logistics become a design issue when transport, lifting or winter weather limits the work. Structure, module sizes and materials should suit the actual route to site and simple maintenance in salt, moisture and temperature changes. The house can then be robust without losing lightness or presence in nature.'
    ],
    'hallbar-arkitektur-stockholm':[
      'Mät det som projektet kan påverka','Measure what the project can influence',
      'Den största klimatvinsten kan vara att behålla stomme, fasad eller planstruktur i stället för att ersätta dem. Vi jämför därför ombyggnad, tillbyggnad och nybyggnad innan materiallistan optimeras. Därefter kan klimatpåverkan, energi, dagsljus och livslängd följas med mål som passar projektets skede och budget.','The largest carbon saving may come from retaining structure, facade or layout rather than replacing them. We therefore compare adaptation, extension and new build before optimising the material list. Embodied carbon, energy, daylight and service life can then be tracked with targets suited to the project’s stage and budget.',
      'I Stockholm behöver hållbarhet också hantera mörka vintrar, övertemperatur sommartid, fukt, akustik och förändrade användningsbehov. En enkel klimatskärm, reparerbara detaljer och planlösningar som kan ändras utan omfattande rivning ger ofta större långsiktigt värde än enstaka tekniska tillägg med kort livslängd.','In Stockholm, sustainability also needs to address dark winters, summer overheating, moisture, acoustics and changing patterns of use. A simple envelope, repairable details and layouts that can change without major demolition often provide greater long-term value than isolated technical additions with short service lives.'
    ],
    'inredning-liten-lagenhet-stockholm':[
      'Prioritera funktion innan speciallösning','Prioritise function before custom solutions',
      'En liten bostad vinner på att först lösa rörelse, möblering och vardagsförvaring. Vi ritar säng, bord, arbetsplats och öppna dörrar i rätt mått innan fasta snickerier bestäms. Då syns om en vägg verkligen bör flyttas eller om en enklare förändring kan frigöra samma användbara yta.','A small home benefits from resolving movement, furniture and everyday storage first. We draw beds, tables, workspace and open doors at true size before fixing bespoke joinery. This reveals whether a wall really needs moving or a simpler change can release the same usable area.',
      'I bostadsrätt behöver ändringar av kök, våtrum, ventilation och bärande delar samordnas med föreningens krav och ibland kommunens process. När tekniken är klar kan färg, material och belysning användas precist: ljusa kontraster där orientering behövs, lugna sammanhang där rummet ska kännas större.','In a housing cooperative, changes to kitchens, wet rooms, ventilation and structural elements must align with association requirements and sometimes municipal procedures. Once the technical basis is clear, colour, materials and lighting can be used precisely: contrast where orientation is needed and calm continuity where space should feel larger.'
    ],
    'kontoret-som-vill-bli-besokt':[
      'Utgå från beteenden, inte skrivbordstal','Begin with behaviours, not desk counts',
      'Hybridarbete gör närvaron ojämn. Vi analyserar vilka aktiviteter som kräver fokus, samarbete, sekretess, lärande eller social kontakt och när de sker. Resultatet är en kapacitetsmodell med olika miljöer, inte bara ett genomsnittligt antal arbetsplatser. Den kan testas mot beläggning och justeras efter inflyttning.','Hybrid work makes attendance uneven. We analyse which activities require focus, collaboration, privacy, learning or social contact and when they occur. The result is a capacity model with different settings, not merely an average desk count. It can be tested against occupancy and adjusted after move-in.',
      'Akustik, luft, ljus, teknik och möjlighet att välja plats avgör om kontoret faktiskt används. Attraktiva sociala ytor får inte skapa störningar i fokusrummen, och representativa delar måste fungera för vardaglig drift. En tydlig zonering gör investeringen begriplig för både ledning, medarbetare och fastighetsägare.','Acoustics, air, light, technology and choice of setting determine whether the office is actually used. Attractive social spaces must not disturb focus areas, and representative zones must support daily operation. Clear zoning makes the investment understandable to management, employees and the property owner.'
    ],
    'kostnad-arkitekt-stockholm':[
      'Arvodet följer ansvar och leverans','The fee follows responsibility and deliverables',
      'Två offerter kan ha samma rubrik men helt olika innehåll. Kontrollera vilka skeden, möten, ritningar, visualiseringar, myndighetskontakter, konsultsamordning och revideringar som ingår. Be också om tydliga antaganden och undantag. Då går det att förstå om ett lägre pris betyder effektivitet eller bara ett smalare uppdrag.','Two proposals can carry the same heading but contain very different work. Check which stages, meetings, drawings, visualisations, authority contacts, consultant coordination and revisions are included. Ask for clear assumptions and exclusions. This reveals whether a lower price means efficiency or simply a narrower assignment.',
      'Den totala projektkostnaden påverkas ofta mer av sena beslut, otydlig upphandling och ändringar under byggtid än av skillnaden mellan två arkitekttimpriser. Ett stegvis uppdrag med beslutspunkter gör det möjligt att pausa, utvärdera och fördjupa först när projektets risk, budget och ambitionsnivå är bättre kända.','Total project cost is often affected more by late decisions, unclear procurement and construction changes than by the difference between two architectural hourly rates. A staged commission with decision gates makes it possible to pause, evaluate and deepen the work only when risk, budget and ambition are better understood.'
    ],
    'ljusets-roll-i-nordisk-bostad':[
      'Planera för årets mörkaste period','Design for the darkest part of the year',
      'Dagsljusstudien bör utgå från orientering, fönstergeometri, omkringliggande byggnader och hur långt ljuset når in i planen. I Stockholm är ett rum som fungerar i juni inte tillräckligt. Möblering, arbetsytor och material behöver också prövas under låga solvinklar och mulna vinterdagar.','Daylight study should begin with orientation, window geometry, surrounding buildings and how far light reaches into the plan. In Stockholm, a room that works in June is not enough. Furniture, work surfaces and materials also need testing under low sun angles and overcast winter days.',
      'Artificiellt ljus byggs i lager: allmänljus för orientering, arbetsljus där precision behövs och mjukare ljus för kväll och återhämtning. Armaturplacering, bländning, färgåtergivning och styrning bör samordnas med snickerier och elritning tidigt, inte lösas med en enda takpunkt efter byggstart.','Artificial lighting is built in layers: ambient light for orientation, task light where precision is needed and softer light for evening and recovery. Fixture placement, glare, colour rendering and controls should be coordinated with joinery and electrical design early, not solved by a single ceiling point after construction begins.'
    ],
    'planlosning-och-potential':[
      'Pröva flera planer mot samma mål','Test several plans against the same goals',
      'En planlösning bedöms genom dagsljus, rörelse, möblerbarhet, förvaring, installationer och möjlighet till avskildhet. Vi markerar bärande delar och stammar innan alternativ ritas, så att varje förslag har en realistisk teknisk grund. Därefter kan alternativen jämföras mot samma prioriteringar i stället för mot magkänsla.','A floor plan is assessed through daylight, movement, furniture, storage, services and privacy. We mark structural elements and risers before drawing options so each proposal has a realistic technical basis. The alternatives can then be compared against the same priorities rather than intuition.',
      'Det bästa alternativet är sällan det som flyttar flest väggar. En mindre justering av dörrläge, siktlinje eller förvaring kan ge stor effekt med lägre kostnad och mindre lov- eller föreningsrisk. För en investering bör även framtida målgrupp och flexibilitet vägas in, inte bara dagens möblering.','The best option is rarely the one moving the most walls. A smaller adjustment to a doorway, sightline or storage can have major effect with lower cost and less permit or association risk. For an investment, future users and flexibility should also be considered, not only today’s furniture.'
    ],
    'renovera-villa-stockholm':[
      'Förstudien skyddar både hus och budget','Feasibility protects both house and budget',
      'Börja med uppmätning, originalritningar, tidigare lov, synliga skador och en genomgång av stomme, tak, grund och installationer. Äldre villor har ofta flera ombyggnadslager som inte syns i kommunens arkiv. Kritiska antaganden bör verifieras innan planlösning och kostnadsram låses.','Begin with measured information, original drawings, previous permits, visible defects and a review of structure, roof, foundations and services. Older houses often contain several layers of alteration not shown in municipal archives. Critical assumptions should be verified before fixing layout and budget.',
      'Dela sedan projektet i nödvändigt underhåll, funktionella förbättringar och valbara kvaliteter. Det gör prioriteringen tydligare när anbuden kommer. Samma ritningar och beskrivningar ska gå till alla entreprenörer, med definierat ansvar, tidplan och hantering av ändringar. Då blir priset jämförbart och byggstarten lugnare.','Then divide the project into necessary maintenance, functional improvements and optional qualities. This clarifies priorities when tenders arrive. Every contractor should receive the same drawings and descriptions, with defined responsibilities, programme and change procedure. Prices become comparable and construction starts with fewer uncertainties.'
    ],
    'sekelskifte-planlosning-stockholm':[
      'Bevara hierarkin, inte bara detaljerna','Preserve the hierarchy, not only details',
      'Sekelskiftesbostadens värde ligger ofta i rummens proportioner, axlar, ljusföring och relation mellan representativa rum och servisytor. Inventera därför helheten innan enskilda lister räddas. Bärande väggar, murstockar, stammar och ventilation sätter samtidigt gränser som måste verifieras i den faktiska lägenheten.','The value of a turn-of-the-century home often lies in room proportions, axes, light and the relationship between principal rooms and service spaces. Survey the whole before saving individual mouldings. Structural walls, chimneys, risers and ventilation also set limits that must be verified in the actual apartment.',
      'Nya kök, badrum och snickerier kan vara samtida men bör respektera skala, rytm och materialdjup. Dokumentera det som demonteras och återanvänd originaldelar där deras skick tillåter. Dialog med föreningen behövs tidigt, särskilt vid planändring, våtrum, ventilation eller påverkan på gemensamma system.','New kitchens, bathrooms and joinery can be contemporary while respecting scale, rhythm and material depth. Document what is removed and reuse original components where condition allows. Early dialogue with the association is important, especially for layout changes, wet rooms, ventilation or shared systems.'
    ],
    'tathet-rorelse-och-varde':[
      'Täthet behöver en rumslig motprestation','Density needs a spatial return',
      'Fler bostäder eller arbetsplatser skapar värde först när gatunät, kollektivtrafik, service och offentliga rum klarar ökningen. Vi studerar entréer, bottenvåningar, gånglinjer, vistelse, sol och vind tillsammans med byggrätter. Tätheten blir då en del av en stadsdel, inte bara en siffra i exploateringskalkylen.','More homes or workplaces create value only when streets, public transport, services and public space can support the increase. We study entrances, ground floors, walking routes, places to stay, sun and wind alongside development rights. Density then becomes part of a district, not merely a figure in a development calculation.',
      'Genomförandet behöver också tåla etapper. Tidiga byggnader och platser bör fungera innan hela planen är färdig, med tydliga kopplingar till befintlig stad. En robust struktur kan rymma olika arkitekter och förändrade marknadsvillkor utan att förlora sammanhang, orienterbarhet eller långsiktigt fastighetsvärde.','Implementation must also tolerate phases. Early buildings and spaces should work before the whole plan is complete, with clear links to the existing city. A robust structure can accommodate different architects and changing market conditions without losing coherence, legibility or long-term property value.'
    ],
    'tillbyggnad-stockholm-guide':[
      'Lös mötet mellan gammalt och nytt','Resolve the meeting of old and new',
      'En tillbyggnad påverkar mer än fasaden. Nivåer, bärning, takavvattning, brand, energi, ventilation och rörelse genom det befintliga huset behöver lösas tillsammans. Vi undersöker var klimatskärmen öppnas och hur den nya volymen kan ge bättre dagsljus utan att lämna mörka restytor bakom sig.','An extension affects more than the facade. Levels, structure, roof drainage, fire, energy, ventilation and movement through the existing house need resolution together. We examine where the envelope is opened and how the new volume can improve daylight without leaving dark residual spaces behind.',
      'Rita möblering och trädgårdskontakt innan maximal area eftersträvas. En mindre, välplacerad tillbyggnad kan ge bättre vardag, lägre grundkostnad och enklare lovprövning. När principen är vald behövs samordnade handlingar för arkitektur, konstruktion och installationer samt en tydlig gräns mellan befintligt, rivning och nytt arbete.','Draw furniture and garden connections before pursuing maximum area. A smaller, well-placed extension can improve daily life, reduce foundation cost and simplify approvals. Once the principle is chosen, coordinated architectural, structural and services documents are needed, with clear boundaries between existing, demolition and new work.'
    ]
  };

  var more=depth[slug];
  var faqData=null;
  document.querySelectorAll('script[type="application/ld+json"]').forEach(function(node){
    try{
      var parsed=JSON.parse(node.textContent);
      if(parsed && parsed['@type']==='FAQPage')faqData=parsed;
    }catch(ignore){}
  });

  if(faqData && Array.isArray(faqData.mainEntity) && faqData.mainEntity.length){
    var faq=document.createElement('section');
    faq.className='article-faq';
    faq.setAttribute('aria-labelledby','article-faq-title');
    var title=document.createElement('h2');
    title.id='article-faq-title';
    title.setAttribute('data-sv','Vanliga frågor');
    title.setAttribute('data-en','Frequently asked questions');
    title.textContent=activeLang==='en'?'Frequently asked questions':'Vanliga frågor';
    faq.appendChild(title);
    faqData.mainEntity.forEach(function(item,index){
      if(!item || !item.name || !item.acceptedAnswer || !item.acceptedAnswer.text)return;
      var details=document.createElement('details');
      details.className='faq-item';
      var summary=document.createElement('summary');
      var answer=document.createElement('p');
      summary.setAttribute('data-sv',item.name);
      answer.setAttribute('data-sv',item.acceptedAnswer.text);
      if(more && index<2){
        var enQuestion=index===0?'What should be clarified first?':'How does this support a better project result?';
        var enAnswer=index===0?more[3]:more[5];
        summary.setAttribute('data-en',enQuestion);
        answer.setAttribute('data-en',enAnswer);
        summary.textContent=activeLang==='en'?enQuestion:item.name;
        answer.textContent=activeLang==='en'?enAnswer:item.acceptedAnswer.text;
      }else{
        details.setAttribute('data-sv-only','true');
        details.hidden=activeLang==='en';
        summary.textContent=item.name;
        answer.textContent=item.acceptedAnswer.text;
      }
      details.appendChild(summary);
      details.appendChild(answer);
      faq.appendChild(details);
    });
    var body=document.querySelector('.wb-body');
    if(body)body.insertAdjacentElement('afterend',faq);
  }

  document.querySelectorAll('[data-lang-switch]').forEach(function(button){
    button.addEventListener('click',function(){
      activeLang=button.getAttribute('data-lang-switch')||'sv';
      document.documentElement.lang=activeLang;
      document.querySelectorAll('[data-sv-only="true"]').forEach(function(item){item.hidden=activeLang==='en';});
    });
  });

  var footer=document.querySelector('footer');
  if(footer){
    footer.innerHTML='<span data-sv="WOLFBLANC® ARCHITECTS · Stockholm · Godkänd för F-skatt · © 2026" data-en="WOLFBLANC® ARCHITECTS · Stockholm · Approved for F-tax · © 2026">WOLFBLANC® ARCHITECTS · Stockholm · Godkänd för F-skatt · © 2026</span>'+
      '<a href="https://eolos.se" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;opacity:.65">WEB BY EOLOS DESIGN LAB</a>'+
      '<span><a href="mailto:info@wolfblanc.com" style="color:inherit;text-decoration:none">info@wolfblanc.com</a> · <a href="https://wolfblanc.com" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none">wolfblanc.com</a></span>';
  }

  var btt=document.getElementById('btt');
  if(btt && footer){
    function placeButton(){
      btt.classList.toggle('visible',window.scrollY>400);
      var rect=footer.getBoundingClientRect();
      btt.style.bottom=rect.top<window.innerHeight?(window.innerHeight-rect.top+16)+'px':'';
    }
    window.addEventListener('scroll',placeButton,{passive:true});
    window.addEventListener('resize',placeButton,{passive:true});
    placeButton();
  }
})();
