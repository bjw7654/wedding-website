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

## A photo looks cut off on phones?

Big photos are filled edge-to-edge, so on a narrow phone screen the sides (or
top and bottom) get trimmed. If one of you ends up cut off, tell that single
photo which part to keep by adding a `mobile_position` in `_config.yml`:

```yaml
hero_images:
  - "/assets/images/hero/engagement-1.jpg"      # normal (centered)
  - url: "/assets/images/hero/engagement-2.jpg" # someone on the right? keep it
    mobile_position: "right center"
```

Common choices: `"left center"`, `"right center"`, `"center top"`,
`"center bottom"`, or a percentage like `"70% center"`. This only changes how the
photo looks on phones -- on a computer it still shows centered.
