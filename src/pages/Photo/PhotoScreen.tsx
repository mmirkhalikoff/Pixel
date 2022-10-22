import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {isDarkMode} from '../../theme/mode/chackMode';
import {colors} from '../../theme/colors/colors';
import {windowWidth} from '../../constants/ScreenSize/size';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes/routes';
// import Video from 'react-native-video';

const PhotoScreen = () => {
  let navigation = useNavigation();

  const [photo, setPhoto] = useState();
  // const [photoTwo, setPhotoTwo] = useState();

  const [videoState, setVideo] = useState();

  let PIXELS_API_KEY =
    '563492ad6f917000010000015494bcde8dcc43e68f1a9a1dc5b8d574';

  // Load Photo //
  // let loadPhoto = async () => {
  //   // https://api.pexels.com/v1/curated //  load default photo api
  //   // https://api.pexels.com/v1/curated?page=2&per_page=50 // load photo in 2 page total photo 50 // max content in one page total 80
  //   const data = await fetch(
  //     `https://api.pexels.com/v1/curated?page=2&per_page=80`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: PIXELS_API_KEY,
  //       },
  //     },
  //   );

  //   // const dataTwo = await fetch(
  //   //   `https://api.pexels.com/v1/curated?page=3&per_page=80`,
  //   //   {
  //   //     method: 'GET',
  //   //     headers: {
  //   //       Accept: 'application/json',
  //   //       Authorization: PIXELS_API_KEY,
  //   //     },
  //   //   },
  //   // );

  //   const response = await data.json();
  //   // const responseTwo = await dataTwo.json();
  //   setPhoto(response);
  //   // setPhotoTwo(responseTwo);
  //   // console.log(response);
  // };

  // let loadVideo = async () => {
  //   const data = await fetch(`https://api.pexels.com/videos/popular`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: PIXELS_API_KEY,
  //     },
  //   });

  //   const response = await data.json();
  //   setVideo(response);
  //   // console.log(response);
  // };

  // useEffect(() => {
  //   loadPhoto();
  //   loadVideo();
  // }, []);

  // console.log(videoState);
  // console.log(photo);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.bgApp,
        },
      ]}>
      {/* <TouchableOpacity
      // onPress={() => {
      //   //@ts-ignore
      //   navigation.navigate(routes.SPLASH_PATH);
      // }}
      >
        <Text style={styles.textScan}>Home</Text>
      </TouchableOpacity> */}
      {/* <View> */}
      {/* <ScrollView> */}
      {/* {photo?.photos?.map((e, i) => {
            return (
              <View>
                <Text>{i}</Text>
                <Image
                  key={i.toString()}
                  source={{uri: e?.src?.large2x}}
                  resizeMode="cover"
                  style={{
                    height: 250,
                    width: windowWidth / 2 - 40,
                    borderWidth: 1,
                  }}
                />
              </View>
            );
          })} */}
      {/* {photoTwo?.photos?.map((e, i) => {
            return (
              <>
                <Text>{i}</Text>
                <Image
                  key={i.toString()}
                  source={{uri: e?.src?.large2x}}
                  resizeMode="contain"
                  style={{
                    height: 250,
                    width: windowWidth / 1 - 40,
                    borderWidth: 1,
                  }}
                />
              </>
            );
          })} */}
      {/* {videoState?.videos?.map((e, i) => {
            const videoFormatSd = e?.video_files.filter(e => e?.width === 640);
            console.log(e?.video_files);

            return (
              <Video
                key={i.toString()}
                source={{uri: videoFormatSd?.link}} // Can be a URL or a local file.
                // Store reference
                //  onBuffer={th.onBuffer}                // Callback when remote video is buffering
                //  onError={this.videoError}               // Callback when video cannot be loaded
                //  style={styles.backgroundVideo}
                style={{
                  height: 250,
                  width: windowWidth / 1 - 40,
                  borderWidth: 1,
                }}
              />
            );
          })} */}
      {/* </ScrollView> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  textScan: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
  },
});
