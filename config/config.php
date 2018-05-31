<?php

$paths = [
    'index'=>__DIR__.'/../index.html',
    'laze'=>__DIR__.'/../laze.html'
];

$confkey = '_INIT_CONFIG';

if (!defined($confkey)) {
    define($confkey, '_init_config_');
}

${_INIT_CONFIG} = [
    'paths' => $paths
];



