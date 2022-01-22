# TTP Assignment #9 - Bank of React

# Done by : 
* [Farai Mutukumira](https://github.com/FaraiMajor)
* [Kristy Delacruz](https://github.com/itsskristyy)
* [Raja Awais Azhar](https://github.com/razhar5214)

#Goals:

## Client-side Routing

Client-side `routing` is a bit of a misnomer. 

On the server, `routing` generally refers to the way we 
define the URLs and RESTful resources that make up our application. Whether 
we are asking for data from the database or persisting data, our server 
needs to know where the data lives. Server `routes` help us keep track of this information.

In the browser, things are a little different. When we build Single-Page Applications, we render 
our data inside of the browser. The data lives on a server, so our data's "addresses" have 
been defined elsewhere. We only need to know what these pre-defined addresses are to consume them. 
We'll still have a lot of different `views` for our data, and we won't want to 
show all of them on the page at once. Client-side `routing` is how we'll describe 
which views we are showing on the page at any given time.

## Routing in React
There is no way to handle client-side routing in the React library.  Instead, there are multiple libraries available to handle this specific task.  The most popular library is called `React Router`.  This library is hands down the most popular solution for client-side routing.  Recently, `React Router` made a major overhaul to their library with the release of `v4`.  In the newest version, the team behind `React Router` refactored the library to make everything just a regular React components.  Some online tutorials have not yet updated their libraries, so we recommend using the [official docs](https://reacttraining.com/react-router/)

## Setting up React Router

React Router is going to allow us to swap out sets of components using familiar 
"routing" patterns, rather than writing lots of complicated `if-statements` in our JavaScript.

To demonstrate the power of this tool, we're going to build a personal banking application, where we can
independently display the Debits and Credits made to each account.


### LAB: Adding Debits and Credits

Let's add some more features to our banking app, using the following `User Stories`!

* The Debits index endpoint is located at `https://moj-api.herokuapp.com/debits`
* The Credits index endpoint is located at `https://moj-api.herokuapp.com/credits`

#### Updating the Account Balance 

```text
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits
```

#### Adding Debits
```text
Viewing the Debits page:

GIVEN I am on the Home Page
WHEN I click on 'Debits'
THEN I should be redirected to the Debits page
AND I should see a title of 'Debits' on the page
```

```text
Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding debits:

GIVEN I am on the Debits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Debits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

#### Adding Credits

```text
Viewing the Credits page:

GIVEN I am on the Home Page
WHEN I click on 'Credits'
THEN I should be redirected to the Credits page
AND I should see a title of 'Credits' on the page
```

```text
Displaying debits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```

```text
Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
```

```text
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
```