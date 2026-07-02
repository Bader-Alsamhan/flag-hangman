// ---------------------------------------------------------------
// Data: all 195 countries (193 UN members + Vatican City + Palestine)
// code = ISO alpha-2 (flag image), a3 = ISO alpha-3 (map outline),
// lat/lon = approximate centroid for the map marker
// ---------------------------------------------------------------
const COUNTRIES = [
  // --- Europe ---
  { name: "Albania", code: "al", a3: "ALB", lat: 41, lon: 20, difficulty: "Hard" },
  { name: "Andorra", code: "ad", a3: "AND", lat: 42.5, lon: 1.5, difficulty: "Hard" },
  { name: "Austria", code: "at", a3: "AUT", lat: 47.5, lon: 14.5, difficulty: "Medium" },
  { name: "Belarus", code: "by", a3: "BLR", lat: 53, lon: 28, difficulty: "Hard" },
  { name: "Belgium", code: "be", a3: "BEL", lat: 50.5, lon: 4.5, difficulty: "Medium" },
  { name: "Bosnia and Herzegovina", code: "ba", a3: "BIH", lat: 44, lon: 18, difficulty: "Hard" },
  { name: "Bulgaria", code: "bg", a3: "BGR", lat: 42.7, lon: 25, difficulty: "Hard" },
  { name: "Croatia", code: "hr", a3: "HRV", lat: 45, lon: 15.5, difficulty: "Hard" },
  { name: "Cyprus", code: "cy", a3: "CYP", lat: 35, lon: 33, difficulty: "Hard" },
  { name: "Czech Republic", code: "cz", a3: "CZE", lat: 49.8, lon: 15.5, difficulty: "Hard" },
  { name: "Denmark", code: "dk", a3: "DNK", lat: 56, lon: 10, difficulty: "Medium" },
  { name: "Estonia", code: "ee", a3: "EST", lat: 58.6, lon: 25, difficulty: "Hard" },
  { name: "Finland", code: "fi", a3: "FIN", lat: 64, lon: 26, difficulty: "Medium" },
  { name: "France", code: "fr", a3: "FRA", lat: 46, lon: 2, difficulty: "Easy" },
  { name: "Germany", code: "de", a3: "DEU", lat: 51, lon: 10, difficulty: "Easy" },
  { name: "Greece", code: "gr", a3: "GRC", lat: 39, lon: 22, difficulty: "Medium" },
  { name: "Hungary", code: "hu", a3: "HUN", lat: 47, lon: 19, difficulty: "Medium" },
  { name: "Iceland", code: "is", a3: "ISL", lat: 65, lon: -18, difficulty: "Hard" },
  { name: "Ireland", code: "ie", a3: "IRL", lat: 53, lon: -8, difficulty: "Medium" },
  { name: "Italy", code: "it", a3: "ITA", lat: 42, lon: 12, difficulty: "Easy" },
  { name: "Latvia", code: "lv", a3: "LVA", lat: 57, lon: 25, difficulty: "Hard" },
  { name: "Liechtenstein", code: "li", a3: "LIE", lat: 47.16, lon: 9.55, difficulty: "Hard" },
  { name: "Lithuania", code: "lt", a3: "LTU", lat: 55.2, lon: 24, difficulty: "Hard" },
  { name: "Luxembourg", code: "lu", a3: "LUX", lat: 49.8, lon: 6.1, difficulty: "Hard" },
  { name: "Malta", code: "mt", a3: "MLT", lat: 35.9, lon: 14.4, difficulty: "Hard" },
  { name: "Moldova", code: "md", a3: "MDA", lat: 47, lon: 28.5, difficulty: "Hard" },
  { name: "Monaco", code: "mc", a3: "MCO", lat: 43.73, lon: 7.42, difficulty: "Hard" },
  { name: "Montenegro", code: "me", a3: "MNE", lat: 42.7, lon: 19.3, difficulty: "Hard" },
  { name: "Netherlands", code: "nl", a3: "NLD", lat: 52.2, lon: 5.3, difficulty: "Medium" },
  { name: "North Macedonia", code: "mk", a3: "MKD", lat: 41.6, lon: 21.7, difficulty: "Hard" },
  { name: "Norway", code: "no", a3: "NOR", lat: 61, lon: 8, difficulty: "Medium" },
  { name: "Poland", code: "pl", a3: "POL", lat: 52, lon: 19, difficulty: "Medium" },
  { name: "Portugal", code: "pt", a3: "PRT", lat: 39.5, lon: -8, difficulty: "Medium" },
  { name: "Romania", code: "ro", a3: "ROU", lat: 46, lon: 25, difficulty: "Medium" },
  { name: "Russia", code: "ru", a3: "RUS", lat: 61, lon: 90, difficulty: "Easy" },
  { name: "San Marino", code: "sm", a3: "SMR", lat: 43.94, lon: 12.46, difficulty: "Hard" },
  { name: "Serbia", code: "rs", a3: "SRB", lat: 44, lon: 21, difficulty: "Hard" },
  { name: "Slovakia", code: "sk", a3: "SVK", lat: 48.7, lon: 19.5, difficulty: "Hard" },
  { name: "Slovenia", code: "si", a3: "SVN", lat: 46.1, lon: 14.8, difficulty: "Hard" },
  { name: "Spain", code: "es", a3: "ESP", lat: 40, lon: -4, difficulty: "Easy" },
  { name: "Sweden", code: "se", a3: "SWE", lat: 62, lon: 15, difficulty: "Medium" },
  { name: "Switzerland", code: "ch", a3: "CHE", lat: 46.8, lon: 8.2, difficulty: "Easy" },
  { name: "Ukraine", code: "ua", a3: "UKR", lat: 49, lon: 32, difficulty: "Medium" },
  { name: "United Kingdom", code: "gb", a3: "GBR", lat: 54, lon: -2, difficulty: "Easy" },
  { name: "Vatican City", code: "va", a3: "VAT", lat: 41.9, lon: 12.45, difficulty: "Hard" },

  // --- Asia & Middle East ---
  { name: "Afghanistan", code: "af", a3: "AFG", lat: 34, lon: 66, difficulty: "Hard" },
  { name: "Armenia", code: "am", a3: "ARM", lat: 40.2, lon: 45, difficulty: "Hard" },
  { name: "Azerbaijan", code: "az", a3: "AZE", lat: 40.3, lon: 47.7, difficulty: "Hard" },
  { name: "Bahrain", code: "bh", a3: "BHR", lat: 26, lon: 50.5, difficulty: "Hard" },
  { name: "Bangladesh", code: "bd", a3: "BGD", lat: 24, lon: 90, difficulty: "Hard" },
  { name: "Bhutan", code: "bt", a3: "BTN", lat: 27.5, lon: 90.5, difficulty: "Hard" },
  { name: "Brunei", code: "bn", a3: "BRN", lat: 4.5, lon: 114.7, difficulty: "Hard" },
  { name: "Cambodia", code: "kh", a3: "KHM", lat: 12.5, lon: 105, difficulty: "Hard" },
  { name: "China", code: "cn", a3: "CHN", lat: 35, lon: 105, difficulty: "Easy" },
  { name: "Georgia", code: "ge", a3: "GEO", lat: 42, lon: 43.5, difficulty: "Hard" },
  { name: "India", code: "in", a3: "IND", lat: 21, lon: 78, difficulty: "Easy" },
  { name: "Indonesia", code: "id", a3: "IDN", lat: -2, lon: 118, difficulty: "Medium" },
  { name: "Iran", code: "ir", a3: "IRN", lat: 32, lon: 53, difficulty: "Hard" },
  { name: "Iraq", code: "iq", a3: "IRQ", lat: 33, lon: 44, difficulty: "Hard" },
  { name: "Israel", code: "il", a3: "ISR", lat: 31.5, lon: 35, difficulty: "Medium" },
  { name: "Japan", code: "jp", a3: "JPN", lat: 36, lon: 138, difficulty: "Easy" },
  { name: "Jordan", code: "jo", a3: "JOR", lat: 31, lon: 36, difficulty: "Hard" },
  { name: "Kazakhstan", code: "kz", a3: "KAZ", lat: 48, lon: 68, difficulty: "Hard" },
  { name: "Kuwait", code: "kw", a3: "KWT", lat: 29.3, lon: 47.5, difficulty: "Hard" },
  { name: "Kyrgyzstan", code: "kg", a3: "KGZ", lat: 41.2, lon: 74.7, difficulty: "Hard" },
  { name: "Laos", code: "la", a3: "LAO", lat: 18, lon: 104, difficulty: "Hard" },
  { name: "Lebanon", code: "lb", a3: "LBN", lat: 33.9, lon: 35.8, difficulty: "Hard" },
  { name: "Malaysia", code: "my", a3: "MYS", lat: 4, lon: 102, difficulty: "Hard" },
  { name: "Maldives", code: "mv", a3: "MDV", lat: 3.2, lon: 73, difficulty: "Hard" },
  { name: "Mongolia", code: "mn", a3: "MNG", lat: 46.8, lon: 103, difficulty: "Hard" },
  { name: "Myanmar", code: "mm", a3: "MMR", lat: 21, lon: 96, difficulty: "Hard" },
  { name: "Nepal", code: "np", a3: "NPL", lat: 28, lon: 84, difficulty: "Hard" },
  { name: "North Korea", code: "kp", a3: "PRK", lat: 40, lon: 127, difficulty: "Hard" },
  { name: "Oman", code: "om", a3: "OMN", lat: 20.5, lon: 56, difficulty: "Hard" },
  { name: "Pakistan", code: "pk", a3: "PAK", lat: 30, lon: 69, difficulty: "Hard" },
  { name: "Palestine", code: "ps", a3: "PSE", lat: 31.9, lon: 35.2, difficulty: "Hard" },
  { name: "Philippines", code: "ph", a3: "PHL", lat: 12, lon: 122, difficulty: "Hard" },
  { name: "Qatar", code: "qa", a3: "QAT", lat: 25.3, lon: 51.2, difficulty: "Hard" },
  { name: "Saudi Arabia", code: "sa", a3: "SAU", lat: 24, lon: 45, difficulty: "Hard" },
  { name: "Singapore", code: "sg", a3: "SGP", lat: 1.35, lon: 103.8, difficulty: "Medium" },
  { name: "South Korea", code: "kr", a3: "KOR", lat: 36, lon: 128, difficulty: "Medium" },
  { name: "Sri Lanka", code: "lk", a3: "LKA", lat: 7.8, lon: 80.7, difficulty: "Hard" },
  { name: "Syria", code: "sy", a3: "SYR", lat: 35, lon: 38.5, difficulty: "Hard" },
  { name: "Tajikistan", code: "tj", a3: "TJK", lat: 38.9, lon: 71, difficulty: "Hard" },
  { name: "Thailand", code: "th", a3: "THA", lat: 15, lon: 101, difficulty: "Medium" },
  { name: "Timor-Leste", code: "tl", a3: "TLS", lat: -8.9, lon: 125.9, difficulty: "Hard" },
  { name: "Turkey", code: "tr", a3: "TUR", lat: 39, lon: 35, difficulty: "Medium" },
  { name: "Turkmenistan", code: "tm", a3: "TKM", lat: 39, lon: 59.5, difficulty: "Hard" },
  { name: "United Arab Emirates", code: "ae", a3: "ARE", lat: 24, lon: 54, difficulty: "Hard" },
  { name: "Uzbekistan", code: "uz", a3: "UZB", lat: 41.5, lon: 64, difficulty: "Hard" },
  { name: "Vietnam", code: "vn", a3: "VNM", lat: 16, lon: 108, difficulty: "Medium" },
  { name: "Yemen", code: "ye", a3: "YEM", lat: 15.5, lon: 47.5, difficulty: "Hard" },

  // --- Africa ---
  { name: "Algeria", code: "dz", a3: "DZA", lat: 28, lon: 3, difficulty: "Hard" },
  { name: "Angola", code: "ao", a3: "AGO", lat: -12.5, lon: 17.5, difficulty: "Hard" },
  { name: "Benin", code: "bj", a3: "BEN", lat: 9.5, lon: 2.3, difficulty: "Hard" },
  { name: "Botswana", code: "bw", a3: "BWA", lat: -22, lon: 24, difficulty: "Hard" },
  { name: "Burkina Faso", code: "bf", a3: "BFA", lat: 12.5, lon: -1.7, difficulty: "Hard" },
  { name: "Burundi", code: "bi", a3: "BDI", lat: -3.4, lon: 29.9, difficulty: "Hard" },
  { name: "Cabo Verde", code: "cv", a3: "CPV", lat: 16, lon: -24, difficulty: "Hard" },
  { name: "Cameroon", code: "cm", a3: "CMR", lat: 5.7, lon: 12.7, difficulty: "Hard" },
  { name: "Central African Republic", code: "cf", a3: "CAF", lat: 6.6, lon: 20.9, difficulty: "Hard" },
  { name: "Chad", code: "td", a3: "TCD", lat: 15.5, lon: 19, difficulty: "Hard" },
  { name: "Comoros", code: "km", a3: "COM", lat: -11.9, lon: 43.9, difficulty: "Hard" },
  { name: "Republic of the Congo", code: "cg", a3: "COG", lat: -0.7, lon: 15.6, difficulty: "Hard" },
  { name: "DR Congo", code: "cd", a3: "COD", lat: -3, lon: 23, difficulty: "Hard" },
  { name: "Ivory Coast", code: "ci", a3: "CIV", lat: 7.5, lon: -5.5, difficulty: "Hard" },
  { name: "Djibouti", code: "dj", a3: "DJI", lat: 11.8, lon: 42.6, difficulty: "Hard" },
  { name: "Egypt", code: "eg", a3: "EGY", lat: 26, lon: 30, difficulty: "Medium" },
  { name: "Equatorial Guinea", code: "gq", a3: "GNQ", lat: 1.6, lon: 10.5, difficulty: "Hard" },
  { name: "Eritrea", code: "er", a3: "ERI", lat: 15.2, lon: 39, difficulty: "Hard" },
  { name: "Eswatini", code: "sz", a3: "SWZ", lat: -26.5, lon: 31.5, difficulty: "Hard" },
  { name: "Ethiopia", code: "et", a3: "ETH", lat: 9, lon: 40, difficulty: "Hard" },
  { name: "Gabon", code: "ga", a3: "GAB", lat: -0.6, lon: 11.6, difficulty: "Hard" },
  { name: "Gambia", code: "gm", a3: "GMB", lat: 13.4, lon: -15.4, difficulty: "Hard" },
  { name: "Ghana", code: "gh", a3: "GHA", lat: 8, lon: -1, difficulty: "Hard" },
  { name: "Guinea", code: "gn", a3: "GIN", lat: 10.4, lon: -11, difficulty: "Hard" },
  { name: "Guinea-Bissau", code: "gw", a3: "GNB", lat: 12, lon: -15, difficulty: "Hard" },
  { name: "Kenya", code: "ke", a3: "KEN", lat: 0.5, lon: 38, difficulty: "Hard" },
  { name: "Lesotho", code: "ls", a3: "LSO", lat: -29.6, lon: 28.2, difficulty: "Hard" },
  { name: "Liberia", code: "lr", a3: "LBR", lat: 6.5, lon: -9.4, difficulty: "Hard" },
  { name: "Libya", code: "ly", a3: "LBY", lat: 27, lon: 17, difficulty: "Hard" },
  { name: "Madagascar", code: "mg", a3: "MDG", lat: -19, lon: 47, difficulty: "Hard" },
  { name: "Malawi", code: "mw", a3: "MWI", lat: -13.3, lon: 34.3, difficulty: "Hard" },
  { name: "Mali", code: "ml", a3: "MLI", lat: 17.5, lon: -4, difficulty: "Hard" },
  { name: "Mauritania", code: "mr", a3: "MRT", lat: 20.3, lon: -10.3, difficulty: "Hard" },
  { name: "Mauritius", code: "mu", a3: "MUS", lat: -20.3, lon: 57.6, difficulty: "Hard" },
  { name: "Morocco", code: "ma", a3: "MAR", lat: 32, lon: -6, difficulty: "Hard" },
  { name: "Mozambique", code: "mz", a3: "MOZ", lat: -18.3, lon: 35.5, difficulty: "Hard" },
  { name: "Namibia", code: "na", a3: "NAM", lat: -22, lon: 17, difficulty: "Hard" },
  { name: "Niger", code: "ne", a3: "NER", lat: 17.6, lon: 8.1, difficulty: "Hard" },
  { name: "Nigeria", code: "ng", a3: "NGA", lat: 9, lon: 8, difficulty: "Medium" },
  { name: "Rwanda", code: "rw", a3: "RWA", lat: -2, lon: 29.9, difficulty: "Hard" },
  { name: "Sao Tome and Principe", code: "st", a3: "STP", lat: 0.2, lon: 6.6, difficulty: "Hard" },
  { name: "Senegal", code: "sn", a3: "SEN", lat: 14.5, lon: -14.5, difficulty: "Hard" },
  { name: "Seychelles", code: "sc", a3: "SYC", lat: -4.6, lon: 55.4, difficulty: "Hard" },
  { name: "Sierra Leone", code: "sl", a3: "SLE", lat: 8.5, lon: -11.8, difficulty: "Hard" },
  { name: "Somalia", code: "so", a3: "SOM", lat: 5.2, lon: 46.2, difficulty: "Hard" },
  { name: "South Africa", code: "za", a3: "ZAF", lat: -29, lon: 24, difficulty: "Medium" },
  { name: "South Sudan", code: "ss", a3: "SSD", lat: 7.3, lon: 30, difficulty: "Hard" },
  { name: "Sudan", code: "sd", a3: "SDN", lat: 15.5, lon: 30, difficulty: "Hard" },
  { name: "Tanzania", code: "tz", a3: "TZA", lat: -6.4, lon: 34.9, difficulty: "Hard" },
  { name: "Togo", code: "tg", a3: "TGO", lat: 8.6, lon: 1, difficulty: "Hard" },
  { name: "Tunisia", code: "tn", a3: "TUN", lat: 34, lon: 9.5, difficulty: "Hard" },
  { name: "Uganda", code: "ug", a3: "UGA", lat: 1.4, lon: 32.3, difficulty: "Hard" },
  { name: "Zambia", code: "zm", a3: "ZMB", lat: -13.5, lon: 27.8, difficulty: "Hard" },
  { name: "Zimbabwe", code: "zw", a3: "ZWE", lat: -19, lon: 29.8, difficulty: "Hard" },

  // --- Americas ---
  { name: "Antigua and Barbuda", code: "ag", a3: "ATG", lat: 17.1, lon: -61.8, difficulty: "Hard" },
  { name: "Argentina", code: "ar", a3: "ARG", lat: -38, lon: -63, difficulty: "Medium" },
  { name: "Bahamas", code: "bs", a3: "BHS", lat: 24.25, lon: -76, difficulty: "Hard" },
  { name: "Barbados", code: "bb", a3: "BRB", lat: 13.2, lon: -59.5, difficulty: "Hard" },
  { name: "Belize", code: "bz", a3: "BLZ", lat: 17.2, lon: -88.5, difficulty: "Hard" },
  { name: "Bolivia", code: "bo", a3: "BOL", lat: -17, lon: -65, difficulty: "Hard" },
  { name: "Brazil", code: "br", a3: "BRA", lat: -14, lon: -51, difficulty: "Easy" },
  { name: "Canada", code: "ca", a3: "CAN", lat: 56, lon: -106, difficulty: "Easy" },
  { name: "Chile", code: "cl", a3: "CHL", lat: -33, lon: -71, difficulty: "Medium" },
  { name: "Colombia", code: "co", a3: "COL", lat: 4, lon: -73, difficulty: "Medium" },
  { name: "Costa Rica", code: "cr", a3: "CRI", lat: 10, lon: -84, difficulty: "Hard" },
  { name: "Cuba", code: "cu", a3: "CUB", lat: 21.5, lon: -79, difficulty: "Medium" },
  { name: "Dominica", code: "dm", a3: "DMA", lat: 15.4, lon: -61.4, difficulty: "Hard" },
  { name: "Dominican Republic", code: "do", a3: "DOM", lat: 19, lon: -70.7, difficulty: "Hard" },
  { name: "Ecuador", code: "ec", a3: "ECU", lat: -1.8, lon: -78.2, difficulty: "Hard" },
  { name: "El Salvador", code: "sv", a3: "SLV", lat: 13.8, lon: -88.9, difficulty: "Hard" },
  { name: "Grenada", code: "gd", a3: "GRD", lat: 12.1, lon: -61.7, difficulty: "Hard" },
  { name: "Guatemala", code: "gt", a3: "GTM", lat: 15.8, lon: -90.2, difficulty: "Hard" },
  { name: "Guyana", code: "gy", a3: "GUY", lat: 5, lon: -58.9, difficulty: "Hard" },
  { name: "Haiti", code: "ht", a3: "HTI", lat: 19, lon: -72.4, difficulty: "Hard" },
  { name: "Honduras", code: "hn", a3: "HND", lat: 15.2, lon: -86.2, difficulty: "Hard" },
  { name: "Jamaica", code: "jm", a3: "JAM", lat: 18, lon: -77, difficulty: "Hard" },
  { name: "Mexico", code: "mx", a3: "MEX", lat: 23, lon: -102, difficulty: "Easy" },
  { name: "Nicaragua", code: "ni", a3: "NIC", lat: 12.9, lon: -85.2, difficulty: "Hard" },
  { name: "Panama", code: "pa", a3: "PAN", lat: 9, lon: -80, difficulty: "Hard" },
  { name: "Paraguay", code: "py", a3: "PRY", lat: -23.4, lon: -58.4, difficulty: "Hard" },
  { name: "Peru", code: "pe", a3: "PER", lat: -9, lon: -75, difficulty: "Hard" },
  { name: "Saint Kitts and Nevis", code: "kn", a3: "KNA", lat: 17.3, lon: -62.7, difficulty: "Hard" },
  { name: "Saint Lucia", code: "lc", a3: "LCA", lat: 13.9, lon: -61, difficulty: "Hard" },
  { name: "Saint Vincent and the Grenadines", code: "vc", a3: "VCT", lat: 13.2, lon: -61.2, difficulty: "Hard" },
  { name: "Suriname", code: "sr", a3: "SUR", lat: 4, lon: -56, difficulty: "Hard" },
  { name: "Trinidad and Tobago", code: "tt", a3: "TTO", lat: 10.4, lon: -61.3, difficulty: "Hard" },
  { name: "United States", code: "us", a3: "USA", lat: 38, lon: -97, difficulty: "Easy" },
  { name: "Uruguay", code: "uy", a3: "URY", lat: -32.5, lon: -55.8, difficulty: "Hard" },
  { name: "Venezuela", code: "ve", a3: "VEN", lat: 7, lon: -66, difficulty: "Hard" },

  // --- Oceania ---
  { name: "Australia", code: "au", a3: "AUS", lat: -25, lon: 134, difficulty: "Easy" },
  { name: "Fiji", code: "fj", a3: "FJI", lat: -17.8, lon: 178, difficulty: "Hard" },
  { name: "Kiribati", code: "ki", a3: "KIR", lat: 1.45, lon: 173, difficulty: "Hard" },
  { name: "Marshall Islands", code: "mh", a3: "MHL", lat: 7.1, lon: 171.2, difficulty: "Hard" },
  { name: "Micronesia", code: "fm", a3: "FSM", lat: 6.9, lon: 158.2, difficulty: "Hard" },
  { name: "Nauru", code: "nr", a3: "NRU", lat: -0.5, lon: 166.9, difficulty: "Hard" },
  { name: "New Zealand", code: "nz", a3: "NZL", lat: -41, lon: 174, difficulty: "Medium" },
  { name: "Palau", code: "pw", a3: "PLW", lat: 7.5, lon: 134.6, difficulty: "Hard" },
  { name: "Papua New Guinea", code: "pg", a3: "PNG", lat: -6.5, lon: 145, difficulty: "Hard" },
  { name: "Samoa", code: "ws", a3: "WSM", lat: -13.6, lon: -172.4, difficulty: "Hard" },
  { name: "Solomon Islands", code: "sb", a3: "SLB", lat: -9.6, lon: 160.2, difficulty: "Hard" },
  { name: "Tonga", code: "to", a3: "TON", lat: -21.2, lon: -175.2, difficulty: "Hard" },
  { name: "Tuvalu", code: "tv", a3: "TUV", lat: -8.5, lon: 179.1, difficulty: "Hard" },
  { name: "Vanuatu", code: "vu", a3: "VUT", lat: -15.4, lon: 166.9, difficulty: "Hard" },
];

