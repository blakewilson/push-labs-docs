---
id: using-metabox-with-wpbakery-row
title: Using the Metabox with a WPBakery Row
sidebar_label: Using the Metabox with a WPBakery Row
---

If you prefer to use the native [Metabox integration](/video-background-pro/using-the-metabox) for Video Background Pro instead of the WPBakery integration, but want to target a WPBakery row, this is for you. This assumes you already have a row created in the WPBakery editor.

### Step 1 - Edit the row

![WPBakery Edit Row Button](/video-background-pro/troubleshooting/using-metabox-with-wpbakery-row/wpbakery-edit-row.png)

You can do this by clicking the pencil icon in the WPBakery row.

### Step 2 - Enter a Row ID

![WPBakery General Settings](/video-background-pro/troubleshooting/using-metabox-with-wpbakery-row/enter-row-id.png)

Scroll to the bottom of the **General** section until you see the field "Row ID". Enter a unique id for this row. (As stated in the field, make sure that this is unique and is valid according to the [w3c specification](https://www.w3schools.com/tags/att_global_id.asp)). Save changes.

### Step 3 - Notice the WPBakery row now has a unique ID

![WPBakery Row with unique ID](/video-background-pro/troubleshooting/using-metabox-with-wpbakery-row/notice-row-id.png)

You'll enter this value exactly as you see it in the next step.

### Step 4 - Use this unique ID in the Video Background Pro container field

![Video Background Pro container field with value](/video-background-pro/troubleshooting/using-metabox-with-wpbakery-row/container-field.png)

Enter the value that you observed in the last step into the Video Background Pro container field. Notice how we also included the "#" character as well. This is required for HTML IDs.

### Step 5 - Ensure the video background is visible and playing

Save changes and view the page.

## Troubleshooting

One of the common issues when using a video background with a WPBakery row is that there is no content in the row, resulting in a non-visible row. When there is no content in the row, the row has a height of `0px`. Make sure you either add content to the row, or set a fixed height in order for the row to be visible!
