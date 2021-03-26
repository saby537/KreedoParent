import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Color from '../../utils/Color';
import Header from '../../components/Header/Header';
import { GamesNotYetStartedData } from './GamesNotYetStartedData';
import GamesUnlockedHeader from '../../components/GamesUnlockedHeader/GamesUnlockedHeader';
import GamesUnlockedTableHeader from '../../components/GamesUnlockedTableHeader/GamesUnlockedTableHeader';
import GamesNotYetStartedTableEntry from '../../components/GamesNotYetStartedTableEntry/GamesNotYetStartedTableEntry';
import GamesNotYetStartedStyles from './GamesNotYetStarted.Styles';

const GamesNotYetStarted = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<View style={GamesNotYetStartedStyles.mainContainer}>
				<GamesUnlockedHeader navigation={navigation} id={2} />
				<View style={GamesNotYetStartedStyles.tableContainer}>
					<GamesUnlockedTableHeader />
					<ScrollView>
						{GamesNotYetStartedData.map((name, id) => (
							<GamesNotYetStartedTableEntry name={name} key={id} />
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Color.SKY_BLUE,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default GamesNotYetStarted;
