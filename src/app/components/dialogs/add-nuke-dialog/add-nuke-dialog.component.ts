import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { liveQuery } from 'dexie';
import * as uuid from 'uuid';
import { NUKE_TYPE_RANDOM, NukeType } from '../../../models/NukeCounterModels';
import { Fo76Service } from '../../../services/fo76.service';

@Component({
  selector: 'app-add-nuke-dialog',
  templateUrl: './add-nuke-dialog.component.html',
  styleUrl: './add-nuke-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AddNukeDialogComponent {
  NUKE_TYPE_RANDOM = NUKE_TYPE_RANDOM;
  
  formGroup: FormGroup = new FormGroup({
    date: new FormControl<Date | null>(null),
    nukeType: new FormControl<NukeType>(null, Validators.required),
    custom_location: new FormControl<string | null>(null)
  });

  nukeTypes$ = liveQuery(() => this.fo76Service.getCurrentDB().nukeTypes.toArray());
  submitting: boolean = false;

  constructor(public fo76Service: Fo76Service){
    this.fo76Service.addNukeDialogOpen$.subscribe((value) => {
      if(value){
        this.formGroup.reset();
      }
    })
  }

  closeDialog(): void {
    this.fo76Service.addNukeDialogOpen.set(false);
  }

  async onSubmit(): Promise<void> {
    console.log("Submit Nuke")
    this.submitting = true;
    await this.fo76Service.getCurrentDB().nukeDrops.add({
      id: uuid.v4(),
      date: this.formGroup.get("date")?.value,
      type_id: this.formGroup.get("nukeType").value.id,
      custom_location: this.formGroup.get("nukeType").value?.id === NUKE_TYPE_RANDOM.id ? this.formGroup.get("custom_location").value ?? undefined : undefined
    }).catch((error) => {
      alert(error);
      console.error(error);
      this.submitting = false;
    });
    this.submitting = false;
    this.fo76Service.addNukeDialogOpen.set(false);
  }
}
