const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu",
    "hi-IN": "Hindi",
    "en-GB": "English"
}




const options = document.querySelector("#Users");
const options2 = document.querySelector("#UserShow")
const input = document.getElementById("textArea")
const button = document.getElementById("button")
const show = document.querySelector("#actualResultView")
const mic1 = document.getElementById("mic1")
const mic2 = document.getElementById("mic2")
const copyIcon1 = document.getElementById("copy1")
const copyIcon2 = document.getElementById("copy2")
let answerValue;
options2.insertAdjacentHTML('beforeend', `<option value="hi-IN">Hindi</option>`)
options.insertAdjacentHTML('beforeend', `<option value="en-GB">English</optsion>`)

for (country in countries) {
    console.log(country)
    //en-GB

    options.innerHTML += ` <option value="${country}">${countries[country]}</option>`
    options2.innerHTML += ` <option value="${country}">${countries[country]}</option>`
}

button.addEventListener("click", async () => {
    let userValue = input.value
    if (userValue != "") {
        let tfrom = options.value
        let tto = options2.value
        console.log(tfrom)
        console.log(tto)
        show.textContent = "loading"
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${userValue}&langpair=${tfrom}|${tto}`);
        const data = await response.json();
        show.textContent = ""
        show.textContent = data.responseData.translatedText
        answerValue = data.responseData.translatedText
        console.log(data)
    } else {
        show.textContent = "please type something"
    }
})


mic1.addEventListener("click", () => {
    utternance = new SpeechSynthesisUtterance(input.value)
    utternance.lang = options.value
    speechSynthesis.speak(utternance)
})


mic2.addEventListener("click", () => {
    utternance = new SpeechSynthesisUtterance(answerValue)
    utternance.lang = options2.value
    speechSynthesis.speak(utternance)
})



copyIcon1.addEventListener("click", () => {
    console.log(input.value)

    navigator.clipboard.writeText(input.value);
    window.alert("text Copied!")
})

copyIcon2.addEventListener("click", () => {
    console.log(show.textContent)

    navigator.clipboard.writeText(show.textContent);
    window.alert("text Copied!")
})
