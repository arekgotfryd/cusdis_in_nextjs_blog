Repository with example of how to integrate [cusdis](https://github.com/djyde/cusdis) with nextjs blog [Learn Next.js](https://nextjs.org/learn).

# Setup
1. Run `npm i`
2. Run `npm run dev`

# Create new project in cusdis web app
1. Create new account on [cusdis.com](https://cusdis.com/)
2. Create new website on cusdis.com ![Crate new website](public/images/newwebsite.png)

# Modify appId prop of ReactCusdis component
1. Go to newly created website and copy website id from the browser address bar ![Website id](public/images/referencenumber.png)
2. Copy id and paste it as appId prop value of ReactCusdis component
```jsx
       <ReactCusdis
          attrs={{
            host: 'https://cusdis.com',
            appId: 'your app id',
            pageId: postData.id,
            pageTitle: postData.id,
            theme: 'dark'
          }}
        />
```
3. You should see following view of first post
![firstpost](public/images/firstpostview.png)