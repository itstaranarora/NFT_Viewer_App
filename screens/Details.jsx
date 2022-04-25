import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
} from "react-native";

import { COLORS, SHADOWS, FONTS, SIZES, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  SubInfo,
  DetailsBid,
  DetailsDesc,
} from "../components";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
        source={data?.image}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight}
      />
    </View>
  );
};

export default function Details({ route, navigation }) {
  const { data } = route.params;

  console.log(data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data?.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />
              {data?.bids?.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}
