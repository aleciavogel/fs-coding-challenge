# FS-coding-challenge

## Notes from Alecia

I decided to use NextJS for this project because it's a framework that I'm familiar with. You can view a live version of
the project at the following link:

[https://av-crop-cover.netlify.app](https://av-crop-cover.netlify.app) (password is `regrow`)

I used a combination of TailwindCSS, React Table, and shadcn components. I enjoy the
flexibility of these libraries and frameworks since they allow me to cut down on the amount of CSS and boilerplate
code that I would otherwise have to write. This way, I could focus the majority of my time on the logic and data
management component of the project.

I had time to write some unit tests, which you can find in the `./lib/__tests__` directory. I used Jest and React Testing 
Library. If I had time, I would've also liked to add some E2E tests with Cypress for some added peace of mind. This
project felt small enough that adding visual regression testing with Storybook/Chromatic would've potentially been overkill.

In terms of extra bells and whistles, I added:

- A tool tip that explains why certain rows are labelled `N/A` (hover over the `N/A` text to activate it)
- A circular progress bar that shows the percentage of cover crop adoption for each region
- Buttons and icons to allow users to sort the table by different columns
- A search bar that allows users to filter the table by region name

If I had more time, I would've liked to add:

- A button that allows you to toggle between metric tonnes and kilograms for the GHG data
- Ability to show and hide columns
- Better search capabilities (fuzzy search, etc.)
- Mobile friendliness
- Visual regression and E2E testing

Assumptions I made include:

- The unit for Greenhouse Gas data being MTCO2e (metric tons of CO2 equivalent) based off of a couple of Google searches
  I did. I'm not 100% sure if this is correct, but it seemed to be the most common unit of measurement for GHG emissions.

Thank you for your consideration and I hope you enjoy reviewing my submission!

### Setup & Installation

I'm using Node v21.7.3 and Yarn v1.22.22 for this project. If you wish to install this project on your machine, you can do so by
running the following command:

```bash
yarn && yarn dev
```

From there, you'll be able to open `http://localhost:3000` in order to view the final product. Please don't hesitate to
get in touch with me if you have any issues getting the project to run.

# Original Instructions

We would like you to build a table that displays information about cover crop adoption and greenhouse gas (GHG) emissions for a list of regions. In the `public` folder you will see three different json files that represent the return value of three different GET API endpoints.

```
/***** 
* filename: regions.json
* description: Information about regions. Each item in the list represents a
* [region_id, region_name, total_field_acreage]. total_field_acreage is the
* total acreage of agricultural land in the region.  
*/
[
  [1,Adair,4959],
  [2,Adams,2269],
  [3,Allamakee,2511],
  [4,Appanoose,1261],
  [5,Audubon,3709],
  [6,Benton,1364],
  ...
]
```

```
/***** 
* filename: cover_crop.json
* description: Information about cover crop adoption in a list of regions. Each
* item in the list represents a [region_id, cover_crop_acres]. cover_crop_acres
* is the number of acres in the region that had cover crops planted in the most
* recent year. cover_crop_acres will always be less than or equal to the
* total_field_acreage for that region. 
*/
[
  [1,807],
  [2,491],
  [3,1116],
  [4,312],
  [5,1657],
  [6,16],
  ...
]
```

```
/***** 
* filename: ghg.json
* description: Information about the greenhouse gas (GHG) emissions that originate
* from agriculture in a list of regions. Each item in the list represents a
* [region_id, ghg_kg]. ghg_kg is the total amount of greenhouse gasses, represented
* in kilograms, produced from agriculture in the associated region. 
*/
[
  [1,310274],
  [2,315423],
  [3,388582],
  [4,330399],
  [5,72464],
  [6,200101],
  ...
]
```

Using this information, create the following UI. The gray boxes are placeholders for information you will populate in the UI. The top row is the static header for the rows below.

![reference.png](https://github.com/regrow-coding-challenge/FS-coding-challenge/blob/main/public/region_data_ui.png)

Requirements:
* Please fork this repo into a private repo and, once finished, add the github users listed by your recruiter as amins.
* Use Typescript and React.
* Regions should be shown in alphabetical order.
* Cover crop data should be displayed as the percentage of acres where cover crops have been planted divided by the total acreage for that region.
* Greenhouse gas data should be expressed in metric tonnes of GHG per acre of farmland in that region.
* Please fetch (don’t import) the json files found in the public folder.

General Guidelines:
* Please timebox this exercise to no more than two hours.
* Please include a brief writeup that includes any assumptions you’ve made along with any further improvements you would add given more time.
* We’re most interested in seeing good architecture and data management as if this were going to fit into a larger application.
* If time allows we would like to see tests for your code.
* We will not judge the submission on the aesthetics of the UI but we’d like to see some styling applied to the table if you have time.
