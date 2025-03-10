import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  imports: [],
  templateUrl: './share-buttons.component.html',
  styleUrl: './share-buttons.component.scss'
})
export class ShareButtonsComponent {
  @Input() link: string = '';

  shareToWhatsApp() {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.link)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareToTelegram() {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.link)}`;
    window.open(telegramUrl, '_blank');
  }
}
