import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ns-input-demo',
  imports: [],
  template: `
    <div style="border:1px solid #888; padding:8px; margin-top:8px;">
      <h3>Child component</h3>
      <p>raceId input = <b>{{ raceId }}</b></p>
    </div>
  `,
})
export class InputDemo implements OnChanges, OnInit {
  @Input() raceId!: number;

  ngOnChanges(changes: SimpleChanges): void {
    const c = changes['raceId'];
    console.log(
      `📥 ngOnChanges  raceId: ${c.previousValue} → ${c.currentValue}  (firstChange=${c.firstChange})`
    );
  }

  ngOnInit(): void {
    console.log('🟢 ngOnInit    raceId is now available:', this.raceId);
  }
}
