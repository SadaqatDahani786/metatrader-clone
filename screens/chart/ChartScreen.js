import { useEffect } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

//Navigation
import { useIsFocused } from "@react-navigation/native";

//Redux
import { useDispatch } from "react-redux";
import { changeNavActive } from "../../store/navigationReducer";

/*
 ** ** =============================================================
 ** ** ** Component [ChartScreen]
 ** ** =============================================================
 */
const ChartScreen = () => {
  const removeElements = ["overlap-manager-root"];
  const stylesToInject = `
      .layout__area--topleft {display:none !important;}
      #overlap-manager-root {display:none !important;}
    `;

  //Javascript code to inject into the webview
  const injectedJavaScript = `
  
    function removeScriptTags(element) {
        var scripts = element.getElementsByTagName('script');
  
        for (var i = scripts.length - 1; i >= 0; i--) {
            element.removeChild(scripts[i]);
        }
    }
  
    removeScriptTags(document.head);
    removeScriptTags(document.body);
  
    var iframes = document.getElementsByTagName('iframe');
  
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        iframe.parentNode.removeChild(iframe);
    }
  
    var classNamesToDelete = ['layout__area--topleft', 'layout__area--top', 'layout__area--left', 'layout__area--right'];
  
    classNamesToDelete.forEach(function(className) {
        var elementsToDelete = document.getElementsByClassName(className);
  
        while (elementsToDelete.length > 0) {
            elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
        }
    });
  
    var styleElement = document.createElement('style');
    styleElement.innerHTML = '.chart-page { background-color: #ffffff; }';
    document.head.appendChild(styleElement);
  `;

  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Make current screen as active in redux store
  useEffect(() => {
    //1) If screen not active, return
    if (!isFocused) return;

    //2) Current screen is active, make it active in redux also
    dispatch(changeNavActive(1));
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        source={{
          uri: "https://www.tradingview.com/chart/?symbol=BITSTAMP%3ABTCUSD",
        }}
        style={{
          flex: 1,
        }}
        javaScriptEnabled
        onMessage={(event) => {}}
        injectedJavaScript={injectedJavaScript}
        containerStyle={{}}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default ChartScreen;
