# Put your hero (home page) photos here

This folder holds the big photos that fade in and out at the top of the home
page.

## How to add your own photos

1. Drop your image files into this folder (for example `engagement-1.jpg`).
   - Use **landscape** (wide) photos for the best look.
   - Aim for large images, around **1600 pixels wide** or more.
2. Open the `_config.yml` file in the main folder and find the `hero_images`
   section.
3. List each photo there, for example:

   ```yaml
   hero_images:
     - "/assets/images/hero/engagement-1.jpg"
     - "/assets/images/hero/engagement-2.jpg"
   ```

4. Save, and you're done! You can delete the `placeholder-1.svg` and
   `placeholder-2.svg` files once you've added your own.
