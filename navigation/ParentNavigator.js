import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReportPage from '../Pages/ReportPage/ReportPage';
import GamesUnlocked from '../Pages/GamesUnlocked/GamesUnlocked';
import GameCompletionReport from '../Pages/GameCompletionReport/GameCompletionReport';
import GamesNotYetStarted from '../Pages/GamesNotYetStarted/GamesNotYetStarted';
const ParentNavigator = createStackNavigator(
	{
		Report: ReportPage,
		GamesUnlocked: GamesUnlocked,
		GameCompletionReport: GameCompletionReport,
		GamesNotYetStarted: GamesNotYetStarted,
	},
	{
		initialRouteName: 'Report',
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

export default createAppContainer(ParentNavigator);
