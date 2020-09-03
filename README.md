# Gamiphy Loyalty Station React Native SDK


## Introduction

Gamiphy Loyalty & Rewards, is a gamified loyalty program plugin/widget for eCommerce. You will be able to reward users with points for completing pre defined "challenges" within your store. In addition to that users can compete with each other in compeitions reflected on a leaderboard, receive badges and invite their freinds, among other gamified features.
  
## Installation

To install:
```sh
npm install --save @gamiphy/loyalty-station-react-native-sdk
```  

## Getting started


Import  `LoyaltyStation`  from the library:

```javascript
import {LoyaltyStation} from "@gamiphy/loyalty-station-react-native-sdk"
```

Then wrap your code in  `LoyaltyStationProvider`  component to make it available to all components.

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


###  props

It will inject the following props to the component:

|  |   | type  | req/op  | description  |
|---|---|---|---|---|
| Config: 
|     | app  | (string)  |   require|
|     | user |  (User) | optional  |
| User: 
|     | email  |(string)   | require  |
|     | hash  | (string)  |  require  |
|     | firstName   |(string)   |require   |
|     | lastName  |(string)   |require   |
||  
|goToAuth| |(isSignUp:boolean) => Void| optional | fiers boolean flag once the user press the signIn Button


