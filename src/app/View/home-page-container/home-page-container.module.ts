import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageContainerRoutingModule } from './home-page-container-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SectionOneComponent } from './homepage/section-one/section-one.component';
import { SectionTwoComponent } from './homepage/section-two/section-two.component';
import { SectionThreeComponent } from './homepage/section-three/section-three.component';
import { SectionFourComponent } from './homepage/section-four/section-four.component';
import { SectionFiveComponent } from './homepage/section-five/section-five.component';
import { SignupboxComponent } from './homepage/signupbox/signupbox.component';


@NgModule({
  declarations: [HomepageComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SignupboxComponent],
  imports: [
    CommonModule,
    HomePageContainerRoutingModule
  ]
})
export class HomePageContainerModule { }
