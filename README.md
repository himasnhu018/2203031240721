# 🔗 URL Shortener Microservice

A robust HTTP URL Shortener Microservice built with **Node.js**, **Express.js**, **MongoDB**, and a reusable **Logging Middleware**.
---

## 🧩 Features

- ✅ Shorten long URLs
- ✅ Optional custom shortcodes
- ✅ Automatic expiry (default: 30 minutes)
- ✅ Redirect support
- ✅ MongoDB persistence
- ✅ Reusable logging middleware
- ❌ No login required

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

```
![REGI](https://github.com/user-attachments/assets/f42b002e-5f13-4726-8bc2-3a331484e097)

![id](https://github.com/user-attachments/assets/b35902dc-d1ff-49f4-9ef8-4875d4a720ae)

![handler](https://github.com/user-attachments/assets/472cceaa-1912-46ab-a5ff-c2cdf2841b61)

![sortner](https://github.com/user-attachments/assets/f0f31329-11a5-4db0-85de-5e82961f44c1)

![get_sort_link](https://github.com/user-attachments/assets/9b24e513-3138-40bf-a79e-a9b2db3d3109)






