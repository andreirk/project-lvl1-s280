
start:
	npm run babel-node -- src/bin/brain-games.js
	
publish:
	git push -u origin master
	npm publish 
	