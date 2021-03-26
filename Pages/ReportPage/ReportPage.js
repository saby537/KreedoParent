import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../utils/Color';
import ReportPageStyles from './ReportPage.Styles';
import Header from '../../components/Header/Header';
import { NameDetails } from './ReportPageData';
import NameTag from '../../components/NameTag/NameTag';
import StatsDiv from '../../components/StatsDiv/StatsDiv';
import Card from '../../components/Card/Card';
import SelectUserModal from '../../components/SelectUserModal/SelectUserModal';

const ReportPage = ({ navigation }) => {
	const [index, setIndex] = useState(0);
	const [showUserModal, setShowUserModal] = useState(false);
	const [currentChild, setCurrentChild] = useState(0);
	const selectUserCloseHandler = (id) => {
		setShowUserModal(false);
		setCurrentChild(id);
		setIndex(id);
	};
	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<View style={ReportPageStyles.reportContainer}>
				<SelectUserModal
					modalVisible={showUserModal}
					nameDetails={NameDetails}
					selectedChild={currentChild}
					selectUserCloseHandler={selectUserCloseHandler}
				/>
				<View style={ReportPageStyles.topContainer}>
					<View style={ReportPageStyles.nameTagContainer}>
						<TouchableOpacity onPress={() => setShowUserModal(true)}>
							<NameTag
								key={NameDetails[currentChild].name}
								name={NameDetails[currentChild].name}
								active={true}
							/>
							<Image
								source={require('../../assets/user-drop-down-icon.png')}
								style={ReportPageStyles.userIcon}
								resizeMode="contain"
							/>
						</TouchableOpacity>
					</View>
					<View style={ReportPageStyles.homeIconContainer}>
						<Image
							source={require('../../assets/home-icon.png')}
							style={ReportPageStyles.homeIcon}
							resizeMode="contain"
						/>
					</View>
				</View>
				<View style={ReportPageStyles.childStatsContainer}>
					<StatsDiv
						value={NameDetails[index].today}
						percent={NameDetails[index].todayPercent}
						title="Today"
					/>
					<StatsDiv
						value={NameDetails[index].week}
						percent={NameDetails[index].weekPercent}
						title="This Week"
					/>
					<StatsDiv
						value={NameDetails[index].month}
						percent={NameDetails[index].monthPercent}
						title="This Month"
					/>
					<StatsDiv
						value={NameDetails[index].year}
						percent={NameDetails[index].yearPercent}
						title="This Academic Year"
					/>
				</View>
				<View style={ReportPageStyles.horizontalLine} />
				<View style={ReportPageStyles.GameStatsContainer}>
					<Card style={ReportPageStyles.CardStyles}>
						<TouchableOpacity
							style={ReportPageStyles.GameStats}
							onPress={() =>
								navigation.navigate({
									routeName: 'GamesUnlocked',
								})
							}
						>
							<View>
								<Text style={ReportPageStyles.stats}>Games Unlocked</Text>
								<Text style={ReportPageStyles.stats}>
									{NameDetails[index].unlocked}/120
								</Text>
							</View>
						</TouchableOpacity>
						<View style={ReportPageStyles.verticalLine} />
						<TouchableOpacity
							style={ReportPageStyles.GameStats}
							onPress={() =>
								navigation.navigate({
									routeName: 'GamesUnlocked',
								})
							}
						>
							<View>
								<Text style={ReportPageStyles.stats}>Games Completed</Text>
								<Text style={ReportPageStyles.stats}>
									{NameDetails[index].completed}/120
								</Text>
							</View>
						</TouchableOpacity>
					</Card>
					<View style={ReportPageStyles.ReportOptions}>
						<Card style={ReportPageStyles.ReportOption}>
							<View style={ReportPageStyles.ReportIconContainer}>
								<Image
									source={require('../../assets/progress_report_icon.jpg')}
									style={ReportPageStyles.reportIcon}
									resizeMode="contain"
								/>
							</View>
							<Text style={ReportPageStyles.option}>Progress Report</Text>
						</Card>

						<Card style={ReportPageStyles.ReportOption}>
							<TouchableOpacity
								style={ReportPageStyles.TouchableOption}
								onPress={() =>
									navigation.navigate({
										routeName: 'GameCompletionReport',
									})
								}
							>
								<View style={ReportPageStyles.ReportIconContainer}>
									<Image
										source={require('../../assets/game_completion_icon.jpg')}
										style={ReportPageStyles.reportIcon}
										resizeMode="contain"
									/>
								</View>
								<Text style={ReportPageStyles.option}>Game Completion</Text>
							</TouchableOpacity>
						</Card>
					</View>
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

export default ReportPage;
