# Color Scheme Generator

This was the solo project for the 2nd unit of Module 9: Working with APIs, from Scrimba's Frontend Developer's Path. We were given a Figma design and had to build a color scheme generator that sends and receives data from `the color api`.

I built out the application, but made some design changes and added functionality to it.

- Color strips are displayed as rows instead of columns so that both color names and hex codes can be shown
    - The closest color name match is displayed in each color strip
- Visitors can choose how many colors to include in their color scheme via a drop-down selector
    - The API's default is 5 colors, this application allows from 3-9 colors to be chosen
- Color strips can be clicked to copy a color's hex code to the viewer's clipboard
- Instructional prompts were added below some of the fields to explain their purpose in a brief manner