const TOTAL_COUNTRIES = COUNTRIES.length;
const BY_CODE = Object.fromEntries(COUNTRIES.map(c => [c.code, c]));

const WORLD_GEOJSON_URL = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
// Map crops to lat 85N..60S (drops Antarctica); 2px per degree on both axes
const MAP_LAT_TOP = 85;
const MAP_LAT_BOTTOM = -60;
const MAP_W = 720;
const MAP_H = (MAP_LAT_TOP - MAP_LAT_BOTTOM) * 2;

const MAX_WRONG = 6;
const HINT_COST = 15;
const MAP_HINT_COST = 25;
const BASE_POINTS = 100;
const WRONG_PENALTY = 8;

const PROGRESS_KEY = "flagHangmanProgress";

// ---------------------------------------------------------------
// State
// ---------------------------------------------------------------
let state = {
  score: 0,
  streak: 0,
  best: Number(localStorage.getItem("flagHangmanBest") || 0),
  round: 1,
  conquered: new Set(), // codes guessed correctly; game ends when all 195 are in
  current: null,
  guessed: new Set(),
  wrongCount: 0,
  hintsUsedThisRound: 0,
  gameOver: false,
  allDone: false,
};

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify({
    score: state.score,
    streak: state.streak,
    round: state.round,
    conquered: [...state.conquered],
  }));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
    const valid = (p.conquered || []).filter(code => BY_CODE[code]);
    if (valid.length >= TOTAL_COUNTRIES) return; // finished game: start fresh
    state.score = p.score || 0;
    state.streak = p.streak || 0;
    state.round = p.round || 1;
    state.conquered = new Set(valid);
  } catch (e) { /* corrupt progress, start fresh */ }
}

function clearProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

// ---------------------------------------------------------------
// DOM refs
// ---------------------------------------------------------------
const el = {
  welcomeScreen: document.getElementById("welcome-screen"),
  welcomeProgress: document.getElementById("welcome-progress"),
  startBtn: document.getElementById("start-btn"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  best: document.getElementById("best"),
  round: document.getElementById("round"),
  flags: document.getElementById("flags"),
  flagImg: document.getElementById("flag-img"),
  difficultyBadge: document.getElementById("difficulty-badge"),
  wordDisplay: document.getElementById("word-display"),
  keyboard: document.getElementById("keyboard"),
  messageBar: document.getElementById("message-bar"),
  hintBtn: document.getElementById("hint-btn"),
  mapBtn: document.getElementById("map-btn"),
  mapPanel: document.getElementById("map-panel"),
  mapTitle: document.getElementById("map-title"),
  mapMarker: document.getElementById("map-marker"),
  worldSvg: document.getElementById("world-svg"),
  giveupBtn: document.getElementById("giveup-btn"),
  nextBtn: document.getElementById("next-btn"),
  restartBtn: document.getElementById("restart-btn"),
  livesHearts: document.getElementById("lives-hearts"),
  figureParts: document.querySelectorAll(".figure-part"),
  confettiLayer: document.getElementById("confetti-layer"),
};

// ---------------------------------------------------------------
// Sound (tiny synth beeps via WebAudio, no external files needed)
// ---------------------------------------------------------------
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}
function beep(freq, duration = 0.12, type = "sine", delay = 0, vol = 0.18) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = vol;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const t0 = ctx.currentTime + delay;
    osc.start(t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.stop(t0 + duration + 0.02);
  } catch (e) { /* audio not available, ignore */ }
}
function playCorrect() { beep(880, 0.12, "triangle"); }
function playWrong() { beep(160, 0.22, "sawtooth"); }
function playWin() {
  [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.16, "triangle", i * 0.11, 0.2));
}
function playLose() {
  [300, 220, 160].forEach((f, i) => beep(f, 0.3, "sawtooth", i * 0.18, 0.16));
}
function playGrandFinale() {
  [523, 659, 784, 1046, 784, 1046, 1318, 1568].forEach((f, i) =>
    beep(f, 0.2, "triangle", i * 0.13, 0.2));
}

