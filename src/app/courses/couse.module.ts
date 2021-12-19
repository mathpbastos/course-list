import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "src/shared/component/star/star.module";
import { AppPipeModule } from "src/shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                /* NO CAMINHO /courses DEVERÁ SER APONTADO O CourseListComponent */
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
        ])
    ]
})
export class CourseModule{

}