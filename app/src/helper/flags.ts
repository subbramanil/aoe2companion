import {keysOf} from "./util";
import {uniq} from "lodash-es";

const flagList = {
    'AD': require('../../assets/flags/AD.png'),
    'AE': require('../../assets/flags/AE.png'),
    'AF': require('../../assets/flags/AF.png'),
    'AG': require('../../assets/flags/AG.png'),
    'AI': require('../../assets/flags/AI.png'),
    'AL': require('../../assets/flags/AL.png'),
    'AM': require('../../assets/flags/AM.png'),
    'AO': require('../../assets/flags/AO.png'),
    'AR': require('../../assets/flags/AR.png'),
    'AS': require('../../assets/flags/AS.png'),
    'AT': require('../../assets/flags/AT.png'),
    'AU': require('../../assets/flags/AU.png'),
    'AW': require('../../assets/flags/AW.png'),
    'AX': require('../../assets/flags/AX.png'),
    'AZ': require('../../assets/flags/AZ.png'),
    'BA': require('../../assets/flags/BA.png'),
    'BB': require('../../assets/flags/BB.png'),
    'BD': require('../../assets/flags/BD.png'),
    'BE': require('../../assets/flags/BE.png'),
    'BF': require('../../assets/flags/BF.png'),
    'BG': require('../../assets/flags/BG.png'),
    'BH': require('../../assets/flags/BH.png'),
    'BI': require('../../assets/flags/BI.png'),
    'BJ': require('../../assets/flags/BJ.png'),
    'BL': require('../../assets/flags/BL.png'),
    'BM': require('../../assets/flags/BM.png'),
    'BN': require('../../assets/flags/BN.png'),
    'BO': require('../../assets/flags/BO.png'),
    'BR': require('../../assets/flags/BR.png'),
    'BS': require('../../assets/flags/BS.png'),
    'BT': require('../../assets/flags/BT.png'),
    'BV': require('../../assets/flags/BV.png'),
    'BW': require('../../assets/flags/BW.png'),
    'BY': require('../../assets/flags/BY.png'),
    'BZ': require('../../assets/flags/BZ.png'),
    'CA': require('../../assets/flags/CA.png'),
    'CC': require('../../assets/flags/CC.png'),
    'CD': require('../../assets/flags/CD.png'),
    'CF': require('../../assets/flags/CF.png'),
    'CG': require('../../assets/flags/CG.png'),
    'CH': require('../../assets/flags/CH.png'),
    'CI': require('../../assets/flags/CI.png'),
    'CK': require('../../assets/flags/CK.png'),
    'CL': require('../../assets/flags/CL.png'),
    'CM': require('../../assets/flags/CM.png'),
    'CN': require('../../assets/flags/CN.png'),
    'CO': require('../../assets/flags/CO.png'),
    'CR': require('../../assets/flags/CR.png'),
    'CU': require('../../assets/flags/CU.png'),
    'CV': require('../../assets/flags/CV.png'),
    'CW': require('../../assets/flags/CW.png'),
    'CX': require('../../assets/flags/CX.png'),
    'CY': require('../../assets/flags/CY.png'),
    'CZ': require('../../assets/flags/CZ.png'),
    'DE': require('../../assets/flags/DE.png'),
    'DJ': require('../../assets/flags/DJ.png'),
    'DK': require('../../assets/flags/DK.png'),
    'DM': require('../../assets/flags/DM.png'),
    'DO': require('../../assets/flags/DO.png'),
    'DZ': require('../../assets/flags/DZ.png'),
    'EC': require('../../assets/flags/EC.png'),
    'EE': require('../../assets/flags/EE.png'),
    'EG': require('../../assets/flags/EG.png'),
    'ER': require('../../assets/flags/ER.png'),
    'ES': require('../../assets/flags/ES.png'),
    'ET': require('../../assets/flags/ET.png'),
    // 'EU': require('../../assets/flags/EU.png'),
    'FI': require('../../assets/flags/FI.png'),
    'FJ': require('../../assets/flags/FJ.png'),
    'FK': require('../../assets/flags/FK.png'),
    'FM': require('../../assets/flags/FM.png'),
    'FO': require('../../assets/flags/FO.png'),
    'FR': require('../../assets/flags/FR.png'),
    'GA': require('../../assets/flags/GA.png'),
    'GB': require('../../assets/flags/GB.png'),
    'GD': require('../../assets/flags/GD.png'),
    'GE': require('../../assets/flags/GE.png'),
    'GF': require('../../assets/flags/GF.png'),
    'GG': require('../../assets/flags/GG.png'),
    'GH': require('../../assets/flags/GH.png'),
    'GI': require('../../assets/flags/GI.png'),
    'GL': require('../../assets/flags/GL.png'),
    'GM': require('../../assets/flags/GM.png'),
    'GN': require('../../assets/flags/GN.png'),
    'GP': require('../../assets/flags/GP.png'),
    'GQ': require('../../assets/flags/GQ.png'),
    'GR': require('../../assets/flags/GR.png'),
    'GS': require('../../assets/flags/GS.png'),
    'GT': require('../../assets/flags/GT.png'),
    'GU': require('../../assets/flags/GU.png'),
    'GW': require('../../assets/flags/GW.png'),
    'GY': require('../../assets/flags/GY.png'),
    'HK': require('../../assets/flags/HK.png'),
    'HM': require('../../assets/flags/HM.png'),
    'HN': require('../../assets/flags/HN.png'),
    'HR': require('../../assets/flags/HR.png'),
    'HT': require('../../assets/flags/HT.png'),
    'HU': require('../../assets/flags/HU.png'),
    'ID': require('../../assets/flags/ID.png'),
    'IE': require('../../assets/flags/IE.png'),
    'IL': require('../../assets/flags/IL.png'),
    'IM': require('../../assets/flags/IM.png'),
    'IN': require('../../assets/flags/IN.png'),
    'IO': require('../../assets/flags/IO.png'),
    'IQ': require('../../assets/flags/IQ.png'),
    'IR': require('../../assets/flags/IR.png'),
    'IS': require('../../assets/flags/IS.png'),
    'IT': require('../../assets/flags/IT.png'),
    'JE': require('../../assets/flags/JE.png'),
    'JM': require('../../assets/flags/JM.png'),
    'JO': require('../../assets/flags/JO.png'),
    'JP': require('../../assets/flags/JP.png'),
    'KE': require('../../assets/flags/KE.png'),
    'KG': require('../../assets/flags/KG.png'),
    'KH': require('../../assets/flags/KH.png'),
    'KI': require('../../assets/flags/KI.png'),
    'KM': require('../../assets/flags/KM.png'),
    'KN': require('../../assets/flags/KN.png'),
    'KP': require('../../assets/flags/KP.png'),
    'KR': require('../../assets/flags/KR.png'),
    'KW': require('../../assets/flags/KW.png'),
    'KY': require('../../assets/flags/KY.png'),
    'KZ': require('../../assets/flags/KZ.png'),
    'LA': require('../../assets/flags/LA.png'),
    'LB': require('../../assets/flags/LB.png'),
    'LC': require('../../assets/flags/LC.png'),
    'LI': require('../../assets/flags/LI.png'),
    'LK': require('../../assets/flags/LK.png'),
    'LR': require('../../assets/flags/LR.png'),
    'LS': require('../../assets/flags/LS.png'),
    'LT': require('../../assets/flags/LT.png'),
    'LU': require('../../assets/flags/LU.png'),
    'LV': require('../../assets/flags/LV.png'),
    'LY': require('../../assets/flags/LY.png'),
    'MA': require('../../assets/flags/MA.png'),
    'MC': require('../../assets/flags/MC.png'),
    'MD': require('../../assets/flags/MD.png'),
    'ME': require('../../assets/flags/ME.png'),
    'MF': require('../../assets/flags/MF.png'),
    'MG': require('../../assets/flags/MG.png'),
    'MH': require('../../assets/flags/MH.png'),
    'MK': require('../../assets/flags/MK.png'),
    'ML': require('../../assets/flags/ML.png'),
    'MM': require('../../assets/flags/MM.png'),
    'MN': require('../../assets/flags/MN.png'),
    'MO': require('../../assets/flags/MO.png'),
    'MP': require('../../assets/flags/MP.png'),
    'MQ': require('../../assets/flags/MQ.png'),
    'MR': require('../../assets/flags/MR.png'),
    'MS': require('../../assets/flags/MS.png'),
    'MT': require('../../assets/flags/MT.png'),
    'MU': require('../../assets/flags/MU.png'),
    'MV': require('../../assets/flags/MV.png'),
    'MW': require('../../assets/flags/MW.png'),
    'MX': require('../../assets/flags/MX.png'),
    'MY': require('../../assets/flags/MY.png'),
    'MZ': require('../../assets/flags/MZ.png'),
    'NA': require('../../assets/flags/NA.png'),
    'NC': require('../../assets/flags/NC.png'),
    'NE': require('../../assets/flags/NE.png'),
    'NF': require('../../assets/flags/NF.png'),
    'NG': require('../../assets/flags/NG.png'),
    'NI': require('../../assets/flags/NI.png'),
    'NL': require('../../assets/flags/NL.png'),
    'NO': require('../../assets/flags/NO.png'),
    'NP': require('../../assets/flags/NP.png'),
    'NR': require('../../assets/flags/NR.png'),
    'NU': require('../../assets/flags/NU.png'),
    'NZ': require('../../assets/flags/NZ.png'),
    'OM': require('../../assets/flags/OM.png'),
    'PA': require('../../assets/flags/PA.png'),
    'PE': require('../../assets/flags/PE.png'),
    'PF': require('../../assets/flags/PF.png'),
    'PG': require('../../assets/flags/PG.png'),
    'PH': require('../../assets/flags/PH.png'),
    'PK': require('../../assets/flags/PK.png'),
    'PL': require('../../assets/flags/PL.png'),
    'PM': require('../../assets/flags/PM.png'),
    'PN': require('../../assets/flags/PN.png'),
    'PR': require('../../assets/flags/PR.png'),
    'PS': require('../../assets/flags/PS.png'),
    'PT': require('../../assets/flags/PT.png'),
    'PW': require('../../assets/flags/PW.png'),
    'PY': require('../../assets/flags/PY.png'),
    'QA': require('../../assets/flags/QA.png'),
    'RE': require('../../assets/flags/RE.png'),
    'RO': require('../../assets/flags/RO.png'),
    'RS': require('../../assets/flags/RS.png'),
    'RU': require('../../assets/flags/RU.png'),
    'RW': require('../../assets/flags/RW.png'),
    'SA': require('../../assets/flags/SA.png'),
    'SB': require('../../assets/flags/SB.png'),
    'SC': require('../../assets/flags/SC.png'),
    'SD': require('../../assets/flags/SD.png'),
    'SE': require('../../assets/flags/SE.png'),
    'SG': require('../../assets/flags/SG.png'),
    'SH': require('../../assets/flags/SH.png'),
    'SI': require('../../assets/flags/SI.png'),
    'SJ': require('../../assets/flags/SJ.png'),
    'SK': require('../../assets/flags/SK.png'),
    'SL': require('../../assets/flags/SL.png'),
    'SM': require('../../assets/flags/SM.png'),
    'SN': require('../../assets/flags/SN.png'),
    'SO': require('../../assets/flags/SO.png'),
    'SR': require('../../assets/flags/SR.png'),
    'SS': require('../../assets/flags/SS.png'),
    'ST': require('../../assets/flags/ST.png'),
    'SV': require('../../assets/flags/SV.png'),
    'SX': require('../../assets/flags/SX.png'),
    'SY': require('../../assets/flags/SY.png'),
    'SZ': require('../../assets/flags/SZ.png'),
    'TC': require('../../assets/flags/TC.png'),
    'TD': require('../../assets/flags/TD.png'),
    'TF': require('../../assets/flags/TF.png'),
    'TG': require('../../assets/flags/TG.png'),
    'TH': require('../../assets/flags/TH.png'),
    'TJ': require('../../assets/flags/TJ.png'),
    'TK': require('../../assets/flags/TK.png'),
    'TL': require('../../assets/flags/TL.png'),
    'TM': require('../../assets/flags/TM.png'),
    'TN': require('../../assets/flags/TN.png'),
    'TO': require('../../assets/flags/TO.png'),
    'TR': require('../../assets/flags/TR.png'),
    'TT': require('../../assets/flags/TT.png'),
    'TV': require('../../assets/flags/TV.png'),
    'TW': require('../../assets/flags/TW.png'),
    'TZ': require('../../assets/flags/TZ.png'),
    'UA': require('../../assets/flags/UA.png'),
    'UG': require('../../assets/flags/UG.png'),
    'UM': require('../../assets/flags/UM.png'),
    'US': require('../../assets/flags/US.png'),
    'UY': require('../../assets/flags/UY.png'),
    'UZ': require('../../assets/flags/UZ.png'),
    'VA': require('../../assets/flags/VA.png'),
    'VC': require('../../assets/flags/VC.png'),
    'VE': require('../../assets/flags/VE.png'),
    'VG': require('../../assets/flags/VG.png'),
    'VI': require('../../assets/flags/VI.png'),
    'VN': require('../../assets/flags/VN.png'),
    'VU': require('../../assets/flags/VU.png'),
    'WF': require('../../assets/flags/WF.png'),
    'WS': require('../../assets/flags/WS.png'),
    'XK': require('../../assets/flags/XK.png'),
    'YE': require('../../assets/flags/YE.png'),
    'YT': require('../../assets/flags/YT.png'),
    'ZA': require('../../assets/flags/ZA.png'),
    'ZM': require('../../assets/flags/ZM.png'),
    'ZW': require('../../assets/flags/ZW.png'),
    'XX': require('../../assets/flags/XX.png'), // Unknown country (question mark)
    'ZZ': require('../../assets/flags/ZZ.png'), // responsive size testing
};