// ---------------------------------------------------------------
// Game setup
// ---------------------------------------------------------------
function pickCountry() {
  // draw from countries not yet guessed correctly; a lost country stays
  // in the pool and will come back around later
  const pool = COUNTRIES.filter(c => !state.conquered.has(c.code));
  const notLast = pool.filter(c => c.code !== state.current?.code);
  const from = notLast.length > 0 ? notLast : pool;
  return from[Math.floor(Math.random() * from.length)];
}

function startRound() {
  state.current = pickCountry();
  state.guessed = new Set();
  state.wrongCount = 0;
  state.hintsUsedThisRound = 0;
  state.gameOver = false;

  el.flagImg.src = `https://flagcdn.com/w320/${state.current.code}.png`;
  el.flagImg.alt = "Guess this flag";
  el.difficultyBadge.textContent = state.current.difficulty;

  setMessage("Guess the country from its flag! 🚩", "");
  el.nextBtn.disabled = true;
  el.nextBtn.textContent = "Next Flag ➡️";
  el.hintBtn.disabled = false;
  el.mapBtn.disabled = false;
  el.giveupBtn.disabled = false;
  hideMap();

  resetHangman();
  renderLives();
  renderWord();
  renderKeyboard();
  updateStatsUI();
}

function resetHangman() {
  el.figureParts.forEach(p => p.classList.remove("show"));
}

