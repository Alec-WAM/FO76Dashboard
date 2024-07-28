
export const MAX_ITEM_NAME_LENGTH = 24;

export enum ItemType {
    WEAPON,
    ARMOR,
    POWER_ARMOR
}

export interface ItemGoal {
    id: string;
    item_name: string;
    item_type: ItemType;
    item_mods: string[];
    legendary_mod_1_id: string;
    legendary_mod_2_id: string;    
    legendary_mod_3_id: string;
    obtained_mods: string[]
}