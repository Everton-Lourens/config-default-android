import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//import { Drawer, Footer, Header, Section } from '@/src/widgets';

const Index = () => {
	const [drawer, setDrawer] = useState(false);
	const [urlImg, setUrlImg] = useState('https://img.freepik.com/premium-photo/headphones-music-background-generative-ai_1160-3253.jpg');

	useEffect(() => {
		/*
		const intervalId = setInterval(() => {
			setUrlImg(getUriPicture || urlImg);
		}, 1000);
		// Cleanup
		return () => clearInterval(intervalId);
		*/
	}, []);

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor='black' />

			<ImageBackground style={styles.backgroundcontainer} source={{ uri: urlImg }} blurRadius={20} resizeMode="cover">
				<SafeAreaView style={styles.container}>
					{/*<Header
						options={{
							left: {
								// @ts-ignore
								children: drawer ? <Image style={[styles.headerBtn]} source={require('@/src/assets/icons/close-icon.png')} resizeMode="contain" /> : <Image style={[styles.headerBtn, { tintColor: 'gray' }]} source={require('@/src/assets/icons/hamburger.png')} resizeMode="contain" />,
								onPress: () => setDrawer(!drawer),
							},
						}}
					/>*/}
					<ScrollView>

						<View style={styles.sections}>

							{/*<Section.Explore />*/}
							{/*<Section.Recent style={{ marginTop: 30 }} />*/}
							{/*<Section.Favourites style={{ marginTop: 30 }} />*/}
							{/*<Section.Playlist style={{ marginTop: 30 }} />*/}

							<ScrollView>
								<View style={{
									flex: 1,
									marginTop: Dimensions.get('screen').height * 0.025,
								}}>
								</View>
							</ScrollView>
						</View>
					</ ScrollView>
					{/*<Footer />*/}
				</SafeAreaView>
			</ImageBackground>
		</>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundcontainer: {
		flex: 1,
		backgroundColor: 'black',
		paddingTop: StatusBar.currentHeight, // or: paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	sections: {
		flex: 1,
		marginTop: Dimensions.get('screen').height * 0.025,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	headerBtn: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		alignSelf: 'flex-end',
		//justifyContent: 'center',
		//alignItems: 'center',
		//paddingLeft: 4,
		borderRadius: 35,
		//borderWidth: 1.5,
		//marginHorizontal: 5,
		//marginVertical: 50, // position
	},
});