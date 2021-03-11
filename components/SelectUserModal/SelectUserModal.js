import React, { useState } from 'react';
import { View, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import SelectUserModalStyles from './SelectUserModal.Styles';
import NameTag from '../NameTag/NameTag';
const SelectUserModal = ({
	modalVisible,
	selectUserCloseHandler,
	nameDetails,
	selectedChild,
}) => {
	const [index, setIndex] = useState(selectedChild);
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={selectUserCloseHandler}
		>
			<View style={SelectUserModalStyles.centeredView}>
				<View style={SelectUserModalStyles.modalView}>
					<View style={SelectUserModalStyles.modalHeader}>
						<Text style={SelectUserModalStyles.headerText}>Select Child</Text>
						<TouchableOpacity onPress={selectUserCloseHandler}>
							<View style={SelectUserModalStyles.closeIconContainer}>
								<Text style={SelectUserModalStyles.closeText}>X</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={SelectUserModalStyles.nameTagView}>
						{nameDetails.map((child, id) => (
							<NameTag
								key={child.name}
								name={child.name}
								onClick={() => setIndex(id)}
								active={id === index}
							/>
						))}
					</View>
					<Pressable
						style={[SelectUserModalStyles.button]}
						onPress={() => selectUserCloseHandler(index)}
					>
						<Text style={SelectUserModalStyles.select}>Select</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};
export default SelectUserModal;
