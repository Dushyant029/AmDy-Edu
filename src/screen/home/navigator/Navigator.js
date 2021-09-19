import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../index';
import Courses from "../Courses";
import CourseList from "../components/CourseList";
import CourseReactDetail from "../CourseReactDetail";
import CourseVideo from "../CourseVideo";

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Courses:{screen:Courses},
    CourseList:{screen:CourseList},
    CourseReactDetailScreen:{screen:CourseReactDetail},
    CourseVideoScreen:{screen:CourseVideo}
},
{
    defaultNavigationOptions:stackNavigatorOptions
})

export default createAppContainer(AppNavigator);