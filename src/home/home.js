export class Home {

  constructor() {
    this.message = 'success';
    this.horizontal = true;
    this.spanCaption = 'Cibersecurity';
  }

  attached() {
    this.detectWidthChange();
  }

  detectWidthChange() {
    if (window.screen.width < 700) {
      this.horizontal = false;
    }
  }
}
