# Sportdec
The app aims to provide live scores of a soccer match, of various leagues and seasons. The events of the match are displayed using a series of intuitive icons, along with their timestamps.

## Installation and Usage
To build the app, follow these simple steps:

* Run `cd /path/to/sportdec`
* Run `npm install` inside the repository
* Run `npm start`
* Connect your test device, or spin up an emulator
* Open another terminal instance, and run:
    * `react-native run-ios` for iOS device
    * `react-native run-android` for android device

## Screenshots
![Highlights Tab](https://ys1sra.dm2302.livefilestore.com/y3m0i40q7B9rSCyA1_LDH6FL8SJYWiDjh4f3M1oDvOK-JVu8bZEFD8Lu97gsK1TZ1x0R-qDKe-_mrJhTGs7wO8PDFRKfVhv9oMlbMyTWQj-ooPzfnO6W-UZlonyMM27GQfoboFa4rqQ8IwIkxCUfK7fcKxxMI-rirm-SHNIu-9QXoY?width=768&height=1280&cropmode=none)

![Live Tab](https://lrmqoq.dm2302.livefilestore.com/y3mkcBFgrvbSMbpmxrI5leu9eOgX8Ggn2Mjjo7E4sItrXXnlLbKEWDMtp7TaFZ97W_91Z_5Q5_bU1A8iyMSlhDdWMLMiH1xC3BPvAM6hqv8wWn5pHaibF8p5E8NCRnvvpV_8H8_kjOVwMbXqZkgn-jH2EciQvGQOwuMClCuPyKPbXc?width=768&height=1280&cropmode=none)

![League Tab](https://j3jlda.dm2302.livefilestore.com/y3m-JcPTIY61qmJ0lIzqHs8_HBnKpLp7xFb3pyh49I4_MHuAvY559nErzSPD-j0U4HscylctCtbZoSzA3_LKuqPhLwJjYY7KT9uthoOoiw1HP8XSqdYSTgFbigRhhZ_H62w9e95PP3Bl7llwGyxkL_TzQLtmnfGSQfHu7Ni-0aRhn8?width=768&height=1280&cropmode=none)

## Assumptions
* Challenge asks for a "mobile web app", but prefers a project made in ReactNative (which can only be a mobile app)
* Icons provided (via icomoon) cannot be directly used in a ReactNative app, so they have been converted to a suitable form
* Color scheme is provided via `.scss` file, which is not supported in React native. Therefore it is converted using React native's `StyleSheet` component
* `assets/football-event-icons-sprite/selection.json` (original repo) does not have all icons, and icons in `assets/football-events-sprite.png` (original repo) cannot be converted to SVG (poor image quality), therefore, some icons have been added manually
* Match details of only one match have been provided, therefore the app will only have a single route, containing match details of that particular match (although navigator is still provided to add additional routes in future)
* Image assets for teams and league have not been provided, so they have been added manually
* It is assumed that data provided via `json/match_sample.json` should be received via an API call, therefore haven't been placed in `/app/config` or any other folder. For now, it is placed in `/app/lib` (original repo) folder
* No sample event provided for second yellow card or red card. Assuming those events will have category as 'booking', and value as 'Red' and 'SecondYellow' respectively
* No sample event provided for own goal. Assuming that event will have category as 'goal', and value as 'OwnGoal'
* Substitution on/off have separate events, but only one usable SVG icon provided (including both green and red arrows). Therefore, the SVG has been broken into two parts
* `/app/images/sportdec-diamond.png` has been used as the app logo