const countryNames = {
   'AD': 'Andorra',
   'AE': 'United Arab Emirates',
   'AF': 'Afghanistan',
   'AG': 'Antigua and Barbuda',
   'AI': 'Anguilla',
   'AL': 'Albania',
   'AM': 'Armenia',
   'AO': 'Angola',
   'AQ': 'Antarctica',
   'AR': 'Argentina',
   'AS': 'American Samoa',
   'AT': 'Austria',
   'AU': 'Australia',
   'AW': 'Aruba',
   'AX': 'Åland Islands',
   'AZ': 'Azerbaijan',
   'BA': 'Bosnia and Herzegovina',
   'BB': 'Barbados',
   'BD': 'Bangladesh',
   'BE': 'Belgium',
   'BF': 'Burkina Faso',
   'BG': 'Bulgaria',
   'BH': 'Bahrain',
   'BI': 'Burundi',
   'BJ': 'Benin',
   'BL': 'Saint Barthélemy',
   'BM': 'Bermuda',
   'BN': 'Brunei Darussalam',
   'BO': 'Bolivia, Plurinational State of',
   'BQ': 'Bonaire, Sint Eustatius and Saba',
   'BR': 'Brazil',
   'BS': 'Bahamas',
   'BT': 'Bhutan',
   'BV': 'Bouvet Island',
   'BW': 'Botswana',
   'BY': 'Belarus',
   'BZ': 'Belize',
   'CA': 'Canada',
   'CC': 'Cocos (Keeling) Islands',
   'CD': 'Congo, Democratic Republic of the',
   'CF': 'Central African Republic',
   'CG': 'Congo',
   'CH': 'Switzerland',
   'CI': 'Côte d\'Ivoire',
   'CK': 'Cook Islands',
   'CL': 'Chile',
   'CM': 'Cameroon',
   'CN': 'China',
   'CO': 'Colombia',
   'CR': 'Costa Rica',
   'CU': 'Cuba',
   'CV': 'Cabo Verde',
   'CW': 'Curaçao',
   'CX': 'Christmas Island',
   'CY': 'Cyprus',
   'CZ': 'Czechia',
   'DE': 'Germany',
   'DJ': 'Djibouti',
   'DK': 'Denmark',
   'DM': 'Dominica',
   'DO': 'Dominican Republic',
   'DZ': 'Algeria',
   'EC': 'Ecuador',
   'EE': 'Estonia',
   'EG': 'Egypt',
   'EH': 'Western Sahara',
   'ER': 'Eritrea',
   'ES': 'Spain',
   'ET': 'Ethiopia',
   'FI': 'Finland',
   'FJ': 'Fiji',
   'FK': 'Falkland Islands (Malvinas)',
   'FM': 'Micronesia, Federated States of',
   'FO': 'Faroe Islands',
   'FR': 'France',
   'GA': 'Gabon',
   'GB': 'United Kingdom of Great Britain and Northern Ireland',
   'GD': 'Grenada',
   'GE': 'Georgia',
   'GF': 'French Guiana',
   'GG': 'Guernsey',
   'GH': 'Ghana',
   'GI': 'Gibraltar',
   'GL': 'Greenland',
   'GM': 'Gambia',
   'GN': 'Guinea',
   'GP': 'Guadeloupe',
   'GQ': 'Equatorial Guinea',
   'GR': 'Greece',
   'GS': 'South Georgia and the South Sandwich Islands',
   'GT': 'Guatemala',
   'GU': 'Guam',
   'GW': 'Guinea-Bissau',
   'GY': 'Guyana',
   'HK': 'Hong Kong',
   'HM': 'Heard Island and McDonald Islands',
   'HN': 'Honduras',
   'HR': 'Croatia',
   'HT': 'Haiti',
   'HU': 'Hungary',
   'ID': 'Indonesia',
   'IE': 'Ireland',
   'IL': 'Israel',
   'IM': 'Isle of Man',
   'IN': 'India',
   'IO': 'British Indian Ocean Territory',
   'IQ': 'Iraq',
   'IR': 'Iran, Islamic Republic of',
   'IS': 'Iceland',
   'IT': 'Italy',
   'JE': 'Jersey',
   'JM': 'Jamaica',
   'JO': 'Jordan',
   'JP': 'Japan',
   'KE': 'Kenya',
   'KG': 'Kyrgyzstan',
   'KH': 'Cambodia',
   'KI': 'Kiribati',
   'KM': 'Comoros',
   'KN': 'Saint Kitts and Nevis',
   'KP': 'Korea, Democratic People\'s Republic of',
   'KR': 'Korea, Republic of',
   'KW': 'Kuwait',
   'KY': 'Cayman Islands',
   'KZ': 'Kazakhstan',
   'LA': 'Lao People\'s Democratic Republic',
   'LB': 'Lebanon',
   'LC': 'Saint Lucia',
   'LI': 'Liechtenstein',
   'LK': 'Sri Lanka',
   'LR': 'Liberia',
   'LS': 'Lesotho',
   'LT': 'Lithuania',
   'LU': 'Luxembourg',
   'LV': 'Latvia',
   'LY': 'Libya',
   'MA': 'Morocco',
   'MC': 'Monaco',
   'MD': 'Moldova, Republic of',
   'ME': 'Montenegro',
   'MF': 'Saint Martin, (French part)',
   'MG': 'Madagascar',
   'MH': 'Marshall Islands',
   'MK': 'North Macedonia',
   'ML': 'Mali',
   'MM': 'Myanmar',
   'MN': 'Mongolia',
   'MO': 'Macao',
   'MP': 'Northern Mariana Islands',
   'MQ': 'Martinique',
   'MR': 'Mauritania',
   'MS': 'Montserrat',
   'MT': 'Malta',
   'MU': 'Mauritius',
   'MV': 'Maldives',
   'MW': 'Malawi',
   'MX': 'Mexico',
   'MY': 'Malaysia',
   'MZ': 'Mozambique',
   'NA': 'Namibia',
   'NC': 'New Caledonia',
   'NE': 'Niger',
   'NF': 'Norfolk Island',
   'NG': 'Nigeria',
   'NI': 'Nicaragua',
   'NL': 'Netherlands',
   'NO': 'Norway',
   'NP': 'Nepal',
   'NR': 'Nauru',
   'NU': 'Niue',
   'NZ': 'New Zealand',
   'OM': 'Oman',
   'PA': 'Panama',
   'PE': 'Peru',
   'PF': 'French Polynesia',
   'PG': 'Papua New Guinea',
   'PH': 'Philippines',
   'PK': 'Pakistan',
   'PL': 'Poland',
   'PM': 'Saint Pierre and Miquelon',
   'PN': 'Pitcairn',
   'PR': 'Puerto Rico',
   'PS': 'Palestine, State of',
   'PT': 'Portugal',
   'PW': 'Palau',
   'PY': 'Paraguay',
   'QA': 'Qatar',
   'RE': 'Réunion',
   'RO': 'Romania',
   'RS': 'Serbia',
   'RU': 'Russian Federation',
   'RW': 'Rwanda',
   'SA': 'Saudi Arabia',
   'SB': 'Solomon Islands',
   'SC': 'Seychelles',
   'SD': 'Sudan',
   'SE': 'Sweden',
   'SG': 'Singapore',
   'SH': 'Saint Helena, Ascension and Tristan da Cunha',
   'SI': 'Slovenia',
   'SJ': 'Svalbard and Jan Mayen',
   'SK': 'Slovakia',
   'SL': 'Sierra Leone',
   'SM': 'San Marino',
   'SN': 'Senegal',
   'SO': 'Somalia',
   'SR': 'Suriname',
   'SS': 'South Sudan',
   'ST': 'Sao Tome and Principe',
   'SV': 'El Salvador',
   'SX': 'Sint Maarten, (Dutch part)',
   'SY': 'Syrian Arab Republic',
   'SZ': 'Eswatini',
   'TC': 'Turks and Caicos Islands',
   'TD': 'Chad',
   'TF': 'French Southern Territories',
   'TG': 'Togo',
   'TH': 'Thailand',
   'TJ': 'Tajikistan',
   'TK': 'Tokelau',
   'TL': 'Timor-Leste',
   'TM': 'Turkmenistan',
   'TN': 'Tunisia',
   'TO': 'Tonga',
   'TR': 'Turkey',
   'TT': 'Trinidad and Tobago',
   'TV': 'Tuvalu',
   'TW': 'Taiwan, Province of China',
   'TZ': 'Tanzania, United Republic of',
   'UA': 'Ukraine',
   'UG': 'Uganda',
   'UM': 'United States Minor Outlying Islands',
   'US': 'United States of America',
   'UY': 'Uruguay',
   'UZ': 'Uzbekistan',
   'VA': 'Holy See',
   'VC': 'Saint Vincent and the Grenadines',
   'VE': 'Venezuela, Bolivarian Republic of',
   'VG': 'Virgin Islands, British',
   'VI': 'Virgin Islands, U.S.',
   'VN': 'Viet Nam',
   'VU': 'Vanuatu',
   'WF': 'Wallis and Futuna',
   'WS': 'Samoa',
   'YE': 'Yemen',
   'YT': 'Mayotte',
   'ZA': 'South Africa',
   'ZM': 'Zambia',
   'ZW': 'Zimbabw',
};

export const countriesDistinct = uniq(keysOf(countryNames)) as Country[];

export type Flag = keyof typeof flagList;
export type Country = keyof typeof countryNames;

export function getFlagIcon(flag: Flag) {
    // if (__DEV__) {
    //     return require('../../assets/flags/' + flag + '.png');
    // }
    if (flagList[flag]) {
        return flagList[flag];
    }
    return flagList['XX'];
}

export function getCountryName(country: Country) {
    if (countryNames[country]) {
        return countryNames[country];
    }
    return country;
}