import { Component, ViewChild, ViewEncapsulation, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CheckboxChangeEvent } from 'primeng/checkbox';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { liveQuery } from 'dexie';
import * as uuid from 'uuid';
import { Fo76Service } from '../../../services/fo76.service';
import { ItemGoal, ItemType } from '../../../models/ItemGoalModels';
import { ARMOR_LEGENDARY_MODS, LegendaryMod, POWER_ARMOR_LEGENDARY_MODS, WEAPON_LEGENDARY_MODS } from '../../../models/LegendaryModModels';
import { deepCopy } from '../../../utils/util-functions';

interface ListItemGoal extends ItemGoal {
  legendary_mod_1: LegendaryMod;
  legendary_mod_2: LegendaryMod;
  legendary_mod_3: LegendaryMod;
}

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrl: './goals-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GoalsPageComponent {
  
  goalMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pen-to-square',
      command: () => {
          this.editSelectedGoal();
      }
    },
    {
      label: 'Copy',
      icon: 'pi pi-copy',
      command: () => {
          this.copySelectedGoal();
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
          this.deleteSelectedGoal();
      }
    },
  ];

  itemGoals$ = liveQuery(() => this.fo76Service.getCurrentDB().itemGoals.toArray());
  
  weaponGoals = signal<ListItemGoal[]>([]);
  weaponGoals$ = toObservable(this.weaponGoals);
  armorGoals = signal<ListItemGoal[]>([]);
  armorGoals$ = toObservable(this.armorGoals);
  powerArmorGoals = signal<ListItemGoal[]>([]);
  powerArmorGoals$ = toObservable(this.powerArmorGoals);

  @ViewChild('itemGoalMenu') goalMenu: Menu;
  selectedGoal: ItemGoal | undefined;

  constructor(public fo76Service: Fo76Service){
    this.itemGoals$.subscribe(async (values) => {
      const weapon_goals = values.filter((goal) => goal.item_type === ItemType.WEAPON);
      const armor_goals = values.filter((goal) => goal.item_type === ItemType.ARMOR);
      const power_armor_goals = values.filter((goal) => goal.item_type === ItemType.POWER_ARMOR);
      
      const listWeaponGoals: ListItemGoal[] = weapon_goals.map((goal) => {
        const listGoal = deepCopy(goal) as ListItemGoal;
        listGoal.legendary_mod_1 = listGoal.legendary_mod_1_id ? WEAPON_LEGENDARY_MODS[listGoal.legendary_mod_1_id] : undefined;
        listGoal.legendary_mod_2 = listGoal.legendary_mod_2_id ? WEAPON_LEGENDARY_MODS[listGoal.legendary_mod_2_id] : undefined;
        listGoal.legendary_mod_3 = listGoal.legendary_mod_3_id ? WEAPON_LEGENDARY_MODS[listGoal.legendary_mod_3_id] : undefined;
        return listGoal;
      });

      const listArmorGoals: ListItemGoal[] = armor_goals.map((goal) => {
        const listGoal = deepCopy(goal) as ListItemGoal;
        listGoal.legendary_mod_1 = listGoal.legendary_mod_1_id ? ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_1_id] : undefined;
        listGoal.legendary_mod_2 = listGoal.legendary_mod_2_id ? ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_2_id] : undefined;
        listGoal.legendary_mod_3 = listGoal.legendary_mod_3_id ? ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_3_id] : undefined;
        return listGoal;
      });

      const listPowerArmorGoals: ListItemGoal[] = power_armor_goals.map((goal) => {
        const listGoal = deepCopy(goal) as ListItemGoal;
        listGoal.legendary_mod_1 = listGoal.legendary_mod_1_id ? POWER_ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_1_id] : undefined;
        listGoal.legendary_mod_2 = listGoal.legendary_mod_2_id ? POWER_ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_2_id] : undefined;
        listGoal.legendary_mod_3 = listGoal.legendary_mod_3_id ? POWER_ARMOR_LEGENDARY_MODS[listGoal.legendary_mod_3_id] : undefined;
        return listGoal;
      });
      
      this.weaponGoals.set(listWeaponGoals);
      this.armorGoals.set(listArmorGoals);
      this.powerArmorGoals.set(listPowerArmorGoals);
    });
  }

  openGoalDialog(): void {
    this.fo76Service.addGoalDialogOpen.set(true);
  }

  openGoalMenu(event: any, itemGoal: ListItemGoal): void {
    this.selectedGoal = itemGoal;
    this.goalMenu.toggle(event);
  }

  closeMenu(): void {
    this.selectedGoal = null;
  }

  editSelectedGoal(): void {
    console.log(this.selectedGoal);
    this.fo76Service.editGoal = deepCopy(this.selectedGoal);
    this.fo76Service.addGoalDialogOpen.set(true);
  }

  copySelectedGoal(): void {
    const newGoal: ItemGoal = deepCopy(this.selectedGoal);
    newGoal.item_name = `Copy of ${newGoal.item_name}`;
    this.fo76Service.copyGoal = newGoal;
    this.fo76Service.addGoalDialogOpen.set(true);
  }

  deleteSelectedGoal(): void {
    this.fo76Service.getCurrentDB().itemGoals.delete(this.selectedGoal.id);
  }

  onCheckboxChange(event: CheckboxChangeEvent, itemGoal: ListItemGoal): void {
    console.log(event)
    this.fo76Service.getCurrentDB().itemGoals.update(itemGoal.id, {
      obtained_mods: event.checked ?? []
    });
  }
}
