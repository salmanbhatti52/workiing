import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { NavController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/jobslistlogin', icon: 'icon-user.svg' },
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
      url: '/review2',
      icon: 'menucontact.svg',
    },
    { title: 'Terms & Conditions', url: '/terms', icon: 'menuterms.svg' },
    { title: 'Privacy Policy', url: '/privacypolicy', icon: 'menuprivacy.svg' },
    { title: 'FAQ’s', url: '/faq', icon: 'menufaq.svg' },
    { title: 'Logout', url: '/signin', icon: 'menulogout.svg' },
  ];
  constructor(public platform: Platform,
    public navCtrl: NavController) {
    console.log('users_customers_id', localStorage.getItem('users_customers_id'));

    // if (localStorage.getItem('users_customers_id') == null) {
    //   this.navCtrl.navigateRoot('signin')
    // } else {
    //   this.navCtrl.navigateRoot('jobslistlogin')
    // }
  }

  ngOnInit() {

    this.platform.ready().then(() => {
      setTimeout(() => {

        SplashScreen.hide();
      }, 4000);
    });
  }

  pages(p: any) {
    console.log(p);
    if (p.title == 'Logout') {
      localStorage.removeItem('users_customers_id');
    }
  }
}
