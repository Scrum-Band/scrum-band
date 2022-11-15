import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

const components: any[] = [
  ReactiveFormsModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule,
  MatTabsModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, components],
  exports: [components]
})
export class MaterialModule {}
