import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor() {}


  
  getTotalUsers(): Observable<any[]> {
    const users = [{ name: 'User 1' }, { name: 'User 2' }];
    return of(users);
  }

  getTotalCourses(): Observable<any[]> {
    const courses = [{ name: 'Course 1' }, { name: 'Course 2' }];
    return of(courses);
  }

  getTotalWishlist(): Observable<any[]> {
    const wishlist = [{ name: 'Wishlist Item 1' }, { name: 'Wishlist Item 2' }];
    return of(wishlist);
  }

  getTotalEnrollments(): Observable<any[]> {
    const enrollments = [{ name: 'Enrollment 1' }, { name: 'Enrollment 2' }];
    return of(enrollments);
  }

  getTotalEnrollmentCount(): Observable<number> {
    const enrollmentCount = 10;
    return of(enrollmentCount);
  }

  getTotalChapters(): Observable<any[]> {
    const chapters = [{ name: 'Chapter 1' }, { name: 'Chapter 2' }];
    return of(chapters);
  }
}
