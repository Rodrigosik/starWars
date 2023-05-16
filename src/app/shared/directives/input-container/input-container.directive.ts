import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputContainer]',
})
export class InputContainerDirective implements AfterViewInit {
  constructor(
    private renderer2: Renderer2,
    private readonly elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const lista = this.elementRef.nativeElement.children;

    let inputElement;
    let labelElement;
    let iconElement;

    for (let item of lista) {
      if (item.localName === 'label') {
        labelElement = item;
      }
      if (item.localName === 'input') {
        inputElement = item;
      }
      if (item.localName === 'i') {
        iconElement = item;
      }
    }

    if (!inputElement) {
      return;
    }

    let labelTexto: string = '';

    if (labelElement) {
      labelTexto = labelElement.innerText;
      this.renderer2.removeChild(this.elementRef.nativeElement, labelElement);
    }

    const input__input = inputElement;

    const input = this.renderer2.createElement('div');
    this.renderer2.addClass(input, 'input');

    const input__left = this.renderer2.createElement('div');
    this.renderer2.addClass(input__left, 'input__left');

    this.renderer2.addClass(input__input, 'input__input');

    if (!inputElement.attributes.placeholder?.value) {
      this.renderer2.setProperty(input__input, 'placeholder', ' ');
    }

    const input__label = this.renderer2.createElement('label');
    this.renderer2.addClass(input__label, 'input__label');

    const input__labelTexto = this.renderer2.createText(
      this.transform(labelTexto, [20, '...'])
    );
    this.renderer2.appendChild(input__label, input__labelTexto);
    if (!labelTexto.length) {
      this.renderer2.setStyle(input__input, 'border-top', '2px solid');
    }

    const input__rigth = this.renderer2.createElement('div');
    this.renderer2.addClass(input__rigth, 'input__rigth');

    if (iconElement) {
      this.renderer2.addClass(iconElement, 'input__icon');
      this.renderer2.appendChild(input, iconElement);
    }

    this.renderer2.appendChild(input, input__left);
    this.renderer2.appendChild(input, input__input);
    this.renderer2.appendChild(input, input__label);
    this.renderer2.appendChild(input, input__rigth);

    this.renderer2.appendChild(this.elementRef.nativeElement, input);
  }

  private transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
