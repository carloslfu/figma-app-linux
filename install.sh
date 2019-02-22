#!/usr/bin/env bash

# Define color variables
CYAN='\033[0;36m'; 
NC='\033[0m' ## NOTE: no color

# Define color output function
output() {
	echo -e "${CYAN} $1 ${NC}"
}

# Clone and build the Figma app
git clone https://github.com/carloslfu/figma-app-linux $HOME/figma-app-linux_x64;
cd $HOME/figma-app-linux_x64;
npm i;
npm run getSrc;
cp ./custom/bindings.js ./app/bindings.js;
cd ./app;
npm i font-manager;
cd ../;
npm run electron-rebuild; ## NOTE: if errors encountered on getting electron sources, just relax. It`s fine.
npm run build;

# Find and install the Figma. Deleting sources
FIGMA_FILE=`ls ./dist | grep 'Figma.*AppImage'`
output 'Copy the Figma binary to /usr/bin/ ...'
sudo rsync --info=progress2 ./dist/$FIGMA_FILE /usr/bin/ && output 'Figma for Linux installed';
# Deleting sources if Figma was installed
if [[ -f /usr/bin/$FIGMA_FILE ]]; then
	cd $HOME;
	echo "Deleting sources..."
	rm -rf $HOME/figma-app-linux_x64 && output 'Sources deleted!';
	# Launching Figma
	output 'Now the Figma will launch'
	sleep 3;
	/usr/bin/$FIGMA_FILE;
fi


