import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'

import {registerAction} from 'src/app/auth/store/actions'
import {Observable} from 'rxjs'
import {isSubmittingSelector} from '../../store/selectors'
// import {AuthService} from '../../services/auth.service'
// import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'

@Component({
  selector: 'mc-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) // private authService: AuthService
  {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    // console.log('isSubmitting$', this.isSubmitting$)
  }

  private initializeForm(): void {
    console.log('Initialize form')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('Submit ', this.form.value, this.form.valid)
    this.store.dispatch(registerAction(this.form.value))
    // this.authService
    //   .register(this.form.value)
    //   .subscribe((currentUser: CurrentUserInterface) => {
    //     console.log('currentUser', currentUser)
    //   })
  }
}
