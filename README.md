# GENTLE MONSTER [![GENTLE MONSTER](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://delicate-longma-d20402.netlify.app/)
> A curated list of gentle-monster READMEs

<br>

## ๐ ํ๋ก์ ํธ ์๊ฐ

์  ํ๋ชฌ์คํฐ ๊ณต์์ฌ์ดํธ๋ฅผ ์ฐธ๊ณ ํ์ฌ ๋ง๋  ์ผํ๋ชฐ ์ฌ์ดํธ์๋๋ค. (ํฌํธํด๋ฆฌ์ค์ฉ์ผ๋ก ์ ์๋์์ต๋๋ค.) <br>
๐ [๋ฐฐํฌ ๋งํฌ](https://delicate-longma-d20402.netlify.app/) 

<br>

## ๐ ์ฌ์ฉ๊ธฐ์ 

<img src="https://img.shields.io/badge/React.js-3178C6?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/-scss-FF4785?style=for-the-badge&logo=sass&logoColor=white" /> <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" /> <img src="https://img.shields.io/badge/React-Query-%23039BE5.svg?style=for-the-badge&logo=react-query" /> 

<br>

## ๐ ์ฃผ์ ๊ธฐ๋ฅ

#### 1. ๋ก๊ทธ์ธ 

<img src="./public/images/github03.png" alt=" " />

* firebase์ ์ฌ์ฉ์์ ๋ก๊ทธ์ธ ์ํ๋ฅผ ๊ด๋ฆฌํ๋ `onAuthStateChanged()`๋ฅผ ์ฌ์ฉํ์ฌ ๊ธฐ์กด์ ๋ก๊ทธ์ธ ํ user๋ฅผ ๊ธฐ์ตํ๊ณ  ์๋ก์ด user๊ฐ ๋ก๊ทธ์ธ ํ  ๊ฒฝ์ฐ, callback ํจ์์ updatedUser๋ฅผ ์ ๋ฌ๋ฐ์ ์ ์๋๋ก ํ์์ต๋๋ค. 
    
    ```jsx
    export function onUserStateChange(callback) {
      onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : user;
        callback(updatedUser);
      });
    }
    ```

<br>

#### 2. ์๋ก์ด ์ ํ ๋ฑ๋ก

๐ฉ๐ปโ๐ป **admin** ์์ด๋, ๋น๋ฐ๋ฒํธ ์๋๋ค.
    
    ์์ด๋: teest0208@gmail.com
    ๋น๋ฐ๋ฒํธ: test1234@@
    
    
* firebase์ admin์ **uid**๋ฅผ ์ง์ ํ์ฌ admin ์ฌ์ฉ์๋ก ๋ก๊ทธ์ธ ํ  ๊ฒฝ์ฐ, ์๋ก์ด ์ ํ ๋ฑ๋ก ํ์ด์ง์ ์ ๊ทผ ๊ฐ๋ฅํ๋๋ก ๊ตฌํํ์์ต๋๋ค.

<img src="./public/images/github.png" alt=" " />

* ๋ฑ๋ก๋ ์ ํ์ **firebase**์ **cloudinary**์์ ์์ , ๊ด๋ฆฌ๊ฐ ๊ฐ๋ฅํ๋๋ก ํ์์ต๋๋ค.

<br>

#### 3. ์ฅ๋ฐ๊ตฌ๋

<img src="./public/images/github02.png" alt=" " />

* firebase์ ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ `set()`์ ์ฌ์ฉํ์ฌ ์ง์ ๋ carts, userId์ ์ฌ์ฉ์๊ฐ ์ฅ๋ฐ๊ตฌ๋์ ๋ด์ ์ ํ์ด ์ถ๊ฐ๋๋๋ก ํ์์ต๋๋ค.
    
    ```jsx
    export async function addOrUpdateToCart(userId, product) {
      return set(ref(database, `carts/${userId}/${product.id}`), product);
    }
    ```

<br>

#### 4. ์ ํ ์์ธ๋ณด๊ธฐ

* react-router๋ฅผ ์ฌ์ฉํด ์ ํ id๋ฅผ ์ฃผ์ ๊ฒฝ๋ก๋ก ์ค์ ํ๊ณ  `useLocation()`๋ก ํ์ฌ ํ์ด์ง์ ๊ฐ์ฒด ์ ๋ณด๋ฅผ ์ป์ด์ฌ ์ ์๋๋ก ํ์์ต๋๋ค.

<br>
