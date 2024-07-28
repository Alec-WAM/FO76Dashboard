import Dexie, { Table } from 'dexie';
import { DEFAULT_BOSSES, DEFAULT_NUKE_TYPES, NukeBoss, NukeDrop, NukeType } from '../models/NukeCounterModels';
import { ItemGoal } from '../models/ItemGoalModels';

export const DB_NAME = "fo76-dashboard-database"
export const TEST_DB_NAME = "fo76-dashboard-database-test"

export class AppDB extends Dexie {
    nukeBosses!: Table<NukeBoss, string>;
    nukeTypes!: Table<NukeType, string>;
    nukeDrops!: Table<NukeDrop, string>;
    itemGoals!: Table<ItemGoal, string>;
  
    constructor(name: string) {
      super(name);
      this.version(1).stores({
        nukeBosses: '&id, name, location',
        nukeTypes: '&id, name, boss_id',
        nukeDrops: '&id, date, type_id'
      });
      this.version(2).stores({
        nukeBosses: '&id, name, location',
        nukeTypes: '&id, name, boss_id, location',
        nukeDrops: '&id, date, type_id, custom_location'
      }).upgrade((value) => {
        this.updateDatabase();
      });
      this.version(3).stores({
        nukeBosses: '&id, name, location',
        nukeTypes: '&id, name, boss_id, location',
        nukeDrops: '&id, date, type_id, custom_location',
        itemGoals: '&id, item_name, item_type'
      }).upgrade((value) => {
        this.updateDatabase();
      });
      this.on('populate', () => this.populate());
      this.open();
    }
  
    async populate() {
      await this.nukeBosses.bulkAdd(DEFAULT_BOSSES);
      await this.nukeTypes.bulkAdd(DEFAULT_NUKE_TYPES);
    }

    async updateDatabase() {
        console.log("Updating Database")
        await Promise.all(DEFAULT_NUKE_TYPES.map(async (type) => {
            return await this.nukeTypes.update(type.id, {
                location: type.location
            })
        }))
    }
  }
  
  export const db = new AppDB(DB_NAME);
  export const db_test = new AppDB(TEST_DB_NAME);