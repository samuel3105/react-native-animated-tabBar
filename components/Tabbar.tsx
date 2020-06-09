  
import * as React from "react";
import {
  SafeAreaView, StyleSheet, Dimensions, View, Animated,
} from "react-native";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";


const { width } = Dimensions.get("window");
const height = 64;

const tabs = [
    {
      name: "grid",
    },
    {
      name: "list",
    },
    {
      name: "repeat",
    },
    {
      name: "map",
    },
    {
      name: "user",
    },
  ];

const tabWidth = width / tabs.length;
const left = shape.line()
	.x(d => d.x)
	.y(d => d.y)([
	{ x: 0, y: 0 },
	{ x: width, y: 0 },
]);

const tab = shape
	.line()
	.x((d) => d.x)
    .y((d) => d.y)([
        { x: width, y: 0 },
        { x: width + 5, y: 0},
        { x: width + 10, y: 10},
        { x: width + 15, y: height},
        { x: width + tabWidth - 15, y: height},
        { x: width + tabWidth - 10, y: 10},
        { x: width + tabWidth - 5, y: 0}
    ])

const right = shape.line()
	.x((d) => d.x)
	.y((d) => d.y)([
	{ x: width + tabWidth, y: 0 },
	{ x: width * 2, y: 0 },
	{ x: width * 2, y: height },
	{ x: 0, y: height },
	{ x: 0, y: 0 },
]);

const d = `${left} ${tab} ${right}`;

interface TabbarProps {}

export default class Tabbar extends React.PureComponent<TabbarProps> {
    render(){
        return (
            <>
                <Svg width={width * 2} {...{height}}>
                    <Path {...{ d }} fill="white"/>
                </Svg>
                <SafeAreaView style={styles.safeArea}/>
            </>
        )
    }
}

const styles = StyleSheet.create({
	safeArea: {
        backgroundColor : '#F23122'
    }
});