import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GamesUnlockedTableEntryStyles from './GamesUnlockedTableEntry.Styles';
import GamesUnlockedStyles from '../../Pages/GamesUnlocked/GamesUnlocked.Styles';
import GamesUnlockedTableEntryDropDown from '../GamesUnlockedTableEntryDropDown/GamesUnlockedTableEntryDropDown';
import RestartGameModal from '../RestartGameModal/RestartGameModal';
import ShowDropDown from '../../assets/ParentCorner/Game report_Drop down icon_Down.svg';
import HideDropDown from '../../assets/ParentCorner/Game report_Drop down icon_UP.svg';
import GameReset from '../../assets/ParentCorner/Game_Reset_icon.svg';
import EyeIcon from '../../assets/ParentCorner/Profile_Parent_Details_witness.svg';

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
					<EyeIcon width={20} height={20} />
					<TouchableOpacity onPress={() => setShowRestartModal(true)}>
						<GameReset width={20} height={20} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowDrop((prev) => !prev)}>
						{!showDrop && <ShowDropDown width={20} height={20} />}
						{showDrop && <HideDropDown width={20} height={20} />}
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
