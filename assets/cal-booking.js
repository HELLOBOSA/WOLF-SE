(function(){
  var triggers=Array.prototype.slice.call(document.querySelectorAll('[data-cal-trigger]'));
  if(!triggers.length)return;

  (function(C,A,L){
    var p=function(a,ar){a.q.push(ar);};
    var d=C.document;
    C.Cal=C.Cal||function(){
      var cal=C.Cal;
      var ar=arguments;
      if(!cal.loaded){
        cal.ns={};
        cal.q=cal.q||[];
        d.head.appendChild(d.createElement('script')).src=A;
        cal.loaded=true;
      }
      if(ar[0]===L){
        var api=function(){p(api,arguments);};
        var namespace=ar[1];
        api.q=api.q||[];
        if(typeof namespace==='string'){
          cal.ns[namespace]=cal.ns[namespace]||api;
          p(cal.ns[namespace],ar);
          p(cal,['initNamespace',namespace]);
        }else p(cal,ar);
        return;
      }
      p(cal,ar);
    };
  })(window,'https://app.cal.com/embed/embed.js','init');

  Cal('init','30min',{origin:'https://app.cal.com'});
  Cal.config=Cal.config||{};
  Cal.config.forwardQueryParams=true;

  function currentTheme(){
    var root=document.documentElement;
    return root.classList.contains('dark')||root.classList.contains('wb-dark')?'dark':'light';
  }

  function calendarConfig(theme){
    return {
      layout:'month_view',
      useSlotsViewOnSmallScreen:'true',
      theme:theme,
      utm_source:'wolfblanc.se',
      utm_medium:'website',
      utm_campaign:'introductory_call',
      utm_content:window.location.pathname
    };
  }

  function apply(){
    var theme=currentTheme();
    triggers.forEach(function(trigger){
      trigger.setAttribute('data-cal-link','wolfblanc/30min');
      trigger.setAttribute('data-cal-namespace','30min');
      trigger.setAttribute('aria-haspopup','dialog');
      trigger.setAttribute('data-cal-config',JSON.stringify(calendarConfig(theme)));
    });
    Cal.ns['30min']('ui',{
      theme:theme,
      hideEventTypeDetails:false,
      layout:'month_view',
      cssVarsPerTheme:{
        light:{
          'cal-brand':'#09090b','cal-brand-emphasis':'#5a6878','cal-brand-text':'#f0f2f5',
          'cal-text':'#4a4a5a','cal-text-emphasis':'#09090b','cal-bg':'#f0f2f5',
          'cal-bg-emphasis':'#dfe3e8','cal-bg-subtle':'#e8ebef','cal-border':'#cbd1d8',
          'cal-border-emphasis':'#5a6878','radius-xl':'0px','radius-2xl':'0px','radius-3xl':'0px'
        },
        dark:{
          'cal-brand':'#9ba8b8','cal-brand-emphasis':'#f0f0f2','cal-brand-text':'#09090b',
          'cal-text':'#8a8a98','cal-text-emphasis':'#f0f0f2','cal-bg':'#09090b',
          'cal-bg-emphasis':'#25272c','cal-bg-subtle':'#15161a','cal-border':'#343740',
          'cal-border-emphasis':'#9ba8b8','radius-xl':'0px','radius-2xl':'0px','radius-3xl':'0px'
        }
      }
    });
  }

  apply();
  document.addEventListener('click',function(event){
    var trigger=event.target.closest&&event.target.closest('[data-cal-trigger]');
    if(!trigger)return;
    var theme=currentTheme();
    event.preventDefault();
    event.stopImmediatePropagation();
    apply();
    Cal.ns['30min']('modal',{calLink:'wolfblanc/30min',config:calendarConfig(theme)});
  },true);
  var themeButton=document.getElementById('theme-btn');
  if(themeButton)themeButton.addEventListener('click',function(){window.setTimeout(apply,0);});
})();
