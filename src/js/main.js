// Global dependencies
import DetectAgent from './components/DetectAgent';
import SlickSlider from './components/SlickSlider';
import FirebaseData from './components/Firebase';

global.jQuery = require('jquery');
var $ = global.jQuery;

var App = {
    // Application Constructor
    init: function() {
        DetectAgent();
        FirebaseData();

        // Slick Slider (Element, Speed, Infinite(True/False))
        SlickSlider('.slider', 500, false);

        console.log('JS Initialized!');
    }
}

App.init();