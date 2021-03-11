import React from 'react';
import { View, ScrollView } from 'react-native';
import { GamesUnlockedData } from './GamesUnlockedData';
import GamesUnlockedHeader from '../../components/GamesUnlockedHeader/GamesUnlockedHeader';
import GamesUnlockedTableHeader from '../../components/GamesUnlockedTableHeader/GamesUnlockedTableHeader';
import GamesUnlockedTableEntry from '../../components/GamesUnlockedTableEntry/GamesUnlockedTableEntry';
import GamesUnlockedStyles from './GamesUnlocked.Styles';

const GamesUnlocked = (props) => {
	return (
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
	);
};
export default GamesUnlocked;
