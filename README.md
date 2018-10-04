![](assets/apple_logo.png)

# 📲 xcassets

Generate **xcassets** resources for your iOS application

**THIS PACKAGE IS WORK IN PROGRESS**, for everything you can [write me an email] 📬

## Getting started

```
npm i -g xcassets
```

[![NPM](https://nodei.co/npm/xcassets.png?compact=true)](https://www.npmjs.com/package/xcassets)

## How to generate xcassets

Run the command

```
xcassets --icon=[PNG_FILE]
```

or

```
xcassets --icon [PNG_FILE]
```

[write me an email]: mailto:matteomanzinello@gmail.com

> with `[PNG_FILE]` the icon in PNG format (at least 1024x1024!)

or simply

```
xcassets
```

> xcassets uses a default png file called `appIcon.png` in this case

📲 **xcassets** will create for you a folder called `Images.xcassets` with sub-folder `AppIcon.appiconset` and all the correct resources. You can now import the entire `Images.xcassets` directly in **XCode**

## Future work

At the moment xcassets generate only app-icon assets!
