import * as moment from 'moment';

export interface NukeBoss {
    id: string;
    name: string;
    location: string;
    custom: boolean;
}

export const BOSS_SBQ: NukeBoss = {
    id: 'sbq',
    name: 'Scorchbeast Queen',
    location: 'Fissure Site Prime',
    custom: false
};
export const BOSS_EARLE: NukeBoss = {
    id: 'earle',
    name: 'Earle Williams',
    location: 'Monongah Mine',
    custom: false
};
export const BOSS_TITAN: NukeBoss = {
    id: 'titan',
    name: 'Ultracite Titan',
    location: 'Abandoned Mine Shaft 2',
    custom: false
};
export const BOSS_GOLIATHS: NukeBoss = {
    id: 'goliaths',
    name: 'Storm Goliaths',
    location: 'Hawksbill Weather Station',
    custom: false
};

export const DEFAULT_BOSSES: NukeBoss[] = [
    BOSS_SBQ,
    BOSS_EARLE,
    BOSS_TITAN,
    BOSS_GOLIATHS
];

export interface NukeType {
    id: string;
    name: string;
    boss_id?: string;
    location?: string;
    custom: boolean;
}

export const NUKE_TYPE_UNKNOWN = {
    id: 'unknown',
    name: "Unknown",
    custom: false
};

export const NUKE_TYPE_RANDOM = {
    id: 'random',
    name: "Random",
    custom: false
};

export const NUKE_TYPE_SBQ = {
    id: BOSS_SBQ.id,
    name: BOSS_SBQ.name,
    boss_id: BOSS_SBQ.id,
    location: BOSS_SBQ.location,
    custom: false
};

export const NUKE_TYPE_EARLE = {
    id: BOSS_EARLE.id,
    name: BOSS_EARLE.name,
    boss_id: BOSS_EARLE.id,
    location: BOSS_EARLE.location,
    custom: false
};

export const NUKE_TYPE_TITAN = {
    id: BOSS_TITAN.id,
    name: BOSS_TITAN.name,
    boss_id: BOSS_TITAN.id,
    location: BOSS_TITAN.location,
    custom: false
};

export const NUKE_TYPE_GOLIATHS = {
    id: BOSS_GOLIATHS.id,
    name: BOSS_GOLIATHS.name,
    boss_id: BOSS_GOLIATHS.id,
    location: BOSS_GOLIATHS.location,
    custom: false
};

export const DEFAULT_NUKE_TYPES: NukeType[] = [
    NUKE_TYPE_UNKNOWN,
    NUKE_TYPE_RANDOM,
    NUKE_TYPE_SBQ,
    NUKE_TYPE_EARLE,
    NUKE_TYPE_TITAN,
    NUKE_TYPE_GOLIATHS
];

export enum NukeSilo {
    SILO_A = "Alpha",
    SILO_B = "Bravo",
    SILO_C = "Charlie"
}
export interface NukeDrop {
    id: string;
    date?: moment.Moment;
    type_id: string;
    custom_location?: string; //Used for Random Drops
}

export interface NukeData {
    version: number;
    droppedNukes: string[];
    nukeTypes: string[];
    nukeBosses: string[];
}