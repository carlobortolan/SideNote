# [SideNote](https://sidenote.vercel.app/)

**A Netflix-like web application to stream videos and concerts for free.**

> __NOTE__: __THIS PROJECT IS STILL UNDER DEVELOPMENT.__

This project is a web application similar to Netflix, built using modern technologies such as the [React](https://react.dev/) library, [Tailwind CSS](https://tailwindcss.com/), [Next.js](https://nextjs.org/), [NextAuth](https://next-auth.js.org/), [Prisma](https://www.prisma.io/), and [MongoDB](https://www.mongodb.com/).

The application offers OAuth2.0 authentication, allowing users to sign in using their Google or GitHub accounts.


## FEATURES

> __NOTE__: _Some of these features have not been implemented yet._

SideNote has the following features:

- User authentication with OAuth: Users can sign in using their Google, or GitHub accounts.

- Browse movies: Users can browse a catalog of movies and view detailed information about each title, including a synopsis and duration.
  
- Search for titles: Users can search for movies and TV shows by title or genre.

- Add titles to their watchlist: Users can add titles to their watchlist to keep track of titles they want to watch later.
    
- View recommended titles: Users can view a list of recommended titles based on their watch history and ratings.

- Manage profile: Users can update their profile information, including their name and profile picture.



## INSTALLATION

To get started with the project, you can follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/carlobortolan/SideNote.git
    ```
2. Navigate to the project directory:
    ```
    cd sidenote
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Create a .env file in the root directory with the following environment variables:
    ```
    DATABASE_URL=<secret>
    GITHUB_CLIENT_SECRET=<secret>
    GITHUB_CLIENT_ID=<secret>
    GOOGLE_CLIENT_ID=<secret>
    GOOGLE_CLIENT_SECRET=<secret>
    NEXTAUTH_SECRET=<secret>
    NEXTAUTH_JWT_SECRET=<secret>
    ```
5. Start the application:
    ```
    npm run dev
    ```

6. Open the application in your browser at http://localhost:3000.


## TECHNOLOGIES USED

- [React](https://react.dev/): A JavaScript library for building user interfaces.
    
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building responsive designs.
    
- [Next.js](https://nextjs.org/): A framework for building server-side rendered React applications.
    
- [Prisma](https://www.prisma.io/): A database toolkit for building scalable and type-safe databases.
    
- [MongoDB](https://www.mongodb.com/): A document-oriented NoSQL database.
    
- [NextAuth](https://next-auth.js.org/): An authentication library for Next.js applications that supports OAuth.

## CONTRIBUTING

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull
request.

## LICENSE

This project is licensed under the GPL-3.0 license. See the [LICENSE](LICENSE) file for details.

---

© Carlo Bortolan

> Carlo Bortolan &nbsp;&middot;&nbsp;
> GitHub [carlobortolan](https://github.com/carlobortolan) &nbsp;&middot;&nbsp;
> contact via [carlobortolan@gmail.com](carlobortolan@gmail.com)
