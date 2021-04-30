---
id: programmatically-insert-video-background
title: Adding a video background programmatically
sidebar_label: Programmatically Insert Video Background
---

In some instances, you may want to insert a video background programmatically instead of from the metabox, or page builder integrations.

In order to do this, you can use the `[vidbg]` shortcode, and a function that ties into the `wp_footer` hook.

Paste the following function at the bottom of your `functions.php` file:

```php
/**
 * Add a video background programmatically to a page
 *
 * @author Push Labs
 * @link https://pushlabs.co
 */
function theme_prefix_insert_vidbg_programmatically() {
  // The page ID in which you want the video background shortcode to be rendered on.
  $page_id = 4;

  // If the page is not the ID specified above, do not render the rest of the code.
  if(!is_page($page_id)) {
      return;
  }

  // Add [vidbg] params as needed. Be sure to change the container to your desired container.
  echo do_shortcode('[vidbg container=".YOUR_CONTAINER_HERE" mp4="#" webm="#"]');
}
add_action('wp_footer', 'theme_prefix_insert_vidbg_programmatically');
```
