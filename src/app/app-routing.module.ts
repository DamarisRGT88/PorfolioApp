import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteMeComponent } from './components/aboute-me/aboute-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "About", component: AbouteMeComponent },
  { path: "Skills", component: SkillsComponent },
  { path: "Portfolio", component: PortfolioComponent },
  { path: "Contact", component: ContactComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
