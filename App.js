import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
	let HTML = `
    <html>
      <head>
        <script type="text/javascript" src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </head>
      <body>
        <div id="workbookControl"></div>
            <div id="tableeditor">editor goes here</div>
            <div id="msg" onclick="this.innerHTML='&nbsp;';"></div>
			<a href="https://www.google.com">dddddd</a>
			<a href="https://www.google.com" target="_blank">bbbbbb</a>
      </body>
    </html>
    `;
	let jsCode = `
	var razorpayCheckout = new Razorpay({
		key: "rzp_test_AErANIRUmkA89c",
		order_id: "order_Hu7kRE7ZrUIA3B",
		notes:{
			rtcl_order_id: "6276"
		},
		"prefill": {
			"name": "ssss",
			"email": "ssss@kk.com",
			"contact": "+918787878787"
		},
        "description": "Purchase Description",
                                                    
                                                    "theme": {
                                                        "color": "#fc9c04"
                                                    },
                                                    "handler": function (response){
                                                        alert('hello');
                                                        window.ReactNativeWebView.postMessage('payment id');
                                                    }
	});
		razorpayCheckout.open();
    `;

	return (
		<View style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
			{/* <Button
				title="ggg"
				onPress={async () => {
					try {
						await InAppBrowser.open("google.com", {
							// iOS Properties
							dismissButtonStyle: "cancel",
							preferredBarTintColor: "gray",
							preferredControlTintColor: "white",
							// Android Properties
							showTitle: true,
							toolbarColor: "#6200EE",
							secondaryToolbarColor: "black",
							enableUrlBarHiding: true,
							enableDefaultShare: true,
							forceCloseOnRedirection: true,
						});
					} catch (error) {
						console.log(error.message);
					}
				}}
			/> */}
			<WebView
				// useWebkit={false}
				// originWhitelist={'["*"]'}
				source={{ html: HTML }}
				injectedJavaScript={jsCode}
				onMessage={(e) => {
					console.log(e);
					console.log(e.nativeEvent.data);
				}}
				javaScriptEnabled={true}
				javaScriptEnabledAndroid={true}
				// domStorageEnabled={true}
				onError={console.error.bind(console, "error")}
			></WebView>
			{/* <WebView
				originWhitelist={["*"]}
				source={{
					html: '<html><head><script src="https://checkout.razorpay.com/v1/checkout.js"></script></head><script>var razorpayCheckout = new Razorpay();razorpayCheckout.open(); alert("ss")</script></html>',
				}}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
