# অনলাইন ফুড ডেলিভারি সিস্টেম

## পরিচয় 
এই প্ল্যাটফর্মের মাধ্যমে একটি অনলাইন ফুড ডেলিভারি সিস্টেম গঠন করা হবে, যেখানে রেস্তোরাঁ এবং কাস্টমার করতে পারবেন সুবিধাজনকভাবে পারস্পরিক যোগাযোগ এবং লেনদেন।

## মূল ফিচারসমূহ

### 1. অথেনটিকেশন ও অথরাইজেশন
- **JWT অথেনটিকেশন**: ব্যবহারকারী এবং রেস্তোরাঁ মালিকগণ নিরাপদ লগইনের জন্য JWT ব্যবহার করতে পারবেন।
- **Role Base Access**:
  - **restaurant_owner**: তাদের রেস্তোরাঁ এবং মেনু ম্যানেজ করতে পারবেন।
  - **user**: শুধুমাত্র রেস্টুরেন্ট ব্রাউজ, অর্ডার এবং অর্ডার ট্র্যাক করতে পারবেন।

### 2. রেস্তোরাঁ এবং মেনু ম্যানেজমেন্ট
- **CRUD অপারেশন**:
  - **Create**: রেস্তোরাঁ মালিক নতুন রেস্তোরাঁ এবং মেনু আইটেম যোগ করতে পারবেন।
  - **Read**: রেস্তোরাঁ মালিক ও ব্যবহারকারীরা মেনু ব্রাউজ করতে পারবেন।
  - **Update**: রেস্তোরাঁ মালিক মেনু ও তথ্য আপডেট করতে পারবেন।
  - **Delete**: মালিকরা রেস্তোরাঁ বা মেনু আইটেম মুছে ফেলতে পারবেন।

### 3. অর্ডার প্লেসমেন্ট ও ট্র্যাকিং
- **রেস্তোরাঁ ব্রাউজ**: ব্যবহারকারীরা রেস্তোরাঁর তালিকা দেখতে পারবেন।
- **মেনু ব্রাউজ**: নির্দিষ্ট রেস্তোরাঁর মেনু দেখতে পারবেন।
- **অর্ডার প্লেস**: ব্যবহারকারীরা মেনু থেকে অর্ডার করতে পারবেন।
- **অর্ডার কনফার্মেশন**: পেমেন্টের পর নিশ্চিত অর্ডার গ্রহণ।
- **লাইভ অর্ডার ট্র্যাকিং**: ব্যবহারকারীরা অর্ডারের বর্তমান অবস্থা দেখতে পারবেন।

### 4. মাল্টি-পেমেন্ট গেটওয়ে
- বিভিন্ন পেমেন্ট অপশন যেমন বিকাশ, নগদ, রকেট, কার্ড পেমেন্ট সাপোর্ট করা হবে।

### 5. ডিসকাউন্ট ও কুপন সিস্টেম
- কাস্টমাররা নির্দিষ্ট কুপন কোড ব্যবহার করে ডিসকাউন্ট নিতে পারবেন।

### 6. ডেলিভারি পার্টনার ম্যানেজমেন্ট
- রাইডারদের জন্য আলাদা লগইন থাকবে, যেখানে তারা ডেলিভারি আপডেট করতে পারবেন।

### 7. রিভিউ ও রেটিং সিস্টেম
- কাস্টমাররা খাবারের মান ও সার্ভিস সম্পর্কে রেটিং ও রিভিউ দিতে পারবেন।

### 8. লাইভ চ্যাট সাপোর্ট
- কাস্টমার ও রেস্তোরাঁর মধ্যে রিয়েল টাইম চ্যাটের সুবিধা থাকবে।

### 9. মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট
- সাইটটি বাংলা ও ইংরেজি ভাষায় ব্যবহার করা যাবে।

### 10. ফুড কাস্টমাইজেশন অপশন
- কাস্টমাররা তাদের পছন্দ অনুযায়ী খাবারে পরিবর্তন আনতে পারবেন (যেমন: কম মশলা, এক্সট্রা চিজ)।

