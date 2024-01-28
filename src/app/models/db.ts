import { Course } from "./course";
import { Enrollment } from "./enrollment";
import { Wishlist } from "./wishlist";

export const courseList: Course[] = [
    {
      coursename: 'Advanced Machine Learning',
      courseid: '1',
      enrolleddate: '2024-01-27',
      instructorname: 'Alex Johnson',
      instructorinstitution: 'XYZ University',
      enrolledcount: '10',
      youtubeurl: 'https://youtube.com/course1',
      websiteurl: 'https://example.com/course1',
      coursetype: 'Machine Learning',
      skilllevel: 'Intermediate',
      language: 'English',
      description: 'Learn advanced machine learning techniques.',
    },
    {
      coursename: 'JavaScript Frameworks Masterclass',
      courseid: '2',
      enrolleddate: '2024-01-28',
      instructorname: 'Emily White',
      instructorinstitution: 'ABC Institute',
      enrolledcount: '5',
      youtubeurl: 'https://youtube.com/course2',
      websiteurl: 'https://example.com/course2',
      coursetype: 'JavaScript',
      skilllevel: 'Beginner',
      language: 'English',
      description:"react is good libray of js"}
  ]
  

export const enrollmentList: Enrollment[] = [
    {
      coursename: 'Advanced Machine Learning',
      courseid: '1',
      enrolleddate: '2024-01-27',
      enrolledusername: 'User1',
      enrolleduserid: '1',
      enrolledusertype: 'Student',
      instructorname: 'Alex Johnson',
      instructorinstitution: 'XYZ University',
      enrolledcount: '1',
      youtubeurl: 'https://youtube.com/course1',
      websiteurl: 'https://example.com/course1',
      coursetype: 'Machine Learning',
      skilllevel: 'Intermediate',
      language: 'English',
      description: 'Learn advanced machine learning techniques.',
    },
    {
      coursename: 'JavaScript Frameworks Masterclass',
      courseid: '2',
      enrolleddate: '2024-01-28',
      enrolledusername: 'User2',
      enrolleduserid: '2',
      enrolledusertype: 'Student',
      instructorname: 'Emily White',
      instructorinstitution: 'ABC Institute',
      enrolledcount: '2',
      youtubeurl: 'https://youtube.com/course2',
      websiteurl: 'https://example.com/course2',
      coursetype: 'JavaScript',
      skilllevel: 'Beginner',
      language: 'English',
      description: 'Master JavaScript frameworks with hands-on projects.',
    },
  ];

export const wishlist: Wishlist[] = [
    {
      coursename: 'Advanced Machine Learning',
      courseid: '1',
      likeduser: 'User1',
      likedusertype: 'Student',
      instructorname: 'Alex Johnson',
      instructorinstitution: 'XYZ University',
      enrolledcount: '10',
      coursetype: 'Machine Learning',
      websiteurl: 'https://example.com/course1',
      skilllevel: 'Advanced',
      language: 'English',
      description: 'This is an advanced machine learning course.',
    },
    {
      coursename: 'JavaScript Frameworks Masterclass',
      courseid: '2',
      likeduser: 'User2',
      likedusertype: 'Student',
      instructorname: 'Emily White',
      instructorinstitution: 'ABC Institute',
      enrolledcount: '8',
      coursetype: 'JavaScript',
      websiteurl: 'https://example.com/course2',
      skilllevel: 'Intermediate',
      language: 'English',
      description: 'Master JavaScript frameworks with hands-on projects.',
    },
  ];