function renderLives() {
  const remaining = MAX_WRONG - state.wrongCount;
  el.livesHearts.innerHTML = "";
  for (let i = 0; i < MAX_WRONG; i++) {
    const span = document.createElement("span");
    span.textContent = "❤️";
    if (i >= remaining) span.classList.add("heart-lost");
    el.livesHearts.appendChild(span);
  }
}

function renderWord() {
  el.wordDisplay.innerHTML = "";
  const name = state.current.name;
  for (const ch of name) {
    const box = document.createElement("div");
    if (ch === " ") {
      box.className = "letter-box space";
    } else if (!/[a-zA-Z]/.test(ch)) {
      // punctuation like the hyphen in Guinea-Bissau is always visible
      box.className = "letter-box punct";
      box.textContent = ch;
    } else {
      box.className = "letter-box";
      const upper = ch.toUpperCase();
      if (state.guessed.has(upper)) {
        box.textContent = ch;
        box.classList.add("revealed");
      }
    }
    el.wordDisplay.appendChild(box);
  }
}

function renderKeyboard() {
  el.keyboard.innerHTML = "";
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  for (const rowLetters of rows) {
    const row = document.createElement("div");
    row.className = "kb-row";
    for (const letter of rowLetters) {
      const btn = document.createElement("button");
      btn.className = "key-btn";
      btn.textContent = letter;
      btn.dataset.letter = letter;
      if (state.guessed.has(letter)) {
        btn.disabled = true;
        const nameLetters = new Set(state.current.name.toUpperCase().split(""));
        btn.classList.add(nameLetters.has(letter) ? "correct" : "wrong");
      }
      btn.addEventListener("click", () => guessLetter(letter));
      row.appendChild(btn);
    }
    el.keyboard.appendChild(row);
  }
}

