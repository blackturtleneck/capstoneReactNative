import React, { Component } from "react";
import { Text, View, StyleSheet, Slider } from "react-native";

export default class RangeSlider extends Component {
  state = {
    startLabel: this.props.initialStart,
    endLabel: this.props.initialEnd,
    start: this.props.initialStart,
    end: this.props.initialEnd
  };

  render() {
    const { color, min, max } = this.props;
    const { start, end, startLabel, endLabel } = this.state;

    return (
      <View>
        <Text style={styles.sliderLabels}>
          {startLabel} - {endLabel}
        </Text>
        <View style={styles.sliders}>
          <Slider
            style={styles.backgroundSlider}
            minimumValue={this.min}
            maximumValue={this.max}
            thumbTintColor="transparent"
          />

          <Slider
            style={styles.startSlider}
            onValueChange={this.handleStartValueChange}
            onSlidingComplete={this.handleStartSlidingComplete}
            value={this.asInverse(start)}
            step={1}
            minimumValue={min}
            maximumValue={max}
            thumbTintColor={color}
            minimumTrackTintColor={color}
            maximumTrackTintColor="transparent"
          />
          <Slider
            style={styles.endSlider}
            onValueChange={this.handleEndValueChange}
            onSlidingComplete={this.handleEndSlidingComplete}
            value={end}
            step={1}
            minimumValue={min}
            maximumValue={max}
            thumbTintColor={color}
            minimumTrackTintColor={color}
            maximumTrackTintColor="transparent"
          />
        </View>
      </View>
    );
  }

  asInverse(num) {
    const { min, max } = this.props;
    const numInverse = min + (max - num);
    return numInverse;
  }
  asForward(numInverse) {
    const { min, max } = this.props;
    const num = -numInverse + min + max;
    return num;
  }

  handleStartValueChange = startInverse => {
    const start = this.asForward(startInverse);
    this.setState(() => ({ startLabel: start }));
  };
  handleStartSlidingComplete = startInverse => {
    const start = this.asForward(startInverse);
    this.setState(() => ({ start }));
  };

  handleEndValueChange = end => this.setState(() => ({ endLabel: end }));
  handleEndSlidingComplete = end => this.setState(() => ({ end }));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 64,
    backgroundColor: "#ecf0f1"
  },
  myRangeWrap: {
    width: 200
  },

  sliderLabels: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 8
  },

  backgroundSlider: {
    width: "100%"
  },

  startSlider: {
    position: "absolute",
    width: "100%",
    left: 0,
    transform: [{ rotateY: "180deg" }]
  },

  endSlider: {
    // position: 'absolute',
    // width: '100%',
    // right: 0
  }
});
