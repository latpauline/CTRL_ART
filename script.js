(function(){
var P1I=[
{t:'Birth Flower',f:'Scribble drawing',type:'Individual',w:'w5',img:'images/scribbles.jpg',alt:'A colorful flower with rainbow-colored petals drawn in colored pencil, covered by loops of black pen scribbles. Labelled Birth Flower and signed Pauline Mae R. Lat.',n:'A flower built out of free-flowing scribbles.'},
{t:'Where Our Hearts Come Home',f:'Block poetry',type:'Individual',w:'w2',img:'images/block_poetry.jpg',alt:'Black marker drawing of a snowy cabin with pine trees, stars and a hanging star ornament, with selected words from a newspaper arranged on the cabin wall.',n:'Found words from a newspaper, framed by a marker-drawn cabin scene.',poem:['“Ber” months feel different.','They awaken something','in us','love','places','memory where our','hearts have always known how','to come home.','And there is','this beautiful','mystery.']},
{t:'Coffee Painting',f:'Coffee on paper',type:'Individual',w:'w5',img:'images/coffee_painting.jpg',alt:'Brown monochrome coffee painting of a woman seen from behind, a lily, mushrooms, a sailboat at sunset, dragonflies, a volleyball and a laptop.',n:'A painting made entirely in coffee tones.'},
{t:'Modern Painting',f:'Painting',type:'Individual',w:'w2',img:'images/modern_painting.jpg',alt:'Bold cubist-style painting of a face in yellow, orange, pink, blue and purple with thick black outlines and a green background.',n:'A cubist-style study in saturated color.'},
{t:'The Birth of Venus: A Modern Batangueña Reimagining',f:'Art appropriation',type:'Individual',w:'w2',img:'images/art_appropriation.jpg',alt:'A modern Batangueña-inspired reinterpretation of Botticelli’s The Birth of Venus, with Venus standing on a scallop shell by the sea.',n:'I reimagined Sandro Botticelli’s The Birth of Venus in my own style, picturing Venus as a modern Batangueña woman and bringing a piece of my identity into the classic scene.'}];
var P1G=[
{t:'Book Spine Poems',f:'Book spine poetry',type:'Group',w:'w5',img:'images/book.jpg',alt:'Four slides: a group photo labelled Group 4 - Loss with member names, and two book-spine poems titled The garden left behind and The shape of Absence, with the unedited photos of the stacked books.',n:'Two poems built from stacked book titles: "The garden left behind" and "The shape of Absence".',grp:'Group 4: Loss',mem:'Aquende, Lloyd Axel; Balazon, Kirk Jedrik; Gumila, Naika Ishi (Leader); Lat, Pauline Mae; Melendrez, Lee Andrei; Posadas, Arvin John; Raboy, Liam Paul; Villanueva, Julien John'},
{t:'The Burden of Being THE BEST',f:'Video',type:'Group',w:'w2',video:'videos/group-3.mp4',poster:'videos/group-3-poster.jpg',alt:'Group 3 video titled The Burden of Being THE BEST, with library footage of students reading and studying among bookshelves.',n:'Group video with library footage of students reading and studying.',grp:'Group 3',mem:'Lat, Pauline; Gutierrez, Ahron; Arellana, J.M.; Pesa, Jonadab',acc:1},
{t:'GEARTS Final Video',f:'Video',type:'Group',w:'w5',video:'videos/gearts-final.mp4?v=2',alt:'Pauline’s contributed segment from the GEARTS final group video.',n:'This exhibition includes only the segment I worked on, rather than the complete group video, to show my own contribution to our shared project.',grp:'GEARTS Final Group',mem:'Deleon, Jelyn Mae; Gumila, Naika Ishi; Lat, Pauline Mae; Molina, Ma. Guillena; Udani, Crystal Gwyneth'}];
var P2=[
{t:'Golden Hour at the Pond',f:'Photography',w:'w5',img:'images/pond-at-dusk.jpg',alt:'White ducks beside a pond at sunset, with the warm evening light reflected in the water.',n:'I captured a quiet moment by the pond as the sunset reflected across the water.',apx:1,proof:[
{img:'images/pond-landscape.jpg',alt:'Wide view of the pond and surrounding grounds beneath a dramatic evening sky.',label:'The pond at sunset'},
{img:'images/pond-with-ducks.jpg',alt:'Pauline standing by the pond and looking at ducks in the water.',label:'A moment by the water'},
{img:'images/duck-at-sunset.jpg',alt:'White ducks at the pond with the warm sunset reflected in the water.',label:'Ducks in the evening light'}]},
{t:'A Little Heart, Made by Hand',f:'Crochet',w:'w2',img:'images/crochet-heart-keychain.jpg',alt:'A small red crocheted heart keychain held in front of colorful yarn and crochet tools.',n:'A small handmade crochet heart that turns colorful yarn into a keepsake.',apx:2,proof:[
{img:'images/crochet-materials.jpg',alt:'Colorful yarn, crochet hook, key rings, and tools prepared for making the crochet keychain.',label:'Materials and setup'},
{img:'images/crochet-in-progress.jpg',alt:'The red crochet heart being made with a crochet hook, with colorful yarn in the background.',label:'Crocheting the heart'},
{img:'images/crochet-heart-keychain.jpg',alt:'The completed red crochet heart attached to a metal key ring.',label:'Finished keychain'}]},
{t:'A Face in Graphite',f:'Pencil drawing',w:'w2',img:'images/graphite-portrait.jpg',alt:'A graphite pencil portrait of an anime-inspired character with shoulder-length hair and a sailor-style collar.',n:'This is an older drawing I made during vacation, when I had more free time to sketch a character from the anime I was watching. It is a personal piece from before this exhibition, rather than a new work made for this project.'}];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function vid(it){
  var miss='<div class="blank"><span>Video file not found.<br>Save it as '+esc(it.video)+'</span></div>';
  return '<div class="frame slot '+it.w+'"><div class="f vid"><video controls preload="metadata" playsinline'+(it.poster?' poster="'+it.poster+'"':'')+' aria-label="'+esc(it.alt)+'"><source src="'+it.video+'" type="video/mp4" onerror="this.closest(\'.vid\').innerHTML=this.closest(\'.vid\').getAttribute(\'data-miss\')">Your browser cannot play this video.</video></div></div>'.replace('class="f vid"','class="f vid" data-miss="'+miss.replace(/"/g,'&quot;')+'"')}
function fig(it,p2){
  var fr=it.video?vid(it):it.img?'<button class="frame '+it.w+'" data-t="'+esc(it.t)+' · '+esc(it.f)+'"><div class="f"><img src="'+it.img+'" alt="'+esc(it.alt)+'"></div></button>'
   :'<div class="frame slot '+it.w+'"><div class="f blank"><span>'+(it.blank||('Empty frame<br>Hang '+esc(it.t.toLowerCase())+' here'))+'</span></div></div>';
  var cap='';
  if(p2)cap='<div class="cap"><p>'+esc(it.n)+'</p>'+(it.apx?'<a href="#apx-'+it.apx+'">Proof of creation: Appendix '+it.apx+'</a>':'')+'</div>';
  else{cap='<div class="cap">';
    if(it.n)cap+='<p>'+esc(it.n)+'</p>';
    if(it.poem)cap+='<div class="poem" aria-label="Typewritten transcription of the found newspaper poem">'+it.poem.map(esc).join('<br>')+'</div>';
    if(it.grp)cap+='<p><strong>'+esc(it.grp)+'</strong><br>Members: '+esc(it.mem)+'</p>';
    cap+='</div>'}
  return '<figure>'+fr+'<figcaption class="plaque"><strong>'+esc(it.t)+'</strong><span>'+esc(it.f)+(it.type?' · '+it.type:'')+'</span></figcaption>'+cap+'</figure>'}
document.getElementById('p1i').innerHTML=P1I.map(function(i){return fig(i)}).join('');
document.getElementById('p1g').innerHTML=P1G.map(function(i){return fig(i)}).join('');
document.getElementById('p2').innerHTML=P2.map(function(i){return fig(i,1)}).join('');
document.getElementById('apx').innerHTML=P2.map(function(i){
  if(!i.apx)return '';
  var b=i.proof?i.proof.map(function(p){return '<figure class="proof-item"><img src="'+p.img+'" alt="'+esc(p.alt)+'"><figcaption>'+esc(p.label)+'</figcaption></figure>'}).join('')
    :['Sketch or first draft','Process work','Final work'].map(function(l){return '<div class="blank">'+l+'</div>'}).join('');
  return '<div class="apx" id="apx-'+i.apx+'"><h3>Appendix '+i.apx+': '+esc(i.t)+'</h3><div class="proof">'+b+'</div></div>'}).join('');
var splash=document.getElementById('splash'),body=document.body,lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbt=document.getElementById('lbt');
function show(){body.classList.add('in');window.scrollTo(0,0)}
function enter(){if(splash.classList.contains('open'))return;splash.classList.add('open');show();setTimeout(function(){splash.classList.add('gone')},1400);try{history.replaceState(null,'','#gallery')}catch(e){}}
document.getElementById('doors').onclick=enter;
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&!body.classList.contains('in')&&document.activeElement===document.body)enter();if(e.key==='Escape')lb.classList.remove('on')});
if(/^#(gallery|part1|part2|reflection|appendices|apx-[1-2])$/.test(location.hash)){splash.classList.add('gone');show();if(location.hash!=='#gallery'){var el=document.querySelector(location.hash);if(el)setTimeout(function(){el.scrollIntoView()},50)}}
document.getElementById('back').onclick=function(){
  if(body.classList.contains('leaving'))return;
  var back=this;
  body.classList.add('leaving');
  splash.classList.remove('gone','open');
  back.disabled=true;
  setTimeout(function(){
    body.classList.remove('in','leaving');
    back.disabled=false;
    window.scrollTo(0,0);
    try{history.replaceState(null,'',location.pathname)}catch(e){}
  },750);
};
document.querySelectorAll('.frame:not(.slot)').forEach(function(b){b.onclick=function(){var i=b.querySelector('img');lbi.src=i.src;lbi.alt=i.alt;lbt.textContent=b.dataset.t;lb.classList.add('on')}});
document.getElementById('x').onclick=function(){lb.classList.remove('on')};
lb.onclick=function(e){if(e.target===lb)lb.classList.remove('on')};
})();