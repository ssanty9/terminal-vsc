# Terminal VSC README

This is a default terminal which is going to be shown in a new tab in the vsc editor

## Installation

- After cloning this repository, from you need first to install node_modules:

```bash
npm install # Probably you'll need the admin permissions so try sudo npm install
```

- Then you can compile the externsion:

```bash
npm run compile 
```

- You can test the extension apply F5 on visual studio code to open a new debug session: 

- Finally you can generate the .vsix file to install later in visual studio code with the next command from your terminal:

```bash
vsce package
```

## Features

It contains the next options:

- Open the terminal in a new tab editor view using the shortcut `cmd+enter`. // For Windows/Linux  

- Open the terminal in a new tab editor view using the shortcut `ctrl+enter`. // For MacOs

## Usage

1. Use the keyboard shortcut `ctrl+enter` or `cmd+enter` (depending on your operating system) to open the terminal in a new tab editor.

## Installation

Download the `.vsix` file and in Visual Studio Code, go to Extensions > Menu (three dots) > Install from VSIX and select the downloaded file.

## Requirements

No requirements needed.

## Publisher

Created by SSanty9.

## License

MIT
