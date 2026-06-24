(function(){
  'use strict';

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
      'Så jämför du arkitektofferter','How to compare architects proposals',
      'Be varje arkitekt beskriva leveranser per skede: antal möten, ritningar, visualiseringar, myndighetskontakt, konsultsamordning och revideringar. Ett lägre arvode kan bygga på ett smalare uppdrag. Jämför därför omfattning och ansvar innan du jämför pris.','Ask each architect to describe deliverables by stage: meetings, drawings, visualisations, authority contact, consultant coordination and revisions. A lower fee may reflect a narrower scope. Compare scope and responsibility before comparing price.',
      'Bestäm också hur beslut dokumenteras och hur tillägg beställs. Fast arvode ger trygghet när uppgiften är tydlig. Löpande arvode passar bättre när flera alternativ behöver prövas. En kombination, med fast pris för definierade skeden och timpris för tillägg, är ofta transparent.','Also decide how decisions are recorded and additional work is authorised. A fixed fee provides certainty when the task is clear. Hourly fees suit work where several options must be tested. A combination of fixed stages and hourly additions is often transparent.'
    ],
    'arkitektritat-kok-badrum-stockholm':[
      'Samordning i bostadsrätt','Coordination in a housing cooperative',
      'Kontrollera föreningens stadgar och tekniska anvisningar innan planlösningen låses. Flytt av kök eller badrum påverkar ofta avlopp, ventilation, tätskikt, brand och ljud. Styrelsens godkännande ersätter inte kommunens krav på anmälan eller startbesked när sådana krav gäller.','Check the associations statutes and technical guidance before fixing the layout. Moving kitchens or bathrooms often affects drainage, ventilation, waterproofing, fire and acoustics. Board approval does not replace municipal notification or a start notice where these are required.',
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

  var guide=additions[slug],articleBody=document.querySelector('.wb-body');
  if(guide && articleBody){
    var section=document.createElement('section');
    var heading=document.createElement('h2');
    heading.className='section-h';
    heading.setAttribute('data-sv',guide[0]);
    heading.setAttribute('data-en',guide[1]);
    heading.textContent=document.documentElement.lang==='en'?guide[1]:guide[0];
    section.appendChild(heading);
    [[guide[2],guide[3]],[guide[4],guide[5]]].forEach(function(pair){
      var paragraph=document.createElement('p');
      paragraph.setAttribute('data-sv',pair[0]);
      paragraph.setAttribute('data-en',pair[1]);
      paragraph.textContent=document.documentElement.lang==='en'?pair[1]:pair[0];
      section.appendChild(paragraph);
    });
    articleBody.appendChild(section);
  }

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
    title.textContent=document.documentElement.lang==='en'?'Frequently asked questions':'Vanliga frågor';
    faq.appendChild(title);
    faqData.mainEntity.forEach(function(item){
      if(!item || !item.name || !item.acceptedAnswer || !item.acceptedAnswer.text)return;
      var details=document.createElement('details');
      details.className='faq-item';
      var summary=document.createElement('summary');
      summary.textContent=item.name;
      var answer=document.createElement('p');
      answer.textContent=item.acceptedAnswer.text;
      details.appendChild(summary);
      details.appendChild(answer);
      faq.appendChild(details);
    });
    var body=document.querySelector('.wb-body');
    if(body)body.insertAdjacentElement('afterend',faq);
  }

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
