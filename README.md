# FS-coding-challenge

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
