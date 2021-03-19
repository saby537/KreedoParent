import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Color from '../../utils/Color';
import Header from '../../components/Header/Header';
import { GamesUnlockedData } from './GamesUnlockedData';
import GamesUnlockedHeader from '../../components/GamesUnlockedHeader/GamesUnlockedHeader';
import GamesUnlockedTableHeader from '../../components/GamesUnlockedTableHeader/GamesUnlockedTableHeader';
import GamesUnlockedTableEntry from '../../components/GamesUnlockedTableEntry/GamesUnlockedTableEntry';
import GamesUnlockedStyles from './GamesUnlocked.Styles';

const GamesUnlocked = (props) => {
	return (
		<View style={styles.container}>
			<Header />
			<View style={GamesUnlockedStyles.mainContainer}>
				<GamesUnlockedHeader />
				<View style={GamesUnlockedStyles.tableContainer}>
					<GamesUnlockedTableHeader />
					<ScrollView>
						{GamesUnlockedData.map((game, id) => (
							<GamesUnlockedTableEntry game={game} key={id} />
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
export default GamesUnlocked;
