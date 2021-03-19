import React, { useState } from 'react';
import { View, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import RestartGameModalStyles from './RestartGameModal.Styles';
import RadioButton from '../RadioButton/RadioButton';
const RestartGameModal = ({
	modalVisible,
	selectUserCloseHandler,
	gameName,
	level,
}) => {
	const [ind, setInd] = useState(0);
	const buttonClickHandler = (id) => {
		setInd(id);
	};
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={selectUserCloseHandler}
		>
			<View style={RestartGameModalStyles.centeredView}>
				<View style={RestartGameModalStyles.modalView}>
					<View style={RestartGameModalStyles.modalHeader}>
						<Text style={RestartGameModalStyles.headerText}>
							Restart {gameName} ({level})
						</Text>
						<TouchableOpacity onPress={selectUserCloseHandler}>
							<View style={RestartGameModalStyles.closeIconContainer}>
								<Text style={RestartGameModalStyles.closeText}>X</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={RestartGameModalStyles.buttonView}>
						<RadioButton
							content="Restart the game"
							id={0}
							active={ind === 0}
							buttonClickHandler={buttonClickHandler}
						/>
						<RadioButton
							content="Play from Level 1"
							id={1}
							active={ind === 1}
							buttonClickHandler={buttonClickHandler}
						/>
						<RadioButton
							content="Play from Level 2"
							id={2}
							active={ind === 2}
							buttonClickHandler={buttonClickHandler}
						/>
						<RadioButton
							content="Play from Level 3"
							id={3}
							active={ind === 3}
							buttonClickHandler={buttonClickHandler}
						/>
					</View>
					<Pressable
						style={[RestartGameModalStyles.button]}
						onPress={selectUserCloseHandler}
					>
						<Text style={RestartGameModalStyles.select}>Select</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};
export default RestartGameModal;
