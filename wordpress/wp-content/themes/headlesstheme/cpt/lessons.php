<?php
function cptui_register_my_cpts_lessons()
{

  /**
   * Post Type: Lessons.
   */

  $labels = [
    "name" => esc_html__("Lessons", "custom-post-type-ui"),
    "singular_name" => esc_html__("Lesson", "custom-post-type-ui"),
  ];

  $args = [
    "label" => esc_html__("Lessons", "custom-post-type-ui"),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "show_in_rest" => true,
    "rest_base" => "lessons",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "rest_namespace" => "wp/v2",
    "has_archive" => false,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "delete_with_user" => false,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => false,
    "can_export" => false,
    "rewrite" => ["slug" => "lessons", "with_front" => true],
    "query_var" => true,
    "supports" => ["title", "editor", "thumbnail", "excerpt", "trackbacks", "custom-fields", "comments", "revisions", "author", "page-attributes", "post-formats"],
    "taxonomies" => ["category", "post_tag"],
    "show_in_graphql" => true,
    "graphql_single_name" => "Lesson",
    "graphql_plural_name" => "Lessons",
  ];

  register_post_type("lessons", $args);
}

add_action('init', 'cptui_register_my_cpts_lessons');