function setMessage(text, tone) {
  el.messageBar.textContent = text;
  el.messageBar.classList.remove("good", "bad", "win");
  if (tone) el.messageBar.classList.add(tone);
}

// ---------------------------------------------------------------
// Guessing logic
// ---------------------------------------------------------------
function guessLetter(letter) {
  if (state.gameOver || state.guessed.has(letter)) return;
  state.guessed.add(letter);

  const nameUpper = state.current.name.toUpperCase();
  const isCorrect = nameUpper.includes(letter);

  const keyBtn = el.keyboard.querySelector(`[data-letter="${letter}"]`);

  if (isCorrect) {
    playCorrect();
    keyBtn.classList.add("correct");
    keyBtn.disabled = true;
    setMessage(`Nice! "${letter}" is in there. 🎯`, "good");
    renderWord();
    checkWin();
  } else {
    playWrong();
    keyBtn.classList.add("wrong");
    keyBtn.disabled = true;
    state.wrongCount++;
    revealHangmanPart(state.wrongCount);
    renderLives();
    state.score = Math.max(0, state.score - WRONG_PENALTY);
    updateStatsUI();
    setMessage(`Oops, no "${letter}" in this one. 💀`, "bad");
    checkLose();
  }
}

function revealHangmanPart(wrongCount) {
  const order = [
    "part-head",
    "part-body",
    "part-arm-left",
    "part-arm-right",
    "part-leg-left",
    "part-leg-right",
  ];
  const cls = order[wrongCount - 1];
  if (!cls) return;
  const partEl = document.querySelector(`.${cls}`);
  if (partEl) partEl.classList.add("show");
}

