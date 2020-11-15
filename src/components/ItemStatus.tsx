import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DoneIcon from "../../resources/images/done"

const DetailsLine = (props) => {
	const { prop, value } = props
	return (
		<View style={styles.detailsLineWrapper}>
			<Text style={[styles.detailsProperty, styles.width50]}>{`${prop}: `}</Text>
			<Text style={[styles.detailsPropertyValue, styles.opacity03]}>{`${value}`}</Text>
		</View>
	)
}

const Signature = (props) => {
	const { title, IconComponent } = props
	return (
			<View style={styles.signature}>
				<Text style={[styles.font24]}>{title}</Text>
				<View style={styles.iconWrapper}><IconComponent/></View>
			</View>
	)
}

const signatures = [
	{title: 'DHL Digital Signature', IconComponent: DoneIcon},
	// {title: 'KLM Digital Signature', IconComponent: DoneIcon}
]
const values = [
	{prop: 'State', value: 'PACKAGE RECIEVEED'},
	{prop: 'Date', value: '12/12/12'},
	{prop: 'Listed By', value: 'MSD'},
]

export function ItemStatus() {
  return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Package 1</Text>
			{values.map((v) => <DetailsLine prop={v.prop} value={v.value}/>)}
			{signatures.map((s) => <Signature {...s}/>)}
			<View style={styles.files}>
				<Text style={[styles.font24, styles.opacity03]}>Files</Text>
				<View style={styles.header}>
					<Text style={[styles.width20]}>Name</Text>
					<Text style={[styles.width20]}>Added By</Text>
					<Text style={[styles.width20]}>Date</Text>
				</View>
				<View style={styles.fileItem}>
					<Text style={[styles.width20, styles.underline]}>House Way Bill</Text>
					<Text style={[styles.width20]}>MSD</Text>
					<Text style={[styles.width20]}>12/12/12</Text>
				</View>
				<View style={styles.fileItem}>
					<Text style={[styles.width20, styles.underline]}>Ground Waybill</Text>
					<Text style={[styles.width20]}>DHL</Text>
					<Text style={[styles.width20]}>12/12/12</Text>
				</View>
				{/* <View style={styles.fileItem}>
					<Text style={[styles.width20, styles.underline]}>Air Waybill</Text>
					<Text style={[styles.width20]}>KLM</Text>
					<Text style={[styles.width20]}>12/12/12</Text>
				</View> */}
			</View>
		</View>
  );
}


const styles = StyleSheet.create({
	title: {
		fontSize: 28,
	},
	wrapper: {
		paddingTop: '2em',
		paddingLeft: '2em',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingTop: '0.5em'
	},
	fileItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingTop: '1em'
	},
	files: {
		display: 'flex',
		paddingTop: '1.5em',
		paddingLeft: '0.5em'
	},
	detailsLineWrapper: {
		padding: '0.5em',
		paddingTop: '0.3em',
		display: 'flex',
		flexDirection: 'row',
	},
	detailsProperty: {
		fontSize: 18
	},
	detailsPropertyValue: {
		fontSize: 18,
	},
	width50: {
		width: '50%',
	},
	width20: {
		width: '20%',
	},
	signature: {
		justifyContent: 'space-between',
		display: 'flex',
		flexDirection: 'row',
		paddingTop: '2em',
		paddingLeft: '0.5em'
	},
	iconWrapper: {
		marginRight: 50
	},
	underline: {
		textDecorationLine: 'underline'
	},
	font24: {
		fontSize: 24
	},
	opacity03: {
		opacity: 0.3
	}
})