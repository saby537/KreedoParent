import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import GameCompletionReportHeaderStyles from './GameCompletionReportHeader.Styles';
import { NameDetails } from '../../Pages/ReportPage/ReportPageData';
import SelectUserModal from '../SelectUserModal/SelectUserModal';
import GameCompletionIcon from '../../assets/ParentCorner/Game completion_Icon.svg';
const GameCompletionReportHeader = () => {
	const [showUserModal, setShowUserModal] = useState(false);
	const [currentChild, setCurrentChild] = useState(0);
	const selectUserCloseHandler = (id) => {
		setShowUserModal(false);
		setCurrentChild(id);
	};
	return (
		<View style={GameCompletionReportHeaderStyles.guContainer}>
			<SelectUserModal
				modalVisible={showUserModal}
				nameDetails={NameDetails}
				selectedChild={currentChild}
				selectUserCloseHandler={selectUserCloseHandler}
			/>
			<View style={GameCompletionReportHeaderStyles.headerIconContainer}>
				<View style={GameCompletionReportHeaderStyles.nameIconContainer}>
					<Image
						source={require('../../assets/person-male-icon.png')}
						style={GameCompletionReportHeaderStyles.nameIcon}
						resizeMode="contain"
					/>
				</View>
				<TouchableOpacity onPress={() => setShowUserModal(true)}>
					<Image
						source={require('../../assets/user-drop-down-icon.png')}
						style={GameCompletionReportHeaderStyles.userIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={GameCompletionReportHeaderStyles.gameScroll}>
				<View style={GameCompletionReportHeaderStyles.iconContainer}>
					<GameCompletionIcon width={'100%'} height={'80%'} />
				</View>
				<View style={GameCompletionReportHeaderStyles.textContainer}>
					<Text style={GameCompletionReportHeaderStyles.title}>
						Game Completion Tracker
					</Text>
				</View>
			</View>
			<View style={GameCompletionReportHeaderStyles.homeIconContainer}>
				<Image
					source={require('../../assets/home-icon.png')}
					style={GameCompletionReportHeaderStyles.homeIcon}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

export default GameCompletionReportHeader;
