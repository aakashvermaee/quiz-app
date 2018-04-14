import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
<<<<<<< Updated upstream
=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> Stashed changes
import { HttpModule } from '@angular/http';

// services
import {HttpWrapperService} from './services/http-wrapper.service';
import {AuthService} from './services/authservice.service';

// Components
import {AppComponent} from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ManageQuizComponent} from './manage-quiz/manage-quiz.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { CategorySelectComponent } from './category-select/category-select.component';
<<<<<<< Updated upstream
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListComponent } from './team-list/team-list.component';
=======
import { TeamListComponent } from './team-list/team-list.component';
import { PostComponent } from './post/post.component';
>>>>>>> Stashed changes
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
import { AddNewCategoryDialogComponent } from './add-new-category-dialog/add-new-category-dialog.component';
import { AddNewTeamDialogComponent, DIALOG_DATA } from './add-new-team-dialog/add-new-team-dialog.component';

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
// Material Imports
import {MatSelectModule, MatFormField, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule , MatDialogModule} from '@angular/material';
<<<<<<< Updated upstream
  @NgModule({
    declarations: [
=======


@NgModule({
  declarations: [
>>>>>>> Stashed changes
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    QuizComponent,
    NotFoundComponent,
    SampleComponent,
    AddQuestionsComponent,
    QuizComponent,
    LoginComponent,
    CategorySelectComponent,
<<<<<<< Updated upstream
=======
    PostComponent,
>>>>>>> Stashed changes
    TeamListComponent,
    AddNewTeamDialogComponent,
    AddNewCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpModule,
    RouterModule.forRoot([
<<<<<<< Updated upstream
    {
      path: '',
      component: RegisterComponent
    },
    {
=======
      {
        path: '',
        component: RegisterComponent
      }, {
>>>>>>> Stashed changes
      path: 'managequiz',
      component : ManageQuizComponent
    }, {
      path: 'home' ,
      component: RegisterComponent
    }, {
      path: 'sample' ,
      component: SampleComponent
    }, {
      path: 'addques' ,
      component: AddQuestionsComponent
    } ,
    {
      path: 'quiz-select',
      component: QuizSelectComponent
    },
    {
      path: 'login' ,
      component: LoginComponent
    },
    {
      path: 'category' ,
      component : CategorySelectComponent
    },
    {
      path: 'team',
      component: TeamListComponent
    },
    {
<<<<<<< Updated upstream
     path: '**',
      component: NotFoundComponent
    }
    ]),
       ],
    providers: [
    HttpWrapperService,
    AuthService
    ],
    entryComponents: [AddNewTeamDialogComponent,AddNewCategoryDialogComponent],
    bootstrap: [AppComponent]
  })

  export class AppModule {
    constructor() {
    }
  }
=======
      path: 'post',
      component: PostComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }])
  ],
providers: [
    HttpWrapperService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ AddNewTeamDialogComponent, AddNewCategoryDialogComponent ],
})

export class AppModule {
constructor() {
}
}
>>>>>>> Stashed changes
