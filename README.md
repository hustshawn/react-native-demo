react-native-demo 
=================================================================
This is a **React Native**app demo, that demonstrates a list of artists with their corresponding introduction and their talk sessions in by calendars. Basically, it is just a react way to re-create the app as what I firstly learn Ionic, and the all the sources (data and images) from this [project](https://github.com/planetoftheweb/angularMobile).
For someone who are new to React Native, it may help you have a basic understanding on how react native works from a very simple start.

I believe, any simple app should have its architecture, even this simple app has no exception. Basically, it composed with 3 tabs at the bottom, and each of them going to its corresponding page and routed respectively, as what we experienced in Facebook app, no matter how much layers you get into each of the tab, you can switch back from another tab.
 
And the most basic thing to develop an app is to have a list view and the routing. In this app, the `NavigatorIOS` and `ListView` are used, and the styles are based on `flex-box` by default and with `yarn/npm` as package management.

## Setup ##

```
npm install -g react-native-update-cli

```

*if have `yarn` installed*
```

yarn install

```
or 
```
npm install
```

## Run App ##
```
react-native run-ios
```

***
## Demo ##

### Home Tab ###
![homeTab.jpeg](https://github.com/hustshawn/react-native-demo/blob/master/snapshot/homeTab.jpeg)

### Artists Tab ###
![artistsTab.jpeg](https://github.com/hustshawn/react-native-demo/blob/master/snapshot/artistsTab.jpeg)

### Artist Detail Tab ###
![detailsTab.jpeg](https://github.com/hustshawn/react-native-demo/blob/master/snapshot/detailsTab.jpeg)

### Calendars Tab ###
![calendarsTab.jpeg](https://github.com/hustshawn/react-native-demo/blob/master/snapshot/calendarsTab.jpeg)
