import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
})
export class MetaComponent {
  @Input() version: string | null = '0.0.1';
  copied = false;
  async copyInstall() {
    try {
      await navigator.clipboard.writeText(`ng add @ngneat/cmdk`);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (e) {}
  }
}
