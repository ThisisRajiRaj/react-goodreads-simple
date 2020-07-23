
# React-GoodReads-MyShelf
This project is a React-based component to render your own book shelf. 
It was built using create-react-app.

## To use this component
**Prerequisites:** You need to have Node + NPM installed.

```jsx
import React from 'react';
import { Bookshelf } from 'react-goodreads-myshelf';

export default function App() {
	return (
		<Bookshelf userid="USER_ID_HERE" apikey="API_KEY_HERE" />
	);
}
```
userid and apikey are mandatory properties. Other properties to pass in are:
- shelf: string matching the shelf to fetch goodreads data from. Default is 'read'      
- page: string representing the number of pages of results to fetch from goodreads. Default is '1'
- per_page: string representing the number of results to be fetched per page. Default is '10'
- sort: column to sort the results, represented as string. Default is 'date_read'

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


