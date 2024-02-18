# Test task

Create an application for a company providing car rental services in Ukraine. The application consists of 3 pages:

1.Home page with a general description of the services provided by the company. Styling and design are at your discretion.

2.A page containing a catalog of cars with different configurations that the user can filter by brand, hourly rental price, and the number of kilometers the car has traveled (mileage).

3.A page with user-added advertisements in favorites. The appearance of the program should consist of navigation (design at your discretion) and a viewing area.

## Technical specification

1.Implement an advertisement card for renting a car according to the layout. On the first page of the catalog, 12 advertisements should be rendered, and the rest should load upon clicking the "Load more" button.

3.When clicking the heart-shaped button on the advertisement card, it should be added to the favorites list, and the button color should change. The final user actions should be preserved when refreshing the page.

4.If the heart button is clicked again, the advertisement should be removed from the favorites list, and the button color should revert to the initial state.

5.Clicking the "Learn more" button should open a modal window with detailed information about the car and its rental conditions. The modal window should close when clicking the close button (X), clicking on the backdrop, or pressing the Esc key.

6.In the code, the car's mileage should be specified as a single value (e.g., 4500), but in the UI, it should be displayed with commas (4,500).

7.Implement the "Rental car" button as a link that allows the user to contact the company via the phone number +380730000000.

8.Add filtering with a dropdown for car brands based on makes.json. Show advertisements with cars of the selected brand.

### Additional Task - Filtering

1.Implement a dropdown with car brands based on makes.json - show advertisements with cars of the selected brand.

2.Add an additional dropdown for hourly rental prices (with a $10 step) - show advertisements with cars whose rental price falls within the user-selected price range.

3.Include a group of input fields for defining the mileage range within which the user will search for advertisements.

### Criteria for Completion

1.The layout is fixed in pixels, semantic, and valid.

2.Mandatory use of Redux.

3.Utilize the Axios library for making requests.

4.Pagination is implemented on the backend.

5.No errors in the browser console.

6.Interactivity works according to the technical specification.

7.The code is formatted and does not contain unused code.

8.The repository includes a descriptive README.md.

9.The project is deployed on GitHub Pages or netlify.com.

#### Test project in my github pages

https://alexandrvorontsov.github.io/rental-car
