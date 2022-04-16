npm install formik
npm install yup

#############################################
tailwind configuration

install below packages--------------------
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

place the below in index.css-------------------
@tailwind base;
@tailwind components;
@tailwind utilities;

copy and paste in tailwind.config.js file content area-------------------------
"./src/**/*.{js,jsx,ts,tsx}",

below content add a comma next to content and place-----------------------
important:"#root",
#############################################

#############################################
bootstrap configuration
install below packages--------
npm i bootstrap

add the below in your app.js----------
import 'bootstrap/dist/css/bootstrap.min.css'

add the below in your index.js---------
import 'bootstrap/dist/js/bootstrap.js';
###############################################


###############################################
material ui configuration

install below packages--------------------------
npm install @mui/material @emotion/react @emotion/styled

npm install @mui/material @mui/styled-engine-sc styled-components

npm install @mui/icons-material
################################################

#################################################
React icons

install below packages---------------------------
npm install react-icons --save


important rules to be followed----------------
1)when ever u are using a button from material ui and a button from our side then do import then using the as method
    for eg:import Button as Button1 from material ui
2)remeber tailwind css is kept as important so u cannot use the styling option of bootstrap or material ui which coincides with the same functions as there in tailwind css
    for eg:mb cannot be used ml and mr can be used