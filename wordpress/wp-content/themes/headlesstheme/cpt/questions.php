<?php

function cptui_register_my_cpts_questions()
{

  /**
   * Post Type: Questions.
   */

  $labels = [
    "name" => esc_html__("Questions", "custom-post-type-ui"),
    "singular_name" => esc_html__("Question", "custom-post-type-ui"),
  ];

  $args = [
    "label" => esc_html__("Questions", "custom-post-type-ui"),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "show_in_rest" => true,
    "rest_base" => "questions",
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
    "rewrite" => ["slug" => "questions", "with_front" => true],
    "query_var" => true,
    "supports" => ["title", "editor", "thumbnail", "excerpt", "trackbacks", "custom-fields", "comments", "revisions", "author", "page-attributes", "post-formats"],
    "taxonomies" => ["category", "post_tag"],
    "show_in_graphql" => true,
    "graphql_single_name" => "Question",
    "graphql_plural_name" => "Questions",
  ];

  register_post_type("questions", $args);
}

add_action('init', 'cptui_register_my_cpts_questions');
