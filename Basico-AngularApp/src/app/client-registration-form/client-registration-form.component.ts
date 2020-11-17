import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Student } from '../../../../models/student';
import { Subject , BehaviorSubject, combineLatest, Observable} from 'rxjs';
// import { StaffParentPrivateInfo } from '../../../../models/staff_parent_private_info';
// import { ScheduleItem } from '../../../../models/scheduleitem';
// import { DatabaseService } from '../../../../services/database.service';

// //Translation part
import { FuseTranslationLoaderService } from '../../@fuse/services/translation-loader.service';
// import { locale as english } from './i18n/en';
// import { locale as creole } from './i18n/cr';
// import { locale as french } from './i18n/fr';
// import { locale as spanish } from './i18n/es';
// import { GradeLevel } from '../../../../models/grade_level';
// import { StudentMedicalInfo } from 'app/models/student_medical_info';
// import { StudentPrivateInfo } from 'app/models/student_private_info';
// import { StudentsService, StudentView } from '../../students.service';
// import { Section } from 'app/models/section';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
// import { LogService } from 'app/services/log.service';
// import { GeolocationService } from 'app/services/geolocation.service';
import {map, startWith} from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-registration-form',
  templateUrl: './client-registration-form.component.html',
  styleUrls: ['./client-registration-form.component.css']
})
export class ClientRegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
