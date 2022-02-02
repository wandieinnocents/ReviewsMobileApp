import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Reviews from '../screens/Reviews';
import About from '../screens/About';

// screens
const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails : {
        screen: ReviewDetails
    },
    Reviews:{
        screen: Reviews
    },
    About: {
        screen: About
    }
}

// create home stack navigator
const HomeStack = createStackNavigator(screens);

// export app container with
export default createAppContainer(HomeStack);
