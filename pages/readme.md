# Pages

**api/auth** folder with the authentication rules with prisma integration

- google auth
- fenix auth

**login.jsx** is an example of a protected page, if any page needs the user to be authenticated this is the way to do.

- login page for testing so far
- for client side rendering use required true in useSession
- put the authenticated guard and if user is not authenticated it redirects to the sign in.
- for server side rendering we redirect to the login page
