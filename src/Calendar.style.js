/**
 * Created by bogdanbegovic on 8/26/16.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: "hidden"
  },
  datesStrip: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10
  },
  calendarDates: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  calendarHeader: {
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  icon: {
    resizeMode: "contain"
  },

  //CALENDAR DAY
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  dateName: {
    textAlign: "center"
  },
  weekendDateName: {
    color: "#A7A7A7",
    textAlign: "center"
  },
  dateNumber: {
    fontWeight: "bold",
    textAlign: "center"
  },
  weekendDateNumber: {
    color: "#A7A7A7",
    fontWeight: "bold",
    textAlign: "center"
  },
  selectWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    opacity: 0
  },

  // CALENDAR DOTS
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: "blue"
  },
  selectedDot: {
    backgroundColor: "blue"
  }
});
