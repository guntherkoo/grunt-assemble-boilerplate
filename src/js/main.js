import DetectAgent from './components/DetectAgent';
import SlickSlider from './components/SlickSlider';

const App = {
    init: () => {
        DetectAgent();
        
        // Slick Slider (Element, Speed, Infinite(True/False))
        SlickSlider('.slider', 500, false);

        console.log('JS Initialized!');
    }
}

App.init();