# [SideNote](https://sidenote.vercel.app/)

**A web application to stream trailer for free¹.**

> __NOTE__: __THIS PROJECT IS STILL UNDER DEVELOPMENT.__

> __NOTE__: _This project is used for learning purposes; do not take it too seriously._
> 
> ¹ __DISCLAIMER__: _The trailers shown in the app are for demonstration purposes. I don't own any of the videos provided._

This project is a web application, built using technologies such as the [React](https://react.dev/) library, [Tailwind CSS](https://tailwindcss.com/), [Next.js](https://nextjs.org/), [NextAuth](https://next-auth.js.org/), [Prisma](https://www.prisma.io/), and [MongoDB](https://www.mongodb.com/).

The application offers OAuth2.0 authentication, allowing users to sign in using their Google or GitHub accounts.

## INTRODUCTION

In this fast-paced, attention-starved world, SideNote emerges as the true master of capturing and capitalizing on the elusive human attention span. Forget about wasting time on full-length movies; SideNote is here to serve you the finest, most exhilarating trailers ever conceived.

SideNote delivers an extensive catalog of handpicked trailers, carefully curated to maximize your adrenaline rush. From high-octane action flicks to sultry romances, mind-bending sci-fi adventures to side-splitting comedies, SideNote guarantees a high-energy experience like no other. We bring you the essence of cinema distilled into bite-sized, heart-pounding moments.

Our interface is a work of art - a visual feast designed to lure you into the never-ending world of trailer addiction. Prepare to be dazzled by a stunning platform that keeps your attention locked onto the screen. Discover the latest releases, explore trending trailers, and unlock exclusive glimpses behind the scenes. SideNote is the ultimate seducer, keeping you craving for more.

Whether you're at home, in transit, or on a corporate jet, SideNote is always within reach. With support for smartphones, tablets, web-browsers, you can let the world of cinema unfold in the palm of your hand.

SideNote is your gateway to the ultimate power play in the attention economy. Step into the realm where trailers reign supreme, and anticipation becomes the currency of success. Prepare for a future where SideNote dominates the attention market, fueling your addiction and leaving you hungry for the next adrenaline rush. Welcome to SideNote, where we take control of your attention, and the world is at our fingertips. Greed is good, my friend, and SideNote is here to prove it.

## FEATURES

> __NOTE__: _Some of these features have not been implemented yet._

SideNote has the following features:

- [x] User authentication with OAuth: Users can sign in using their Google, or GitHub accounts.

- [x] Browse movies: Users can browse a catalog of movies and view detailed information about each title, including a synopsis, the cast and duration.

- [x] Browse by category: Users can see all available categories with the respective movies.

- [ ] Search for titles: Users can search for movies and TV shows by title or genre.

- [x] Add titles to their watchlist: Users can add titles to their watchlist to keep track of titles they want to watch later.
    
- [x] View recommended titles: Users can view a list of recommended titles based on their watch history and ratings.

- [ ] Manage profile: Users can update their profile information, including their name and profile picture.



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
