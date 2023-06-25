import { Route,Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { FlashComponent } from './flash.component';

import { NotfoundComponent } from './notfound.component';
import { SupermanComponent } from './superman.component';
let homeroute:Route={ path:"",  component:HomeComponent}/*Default routes */
let batmanroute:Route={path: "batman", component:BatmanComponent}/*names routes */
let supermanroute:Route={path: "superman/:qty", component:SupermanComponent}/*named parameter routes */
let flashroute:Route={path: "flash", component:FlashComponent}/*named routes */
let cybrogroute:Route={path: "cybrog", redirectTo:"batman",pathMatch:"prefix"}/*route redirection */
let wildcardroute:Route={path: "**", component:NotfoundComponent}/*universal  routes */
export let routes:Routes=[homeroute,batmanroute,supermanroute,flashroute,cybrogroute,wildcardroute];
