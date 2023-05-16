import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective implements AfterViewInit {
  constructor(
    private renderer2: Renderer2,
    private readonly elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const accordion__directive = this.elementRef.nativeElement;
    const title = accordion__directive.children[0];
    const body = accordion__directive.children[1];

    const accordion = this.renderer2.createElement('article');
    this.renderer2.addClass(accordion, 'accordion');

    const accordion__header = this.renderer2.createElement('header');
    this.renderer2.addClass(accordion__header, 'accordion__header');

    const accordion__title = this.changeTagName(title, 'p');
    this.renderer2.addClass(accordion__title, 'accordion__title');

    const accordion__toggle = this.renderer2.createElement('input');
    this.renderer2.setAttribute(accordion__toggle, 'type', 'checkbox');
    this.renderer2.addClass(accordion__toggle, 'accordion__toggle');

    const accordion__icon = this.renderer2.createElement('i');
    this.renderer2.addClass(accordion__icon, 'accordion__icon');
    this.renderer2.addClass(accordion__icon, 'bx');
    this.renderer2.addClass(accordion__icon, 'bxs-right-arrow');

    const accordion__body = this.renderer2.createElement('section');
    this.renderer2.addClass(accordion__body, 'accordion__body');

    const accordion__container = this.changeTagName(body, 'div');
    this.renderer2.addClass(accordion__container, 'accordion__container');

    this.renderer2.appendChild(accordion__header, accordion__title);
    this.renderer2.appendChild(accordion__header, accordion__toggle);
    this.renderer2.appendChild(accordion__header, accordion__icon);

    this.renderer2.appendChild(accordion__body, accordion__container);

    this.renderer2.appendChild(accordion, accordion__header);
    this.renderer2.appendChild(accordion, accordion__body);

    this.renderer2.appendChild(accordion__directive, accordion);
  }

  changeTagName(node: any, newTagName: string) {
    var renamed = document.createElement(newTagName);
    [...node.attributes].map(({ name, value }) => {
      renamed.setAttribute(name, value);
    });
    while (node.firstChild) {
      renamed.appendChild(node.firstChild);
    }
    node.parentNode.replaceChild(renamed, node);
    return renamed;
  }
}
