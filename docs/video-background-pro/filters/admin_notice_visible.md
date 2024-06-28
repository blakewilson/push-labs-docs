---
id: admin-notice-visible 
title: Admin Docs/Promo Notice Visibility
sidebar_label: Admin Docs/Promo Notice Visibility
description: How to programatically toggle the Docs/Promo admin notice
---

If you would like to programatically toggle the visibility of the Video Background Pro admin notice, you can do so with the following filter.

Add the function below to the end of your `functions.php` file. 

```php
/**
 * Programatically toggle the visibility of Docs/Promo admin notices
 *
 * @since 4.1.0
 * @author Push Labs
 * @uses apply_filters()
 * @return Boolean True or false to toggle visibility 
 */
function themeprefix_vidbgpro_admin_notice_visible( $is_visible ) {
  $is_visible = false;

  return $is_visible;
}
add_filter( 'vidbgpro_admin_notice_visible', 'themeprefix_vidbgpro_admin_notice_visible' );
```
