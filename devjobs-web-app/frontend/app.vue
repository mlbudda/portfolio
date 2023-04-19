<template>
  <div :class="darkTheme" class="main-bg">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script setup>
import * as data from './data.json'

const darkTheme = useState('darkTheme')

useState('postList', () => data.default)

onMounted(() => {
  // console.log(useState('postList').value)
})

</script>

<style>
* {
  box-sizing: border-box;
}

:root {

  /* Violet*/
  --primary-color-1: #5964E0;
  /* Very Dark Blue */
  --primary-color-3: #19202D;
  /* Midnight */
  --primary-color-4: #121721;

  /* Dark grey */
  --secondary-color-1: #FFFFFF;
  /* Light Grey */
  --secondary-color-2: #F4F6F8;
  /* Dark grey */
  --secondary-color-4: #6E8098;

  --icon-search: #6E8098;


  --btn-company-bg: hsla(235, 69%, 61%, 0.1);
  --btn-company-text: #5964E0;
  --btn-company-hover: hsla(235, 69%, 61%, 0.35);

  --checkbox-bg: #19202d10;

  --btn-blue: #5964E0;
  --btn-light-blue: #939BF4;
  --btn-blue-10: hsla(235, 69%, 61%, 0.1);
  --btn-blue-35: hsla(235, 69%, 61%, 0.35);

  --main-bg-color: #F2F2F2;
  --secondary-bg-color: white;

  --card-bg-color: #FFFFFF;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.dark-theme {
  --card-bg-color: #19202D;
  --primary-color-3: #FFFFFF;
  --main-bg-color: #121721;
  --secondary-bg-color: #19202D;

  --btn-company-bg: hsla(0, 0%, 100%, 0.1);
  --btn-company-text: #FFFFFF;
  --btn-company-hover: hsla(0, 0%, 100%, 0.25);

  --checkbox-bg: hsla(0, 0%, 100%, 0.1);
  --icon-search: #FFFFFF;
}

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Kumbh Sans', sans-serif;
}


p,
h1,
h2,
h3 {
  margin: 0;
}

p {
  font-size: 16px;
  line-height: 26px;
}

.main-bg {
  background-color: var(--main-bg-color);
  height: 100%;
}

.container-lg {
  max-width: 1110px;
  margin-inline: auto;
}

.container-md {
  max-width: 730px;
  margin-inline: auto;
}

.padding-md {
  padding-inline: 24px;
}

.overlap {
  position: relative;
  top: -40px;
}

/* Button start */
.button {
  background-color: var(--btn-blue);
  color: white;
  padding: 16px 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: var(--btn-light-blue);
}

.button:active {
  box-shadow: 1px 1px 8px 2.5px #dddddd;
}

h3.title-h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}

/* Button end */
</style>