
const typingEl = document.getElementById('typing');
const phrases = ['IT Help Desk','IT Support Engineer','System Administration','Network & Technical Support'];
let phraseIndex = 0, charIndex = 0, deleting = false;
function typeLoop(){const current = phrases[phraseIndex]; typingEl.textContent = current.slice(0, charIndex); if(!deleting && charIndex < current.length){charIndex++; setTimeout(typeLoop, 80);}else if(deleting && charIndex > 0){charIndex--; setTimeout(typeLoop, 40);}else{deleting = !deleting; if(!deleting) phraseIndex = (phraseIndex + 1) % phrases.length; setTimeout(typeLoop, deleting ? 1200 : 350);}}
typeLoop();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible');});},{threshold:0.15});
reveals.forEach(el=>observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e)=>{glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';});

window.addEventListener('load', ()=> setTimeout(()=>document.querySelector('.loading-screen').classList.add('hide'), 900));
window.addEventListener('scroll', ()=>{const h=document.documentElement; document.querySelector('.scroll-progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';});

document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top; card.style.transform=`perspective(1000px) rotateX(${-(y-r.height/2)/18}deg) rotateY(${(x-r.width/2)/18}deg) translateY(-6px)`;}); card.addEventListener('mouseleave',()=>card.style.transform='');});

