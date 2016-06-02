import {Component} from '@angular/core';
// import {
//   FIREBASE_PROVIDERS,
//   defaultFirebase,
//   firebaseAuthConfig,
//   AuthProviders,
//   AuthMethods
// } from 'angularfire2';
// bootstrap(MyApp, [
//   FIREBASE_PROVIDERS,
//   defaultFirebase('https://<some-firebase>.firebaseio.com'),
//   firebaseAuthConfig({
//     provider: AuthProviders.Facebook,
//     method: AuthMethods.Popup,
//     remember: 'default',
//     scope: ['email']
//   })
// ]);

@Component({
    selector: 'as-register',
    templateUrl: 'app/register/register.html',
    styleUrls: [
        'app/register/register.css'
    ]
})


//ToDo: Integrate Firebase!
export class RegisterComponent {

}