### 11. খাবারের ডেলিভারি টাইম অনুমান
- AI বেইসড সিস্টেমের মাধ্যমে আনুমানিক ডেলিভারি টাইম দেখানো হবে।

### 12. ফেভারিট রেস্তোরাঁ ও মেনু
- ব্যবহারকারীরা তাদের প্রিয় রেস্তোরাঁ ও মেনু আইটেম সংরক্ষণ করতে পারবেন।

### 13. মাল্টি-ভেন্ডর সাপোর্ট
- একাধিক রেস্তোরাঁর খাবার একই প্ল্যাটফর্মে বিক্রির সুযোগ থাকবে।

### 14. ইমেইল ও SMS নোটিফিকেশন
- অর্ডার আপডেট এবং প্রোমোশনাল অফারের জন্য ইমেইল ও SMS নোটিফিকেশন যাবে।

### 15. অ্যাডমিন ড্যাশবোর্ড
- অ্যাডমিনরা ইউজার, রেস্টুরেন্ট ও অর্ডার পরিচালনা করতে পারবেন।

## টেকনোলজি স্ট্যাক
### ব্যাকএন্ড
- Django
- Django REST Framework
- MySQL
- JWT অথেনটিকেশন

### ফ্রন্টএন্ড
- React / Vue / Next.js

## সাবমিশন গাইডলাইন
- GitHub রিপোজিটরির README.md তে ডকুমেন্টেশন থাকতে হবে।
- Postman / Swagger API ডকুমেন্টেশন থাকতে হবে।
- লাইভ ডেপ্লয়মেন্ট লিংক দিতে হবে।

----------------------------------------------------------------
# English language

# Online Food Delivery System

## Introduction
This platform will establish an online food delivery system where restaurants and customers can conveniently interact and conduct transactions.

## Key Features

### 1. Authentication and Authorization
- **JWT Authentication**: Users and restaurant owners can use JWT for secure login.
- **Role Based Access**:
  - **restaurant_owner**: Can manage their restaurant and menu.
  - **user**: Can only browse restaurants, place orders, and track orders.

### 2. Restaurant and Menu Management
- **CRUD Operations**:
  - **Create**: Restaurant owners can add new restaurants and menu items.
  - **Read**: Restaurant owners and users can browse menus.
  - **Update**: Restaurant owners can update menu and information.
  - **Delete**: Owners can delete restaurant or menu items.

### 3. Order Placement and Tracking
- **Restaurant Browse**: Users can view the list of restaurants.
- **Menu Browse**: Can view menu of specific restaurants.
- **Place Order**: Users can order from the menu.
- **Order Confirmation**: Confirmed order acceptance after payment.
- **Live Order Tracking**: Users can view current status of their order.

### 4. Multi-Payment Gateway
- Support for various payment options like Bkash, Nagad, Rocket, card payments.

### 5. Discount and Coupon System
- Customers can use specific coupon codes to get discounts.

### 6. Delivery Partner Management
- Riders will have separate login where they can update delivery status.

### 7. Review and Rating System
- Customers can provide ratings and reviews about food quality and service.

### 8. Live Chat Support
- Real-time chat functionality between customers and restaurants.

### 9. Multi-Language Support
- The site can be used in both Bengali and English languages.

### 10. Food Customization Options
- Customers can modify their food according to preferences (e.g., less spicy, extra cheese).

### 11. Food Delivery Time Estimation
- Estimated delivery time will be shown through AI-based system.

### 12. Favorite Restaurants and Menu
- Users can save their favorite restaurants and menu items.

### 13. Multi-Vendor Support
- Multiple restaurants can sell food on the same platform.

### 14. Email and SMS Notifications
- Email and SMS notifications for order updates and promotional offers.

### 15. Admin Dashboard
- Admins can manage users, restaurants, and orders.

## Technology Stack
### Backend
- Django
- Django REST Framework
- MySQL
- JWT Authentication

### Frontend
- React / Vue / Next.js

## Submission Guidelines
- Documentation should be included in GitHub repository's README.md
- Postman / Swagger API documentation should be included
- Live deployment link should be provided

