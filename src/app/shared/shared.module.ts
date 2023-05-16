import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './components';
import { InputContainerDirective } from './directives';
import { MaterialModule } from './modules';
import { SearchPipe } from './pipes/search.pipe';

const MODULES = [MaterialModule];

const COMPONENTS = [NavBarComponent];

const DIRECTIVES = [InputContainerDirective];

const PIPES = [SearchPipe];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS, DIRECTIVES, PIPES],
})
export class SharedModule {}
