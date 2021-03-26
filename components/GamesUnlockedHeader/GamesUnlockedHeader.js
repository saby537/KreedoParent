import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import GamesUnlockedHeaderStyles from './GamesUnlockedHeader.Styles';
import { NameDetails } from '../../Pages/ReportPage/ReportPageData';
import SelectUserModal from '../SelectUserModal/SelectUserModal';
const GamesUnlockedHeader = ({ navigation, id }) => {
	const [showUserModal, setShowUserModal] = useState(false);
	const [currentChild, setCurrentChild] = useState(0);
	const selectUserCloseHandler = (id) => {
		setShowUserModal(false);
		setCurrentChild(id);
	};
	return (
		<View style={GamesUnlockedHeaderStyles.guContainer}>
			<SelectUserModal
				modalVisible={showUserModal}
				nameDetails={NameDetails}
				selectedChild={currentChild}
				selectUserCloseHandler={selectUserCloseHandler}
			/>

			<View style={GamesUnlockedHeaderStyles.headerIconContainer}>
				<View style={GamesUnlockedHeaderStyles.nameIconContainer}>
					<Image
						source={require('../../assets/person-male-icon.png')}
						style={GamesUnlockedHeaderStyles.nameIcon}
						resizeMode="contain"
					/>
				</View>
				<TouchableOpacity onPress={() => setShowUserModal(true)}>
					<Image
						source={require('../../assets/user-drop-down-icon.png')}
						style={GamesUnlockedHeaderStyles.userIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={GamesUnlockedHeaderStyles.gameScroll}>
				<View style={GamesUnlockedHeaderStyles.iconContainer}>
					<Image
						source={require('../../assets/dice-icon.png')}
						style={GamesUnlockedHeaderStyles.icon}
						resizeMode="contain"
					/>
				</View>
				<TouchableOpacity
					style={GamesUnlockedHeaderStyles.arrowContainer}
					onPress={() =>
						navigation.navigate({
							routeName: 'GamesUnlocked',
						})
					}
				>
					<Image
						source={require('../../assets/left-white-triangle-arrow.png')}
						style={GamesUnlockedHeaderStyles.icon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<View style={GamesUnlockedHeaderStyles.textContainer}>
					<Text style={GamesUnlockedHeaderStyles.title}>
						{id === 1 ? 'Games Unlocked' : 'Games not yet started'}
					</Text>
				</View>
				<TouchableOpacity
					style={GamesUnlockedHeaderStyles.arrowContainer}
					onPress={() =>
						navigation.navigate({
							routeName: 'GamesNotYetStarted',
						})
					}
				>
					<Image
						source={require('../../assets/right-white-triangle-arrow.png')}
						style={GamesUnlockedHeaderStyles.icon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<View style={GamesUnlockedHeaderStyles.iconContainer} />
			</View>
			<View style={GamesUnlockedHeaderStyles.homeIconContainer}>
				<Image
					source={require('../../assets/home-icon.png')}
					style={GamesUnlockedHeaderStyles.homeIcon}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

export default GamesUnlockedHeader;
