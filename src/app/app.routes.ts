import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { BlogComponent } from './blog/blog.component';
import { NewblogComponent } from './newblog/newblog.component';
import { OtherblogComponent } from './otherblog/otherblog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileGaurdeService } from './gaurds/profileGaurd.service'

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',canActivate:[ProfileGaurdeService],component:ContactComponent},
    {path:'course',component:CourseComponent},
    {path:'course/:name',component:CourseDetailsComponent},
    {path:'blog',component:BlogComponent,
        children:[
            {
                path:'newBlog', component:NewblogComponent
            },
            {
                path:'otherBlog', component:OtherblogComponent
            }
        ]
    },
    {path:'**',component:NotfoundComponent},
];
