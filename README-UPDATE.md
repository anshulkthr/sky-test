**Sky tech test**

The work I completed took approx 2 days to complete. I tried to complete some of the tasks mentioned in README and for basic UI I used the sky toolkit.

**What did I complete?**
Tasks:

**Basic Search**
- Add a search box that retrieves results via the API and displays them in a list.
- The search should occur without the page refreshing

**Pagination**
- Add a pagination component to the bottom of the results which fetches the next results without refreshing the page.
- There should be 10 results per page

**Slugs**
- Update the API to extract the "slug" at the end of each article URL and add them to the response
- For example, the slug for `https://www.sky.com/help/articles/sky-broadband-pro` would be `sky=broadband-pro`

**Sky Mobile**
- Update the API to prioritize any results containing "Sky Mobile" by pushing them to the top.

**Pagination API**
- Update the API to accept a `page` parameter which will result in it returning only the result for that page.
- There should be 10 results per page
- This parameter should start at 1
- For example, given `page=3` you should return results at indices `30-39`

**To do**
If I was allowed additional time to develop the app further, I would:

Add schema validation using prop-type/yup or typescript.
Write component-level test cases.
Complete the remaining task for the recommendation system based on the last five values that we will store in local storage.
Will convert component level state to global state using context provider.
