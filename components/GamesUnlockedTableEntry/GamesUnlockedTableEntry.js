import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GamesUnlockedTableEntryStyles from './GamesUnlockedTableEntry.Styles';
import GamesUnlockedStyles from '../../Pages/GamesUnlocked/GamesUnlocked.Styles';
import GamesUnlockedTableEntryDropDown from '../GamesUnlockedTableEntryDropDown/GamesUnlockedTableEntryDropDown';
import RestartGameModal from '../RestartGameModal/RestartGameModal';
const GamesUnlockedTableEntry = ({ game }) => {
	const [showDrop, setShowDrop] = useState(false);
	const [showRestartModal, setShowRestartModal] = useState(false);

	return (
		<View style={GamesUnlockedTableEntryStyles.mainContainer}>
			<RestartGameModal
				modalVisible={showRestartModal}
				selectUserCloseHandler={() => setShowRestartModal(false)}
				gameName={game.name}
				level={game.levelCompletionStatus}
			/>
			<View style={GamesUnlockedTableEntryStyles.entryContainer}>
				<Text
					style={[
						GamesUnlockedStyles.col1,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.name}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col2,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.attempts}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col3,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.timeSpent}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col4,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.levelCompletionStatus}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col5,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.dateUnlocked}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col6,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.dateCompleted}
				</Text>
				<Text
					style={[
						GamesUnlockedStyles.col7,
						GamesUnlockedTableEntryStyles.entryColumn,
					]}
				>
					{game.dateLastPlayed}
				</Text>
				<View
					style={[
						GamesUnlockedStyles.col8,
						GamesUnlockedTableEntryStyles.entryColumn,
						GamesUnlockedTableEntryStyles.actionColumn,
					]}
				>
					<Image
						source={require('../../assets/eye-icon.png')}
						style={GamesUnlockedTableEntryStyles.reportIcon}
						resizeMode="contain"
					/>
					<TouchableOpacity onPress={() => setShowRestartModal(true)}>
						<Image
							source={require('../../assets/refresh-icon.png')}
							style={GamesUnlockedTableEntryStyles.reportIcon}
							resizeMode="contain"
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowDrop((prev) => !prev)}>
						{!showDrop && (
							<Image
								source={require('../../assets/down-arrow-icon.png')}
								style={GamesUnlockedTableEntryStyles.reportIcon}
								resizeMode="contain"
							/>
						)}
						{showDrop && (
							<Image
								source={require('../../assets/up-arrow-icon.png')}
								style={GamesUnlockedTableEntryStyles.reportIcon}
								resizeMode="contain"
							/>
						)}
					</TouchableOpacity>
				</View>
			</View>
			{showDrop && (
				<GamesUnlockedTableEntryDropDown attemptList={game.attemptList} />
			)}
		</View>
	);
};
export default GamesUnlockedTableEntry;
