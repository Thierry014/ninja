import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RaceService} from '../../services/race';

@Component({
  selector: 'ns-add-race-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-race-form.html',
  styleUrl: './add-race-form.css',
})
export class AddRaceForm {
  applyForm = new FormGroup({
    name: new FormControl('X'),
    isSingleDay: new FormControl()
  })

  raceService = inject(RaceService)

  submitForm(): void{
    this.raceService.addRace(this.applyForm.value.name ?? '')
    console.log("Submitted")
  }
}
