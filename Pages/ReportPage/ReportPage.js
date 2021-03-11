import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ReportPageStyles from './ReportPage.Styles';
import { NameDetails } from './ReportPageData';
import NameTag from '../../components/NameTag/NameTag';
import StatsDiv from '../../components/StatsDiv/StatsDiv';
import Card from '../../components/Card/Card';
const ReportPage = (props) => {
	const [index, setIndex] = useState(0);
	return (
		<View style={ReportPageStyles.reportContainer}>
			<View style={ReportPageStyles.topContainer}>
				<View style={ReportPageStyles.nameTagContainer}>
					{NameDetails.map((child, id) => (
						<NameTag
							key={child.name}
							name={child.name}
							onClick={() => setIndex(id)}
							active={id === index}
						/>
					))}
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
					<View style={ReportPageStyles.GameStats}>
						<Text style={ReportPageStyles.stats}>Game Unlocked</Text>
						<Text style={ReportPageStyles.stats}>
							{NameDetails[index].unlocked}/120
						</Text>
					</View>
					<View style={ReportPageStyles.verticalLine} />
					<View style={ReportPageStyles.GameStats}>
						<Text style={ReportPageStyles.stats}>Game Completed</Text>
						<Text style={ReportPageStyles.stats}>
							{NameDetails[index].completed}/120
						</Text>
					</View>
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
						<View style={ReportPageStyles.ReportIconContainer}>
							<Image
								source={require('../../assets/game_completion_icon.jpg')}
								style={ReportPageStyles.reportIcon}
								resizeMode="contain"
							/>
						</View>
						<Text style={ReportPageStyles.option}>Game Completion</Text>
					</Card>
				</View>
			</View>
		</View>
	);
};

export default ReportPage;
