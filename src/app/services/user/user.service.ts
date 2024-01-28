import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { courseList, enrollmentList, wishlist } from 'src/app/models/db';
import { Enrollment } from 'src/app/models/enrollment';
import { dummyUserData } from 'src/app/models/user';
import { Wishlist } from 'src/app/models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  getAllUsers(): Observable<any> {
  
    return of(dummyUserData);
  }

  getYoutubeCourseList(): Observable<any> {
    return of(courseList.filter(course => course.youtubeurl !== ''));
  }

  getWebsiteCourseList(): Observable<any> {
    return of(courseList.filter(course => course.websiteurl !== ''));
  }

  getCourseListByName(coursename: string): Observable<any> {
    const course = courseList.find(course => course.coursename === coursename);
    return of(course);
  }


  getProfileDetails(loggedUser: string): Observable<any> {
    // Assuming you have some static user profile data
    const userProfile = {
      username: loggedUser,
      email: 'user@example.com',
      // Add more user profile data as needed
    };
    return of(userProfile);
  }

  UpdateUserProfile(user: any): Observable<any> {

    return of(user);
  }

  getChappterListByCourseName(coursename: string): Observable<any> {
    // Assuming you have some static chapter data for the course
    const chapters = [
      { chapterNumber: 1, title: 'Introduction to the Course' },
      { chapterNumber: 2, title: 'Getting Started' },
      // Add more chapters as needed
    ];
    return of(chapters);
  }

 
  getEnrollmentByEmail(loggedUser: string, currRole: string): Observable<any> {
    const filteredEnrollments = enrollmentList.filter(
      enrollment => enrollment.enrolledusername === loggedUser && enrollment.enrolledusertype === currRole
    );

    return of(filteredEnrollments);
  }
  getWishlistStatus(coursename: string, loggedUser: string): Observable<any> {
    const isLiked = wishlist.some(item =>
      item.coursename === coursename && item.likeduser === loggedUser
    );
    return of({ isLiked });
  }

  getWishlistByEmail(loggedUser: string): Observable<any> {
    const userWishlist = wishlist.filter(item => item.likeduser === loggedUser);
    return of(userWishlist);
  }

  getAllWishlist(): Observable<any> {
    return of(wishlist);
  }
  
  enrollNewCourse(enrollment: Enrollment, loggedUser: string, currRole: string): Observable<any> {
    enrollmentList.push(enrollment);  // Add the new enrollment to the static data
    return of({ success: true });
  }

  addToWishlist(_wishlist: Wishlist): Observable<any> {
    wishlist.push(_wishlist);  // Add the new wishlist item to the static data
    return of({ success: true });
  }

  getEnrollmentStatus(coursename: string, loggedUser: string, currRole: string): Observable<any> {
    const isEnrolled = enrollmentList.some(item =>
      item.coursename === coursename && item.enrolledusername === loggedUser && item.enrolledusertype === currRole
    );
    return of({ isEnrolled });
  }



}
