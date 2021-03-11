import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Color from './utils/Color';
import ReportPage from './Pages/ReportPage/ReportPage';
import GamesUnlocked from './Pages/GamesUnlocked/GamesUnlocked';
import * as Font from 'expo-font';

const fetchFont = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};
export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFont}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}
	return (
		<View style={styles.container}>
			<GamesUnlocked />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.SKY_BLUE,
		alignItems: 'center',
	},
});
