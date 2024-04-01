<?php

/**
 * 
 * Custom Post Types
 * 
 */

$files = glob(__DIR__ . '/*.php');

foreach ($files as $file) {
  require_once $file;
}