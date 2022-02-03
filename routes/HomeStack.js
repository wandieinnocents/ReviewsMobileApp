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
        navigationOptions:{
            title:'Home',
            headerStyle:{ backgroundColor:'coral'}
        }
    },
    ReviewDetails : {
        screen: ReviewDetails,
        navigationOptions:{
            title:'Review Details',
            headerStyle:{ backgroundColor:'coral'}
            
        }
    },
    Reviews:{
        screen: Reviews,
        navigationOptions:{
            title:'Reviews',
            // headerStyle:{ backgroundColor:'coral'}
        }
    },
    About: {
        screen: About,
        navigationOptions:{
            title:'About',
            // headerStyle:{ backgroundColor:'coral'}
        }
    }
}

// create home stack navigator
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle:{ backgroundColor:'coral',
        // headerTintColor: 'coral',
            
    }
    }
});

// export app container with
export default createAppContainer(HomeStack);
