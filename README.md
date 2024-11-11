<h1 align="center">Work days calculator</h1>

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction"> ➤ Introduction</a></li>
    <li><a href="#tech-stack"> ➤ Tech stack</a></li>
    <li><a href="#app-structure"> ➤ Run app</a></li>
    <li><a href="#test"> ➤ Run test</a></li>
    <li><a href="#road-map"> ➤ Road Map</a></li>
  </ol>
</details>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="introduction"> :pencil: Introduction</h2>

<p align="justify">

The Work Days Calculator is a web-based application designed to help users calculate the number of working days between two specific dates. It offers flexibility by allowing users to choose between calculating regular weekdays (Monday to Friday) or business days, which exclude weekends and customizable public holidays. This tool is ideal for users who need to calculate timelines for projects, deadlines, or planning purposes. After entering the start and end dates and selecting the type of calculation, the application quickly computes and displays the result. Users can also reset the input fields and begin a new calculation as needed.

</p>

<p align="center">
  <img src="/public/preview.png" alt="app structure" width="70%" height="70%">        
</p>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- Tech stack -->
<h2 id="tech-stack"> :books: Tech stack</h2>

The following open source techs are used in this project:

- <b>Base</b> <br>

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- <b>Code Consistency & Reliability</b> <br>

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

- <b>State management</b> <br>

  ![Redux toolkit](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

- <b>Testing tool</b> <br>
  ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![Cypress](https://img.shields.io/badge/-cypress-%23E33332?style=for-the-badge&logo=cypress&logoColor=white) ![jest](https://img.shields.io/badge/-jest-%23E33332?style=for-the-badge&logo=jest&logoColor=white)

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- App structure -->
<h2 id="app-structure"> :fork_and_knife: Run app </h2>

node version: v20.12.2

### Steps:

1. Git Clone this repo.
1. Run `yarn or npm install`
1. Run `yarn dev or npm run dev `
1. Visit `http://localhost:5173`

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="test"> :floppy_disk: Test</h2>

### Lint check

1. `yarn lint or npm run lint`

<p align="center">
  <img src="/public/lint-check.png" alt="app structure" width="70%" height="70%">        
</p>

### Unit & integration test (Jest, React Testing Library)

1. `yarn or npm install`
2. `yarn test or npm run test`

<p align="center">
  <img src="/public/test-result.png" alt="app structure" width="70%" height="70%">        
</p>

### Cypress e2e test

1. `yarn or npm install`
2. `yarn cypress:open or npm run cypress:open`

<p align="center">
  <img src="/public/e2e-test.gif" alt="app structure" width="70%" height="70%">        
</p>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="road-map"> 🗺️: Road-map</h2>

### Road map

1. Use React Hook Form with Zod Validation:

- Integrate React Hook Form for efficient form handling and validation, paired with Zod for schema-based form validation. This will provide flexibility to handle more complex questions, beyond simple radio buttons, ensuring data validation is robust and easy to maintain.

2. Implement React Query for API Call Caching:

- Use React Query to cache API responses, improving the performance of the application by reducing redundant API requests. Cached data will allow for quicker interactions and reduce the load on the server, enhancing the user experience.
