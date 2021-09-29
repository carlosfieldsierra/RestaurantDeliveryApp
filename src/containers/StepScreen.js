import React, { Component } from "react";
import { Image, Button, View, Text, TouchableHighlight } from "react-native";

import { CommonActions } from "@react-navigation/native";

//data layer
import { UserContext } from "../store/UserProvider";

const stepNames = ["Broth", "Noodles", "Toppings"];

export default StepScreen = ({ navigation }) => {
  const { currentBowl, bowls, setBowls } = React.useContext(UserContext);
  navigation.setOptions({
    title:
      "Bowl: " +
      (currentBowl + 1) +
      ", Step: " +
      stepNames[bowls[currentBowl].step],
  });
  var step = bowls[currentBowl].step;
  if (step == 0)
    return (
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          onPress={() => {
            var b = bowls;

            if (b[currentBowl].stepData == undefined)
              b[currentBowl].stepData = {};
            b[currentBowl].stepData[b[currentBowl].step] = 0;

            b[currentBowl].step += 1;
            setBowls(b);
            navigation.push("StepScreen", {
              title:
                "Bowl: " +
                (currentBowl + 1) +
                ", Step: " +
                (bowls[currentBowl].step + 1),
            });
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://www.chopstickchronicles.com/wp-content/uploads/2020/03/Ramen-Broth-36.jpg",
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
            >
              Beef Broth
            </Text>
            <Text>
              {bowls[currentBowl].stepData == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == 0
                ? "Selected"
                : "Not Selected"}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            var b = bowls;

            if (b[currentBowl].stepData == undefined)
              b[currentBowl].stepData = {};
            b[currentBowl].stepData[b[currentBowl].step] = 1;

            b[currentBowl].step += 1;
            setBowls(b);
            navigation.push("StepScreen", {
              title:
                "Bowl: " +
                (currentBowl + 1) +
                ", Step: " +
                (bowls[currentBowl].step + 1),
            });
          }}
        >
          <View>
            <Image
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
            >
              Pork Broth
            </Text>
            <Text>
              {bowls[currentBowl].stepData == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == 1
                ? "Selected"
                : "Not Selected"}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  if (step == 1) {
    return (
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          onPress={() => {
            var b = bowls;

            if (b[currentBowl].stepData == undefined)
              b[currentBowl].stepData = {};
            b[currentBowl].stepData[b[currentBowl].step] = 0;

            b[currentBowl].step += 1;
            setBowls(b);
            navigation.push("StepScreen", {
              title:
                "Bowl: " +
                (currentBowl + 1) +
                ", Step: " +
                (bowls[currentBowl].step + 1),
            });
          }}
        >
          <View>
            <Image
              source={{
                uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgUFRUZGRgaGhsYGxsbGRsbGhoaGhoaGhoYGBobIS0kGx0qHxgaJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHxISHTMqJCszMzMzMzUzMzUzMzMzMzMzMzMzMzMzMzMzMzMzMzUzMzMzNTMzMzMzMzMzMzMzMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABAEAACAAQEAgcFBgMIAwEAAAABAgADESEEBRIxQVEGEyJhcYGRMqGxwdEUQlJy4fAVI4IHM0NikqKy8RZj4lT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAsEQACAgEDAwMDBAMBAAAAAAAAAQIRAxIhMQRBURMycSJhgQWRsfAU0eGh/9oADAMBAAIRAxEAPwCmmXaPNFIIZbRrSOM7KFWZbCkeYDDTGuovB2Kl9naNcqnlCQa05R2Yvac2RVIPwyTF7MzbnBEwGnZaogedimYU4RPgpJueEVoSwuXOmUAVzSkbs7tZmrArPagsOENcvwyPSpvBo12b5fiQo0stIMXGS2J7JqI3EtNZQm9IIk5clSdQpC3EfTJB2XzQUFIaoO6BsJKlqLMIOSYv4hCSaGpnukRmkc4kVhzHrGsyXqhQEYINqiN5aEkAXrE+X5VKlrqYBmZgSTuthQb7d3fBuHxKVtShJFhS6gk+4ViEs8YvSFRbVgUzAzBWgVjwGqlfA0iaXI0opeXVm3FfZ7rcYAzXGMFZVB1hFIpWxO4pxtAWW9Iuvlurdl00sCtSTQ9qla/sxyPrd9LX98Dad0htNlgHaxGoeHf3xBhsQkyuk1oaGIpWK11dq2UOF4lNu1314QJkmHBeZMWg1MTpAoBbakdGLOp7PkaUXEbhgTSt4w8qwqyyRMWc5bZjXwEbSBME93f2WoqxahSXFYFXNWvCo5OO0DxNR3RYCwOwhAftHXs2g9WBSvCvz8oyiuWHU+ETyZGhQpvSPWSIp+OGtRcCu/pAUvONeJMkCwFaxRIRsOZIjMqN8FiDNd1VSQppUA3MGyMHMatZRW9qlb99jG2QBa0jugafhgQRQw7mYFx90wLNTTvbxgquxmVPHZSxHYYqYhl4ScoALAiLXYixtEDp4QRaKxipAYXWEuJEtCRShhzneZBCyUvThFQnsdyak+6JPIuEOsb5YRrP4YyPZTGgvHkS9RjaEMSlo9RLRshraN0WIWXCsuw4cmoG0CiX/lENclcK9+IIgR1FW23Pxjoxv6SOT3EaJzUQTJPDTGIOcSoPSsPbFskCDbRBUiWqkMEvGsob0gqUBakbU/ITJU7+YTp4QxE+oI0e6FqU6zvpzhkiwqseUuAU4gFFqt1a/rDWXiUI9iIEkDlveJlAsNowZTtUa4eetSCOMTCanf6xCQBA75hKDFK9oQsbit2Byt7FkyR9auo4EXtWlKqDzpf1ifAWmFQLe16ilfQQF0VnBut03A0X7+1b3Q2UaWPM9n6Ry5o1JS7Wa+UKzRsQW4agB/SdJ95HpAGIw6y3DIikiY3WAABikyxYcyN/IxPLkmXL5spmkV/yuGFT5CF/SUn7ThtBAWeTqa4agQuoUjapB9Y5o219+SulX/ew+kSAWYUIKjSW+66NWngwPx48K9h8weUxluQNJKgFdJNNiDxtesbdF80mM7yZnaUCgY+1pYtQHnQrv3wRmeHkzWYaGV5bVFTUNz037toZttJp0zVpbUtx3Jnq4BBB8I3IB4RUP4aRdJjC9f8AqlKQVInT5f8AiEjiahgBzINI7FlyR9yJ+nF+1lkeVoGqghTMx1RNUfdanqoP19YDxGcTVdEOgq9ake0KAkWp3RBIm1WZQE6nYm3JVHyhZZbaOvFh0rcZZPhRMRWYgjtClLgg8T4EQykZTIVi4lrq5kVMUTHZpOkLVGUCpJQ2baxHA8qW3MWTB5sxVOydTgMQR7NQLHlQUhll7MWfTW20WmWoApt4RsVgHDYjVBQmrWm55CLRkqOWUGmbstYgm4VWFGUMORAI9IJjQm8FiimZlUsDsoB+Ww9BAOLycMOw5U+TD0398WN0gGYlDWFcpLhhST5OWZ50bxEtmfSHXmu48VN/SsVnEYY6gGRl4dpSPjHbp6BgQwsag2qKHhFUzDMxK0qZZoJgCsG1o6FqEaid9JrQ7Ecomk5ccjymo8lH6kCMi8TZ4YkqqUO1Vln367xkL6TB6iKagvEoWkH5hhdMwg/sRH1MBx3HizMOI903MT4fDVIFYYrlY/EYvii2iOTkVqu0TovpDBcqH4jEq5WPxGK+mxLBUW9rQRK4UgtMrr94wQmVj8RjemzWUvHuyTyTUXqIf4DNkcmrAUHHiY1z/LFDKSSYTYjL5YFePjDTa00+wuO3PSt7LEc0lyk1zpi3NgDwgj+IoJiBvZYVBMU7AhUmayoanBrxYHkfaR1lCALADhHPFqUtn+DszYJY46mv2LN9lVgO2Ir+edH7tNWYBbaFwwzLYTHFO+JJklnoGmMR4xdxRxa+5Zf7OJnYmL4H0JHzi0YygKsRsw9TsYrvQmQJfWAVp2PeTX5Q/wA5XVJbTuASPFaG3vjh6n2OuVv+xaDTkvubnD1bUCKhWCg7Vdh2jz9n3mEPSaU4kS5j6etlmW9VuNSsNemvArq9YdStRWWWIps1dy1bUp31hTnGJSajFTVUfQ9bUJWrA17o55yWnbnb/dlIJ6hTgWAxagCgZwSf8tGmKPCrR5h5jvMYtarPUef7EDyXEvEAMbqoB7yNtuYpDbAYAlnJHbVyDc8bg0/e8HDBzaX3KZZKKv7G1ICzOdollgK038IcfYX7ohxGXF1KvShj0pQdM5sc0pJlPQBsXLW9AXtwBCN9Yc5O2nWv/sPvVYEzWasmbLcmqLVdQvcrpqacojwUys3rFaqE35fm/fOOM9JuzfNcK0xz2mCey1L1PKIZbz0BTQzoCANBWrCltV6qOEXOUitoAAoO0fBb/GkFS8CmsvQVAAHidz8Ib07B66iuBfluFmuilmCig7KD3ajv6CHWGkBRYefE+MbhqRG8+KQgonJPJKXwEVEQTmFRAM3FUFOP7pALZh2gSwpBc0aOJjtniCZNvtAkvMFI3iXr1pA1WDRRHOuDSlb77d1Yqa5ezTHlqygS1Nguga5gOpgBsaDe+8Wt3EKcTg2EwzZb6XYBWDDUjAbEgEGoqb1hoyqxJw1CVcNIXszFcuPaJRTU+IFDGQe2WO12mvU76QAvkKGg8zGQda8sX05eEcpx/SydMbVRV8oEbpLOpSo8aQleYSSTGUjo9OPgjrl5G6dJsQDXWPSHWA6eTFoJksMOY3ilmMgpJcGcmzo69O0JosskQ4yrpZJmnSTobk0ciUwyyqYjNomcdjyMaUnFWGLvY7fKxCnZgfOC0mDnHJsJJcM8vrGqoqLm4gzCzJugt1rjT3xP10VWOT4Lp0sxAREcgkVpaKguJ66aApoKcecWXIpLzZWp318gY8ndFkZTMTsueHCsK3KbarYpiUYSUr3ErYR0XU69mu4NYY5JmARypfSlKmsBYnGiXJbDzKlwbXqN4RohmOqcSQIEMW9nZm6pOLi9/wCBz0gzZWYCUbcTzgzo47FC7+UYehbUB6z3RJMyGbKl2ndkd20HNjm4/ScmOcFs+C1ZHmCyySTQEf8AX774tDeywvvW/fY0jmuEwqIQJk3XUV8I6YhqCO74rURyvFKMUmDJKLdoDxjUCqLUAY+tWgbIWUSQzC7TH1V4sXZR8hBEwanVeYI9VJHvEKujYJw5Qk6lmPve6OrCkcUJPW3+ClfRX97iTN5TK5pd9FK8yjVuO8QxyPOBOmBwKEoVmDkyE0JjXOKdbY3q5pzFq/GEuWv1eImMGWj0JANwwqNuRjs6eSSa8NCZYttP7F9M0CKZnmczMRMOGw50oP7yZy/yr3xtn+ddVL3u1oQYOfNlKoaXpDnVXetdqnnHpt7HDNtLYaDBypadWKkVqakmp4m8QINB7FR3cPSCZY1XicSxCPFF8kF1M48NheWZi2nSRewBr92taQ6OcSwLuAzHat7Abjyip4twi234UiuPnsx5/UTBptvavvjnlhlF/Sd+Lqoyj9fJ05s4T8Q9YBxGfy1418L/AAirysuDy3mBwunYt2h31BsRCTL85ly8S4JDvQCoAVR3KBYQVilVtml1EUrSLZjMymv7KkDm1Vt53PlC0E/emN/TQD31hgGMwajETyRDxwLuck+um+NhZOmOCNExhe9b/CkHzMTiJQU61cHuI+sKs4xSS1JPCCMuxvWyFfuhlhi+xTF1E3yyf/ysK2iZ2W5V+B4wxkZ6j/einZqks1EwhTTcxWpmL6upR+ythTjE5YV2Z0rN5R17+IrzjI5RJzmaVEZEfSkH/IgVdTEyyztxj3DpQFj4CNDMNax3nKaspER1gsjUteMDukBoJgMYWjQR7AMXPo3iDNoT7SjTvvFkl5YBLZbrqNSY5xk04rOShIGsVvv4x2rG4XrJaMDS4rTjE/TinZWOR8CPD9IJeCTqnBJpVTT2oHyDpbMm4go9Aj+yOUedIMnbEIOrpqltTy2iDD9EuraW6v21ILR2wlj078shNS1bcBuO6MzHnM2vsvueIh3kmRS5Fz2n5mDQ9gI91RG0VJsVitCM+9BWEuMx7vKUtTtUt52jJeaS5k15Db0t3wtku0yY8thTqzT6RHJJyVJloQ07yQw/m09haU5R0XATAVU8SisedCq/OsUN2IFN4uWQsTKRzaqBfHQSo9w98RywpJ2+RdWrsTzUpRqey3+1iQffWFGUIEL3t18w91GBt30HwhtiJwEzSdmt5GEZqjy1P/6HB8Cj6T7xHlS9y09nv8l4cOxLmur7QF4q5v3UtTxBEe4bKB9odqHbl4w3x2ADz5ExTXtqjjvQEf8AFjX8oh6jhtRXgT7jHodJjqyeed0co6aSCcVh5IqdRqQOQp9YuGJy4dWFoTQDypCLNn15zKX8Etz6lRFqnTGof3zjsdnK90xKkqgESRJOWBphNDFTziTA4PrXLNWi7RUHy/rM0ZADRVqfX9I6PkQIljwiq5C3WZniplPZ0p6LX5xKuWd8dopCHpllryQrKzBXYLprYkkAVEBYToXOV1mX/EfOH39os4tNw8rm4PpFskI/VDtCwEbfZBaVMXyJWlBEM4wTiWooEQ5XhzMmqDsO0fKK3seco26K700ytkw5mMvnEmS5bMGFVaEVW3pDf+0iZqlypI/xJiL5A1PuEPHoktVFgFERbfk9OKS2o5LmnRnEuSWaoFTFeweVzJpZEFSu8dSzvFlJbtXgf3vFS6Hg6HmcWJjRboMqJMHlpVFB4CPIerLjIY5NRzCe+yjYRDHlY9hmzoN5b0iaZTeBliRWgoxGwjWkbsseQoT1bX4i/pHb+j2M63Bow30++n6xw6sdE/s+zxFTqHNCD2e8GA+Ax5LbhmlqT2rk3vxgfDYomfMDHs20wgzWWZc8urWJrSsbYvPFUBUHapc8oWMqVsrKNvYt2uPRMqIquX5/JWWOtmgPXa5PoI9mdM8KuxdvBaf8iIexXsKMY0yXiSwBLBtQ8IIw+OmGY0wmhbgN7QqzTpMHm9ZLBXgAQCfcYFl9I2RiWlKzgn2iQQQaEUETUKZefU6opUdBy6bMIJmHwi9ZPUy8Op2Ku1P6wwJ8h744eem83hLQeTH5x2rJ57dRgwyUmTJSK240fyg7Eg7XIFDftCJ9U/pSXkjCrDM1H8zVypC7pGTWW4/ED5gfv0htmakhj3BvMWgbFprw7DcqK+a/pHjNPXJfk64vZP8ABJkqDU7G4L6x3HRpPzPnA+W4pRMdCwqGNj33EIhnsyU+JRVSkvDDFKzVofaBDUOxpam1DFExHSWZMmtMogLUsCwFuN6x7HS+w483uHr4hBnc1mcALKABJtUmsWR80lGiiYhJ4Ai8chxeFmTJjzOsXU+949yiU8qckyZdFNTpufSsdHck+Njrk+A8WwVSTAf/AJLhnP8Aehfzhk/5AQPn2MX7O7IwYU3Ug/CHOHS73Q8wXSfDqGGu4Wvxil9HOlMmS+ImzK/zJjMKcq0HuEc9+0PWzNU2tx7oa4TozipoH8plB2LnQD4BrnyEJKUUt2ejjxTltFWNc96SpPxaTVroQWrF4y/PxNCoKX4cYpEzoFNlgGbNRa3opqfea+6CcswcvBuZivViKdsinltEZ9Rji63v4OyP6ZnyRtUl5bReca96RDleJYTgi/etCvBZoJ2o1UlTurAgjnYmkV3Oc+mYbErMl0JUGx2iykpRtHkvC8eVxfKLhmkv7TmUuSDUSU1t+Y2X3VhfnfTOXKmPKZWqp0mF/wDZ7m5nYvEzprhXdAamwoOzQeEUrO2aZPdmNTqIJG1iRaBR0WN886RpMllEreDeieIBRZYG28UmbKKmkXroPgtKNMPGNRPJKkWFljIimPcxkMc5yIGNo0iRUJsAT4CMdhgjZTEiYSYTQS3J5BT9IKTI8UxoJD1/LT4xrMAEx5WHMropjGbSJDV7yPrEU7JXkzGSdQFKalBqQTcKSNjAtGoWpLLbCvwHiYIw56tg9akcBt6wTN2oAAOAEAzKxg8B2KziZMILEWsLQG+KY7knxMa4XDPMYJLRnY7KoJJ8hG+KwUyU5SYjKw3BHw5wNjWyJmjyG+S5FMxE1JYGnWwXUR7INtVKgmnK1Yf4zoHMlzFUzAyEhS6qKKDbUwJsPCvjCTzQi0pOhowlJWkUqkXTJeiq4rANMVdM9XYI1TSYBQ6WBsLkgEUuIc5f0IlrLcuodu0JdXIUkCpckAbUtFolrLw0lZa2VFueZ4nzJ98eX1/6hoSjif1Wv2/6Zwa5OJ4XCPMcSkUs7HSFAvU2vy7+UfUOMlnqia6W7BsKn7mpR46aVjmOBzPTLmYiXISWq9kvp0tMcmoRAi1ZjuTwjoOR4x8TIXrAVOldXOtag0pUVHA8opLqZZE04teO+48Y07DZra01CxKhhWw3uDyFIgkdkaSQa+lPZ4+IifDuHDBaAduX3ClaHwpC7qRL0qX1EKFutKn7zV77HyiE3xL/ANLx7xEObSdWExChRrEubJPPSKsF8LW8Y5NIk2qADXYHjWtCP1jtYlHrZk0uAhRA6Eff1FVcHkRQEcaDz5JmmG6qfMRdICuabCimjJ7mHpHX0mRRjTYuWDk7SI5aSu0pXTtzJqttJFqA1N9wRtEU5JZFRUb2HdxMbIjMaBEoaCodQSR40FYkxUiZLIDKy2HAX4jSy2bxBjrllSVobp+inlmovZeReuFmOaBTSpuTpHqYaZZ0dQtWY7OeKyuyg5BppHG+w4bwHPxKSxWY5J4IvtH8xNkHjU90KcZnM2YNIOhPwrUV/Md28/SJJ5Z8bI7smPo+m2dyl47fkvJzHA4St0VhbTIGpz+ae1SD4UhRiunswkrJRZIO7GpZvFvar4tSKUy0jWKrElzucOTrpy9qSXhFmlYjEYgkl28jpB/00B86xZuj2TSlls02Wjnmyq3xEUjJ8UyNpVtNfSvI/WGc3MZ5llVbs13494iijFcbHDmeXJvqb/I6wuBWVinmIVWW6UCi1GqK0AtSxPnCbpBhNZaYHvyrCqY80KH1m5pvEM8OG7RrxhthNErtsgkYgoaj1h9lc6RMs7BT3whnEUAiebKQSgadrnCtD0TY1F64gMNI4xcUziTh8OoDBieAij4ORqBjyRKBrqBpzEZ0hXDVyWQ9LE/CY9ioOFrGQQenE7NLyPBS79Wus8ANoNk4HCyrlAXOwpEg0SxV6O58TSN5ElFBmTNzsKfWJHTRMuFkoNbDtnYVESrJly16wsdR2FYHwuELEzWY0G1SsayhMmTNRIKLwLRgB2GkqimY0w6m23jiOPdiz666y5Zu81Oo+sdifGdZMCUAVd9ztuYo/TnJwk5pi+w5rqAI0OdweQgrkzKC84x4zWrBmIy9l7VKjmLj9I10Bq9wrDN0IdL6H4uTJwooZaEqoLGilmI3JNyawTis/lILgMe8A/GOc4Rg0ujHSovc+ZgvrCgB1HYEUIrQ7GsebLC9TuT5HjlUVuh1kWZJLmvOmKxLE6FRBbtaqkgDjS5ix5jmTzVeWrKdbAB0RzTiaEjb0imZcWmVota/ertX8RNj5d8XLKHmqhVQSoJJ0BmArx2rtTcxy9VKuFugR6ifC2XwZgMxmSkEkpVE1aXcdpgbVA4Ac4dZdlEyd23OgCjDWpuK1qtdzQe+A0zwqp4jjUfGu0J806aTGBWWGY8wLf6tvKOKGvJO3Df52DGXdu38FyxOaycOA0xgwSulQgrUg1Cgn2jXcwPkPSsYlHmCSUUN2FWjM5AqdQX7wFTTlFU6NYaXNfXODF9xV0INRQ9kGpi+5KkhGrKsCwDEVuRYaq1vwjol1Dg1CUW22t1wNcnK+3g96PY9eseWbMasO8C1RXfv5QqzTrkn9aaPKPtbAop2PeAfQEmNcyzvqsRoFCS16cNR3NOF4fyUrQ1VlNQ1LjSwurCnnDxamlBKqvk6FOm5CLOO3g5iK5VphVEJsRRq1BF/A90V3OMk+1osslFxiIDvZwN0Y+pHK/fFpxmU9W6zFmKQrAqr1AC1BKceVjQcIixQlNMAkuNbElnu2katWkBTbjeKxk4Un2KbSTo5CMpmByrFVYGhDNSh76AxmadbIXSro2rdpbBgB3bFSeJoDaOpZ1kSCccQ5lojqA2oGpcA1IFjU0pT4cQpcrBvImS/s2gupViQS19mR3qVIIB0m0dazK9wLUl9L5ONScOSfHnDCXlQIJJNiPPevwiwv0VmKNQBbv0EbcLW9YXTMK8vfVStDW2wiry6vaziy4JoVZmo0LalCQPy0/SFiiHuZ9pKDcGveaGhAp3EH15QB9iKgF2W4B0g1PgeR7o6MdqO5GEWlTIsJLqw7jUnkBDeRMBD95r+/SApKajoQW4/VjDRsL2CF3gvdlVshLjpNCKHfhA/XNWhvE7YSZr0mse4jAlKV4wyEYPiJuojujyYwoADDIZZ3wJicudBU7QTGYedoXxifBPRTEErEBaBlqIa4aZLcWIryhJBQjIPKMix/ZBHsbUajpeDR7zZgPMVPy+UTSJcye+pgAg4E+7xhUuJ69wqByvfX1MOcTNEqWESXQkbk3A/Ee+JlT3GvqYSkCAVoac/oIMxM9ZMsIrJqNrL6mIsowrIpmMqCoqK8BziBGadNu6gdw2Ufv3wf5Zg/KyElmY2q4rZaW4RBhMOJ7P1ktnUg1B2Ndo3zrFAKJfWm9zQcBsP3ygjK0RJeo6zWrHw4e6DSuhbdWc4z/ozMw8xjIcha2VqMh46SDasJXaQ1sRIZH2Lyjbx0nh5x1TCYdZrlXlllapIJ5/9xW+kPRt5RqvaQ7BhXfgSNjDRltuLKPgpn8DlzABJxSPySZ/LYeRsYLwGSzJEzXisG82XTeWdV7UNQdqV25iBMVg1BNVK+8e6MwuKnSv7qawHJXNPTaC4xaJ7l1wfSPLQApRpRU1HWS2JB/MQfjDjC9I8MSTLxCVFKUZRWvMRzabn08/3lH/Mqn5Qtn45W9qSh8qRy5Ohg902jph1Djs4pnbetkTEMzq5Zdj2jRbkUHntA74WRMHalSydvYU++kcVSfLpZWT8rkCNmzEr7EyaP6z9Y5p/ps3LUpdvBaHVwSpxOz4XLpauOrlgLxFWK+ak6aeUNcNOKuUZyaixsKEbUoKC0cHk9IcQns4iaPOvxghemGMAtiHp+VfpBh0ORO7NLqcctqOs/aKziuJw6BlNRMBVda1oCfxin7EGYiZqNZegjgwAYD/db0jiuI6WYpwA85iBcWW1eRpA/wDHp4/xXB8aRR9FJu7Xz3J+tC7o7TOx7JZ5iPW2nQxHfXhGZU8x2YypcmSPvPpNT4D9aRxSZnc5vamuf6jHhzWZSnWvTiNbU+MGPRu92N/kxrZHcs4wMlgOvm6iL+3oFePGgNITPistlqxOKFgaKHLGv9PfHH2xFd6kx4DX7sUj0kU+RX1UmqLZmPSJAxCzGdfumhQ+DA/ERXcTnAJ2+fviD7OTvQCNkwiDx9YrHFGPAks0pckDYuY/sikTYTLnmMBckkDxJ4DiYOwuELOFRbnbifTh5x0vo90fXDBZjETJhF6XCV4LzPfBlNLgCi5cmdGOi8vDytTaGmMO0pAOkfhHfziLNejMqYayqo/4T7J8OUWQTUmHsLpePJ01/ZmJbg1IjbW6H0p7HOp2VzJT0mSyDwNLHwPGEWeKDMRRzjrr4TUppMV0/Cb/AB2io510ZlTXWZLmaXX/AA22Pg3CKRyeRJY/AhbD2FoW55LKy4s6YSYG0sNJ7/iOcAdIMimuo6uhveGUhWhFhcKjSwGEanIlrVWIi0YDJtKDXvBEzCKvsxnI1FcXCkcTGQ70jlGQLNRacFhlw8slporxpuTwURDgZazZmqY7EbnfyUQHicUk1wEQkCyjmee8WHDzBJl2lbXJPFj5RluNwRZripYAlqGPE77cBvB2TSgqauqNTep5cN/WEuFWZOmmw3qTwp5+kO80eakvTqALWty4/TzgpdwPwAa3nTbIBqNB3AfpDnNHmLLpqUVovl/0IV5JhSSztMpSw8Tvx5fGPM7MvWq6yaCp8T+g98GqQOXQbkye0xm02FvX6QPmjp1hBYsAAPn84KynqllioJJJPyHHuhVicShmNRPvH3WjNbIy5AM86PAr1kqrWBZfvC1yD94dxikYjB3P0I9SNvMR2qdNfq2olKKfhFSn5QMQ9KBXOzczTjT4i8Nwxas5s8lhsWHhRh7oHctzU+6LNnWTvJfTMBB4E3BHNWG484TTJZ/dD/yhgC1k5p6RC6r+EiDpkvmB6MvwtEegd/k4+cEwEVTkY8JWlKmg2g1k/P8A7T8Ij6r8/wDoBjABNKczGFU41gppfe3+ikepL738lEYINoTgDG6oOCGJnX83qBG4QU/+q/CAYHQGvsgeMSmpP0EeyRfb3fWN5a6ngMx60vYfv0EMsuyp5rhEG12OyjxPPuhllPR8zGBc6VF6H2m8BtTvh8MOJB0k9mtbWB/WJTl4KxiT5JgcPJBVhVzuxt5AfdENftDSzWWNS/vf6wL1siatj2hx3I7jziOVmjSuyRVfIW7u6JUUQecQZ3sAI/79YgbEz5Z0zalTxF/+/AxBMRpvblADwtfxOxiEYuYT1c+3jf1A38YwQ1sKv95KmD8tfd+hjZcwkMNM1SrDjT6wHNycp/MlPUb0Bp6Hj4GPZWOw7jRMUBhbVf48PhAo1hc9mK0Ca04A3I7xS48oBlyy3s2PIkA+APGMOKmSTWUSyb0P0HxEDTszE40pobuG/nsY3ArRkxipIYGvhQ+kDzVBuI2xMqcoq/aXmTWnzWBTJBur1/ymgYeF6MIdSEaNCe+MiAgc/dGQwCzZCr/3gl1JstjbmY3zTGTGOngu/wCb9PrBGIzVkl9hQCbLYnh8h8oT4aVMmvS5G54fHnDPwgLyWDJcDMC6i1C19zWnD6wDmQLzDV6heyNztufWDcSZiSyxYAnsjtHc/QVPlCrLsD1kxVLW3O5sN/33wXzSMvJZMvwUtJahnvSpuNzfhfu8oRYubLLswvU23NthD3GSUSWxLGtKCpA3tb1hFhUlmYgtv3na/wAoMlukZPuWLD4yUigBfZHIcBFdlY0lhRbkjv3PcIfYnFyklvRb6SLAfesPjFfw+KDTEoPvCl++C+QItmKea0t7U7LfA84rGGSYJqdr7wG54+UWLFT5hlvT8J2HdzirBJhmKSSO0OPeIz5MuCyZnlwmSmEyjUoaG9LitDwNK3ijZn0aKjVKOscUr2/KnteHui8/ZHZGDEeyeJN6W4QqkywpUltiDy4wXs9gLg5lOl0NKU8qetKUjTqie/3j/iw98dS6XZPKMszQgZ07TbamXy3pHPp2IlOlRZhzv6cBDpMRsSTZYH3R/t+REeS5AP3fQN8niWaanf3n5ROsmg/QfMmMgsAmoBan/L6xvLkCldI9Pq8aPdv+vpBkyipX9+4xjC9l7VAB6D9YlxLaV/f6QKmIXVUn5xBPxXWMFUesAIfhEJBIH0HieEPMiwqq22t+FgQPAHj3wyyMyjLCkKCBQqBXz840nS+req1pXsmw8jTjEpNspFIatLnS6NuvebjxO8MsDh5c8aWNG/DwPeDAmBzUzFK0XVS4pWvfePJmHmIQxD6Cd9qdx+sTew5tjMqOHYODVa2JPuYcYZ4fFyZqaGUBuQHvUmC8uwwmpTWG5qRcgwuzDIjLOtdRHLYr+nfA+6NfkGd5kltSV013Nwe5hE/X/aRpI7Q5C48Dy7oNwGYSqaJmkHau4PjXYwJmEhUOqVU8acu8HcwKDYFMwc6Sam6V8R5gbGCpeBlThdiH5bH/AOhHknPmYaJgXlqpWv5htAmJy127Uqp40HxUwNjb9zGDYZr6WX19OKmMxM+TNFVBD+AHqOPiIiw80nsTKDgTSp8GEEYrIBTXKavGnA/lIjfALFj5hMldk3Xgd/Q8PAwIcKs49gkNudgPT6Q0k5gJdZc1O4nTf+oHcfu8BY+VLPakk+Vh5E3EFIDYN/CJ42f/AHRkQfxaetqG3cD7+MZB0o1sfY7NjMeoFALC/qfOGGVzmVailWofLgKn93jIyKrkmwPM8a7tp1Gi8LbkX+UM+j+DdgX/AKbnzPxEeRkaPuC+CbP5RUIpberG3Kw+cQdHsCHmFmJsvdubfCsexkMvcB8DfOpCLKNtyBufH5QnyubLE1D38F5AxkZB7mjwWPG5oOqcAH2Tv+zFVfGNWvePjGRkaXJlwPEx719rxoB9Ir9HNQTtbeMjIEuTItWBkM0tGJAqBwqeR98U7pD0PUzHMlwhJ1aSvZNRW1PZvXnGRkUYj5KXmHRnFygX0hlXcq62tWtGIPpCM4tqEVMZGQEBg6Yhgd42xE9mFzGRkMgkmX5a80ilACQNRPyF4vWD6E6ZfDVvqJuTytsIyMifPIUCYfCmW1SdjQgceYi5YbASpiCxKsKgncd/jGRkKkMxY0kyJm4BFwQNxz/SLDhM0SYlCtTsw4X+UZGQo4pxWqU1UOkE2oTUd1YOwuavN7ExiWpY8/HhWMjITuN2NMdkrBS60Ci5HIcx9IzLXAIWYxI4EcO48SIyMhe4Q/H5KjdpAFb1Deux74U4fNTJ7LVYA0I4jnpPy2jIyGlsLHclx8xJy6kWh4Md/AjjCF8XNksV1Gm5ANj390exkB8m7G2lZ9QFvx2qPPjC3GYB5JrUUNqj4ERkZGQGRri04rfxjIyMh6Af/9k=",
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
            >
              Thin Noodles
            </Text>
            <Text>
              {bowls[currentBowl].stepData == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == 0
                ? "Selected"
                : "Not Selected"}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            var b = bowls;

            if (b[currentBowl].stepData == undefined)
              b[currentBowl].stepData = {};
            b[currentBowl].stepData[b[currentBowl].step] = 1;

            b[currentBowl].step += 1;
            setBowls(b);
            navigation.push("StepScreen", {
              title:
                "Bowl: " +
                (currentBowl + 1) +
                ", Step: " +
                (bowls[currentBowl].step + 1),
            });
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Fresh_ramen_noodle_001.jpg/1200px-Fresh_ramen_noodle_001.jpg",
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text
              style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
            >
              Thick Noodles
            </Text>
            <Text>
              {bowls[currentBowl].stepData == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == undefined
                ? "Not Selected"
                : bowls[currentBowl].stepData[step] == 1
                ? "Selected"
                : "Not Selected"}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 3,
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableHighlight
        onPress={() => {
          var b = bowls;

          if (b[currentBowl].stepData == undefined)
            b[currentBowl].stepData = {};
          b[currentBowl].stepData[b[currentBowl].step] = 0;
          setBowls(b);
          navigation.push("ShoppingCartScreen");
        }}
      >
        <View>
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
          >
            Topping 1
          </Text>
          <Text>
            {bowls[currentBowl].stepData == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == 0
              ? "Selected"
              : "Not Selected"}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          var b = bowls;

          if (b[currentBowl].stepData == undefined)
            b[currentBowl].stepData = {};
          b[currentBowl].stepData[b[currentBowl].step] = 1;

          setBowls(b);
          navigation.push("ShoppingCartScreen");
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://www.chopstickchronicles.com/wp-content/uploads/2020/03/Ramen-Broth-36.jpg",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
          >
            Topping 2
          </Text>
          <Text>
            {bowls[currentBowl].stepData == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == 1
              ? "Selected"
              : "Not Selected"}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          var b = bowls;

          if (b[currentBowl].stepData == undefined)
            b[currentBowl].stepData = {};
          b[currentBowl].stepData[b[currentBowl].step] = 2;
          setBowls(b);
          navigation.push("ShoppingCartScreen");
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://solidstarts.com/wp-content/uploads/Bok-Choy-for-Babies-scaled.jpg",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
          >
            Topping 3
          </Text>
          <Text>
            {bowls[currentBowl].stepData == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == 2
              ? "Selected"
              : "Not Selected"}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          var b = bowls;

          if (b[currentBowl].stepData == undefined)
            b[currentBowl].stepData = {};
          b[currentBowl].stepData[b[currentBowl].step] = 3;

          setBowls(b);
          navigation.push("ShoppingCartScreen");
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://www.simplyrecipes.com/thmb/akJysvaQmkQpLt7Q2_SfA_jr2PU=/800x533/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__07__hard-boiled-eggs-horiz-800-429f7e9948b84a6d84237e228f9d54f2.jpg",
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{ width: "100%", fontWeight: "bold", textAlign: "center" }}
          >
            Topping 4
          </Text>
          <Text>
            {bowls[currentBowl].stepData == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == undefined
              ? "Not Selected"
              : bowls[currentBowl].stepData[step] == 3
              ? "Selected"
              : "Not Selected"}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
