# Gamiphy Loyalty Station React Native SDK  
  
  
## Introduction  
  
Gamiphy Loyalty & Rewards, is a gamified loyalty program plugin/widget for eCommerce. You will be able to reward users with points for completing pre defined "challenges" within your store. In addition to that users can compete with each other in compeitions reflected on a leaderboard, receive badges and invite their freinds, among other gamified features.  
    
## Installation  
  
To install:  
```sh  
npm install --save @gamiphy/loyality-station-react-native-sdk  
```   

#### Requirement

```javascript
	"react": "^16.x",  
	"react-native": "^0.x",  
	"react-native-webview": "^10.x"
```

## Getting started  
  
  
Import  `LoyaltyStation` from the library:  
  
```javascript  
import {LoyaltyStation} from "@gamiphy/loyality-station-react-native-sdk"
```  
  
Then wrap your code in  `LoyaltyStationProvider` component to make it available to all components.  
  
```javascript  
<LoyaltyStationProvider config={config:Config}>    
    <YourComponent/>  
</LoyaltyStationProvider>  
```  
  
You can use the hooks based API to access the Loyalty Station functionality:   
  
```javascript  
  
function App() {  
  const {open, close} = useLoyaltyStation()  
 
	 return (
		<View>    
			<Button title="Open Loyalty Station " onPress={() => open()}/>    
			<Button title="Close Loyalty Station" onPress={() => close()}/>    
		</View>  
	 );
}  
```  

Hooks providing the following functionality: 

|  Function|  signature|Description
|---------------------|---------------------|---------------------|
| open   | ()=>void| opining the Loyality Station App 
| close |()=>void | Closing The Loyality Station App 
| logout   | ()=>void| Logout 
| login |(user:User)=>void | Login



  
  
###  props  
  
It will inject the following props to the component:  

| Prop|---|Type|Optional| Description|
|-------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Config:   |---|---|no|
|     | app  | string  |   no|  The app ID|
|     | user |  User | yes  |  
| User:   | |     |
|     | email  |string   | no  |  User's email|
|     | hash  | string  |  no  |  The hash value is generated using the client hmac as a key, sha256 as the algorithm, and the value is constructed as this appId|email. const hash = hmacSHA512('appId|email', appKey);|
|     | firstName   |string   |no   |  User's first name|
|     | lastName  |string   |no   |  User's last name|
|goToAuth| |(isSignUp:boolean) => Void| yes | listener on the "Sign in" button |