function checkWin() {
  const nameUpper = state.current.name.toUpperCase();
  const uniqueLetters = new Set(nameUpper.replace(/[^A-Z]/g, "").split(""));
  const allGuessed = [...uniqueLetters].every(l => state.guessed.has(l));
  if (allGuessed) {
    endRound(true);
  }
}

function checkLose() {
  if (state.wrongCount >= MAX_WRONG) {
    endRound(false);
  }
}

function endRound(won) {
  state.gameOver = true;
  el.hintBtn.disabled = true;
  el.mapBtn.disabled = true;
  el.giveupBtn.disabled = true;
  el.nextBtn.disabled = false;
  disableAllKeys();
  revealFullWord();
  showMap(`📍 ${state.current.name} is right here!`);

  if (won) {
    state.conquered.add(state.current.code);
    // wrong-guess and hint penalties are already deducted from state.score
    // in real time (see guessLetter / useHint), so the round bonus only
    // needs to add the base reward plus a streak bonus.
    const streakBonus = state.streak * 10;
    const roundScore = BASE_POINTS + streakBonus;
    state.score += roundScore;
    state.streak += 1;
    if (state.streak > state.best) {
      state.best = state.streak;
      localStorage.setItem("flagHangmanBest", String(state.best));
    }
    if (state.conquered.size >= TOTAL_COUNTRIES) {
      finishGame();
    } else {
      setMessage(`🎉 Correct! It's ${state.current.name}! +${roundScore} pts (${state.conquered.size}/${TOTAL_COUNTRIES} flags)`, "win");
      launchConfetti();
      playWin();
    }
  } else {
    state.streak = 0;
    setMessage(`💀 Game over! The answer was ${state.current.name}. It'll be back later...`, "bad");
    playLose();
  }
  updateStatsUI();
  if (!state.allDone) saveProgress();
}

function finishGame() {
  state.allDone = true;
  el.nextBtn.textContent = "🏆 Play Again";
  setMessage(`🏆 LEGENDARY! You conquered all ${TOTAL_COUNTRIES} flags of the world! Final score: ${state.score}`, "win");
  launchConfetti();
  setTimeout(launchConfetti, 700);
  setTimeout(launchConfetti, 1400);
  playGrandFinale();
  clearProgress();
}

function revealFullWord() {
  const nameUpper = state.current.name.toUpperCase();
  for (const ch of nameUpper) {
    if (/[A-Z]/.test(ch)) state.guessed.add(ch);
  }
  renderWord();
}

function disableAllKeys() {
  el.keyboard.querySelectorAll(".key-btn").forEach(b => (b.disabled = true));
}

function updateStatsUI() {
  el.score.textContent = state.score;
  el.streak.textContent = state.streak;
  el.best.textContent = state.best;
  el.round.textContent = state.round;
  el.flags.textContent = `${state.conquered.size}/${TOTAL_COUNTRIES}`;
}

// ---------------------------------------------------------------
// Hint / Give up / Next / Restart
// ---------------------------------------------------------------
function useHint() {
  if (state.gameOver) return;
  const nameUpper = state.current.name.toUpperCase();
  const unguessed = [...new Set(nameUpper.replace(/[^A-Z]/g, "").split(""))].filter(
    l => !state.guessed.has(l)
  );
  if (unguessed.length === 0) return;
  const letter = unguessed[Math.floor(Math.random() * unguessed.length)];
  state.hintsUsedThisRound++;
  state.score = Math.max(0, state.score - HINT_COST);
  updateStatsUI();
  guessLetter(letter);
}

// ---------------------------------------------------------------
// World map: cartoon SVG rendered from GeoJSON outlines
// (equirectangular projection cropped to 85N..60S, 2px per degree)
// ---------------------------------------------------------------
function projX(lon) { return (lon + 180) * 2; }
function projY(lat) { return (MAP_LAT_TOP - lat) * 2; }

