export class User 
{

    username : string = '';
    userid : string = 'empty';
    email : string = '';
    profession : string = '';
    gender : string = '';
    mobile : string = '';
    address : string = '';
    password : string = '';
    imageUrl: string = ''; // New property for the image URL

    constructor() {}
}


export class UserProfile {
    username: string = '';
    userid: string = 'empty';
    email: string = '';
    profession: string = '';
    gender: string = '';
    mobile: string = '';
    address: string = '';
    password: string = '';
    imageUrl: string = ''; // New property for the image URL
  }
  
  // Dummy data with Google image URLs
  export const dummyUserData: UserProfile[] = [
    {
      username: 'John Doe',
      userid: '123456',
      email: 'john.doe@example.com',
      profession: 'Software Developer',
      gender: 'Male',
      mobile: '123-456-7890',
      address: '123 Main St, Cityville',
      password: 'securepassword',
      imageUrl: 'https://via.placeholder.com/150', // Replace with a Google image URL
    },
    {
      username: 'Jane Smith',
      userid: '789012',
      email: 'jane.smith@example.com',
      profession: 'Data Scientist',
      gender: 'Female',
      mobile: '987-654-3210',
      address: '456 Oak St, Townsville',
      password: 'strongpassword',
      imageUrl: 'https://via.placeholder.com/150', // Replace with a Google image URL
    },
    // Add three more sets of dummy data as needed
    {
      username: 'Alice Johnson',
      userid: '345678',
      email: 'alice.johnson@example.com',
      profession: 'Graphic Designer',
      gender: 'Female',
      mobile: '567-890-1234',
      address: '789 Pine St, Villageland',
      password: 'creativepassword',
      imageUrl: 'https://via.placeholder.com/150', // Replace with a Google image URL
    },
    {
      username: 'Bob Turner',
      userid: '012345',
      email: 'bob.turner@example.com',
      profession: 'Marketing Specialist',
      gender: 'Male',
      mobile: '234-567-8901',
      address: '890 Cedar St, Hamletville',
      password: 'marketingpassword',
      imageUrl: 'https://via.placeholder.com/150', // Replace with a Google image URL
    },
    {
      username: 'Eva Davis',
      userid: '678901',
      email: 'eva.davis@example.com',
      profession: 'Teacher',
      gender: 'Female',
      mobile: '345-678-9012',
      address: '901 Maple St, Countryside',
      password: 'educationpassword',
      imageUrl: 'https://via.placeholder.com/150', // Replace with a Google image URL
    },
  ];
  