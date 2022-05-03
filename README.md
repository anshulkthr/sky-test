**Sky Assessment**

**What did I complete?**
Tasks:

**Basic Search**
- Add a search box that retrieves results via the API and displays them in a list.
- The search should occur without the page refreshing

EndPoint URL: http://localhost:3001/search?query=broadband

![search](https://user-images.githubusercontent.com/9865547/166441115-b5bad491-4171-45a0-bced-bf3786af7abd.png)


**Pagination**
- Add a pagination component to the bottom of the results which fetches the next results without refreshing the page.
- There should be 10 results per page

EndPoint URL: http://localhost:3001/search?query=broadband&page=1&limit=10

http://localhost:3001/search?query=broadband&page=1

**limit**: it's value we can change.(default is 10)
![Pagination](https://user-images.githubusercontent.com/9865547/166441198-98f7b60a-815b-4da1-8873-226fd578bd38.png)


**Slugs**
- Update the API to extract the "slug" at the end of each article URL and add them to the response
- For example, the slug for `https://www.sky.com/help/articles/sky-broadband-pro` would be `sky=broadband-pro`

EndPoint URL: http://localhost:3001/search?query=broadband&page=1&limit=10&slug=1

http://localhost:3001/search?query=broadband&slug=1

**Note**: Here it was not clear if last slug doesn't start with 'sky' then what slug we will consider so I used the last handle as a slug.
![slug](https://user-images.githubusercontent.com/9865547/166441558-8140a33d-87c3-401e-a265-57bcb5f54a11.png)


**Sky Mobile**
- Update the API to prioritize any results containing "Sky Mobile" by pushing them to the top.
EndPoint URL: http://localhost:3001/search?query=broadband&sort_key=Sky%20Mobile

http://localhost:3001/search?query=broadband&page=1&sort_key=Sky%20Mobile

sort_key: this parameter is case sensitive.
<img width="716" alt="Screenshot 2022-05-03 at 12 13 44 PM" src="https://user-images.githubusercontent.com/9865547/166443499-e2ca06b8-f595-4dea-8fea-49f493682046.png">



**Pagination API**
- Update the API to accept a `page` parameter which will result in it returning only the result for that page.
- There should be 10 results per page
- This parameter should start at 1
- For example, given `page=3` you should return results at indices `30-39`

EndPoint URL: http://localhost:3001/search?query=broadband&page=1&limit=10

http://localhost:3001/search?query=broadband&page=1
![page](https://user-images.githubusercontent.com/9865547/166443578-2289316d-7012-4b44-a0bd-0065187e519e.png)



**Search History**
- Update the search page to save recent search terms in the browser (Cookies or Local Storage) and display them in a list.
- There should never be more than 5 saved terms.
- The terms should be removed according to FIFO (First In First Out)

**Note**: I am not listing somewhere, just storing with local storage in FIFO sequence, if any term is alreay exist with recent 5 and we are searching again then in that case I am updating the index of that term .

<img width="415" alt="Screenshot 2022-05-03 at 12 05 22 PM" src="https://user-images.githubusercontent.com/9865547/166442500-2a6884df-ec3e-4b24-bc27-a611cf396705.png">
