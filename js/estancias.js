
(() => {
 const btn=document.querySelector('.mobile-toggle'),nav=document.querySelector('#site-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{const expanded=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('is-open',!expanded)});}
 const institutional='https://www.juntadeandalucia.es/sites/default/files/inline-files/2024/07/estancias_institucionales.pdf';
 const research='https://www.juntadeandalucia.es/sites/default/files/inline-files/2024/07/estancias_de_investigacion.pdf';
 const types={
   grado:{kicker:'ESTANCIAS INSTITUCIONALES',name:'Grado y posgrado',intro:'Prácticas vinculadas a un programa universitario.',who:'Estudiantes de grado o posgrado en titulaciones relacionadas con las actividades del IAPH.',promoter:'La universidad o institución responsable del programa formativo debe remitir un escrito dirigido a la Dirección del IAPH.',req:['Identificar persona o personas interesadas y programa formativo.','Indicar centro, área, departamento o proyecto propuesto.','Precisar duración y periodo preferente.','Adjuntar el currículum de la persona interesada.','Formalizar un convenio de colaboración entre ambas instituciones.'],pdf:institutional},
   profesional:{kicker:'ESTANCIAS INSTITUCIONALES',name:'Profesionales',intro:'Colaboración de personal de otras instituciones del patrimonio.',who:'Profesionales del patrimonio histórico que trabajan en una institución con objetivos comunes al IAPH.',promoter:'La institución de procedencia presenta un escrito dirigido a la Dirección del IAPH.',req:['Indicar datos de las personas participantes.','Explicar interés y contenido de la estancia.','Señalar centro, área, departamento o proyecto y fechas preferentes.','Adjuntar los currículos de las personas interesadas.','Formalizar un convenio de colaboración entre ambas instituciones.'],pdf:institutional},
   investigacion:{kicker:'ESTANCIAS DE INVESTIGACIÓN',name:'Investigación',intro:'Una estancia vinculada a un objeto de estudio de patrimonio cultural.',who:'Personas con titulación universitaria que realizan estudios de doctorado o similares relacionados con el patrimonio cultural y las actividades del IAPH.',promoter:'La propia persona interesada remite una solicitud por escrito dirigida a la Dirección del IAPH.',req:['Explicar el interés y objeto de la estancia.','Identificar centro, área, departamento o proyecto del IAPH.','Indicar duración y periodo preferente.','Adjuntar un escrito de quien dirige o es responsable de la investigación que acredite el interés de la estancia para el estudio.','Consultar el documento oficial de investigación para completar el procedimiento.'],pdf:research}
 };
 const fill=(id,v)=>{document.getElementById(id).textContent=v};
 function update(key){const t=types[key]; if(!t)return;
 document.querySelectorAll('[data-type]').forEach(b=>{const a=b.dataset.type===key;b.classList.toggle('is-active',a);b.setAttribute('aria-pressed',String(a));});
 fill('panel-kicker',t.kicker);fill('panel-title',t.name);fill('panel-intro',t.intro);fill('panel-destinatarios',t.who);fill('panel-promotor',t.promoter);
 document.getElementById('panel-reqs').replaceChildren(...t.req.map(s=>{const li=document.createElement('li');li.textContent=s;return li}));
 document.getElementById('panel-pdf').href=t.pdf;
 }
 document.querySelectorAll('[data-type]').forEach(b=>b.addEventListener('click',()=>{update(b.dataset.type);document.getElementById('requisitos-modalidad').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});}));
 update('grado');
})();