function ringToPath(ring) {
  // rings spanning the antimeridian (e.g. Russia) get their negative
  // longitudes shifted +360 so they draw past the right edge and clip
  const lons = ring.map(p => p[0]);
  const wraps = Math.max(...lons) - Math.min(...lons) > 300;
  let d = "";
  for (let i = 0; i < ring.length; i++) {
    let [lon, lat] = ring[i];
    if (wraps && lon < 0) lon += 360;
    d += (i === 0 ? "M" : "L") + projX(lon).toFixed(1) + " " + projY(lat).toFixed(1);
  }
  return d + "Z";
}

function buildWorldMap(geojson) {
  const frag = document.createDocumentFragment();
  let i = 0;
  for (const feature of geojson.features) {
    if (feature.id === "ATA") continue; // skip Antarctica
    const geom = feature.geometry;
    const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
    let d = "";
    for (const poly of polys) {
      for (const ring of poly) d += ringToPath(ring);
    }
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("class", `country land-${i % 6}`);
    path.dataset.a3 = feature.id;
    frag.appendChild(path);
    i++;
  }
  el.worldSvg.appendChild(frag);
  // if a round ended before the fetch finished, apply the pending highlight
  if (!el.mapPanel.classList.contains("hidden")) highlightCountry();
}

async function loadWorldMap() {
  try {
    const res = await fetch(WORLD_GEOJSON_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    buildWorldMap(await res.json());
  } catch (err) {
    console.warn("World map outlines unavailable, falling back to marker only:", err);
  }
}

function highlightCountry() {
  el.worldSvg.querySelectorAll(".country.target").forEach(p => p.classList.remove("target"));
  const path = el.worldSvg.querySelector(`[data-a3="${state.current.a3}"]`);
  if (path) {
    path.classList.add("target");
    path.parentNode.appendChild(path); // draw on top so the glow isn't covered
  }
}

function showMap(title) {
  const { lat, lon } = state.current;
  el.mapMarker.style.left = (projX(lon) / MAP_W) * 100 + "%";
  el.mapMarker.style.top = (projY(lat) / MAP_H) * 100 + "%";
  highlightCountry();
  el.mapTitle.textContent = title;
  el.mapPanel.classList.remove("hidden");
}

function hideMap() {
  el.mapPanel.classList.add("hidden");
  el.worldSvg.querySelectorAll(".country.target").forEach(p => p.classList.remove("target"));
}

function useMapHint() {
  if (state.gameOver || !el.mapPanel.classList.contains("hidden")) return;
  state.score = Math.max(0, state.score - MAP_HINT_COST);
  updateStatsUI();
  el.mapBtn.disabled = true;
  showMap("🗺️ Map hint: the country is here...");
  setMessage("Map revealed! Now name that country. 🌍", "good");
}

function giveUp() {
  if (state.gameOver) return;
  state.wrongCount = MAX_WRONG;
  for (let i = 1; i <= MAX_WRONG; i++) revealHangmanPart(i);
  renderLives();
  endRound(false);
}

function nextRound() {
  if (state.allDone) {
    restartGame();
    return;
  }
  state.round += 1;
  startRound();
}

function restartGame() {
  state.score = 0;
  state.streak = 0;
  state.round = 1;
  state.conquered = new Set();
  state.allDone = false;
  clearProgress();
  startRound();
}

// ---------------------------------------------------------------
// Confetti burst
// ---------------------------------------------------------------
function launchConfetti() {
  const colors = ["#ff5da2", "#7b5cff", "#3fa9ff", "#22d6c0", "#ffcb3d", "#ff8c42", "#34d399"];
  const count = 80;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 2 + Math.random() * 1.5 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    el.confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 3800);
  }
}

// ---------------------------------------------------------------
// Event wiring
// ---------------------------------------------------------------
el.hintBtn.addEventListener("click", useHint);
el.mapBtn.addEventListener("click", useMapHint);
el.giveupBtn.addEventListener("click", giveUp);
el.nextBtn.addEventListener("click", nextRound);
el.restartBtn.addEventListener("click", restartGame);

// ---------------------------------------------------------------
// Welcome screen
// ---------------------------------------------------------------
function isWelcomeVisible() {
  return !el.welcomeScreen.classList.contains("hidden");
}

function setupWelcome() {
  if (state.conquered.size > 0) {
    el.welcomeProgress.textContent =
      `Welcome back! ${state.conquered.size}/${TOTAL_COUNTRIES} flags conquered 🎌`;
    el.startBtn.textContent = "🚀 Continue Quest";
  }
  el.startBtn.addEventListener("click", () => {
    el.welcomeScreen.classList.add("hidden");
    playCorrect(); // doubles as the start chime; the click unlocks WebAudio
  });
}

window.addEventListener("keydown", (e) => {
  if (isWelcomeVisible()) {
    if (e.key === "Enter") el.startBtn.click();
    return;
  }
  const letter = e.key.toUpperCase();
  if (letter.length === 1 && letter >= "A" && letter <= "Z") {
    guessLetter(letter);
  } else if (e.key === "Enter" && !el.nextBtn.disabled) {
    nextRound();
  }
});

// ---------------------------------------------------------------
// Boot
// ---------------------------------------------------------------
loadProgress();
setupWelcome();
loadWorldMap();
startRound();
