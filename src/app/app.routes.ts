import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidateComponent } from './reactive-validate/reactive-validate.component';

export const routes: Routes = [
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'reactive-validate', component: ReactiveValidateComponent },
];
