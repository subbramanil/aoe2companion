import {getCivName} from "./civs";
import {getString} from "./strings";

export const maps = {
    9: 'rm_arabia',
    10: 'rm_archipelago',
    11: 'rm_baltic',
    12: 'rm_black-forest',
    13: 'rm_coastal',
    14: 'rm_continental',
    15: 'rm_crater-lake',
    16: 'rm_fortress',
    17: 'rm_gold-rush',
    18: 'rm_highland',
    19: 'rm_islands',
    20: 'rm_mediterranean',
    21: 'rm_migration',
    22: 'rm_rivers',
    23: 'rm_team-islands',
    24: 'rm_full-random',
    25: 'rm_scandinavia',
    26: 'rm_mongolia',
    27: 'rm_yucatan',
    28: 'rm_salt-marsh',
    29: 'rm_arena',
    31: 'rm_oasis',
    32: 'rm_ghost-lake',
    33: 'rm_nomad',
    49: 'rwm_iberia',
    50: 'rwm_britain',
    51: 'rwm_mideast',
    52: 'rwm_texas',
    53: 'rwm_italy',
    54: 'rwm_central_america',
    55: 'rwm_france',
    56: 'rwm_norse_lands',
    57: 'rwm_sea_of_japan',
    58: 'rwm_byzantium',
    59: 'cm_generic',
    60: 'rm_random_land_map',
    62: 'rwm_random_real_world_map',
    63: 'rm_blind_random',
    // 65: 'random special map',
    // 66: 'random special map',
    67:  'rm_acropolis',
    68:  'rm_budapest',
    69:  'rm_cenotes',
    70:  'rm_city-of-lakes',
    71:  'rm_golden-pit',
    72:  'rm_hideout',
    73:  'rm_hill-fort',
    74:  'rm_lombardia',
    75:  'rm_steppe',
    76:  'rm_valley',
    77:  'rm_megarandom',
    78:  'rm_hamburger',
    79:  'rm_ctr_random',
    80:  'rm_ctr_monsoon',
    81:  'rm_ctr_pyramid-descent',
    82:  'rm_ctr_spiral',
    83:  'rm_kilimanjaro',
    84:  'rm_mountain-pass',
    85:  'rm_nile-delta',
    86:  'rm_serengeti',
    87:  'rm_socotra',
    88:  'rwm_amazon',
    89:  'rwm_china',
    90:  'rwm_horn_of_africa',
    91:  'rwm_india',
    92:  'rwm_madagascar',
    93:  'rwm_west_africa',
    94:  'rwm_bohemia',
    95:  'rwm_earth',
    96:  'sm_canyons',
    97:  'sm_enemy-archipelago',
    98:  'sm_enemy-islands',
    99:  'sm_far-out',
    100: 'sm_front-line',
    101: 'sm_inner-circle',
    102: 'sm_motherland',
    103: 'sm_open-plains',
    104: 'sm_ring-of-water',
    105: 'sm_snake-pit',
    106: 'sm_the-eye',
    107: 'rwm_australia',
    108: 'rwm_indochina',
    109: 'rwm_indonesia',
    110: 'rwm_strait_of_malacca',
    111: 'rwm_phillipines',
    112: 'rm_bog-islands',
    113: 'rm_mangrove-jungle',
    114: 'rm_pacific-islands',
    115: 'rm_sandbank',
    116: 'rm_water-nomad',
    117: 'sm_jungle-islands',
    118: 'sm_holy-line',
    119: 'sm_border-stones',
    120: 'sm_yin-yang',
    121: 'sm_jungle-lanes',
    122: 'rm_alpine-lakes',
    123: 'rm_bogland',
    124: 'rm_mountain-ridge',
    125: 'rm_ravines',
    126: 'rm_wolf-hill',
    132: 'rwm_antarctica',
    137: 'cm_generic',
    139: 'rm_golden-swamp',
    140: 'rm_four-lakes',
    141: 'rm_land_nomad',
};

export function getMapImage(map: number) {
    if (map == null) {
        return '/maps/cm_generic.png';
    }
    return '/maps/' + maps[map] + '.png';
}

export function getMapName(map: number) {
    if (map == null) {
        return 'Custom';
    }
    return getString('map_type', map);
}