export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
  ],
}