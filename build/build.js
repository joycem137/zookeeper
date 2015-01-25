({
    //By default load any module IDs from js
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.1.0',
        soundBite:  'lib/createSoundBite',
        log: 'lib/log',
        QUnit: 'lib/qunit-1.14.0',
        requireLib:'lib/require-2.1.11.min',
        simpleAudio: 'app/util/simpleAudio',
        string: 'app/util/string'
    },
    include: ['requireLib'],
    shim: {
        'QUnit': {
            exports: 'QUnit'
        }
    },
    name: "main"
})