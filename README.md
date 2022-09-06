# MyYoutube

![Home Page](/home_page.png "Home Page")

This project is not exactly a Youtube clone. It has not all the functionalities Youtube has, however, it includes some similar functionalities; such as:

- Searching videos,
- Watching videos,
- Filter by categories,
- See channel info

Used **Context API** to switch between light theme and dark theme. Used **Material UI** CSS library.

To obtain videos and channels, used an API named: [Youtube v3](https://rapidapi.com/ytdlfree/api/youtube-v31?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel) from [Rapid API](https://rapidapi.com).

Uploaded to [Netlify](https://www.netlify.com/) to host the project (Here is the [Demo](https://timely-gelato-0caab0.netlify.app)).

## How to clone

First, you should go with the usual process to clone a React project:

```
git clone https://github.com/yarkincaner/reactjs-youtube.git
```

and

```
npm install
```

However, since Rapid API used, you should create **.env** file that contains your API key. Otherwise, project will not work properly.

```
REACT_APP_RAPID_API_KEY = <KEY>
```
