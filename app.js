(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  let lang = "ru";
  let toastTimer;
  const dict = {
    ru: {
      localBadge:"Работает в браузере", workspace:"РАБОЧЕЕ ПРОСТРАНСТВО", navJson:"JSON Studio", navColors:"Color Lab", navFormat:"Code Formatter", navPassword:"Password Lab", navBase64:"Base64 Studio", navQr:"QR Generator",
      privateTitle:"Локальная обработка", privateText:"Ваш текст не отправляется на сервер.", eyebrow:"ИНСТРУМЕНТЫ ДЛЯ РАЗРАБОТЧИКОВ", headline:'Меньше рутины.<br><span>Больше кода.</span>', subtitle:"Шесть полезных инструментов. Один рабочий стол. Без регистрации и лишних шагов.", activeTool:"АКТИВНЫЙ ИНСТРУМЕНТ", ready:"ГОТОВ К РАБОТЕ",
      jsonTitle:"Проверка и форматирование JSON", jsonDesc:"Проверьте синтаксис, сделайте структуру читаемой или сожмите её.", inputJson:"ВХОДНЫЕ ДАННЫЕ", jsonPlaceholder:'{"name":"DevKit","active":true,"tools":["json","colors"]}', pretty:"Форматировать", minify:"Сжать", validate:"Проверить", clear:"Очистить", result:"РЕЗУЛЬТАТ", copyResult:"Копировать результат",
      colorsTitle:"Цветовая лаборатория", colorsDesc:"Подберите цвет, скопируйте значения и создайте CSS-градиент.", livePreview:"ПРЕДПРОСМОТР", chooseColor:"ВЫБРАТЬ ЦВЕТ", copyHex:"Копировать HEX", gradientTitle:"CSS-градиент", gradientDesc:"Настройте два цвета и угол.", startColor:"Цвет 1", endColor:"Цвет 2", angle:"Угол", copyCss:"Копировать CSS", randomColor:"Случайный цвет",
      formatTitle:"Форматирование кода", formatDesc:"Отформатируйте HTML, CSS или JavaScript с отступами.", language:"ЯЗЫК", codeInput:"КОД ДЛЯ ФОРМАТИРОВАНИЯ", formatCode:"Форматировать код", formatHint:"Примечание: встроенный форматтер использует эвристики, а не полноценный парсер. Для сложного JavaScript применяйте специализированный линтер.",
      passwordTitle:"Генератор паролей", passwordDesc:"Случайные пароли с помощью криптографического генератора браузера.", length:"ДЛИНА ПАРОЛЯ", lowercase:"Строчные буквы (a–z)", uppercase:"Заглавные буквы (A–Z)", numbers:"Цифры (0–9)", symbols:"Символы (!@#$…)", generate:"Сгенерировать пароль", passwordHint:"Пароль генерируется в этом браузере. Не отправляйте его никому и не сохраняйте на общедоступном устройстве.",
      base64Title:"Кодирование Base64", base64Desc:"Преобразуйте текст в Base64 или декодируйте строку обратно.", base64InputLabel:"ТЕКСТ ИЛИ BASE64", encode:"Закодировать", decode:"Декодировать", base64Hint:"Base64 — это кодирование, а не шифрование. Не используйте его для защиты секретных данных.",
      qrTitle:"Генератор QR-кодов", qrDesc:"Создайте QR-код для ссылки, текста или Wi-Fi-инструкции.", qrContent:"СОДЕРЖИМОЕ QR-КОДА", qrSize:"РАЗМЕР", generateQr:"Создать QR-код", qrEmpty:"QR-код появится здесь", downloadQr:"Скачать PNG", qrHint:"Для генерации QR требуется загрузить небольшую библиотеку с CDN. Остальные инструменты работают без сторонних библиотек.",
      footerText:"Создано для разработчиков. Без аккаунтов и лишнего шума.", githubLink:"Готово для GitHub Pages ↗",
      jsonValid:"JSON корректен.", jsonPrettyDone:"JSON отформатирован.", jsonMinified:"JSON сжат.", jsonEmpty:"Введите JSON для обработки.", jsonError:"Ошибка JSON: ", copied:"Скопировано в буфер обмена.", copyFailed:"Не удалось скопировать. Выделите текст и скопируйте вручную.", colorError:"Введите HEX-цвет в формате #RRGGBB.", gradientCopied:"CSS градиента скопирован.", formatEmpty:"Введите код для форматирования.", formatDone:"Форматирование завершено (базовые эвристики).", pwChoose:"Выберите хотя бы один набор символов.", pwGenerated:"Пароль создан локально.", base64Empty:"Введите текст для обработки.", base64Encoded:"Текст закодирован в Base64.", base64Decoded:"Base64 успешно декодирован как UTF-8.", base64Error:"Не удалось декодировать Base64. Проверьте строку.", qrEmptyError:"Введите текст или URL для QR-кода.", qrUnavailable:"Библиотека QR недоступна. Проверьте подключение к интернету и перезагрузите страницу.", qrDone:"QR-код создан.", qrNoResult:"Сначала создайте QR-код.", randomDone:"Создан случайный цвет."
    },
    en: {
      localBadge:"Runs in your browser", workspace:"WORKSPACE", navJson:"JSON Studio", navColors:"Color Lab", navFormat:"Code Formatter", navPassword:"Password Lab", navBase64:"Base64 Studio", navQr:"QR Generator",
      privateTitle:"Local processing", privateText:"Your text is not sent to a server.", eyebrow:"TOOLS FOR DEVELOPERS", headline:'Less busywork.<br><span>More code.</span>', subtitle:"Six useful tools. One workspace. No sign-up, no unnecessary steps.", activeTool:"ACTIVE TOOL", ready:"READY TO USE",
      jsonTitle:"JSON validation & formatting", jsonDesc:"Validate syntax, pretty-print the structure, or minify it.", inputJson:"INPUT", jsonPlaceholder:'{"name":"DevKit","active":true,"tools":["json","colors"]}', pretty:"Pretty print", minify:"Minify", validate:"Validate", clear:"Clear", result:"RESULT", copyResult:"Copy result",
      colorsTitle:"Color Lab", colorsDesc:"Pick a color, copy values, and create a CSS gradient.", livePreview:"LIVE PREVIEW", chooseColor:"PICK A COLOR", copyHex:"Copy HEX", gradientTitle:"CSS gradient", gradientDesc:"Set two colors and an angle.", startColor:"Color 1", endColor:"Color 2", angle:"Angle", copyCss:"Copy CSS", randomColor:"Random color",
      formatTitle:"Code formatter", formatDesc:"Format HTML, CSS, or JavaScript with indentation.", language:"LANGUAGE", codeInput:"CODE TO FORMAT", formatCode:"Format code", formatHint:"Note: the built-in formatter uses heuristics, not a full parser. Use a dedicated formatter or linter for complex JavaScript.",
      passwordTitle:"Password generator", passwordDesc:"Random passwords generated with the browser's cryptographic RNG.", length:"PASSWORD LENGTH", lowercase:"Lowercase letters (a–z)", uppercase:"Uppercase letters (A–Z)", numbers:"Numbers (0–9)", symbols:"Symbols (!@#$…)", generate:"Generate password", passwordHint:"The password is generated in this browser. Never share it or leave it on a public device.",
      base64Title:"Base64 encoder", base64Desc:"Encode text to Base64 or decode a Base64 string.", base64InputLabel:"TEXT OR BASE64", encode:"Encode", decode:"Decode", base64Hint:"Base64 is encoding, not encryption. Do not use it to protect secrets.",
      qrTitle:"QR code generator", qrDesc:"Create a QR code for a link, text, or Wi-Fi instructions.", qrContent:"QR CODE CONTENT", qrSize:"SIZE", generateQr:"Generate QR code", qrEmpty:"Your QR code will appear here", downloadQr:"Download PNG", qrHint:"QR generation loads a small library from a CDN. Other tools do not need third-party libraries.",
      footerText:"Made for developers. No accounts, no noise.", githubLink:"GitHub Pages ready ↗",
      jsonValid:"Valid JSON.", jsonPrettyDone:"JSON formatted.", jsonMinified:"JSON minified.", jsonEmpty:"Enter JSON to process.", jsonError:"JSON error: ", copied:"Copied to clipboard.", copyFailed:"Could not copy. Select the text and copy it manually.", colorError:"Enter a HEX color in #RRGGBB format.", gradientCopied:"Gradient CSS copied.", formatEmpty:"Enter code to format.", formatDone:"Formatting complete (basic heuristics).", pwChoose:"Choose at least one character set.", pwGenerated:"Password generated locally.", base64Empty:"Enter text to process.", base64Encoded:"Text encoded to Base64.", base64Decoded:"Base64 decoded as UTF-8.", base64Error:"Could not decode Base64. Check the input.", qrEmptyError:"Enter text or a URL for the QR code.", qrUnavailable:"QR library is unavailable. Check your internet connection and reload.", qrDone:"QR code created.", qrNoResult:"Generate a QR code first.", randomDone:"Random color generated."
    }
  };
  const toolTitles = {json:["JSON Studio","JSON Studio"],colors:["Color Lab","Color Lab"],format:["Code Formatter","Форматирование кода"],password:["Password Lab","Генератор паролей"],base64:["Base64 Studio","Base64 Studio"],qr:["QR Generator","Генератор QR-кодов"]};
  function msg(key){return dict[lang][key] || key;}
  function toast(text){const el=$("toast");el.textContent=text;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
  function status(id,text,type="info"){const el=$(id);el.textContent=text;el.className="status-box show "+type;}
  function hideStatus(id){$(id).className="status-box";}
  async function copyText(text){try{if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(text);}else{const ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();const ok=document.execCommand("copy");ta.remove();if(!ok)throw new Error("copy");}toast(msg("copied"));}catch(e){toast(msg("copyFailed"));}}
  function setTool(tool){document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.tool===tool));document.querySelectorAll(".tool-panel").forEach(p=>p.classList.toggle("active",p.dataset.panel===tool));$("toolTitle").textContent=toolTitles[tool][lang==="ru"?1:0];}
  $("toolNav").addEventListener("click",e=>{const b=e.target.closest("[data-tool]");if(b)setTool(b.dataset.tool);});
  function applyLanguage(){
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[lang][k]!==undefined)el.innerHTML=dict[lang][k];});
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(dict[lang][k]!==undefined)el.placeholder=dict[lang][k];});
    $("langToggle").textContent=lang==="ru"?"EN":"RU";
    const active=document.querySelector(".nav-item.active");if(active)setTool(active.dataset.tool);
  }
  $("langToggle").addEventListener("click",()=>{lang=lang==="ru"?"en":"ru";applyLanguage();});
  $("year").textContent=new Date().getFullYear();

  // JSON tools
  function processJson(mode){
    const input=$("jsonInput").value.trim();hideStatus("jsonStatus");
    if(!input){status("jsonStatus",msg("jsonEmpty"),"error");return;}
    try{const parsed=JSON.parse(input);if(mode==="pretty")$("jsonOutput").value=JSON.stringify(parsed,null,2);else if(mode==="minify")$("jsonOutput").value=JSON.stringify(parsed);else $("jsonOutput").value=JSON.stringify(parsed,null,2);status("jsonStatus",msg(mode==="pretty"?"jsonPrettyDone":mode==="minify"?"jsonMinified":"jsonValid"),"ok");}
    catch(e){status("jsonStatus",msg("jsonError")+e.message,"error");}
  }
  $("jsonPretty").addEventListener("click",()=>processJson("pretty"));$("jsonMinify").addEventListener("click",()=>processJson("minify"));$("jsonValidate").addEventListener("click",()=>processJson("validate"));
  $("jsonClear").addEventListener("click",()=>{$("jsonInput").value="";$("jsonOutput").value="";hideStatus("jsonStatus");});
  $("jsonCopy").addEventListener("click",()=>{if($("jsonOutput").value)copyText($("jsonOutput").value);else toast(msg("jsonEmpty"));});

  // Color tools
  function validHex(v){return /^#[0-9a-fA-F]{6}$/.test(v);}
  function hexToRgb(hex){const n=parseInt(hex.slice(1),16);return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};}
  function rgbToHsl(r,g,b){r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;let h=0,s=0,l=(max+min)/2;if(d){s=d/(1-Math.abs(2*l-1));switch(max){case r:h=((g-b)/d)%6;break;case g:h=(b-r)/d+2;break;default:h=(r-g)/d+4;}h*=60;if(h<0)h+=360;}return {h:Math.round(h),s:Math.round(s*100),l:Math.round(l*100)};}
  function updateColor(hex){if(!validHex(hex))return false;hex=hex.toUpperCase();$("hexInput").value=hex;$("colorPicker").value=hex.toLowerCase();$("hexLarge").textContent=hex;$("colorPreview").style.background=hex;const {r,g,b}=hexToRgb(hex);$("rgbValue").textContent=`${r}, ${g}, ${b}`;const h=rgbToHsl(r,g,b);$("hslValue").textContent=`${h.h}, ${h.s}%, ${h.l}%`;return true;}
  $("colorPicker").addEventListener("input",e=>updateColor(e.target.value));$("hexInput").addEventListener("change",e=>{if(!updateColor(e.target.value))status("jsonStatus",msg("colorError"),"error");});
  $("copyHex").addEventListener("click",()=>copyText($("hexInput").value));
  document.querySelectorAll("[data-copy-target]").forEach(b=>b.addEventListener("click",()=>copyText($(b.dataset.copyTarget).textContent)));
  function updateGradient(){const a=$("gradientA").value,b=$("gradientB").value,angle=$("gradientAngle").value;const css=`linear-gradient(${angle}deg, ${a}, ${b})`; $("gradientPreview").style.background=css;$("gradientCss").value=`background: ${css};`;$("angleValue").textContent=angle+"°";}
  ["gradientA","gradientB","gradientAngle"].forEach(id=>$(id).addEventListener("input",updateGradient));
  $("copyGradient").addEventListener("click",()=>copyText($("gradientCss").value));
  $("randomColor").addEventListener("click",()=>{const hex="#"+Array.from({length:3},()=>Math.floor(Math.random()*256).toString(16).padStart(2,"0")).join("");updateColor(hex);$("gradientA").value=hex.toLowerCase();updateGradient();toast(msg("randomDone"));});
  updateColor("#6c63ff");updateGradient();

  // Simple dependency-free formatter (best-effort, not a full parser).
  function formatHtml(src){let s=src.replace(/>\s*</g,">\n<").trim(),lines=s.split(/\r?\n/),out=[],depth=0;for(let line of lines){line=line.trim();if(!line)continue;if(/^<\/[^>]+/.test(line))depth=Math.max(0,depth-1);out.push("  ".repeat(depth)+line);if(/^<([a-zA-Z][\w:-]*)(?:\s[^>]*)?>$/.test(line)&&!/^<\//.test(line)&&!/\/>$/.test(line)&&!/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b/i.test(line)&&!/<\/[\w:-]+\s*>$/.test(line))depth++;}return out.join("\n");}
  function formatCss(src){return src.replace(/\s*([{}:;,])\s*/g,"$1 ").replace(/\s*\{\s*/g," {\n  ").replace(/;\s*/g,";\n  ").replace(/\s*}\s*/g,"\n}\n\n").replace(/,\s*/g,", ").replace(/\n  \n/g,"\n").trim();}
  function formatJs(src){let out="",indent=0,quote=null,escape=false,lineStart=true;const pad=()=> "  ".repeat(Math.max(0,indent));for(let i=0;i<src.length;i++){const c=src[i];if(lineStart&&c!==" "&&c!=="\t"&&c!=="\n"){out+=pad();lineStart=false;}if(quote){out+=c;if(escape)escape=false;else if(c==="\\")escape=true;else if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==="`"){quote=c;out+=c;continue;}if(c==="{"){out=out.trimEnd()+" {\n";indent++;lineStart=true;}else if(c==="}"){out=out.trimEnd()+"\n";indent=Math.max(0,indent-1);out+=pad()+"}\n";lineStart=true;}else if(c===";"){out=out.trimEnd()+";\n";lineStart=true;}else if(c==="\n"||c==="\r"){if(!lineStart){out=out.trimEnd()+"\n";lineStart=true;}}else if(c===","){out+=", ";}else if(c===" "||c==="\t"){if(!lineStart&&!out.endsWith(" "))out+=" ";}else out+=c;}return out.trim();}
  $("formatRun").addEventListener("click",()=>{const src=$("formatInput").value;if(!src.trim()){status("formatStatus",msg("formatEmpty"),"error");return;}let result;const type=$("formatType").value;if(type==="html")result=formatHtml(src);else if(type==="css")result=formatCss(src);else result=formatJs(src);$("formatOutput").value=result;status("formatStatus",msg("formatDone"),"ok");});
  $("formatClear").addEventListener("click",()=>{$("formatInput").value="";$("formatOutput").value="";hideStatus("formatStatus");});
  $("formatCopy").addEventListener("click",()=>{if($("formatOutput").value)copyText($("formatOutput").value);else toast(msg("formatEmpty"));});

  // Password generator with unbiased crypto rejection sampling.
  $("passwordLength").addEventListener("input",()=>{$("lengthValue").textContent=$("passwordLength").value;});
  function secureIndex(max){const limit=Math.floor(256/max)*max;const a=new Uint8Array(1);do{crypto.getRandomValues(a);}while(a[0]>=limit);return a[0]%max;}
  $("generatePassword").addEventListener("click",()=>{let pools=[];if($("pwLower").checked)pools.push("abcdefghijklmnopqrstuvwxyz");if($("pwUpper").checked)pools.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");if($("pwNumbers").checked)pools.push("0123456789");if($("pwSymbols").checked)pools.push("!@#$%^&*()-_=+[]{}:,.?");if(!pools.length){status("passwordStatus",msg("pwChoose"),"error");return;}if(!window.crypto||!crypto.getRandomValues){status("passwordStatus","Secure random generator unavailable in this browser.","error");return;}const all=pools.join("");let chars=pools.map(pool=>pool[secureIndex(pool.length)]);while(chars.length<Number($("passwordLength").value))chars.push(all[secureIndex(all.length)]);for(let i=chars.length-1;i>0;i--){const j=secureIndex(i+1);[chars[i],chars[j]]=[chars[j],chars[i]];} $("passwordOutput").value=chars.join("");status("passwordStatus",msg("pwGenerated"),"ok");});
  $("passwordCopy").addEventListener("click",()=>{if($("passwordOutput").value)copyText($("passwordOutput").value);else toast(msg("pwChoose"));});
  $("passwordClear").addEventListener("click",()=>{$("passwordOutput").value="";hideStatus("passwordStatus");});

  // UTF-8 safe Base64 conversion.
  $("base64Encode").addEventListener("click",()=>{const s=$("base64Input").value;if(!s){status("base64Status",msg("base64Empty"),"error");return;}try{$("base64Output").value=btoa(unescape(encodeURIComponent(s)));status("base64Status",msg("base64Encoded"),"ok");}catch(e){status("base64Status",msg("base64Error"),"error");}});
  $("base64Decode").addEventListener("click",()=>{const s=$("base64Input").value.trim();if(!s){status("base64Status",msg("base64Empty"),"error");return;}try{const normalized=s.replace(/\s/g,"");if(!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(normalized))throw new Error("invalid");$("base64Output").value=decodeURIComponent(escape(atob(normalized)));status("base64Status",msg("base64Decoded"),"ok");}catch(e){status("base64Status",msg("base64Error"),"error");}});
  $("base64Clear").addEventListener("click",()=>{$("base64Input").value="";$("base64Output").value="";hideStatus("base64Status");});
  $("base64Copy").addEventListener("click",()=>{if($("base64Output").value)copyText($("base64Output").value);else toast(msg("base64Empty"));});

  // QR generation via qrcodejs loaded from CDN; only enables download after successful generation.
  let qrInstance=null;
  $("qrGenerate").addEventListener("click",()=>{const text=$("qrInput").value.trim();if(!text){status("qrStatus",msg("qrEmptyError"),"error");return;}if(typeof window.QRCode==="undefined"){status("qrStatus",msg("qrUnavailable"),"error");return;}const out=$("qrOutput");out.innerHTML="";try{qrInstance=new QRCode(out,{text,width:Number($("qrSize").value),height:Number($("qrSize").value),colorDark:"#080b16",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});$("qrDownload").disabled=false;status("qrStatus",msg("qrDone"),"ok");}catch(e){$("qrDownload").disabled=true;status("qrStatus",msg("qrUnavailable"),"error");}});
  $("qrClear").addEventListener("click",()=>{$("qrInput").value="";$("qrOutput").innerHTML=`<span>${msg("qrEmpty")}</span>`;$("qrDownload").disabled=true;hideStatus("qrStatus");qrInstance=null;});
  $("qrDownload").addEventListener("click",()=>{const out=$("qrOutput");const canvas=out.querySelector("canvas");const img=out.querySelector("img");let url;if(canvas)url=canvas.toDataURL("image/png");else if(img){const c=document.createElement("canvas");c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext("2d");ctx.drawImage(img,0,0);url=c.toDataURL("image/png");}else{status("qrStatus",msg("qrNoResult"),"error");return;}const a=document.createElement("a");a.href=url;a.download="devkit-qr.png";a.click();});
})();
