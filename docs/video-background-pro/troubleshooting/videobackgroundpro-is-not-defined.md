---
id: videobackgroundpro-is-not-defined
title: VideoBackgroundPro is not defined
sidebar_label: VideoBackgroundPro is not defined
---

If you are experiencing the following error:

```
ReferenceError: VideoBackgroundPro is not defined
```

It means that the plugin's main script is not being loaded. This can happen for a number of reasons, usually when using optimizing plugins, or caching plugins.

## Autoptimize Conflict Fix

If you are using Autoptimize, and you are experiencing the `ReferenceError` message in the console, you may need to exclude the Video Background Pro scripts from Autoptimize.

Navigate to `WordPress Admin > Settings > Autoptimize`, and find the `Exclude scripts from Autoptimize` input field. You should see something like this in the field:

```
wp-includes/js/dist/, wp-includes/js/tinymce/, js/jquery/jquery.js
```

You'll want to include the `VideoBackgroundPro.js` script in the field. Update the field to:

```
wp-includes/js/dist/, wp-includes/js/tinymce/, js/jquery/jquery.js, wp-content/plugins/video-background-pro/dist/VideoBackgroundPro.js
```

Finally, be sure to click the button at the bottom `Save Changes and Empty Cache`

## wp_footer() Not Being Called

Another cause of this issue could be that your theme does not call [`wp_footer()`](https://developer.wordpress.org/reference/functions/wp_footer/). This is critical for any theme, as most plugins use this hook to enqueue scripts, styles, etc.

You may see this if you have built your own theme and forgot to call `wp_footer()` in your `footer.php` file.
