import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BarStackedHorizontalComponent } from './bar-stacked-horizontal/bar-stacked-horizontal.component';

const appRoutes: Routes = [
  {
    path: 'bar-stacked',
    component: BarStackedHorizontalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
