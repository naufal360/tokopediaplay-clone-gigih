# Mid Term Gigih Backend Project

Hello everyone👋,

So, this is a **Gigih** mid term project assignment. The assignment need us to create an API with **Express JS** and connect it with NoSQL **MongoDB** database. The idea is to create a Tokopedia Play clone. Hope this readme file helps what you need to understand the API.

## Database Structure
Database: `mid_term_db`

Colletions:
1. `videos` : This collection will store information about each video data.

    document structure
    
    **#Videos Object**
    ```
    {
        _id: string
        url_thumbnail: string
    }
    ```

2. `products` : This collection will store information about each product data.

    document structure
    
    **#Products Object**
    ```
    {
        _id: string
        link: string
        title: string
        price: integer
        video_id: string
    }
    ```

3. `comments` : This collection will store information about each comment data.

    document structure
    
    **#Comments Object**
    ```
    {
        _id: string
        username: string
        comment_text: string
        video_id: string
        created_at: string
    }
    ```

## API Structure
Flow from request to get response.
### Videos
---
**POST /videos**
```
request -> routes -> controller [createVideo()] -> services [createVideoServices()] -> repository [addVideo()] -> response
```
**GET /videos**
```
request -> routes -> controller [getAllVideos()] -> services [getAllVideosServices()] -> repository [getAllVideos()] -> response
```
**GET /videos/:id**
```
request -> routes -> controller [getVideoById()] -> services [getVideoByIdServices()] -> repository [getVideoById()] -> response
```

### Products
---
**POST /products**
```
request -> routes -> controller [createProduct()] -> services [createProductServices()] -> repository [addProduct()] -> response
```
**GET /videos/:id/products**
```
request -> routes -> controller [getProductByVideoId()] -> services [getProductByVideoIdService()] -> repository [getProductByVideoId()] -> response
```

### Comments
---
**POST /comments**
```
request -> routes -> controller [createComment()] -> services [createCommentServices()] -> repository [addComment()] -> response
```
**GET /videos/:id/comments**
```
request -> routes -> controller [getCommentByVideoId()] -> services [getCommentByVideoIdService()] -> repository [getCommentByVideoId()] -> response
```

## List API Request Response
### Videos
#### **POST /videos**
---
Create a new video and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```
{
    name: string,
    url_thumbnail: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        name: string,
        url_thumbnail: string,
    }
}
```

#### **GET /videos**
---
Returns all videos in the system.

* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: [
        {<video_object>},
        {<video_object>},
        {<video_object>}
    ]
}
```
#### **GET /videos/:id**
---
Returns the specified videos.

* **URL Params**
    
    *Required:* `id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        name: string,
        url_thumbnail: string,
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`

### Products
#### **POST /products**
--- 
Create a new product and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```
{
    link: string,
    title: string,
    price: string,
    video_id: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        link: string,
        title: string,
        price: string,
        video_id: string
    }
}
```
#### **GET /videos/:id/products**
---
Returns the specified product by video id params.

* **URL Params**
    
    *Required:* `video_id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        link: string,
        title: string,
        price: string,
        video_id: string
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`


### Comments
#### **POST /comments**
---
Create a new comments and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```
{
    username: string,
    comment_text: string,
    video_id: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        username: string,
        comment_text: string,
        video_id: string,
        created_at: string
    }
}
```
**GET /videos/:id/comments**
---
Returns the specified comment by video id params.

* **URL Params**
    
    *Required:* `video_id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        username: string,
        comment_text: string,
        video_id: string,
        created_at: string
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`

## How to Run the Server
To run this server API, you have to follow instruction below:

1. **Clone this github**, run this command line: `git clone https://github.com/naufal360/mid-term-be.git`
2. **Open your code editor** and accessing the project folder.
3. **Install dependencies** on project by running this command line: `yarn install`. Make sure you are running in exact same folder project.
4. Check your **mongodb compass or mongodb shell**, you can check is it your database doing well or not.
5. If you're using **mongodb shell just run** `mongosh` in the terminal to check. If you're using **mongodb compass**, you can **run the app** and connect into the database.
6. Back to the **project folder** and **rename .env_examples** file into **.env** and do the instruction inside the file for configuration MongoDB connection Host.
7. Now you can **run the server** by following this command line: `yarn dev`.
8. After make sure the server not getting any error, **open Postman or other app** to test the API.
9. **If you are using Postman**, you can import the *mid-term.postman_collection.json* file on postman.
10. Configure the request to test if you are **not using Postman**, if you are **using postman**, you can jump into next step.
11. Finally, you can **test the API** by hit the request as much as you want.