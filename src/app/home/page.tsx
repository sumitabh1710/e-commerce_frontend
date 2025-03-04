/* eslint-disable @typescript-eslint/no-explicit-any */

import Cards from "@/components/Cards";
import React from "react";

const HomePage = () => {
  const porductsArray: any[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      description:
        "Over-ear wireless headphones with noise-canceling feature and long battery life.",
      price: 129.99,
      imageUrl: "https://imgs.search.brave.com/LXH0k5fQz_RsHLz0P6DjNYx2tvazuZeHsjn9OAkvAn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFPN1MyN08rakwu/anBn",
    },
    {
      id: 2,
      name: "Smartphone Stand",
      category: "Accessories",
      description:
        "Adjustable and foldable stand for smartphones, perfect for video calls or watching videos.",
      price: 19.99,
      imageUrl: "https://imgs.search.brave.com/gHSbIkiUf-Aww6ijgicnEI1nZVvx4txu7qRIeFAe2eQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMyMTA1ODI1L2Mv/MjY1Ni8yNjU2LzAv/MC9pbC80YWIxYTYv/NTkzNDQwNzU1Mi9p/bF82MDB4NjAwLjU5/MzQ0MDc1NTJfb2lo/OC5qcGc",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      category: "Electronics",
      description:
        "Ergonomic wireless gaming mouse with customizable DPI settings and RGB lighting.",
      price: 49.99,
      imageUrl: "https://imgs.search.brave.com/4nlcI1G_LV_A8AUc6ymR9LJbgFtvhpn6CA7ENHO6pTM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTYzMDc1MC9waG90/by9nYW1pbmctbW91/c2UtdG9vbC1jbG9z/ZS11cC1pc29sYXRl/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZGVTZ2hOQi0t/OFhuTnlBX09tUElt/UW5yaUY5dDB1WVV3/dk9sQm5rc3MxRT0",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "Electronics",
      description:
        "Portable Bluetooth speaker with 360-degree sound and water-resistant design.",
      price: 89.99,
      imageUrl: "https://imgs.search.brave.com/g19Rr5815Kq8opkBpRrKmyUjZOEYK5m5mnwKDE1AhhQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY2OTg3/NjQyMjFkNDQyY2Rl/YTcxMjg0OC9tYXN0/ZXIvd18zMjAsY19s/aW1pdC9Cb3NlLVNv/dW5kTGluay1NYXgt/Qmx1ZXRvb3RoLVNw/ZWFrZXIlMjAoYmxh/Y2spLU9mZndoaXRl/LUJhY2tncm91bmQt/U09VUkNFLUFtYXpv/bi5qcGc",
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home Appliances",
      description:
        "Compact coffee maker with single-serve option and programmable timer.",
      price: 59.99,
      imageUrl: "https://imgs.search.brave.com/Vwx1d6d3IpHruwO2qq616THJMFDjBdXBuj9lYBfBm8E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NDY1OTg1Mi9waG90/by9jb2ZmZWUtbWFj/aGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YlJvRXJo/cldJZllzS1QxT2RY/eHJZaFZseE5jeW5O/RUFFTWpTQU80VGg3/OD0",
    },
    {
      id: 6,
      name: "Yoga Mat",
      category: "Fitness",
      description:
        "Non-slip yoga mat with extra cushioning for comfort during your workouts.",
      price: 24.99,
      imageUrl: "https://imgs.search.brave.com/fhCEuZXriRc3s4WAwcoM7RMJL9TXCoU0p59P9iXzjkI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/MDI3ODA4L3Bob3Rv/L3lvZ2EtbWF0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1E/dDFfUHYyRlFZdlNC/ZWdkWEo5SnJYNWh3/VDcybHl5dFVDOC1J/VXF5N2RFPQ",
    },
  ];

  return (
    <div className="text-black">
      <div className="grid grid-cols-4 gap-7">
        {porductsArray.map((each: any) => (
          <Cards data={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
