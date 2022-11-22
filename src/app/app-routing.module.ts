import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'onboradingscreen',
    redirectTo: 'onboradingscreen',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  // },
  {
    path: 'onboradingscreen',
    loadChildren: () => import('./onboradingscreen/onboradingscreen.module').then(m => m.OnboradingscreenPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'forgotpopup',
    loadChildren: () => import('./forgotpopup/forgotpopup.module').then(m => m.ForgotpopupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordPageModule)
  },
  {
    path: 'getstarted',
    loadChildren: () => import('./getstarted/getstarted.module').then(m => m.GetstartedPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'jobslist',
    loadChildren: () => import('./jobslist/jobslist.module').then(m => m.JobslistPageModule)
  },
  {
    path: 'jobsmaps',
    loadChildren: () => import('./jobsmaps/jobsmaps.module').then(m => m.JobsmapsPageModule)
  },
  {
    path: 'jobslistlogin',
    loadChildren: () => import('./jobslistlogin/jobslistlogin.module').then(m => m.JobslistloginPageModule)
  },
  {
    path: 'jobsmaplogin',
    loadChildren: () => import('./jobsmaplogin/jobsmaplogin.module').then(m => m.JobsmaploginPageModule)
  },
  {
    path: 'joblistsubmit',
    loadChildren: () => import('./joblistsubmit/joblistsubmit.module').then(m => m.JoblistsubmitPageModule)
  },
  {
    path: 'jobdetail',
    loadChildren: () => import('./jobdetail/jobdetail.module').then(m => m.JobdetailPageModule)
  },
  {
    path: 'jobfilter',
    loadChildren: () => import('./jobfilter/jobfilter.module').then(m => m.JobfilterPageModule)
  },
  {
    path: 'basicprofile',
    loadChildren: () => import('./basicprofile/basicprofile.module').then(m => m.BasicprofilePageModule)
  },
  {
    path: 'basicprofile2',
    loadChildren: () => import('./basicprofile2/basicprofile2.module').then(m => m.Basicprofile2PageModule)
  },
  {
    path: 'job1',
    loadChildren: () => import('./job1/job1.module').then(m => m.Job1PageModule)
  },
  {
    path: 'job2',
    loadChildren: () => import('./job2/job2.module').then(m => m.Job2PageModule)
  },
  {
    path: 'job3',
    loadChildren: () => import('./job3/job3.module').then(m => m.Job3PageModule)
  },
  {
    path: 'jobcat',
    loadChildren: () => import('./jobcat/jobcat.module').then(m => m.JobcatPageModule)
  },
  {
    path: 'job8',
    loadChildren: () => import('./job8/job8.module').then(m => m.Job8PageModule)
  },
  {
    path: 'job9',
    loadChildren: () => import('./job9/job9.module').then(m => m.Job9PageModule)
  },
  {
    path: 'job5',
    loadChildren: () => import('./job5/job5.module').then(m => m.Job5PageModule)
  },
  {
    path: 'job4',
    loadChildren: () => import('./job4/job4.module').then(m => m.Job4PageModule)
  },
  {
    path: 'job11',
    loadChildren: () => import('./job11/job11.module').then(m => m.Job11PageModule)
  },
  {
    path: 'job12',
    loadChildren: () => import('./job12/job12.module').then(m => m.Job12PageModule)
  },
  {
    path: 'basicprofile3',
    loadChildren: () => import('./basicprofile3/basicprofile3.module').then( m => m.Basicprofile3PageModule)
  },
  {
    path: 'addexperience',
    loadChildren: () => import('./addexperience/addexperience.module').then( m => m.AddexperiencePageModule)
  },
  {
    path: 'job13',
    loadChildren: () => import('./job13/job13.module').then( m => m.Job13PageModule)
  },
  {
    path: 'job14',
    loadChildren: () => import('./job14/job14.module').then( m => m.Job14PageModule)
  },
  {
    path: 'basicprofile4',
    loadChildren: () => import('./basicprofile4/basicprofile4.module').then( m => m.Basicprofile4PageModule)
  },
  {
    path: 'basicprofile5',
    loadChildren: () => import('./basicprofile5/basicprofile5.module').then( m => m.Basicprofile5PageModule)
  },
  {
    path: 'addeducation',
    loadChildren: () => import('./addeducation/addeducation.module').then( m => m.AddeducationPageModule)
  },
  {
    path: 'basicprofile6',
    loadChildren: () => import('./basicprofile6/basicprofile6.module').then( m => m.Basicprofile6PageModule)
  },
  {
    path: 'completeprofilepopup',
    loadChildren: () => import('./completeprofilepopup/completeprofilepopup.module').then( m => m.CompleteprofilepopupPageModule)
  },
  {
    path: 'profile-preview',
    loadChildren: () => import('./profile-preview/profile-preview.module').then( m => m.ProfilePreviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
