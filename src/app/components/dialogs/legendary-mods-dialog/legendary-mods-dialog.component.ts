import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown';
import * as uuid from 'uuid';
import { Fo76Service } from '../../../services/fo76.service';
import { ARMOR_LEGENDARY_MODS, LegendaryMod, POWER_ARMOR_LEGENDARY_MODS, WEAPON_LEGENDARY_MODS } from '../../../models/LegendaryModModels';
import { ItemGoal, ItemType, MAX_ITEM_NAME_LENGTH } from '../../../models/ItemGoalModels';

@Component({
  selector: 'app-legendary-mods-dialog',
  templateUrl: './legendary-mods-dialog.component.html',
  styleUrl: './legendary-mods-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LegendaryModsDialogComponent {

  MAX_ITEM_NAME_LENGTH = MAX_ITEM_NAME_LENGTH;

  formGroup: FormGroup = new FormGroup({
    itemName: new FormControl<string>(null, Validators.required),
    itemType: new FormControl<ItemType>(null, Validators.required),
    level1_mod: new FormControl<LegendaryMod>(null),
    level2_mod: new FormControl<LegendaryMod>(null),
    level3_mod: new FormControl<LegendaryMod>(null)
  });

  readonly ITEM_TYPES = [
    { name: 'Weapon', code: ItemType.WEAPON },
    { name: 'Armor', code: ItemType.ARMOR },
    { name: 'Power Armor', code: ItemType.POWER_ARMOR }
  ];
  mods_level1: LegendaryMod[] = [];
  mods_level2: LegendaryMod[] = [];
  mods_level3: LegendaryMod[] = [];

  activeStep: number = 0;

  constructor(public fo76Service: Fo76Service){
    this.fo76Service.addGoalDialogOpen$.subscribe((value) => {
      if(value && (this.fo76Service.editGoal || this.fo76Service.copyGoal)){
        this.activeStep = 0;
        const goal = this.fo76Service.editGoal ?? this.fo76Service.copyGoal;
        
        let mods: { [id: string] : LegendaryMod; } = null;
        let legendary_mod_1 = null;
        let legendary_mod_2 = null;
        let legendary_mod_3 = null;
        let itemType = null;
        
        if(goal.item_type === ItemType.WEAPON){
          mods = WEAPON_LEGENDARY_MODS;
          itemType = this.ITEM_TYPES[0];
        }
        else if(goal.item_type === ItemType.ARMOR){
          mods = ARMOR_LEGENDARY_MODS;
          itemType = this.ITEM_TYPES[1];
        }
        else if(goal.item_type === ItemType.POWER_ARMOR){
          mods = POWER_ARMOR_LEGENDARY_MODS;
          itemType = this.ITEM_TYPES[2];
        }

        if(mods !=null){
          legendary_mod_1 = goal.legendary_mod_1_id ? mods[goal.legendary_mod_1_id] : null;
          legendary_mod_2 = goal.legendary_mod_2_id ? mods[goal.legendary_mod_2_id] : null;
          legendary_mod_3 = goal.legendary_mod_3_id ? mods[goal.legendary_mod_3_id] : null;
          
          const values = Object.values(mods);
          this.mods_level1 = values.filter((mod) => mod.level === 1);
          this.mods_level2 = values.filter((mod) => mod.level === 2);
          this.mods_level3 = values.filter((mod) => mod.level === 3);
        }

        this.formGroup.setValue({
          itemName: goal.item_name,
          itemType: itemType,
          level1_mod: legendary_mod_1,
          level2_mod: legendary_mod_2,
          level3_mod: legendary_mod_3
        }, {emitEvent: false});
      }
    })
  }

  onItemTypeChange(event: DropdownChangeEvent): void {
    let list: { [id: string] : LegendaryMod; } = {};
    const itemType: ItemType = event.value.code;
    if(itemType === ItemType.WEAPON){
      list = WEAPON_LEGENDARY_MODS;
    }
    else if(itemType === ItemType.ARMOR){
      list = ARMOR_LEGENDARY_MODS;
    }
    else if(itemType === ItemType.POWER_ARMOR){
      list = POWER_ARMOR_LEGENDARY_MODS;
    }

    const values = Object.values(list);
    this.mods_level1 = values.filter((mod) => mod.level === 1);
    this.mods_level2 = values.filter((mod) => mod.level === 2);
    this.mods_level3 = values.filter((mod) => mod.level === 3);

    this.formGroup.setValue({
      itemName: this.formGroup.get('itemName')?.value,
      itemType: this.formGroup.get('itemType')?.value,
      level1_mod: null,
      level2_mod: null,
      level3_mod: null
    });
  }

  //TODO Do name check to prevent duplicates
  onSubmit(): void {

    if(this.fo76Service.editGoal){
      const goal = this.fo76Service.editGoal;
      let changes = {};
      let changed = false;
      if(this.formGroup.get("itemName")?.value !== goal.item_name){
        changes['item_name'] = this.formGroup.get("itemName")?.value;
        changed = true;
      }
      if(this.formGroup.get("itemType")?.value !== goal.item_type){
        changes['item_type'] = this.formGroup.get("itemType")?.value?.code ?? -1;
        changed = true;
      }
      if(this.formGroup.get("level1_mod")?.value?.id !== goal.legendary_mod_1_id){
        changes['legendary_mod_1_id'] = this.formGroup.get("level1_mod")?.value?.id;
        changed = true;
      }
      if(this.formGroup.get("level2_mod")?.value?.id !== goal.legendary_mod_2_id){
        changes['legendary_mod_2_id'] = this.formGroup.get("level2_mod")?.value?.id;
        changed = true;
      }
      if(this.formGroup.get("level3_mod")?.value?.id !== goal.legendary_mod_3_id){
        changes['legendary_mod_3_id'] = this.formGroup.get("level3_mod")?.value?.id;
        changed = true;
      }
      if(changed){
        this.fo76Service.getCurrentDB().itemGoals.update(this.fo76Service.editGoal.id, changes);
      }
      this.fo76Service.editGoal = null;
      this.fo76Service.addGoalDialogOpen.set(false);
    }
    else {
      const itemGoal: ItemGoal = {
        id: uuid.v4(),
        item_name: this.formGroup.get("itemName")?.value,
        item_type: this.formGroup.get("itemType")?.value?.code ?? -1,
        item_mods: [],
        legendary_mod_1_id: this.formGroup.get("level1_mod")?.value?.id,
        legendary_mod_2_id: this.formGroup.get("level2_mod")?.value?.id,
        legendary_mod_3_id: this.formGroup.get("level3_mod")?.value?.id,
        obtained_mods: []
      };

      this.fo76Service.getCurrentDB().itemGoals.add(itemGoal, itemGoal.id).then(() => {
        this.fo76Service.addGoalDialogOpen.set(false);
        if(this.fo76Service.copyGoal){
          this.fo76Service.copyGoal = undefined;
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
    }
  }

}
