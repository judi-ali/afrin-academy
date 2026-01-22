# Afrin Academy Platform

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Visit%20Web%20App-Affin%20Academy-4ade80?style=for-the-badge&logo=vercel&logoColor=white)](https://afrin-academy-demo.vercel.app)

## 🔗 Social Links

<div style="display: flex; gap:20px;">
  <a href="https://github.com/judi-ali" title="GitHub Profile">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" />
  </a>

  <a href="https://www.linkedin.com/in/judi-ali" title="LinkedIn Profile">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>

  <a href="mailto:joudisalehali@gmail.com" title="Send Email">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</div>

## Overview

Afrin Academy is a modern web platform designed to streamline communication between academy administration and students' parents. It provides real-time access to attendance records, student management, and administrative insights through a secure and user-friendly interface.

<!-- ========================================= -->
![Afrin Academy Admin Dashboard](./assets/dashboard.png)
<!-- ========================================= -->

## 🚀 Features

### 🎓 Student Access
- Each student receives a unique card with a **QR code**.
- QR code enables secure login to the student dashboard.
- Students can view detailed attendance reports including:
  - Full date and day of attendance.
  - Check-in and check-out times.
  - Total time spent at the academy.
- Data is displayed in a **sleek, paginated table** for enhanced user experience.

![Students Attendance](./assets/student.png)

---

## 🛠️ Admin Dashboard

Admins access the platform using their own unique QR-coded cards. The dashboard includes:

### 🏠 Home Page
- Total number of registered students.
- Total number of sessions attended.
- Number of classes (Grade 7–12).
- Average sessions per day.
- A chart showing student growth over the year.
- The five most recently registered students.

![Afrin Academy Admin Dashboard](./assets/dashboard.png)

### 🔄 Check-In/Check-Out Page
Three methods for registering attendance:
1. **Barcode reader**
2. **Manual input** via dropdown (with date selection)
3. **QR code scanning** using the device camera

Includes conflict detection and clear feedback for check-in/out errors.

![CheckIn/CheckOut](./assets/registeration.png)

### 📅 Sessions Page
- Full CRUD operations on student sessions.
- Filtering by date, student name, class, and department.

![Students Sessions](./assets/sessions.png)

### 👨‍🎓 Students Page
- Full CRUD operations on student profiles.
- Add new students and generate unique QR codes instantly.

![Students](./assets/students.png)

---

## 📱 Other Features
- Fully **mobile-friendly** responsive design.
- Authentication via QR codes using **NextAuth**.
- Optimized images, links, and fonts thanks to **Next.js**.
- Search, pagination, and URL search parameters.
- Form validation and accessibility using **Zod**.
- Metadata and OpenGraph support.
- Smooth navigation with automatic code-splitting and prefetching (Next.js App Router).
- Instant data fetching via **server actions** directly querying PostgreSQL.
- Static + dynamic rendering with streaming for fast page loads and strong SEO.

![Mobile](./assets/mobile1.png)
![Mobile](./assets/mobile2.png)
![Mobile](./assets/mobile4.png)

---

## 🧰 Tech Stack

<div style="display: flex; justify-content: space-between;">
  <a href="https://github.com/vercel/next.js" title="Next.js Repository"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> </a> <a href="https://github.com/postgres/postgres" title="PostgreSQL Repository"> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> </a> <a href="https://github.com/tailwindlabs/tailwindcss" title="TailwindCSS Repository"> <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" /> </a> <a href="https://github.com/vercel/vercel" title="Vercel Repository"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /> </a> <a href="https://github.com/nextauthjs/next-auth" title="NextAuth Repository"> <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white" /> </a>

</div>

---

## 📈 Performance Highlights
- Fast page loads with **streaming** and **SSR**.
- Minimal JavaScript overhead for searching, sorting, and filtering.
- Clean UI with intuitive navigation and real-time feedback.

![Metrics](./assets/metrics1.png)
![Metrics](./assets/metrics2.png)

---

## 🏫 Purpose
Afrin Academy empowers educational institutions to manage student attendance and engagement efficiently, while keeping parents informed and involved.

---

## 🔒 Security & Scalability
- Unique **QR-based authentication**.
- Scalable architecture with optimized database queries.
- Future-proof design with modular components and reusable logic.

![Qr Code](./assets/qr-code.png)

---

## 📦 Versions

![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=nextdotjs)
![Node.js](https://img.shields.io/badge/Node.js-25.3.0-339933?style=flat-square&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.1-316192?style=flat-square&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-5.0.0-black?style=flat-square&logo=auth0)


## 🏗️ Built With

![Built With](https://img.shields.io/badge/Built%20With-Afrin%20Academy-4ade80?style=for-the-badge&logo=vercel&logoColor=white)
