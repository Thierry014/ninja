import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'ns-cd-demo',
  imports: [],
  template: `
    <h2>Change Detection: brute-force vs signal</h2>

    <!-- This button changes NOTHING that the two values below depend on.
         It only fires an event, which triggers a change-detection pass. -->
    <button (click)="unrelatedClicks = unrelatedClicks + 1">
      Unrelated click ({{ unrelatedClicks }})
    </button>

    <hr />

    <!-- ===== BRUTE FORCE (plain property + method in template) ===== -->
    <h3>Plain property</h3>
    <p>base value: {{ plainValue }}</p>
    <!-- doubledPlain() is a METHOD call in the template.
         Angular has no idea what it depends on, so it re-runs it on
         EVERY change-detection pass — even the unrelated button clicks. -->
    <p>doubled: {{ doubledPlain() }}</p>
    <button (click)="plainValue = plainValue + 1">plainValue + 1</button>

    <hr />

    <!-- ===== SIGNAL (signal + computed) ===== -->
    <h3>Signal</h3>
    <p>base value: {{ signalValue() }}</p>
    <!-- doubledSignal is a COMPUTED. Angular knows it depends only on
         signalValue(). It re-runs ONLY when signalValue changes —
         unrelated clicks do nothing. -->
    <p>doubled: {{ doubledSignal() }}</p>
    <button (click)="signalValue.set(signalValue() + 1)">signalValue + 1</button>
  `,
})
export class CdDemo {
  unrelatedClicks = 0;

  // --- brute-force side ---
  plainValue = 1;
  doubledPlain(): number {
    console.log('🐌 doubledPlain() RECOMPUTED');
    return this.plainValue * 2;
  }

  // --- signal side ---
  signalValue = signal(1);
  doubledSignal = computed(() => {
    console.log('⚡ doubledSignal RECOMPUTED');
    return this.signalValue() * 2;
  });
}
