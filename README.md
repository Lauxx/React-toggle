Optimal Webpack for Node & React
================================
================================

Configured For:
  SaSS Loader
  React Hot Model Loader (using express server)
  Babel 5 (because goodluck upgrading react transform to use babel 6)

Tips:
  When doing server dev, simply start server with nodemon.
  When doing client dev, npm run build && npm run start# React-toggle


Context with Jay:

PARENT : any component above the current component
	childContextTypes: { 
		showNotification: React.PropTypes.func
}
//need name: what is type

	getChildContext(){
	return {
		//similar to getInitialState
	}
}

CHILD: any component below the current component
	contextTypes: {
		showNotification: React.PropTypes.func
}

//can now use anywhere in app as this.context