const audio = document.getElementById('bg-music'); const musicBtn = document.getElementById('musicToggle');
audio.volume = 0.35;
const tryPlay = ()=> audio.play().catch(()=>{});
tryPlay(); document.body.addEventListener('click', tryPlay, {once:true});
musicBtn.addEventListener('click', ()=>{if(audio.paused){audio.play(); musicBtn.innerHTML='<i class="fa-solid fa-volume-high"></i>';}else{audio.pause(); musicBtn.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';}});

const translations = {vi:{'nav.about':'Giới thiệu','nav.exp':'Kinh nghiệm','nav.projects':'Dự án','nav.skills':'Kỹ năng','nav.contact':'Liên hệ','nav.hire':'Hire Me','hero.badge':'✦ IT Help Desk • IT Support • System & Network','hero.desc':'IT Support với hơn <strong>3 năm kinh nghiệm</strong> quản trị và vận hành hệ thống IT doanh nghiệp. Có kinh nghiệm thực chiến về <strong>network, NAS Synology, Windows Server, camera, thiết bị văn phòng</strong> và xử lý sự cố cho môi trường nhiều người dùng.','hero.expBtn':'Xem kinh nghiệm','hero.cvBtn':'Tải CV PDF','stats.exp':'Năm kinh nghiệm','stats.skills':'Kỹ năng chuyên môn','stats.support':'Tinh thần hỗ trợ','hero.card':'Specialized in enterprise support, infrastructure maintenance, and fast troubleshooting.','about.title':'Giới thiệu bản thân','about.card1t':'Vận hành ổn định là ưu tiên hàng đầu','about.card1d':'Tôi tập trung vào việc duy trì hệ thống hoạt động ổn định, phản hồi nhanh khi có sự cố và đảm bảo trải nghiệm người dùng nội bộ luôn mượt mà.','about.card2t':'Mục tiêu nghề nghiệp','about.card2d':'Mong muốn phát triển chuyên sâu về System Administration và Network, từng bước nâng cao khả năng triển khai, bảo trì và tối ưu hạ tầng IT doanh nghiệp.','exp.title':'Kinh nghiệm làm việc','skills.title':'Kỹ năng chuyên môn','contact.title':'Kết nối với tôi','contact.desc':'Sẵn sàng cho cơ hội mới trong mảng IT Support / System Administration / Network.'},
en:{'nav.about':'About','nav.exp':'Experience','nav.projects':'Projects','nav.skills':'Skills','nav.contact':'Contact','nav.hire':'Hire Me','hero.badge':'✦ IT Help Desk • IT Support • System & Network','hero.desc':'IT Support with <strong>3+ years of experience</strong> in enterprise IT operations and support. Hands-on experience with <strong>network, Synology NAS, Windows Server, CCTV and office equipment</strong> in multi-user environments.','hero.expBtn':'View Experience','hero.cvBtn':'Download CV PDF','stats.exp':'Years Experience','stats.skills':'Professional Skills','stats.support':'Support Mindset','hero.card':'Specialized in enterprise support, infrastructure maintenance, and fast troubleshooting.','about.title':'About Me','about.card1t':'Stable operations come first','about.card1d':'I focus on keeping systems stable, responding quickly to incidents, and ensuring a smooth internal user experience.','about.card2t':'Career Goal','about.card2d':'Aiming to grow deeper in System Administration and Networking, while improving deployment, maintenance and IT infrastructure optimization skills.','exp.title':'Work Experience','skills.title':'Professional Skills','contact.title':'Contact Me','contact.desc':'Open to new opportunities in IT Support / System Administration / Network.'},
zh:{'nav.about':'关于我','nav.exp':'工作经历','nav.projects':'项目','nav.skills':'技能','nav.contact':'联系','nav.hire':'联系我','hero.badge':'✦ IT 帮助台 • IT 支持 • 系统与网络','hero.desc':'拥有<strong>3年以上经验</strong>的 IT Support，负责企业 IT 系统运维。熟悉<strong>网络、群晖 NAS、Windows Server、监控与办公设备</strong>，可处理多用户环境故障。','hero.expBtn':'查看经历','hero.cvBtn':'下载简历 PDF','stats.exp':'年经验','stats.skills':'专业技能','stats.support':'支持精神','hero.card':'擅长企业 IT 支持、基础设施维护与快速故障排除。','about.title':'自我介绍','about.card1t':'稳定运行是首要目标','about.card1d':'我专注于保持系统稳定运行，快速响应故障，并确保内部用户体验顺畅。','about.card2t':'职业目标','about.card2d':'希望在系统管理与网络方向深入发展，提升企业 IT 基础设施部署与优化能力。','exp.title':'工作经历','skills.title':'专业技能','contact.title':'联系我','contact.desc':'愿意接受 IT Support / System Administration / Network 相关新机会。'}};
let currentLang='vi'; const langBtn=document.getElementById('langToggle');
function applyLang(lang){document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n; if(translations[lang][key]) el.innerHTML=translations[lang][key];}); document.documentElement.lang=lang; currentLang=lang; langBtn.textContent=lang.toUpperCase();}
langBtn.addEventListener('click',()=>applyLang(currentLang==='vi'?'en':currentLang==='en'?'zh':'vi'));

const fxBtn=document.getElementById('fxToggle'); let fxOn=true;
fxBtn.addEventListener('click',()=>{fxOn=!fxOn; document.body.classList.toggle('reduced-fx', !fxOn);});

// canvas bg
const canvas = document.getElementById('bg-canvas'); const ctx = canvas.getContext('2d');
let w,h,particles=[],mouse={x:null,y:null,radius:140};
function resizeCanvas(){w=canvas.width=window.innerWidth*devicePixelRatio; h=canvas.height=window.innerHeight*devicePixelRatio; canvas.style.width=window.innerWidth+'px'; canvas.style.height=window.innerHeight+'px'; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}
class Particle{constructor(){this.reset();} reset(){this.x=Math.random()*window.innerWidth; this.y=Math.random()*window.innerHeight; this.vx=(Math.random()-.5)*0.8; this.vy=(Math.random()-.5)*0.8; this.size=Math.random()*2.2+1;} draw(){ctx.beginPath(); ctx.fillStyle='rgba(67,213,255,.9)'; ctx.shadowBlur=12; ctx.shadowColor='rgba(67,213,255,.6)'; ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;} update(){this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>window.innerWidth) this.vx*=-1; if(this.y<0||this.y>window.innerHeight) this.vy*=-1; const dx=this.x-mouse.x, dy=this.y-mouse.y, d=Math.hypot(dx,dy); if(d<mouse.radius){this.x += dx/d*1.5; this.y += dy/d*1.5;} this.draw();}}
function initParticles(){particles=[]; for(let i=0;i<70;i++) particles.push(new Particle());}
function connectParticles(){for(let a=0;a<particles.length;a++){for(let b=a;b<particles.length;b++){const dx=particles[a].x-particles[b].x, dy=particles[a].y-particles[b].y, dist=Math.hypot(dx,dy); if(dist<120){ctx.strokeStyle=`rgba(111,140,255,${1-dist/120})`; ctx.lineWidth=.5; ctx.beginPath(); ctx.moveTo(particles[a].x,particles[a].y); ctx.lineTo(particles[b].x,particles[b].y); ctx.stroke();}}}}
function animate(){ctx.clearRect(0,0,window.innerWidth,window.innerHeight); particles.forEach(p=>p.update()); connectParticles(); requestAnimationFrame(animate);}
window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;}); window.addEventListener('resize',()=>{resizeCanvas(); initParticles();}); resizeCanvas(); initParticles(); animate();
