import { Component } from '@angular/core';
import { Content } from '@ngneat/overview';
import { FramerIconComponent } from 'src/app/icons/framer/framer.component';
import { LinearIconComponent } from 'src/app/icons/linear-icon/linear-icon.component';
import { RaycastIconComponent } from 'src/app/icons/raycast-icon/raycast-icon.component';
import { VercelIconComponent } from 'src/app/icons/vercel-icon/vercel-icon.component';
import { Theme } from 'src/types';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  currentTheme: Theme = 'raycast';
  allThemes: Array<{ label: string; icon: Content; value: Theme }> = [
    { label: 'Raycast', value: 'raycast', icon: RaycastIconComponent },
    { label: 'Linear', value: 'linear', icon: LinearIconComponent },
    { label: 'Vercel', value: 'vercel', icon: VercelIconComponent },
    { label: 'Framer', value: 'framer', icon: FramerIconComponent },
  ];

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
  }
}
