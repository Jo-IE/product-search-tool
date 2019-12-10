# Product Search Tool (Quick Hunt)

https://quickhunt.herokuapp.com/

## Functionality

This app uses the Product Hunt API to enable the user to search for products by topic. In the results, the user sees the name, tagline, description, review rating and vote count for the product. When the user clicks on the thumbnail associated with the product, the user is directed to the product listing on the Product Hunt website.

## To Install:

1. Download or clone this project using `git clone <repo url>`

2. Navigate to the repo's directory using `cd producthunt`

3. Run `npm install` to install the server dependencies.

4. Navigate to the server directory `cd client` and run `npm install` to install client dependencies.

5. Go to the Product Hunt website, create an account and/or login.

6. Navigate to API Dashboard and click on Add an Application.

7. Enter an App Name and redirect URI (`localhost:3000/` will be sufficient in this case)

8. Get your access token (public scope) by entering this command into the terminal.

   `curl --header "Content-Type: application/json" \ --request POST \ --data '{"client_id":"YOUR_API_KEY_HERE","client_secret":"YOUR_API_SECRET_HERE", "grant_type": "client_credentials"}' \ https://api.producthunt.com/v2/oauth/token`

9) Alternatively you can generate a developer's token on your application's page.

10) Save your access token in a `.env` file in the project root as `ACCESS_TOKEN`.

11) While in the root directory, run the start command to start the client and server:

    `npm run devstart`
