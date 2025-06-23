# 🔗 URL Shortener Microservice

A robust HTTP URL Shortener Microservice built with **Node.js**, **Express.js**, **MongoDB**, and a reusable **Logging Middleware**. Built as part of the Campus Hiring Evaluation challenge.

---

## 🧩 Features

- ✅ Shorten long URLs
- ✅ Optional custom shortcodes
- ✅ Automatic expiry (default: 30 minutes)
- ✅ Redirect support
- ✅ Full analytics (click count, timestamp, referrer, IP)
- ✅ MongoDB persistence
- ✅ Reusable logging middleware
- ❌ No login required

---


---

## 🛠️ Setup

### 1. Clone & Install

```bash
git clone git@github.com:himasnhu018/2203031240721.git
cd Backend Test Submission
npm install

mongoose.connect("mongodb://127.0.0.1:27017/urlshortener")

headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}
Run the Server
node server.js

POST /shorturls

{
  "url": "https://example.com",
  "validity": 15,
  "shortcode": "mycustom"
}

{
  "shortLink": "http://localhost:5000/mycustom",
  "expiry": "2025-06-23T15:30:00Z"
}

GET /:shortcode

GET http://localhost:5000/mycustom

GET /shorturls/:shortcode


Response: 
{
  "originalURL": "https://example.com",
  "createdAt": "2025-06-23T14:00:00.000Z",
  "expiry": "2025-06-23T14:30:00.000Z",
  "totalClicks": 2,
  "clickDetails": [
    {
      "timestamp": "2025-06-23T14:15:00.000Z",
      "referrer": "direct",
      "location": "::1"
    }
  ]
}




Author
Himanshu Kumar Gupta
Roll No: 2203031240721
Email: 2203031240721@paruluniversity.ac.in



---

### 📸 Image Naming Tip

Save your screenshots like this in a `screenshots/` folder:

- `registration.png`
- `id.png`
- `handler.png`
- `sortner.png`
- `get_sort_link.png`

> You can take screenshots directly from Postman after making each request and rename accordingly.

---

Would you like me to zip a folder structure + template screenshots to help you out quickly? Or do you want a Postman collection `.json` to import directly?

Let me know — you're almost done! 🚀
