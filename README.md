# Gmiphy Loyalty Station SDK

[Gmiphy Loyalty Station npm module Link](https://www.npmjs.com/package/@gamiphy/loyality-station-react-native-sdk)

## Introduction

Gamiphy Loyalty & Rewards, is a gamified loyalty program plugin/widget for eCommerce. You will be able to reward users with points for completing pre defined "challenges" within your store. In addition to that users can compete with each other in compeitions reflected on a leaderboard, receive badges and invite their freinds, among other gamified features.
  
## Installation

Gamiphy Loyalty Station is available through [npm](https://www.npmjs.com/package/@gamiphy/loyality-station-react-native-sdk), To install:

```sh
npm install --save @gamiphy/loyality-station-react-native-sdk
```  

## Getting started


Import  `LoyaltyStation`  from the library:

```javascript
import {LoyaltyStation} from "@gamiphy/loyality-station-react-native-sdk"
```

Then wrap your code in  `LoyaltyStation`  component to make it available to all components.

```javascript
<LoyaltyStation config={config:WebviewConfig}>  
    <YourComponent/>
</LoyaltyStation>
```

You can usee the use the [hooks](https://reactjs.org/docs/hooks-intro.html) based API to access the Loyalty Station functionality : 

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


### Injected props

It will inject the following props to the component:
```
`config` :
        `app`               - the loyality station id "bot Id"
        `user`:
            `email`         - is a must
            `hash`          - is a must
            `firstName`     - optional 
            `lastName`      - optional

```
