import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Posted Jobs', url: '/mypostedjob1', icon: 'menujob.svg' },
    {
      title: 'Account Settings',
      url: '/accountsetting',
      icon: 'menuaccount.svg',
    },
    { title: 'Invite', url: '/invitefriend', icon: 'menuinvite.svg' },
    { title: 'Review App', url: '/review', icon: 'menureview.svg' },
    {
      title: 'Contact Workiing',
      url: '/folder/Trash',
      icon: 'menucontact.svg',
    },
    { title: 'Terms & Conditions', url: '/terms', icon: 'menuterms.svg' },
    { title: 'Privacy Policy', url: '/privacypolicy', icon: 'menuprivacy.svg' },
    { title: 'FAQ’s', url: '/faq', icon: 'menufaq.svg' },
    { title: 'Logout', url: '/folder/Spam', icon: 'menulogout.svg' },
  ];
  constructor() {}
}
