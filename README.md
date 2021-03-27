# Day-Planner!

## Task At Hand

For this week's assignment we were given some starter code in provided HTML and CSS files. Our task this week was to create a day planner for a typical workday that included the current time, updated it's styling based on the current hour, was able to store the user's input in the local storage, and keep that input displayed upon refreshing the page.

I accomplished the active time using moment.js, and my styles just needed to be correctly placed within my HTML file to make the page look like the example. 

For the dynamically changing colors, I wrote a function with a conditional statement to check which hour it currently is, the future hours, and past hours. With these conditional statements, I dynamically added existing classes to change the color displayed for each hour based off what the current hour displayed. 

For local storage, I added an event listener function for the 'save button' that set the user's input to the local storage. 

Finally, I created another function to alter the text content that is displayed in each line to what was kept in our local storage. (getItem)

I also added a nice "scheduler" background for creative flair. ;)



### Complete Product!!

![page cap](https://user-images.githubusercontent.com/76290048/112737096-3d9e8a80-8f2e-11eb-8f33-53d1c58a472c.PNG)



As part of the acceptance criteria, we were told to link our page up with GitHub Pages, and provide a link for the live website as well as an image of our finished product. (Shown above.)

The link for the final product is here! ---> https://sethvance26.github.io/Day-Planner/
