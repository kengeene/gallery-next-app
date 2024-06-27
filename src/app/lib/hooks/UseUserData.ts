"use client"
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

export default function UseUserData() {
  const [userData, setUserData] =useState([]);

  useEffect(() => {
    const galleryData = []
    for(let i=0;i<6;i++){
        galleryData.push({
          author: faker.person.firstName(),
          title: faker.person.jobTitle(),
          description: faker.commerce.productDescription(),
          image: faker.image.url(),
        });
    }
    setUserData(galleryData);
  }, []);

  return { userData };
}
